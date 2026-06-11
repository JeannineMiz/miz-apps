# Customer History App — Implementation & Setup Instructions

This document covers the metafields, metaobjects, access scopes, and store configuration required to run this Shopify POS app.

---

## 1. Access Scopes

The app requires these scopes (already declared in `shopify.app.toml`):

| Scope | Purpose |
|-------|---------|
| `read_customers`, `write_customers` | Read/write customer data and customer metafields |
| `read_orders` | Fetch customer order history (last 12 months) |
| `read_products`, `write_products` | Query products and product metafields |
| `read_metaobject_definitions`, `write_metaobject_definitions` | Read/create metaobject definitions |
| `read_metaobjects`, `write_metaobjects` | Read/create metaobject entries |

> **Important (POS):** If scopes `read_customers` or `write_customers` are needed, you must go to the Partner Dashboard and grant **Customer API access** manually. This cannot be done via CLI alone.

---

## 2. Customer Metafields

These metafield definitions must exist on the **Customer** resource. Create them in **Shopify Admin → Settings → Custom data → Customers**.

### 2.1 `customer.birthday`

| Property | Value |
|----------|-------|
| **Namespace** | `customer` |
| **Key** | `birthday` |
| **Type** | `single_line_text_field` |
| **Owner type** | `CUSTOMER` |
| **Validation** | Add a **Choices** validation with the allowed birthday month values (e.g., `["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]`) |
| **Access** | Storefront: read; Admin: merchant read/write |

The POS extension reads the `choices` validation to render a dropdown selector.

### 2.2 `customer.color`

| Property | Value |
|----------|-------|
| **Namespace** | `customer` |
| **Key** | `color` |
| **Type** | `single_line_text_field` |
| **Owner type** | `CUSTOMER` |
| **Validation** | Add a **Choices** validation with allowed color preference values (e.g., `["Black", "White", "Blue", "Red", "Green", "Brown", "Gray", "Beige", "Pink", "Purple"]`) |
| **Access** | Storefront: read; Admin: merchant read/write |

Represents the customer's preferred color for product recommendations.

### 2.3 `customer.topsize`

| Property | Value |
|----------|-------|
| **Namespace** | `customer` |
| **Key** | `topsize` |
| **Type** | `single_line_text_field` |
| **Owner type** | `CUSTOMER` |
| **Validation** | Add a **Choices** validation with allowed size values (e.g., `["XS", "S", "M", "L", "XL", "XXL"]`) |
| **Access** | Storefront: read; Admin: merchant read/write |

Represents the customer's preferred top size.

### 2.4 `customer.photo`

| Property | Value |
|----------|-------|
| **Namespace** | `customer` |
| **Key** | `photo` |
| **Type** | `file_reference` |
| **Owner type** | `CUSTOMER` |
| **Access** | Storefront: read; Admin: merchant read/write |

Stores a customer profile photo. The extension resolves both `MediaImage` and `GenericFile` references.

---

## 3. Product Metafields

These metafield definitions must exist on the **Product** resource. Create them in **Shopify Admin → Settings → Custom data → Products**.

### 3.1 `product.style`

| Property | Value |
|----------|-------|
| **Namespace** | `product` |
| **Key** | `style` |
| **Type** | `single_line_text_field` |
| **Owner type** | `PRODUCT` |
| **Validation** | Add a **Choices** validation with allowed style values (e.g., `["Casual", "Formal", "Athletic", "Business Casual", "Streetwear"]`) |
| **Access** | Storefront: read; Admin: merchant read/write |

Used in the Product Recommendations tab to filter products by style category.

### 3.2 `shopify.color-pattern` (Shopify Standard)

| Property | Value |
|----------|-------|
| **Namespace** | `shopify` |
| **Key** | `color-pattern` |
| **Type** | `metaobject_reference` or `list.metaobject_reference` |
| **Owner type** | `PRODUCT` |
| **References** | `shopify.color-pattern` metaobject type |

This is a **Shopify standard metafield**. Enable it under **Settings → Custom data → Products → Shopify standard metafields**. It links products to color pattern metaobjects that appear as filter chips in the recommendations UI.

### 3.3 `shopify.size` (Shopify Standard)

| Property | Value |
|----------|-------|
| **Namespace** | `shopify` |
| **Key** | `size` |
| **Type** | `metaobject_reference` or `list.metaobject_reference` |
| **Owner type** | `PRODUCT` |
| **References** | `shopify.size` metaobject type |

This is a **Shopify standard metafield**. Enable it under **Settings → Custom data → Products → Shopify standard metafields**. It links products to size metaobjects that appear as filter chips in the recommendations UI.

---

## 4. Metaobject Definitions

### 4.1 `shopify.color-pattern` (Shopify Standard)

This is a built-in Shopify metaobject type. Activate it in **Settings → Custom data → Metaobjects** if not already present.

| Field | Type | Description |
|-------|------|-------------|
| `name` | `single_line_text_field` | Display name (e.g., "Black", "Blue", "Beige") |
| Other standard fields | Varies | Shopify manages additional fields like color hex values |

The extension queries these via `metaobjects(type: "shopify.color-pattern")` and renders them as selectable chips with color swatches in the Product Recommendations tab.

**Create entries** for each color the store's products come in (e.g., Black, White, Gray, Blue, Brown, Beige).

### 4.2 `shopify.size` (Shopify Standard)

This is a built-in Shopify metaobject type. Activate it in **Settings → Custom data → Metaobjects**.

| Field | Type | Description |
|-------|------|-------------|
| `name` | `single_line_text_field` | Display name (e.g., "Small", "Medium", "Large") |

The extension reads size metaobjects from product references and renders them as filter chips.

**Create entries** for each size the store's products come in (e.g., XS, S, M, L, XL, XXL).

### 4.3 `app:example` (Template Demo)

Declared in `shopify.app.toml` — this is a demo metaobject from the app template.

| Field | Type | Required |
|-------|------|----------|
| `title` | `single_line_text_field` | Yes |
| `description` | `multi_line_text_field` | No |

This is used by the "Generate a product" demo action on the app home page. It can be removed if you don't need the demo functionality.

---

## 5. `shopify.app.toml` Declared Definitions

The following are already declared in `shopify.app.toml` and will be created/synced on `pnpm run deploy`:

```toml
# Product metafield (demo)
[product.metafields.app.demo_info]
type = "single_line_text_field"
name = "Demo Source Info"

# Metaobject (demo)
[metaobjects.app.example]
name = "Example"
fields: title (required), description
```

The **customer metafields** (`birthday`, `color`, `topsize`, `photo`) and **Shopify standard metafields** (`color-pattern`, `size`) must be created manually in the Shopify Admin, as they use the `customer` and `shopify` namespaces rather than the app-owned `$app` namespace.

---

## 6. Step-by-Step Setup

### Store Configuration

1. **Install the app** on your development store via `pnpm run dev`
2. **Grant Customer API access** in the Partner Dashboard (required for POS extensions using customer data)
3. **Create customer metafield definitions:**
   - Go to **Settings → Custom data → Customers → Add definition**
   - Create `customer.birthday` (single line text, with Choices validation for month names)
   - Create `customer.color` (single line text, with Choices validation for color names)
   - Create `customer.topsize` (single line text, with Choices validation for sizes)
   - Create `customer.photo` (file reference)
4. **Create product metafield definitions:**
   - Go to **Settings → Custom data → Products → Add definition**
   - Create `product.style` (single line text, with Choices validation for style names)
   - Enable **Shopify standard metafields**: `color-pattern` and `size`
5. **Activate Shopify standard metaobjects:**
   - Go to **Settings → Custom data → Metaobjects**
   - Activate `Color pattern` and `Size` if not already present
6. **Create metaobject entries:**
   - Add color pattern entries (Black, White, Blue, Brown, Gray, Beige, etc.)
   - Add size entries (XS, S, M, L, XL, XXL, etc.)
7. **Tag products** with the appropriate metafield values:
   - Set `product.style` on products
   - Link `shopify.color-pattern` metaobject references on products
   - Link `shopify.size` metaobject references on products

### POS Testing

1. Run `pnpm run dev` and open the Shopify POS app
2. The **Customer History** tile appears on the POS home screen
3. Add a customer to the cart — the modal loads their profile, preferences, order history, and product recommendations
4. Test saving customer preferences (birthday, color, top size) via the Save button

---

## 7. GraphQL API Usage Summary

| Query/Mutation | Purpose |
|----------------|---------|
| `CUSTOMER_QUERY` | Fetches customer profile + metafields (birthday, color, topsize, photo) + recent orders |
| `METAFIELD_DEFINITION_QUERY` | Reads `choices` validation from metafield definitions to populate dropdowns |
| `METAFIELDS_SET_MUTATION` | Saves customer preference metafields (birthday, color, topsize) |
| `METAOBJECT_DEFINITIONS_QUERY` | Lists all metaobject definitions in the store (diagnostic) |
| `COLOR_PATTERNS_QUERY` | Fetches all `shopify.color-pattern` metaobject entries |
| `PRODUCTS_WITH_STYLE_QUERY` | Fetches products with their style, color-pattern, and size metafield references |
