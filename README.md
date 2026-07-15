# finance-plan

An interactive, fillable version of the U.S. Department of Education's **College Financing Plan**, branded for **Technical College of the Rockies (TCR)**. A financial-aid officer can work through it live with a student, then print/save the completed plan as a PDF or export the raw data as XML.

The site is **static and self-contained** — no build step, no framework, no runtime dependencies. Everything (HTML, CSS, JS) lives in a single file that runs from a web server or straight off the local filesystem.

## Layout

The deployable site lives in [`public/`](./public) — a single self-contained `index.html` plus `_headers`. Everything else at the repo root is tooling.

| URL | File                | Purpose                                          |
| --- | ------------------- | ------------------------------------------------ |
| `/` | `public/index.html` | The interactive fillable College Financing Plan. |

> The original read-only ED template (`template.html`) was removed from the published site once the form went to production. It remains in git history if it's ever needed for reference.

## Institution configuration

Per-school settings live in the clearly-marked `CONFIG` object near the top of the `<script>` in `public/index.html`:

- **`schoolName`** and **`contact`** — display-only; render in the header and the "For More Information" block.
- **`costs`** — prefill the Estimated Cost of Attendance fields, which stay **editable** so the officer can adjust them per program/student.
- **`loans.offered`** — `false` for TCR, which does not participate in the federal Direct Loan program. This keeps the official ED "Loan Options" table but marks it **Not offered**, hides the amount fields and rate notes, and locks the amounts to `$0`. If TCR ever begins offering federal loans, set `offered: true` and fill in the four rate strings.

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
