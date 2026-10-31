# W3 Technologies website

The w3tec.com site: course and service pages, enquiry forms, a blog and an admin dashboard.
Built with Next.js (App Router), React and MySQL. It replaces the earlier PHP site and keeps its markup,
styles, database and URLs (old `*.php` URLs redirect permanently to the new ones).

## Getting started

Requirements: Node.js 20.9+ and the MySQL/MariaDB database the PHP site used.

```bash
npm install                 # also copies TinyMCE into public/tinymce for the blog editor
cp .env.example .env.local  # then fill in database, mail and SESSION_SECRET
npm run dev                 # http://localhost:3000
```

For a fresh database, run `db/schema.sql`. For an existing PHP-era database, only the
`js_interviewqa` table from that file may be missing. `db/w3tech-dump.sql` is the old export.

## Scripts

| Command | |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` / `npm start` | Production build / server |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript |

## Layout

```
app/(site)/        public pages (one stylesheet per page, like the PHP site)
app/(admin)/       /dashboard — enquiries, blog editor (separate root layout and CSS)
app/actions/       Server Actions: lead forms, admin login, blog create/update/delete
app/blog-images/   serves uploaded blog images from uploads/blog-images
components/        header, footer, forms, carousels, admin UI
lib/               database, mail, session, validation, course list
styles/            the original site stylesheets
private/           course syllabus PDFs and the JS interview PDF (emailed, not public)
public/assets/     images, icons and video
```

Course names, search titles/descriptions and syllabus PDFs live in `lib/courses.ts`.

### Adding a course page

1. Add the course to `lib/courses.ts` (and its PDF to `private/coursepdfs/` if there is one).
2. Create `app/(site)/courses/<slug>/page.tsx` from a page that uses `CoursePage`
   (e.g. `courses/data-analytics`): banner, about text, syllabus modules and FAQs are plain data.
   The sitemap, structured data and enquiry form pick the course up automatically.
3. Add it to the menu in `components/layout/nav-links.ts`.

FAQs on every course page are also published as FAQPage structured data for Google and AI assistants.

## Things to know

- **Links between site pages are plain `<a>` tags.** Several page stylesheets style bare selectors
  (`h2`, `a`, `form`, `.banner`), so each page needs a full load to keep its CSS separate.
- **Mail**: with `SMTP_HOST` set, mail goes through SMTP; otherwise through the server's `sendmail`,
  as PHP's `mail()` did.
- **Admin accounts**: passwords are stored as bcrypt hashes. Old plain-text passwords still work and
  are re-hashed on first login. Registration is off unless `ALLOW_ADMIN_REGISTRATION=true`.
- **Uploads** are written to `uploads/blog-images/`. That directory must be writable and kept across deploys.

## Deploying

This needs a Node.js host (VPS, or cPanel's "Setup Node.js App"); plain PHP shared hosting can't run it.
Run `npm ci && npm run build`, then `npm start` (port via `PORT`). Keep `private/` and `uploads/`
next to the app. The site is served from the domain root.
