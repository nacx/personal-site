# Personal website

This is my personal website, built with [Hugo](https://gohugo.io/) and the [Goa](https://github.com/shenoybr/hugo-goa) theme.

## Rendering the site

Make sure you have Hugo installed:

```bash
brew install hugo
```

Then you can build the site with:

```bash
make dev
```

Now open `https://localhost:1313` in your browser. Any changes you make to the website source will be immediately
reflected, and auto-reloaded, in your browser.

# Continuous Deployment

If this is enabled, the site will be generted in the `/docs` directory. Do not edit the files there directly.

To setup your environment to have the site automatically rendered when changes are made, just run the following
command:

```bash
make setup-cd
```

Once this is done your environment will be configured to render the site on every commit (it takes just milliseconds)
to a folder that is watched by GitHub Pages, so the changes introduced by the commit will be live as soon as they are
pushed to master.
