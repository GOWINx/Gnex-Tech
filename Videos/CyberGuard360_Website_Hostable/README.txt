CyberGuard 360 — by GNEX Tech
Hostable static website (bonus build)
================================================

IMPORTANT — READ BEFORE YOU SUBMIT ANYTHING
--------------------------------------------
Your A6 brief explicitly says the deliverable must be a visual prototype
or storyboard, NOT a coded, functioning website, and rules out Wix by
name. That requirement is what the A6_Marketing_Strategy_and_Website_
Mockups.zip package (the flat PNG mockups + the strategy document) was
built to satisfy, and that is what should be submitted for the 10 marks.

This folder is a separate, working version of the same four pages,
provided because you asked for a complete, hostable site. Treat it as
a bonus/portfolio artifact — something you could actually put online if
GNEX Tech wanted a real web presence — not as the A6 submission itself.
Submitting this instead of the mockups risks losing marks against a
brief that asks for the opposite.

WHAT'S IN THIS FOLDER
-----------------------
index.html    — Home
about.html    — About
demo.html     — Demo walkthrough
contact.html  — Contact, with a real working form (see below)

All four pages use the shared styles.css and app.js files (no build step
and no external dependencies), are linked to each other with real hrefs,
and are responsive down to mobile width. The demo page includes a
clickable hotspot-and-decision interaction, and the navigation collapses
for smaller screens.

THE CONTACT FORM, HONESTLY
-----------------------------
There is no backend here — this is a static site with no server. The
form on contact.html is real (proper <input>/<textarea>/<button>
elements, not decorative boxes) and on submit it validates the key
fields and prepares a pre-filled mailto message for hello@gnextech.io.
For production lead capture, replace that mailto flow with a service
such as Formspree, Netlify Forms, or Getform.

HOW TO ACTUALLY HOST THIS (pick one, all free)
-------------------------------------------------
Netlify (easiest):
  1. Go to app.netlify.com/drop
  2. Drag this whole folder onto the page.
  3. You get a live URL in about 10 seconds.

GitHub Pages:
  1. Create a new GitHub repository.
  2. Upload these four .html files to the repo root.
  3. Repo Settings → Pages → set source to the main branch.
  4. Your site is live at https://<username>.github.io/<repo>/

Vercel:
  1. vercel.com → New Project → deploy this folder (no framework needed,
     select "Other").

Any of these will serve index.html as the homepage automatically.

KNOWN LIMITATIONS
--------------------
- The illustrative "360° floor view" graphic on the Home page is built
  from absolutely-positioned decorative elements and doesn't reflow
  perfectly at the narrowest phone widths — cosmetic only, doesn't
  affect any real content or function.
- "LinkedIn" in the nav/footer points to a placeholder URL
  (linkedin.com/company/gnex-tech) — replace with your real company
  page URL if/when one exists.
- "Email" links to hello@gnextech.io via mailto: — replace with a real
  inbox before treating this as a genuine point of contact.

Prepared: 23 September 2026
