var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",o=0/0,r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,m=l||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return m.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==s.call(t))return o;if(g(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=a.test(e);return l||u.test(e)?f(e.slice(2),l?2:8):i.test(e)?o:+e}t=function(e,t,o){var r=!0,i=!0;if("function"!=typeof e)throw TypeError(n);return g(o)&&(r="leading"in o?!!o.leading:r,i="trailing"in o?!!o.trailing:i),function(e,t,o){var r,i,a,u,f,l,c=0,m=!1,s=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function S(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){var n=e-l,o=e-c;return void 0===l||n>=t||n<0||s&&o>=a}function O(){var e,n,o,r=p();if(j(r))return h(r);f=setTimeout(O,(e=r-l,n=r-c,o=t-e,s?v(o,a-n):o))}function h(e){return(f=void 0,b&&r)?S(e):(r=i=void 0,u)}function w(){var e,n=p(),o=j(n);if(r=arguments,i=this,l=n,o){if(void 0===f)return c=e=l,f=setTimeout(O,t),m?S(e):u;if(s)return f=setTimeout(O,t),S(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=y(t)||0,g(o)&&(m=!!o.leading,a=(s="maxWait"in o)?d(y(o.maxWait)||0,t):a,b="trailing"in o?!!o.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},w.flush=function(){return void 0===f?u:h(p())},w}(e,t,{leading:r,maxWait:t,trailing:i})};const b=(function(e){return e&&e.__esModule?e.default:e})(t)(function(){let e=document.querySelector('input[name="email"]').value,t=document.querySelector('textarea[name="message"]').value;localStorage.setItem("feedback-form-state",JSON.stringify({email:e,message:t}))},500);document.querySelector(".feedback-form").addEventListener("input",b),window.addEventListener("load",function(){let e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(document.querySelector('input[name="email"]').value=e.email,document.querySelector('textarea[name="message"]').value=e.message)}),document.querySelector(".feedback-form").addEventListener("submit",function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),document.querySelector('input[name="email"]').value="",document.querySelector('textarea[name="message"]').value="",console.log(JSON.parse(localStorage.getItem("feedback-form-state")))});
//# sourceMappingURL=03-feedback.d622f66d.js.map
