import "@shopify/ui-extensions/preact";
import {render} from 'preact';
import {useState, useEffect, useRef} from 'preact/hooks';

const METAFIELDS_SET_MUTATION = `
  mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields) {
      metafields { key namespace value }
      userErrors { field message }
    }
  }
`;

const METAFIELD_DEFINITION_QUERY = `
  query MetafieldDefinition($key: String!, $namespace: String!, $ownerType: MetafieldOwnerType!) {
    metafieldDefinitions(first: 1, key: $key, namespace: $namespace, ownerType: $ownerType) {
      edges {
        node {
          validations {
            name
            value
          }
        }
      }
    }
  }
`;

const METAOBJECT_DEFINITIONS_QUERY = `
  query MetaobjectDefinitions {
    metaobjectDefinitions(first: 50) {
      edges {
        node {
          id
          type
          name
          fieldDefinitions { key name type { name } }
        }
      }
    }
  }
`;

const COLOR_PATTERNS_QUERY = `
  query ColorPatterns {
    metaobjects(type: "shopify.color-pattern", first: 100) {
      edges {
        node {
          id
          handle
          displayName
          fields { key value }
        }
      }
    }
  }
`;

const PRODUCTS_WITH_STYLE_QUERY = `
  query ProductsWithStyle {
    products(first: 100) {
      edges {
        node {
          legacyResourceId
          title
          featuredImage { url }
          style: metafield(namespace: "product", key: "style") { value }
          sizeList: metafield(namespace: "shopify", key: "size") {
            value
            type
            reference {
              ... on Metaobject {
                id
                handle
                displayName
                type
                fields { key value }
              }
            }
            references(first: 50) {
              edges {
                node {
                  ... on Metaobject {
                    id
                    handle
                    displayName
                    type
                    fields { key value }
                  }
                }
              }
            }
          }
          colorPattern: metafield(namespace: "shopify", key: "color-pattern") {
            value
            type
            reference {
              ... on Metaobject {
                id
                handle
                displayName
                type
                fields { key value }
              }
            }
            references(first: 20) {
              edges {
                node {
                  ... on Metaobject {
                    id
                    handle
                    displayName
                    type
                    fields { key value }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const CUSTOMER_QUERY = `
  query GetCustomer($id: ID!, $ordersQuery: String) {
    customer(id: $id) {
      firstName
      lastName
      createdAt
      lifetimeDuration
      numberOfOrders
      amountSpent { amount currencyCode }
      note
      dataSaleOptOut
      defaultEmailAddress { emailAddress }
      defaultPhoneNumber { phoneNumber }
      birthday: metafield(namespace: "customer", key: "birthday") { value }
      color: metafield(namespace: "customer", key: "color") { value }
      topsize: metafield(namespace: "customer", key: "topsize") { value }
      photo: metafield(namespace: "customer", key: "photo") {
        value
        reference {
          ... on MediaImage { image { url altText } }
          ... on GenericFile { url }
        }
      }
      orders(first: 10, sortKey: CREATED_AT, reverse: true, query: $ordersQuery) {
        edges {
          node {
            createdAt
            lineItems(first: 10) {
              edges {
                node {
                  title
                  sku
                  quantity
                  fulfillmentStatus
                  variant { legacyResourceId product { legacyResourceId } }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {i18n} = shopify;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [editedBirthday, setEditedBirthday] = useState('');
  const [birthdayOptions, setBirthdayOptions] = useState([]);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('customer-info');
  const [customerGid, setCustomerGid] = useState(null);
  const [birthdayOpen, setBirthdayOpen] = useState(false);
  const [editedColor, setEditedColor] = useState('');
  const [colorOptions, setColorOptions] = useState([]);
  const [colorOpen, setColorOpen] = useState(false);
  const [editedTopsize, setEditedTopsize] = useState('');
  const [topsizeOptions, setTopsizeOptions] = useState([]);
  const [topsizeOpen, setTopsizeOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('main');
  const [searchQuery, setSearchQuery] = useState('');
  const [variantResults, setVariantResults] = useState([]);
  const [variantsLoading, setVariantsLoading] = useState(false);
  const [productImage, setProductImage] = useState(null);
  const [variantFilters, setVariantFilters] = useState({});
  const variantFiltersRef = useRef({});
  const [variantOptions, setVariantOptions] = useState({});
  const editedBirthdayRef = useRef('');
  const editedColorRef = useRef('');
  const editedTopsizeRef = useRef('');
  const customerGidRef = useRef(null);
  const searchQueryRef = useRef('');
  const variantResultsRef = useRef([]);
  const [styleOptions, setStyleOptions] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState('');
  const selectedStyleRef = useRef('');
  const [recoVariants, setRecoVariants] = useState([]);
  const [recoLoading, setRecoLoading] = useState(false);
  const recoVariantsRef = useRef([]);
  const [styledProducts, setStyledProducts] = useState([]);
  const [colorPatterns, setColorPatterns] = useState([]);
  const [sizePatterns, setSizePatterns] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const selectedSizeRef = useRef('');
  const [selectedColorPattern, setSelectedColorPattern] = useState('');
  const selectedColorPatternRef = useRef('');
  const [recoSearchValue, setRecoSearchValue] = useState('');
  const recoSearchValueRef = useRef('');
  const [recoSearchResults, setRecoSearchResults] = useState([]);
  const [recoSearchLoading, setRecoSearchLoading] = useState(false);
  const recoSearchResultsRef = useRef([]);

  useEffect(() => {
    const cart = shopify.cart.current.value;
    console.log('[CustomerData] Cart state:', JSON.stringify(cart, null, 2));

    const cartCustomer = cart.customer;
    if (!cartCustomer) {
      console.log('[CustomerData] No customer on cart');
      setLoading(false);
      return;
    }

    console.log('[CustomerData] Cart customer object:', JSON.stringify(cartCustomer, null, 2));

    const rawId = cartCustomer.id;
    if (!rawId) {
      console.log('[CustomerData] Customer object exists but has no id');
      setLoading(false);
      return;
    }

    const gid = String(rawId).startsWith('gid://')
      ? rawId
      : `gid://shopify/Customer/${rawId}`;

    const twelveMonthsAgo = new Date();
    twelveMonthsAgo.setFullYear(twelveMonthsAgo.getFullYear() - 1);
    const ordersQuery = `created_at:>=${twelveMonthsAgo.toISOString().split('T')[0]}`;

    console.log('[CustomerData] Fetching customer with GID:', gid, 'ordersQuery:', ordersQuery);

    const customerFetch = fetch('shopify:admin/api/graphql.json', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        query: CUSTOMER_QUERY,
        variables: {id: gid, ordersQuery},
      }),
    }).then((res) => {
      console.log('[CustomerData] Response status:', res.status);
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }
      return res.json();
    });

    const definitionFetch = fetch('shopify:admin/api/graphql.json', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        query: METAFIELD_DEFINITION_QUERY,
        variables: {key: 'birthday', namespace: 'customer', ownerType: 'CUSTOMER'},
      }),
    }).then((res) => res.json()).catch((err) => {
      console.error('[CustomerData] Definition fetch failed:', err);
      return {};
    });

    const colorDefFetch = fetch('shopify:admin/api/graphql.json', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        query: METAFIELD_DEFINITION_QUERY,
        variables: {key: 'color', namespace: 'customer', ownerType: 'CUSTOMER'},
      }),
    }).then((res) => res.json()).catch(() => ({}));

    const topsizeDefFetch = fetch('shopify:admin/api/graphql.json', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        query: METAFIELD_DEFINITION_QUERY,
        variables: {key: 'topsize', namespace: 'customer', ownerType: 'CUSTOMER'},
      }),
    }).then((res) => res.json()).catch(() => ({}));

    const styleDefFetch = fetch('shopify:admin/api/graphql.json', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        query: METAFIELD_DEFINITION_QUERY,
        variables: {key: 'style', namespace: 'product', ownerType: 'PRODUCT'},
      }),
    }).then((res) => res.json()).catch(() => ({}));

    const productsWithStyleFetch = fetch('shopify:admin/api/graphql.json', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ query: PRODUCTS_WITH_STYLE_QUERY }),
    }).then((res) => res.json()).catch(() => ({}));

    const metaobjectDefsFetch = fetch('shopify:admin/api/graphql.json', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ query: METAOBJECT_DEFINITIONS_QUERY }),
    }).then((res) => res.json()).then((json) => {
      const defs = json.data?.metaobjectDefinitions?.edges?.map((e) => e.node) || [];
      console.log('[CustomerData] ALL metaobject definitions in store:', JSON.stringify(defs.map((d) => ({ type: d.type, name: d.name, fields: d.fieldDefinitions?.map((f) => f.key) })), null, 2));
      if (json.errors) {
        console.error('[CustomerData] MetaobjectDefinitions errors:', JSON.stringify(json.errors, null, 2));
      }
      return json;
    }).catch((err) => {
      console.error('[CustomerData] MetaobjectDefinitions fetch failed:', err);
      return {};
    });

    const colorPatternsFetch = fetch('shopify:admin/api/graphql.json', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ query: COLOR_PATTERNS_QUERY }),
    }).then((res) => {
      console.log('[CustomerData] Color patterns response status:', res.status);
      return res.json();
    }).then((json) => {
      console.log('[CustomerData] Color patterns raw response:', JSON.stringify(json, null, 2));
      if (json.errors) {
        console.error('[CustomerData] Color patterns GraphQL errors:', JSON.stringify(json.errors, null, 2));
      }
      return json;
    }).catch((err) => {
      console.error('[CustomerData] Color patterns fetch failed:', err);
      return {};
    });

    Promise.all([customerFetch, definitionFetch, colorDefFetch, topsizeDefFetch, styleDefFetch, productsWithStyleFetch, colorPatternsFetch, metaobjectDefsFetch])
      .then(([data, defData, colorDefData, topsizeDefData, styleDefData, productsStyleData, colorPatternsData, _metaobjectDefsData]) => {
        console.log('[CustomerData] GraphQL response:', JSON.stringify(data, null, 2));
        console.log('[CustomerData] Definition response:', JSON.stringify(defData, null, 2));

        if (data.errors) {
          const msg = data.errors.map((e) => e.message).join('; ');
          console.error('[CustomerData] GraphQL errors:', msg);
          setError(msg);
          setLoading(false);
          return;
        }

        if (!data.data?.customer) {
          console.error('[CustomerData] No customer in response data');
          setError('Customer not found');
          setLoading(false);
          return;
        }

        setCustomer(data.data.customer);
        console.log('[CustomerData] Birthday metafield raw:', JSON.stringify(data.data.customer.birthday));
        const bday = data.data.customer.birthday?.value || '';
        setEditedBirthday(bday);
        editedBirthdayRef.current = bday;

        const colorVal = data.data.customer.color?.value || '';
        setEditedColor(colorVal);
        editedColorRef.current = colorVal;

        const topsizeVal = data.data.customer.topsize?.value || '';
        setEditedTopsize(topsizeVal);
        editedTopsizeRef.current = topsizeVal;

        setCustomerGid(gid);
        customerGidRef.current = gid;

        const parseChoices = (defResponse) => {
          const node = defResponse.data?.metafieldDefinitions?.edges?.[0]?.node;
          if (!node?.validations) return [];
          const cv = node.validations.find((v) => v.name === 'choices');
          if (!cv?.value) return [];
          try {
            const parsed = JSON.parse(cv.value);
            return Array.isArray(parsed) ? parsed : [];
          } catch { return []; }
        };

        setBirthdayOptions(parseChoices(defData));
        setColorOptions(parseChoices(colorDefData));
        setTopsizeOptions(parseChoices(topsizeDefData));
        setStyleOptions(parseChoices(styleDefData));

        const allProds = productsStyleData.data?.products?.edges
          ?.map((e) => e.node) || [];
        console.log('[CustomerData] Products with style/colorPattern/size raw:', JSON.stringify(allProds.map((p) => ({
          title: p.title,
          style: p.style?.value,
          colorPattern: p.colorPattern,
          sizeList: p.sizeList,
        })), null, 2));
        if (productsStyleData.errors) {
          console.error('[CustomerData] Products query errors:', JSON.stringify(productsStyleData.errors, null, 2));
        }

        const prods = allProds.filter((p) => p.style?.value);
        setStyledProducts(allProds);

        const patternMap = new Map();
        for (const p of allProds) {
          const cp = p.colorPattern;
          if (!cp) continue;
          if (cp.reference?.id) {
            patternMap.set(cp.reference.id, cp.reference);
          }
          if (cp.references?.edges) {
            for (const edge of cp.references.edges) {
              if (edge.node?.id) patternMap.set(edge.node.id, edge.node);
            }
          }
          if (!cp.reference && !cp.references?.edges?.length && cp.value) {
            console.log('[CustomerData] colorPattern has value but no reference/references:', cp.value, cp.type);
          }
        }
        const patterns = Array.from(patternMap.values());
        console.log('[CustomerData] Color patterns from products:', JSON.stringify(patterns, null, 2));
        console.log('[CustomerData] Color patterns count:', patterns.length);
        for (const pat of patterns) {
          console.log('[CustomerData] Pattern fields for', pat.displayName || pat.handle, ':', JSON.stringify(pat.fields, null, 2));
        }
        if (patterns.length === 0) {
          console.warn('[CustomerData] No color patterns found on any product. Check that products have shopify.color-pattern metafield set.');
        }
        setColorPatterns(patterns);

        const sizeMap = new Map();
        for (const p of allProds) {
          const sl = p.sizeList;
          if (!sl) continue;
          if (sl.reference?.id) {
            sizeMap.set(sl.reference.id, sl.reference);
          }
          if (sl.references?.edges) {
            for (const edge of sl.references.edges) {
              if (edge.node?.id) sizeMap.set(edge.node.id, edge.node);
            }
          }
          if (!sl.reference && !sl.references?.edges?.length && sl.value) {
            console.log('[CustomerData] sizeList has value but no reference/references:', sl.value, sl.type);
          }
        }
        const sizes = Array.from(sizeMap.values());
        console.log('[CustomerData] Size patterns from products:', JSON.stringify(sizes, null, 2));
        console.log('[CustomerData] Size patterns count:', sizes.length);
        if (sizes.length === 0) {
          console.warn('[CustomerData] No size patterns found on any product. Check that products have shopify.size metafield set.');
        }
        setSizePatterns(sizes);

        setLoading(false);
      })
      .catch((err) => {
        console.error('[CustomerData] Fetch error:', err);
        setError(err.message || 'Unknown error');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!customer?.orders?.edges) return;
    const variantIds = [];
    for (const orderEdge of customer.orders.edges) {
      for (const lineEdge of orderEdge.node.lineItems.edges) {
        const vid = lineEdge.node.variant?.legacyResourceId;
        if (vid) variantIds.push(Number(vid));
      }
    }
    const uniqueIds = [...new Set(variantIds)];
    if (uniqueIds.length === 0) return;

    Promise.all(
      uniqueIds.map((vid) =>
        shopify.productSearch.fetchProductVariantWithId(vid)
          .then((v) => {
            if (!v?.options) return null;
            const opts = v.options
              .filter((o) => ['color', 'size'].includes(o.name.toLowerCase()))
              .map((o) => o.value);
            return opts.length > 0 ? [vid, opts.join(' / ')] : null;
          })
          .catch(() => null)
      )
    ).then((results) => {
      const map = {};
      for (const r of results) {
        if (r) map[r[0]] = r[1];
      }
      setVariantOptions(map);
    });
  }, [customer]);

  if (loading) {
    return (
      <s-page heading={i18n.translate('modal_heading')}>
        <s-scroll-box>
          <s-section>
            <s-spinner />
            <s-text>{i18n.translate('loading')}</s-text>
          </s-section>
        </s-scroll-box>
      </s-page>
    );
  }

  if (error) {
    return (
      <s-page heading={i18n.translate('modal_heading')}>
        <s-scroll-box>
          <s-section>
            <s-banner status="critical">
              {i18n.translate('error')}: {error}
            </s-banner>
          </s-section>
        </s-scroll-box>
      </s-page>
    );
  }

  if (!customer) {
    return (
      <s-page heading={i18n.translate('modal_heading')}>
        <s-scroll-box>
          <s-section>
            <s-banner status="warning">{i18n.translate('no_customer')}</s-banner>
          </s-section>
        </s-scroll-box>
      </s-page>
    );
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return i18n.translate('not_available');
    return new Date(dateStr).toLocaleDateString();
  };

  const getRecentLineItems = () => {
    if (!customer?.orders?.edges) return [];
    const all = [];
    for (const orderEdge of customer.orders.edges) {
      const order = orderEdge.node;
      for (const lineEdge of order.lineItems.edges) {
        all.push({
          ...lineEdge.node,
          variantId: lineEdge.node.variant?.legacyResourceId ? Number(lineEdge.node.variant.legacyResourceId) : null,
          productId: lineEdge.node.variant?.product?.legacyResourceId ? Number(lineEdge.node.variant.product.legacyResourceId) : null,
          orderDate: order.createdAt,
        });
      }
    }
    const dedupMap = new Map();
    for (const item of all) {
      const key = item.sku || item.title;
      const existing = dedupMap.get(key);
      if (!existing) {
        dedupMap.set(key, item);
      } else if (item.fulfillmentStatus === 'FULFILLED' && existing.fulfillmentStatus !== 'FULFILLED') {
        dedupMap.set(key, item);
      }
    }
    return Array.from(dedupMap.values()).slice(0, 6);
  };

  const handleSaveBirthday = () => {
    const currentGid = customerGidRef.current;
    setSaving(true);
    fetch('shopify:admin/api/graphql.json', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        query: METAFIELDS_SET_MUTATION,
        variables: {
          metafields: [
            { ownerId: currentGid, namespace: 'customer', key: 'birthday', type: 'single_line_text_field', value: editedBirthdayRef.current },
            { ownerId: currentGid, namespace: 'customer', key: 'color', type: 'single_line_text_field', value: editedColorRef.current },
            { ownerId: currentGid, namespace: 'customer', key: 'topsize', type: 'single_line_text_field', value: editedTopsizeRef.current },
          ],
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data?.metafieldsSet?.userErrors?.length > 0) {
          const msg = data.data.metafieldsSet.userErrors.map((e) => e.message).join('; ');
          console.error('[CustomerData] Save errors:', msg);
          shopify.toast.show('Failed to save');
        } else {
          shopify.toast.show('Saved successfully');
        }
        setSaving(false);
      })
      .catch((err) => {
        console.error('[CustomerData] Save error:', err);
        shopify.toast.show('Failed to save');
        setSaving(false);
      });
  };

  if (currentPage === 'recommendations') {
    return (
      <s-page heading="Product Recommendations">
        <s-scroll-box>
          <s-section>
            <s-stack direction="block" gap="base" padding="base large">
              <s-search-field placeholder="Search products..." value={searchQuery} ref={(el) => {
                if (el && !el._recoPageSearchHandler) {
                  el._recoPageSearchHandler = true;
                  el.addEventListener('change', (e) => {
                    const query = e.currentTarget.value;
                    setSearchQuery(query);
                    searchQueryRef.current = query;
                    if (!query) {
                      setRecoSearchResults([]);
                      recoSearchResultsRef.current = [];
                      return;
                    }
                    setRecoSearchLoading(true);
                    shopify.productSearch.searchProducts({queryString: query})
                      .then((results) => {
                        const products = results?.items || [];
                        if (products.length === 0) {
                          setRecoSearchResults([]);
                          recoSearchResultsRef.current = [];
                          setRecoSearchLoading(false);
                          return;
                        }
                        return Promise.all(
                          products.map((product) =>
                            shopify.productSearch.fetchProductVariantsWithProductId(product.id)
                              .then((variants) => variants.map((v) => ({
                                ...v,
                                productTitle: product.title,
                                productImage: product.featuredImage || null,
                              })))
                              .catch(() => [])
                          )
                        ).then((allVariants) => {
                          const flat = allVariants.flat();
                          setRecoSearchResults(flat);
                          recoSearchResultsRef.current = flat;
                          setRecoSearchLoading(false);
                        });
                      })
                      .catch((err) => {
                        console.error('[CustomerData] Reco page search error:', err);
                        setRecoSearchResults([]);
                        recoSearchResultsRef.current = [];
                        setRecoSearchLoading(false);
                      });
                  });
                }
              }} />

              {recoSearchLoading && <s-spinner />}

              {recoSearchResults.length > 0 && (
                <>
                  <s-stack direction="inline" gap="small" alignItems="center" inlineSize="fill">
                    <s-box inlineSize="48px" />
                    <s-box inlineSize="25%"><s-text type="strong">Product</s-text></s-box>
                    <s-box inlineSize="20%"><s-text type="strong">Variant</s-text></s-box>
                    <s-box inlineSize="15%"><s-text type="strong">Price</s-text></s-box>
                    <s-box inlineSize="12%"><s-text type="strong">In Stock</s-text></s-box>
                    <s-box inlineSize="10%" />
                  </s-stack>
                  {recoSearchResults.map((variant, idx) => (
                    <s-stack key={idx} direction="inline" gap="small" alignItems="center" inlineSize="fill">
                      <s-box inlineSize="48px" blockSize="48px">
                        {(variant.image || variant.productImage) ? (
                          <s-image src={variant.image || variant.productImage} alt={variant.title} inlineSize="fill" objectFit="cover" />
                        ) : (
                          <s-box />
                        )}
                      </s-box>
                      <s-box inlineSize="25%"><s-text>{variant.productTitle}</s-text></s-box>
                      <s-box inlineSize="20%"><s-text>{variant.title}</s-text></s-box>
                      <s-box inlineSize="15%"><s-text>${variant.price}</s-text></s-box>
                      <s-box inlineSize="12%"><s-text>{variant.inventoryAtLocation != null ? variant.inventoryAtLocation : '—'}</s-text></s-box>
                      <s-box inlineSize="10%">
                        <s-button variant="plain" ref={(el) => {
                          const handlerKey = `_addRecoResult_${idx}`;
                          if (el && !el[handlerKey]) {
                            el[handlerKey] = true;
                            el.addEventListener('click', () => {
                              const v = recoSearchResultsRef.current[idx];
                              if (!v) return;
                              shopify.cart.addLineItem(v.id, 1)
                                .then(() => shopify.toast.show(`Added ${v.title} to cart`))
                                .catch(() => shopify.toast.show('Failed to add to cart'));
                            });
                          }
                        }}>Add</s-button>
                      </s-box>
                    </s-stack>
                  ))}
                </>
              )}

              {!recoSearchLoading && searchQuery && recoSearchResults.length === 0 && (
                <s-text>No products found for "{searchQuery}"</s-text>
              )}

              <s-button variant="primary" ref={(el) => {
                if (el && !el._recoBackHandler) {
                  el._recoBackHandler = true;
                  el.addEventListener('click', () => {
                    setCurrentPage('main');
                    setSearchQuery('');
                    searchQueryRef.current = '';
                    setRecoSearchResults([]);
                    recoSearchResultsRef.current = [];
                    setRecoSearchLoading(false);
                  });
                }
              }}>Back</s-button>
            </s-stack>
          </s-section>
        </s-scroll-box>
      </s-page>
    );
  }

  if (currentPage === 'variants') {
    return (
      <s-page heading="Select Variant">
        <s-scroll-box>
          <s-section>
            <s-stack direction="block" gap="base" padding="base large">
              <s-search-field placeholder="Search products..." value={searchQuery} ref={(el) => {
                if (el && !el._searchHandler) {
                  el._searchHandler = true;
                  el.addEventListener('change', (e) => {
                    const query = e.currentTarget.value;
                    setSearchQuery(query);
                    searchQueryRef.current = query;
                    if (!query) {
                      setVariantResults([]);
                      variantResultsRef.current = [];
                      return;
                    }
                    setVariantsLoading(true);
                    setProductImage(null);
                    setVariantFilters({});
                    variantFiltersRef.current = {};
                    shopify.productSearch.searchProducts({queryString: query})
                      .then((results) => {
                        const product = results?.items?.[0];
                        if (product?.id) {
                          if (product.featuredImage) setProductImage(product.featuredImage);
                          return shopify.productSearch.fetchProductVariantsWithProductId(product.id)
                            .then((variants) => {
                              setVariantResults(variants);
                              variantResultsRef.current = variants;
                              setVariantsLoading(false);
                            });
                        }
                        setVariantResults([]);
                        variantResultsRef.current = [];
                        setVariantsLoading(false);
                      })
                      .catch((err) => {
                        console.error('[CustomerData] Product search error:', err);
                        setVariantResults([]);
                        variantResultsRef.current = [];
                        setVariantsLoading(false);
                      });
                  });
                }
              }} />

              {variantsLoading && <s-spinner />}

              {(() => {
                const optionGroups = {};
                for (const v of variantResults) {
                  if (!v.options) continue;
                  for (const opt of v.options) {
                    if (!optionGroups[opt.name]) optionGroups[opt.name] = new Set();
                    optionGroups[opt.name].add(opt.value);
                  }
                }
                const groupEntries = Object.entries(optionGroups).map(([name, valSet]) => ({
                  name,
                  values: [...valSet],
                }));

                const filtered = variantResults.filter((v) => {
                  for (const [optName, optVal] of Object.entries(variantFilters)) {
                    if (!optVal) continue;
                    const match = v.options?.find((o) => o.name === optName);
                    if (!match || match.value !== optVal) return false;
                  }
                  return true;
                });

                return (
                  <>
                    {groupEntries.map((group) => (
                      <s-stack key={group.name} direction="inline" gap="small" alignItems="center">
                        <s-text type="strong">{group.name}:</s-text>
                        <s-button variant={!variantFilters[group.name] ? 'primary' : 'plain'} ref={(el) => {
                          const handlerKey = `_filterAll_${group.name}`;
                          if (el && !el[handlerKey]) {
                            el[handlerKey] = true;
                            el.addEventListener('click', () => {
                              const next = {...variantFiltersRef.current, [group.name]: ''};
                              setVariantFilters(next);
                              variantFiltersRef.current = next;
                            });
                          }
                        }}>All</s-button>
                        {group.values.map((val) => (
                          <s-button key={val} variant={variantFilters[group.name] === val ? 'primary' : 'plain'} ref={(el) => {
                            const handlerKey = `_filter_${group.name}_${val}`;
                            if (el && !el[handlerKey]) {
                              el[handlerKey] = true;
                              el.addEventListener('click', () => {
                                const next = {...variantFiltersRef.current, [group.name]: val};
                                setVariantFilters(next);
                                variantFiltersRef.current = next;
                              });
                            }
                          }}>{val}</s-button>
                        ))}
                      </s-stack>
                    ))}

                    {filtered.length > 0 && (
                      <s-stack direction="inline" gap="small" alignItems="center" inlineSize="fill">
                        <s-box inlineSize="48px" />
                        <s-box inlineSize="35%"><s-text type="strong">Variant</s-text></s-box>
                        <s-box inlineSize="15%"><s-text type="strong">Price</s-text></s-box>
                        <s-box inlineSize="12%"><s-text type="strong">In Stock</s-text></s-box>
                        <s-box inlineSize="10%" />
                      </s-stack>
                    )}

                    {filtered.map((variant, idx) => (
                      <s-stack key={idx} direction="inline" gap="small" alignItems="center" inlineSize="fill">
                        <s-box inlineSize="48px" blockSize="48px">
                          {(variant.image || productImage) ? (
                            <s-image src={variant.image || productImage} alt={variant.title} inlineSize="fill" objectFit="cover" />
                          ) : (
                            <s-box />
                          )}
                        </s-box>
                        <s-box inlineSize="35%"><s-text>{variant.title}</s-text></s-box>
                        <s-box inlineSize="15%"><s-text>${variant.price}</s-text></s-box>
                        <s-box inlineSize="12%"><s-text>{variant.inventoryAtLocation != null ? variant.inventoryAtLocation : '—'}</s-text></s-box>
                        <s-box inlineSize="10%">
                          <s-button variant="plain" ref={(el) => {
                            const handlerKey = `_addVariant_${idx}`;
                            if (el && !el[handlerKey]) {
                              el[handlerKey] = true;
                              el.addEventListener('click', () => {
                                const v = variantResultsRef.current[idx];
                                if (!v) return;
                                shopify.cart.addLineItem(v.id, 1)
                                  .then(() => shopify.toast.show(`Added ${v.title} to cart`))
                                  .catch((err) => {
                                    console.error('[CustomerData] Add variant to cart error:', err);
                                    shopify.toast.show('Failed to add to cart');
                                  });
                              });
                            }
                          }}>Add</s-button>
                        </s-box>
                      </s-stack>
                    ))}
                  </>
                );
              })()}

              <s-button variant="primary" ref={(el) => {
                if (el && !el._backHandler) {
                  el._backHandler = true;
                  el.addEventListener('click', () => {
                    setCurrentPage('main');
                    setSearchQuery('');
                    searchQueryRef.current = '';
                    setVariantResults([]);
                    variantResultsRef.current = [];
                    setVariantsLoading(false);
                    setProductImage(null);
                    setVariantFilters({});
                    variantFiltersRef.current = {};
                  });
                }
              }}>Back</s-button>
            </s-stack>
          </s-section>
        </s-scroll-box>
      </s-page>
    );
  }

  return (
    <s-page heading={i18n.translate('modal_heading')}>
      <s-scroll-box>
        <s-section>
          <s-box padding="none none none large-200">
          <s-stack direction="block" gap="large" alignContent="stretch" alignItems="stretch" padding="base large">
            <s-tabs defaultValue="customer-info" ref={(el) => {
              if (el && !el._tabChangeHandler) {
                el._tabChangeHandler = true;
                el.addEventListener('change', (event) => {
                  setActiveTab(event.currentTarget.value);
                });
              }
            }}>
              <s-tab-list>
                <s-tab controls="customer-info">Customer Info</s-tab>
                <s-tab controls="recent-purchases">Recent Purchases</s-tab>
                <s-tab controls="product-recommendations">Product Recommendations</s-tab>
              </s-tab-list>

              <s-tab-panel id="customer-info">
            {/* Lines 1-2 with Image on right */}
            <s-stack direction="block" gap="large" padding="base none">
            <s-stack direction="inline" gap="base" alignItems="start">
              <s-stack direction="block" gap="large" inlineSize="fill">
                {/* Line 1: First, Last, Acquired */}
                <s-stack direction="inline" gap="base" alignItems="center">
                  <s-box inlineSize="32%">
                    <s-text><s-text type="strong">First:</s-text> {customer.firstName}</s-text>
                  </s-box>
                  <s-box inlineSize="24%">
                    <s-text><s-text type="strong">Last:</s-text> {customer.lastName}</s-text>
                  </s-box>
                  <s-box inlineSize="28%">
                    <s-text><s-text type="strong">{i18n.translate('acquired')}:</s-text> {formatDate(customer.createdAt)}</s-text>
                  </s-box>
                </s-stack>

                {/* Line 2: Loyalty, Frequency, Spend */}
                <s-stack direction="inline" gap="base" alignItems="center">
                  <s-box inlineSize="32%">
                    <s-text><s-text type="strong">Loyalty:</s-text> {customer.lifetimeDuration || i18n.translate('not_available')}</s-text>
                  </s-box>
                  <s-box inlineSize="24%">
                    <s-text><s-text type="strong">{i18n.translate('frequency')}:</s-text> {customer.numberOfOrders}</s-text>
                  </s-box>
                  <s-box inlineSize="28%">
                    <s-text><s-text type="strong">Spend:</s-text> ${customer.amountSpent.amount}</s-text>
                  </s-box>
                </s-stack>

                {/* Line 3: Birthday, Color, Top Size */}
                <s-stack direction="inline" gap="base" alignItems="start">
                  <s-box inlineSize="32%">
                    {birthdayOptions.length > 0 ? (
                      <s-stack direction="block" gap="small">
                        <s-stack direction="inline" gap="small" alignItems="center">
                          <s-text type="strong">{i18n.translate('birthday')}:</s-text>
                          <s-button variant="plain" ref={(el) => {
                            if (el && !el._toggleHandler) {
                              el._toggleHandler = true;
                              el.addEventListener('click', () => {
                                setBirthdayOpen((prev) => !prev);
                              });
                            }
                          }}>{editedBirthday || '-- Select --'}</s-button>
                        </s-stack>
                        {birthdayOpen && (
                          <s-choice-list values={[editedBirthday]} ref={(el) => {
                            if (el && !el._birthdayHandler) {
                              el._birthdayHandler = true;
                              el.addEventListener('change', (e) => {
                                const selected = e.currentTarget.values;
                                const val = selected?.[0] || '';
                                setEditedBirthday(val);
                                editedBirthdayRef.current = val;
                                setBirthdayOpen(false);
                              });
                            }
                          }}>
                            {birthdayOptions.map((opt) => (
                              <s-choice key={opt} value={opt} selected={opt === editedBirthday}>{opt}</s-choice>
                            ))}
                          </s-choice-list>
                        )}
                      </s-stack>
                    ) : (
                      <s-text><s-text type="strong">{i18n.translate('birthday')}:</s-text> {customer.birthday?.value || i18n.translate('not_available')}</s-text>
                    )}
                  </s-box>
                  <s-box inlineSize="24%">
                    {colorOptions.length > 0 ? (
                      <s-stack direction="block" gap="small">
                        <s-stack direction="inline" gap="small" alignItems="center">
                          <s-text type="strong">Color:</s-text>
                          <s-button variant="plain" ref={(el) => {
                            if (el && !el._colorToggle) {
                              el._colorToggle = true;
                              el.addEventListener('click', () => setColorOpen((prev) => !prev));
                            }
                          }}>{editedColor || '-- Select --'}</s-button>
                        </s-stack>
                        {colorOpen && (
                          <s-choice-list values={[editedColor]} ref={(el) => {
                            if (el && !el._colorHandler) {
                              el._colorHandler = true;
                              el.addEventListener('change', (e) => {
                                const val = e.currentTarget.values?.[0] || '';
                                setEditedColor(val);
                                editedColorRef.current = val;
                                setColorOpen(false);
                              });
                            }
                          }}>
                            {colorOptions.map((opt) => (
                              <s-choice key={opt} value={opt} selected={opt === editedColor}>{opt}</s-choice>
                            ))}
                          </s-choice-list>
                        )}
                      </s-stack>
                    ) : (
                      <s-text><s-text type="strong">Color:</s-text> {customer.color?.value || i18n.translate('not_available')}</s-text>
                    )}
                  </s-box>
                  <s-box inlineSize="28%">
                    {topsizeOptions.length > 0 ? (
                      <s-stack direction="block" gap="small">
                        <s-stack direction="inline" gap="small" alignItems="center">
                          <s-text type="strong">Top Size:</s-text>
                          <s-button variant="plain" ref={(el) => {
                            if (el && !el._topsizeToggle) {
                              el._topsizeToggle = true;
                              el.addEventListener('click', () => setTopsizeOpen((prev) => !prev));
                            }
                          }}>{editedTopsize || '-- Select --'}</s-button>
                        </s-stack>
                        {topsizeOpen && (
                          <s-choice-list values={[editedTopsize]} ref={(el) => {
                            if (el && !el._topsizeHandler) {
                              el._topsizeHandler = true;
                              el.addEventListener('change', (e) => {
                                const val = e.currentTarget.values?.[0] || '';
                                setEditedTopsize(val);
                                editedTopsizeRef.current = val;
                                setTopsizeOpen(false);
                              });
                            }
                          }}>
                            {topsizeOptions.map((opt) => (
                              <s-choice key={opt} value={opt} selected={opt === editedTopsize}>{opt}</s-choice>
                            ))}
                          </s-choice-list>
                        )}
                      </s-stack>
                    ) : (
                      <s-text><s-text type="strong">Top Size:</s-text> {customer.topsize?.value || i18n.translate('not_available')}</s-text>
                    )}
                  </s-box>
                </s-stack>

                {/* Line 4: Opt Out + Phone */}
                <s-stack direction="inline" gap="base" alignItems="center">
                  <s-box inlineSize="32%">
                    <s-text><s-text type="strong">{i18n.translate('opt_out')}:</s-text> {customer.dataSaleOptOut ? i18n.translate('yes') : i18n.translate('no')}</s-text>
                  </s-box>
                  <s-box inlineSize="24%">
                    <s-text><s-text type="strong">Phone:</s-text> {customer.defaultPhoneNumber?.phoneNumber || i18n.translate('not_available')}</s-text>
                  </s-box>
                </s-stack>
                {/* Email */}
                <s-text><s-text type="strong">Email:</s-text> {customer.defaultEmailAddress?.emailAddress || i18n.translate('not_available')}</s-text>

                {/* Line 5: Note */}
                <s-text><s-text type="strong">{i18n.translate('note')}:</s-text> {customer.note || i18n.translate('not_available')}</s-text>
              </s-stack>

              {/* Customer photo */}
              <s-box>
                {(customer.photo?.reference?.image?.url || customer.photo?.reference?.url || customer.photo?.value) ? (
                  <s-box inlineSize="72px" blockSize="72px">
                    <s-image src={customer.photo.reference?.image?.url || customer.photo.reference?.url || customer.photo.value} alt={`${customer.firstName} ${customer.lastName}`} inlineSize="fill" objectFit="cover" />
                  </s-box>
                ) : (
                  <s-box />
                )}
              </s-box>
            </s-stack>
            </s-stack>
              </s-tab-panel>

              <s-tab-panel id="recent-purchases">
            {(() => {
              const lineItems = getRecentLineItems();
              if (lineItems.length === 0) return <s-text>No recent purchases</s-text>;
              return (
                <s-stack direction="block" gap="small" padding="base none">
                  <s-stack direction="inline" gap="small" alignItems="center" inlineSize="fill">
                    <s-box inlineSize="30%"><s-text type="strong">Item</s-text></s-box>
                    <s-box inlineSize="7%"><s-text type="strong">Qty</s-text></s-box>
                    <s-box inlineSize="23%"><s-text type="strong">Status</s-text></s-box>
                    <s-box inlineSize="18%"><s-text type="strong">Date</s-text></s-box>
                    <s-box inlineSize="10%" />
                  </s-stack>
                  {lineItems.map((item, idx) => (
                    <s-stack key={idx} direction="inline" gap="small" alignItems="center" inlineSize="fill">
                      <s-box inlineSize="30%"><s-text>{item.title}{item.variantId && variantOptions[item.variantId] ? ` (${variantOptions[item.variantId]})` : ''}</s-text></s-box>
                      <s-box inlineSize="7%"><s-text>{item.quantity}</s-text></s-box>
                      <s-box inlineSize="23%"><s-text>{item.fulfillmentStatus || 'UNFULFILLED'}</s-text></s-box>
                      <s-box inlineSize="18%"><s-text>{formatDate(item.orderDate)}</s-text></s-box>
                      <s-box inlineSize="10%">
                        {item.variantId ? (
                          <s-button variant="plain" ref={(el) => {
                            const handlerKey = `_addToCart_${idx}`;
                            if (el && !el[handlerKey]) {
                              el[handlerKey] = true;
                              el.addEventListener('click', () => {
                                if (item.productId) {
                                  setSearchQuery(item.title);
                                  searchQueryRef.current = item.title;
                                  setVariantsLoading(true);
                                  setProductImage(null);
                                  setVariantFilters({});
                                  variantFiltersRef.current = {};
                                  setCurrentPage('variants');
                                  Promise.all([
                                    shopify.productSearch.fetchProductVariantsWithProductId(item.productId),
                                    shopify.productSearch.fetchProductWithId(item.productId).catch(() => null),
                                  ])
                                    .then(([variants, product]) => {
                                      setVariantResults(variants);
                                      variantResultsRef.current = variants;
                                      if (product?.featuredImage) setProductImage(product.featuredImage);
                                      setVariantsLoading(false);
                                    })
                                    .catch((err) => {
                                      console.error('[CustomerData] Fetch variants error:', err);
                                      setVariantResults([]);
                                      variantResultsRef.current = [];
                                      setVariantsLoading(false);
                                    });
                                } else {
                                  shopify.cart.addLineItem(item.variantId, 1)
                                    .then(() => shopify.toast.show(`Added ${item.title} to cart`))
                                    .catch((err) => {
                                      console.error('[CustomerData] Add to cart error:', err);
                                      shopify.toast.show('Failed to add to cart');
                                    });
                                }
                              });
                            }
                          }}>Add</s-button>
                        ) : (
                          <s-text color="subdued">N/A</s-text>
                        )}
                      </s-box>
                    </s-stack>
                  ))}
                </s-stack>
              );
            })()}
              </s-tab-panel>

              <s-tab-panel id="product-recommendations">
                <s-stack direction="block" gap="large" padding="base none">
                  {/* Search field */}
                  <s-text-field label="Search" value={recoSearchValue} ref={(el) => {
                    if (el && !el._recoSearchHandler) {
                      el._recoSearchHandler = true;
                      el.addEventListener('input', (event) => {
                        const val = event.currentTarget.value || '';
                        setRecoSearchValue(val);
                        recoSearchValueRef.current = val;
                      });
                    }
                  }} />

                  <s-stack direction="inline" gap="base" alignItems="center">
                    <s-text type="strong">Customer Preferences</s-text>
                    <s-box inlineSize="32%">
                      <s-text><s-text type="strong">Color:</s-text> {editedColor || i18n.translate('not_available')}</s-text>
                    </s-box>
                    <s-box inlineSize="32%">
                      <s-text><s-text type="strong">Top Size:</s-text> {editedTopsize || i18n.translate('not_available')}</s-text>
                    </s-box>
                  </s-stack>

                  {/* Style choice list */}
                  {styleOptions.length > 0 && (
                    <s-stack direction="block" gap="small">
                      <s-text type="strong">Style:</s-text>
                      <s-stack direction="inline" gap="small" style="flex-wrap: wrap;">
                        {styleOptions.map((style) => (
                          <s-choice-list key={style} values={selectedStyle === style ? [style] : []} ref={(el) => {
                            const handlerKey = `_styleSelect_${style}`;
                            if (el && !el[handlerKey]) {
                              el[handlerKey] = true;
                              el.addEventListener('change', () => {
                                const alreadySelected = selectedStyleRef.current === style;
                                if (alreadySelected) {
                                  setSelectedStyle('');
                                  selectedStyleRef.current = '';
                                  setRecoSearchValue((prev) => {
                                    const val = prev ? prev.split(', ').filter((p) => p !== style).join(', ') : '';
                                    recoSearchValueRef.current = val;
                                    return val;
                                  });
                                } else {
                                  setSelectedStyle(style);
                                  selectedStyleRef.current = style;
                                  setRecoSearchValue((prev) => {
                                    const parts = prev ? prev.split(', ').filter((p) => !styleOptions.includes(p)) : [];
                                    parts.unshift(style);
                                    const val = parts.join(', ');
                                    recoSearchValueRef.current = val;
                                    return val;
                                  });
                                }
                              });
                            }
                          }}>
                            <s-choice value={style}>{style}</s-choice>
                          </s-choice-list>
                        ))}
                      </s-stack>
                    </s-stack>
                  )}

                  {/* Size */}
                  {sizePatterns.length > 0 && (
                    <s-stack direction="block" gap="small">
                      <s-text type="strong">Size:</s-text>
                      <s-stack direction="inline" gap="small" style="flex-wrap: wrap;">
                        {sizePatterns.map((size) => {
                          const nameField = size.fields?.find((f) => f.key === 'name');
                          const label = nameField?.value || size.displayName || size.handle;
                          return (
                            <s-choice-list key={size.id} values={selectedSize === label ? [size.id] : []} ref={(el) => {
                              const handlerKey = `_sizeSelect_${size.id}`;
                              if (el && !el[handlerKey]) {
                                el[handlerKey] = true;
                                el.addEventListener('change', () => {
                                  const alreadySelected = selectedSizeRef.current === label;
                                  if (alreadySelected) {
                                    setSelectedSize('');
                                    selectedSizeRef.current = '';
                                    setRecoSearchValue((prev) => {
                                      const val = prev ? prev.split(', ').filter((p) => p !== label).join(', ') : '';
                                      recoSearchValueRef.current = val;
                                      return val;
                                    });
                                  } else {
                                    setSelectedSize(label);
                                    selectedSizeRef.current = label;
                                    setRecoSearchValue((prev) => {
                                      const allSizeLabels = sizePatterns.map((s) => {
                                        const nf = s.fields?.find((f) => f.key === 'name');
                                        return nf?.value || s.displayName || s.handle;
                                      });
                                      const parts = prev ? prev.split(', ').filter((p) => !allSizeLabels.includes(p)) : [];
                                      parts.push(label);
                                      const val = parts.join(', ');
                                      recoSearchValueRef.current = val;
                                      return val;
                                    });
                                  }
                                });
                              }
                            }}>
                              <s-choice value={size.id}>{label}</s-choice>
                            </s-choice-list>
                          );
                        })}
                      </s-stack>
                    </s-stack>
                  )}

                  {/* Color Patterns */}
                  {colorPatterns.length > 0 && (
                    <s-stack direction="block" gap="small">
                      <s-text type="strong">Color Patterns:</s-text>
                      <s-stack direction="inline" gap="small" style="flex-wrap: wrap;">
                        {colorPatterns.map((pattern) => {
                          const nameField = pattern.fields?.find((f) => f.key === 'name');
                          const label = nameField?.value || pattern.displayName || pattern.handle;
                          const COLOR_HEX_MAP = {
                            'black': '#0A0A0A',
                            'gray': '#D3D3D3',
                            'beige': '#F5F5DC',
                            'white': '#FFFFFF',
                            'brown': '#964B00',
                            'blue': '#0000FF',
                          };
                          const hex = COLOR_HEX_MAP[label.toLowerCase()] || null;
                          return (
                            <s-choice-list key={pattern.id} ref={(el) => {
                              const handlerKey = `_colorSelect_${pattern.id}`;
                              if (el && !el[handlerKey]) {
                                el[handlerKey] = true;
                                el.addEventListener('change', () => {
                                  const alreadySelected = selectedColorPatternRef.current === label;
                                  if (alreadySelected) {
                                    setSelectedColorPattern('');
                                    selectedColorPatternRef.current = '';
                                    setRecoSearchValue((prev) => {
                                      const val = prev ? prev.split(', ').filter((p) => p !== label).join(', ') : '';
                                      recoSearchValueRef.current = val;
                                      return val;
                                    });
                                  } else {
                                    setSelectedColorPattern(label);
                                    selectedColorPatternRef.current = label;
                                    setRecoSearchValue((prev) => {
                                      const allColorLabels = colorPatterns.map((cp) => {
                                        const nf = cp.fields?.find((f) => f.key === 'name');
                                        return nf?.value || cp.displayName || cp.handle;
                                      });
                                      const parts = prev ? prev.split(', ').filter((p) => !allColorLabels.includes(p)) : [];
                                      parts.push(label);
                                      const val = parts.join(', ');
                                      recoSearchValueRef.current = val;
                                      return val;
                                    });
                                  }
                                });
                              }
                            }}>
                              <s-choice value={pattern.id}>
                                <s-stack direction="inline" gap="small-200" alignItems="center">
                                  {hex && (
                                    <s-box inlineSize="20px" blockSize="20px" style={`background-color: ${hex}; border-radius: 4px; border: 1px solid #ccc;`} />
                                  )}
                                  <s-text>{label}</s-text>
                                </s-stack>
                              </s-choice>
                            </s-choice-list>
                          );
                        })}
                      </s-stack>
                    </s-stack>
                  )}

                  {/* Show Recommendations button */}
                  <s-button variant="primary" ref={(el) => {
                    if (el && !el._showRecoHandler) {
                      el._showRecoHandler = true;
                      el.addEventListener('click', () => {
                        const query = recoSearchValueRef.current;
                        if (!query) {
                          shopify.toast.show('Please make a selection first');
                          return;
                        }
                        setSearchQuery(query);
                        searchQueryRef.current = query;
                        setRecoSearchResults([]);
                        recoSearchResultsRef.current = [];
                        setRecoSearchLoading(true);
                        setCurrentPage('recommendations');

                        shopify.productSearch.searchProducts({queryString: query})
                          .then((results) => {
                            const products = results?.items || [];
                            if (products.length === 0) {
                              setRecoSearchResults([]);
                              recoSearchResultsRef.current = [];
                              setRecoSearchLoading(false);
                              return;
                            }
                            return Promise.all(
                              products.map((product) =>
                                shopify.productSearch.fetchProductVariantsWithProductId(product.id)
                                  .then((variants) => variants.map((v) => ({
                                    ...v,
                                    productTitle: product.title,
                                    productImage: product.featuredImage || null,
                                  })))
                                  .catch(() => [])
                              )
                            ).then((allVariants) => {
                              const flat = allVariants.flat();
                              setRecoSearchResults(flat);
                              recoSearchResultsRef.current = flat;
                              setRecoSearchLoading(false);
                            });
                          })
                          .catch((err) => {
                            console.error('[CustomerData] Reco search error:', err);
                            setRecoSearchResults([]);
                            recoSearchResultsRef.current = [];
                            setRecoSearchLoading(false);
                          });
                      });
                    }
                  }}>Show Recommendations</s-button>

                  {recoLoading && <s-spinner />}

                  {recoVariants.length > 0 && (
                    <>
                      <s-stack direction="inline" gap="small" alignItems="center" inlineSize="fill">
                        <s-box inlineSize="48px" />
                        <s-box inlineSize="25%"><s-text type="strong">Product</s-text></s-box>
                        <s-box inlineSize="20%"><s-text type="strong">Variant</s-text></s-box>
                        <s-box inlineSize="15%"><s-text type="strong">Price</s-text></s-box>
                        <s-box inlineSize="12%"><s-text type="strong">In Stock</s-text></s-box>
                        <s-box inlineSize="10%" />
                      </s-stack>
                      {recoVariants.map((variant, idx) => (
                        <s-stack key={idx} direction="inline" gap="small" alignItems="center" inlineSize="fill">
                          <s-box inlineSize="48px" blockSize="48px">
                            {(variant.image || variant.productImage) ? (
                              <s-image src={variant.image || variant.productImage} alt={variant.title} inlineSize="fill" objectFit="cover" />
                            ) : (
                              <s-box />
                            )}
                          </s-box>
                          <s-box inlineSize="25%"><s-text>{variant.productTitle}</s-text></s-box>
                          <s-box inlineSize="20%"><s-text>{variant.title}</s-text></s-box>
                          <s-box inlineSize="15%"><s-text>${variant.price}</s-text></s-box>
                          <s-box inlineSize="12%"><s-text>{variant.inventoryAtLocation != null ? variant.inventoryAtLocation : '—'}</s-text></s-box>
                          <s-box inlineSize="10%">
                            <s-button variant="plain" ref={(el) => {
                              const handlerKey = `_addReco_${idx}`;
                              if (el && !el[handlerKey]) {
                                el[handlerKey] = true;
                                el.addEventListener('click', () => {
                                  const v = recoVariantsRef.current[idx];
                                  if (!v) return;
                                  shopify.cart.addLineItem(v.id, 1)
                                    .then(() => shopify.toast.show(`Added ${v.title} to cart`))
                                    .catch(() => shopify.toast.show('Failed to add to cart'));
                                });
                              }
                            }}>Add</s-button>
                          </s-box>
                        </s-stack>
                      ))}
                    </>
                  )}

                  {!recoLoading && selectedStyle && recoVariants.length === 0 && (
                    <s-text>No matching variants found for style "{selectedStyle}"{editedColor ? ` in color "${editedColor}"` : ''}</s-text>
                  )}
                </s-stack>
              </s-tab-panel>
            </s-tabs>

            {/* Bottom row: Save + Close buttons */}
            <s-stack direction="inline" justifyContent="end" gap="base" padding="base">
              {activeTab !== 'product-recommendations' && (
                <s-button variant="primary" loading={saving} ref={(el) => {
                  if (el && !el._saveHandler) {
                    el._saveHandler = true;
                    el.addEventListener('click', handleSaveBirthday);
                  }
                }}>Save</s-button>
              )}
              <s-button variant="primary" ref={(el) => {
                if (el && !el._closeHandler) {
                  el._closeHandler = true;
                  el.addEventListener('click', () => {
                    window.close();
                  });
                }
              }}>Close</s-button>
            </s-stack>
          </s-stack>
          </s-box>
        </s-section>
      </s-scroll-box>
    </s-page>
  );
}
