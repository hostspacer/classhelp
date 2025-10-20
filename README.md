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

### 🔹 ES Module (Modern Browsers)

Using **jsDelivr**:

```html
<script type="module">
  import classhelp from 'https://cdn.jsdelivr.net/npm/classhelp@1.0.0/dist/classhelp.esm.min.js';

  const el = document.getElementById('myElement');
  classhelp(el).addClass('foo').removeClass('bar');

  if (classhelp(el).has('foo')) {
    classhelp(el).removeClass('foo').addClass('bar');
  }
</script>
```
Using **unpkg**:

```html
<script type="module">
  import classhelp from 'https://unpkg.com/classhelp@1.0.0/dist/classhelp.esm.min.js';

  const el = document.querySelector('#myElement');
  classhelp(el).addClass('visible');
</script>
```

### 🧩 API

```html
const el = document.getElementById('myElement');

// Add classes
classhelp(el).add('cls');
classhelp(el).addClass('cls');

// Remove classes
classhelp(el).remove('cls');
classhelp(el).removeClass('cls');

// Toggle classes
classhelp(el).toggle('cls');
classhelp(el).toggleClass('cls');

// Check for class presence
classhelp(el).has('cls');       // → true / false
classhelp(el).hasClass('cls');  // → true / false
```

### 📦 Installation (npm)

#### bash - terminall
```html
npm install classhelp
```
##### Then use it in your JavaScript:

```html
import classhelp from 'classhelp';

const el = document.querySelector('#myElement');
classhelp(el).addClass('foo').removeClass('bar');
```
