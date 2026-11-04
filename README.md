# URIM & THUMMIM Enterprises website

A responsive, multi-page static website built with HTML, CSS and a small amount
of JavaScript. Photos are stored locally in `assets/images`, so they are
published with the site.

## Preview

Open `index.html` in a browser, or run a local static server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Push the contents of this folder to the root of a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)`, then save.

GitHub Pages will publish the site from `index.html`.

## Before publishing

- Confirm the business description and replace any sample programme copy with
  approved, up-to-date information.
- The homepage hero uses a crop from the supplied design reference layered
  over `assets/images/solar-panels.jpg`. Replace `assets/images/hero-reference.jpg`
  with the original high-resolution photo if you have it.
- The enquiry email is `info@urimthummiment.co.ke`. Its contact-page link opens
  the visitor's email app; the website does not send or store messages on a
  server.
- Replace the bundled illustrative stock photography with company-approved
  images if available.
- The Google Fonts stylesheet is optional; the site falls back to system fonts
  if it cannot load.
