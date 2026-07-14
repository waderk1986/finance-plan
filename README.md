# finance-plan

An interactive, fillable version of the U.S. Department of Education's **College Financing Plan**, branded for **Technical College of the Rockies (TCR)**. A financial-aid officer can work through it live with a student, then print/save the completed plan as a PDF or export the raw data as XML.

The site is **static and self-contained** — no build step, no framework, no runtime dependencies. Everything (HTML, CSS, JS) lives in a single file that runs from a web server or straight off the local filesystem.

## Layout

The deployable site lives in [`public/`](./public); everything else at the repo root is tooling.

| URL         | File                   | Purpose                                                                      |
| ----------- | ---------------------- | ---------------------------------------------------------------------------- |
| `/`         | `public/index.html`    | The interactive fillable College Financing Plan.                             |
| `/template` | `public/template.html` | The original read-only ED template (uses `public/styles`, `public/scripts`). |

## Institution configuration

Per-school constants (school name, standard cost-of-attendance figures, loan rates/fees, and the financial-aid office contact block) live in the clearly-marked `CONFIG` object near the top of the `<script>` in `public/index.html`. Update those values and the form prefills automatically; the officer only enters the per-student aid amounts.

## Auto-computed fields

The form recalculates as the officer types:

```
COA (on/off campus) = tuition&fees + housing/food(on|off) + books + transportation + other
Total Scholarships  = school + state + other + employer-paid tuition
Total Grants        = federal Pell + institutional + state + other grant aid
Total Loan Options  = subsidized + unsubsidized
Total Work          = work-study + other campus job
Net Price           = COA − Total Grants − Total Scholarships   (COA basis selectable: on/off campus)
```

## Local development

```bash
npm install
npx serve public     # or any static server, or open public/index.html directly
```

Quality checks:

```bash
npm run format       # apply Prettier formatting
npm run format:check # verify formatting (CI)
npm run lint         # HTMLHint
npm run check        # format:check + lint
npm run deploy       # wrangler deploy (needs Cloudflare auth)
```

## Deployment

Hosted on **Cloudflare (Workers static assets)**. The Cloudflare Git integration runs `npx wrangler deploy` on every push to `main`; [`wrangler.jsonc`](./wrangler.jsonc) serves [`public/`](./public) as static assets. Security headers (CSP, X-Frame-Options, etc.) are applied via [`public/_headers`](./public/_headers).

GitHub Actions ([`.github/workflows/ci.yml`](./.github/workflows/ci.yml)) runs formatting, HTML linting, a dependency audit, and a secret scan on every push and pull request.
