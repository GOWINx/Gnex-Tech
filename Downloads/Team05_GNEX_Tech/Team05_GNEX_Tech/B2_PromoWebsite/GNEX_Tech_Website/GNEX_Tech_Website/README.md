# GNEX Tech company website (B2)

Static website for GNEX Tech (Team 05): Home, Services, Portfolio, About & Team, Contact, Privacy, 404.

* **Live URL:** https://gnextech.netlify.app/
* **Product demo linked from the site:** https://cybersecurityassignment.netlify.app/

## Run locally
Double-click `index.html`, or run `python server.py` and open http://localhost:8000.

## Deploy (Netlify, free)
1. Log in to Netlify → *Add new site* → *Deploy manually*.
2. Drag this whole folder onto the page. `_headers` adds the security headers and `netlify.toml` the 404 page.
3. To keep the same address, open the existing **gnextech** site → *Deploys* → drag the folder there.

## Structure
```
index.html  services.html  portfolio.html  about.html  contact.html  privacy.html  404.html
assets/css/site.css   assets/js/site.js   assets/img/ (logo, favicon, product screenshots)
_headers  netlify.toml  robots.txt  sitemap.xml  server.py
```
No build step, no external fonts or scripts, no cookies or tracking. The contact form validates input and opens the visitor's own e-mail app (mailto); nothing is stored by the site.
