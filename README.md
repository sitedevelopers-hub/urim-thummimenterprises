# URIM & THUMMIM Enterprises website

A responsive, multi-page static website built with HTML, CSS and a small amount
of JavaScript. Photos and videos are stored in `assets/images` and `assets/videos`
and published with the site on GitHub Pages.

## Publish on GitHub Pages

1. Push the contents of this folder to the root of a GitHub repository on the
   `main` branch.
2. In the repository, open **Settings → Pages** and choose **GitHub Actions**
   as the build and deployment source.
3. The included workflow deploys the static site after each push to `main`.
4. To use a custom domain, enter the domain under **Settings → Pages → Custom
   domain**, then configure the DNS records GitHub shows at your domain
   provider. Enable **Enforce HTTPS** after DNS verification.

The website is designed to be hosted on GitHub Pages; no local server is needed.

## Before publishing

- Confirm the business description and replace any sample programme copy with
  approved, up-to-date information.
- The homepage keeps the supplied desktop and mobile background photos.
- The enquiry email is `info@urimthummiment.co.ke`. Its contact-page link opens
  the visitor's email app; the website does not send or store messages on a
  server.
- Sector cards use unique selected photos where a clean, relevant image is
  available. Embedded agriculture and solar videos are muted and have native
  playback controls.
- The Google Fonts stylesheet is optional; the site falls back to system fonts
  if it cannot load.
