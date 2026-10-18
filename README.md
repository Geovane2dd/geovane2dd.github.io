# geovane2dd.github.io

Personal portfolio of Geovane2dd, a developer working on open-source tools, self-hosted applications and systems programming. Live at [geovanedd.me](https://geovanedd.me).

## Stack

- Next.js 16 (App Router, static rendering)
- React 19
- TypeScript
- Tailwind CSS 4

## Getting started

Requires Node.js 20 or newer.

```bash
git clone https://github.com/geovane2dd/geovane2dd.github.io.git
cd geovane2dd.github.io
npm install
npm run dev
```

The site is served at http://localhost:3000.

## Scripts

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the development server     |
| `npm run build` | Create a production build        |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Run the linter                   |

## Project layout

```
app/          Routes, layout, metadata, robots and sitemap
components/   Navbar and Footer
public/       Static assets, manifest and robots.txt
```

## Deployment

A GitHub Actions workflow in `.github/workflows/nextjs.yml` builds the site on every push to `main`. A `Dockerfile` is also provided for container-based hosting.

## License

Released under the GNU General Public License v3.0. See [LICENSE](LICENSE).
