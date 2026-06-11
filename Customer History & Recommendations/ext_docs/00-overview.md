# Shopify POS UI Extensions — Documentation Pack

This repository contains the **public-reference docs** and **TypeScript
declarations** you need to build extensions for Shopify POS with  
`@shopify/ui-extensions` and `@shopify/ui-extensions-react`.

Native components render with the same look-and-feel, performance, and
accessibility behaviour as Shopify POS itself.

---

## Creating new extensions

To create a new extension, run the following Shopify CLI command:

```bash
shopify app generate extension --name="your-extension-name" --template="pos_ui" --flavor="typescript-react"
```

Important:
- Always set `template="pos_ui"` for POS UI extensions
- Always set `flavor="typescript-react"` for TypeScript React support

Once the command completes, you will have a new extension created under `extensions/<n>` directory.

## Developing and Testing Extensions

To build and preview your extensions, use the Shopify CLI:

```bash
shopify app dev
```

This command:
- Builds the app and all extensions
- Connects to your development store or Plus sandbox store
- Provides a preview URL for testing your extensions
- No separate dependency installation is needed

---

## Directory guide
| Path                     | Contents                                              |
|--------------------------|-------------------------------------------------------|
| `ext_docs/01-components/`    | Narrative docs & samples for UI components            |
| `ext_docs/02-apis/`          | Runtime API reference (Cart, Action, Direct API, …)   |
| `ext_docs/03-targets/`       | Where an extension can render in POS                  |
| `ext_docs/04-hooks/`         | React helper hooks (`useApi`, `useCartSubscription`)  |
| `ext_docs/types/`            | Canonical `*.d.ts` declarations                       |

---

## Read next
• Direct Admin-API → `ext_docs/02-apis/DirectApi.md`  
• React helper hooks → `ext_docs/04-hooks/ReactHooks.md`  
• APIs → `ext_docs/02-apis/`  
• Components → `ext_docs/01-components/`  
• Targets → `ext_docs/03-targets/`

---