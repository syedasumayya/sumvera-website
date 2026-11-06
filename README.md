<div align="center">

# SUMVERA

### Official website · Tracksuits for men and women

*Comfort meets confidence.*

**[Visit the website](https://sumvera-website.vercel.app)**

Made in Islamabad, Pakistan

</div>

---

## About SUMVERA

SUMVERA is a Pakistani clothing brand making simple, considered tracksuits (hoodie and jogger sets) for men and women, plus a small premium line. This repository is the brand's official online store.

## Collections

| Collection | Designs | Sizes |
| --- | --- | --- |
| **Men** | 5 designs | S, M, L, XL |
| **Women** | 5 designs | S, M, L, XL |
| **Premium** | 2 designs | S, M, L, XL |

Every design has a front and a back photo. Tap or click a photo on the website to see the other side.

## How to order

1. Choose a tracksuit, pick your size and press **Add to cart**.
2. Open your cart and press **Checkout**.
3. Enter your name, phone number, city and full address.
4. Press **Send order on WhatsApp**. WhatsApp opens with your order already written. Just press Send.
5. We confirm your order, the delivery charges and the delivery date on WhatsApp.

**Payment: Cash on Delivery only.** You pay when your order reaches you.

## Contact us

| | |
| --- | --- |
| **WhatsApp** | [0317 1957455](https://wa.me/923171957455) |
| **Instagram** | [@sumvera_](https://www.instagram.com/sumvera_/) |
| **TikTok** | [@sumvera_](https://www.tiktok.com/@sumvera_) |
| **Based in** | Islamabad, Pakistan |

## Website pages

| Page | What you will find |
| --- | --- |
| Home | Our latest collections: Men, Women and Premium |
| About | The SUMVERA story and our social links |
| Contact | WhatsApp community, FAQ and customer reviews |

---

## For the website owner

Everything below is for whoever maintains the website. Customers do not need it.

### Built with

- [Next.js](https://nextjs.org) 16 (App Router) and React 19
- TypeScript
- CSS Modules
- Hosted on [Vercel](https://vercel.com)

### Run it on your computer

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build (needs internet for Google Fonts) |
| `npm start` | Run the production build |
| `npm run lint` | Check the code |
| `npx tsc --noEmit` | Type-check |

### Update the website

The site is connected to Vercel. **Every push to `main` is published automatically** in about a minute.

```bash
git add .
git commit -m "Describe your change"
git push
```

If a publish fails, open the project on Vercel, go to **Deployments**, click the failed one and read the **Build Logs**. Run `npm run build` on your computer to see the same error.

### Where things live

| To change | Edit |
| --- | --- |
| Phone number, Instagram, TikTok, WhatsApp community link | `src/data/site.ts` |
| Products: names, prices, colours, sizes, photos | `src/data/products.ts` |
| FAQ | `src/data/faq.ts` |
| Customer reviews | `src/data/reviews.ts` |
| Order form and the WhatsApp message | `src/lib/order.ts` |
| Brand colours | `src/app/globals.css` |
| Product photos | `public/products/` |

### Add a product

1. Put the photos in `public/products/`. Use **portrait 2:3 photos** (for example 800 x 1200 px, `.webp`) so nothing is cropped.
2. Add the colour and the product in `src/data/products.ts`:

```ts
const menBlack: Variant = {
  name: "Black",
  hex: "#15171A",
  image: "/products/black-front.webp",
  back: "/products/black-back.webp", // optional
};

{
  id: "m6",                   // must be unique
  slug: "my-tracksuit-men",
  name: "My Tracksuit",
  category: "men",            // "men" | "women" | "premium"
  price: 7500,                // in PKR
  sizes: SIZES,               // S, M, L, XL
  variants: [menBlack],       // add more colours here
  isNew: true,                // optional "New" badge
},
```

Only add reviews to `reviews.ts` that real customers actually gave you.

### Good to know

- Orders are **not stored on the website**. They exist only as the WhatsApp message, so keep your chats.
- The cart is **cleared when the page is refreshed**.
- Delivery charges are not part of the total. They are confirmed on WhatsApp.
- Prices and some product names are still placeholders. Add your real delivery and exchange policy to the FAQ.
- To use a WhatsApp Community invite, paste it into `community.invite` in `site.ts`. Until then the "Join the community" buttons open a normal chat.

### Custom domain (later)

1. Buy a domain (for example `sumvera.com` or a `.pk` domain).
2. In Vercel open the project, then **Settings, Domains** and add it.
3. Add the DNS records Vercel shows at the company where you bought the domain.
4. Update the website link at the top of this file.

### Roadmap

- Custom domain
- Real prices and a real delivery and exchange policy
- Mobile menu in the header
- Keep the cart after a page refresh
- Contact form that sends an email

---

## Copyright

© 2026 SUMVERA. All rights reserved.

The SUMVERA name, logo, product photographs, designs, text and source code in this repository belong to SUMVERA. You may not copy, reuse or sell them without written permission. See [LICENSE](LICENSE).
