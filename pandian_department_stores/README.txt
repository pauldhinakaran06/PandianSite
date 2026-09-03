# Pandian Department Stores — Static Website

A dependency-free HTML/CSS/JavaScript storefront for Pandian Department Stores, Gummidipoondi By Pass Road.

## Files

- `index.html` — website markup
- `style.css` — responsive design
- `app.js` — catalogue, search, cart, calculator, WhatsApp ordering and JSON manager
- `products.json` — main JSON catalogue
- `src/data/products.json` — source catalogue copy
- `public/products.json` — public catalogue copy
- `assets/frontimage.webp` — supplied storefront photo
- `assets/logo.webp` — supplied logo
- `assets/Offer.webp` — supplied loyalty/rewards artwork

## Run it

### Easiest
If your browser allows local JavaScript fetching, double-click `index.html`.

### Recommended on Windows
Open Command Prompt in this folder and run:

    python -m http.server 8000

Then open:

    http://localhost:8000

No npm, TypeScript, React, or build process is required.

## Editing the catalogue

Open the site → `JSON Catalog Manager`.

You can:
- edit MRP and sell price
- toggle loyalty eligibility
- delete products
- add new products
- edit/apply raw JSON
- copy JSON
- download `products.json`

Changes are stored in browser `localStorage` so they persist on that computer/browser.

## Important

The listed prices are demo/catalogue prices and should be replaced with your actual store prices before publishing.

The email button intentionally opens the visitor's mail application without inventing a store email address. Replace its `mailto:` target in `index.html` when you have the store email.

The website contains no fruit or vegetable products, as requested.
