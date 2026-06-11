import "@shopify/ui-extensions/preact";
import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {i18n} = shopify;
  const [subheading, setSubheading] = useState(
    shopify.cart.current.value.customer
      ? i18n.translate('tile_subheading')
      : i18n.translate('no_customer')
  );

  useEffect(() => {
    const unsubscribe = shopify.cart.current.subscribe((cart) => {
      setSubheading(
        cart.customer
          ? i18n.translate('tile_subheading')
          : i18n.translate('no_customer')
      );
    });
    return unsubscribe;
  }, []);

  return (
    <s-tile
      heading={i18n.translate('tile_heading')}
      subheading={subheading}
      onClick={() => shopify.action.presentModal()}
    />
  );
}
