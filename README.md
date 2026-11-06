# SUMVERA

Online store for **SUMVERA**, a tracksuit brand (hoodie + jogger sets) for men and women, based in Islamabad, Pakistan.

> *Comfort meets confidence.*

Customers browse the collection, pick a size, add to cart and send their order on WhatsApp. Payment is **Cash on Delivery only**. There is no backend or database: orders arrive as a ready-made WhatsApp message.

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router) with Cache Components
- React 19 and TypeScript
- CSS Modules (no UI library)
- `next/font` (Jost and Cormorant Garamond) and `next/image`

## Getting started

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Run the production build |
| `npm run lint` | Check the code with ESLint |
| `npx tsc --noEmit` | Type-check |

> The fonts are fetched from Google Fonts, so `npm run build` needs an internet connection.

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, Men, Women and Premium collections |
| `/about` | Brand story, WhatsApp, Instagram and TikTok |
| `/contact` | WhatsApp community banner, FAQ and customer reviews |

The cart opens as a side drawer from any page.

## How ordering works

1. The customer chooses a size and adds a tracksuit to the cart.
2. In the cart drawer they press **Checkout** and fill in name, phone, city and address.
3. **Send order on WhatsApp** opens a chat with the shop number and the order already typed in (items, sizes, total, "Payment: Cash on Delivery" and the delivery details).
4. The shop confirms delivery charges and the delivery date on WhatsApp.

Good to know:

- Orders are **not saved on the website**. They exist only as the WhatsApp message, so keep your chats.
- The cart lives in memory and is **cleared when the page is refreshed**.
- Delivery charges are not added to the total. They are confirmed on WhatsApp.

## Project structure

```
public/
  products/            Product photos (webp)
  sumvera-mark.png     Logo icon
  sumvera-wordmark.png Logo wordmark
src/
  app/                 Pages (page.tsx, about, contact), layout and globals.css
  components/          Header, Footer, Hero, product cards, cart drawer, ...
  context/CartContext  Cart state (add, remove, change quantity, clear)
  data/
    products.ts        The catalogue (names, prices, colours, photos)
    site.ts            Brand name, WhatsApp, Instagram, TikTok, community link
    faq.ts             FAQ questions and answers
    reviews.ts         Customer reviews
  lib/order.ts         Order form validation and the WhatsApp message
  types/               Shared TypeScript types
```

Brand colours are CSS variables in `src/app/globals.css` (`--forest`, `--cream`, `--sand`, `--sage`, `--gold`, `--muted`).

## Editing the content

### Contact details and social links

Edit `src/data/site.ts`. Every number and link on the site (footer, About, Contact, checkout) comes from this one file.

To use a WhatsApp Community invite, paste it into `community.invite`. Until then the "Join the community" buttons open a normal WhatsApp chat.

### Add or change a product

Edit `src/data/products.ts`.

1. Put the photos in `public/products/`. Use **portrait 2:3 photos** (for example 800 x 1200 px, `.webp`) so nothing is cropped.
2. Describe each colour as a `Variant` and use it in a product:

```ts
const menBlack: Variant = {
  name: "Black",
  hex: "#15171A",
  image: "/products/black-front.webp",
  back: "/products/black-back.webp", // optional
};

{
  id: "m6",
  slug: "my-tracksuit-men",
  name: "My Tracksuit",
  category: "men",            // "men" | "women" | "premium"
  price: 7500,                // in PKR
  sizes: SIZES,               // S, M, L, XL
  variants: [menBlack],       // add more colours here
  isNew: true,                // optional "New" badge
},
```

- A product with several `variants` shows a colour swatch for each one.
- If a variant has a `back` photo, clicking or tapping the photo flips between front and back. Two small dots in the top corner show which side is visible.
- `id` must be unique. The cart tells items apart by id, colour and size.
- Section titles show the number of designs automatically.

### FAQ and reviews

Edit `src/data/faq.ts` and `src/data/reviews.ts`. Only add reviews that real customers actually gave you.

## Placeholder content

Some content is still temporary and should be replaced before launch:

- All products have real photos (front and back). All prices and several product names are still placeholders.
- FAQ answers are general. Add your real delivery, return and exchange policy.
- `ProductArt.tsx` and the `Garment` type are left over from the first drawn mockup and are no longer used.

## Deployment

The easiest way is [Vercel](https://vercel.com/new): import the GitHub repository and deploy. No environment variables are needed.

## Notes for contributors

`AGENTS.md` is generated by `next dev` and warns that this Next.js version differs from older ones. When in doubt, read the guides in `node_modules/next/dist/docs/`.
