# Hotel Sukoon — Website

A multi-page React website for Hotel Sukoon (Indu Chowk, Bilaspur), built with
Vite + React Router. Pages: Home, Rooms, Gallery, Amenities, Contact.

Every "Book" button opens WhatsApp (+91 78981 21515) with a pre-filled
message, matching how the hotel actually takes bookings.

## What's in this folder

- `src/` — the website source code (edit this if you want to change text,
  images, or colors)
- `public/images/` — all photos used on the site
- `dist/` — a ready-to-use, pre-built copy of the site. You can open
  `dist/index.html` directly in a browser, or upload the whole `dist` folder
  to any web host.

## Running it yourself (optional, for developers)

You'll need [Node.js](https://nodejs.org) installed.

```bash
npm install       # one-time setup
npm run dev       # start a local preview at http://localhost:5173
npm run build     # rebuild the dist/ folder after making changes
```

## Publishing the site online

The `dist` folder is a complete static website. You can upload it as-is to:

- **Netlify / Vercel** — drag and drop the `dist` folder onto their dashboard
- **Any shared hosting (cPanel, etc.)** — upload the contents of `dist` to
  your `public_html` folder
- **GitHub Pages** — push the `dist` folder to a `gh-pages` branch

No server-side setup or database is required — it's a fully static site.

## Making small edits

- **Phone number / email / address:** edit `src/data/site.js`
- **Room names, features, photos:** edit `src/data/rooms.js`
- **Colors:** edit the `:root` variables at the top of `src/index.css`
- **Text on the home page:** edit `src/pages/Home.jsx`

After any edit, run `npm run build` again to refresh the `dist` folder.
