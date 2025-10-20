# classhelp

Chainable, cross‑browser class helper functions.

## Features
- add, remove, toggle, has (and aliases addClass/removeClass/toggleClass/hasClass)
- Works with `classList` when available, falls back to `className` manipulation for older browsers
- Supports chaining
- Builds for modern (ESM) and legacy (UMD) usage
- Comes with CDN + source maps

## Usage

### Browser global (UMD)
```html
<script src="https://cdn.jsdelivr.net/npm/classhelp@1.0.0/dist/classhelp.umd.min.js"></script>
<script>
  const el = document.getElementById('myElement');
  classhelp(el).add('visible').remove('hidden').toggle('active');
</script>
