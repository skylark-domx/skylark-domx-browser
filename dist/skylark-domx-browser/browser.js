/**
 * skylark-domx-browser - The skylark browser library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx"],function(e,t){"use strict";var n,r,o=t.hoster.browser,s={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},i=null,l="",a="",c={},u={},m=/^(Webkit|webkit|O|Moz|moz|ms)(.*)$/,w=window.document,d=w.createElement("div"),k=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.matchesSelector,p=d.requestFullscreen||d.webkitRequestFullscreen||d.mozRequestFullScreen||d.msRequestFullscreen,x=(w.exitFullscreen||w.webkitCancelFullScreen||w.mozCancelFullScreen||w.msExitFullscreen,d.style);for(var v in x){var F=v.match(r||m);if(F){r||(n=F[1],r=new RegExp("^("+n+")(.*)$"),n,l="-"+n.toLowerCase()+"-",a=n.toLowerCase()),c[t.lowerFirst(F[2])]=v;var z=t.dasherize(F[2]);u[z]=l+z,s[v]&&(i=s[v])}}return i||void 0!==x.transition&&(i=s.transition),t.mixin(o,{css3PropPrefix:l,isIE:!!/msie/i.exec(window.navigator.userAgent),normalizeStyleProperty:function(e){return c[e]||e},normalizeCssProperty:function(e){return u[e]||e},normalizeCssEvent:function(e){return a?a+e:e.toLowerCase()},matchesSelector:k,requestFullScreen:p,exitFullscreen:p,location:function(){return window.location},support:{}}),i&&(o.support.transition={end:i}),o.support.cssPointerEvents=(d.style.cssText="pointer-events:auto","auto"===d.style.pointerEvents),d=null,e.attach("domx.browser",o)});
//# sourceMappingURL=sourcemaps/browser.js.map
