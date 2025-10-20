# classhelp

**Chainable, cross-browser class helper functions.**

---

## ✨ Features

- `add`, `remove`, `toggle`, `has` — with aliases: `addClass`, `removeClass`, `toggleClass`, `hasClass`
- Uses `classList` when available, falls back to `className` for older browsers
- Fully chainable API
- Supports modern (ESM) and legacy (UMD) environments
- CDN-ready with minified builds and source maps

---

## 🚀 Usage

### 🔹 Browser Global (UMD)

Using **jsDelivr**:

```html
<script src="https://cdn.jsdelivr.net/npm/classhelp@1.0.0/dist/classhelp.umd.min.js"></script>
<script>
  const el = document.getElementById('myElement');
  classhelp(el).add('visible').remove('hidden').toggle('active');
</script>
```
Using **unpkg**:

```html
<script src="https://unpkg.com/classhelp@1.0.0/dist/classhelp.umd.min.js"></script>
<script>
  const el = document.getElementById('myElement');
  classhelp(el).toggleClass('active');
</script>
```
