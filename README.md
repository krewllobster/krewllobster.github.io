# krewllobster.github.io

Personal blog, built with [Astro](https://astro.build/) and deployed to GitHub Pages.

## Writing a post

1. Create a Markdown file in `src/content/posts/`, e.g. `2026-05-08-my-post.md`.
2. Add frontmatter:
   ```yaml
   ---
   title: My post
   date: 2026-05-08
   description: Optional one-line summary.
   ---
   ```
3. Write the body in Markdown.
4. For images, drop the file into `public/images/` and use a `<figure>` block:
   ```html
   <figure>
     <img src="/images/my-photo.jpg" alt="alt text for accessibility" />
     <figcaption>Caption shown beneath the image.</figcaption>
   </figure>
   ```
   Add `class="wide"` to the figure for a wider, breakout-style image.
5. Set `draft: true` in the frontmatter to keep a post off the published site.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # preview the build
```

## Deploying

Pushes to `master` trigger `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages.

One-time setup in the repo on GitHub: **Settings → Pages → Build and deployment
→ Source: GitHub Actions**.
