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
```
### ES Module
```html
import classhelp from 'classhelp';

const el = document.getElementById('myElement');
classhelp(el).addClass('foo').removeClass('bar');
if (classhelp(el).has('foo')) {
  // …
}
```
### API
```html
-- const el = document.getElementById('myElement');
-- classhelp(el).add('cls')
-- classhelp(el).addClass('cls')
-- classhelp(el).remove('cls')
-- classhelp(el).removeClass('cls')
-- classhelp(el).toggle('cls')
-- classhelp(el).toggleClass('cls')
-- classhelp(el).has('cls') → Boolean
-- classhelp(el).hasClass('cls') → Boolean
```
