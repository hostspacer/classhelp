/*!
 * classhelp - chainable, cross-browser class helper
 * author: Shivasis Biswal
 * copyright: Host Spacer (https://hostspacer.com)
 * https://github.com/hostspacer/classhelp
 * License: MIT
 */

(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(factory);
  } else {
    // Browser global
    global.classhelp = factory();
  }
}(typeof window !== 'undefined' ? window : this, function () {
  'use strict';

  function getClassRegExp(className) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  let hasClass, addClass, removeClass, toggleClass;

  if ('classList' in document.documentElement) {
    hasClass = function (el, cls) {
      return el.classList.contains(cls);
    };
    addClass = function (el, cls) {
      el.classList.add(cls);
    };
    removeClass = function (el, cls) {
      el.classList.remove(cls);
    };
    toggleClass = function (el, cls) {
      el.classList.toggle(cls);
    };
  } else {
    hasClass = function (el, cls) {
      return getClassRegExp(cls).test(el.className);
    };
    addClass = function (el, cls) {
      if (!hasClass(el, cls)) {
        el.className = (el.className + ' ' + cls).trim();
      }
    };
    removeClass = function (el, cls) {
      el.className = el.className.replace(getClassRegExp(cls), ' ').trim();
    };
    toggleClass = function (el, cls) {
      if (hasClass(el, cls)) {
        removeClass(el, cls);
      } else {
        addClass(el, cls);
      }
    };
  }

  function classhelp(el) {
    return {
      add: function (cls) {
        addClass(el, cls);
        return this;
      },
      addClass: function (cls) {
        addClass(el, cls);
        return this;
      },
      remove: function (cls) {
        removeClass(el, cls);
        return this;
      },
      removeClass: function (cls) {
        removeClass(el, cls);
        return this;
      },
      toggle: function (cls) {
        toggleClass(el, cls);
        return this;
      },
      toggleClass: function (cls) {
        toggleClass(el, cls);
        return this;
      },
      has: function (cls) {
        return hasClass(el, cls);
      },
      hasClass: function (cls) {
        return hasClass(el, cls);
      }
    };
  }

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

  return classhelp;
}));
