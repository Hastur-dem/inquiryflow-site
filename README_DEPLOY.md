# InquiryFlow Public Site · Day 3

Static, dependency-free site package.

## Files
- `index.html` — bilingual landing page
- `sample-report.html` — fictional sample report
- `privacy.html` — data-handling notice
- `downloads/` — 3-inquiry template and fictional analysis
- `assets/` — local CSS, JS and SVG favicon
- `.nojekyll` — deploy the static files directly on GitHub Pages

## Publish options
### GitHub Pages
1. Create a public repository named `inquiryflow-site`.
2. Upload all files in this folder to the repository root.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
5. Save and wait for the public URL.

### Cloudflare Pages / Netlify
Drag this entire folder or its ZIP into the provider's static-site deployment interface. No build command is required.

## Pre-publish check
- Confirm `rinp1998@gmail.com` is correct.
- Open `index.html`, test language switch and both mailto buttons.
- Open `sample-report.html` and `privacy.html`.
- Do not add invented testimonials, client logos, response rates or revenue claims.
