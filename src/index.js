/*!
 * classhelp - chainable, cross‑browser class helper
 * Author: Shivasis Biswal
 * Copyright: Host Spacer(https://hostspacer.com)
 * Date: 20 Oct 2025(Deepawali)
 * License: Free to use, MIT
 * Usage:
 *   classhelp(el).add('visible').remove('hidden').toggle('active');
 *   classhelp(el).addClass('foo').removeClass('bar');
 *   if (classhelp(el).has('visible')) { … }
 *   if (classhelp(el).hasClass('active')) { … }
 */

(function(window) {
  'use strict';

  function getClassRegExp(className) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  let hasClass, addClass, removeClass, toggleClass;

  if ('classList' in document.documentElement) {
    hasClass = function(el, cls) {
      return el.classList.contains(cls);
    };
    addClass = function(el, cls) {
      el.classList.add(cls);
    };
    removeClass = function(el, cls) {
      el.classList.remove(cls);
    };
    toggleClass = function(el, cls) {
      el.classList.toggle(cls);
    };
  } else {
    hasClass = function(el, cls) {
      return getClassRegExp(cls).test(el.className);
    };
    addClass = function(el, cls) {
      if (!hasClass(el, cls)) {
        el.className = (el.className + ' ' + cls).trim();
      }
    };
    removeClass = function(el, cls) {
      el.className = el.className.replace(getClassRegExp(cls), ' ').trim();
    };
    toggleClass = function(el, cls) {
      if (hasClass(el, cls)) {
        removeClass(el, cls);
      } else {
        addClass(el, cls);
      }
    };
  }

  function classhelp(el) {
    return {
      add: function(cls) {
        addClass(el, cls);
        return this;
      },
      addClass: function(cls) {
        addClass(el, cls);
        return this;
      },
      remove: function(cls) {
        removeClass(el, cls);
        return this;
      },
      removeClass: function(cls) {
        removeClass(el, cls);
        return this;
      },
      toggle: function(cls) {
        toggleClass(el, cls);
        return this;
      },
      toggleClass: function(cls) {
        toggleClass(el, cls);
        return this;
      },
      has: function(cls) {
        return hasClass(el, cls);
      },
      hasClass: function(cls) {
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

  if (typeof define === 'function' && define.amd) {
    define(classhelp);
  } else {
    window.classhelp = classhelp;
  }

})(window);
