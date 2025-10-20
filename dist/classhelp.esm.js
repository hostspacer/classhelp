/*!
 * classhelp - chainable, cross-browser class helper (ES module)
 * author: Shivasis Biswal
 * copyright: Host Spacer (https://hostspacer.com)
 * https://github.com/hostspacer/classhelp
 * License: MIT
 */

function getClassRegExp(className) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

let hasClass, addClass, removeClass, toggleClass;

if ('classList' in document.documentElement) {
  hasClass = (el, cls) => el.classList.contains(cls);
  addClass = (el, cls) => el.classList.add(cls);
  removeClass = (el, cls) => el.classList.remove(cls);
  toggleClass = (el, cls) => el.classList.toggle(cls);
} else {
  hasClass = (el, cls) => getClassRegExp(cls).test(el.className);
  addClass = (el, cls) => {
    if (!hasClass(el, cls)) {
      el.className = (el.className + ' ' + cls).trim();
    }
  };
  removeClass = (el, cls) => {
    el.className = el.className.replace(getClassRegExp(cls), ' ').trim();
  };
  toggleClass = (el, cls) => {
    if (hasClass(el, cls)) {
      removeClass(el, cls);
    } else {
      addClass(el, cls);
    }
  };
}

function classhelp(el) {
  return {
    add(cls) {
      addClass(el, cls);
      return this;
    },
    addClass(cls) {
      addClass(el, cls);
      return this;
    },
    remove(cls) {
      removeClass(el, cls);
      return this;
    },
    removeClass(cls) {
      removeClass(el, cls);
      return this;
    },
    toggle(cls) {
      toggleClass(el, cls);
      return this;
    },
    toggleClass(cls) {
      toggleClass(el, cls);
      return this;
    },
    has(cls) {
      return hasClass(el, cls);
    },
    hasClass(cls) {
      return hasClass(el, cls);
    }
  };
}

// Optional raw functions export for advanced use
classhelp.raw = {
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass,
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass
};

export default classhelp;
