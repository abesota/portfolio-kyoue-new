!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.SweetScroll=n()}(this,function(){"use strict";function t(t){return null==t?"":"object"===("undefined"==typeof t?"undefined":mt(t))||"function"==typeof t?wt[Object.prototype.toString.call(t)]||"object":"undefined"==typeof t?"undefined":mt(t)}function n(n){return"number"===t(n)}function e(n){return"string"===t(n)}function o(n){return"function"===t(n)}function i(t){return Array.isArray(t)}function r(t){var e=null==t?null:t.length;return n(e)&&e>=0&&e<=bt}function l(t){return!i(t)&&t-parseFloat(t)+1>=0}function u(n){return!i(n)&&"object"===t(n)}function a(t,n){return t&&t.hasOwnProperty(n)}function c(t,n,e){if(null==t)return t;var o=e||t;if(u(t)){for(var i in t)if(a(t,i)&&n.call(o,t[i],i)===!1)break}else if(r(t))for(var l=0;l<t.length&&n.call(o,t[l],l)!==!1;l++);return t}function s(t){for(var n=arguments.length,e=Array(n>1?n-1:0),o=1;o<n;o++)e[o-1]=arguments[o];return c(e,function(n){c(n,function(n,e){t[e]=n})}),t}function f(t){return t.replace(/\s*/g,"")||""}function h(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t);try{throw new Error(t)}catch(t){}}function p(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(t)return(null==n?_t:n).querySelector(t)}function d(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(t)return(null==n?_t:n).querySelectorAll(t)}function v(t,n){for(var e=(t.document||t.ownerDocument).querySelectorAll(n),o=e.length;--o>=0&&e.item(o)!==t;);return o>-1}function g(t){return t===_t.documentElement||t===_t.body}function y(){var t=Ot.outerWidth,n=Ot.innerWidth;return t?t/n:1}function m(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y",e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=It[n],i=t instanceof Element?[t]:d(t),r=[],l=_t.createElement("div"),u=0;u<i.length;u++){var a=i[u];if(a[o]>0?r.push(a):(l.style.width=a.clientWidth+1+"px",l.style.height=a.clientHeight+1+"px",a.appendChild(l),a[o]=1.5/y(),a[o]>0&&r.push(a),a[o]=0,a.removeChild(l)),!e&&r.length>0)break}return r}function S(t,n){var e=m(t,n,!1);return e.length>=1?e[0]:null}function k(t){return null!=t&&t===t.window?t:9===t.nodeType&&t.defaultView}function b(t){return vt(t.scrollHeight,t.clientHeight,t.offsetHeight)}function C(t){return vt(t.scrollWidth,t.clientWidth,t.offsetWidth)}function w(t){return{width:C(t),height:b(t)}}function O(){return{width:vt(C(_t.body),C(_t.documentElement)),height:vt(b(_t.body),b(_t.documentElement))}}function _(t){return g(t)?{viewport:{width:gt(Ot.innerWidth,_t.documentElement.clientWidth),height:Ot.innerHeight},size:O()}:{viewport:{width:t.clientWidth,height:t.clientHeight},size:w(t)}}function I(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y",e=k(t);return e?e[xt[n]]:t[It[n]]}function x(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"y",o=k(t),i="y"===e;o?o.scrollTo(i?o[xt.x]:n,i?n:o[xt.y]):t[It[e]]=n}function L(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t||t&&!t.getClientRects().length)return{top:0,left:0};var e=t.getBoundingClientRect();if(e.width||e.height){var o={},i=null;if(null==n||g(n))i=t.ownerDocument.documentElement,o.top=Ot.pageYOffset,o.left=Ot.pageXOffset;else{i=n;var r=i.getBoundingClientRect();o.top=r.top*-1+i.scrollTop,o.left=r.left*-1+i.scrollLeft}return{top:e.top+o.top-i.clientTop,left:e.left+o.left-i.clientLeft}}return e}function E(t,n,e){var o=n.split(",");o.forEach(function(n){t.addEventListener(n.trim(),e,!1)})}function A(t,n,e){var o=n.split(",");o.forEach(function(n){t.removeEventListener(n.trim(),e,!1)})}function T(t){return t}function z(t,n,e,o,i){return o*(n/=i)*n+e}function M(t,n,e,o,i){return-o*(n/=i)*(n-2)+e}function D(t,n,e,o,i){return(n/=i/2)<1?o/2*n*n+e:-o/2*(--n*(n-2)-1)+e}function j(t,n,e,o,i){return o*(n/=i)*n*n+e}function P(t,n,e,o,i){return o*((n=n/i-1)*n*n+1)+e}function Q(t,n,e,o,i){return(n/=i/2)<1?o/2*n*n*n+e:o/2*((n-=2)*n*n+2)+e}function W(t,n,e,o,i){return o*(n/=i)*n*n*n+e}function B(t,n,e,o,i){return-o*((n=n/i-1)*n*n*n-1)+e}function R(t,n,e,o,i){return(n/=i/2)<1?o/2*n*n*n*n+e:-o/2*((n-=2)*n*n*n-2)+e}function H(t,n,e,o,i){return o*(n/=i)*n*n*n*n+e}function N(t,n,e,o,i){return o*((n=n/i-1)*n*n*n*n+1)+e}function q(t,n,e,o,i){return(n/=i/2)<1?o/2*n*n*n*n*n+e:o/2*((n-=2)*n*n*n*n+2)+e}function F(t,n,e,o,i){return-o*at(n/i*(dt/2))+o+e}function U(t,n,e,o,i){return o*ct(n/i*(dt/2))+e}function $(t,n,e,o,i){return-o/2*(at(dt*n/i)-1)+e}function X(t,n,e,o,i){return 0===n?e:o*st(2,10*(n/i-1))+e}function Y(t,n,e,o,i){return n===i?e+o:o*(-st(2,-10*n/i)+1)+e}function J(t,n,e,o,i){return 0===n?e:n===i?e+o:(n/=i/2)<1?o/2*st(2,10*(n-1))+e:o/2*(-st(2,-10*--n)+2)+e}function V(t,n,e,o,i){return-o*(ht(1-(n/=i)*n)-1)+e}function G(t,n,e,o,i){return o*ht(1-(n=n/i-1)*n)+e}function K(t,n,e,o,i){return(n/=i/2)<1?-o/2*(ht(1-n*n)-1)+e:o/2*(ht(1-(n-=2)*n)+1)+e}function Z(t,n,e,o,i){var r=1.70158,l=0,u=o;return 0===n?e:1===(n/=i)?e+o:(l||(l=.3*i),u<ft(o)?(u=o,r=l/4):r=l/(2*dt)*pt(o/u),-(u*st(2,10*(n-=1))*ct((n*i-r)*(2*dt)/l))+e)}function tt(t,n,e,o,i){var r=1.70158,l=0,u=o;return 0===n?e:1===(n/=i)?e+o:(l||(l=.3*i),u<ft(o)?(u=o,r=l/4):r=l/(2*dt)*pt(o/u),u*st(2,-10*n)*ct((n*i-r)*(2*dt)/l)+o+e)}function nt(t,n,e,o,i){var r=1.70158,l=0,u=o;return 0===n?e:2===(n/=i/2)?e+o:(l||(l=i*(.3*1.5)),u<ft(o)?(u=o,r=l/4):r=l/(2*dt)*pt(o/u),n<1?-.5*(u*st(2,10*(n-=1))*ct((n*i-r)*(2*dt)/l))+e:u*st(2,-10*(n-=1))*ct((n*i-r)*(2*dt)/l)*.5+o+e)}function et(t,n,e,o,i){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1.70158;return o*(n/=i)*n*((r+1)*n-r)+e}function ot(t,n,e,o,i){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1.70158;return o*((n=n/i-1)*n*((r+1)*n+r)+1)+e}function it(t,n,e,o,i){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1.70158;return(n/=i/2)<1?o/2*(n*n*(((r*=1.525)+1)*n-r))+e:o/2*((n-=2)*n*(((r*=1.525)+1)*n+r)+2)+e}function rt(t,n,e,o,i){return(n/=i)<1/2.75?o*(7.5625*n*n)+e:n<2/2.75?o*(7.5625*(n-=1.5/2.75)*n+.75)+e:n<2.5/2.75?o*(7.5625*(n-=2.25/2.75)*n+.9375)+e:o*(7.5625*(n-=2.625/2.75)*n+.984375)+e}function lt(t,n,e,o,i){return o-rt(t,i-n,0,o,i)+e}function ut(t,n,e,o,i){return n<i/2?.5*lt(t,2*n,0,o,i)+e:.5*rt(t,2*n-i,0,o,i)+.5*o+e}var at=Math.cos,ct=Math.sin,st=Math.pow,ft=Math.abs,ht=Math.sqrt,pt=Math.asin,dt=Math.PI,vt=Math.max,gt=Math.min,yt=Math.round,mt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},St=(function(){function t(t){this.value=t}function n(n){function e(t,n){return new Promise(function(e,i){var u={key:t,arg:n,resolve:e,reject:i,next:null};l?l=l.next=u:(r=l=u,o(t,n))})}function o(e,r){try{var l=n[e](r),u=l.value;u instanceof t?Promise.resolve(u.value).then(function(t){o("next",t)},function(t){o("throw",t)}):i(l.done?"return":"normal",l.value)}catch(t){i("throw",t)}}function i(t,n){switch(t){case"return":r.resolve({value:n,done:!0});break;case"throw":r.reject(n);break;default:r.resolve({value:n,done:!1})}r=r.next,r?o(r.key,r.arg):l=null}var r,l;this._invoke=e,"function"!=typeof n.return&&(this.return=void 0)}return"function"==typeof Symbol&&Symbol.asyncIterator&&(n.prototype[Symbol.asyncIterator]=function(){return this}),n.prototype.next=function(t){return this._invoke("next",t)},n.prototype.throw=function(t){return this._invoke("throw",t)},n.prototype.return=function(t){return this._invoke("return",t)},{wrap:function(t){return function(){return new n(t.apply(this,arguments))}},await:function(n){return new t(n)}}}(),function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}),kt=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}}(),bt=st(2,53)-1,Ct=["Boolean","Number","String","Function","Array","Object"],wt={};Ct.forEach(function(t){wt["[object "+t+"]"]=t.toLowerCase()});for(var Ot=window,_t=document,It={y:"scrollTop",x:"scrollLeft"},xt={y:"pageYOffset",x:"pageXOffset"},Lt=(function(){var t=navigator.userAgent;return(t.indexOf("Android 2.")===-1&&t.indexOf("Android 4.0")===-1||t.indexOf("Mobile Safari")===-1||t.indexOf("Chrome")!==-1||t.indexOf("Windows Phone")!==-1)&&(Ot.history&&"pushState"in Ot.history&&"file:"!==Ot.location.protocol)}()),Et=["ms","moz","webkit"],At=0,Tt=Ot.requestAnimationFrame,zt=Ot.cancelAnimationFrame,Mt=0;Mt<Et.length&&!Tt;++Mt)Tt=Ot[Et[Mt]+"RequestAnimationFrame"],zt=Ot[Et[Mt]+"CancelAnimationFrame"]||Ot[Et[Mt]+"CancelRequestAnimationFrame"];Tt||(Tt=function(t){var n=Date.now(),e=vt(0,16-(n-At)),o=setTimeout(function(){t(n+e)},e);return At=n+e,o}),zt||(zt=function(t){clearTimeout(t)});var Dt=Object.freeze({linear:T,InQuad:z,OutQuad:M,InOutQuad:D,InCubic:j,OutCubic:P,InOutCubic:Q,InQuart:W,OutQuart:B,InOutQuart:R,InQuint:H,OutQuint:N,InOutQuint:q,InSine:F,OutSine:U,InOutSine:$,InExpo:X,OutExpo:Y,InOutExpo:J,InCirc:V,OutCirc:G,InOutCirc:K,InElastic:Z,OutElastic:tt,InOutElastic:nt,InBack:et,OutBack:ot,InOutBack:it,OutBounce:rt,InBounce:lt,InOutBounce:ut}),jt=function(){function t(n){St(this,t),this.el=n,this.props={},this.options={},this.progress=!1,this.easing=null,this.startTime=null,this.rafId=null}return kt(t,[{key:"run",value:function(t,n,e){var i=this;this.progress||(this.props={x:t,y:n},this.options=e,this.easing=o(e.easing)?e.easing:Dt[e.easing.replace("ease","")],this.progress=!0,setTimeout(function(){i.startProps={x:I(i.el,"x"),y:I(i.el,"y")},i.rafId=Tt(function(t){return i._loop(t)})},this.options.delay))}},{key:"stop",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=this.options.complete;this.startTime=null,this.progress=!1,zt(this.rafId),t&&(x(this.el,this.props.x,"x"),x(this.el,this.props.y,"y")),o(n)&&(n.call(this),this.options.complete=null)}},{key:"_loop",value:function(t){var n=this;if(this.startTime||(this.startTime=t),!this.progress)return void this.stop(!1);var e=this.el,o=this.props,i=this.options,r=this.startTime,l=this.startProps,u=this.easing,a=i.duration,s=i.step,f={},h=t-r,p=gt(1,vt(h/a,0));c(o,function(t,n){var e=l[n],o=t-e;if(0===o)return!0;var i=u(p,a*p,0,1,a);f[n]=yt(e+o*i)}),c(f,function(t,n){x(e,t,n)}),h<=a?(s.call(this,p,f),this.rafId=Tt(function(t){return n._loop(t)})):this.stop(!0)}}]),t}(),Pt=function(){return"onwheel"in _t?"wheel":"onmousewheel"in _t?"mousewheel":"DOMMouseScroll"}(),Qt=Pt+", touchstart, touchmove",Wt="DOMContentLoaded",Bt="load",Rt=function(){function t(){var n=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"body, html";St(this,t),this.createAt=new Date,this.options=s({},t.defaults,e),this.getContainer(o,function(t){null==t&&n.log('Not found scrollable container. => "'+o+'"'),n.container=t,n.header=p(n.options.header),n.tween=new jt(t),n._trigger=null,n._shouldCallCancelScroll=!1,n.bindContainerClick(),n.hook(n.options,"initialized")})}return kt(t,[{key:"log",value:function(t){this.options.outputLog&&h("[SweetScroll] "+t)}},{key:"to",value:function(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this.container,r=this.header,l=s({},this.options,o);this._options=l;var u=this.parseCoodinate(l.offset),a=this._trigger,c=this.parseCoodinate(t),f=null;if(this._trigger=null,this._shouldCallCancelScroll=!1,this.stop(),!i)return this.log("Not found container element.");if(!c&&e(t))if(f=/^#/.test(t)?t:null,"#"===t)c={top:0,left:0};else{var h=p(t),d=L(h,i);if(!d)return;c=d}if(!c)return this.log("Invalid parameter of distance. => "+t);u&&(c.top+=u.top,c.left+=u.left),r&&(c.top=vt(0,c.top-w(r).height));var v=_(i),g=v.viewport,y=v.size;this.hook(l,"beforeScroll",c,a)!==!1&&(c.top=l.verticalScroll?vt(0,gt(y.height-g.height,c.top)):I(i,"y"),c.left=l.horizontalScroll?vt(0,gt(y.width-g.width,c.left)):I(i,"x"),this.tween.run(c.left,c.top,{duration:l.duration,delay:l.delay,easing:l.easing,complete:function(){null!=f&&f!==Ot.location.hash&&n.updateURLHash(f,l.updateURL),n.unbindContainerStop(),n._options=null,n._shouldCallCancelScroll?n.hook(l,"cancelScroll"):n.hook(l,"afterScroll",c,a),n.hook(l,"completeScroll",n._shouldCallCancelScroll)},step:function(t,e){n.hook(l,"stepScroll",t,e)}}),this.bindContainerStop())}},{key:"toTop",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.to(t,s({},n,{verticalScroll:!0,horizontalScroll:!1}))}},{key:"toLeft",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.to(t,s({},n,{verticalScroll:!1,horizontalScroll:!0}))}},{key:"toElement",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t instanceof Element){var e=L(t,this.container);this.to(e,s({},n))}else this.log("Invalid parameter. in toElement()")}},{key:"stop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.container||this.log("Not found scrollable container."),this._stopScrollListener&&(this._shouldCallCancelScroll=!0),this.tween.stop(t)}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.container||this.log("Not found scrollable container."),this.stop(),this.unbindContainerClick(),this.unbindContainerStop(),this.options=s({},this.options,t),this.header=p(this.options.header),this.bindContainerClick()}},{key:"destroy",value:function(){this.container||this.log("Not found scrollable container."),this.stop(),this.unbindContainerClick(),this.unbindContainerStop(),this.container=null,this.header=null,this.tween=null}},{key:"initialized",value:function(){}},{key:"beforeScroll",value:function(t,n){return!0}},{key:"cancelScroll",value:function(){}},{key:"afterScroll",value:function(t,n){}},{key:"completeScroll",value:function(t){}},{key:"stepScroll",value:function(t,n){}},{key:"parseCoodinate",value:function(t){var n=this._options?this._options.verticalScroll:this.options.verticalScroll,o={top:0,left:0};if(a(t,"top")||a(t,"left"))o=s(o,t);else if(i(t))2===t.length?(o.top=t[0],o.left=t[1]):(o.top=n?t[0]:0,o.left=n?0:t[0]);else if(l(t))o.top=n?t:0,o.left=n?0:t;else{if(!e(t))return null;var r=f(t);if(/^\d+,\d+$/.test(r))r=r.split(","),o.top=r[0],o.left=r[1];else if(/^(top|left):\d+,?(?:(top|left):\d+)?$/.test(r)){var u=r.match(/top:(\d+)/),c=r.match(/left:(\d+)/);o.top=u?u[1]:0,o.left=c?c[1]:0}else{if(!this.container||!/^(\+|-)=(\d+)$/.test(r))return null;var h=I(this.container,n?"y":"x"),p=r.match(/^(\+|-)=(\d+)$/),d=p[1],v=parseInt(p[2],10);"+"===d?(o.top=n?h+v:0,o.left=n?0:h+v):(o.top=n?h-v:0,o.left=n?0:h-v)}}return o.top=parseInt(o.top,10),o.left=parseInt(o.left,10),o}},{key:"updateURLHash",value:function(t,n){Lt&&n&&Ot.history["replace"===n?"replaceState":"pushState"](null,null,t)}},{key:"getContainer",value:function(t,n){var e=this,o=this.options,i=o.verticalScroll,r=o.horizontalScroll,l=n.bind(this),u=null;i&&(u=S(t,"y")),!u&&r&&(u=S(t,"x")),u?l(u):/comp|inter|loaded/.test(_t.readyState)?Tt(function(){Date.now()-e.createAt.getTime()>e.options.searchContainerTimeout?l(null):e.getContainer(t,n)}):!function(){var o=!1,i=function(){l(),o=!0,e.getContainer(t,n)},r=function(){l(),o||e.getContainer(t,n)},l=function(){A(_t,Wt,i),A(Ot,Bt,r)};E(_t,Wt,i),E(Ot,Bt,r)}()}},{key:"bindContainerClick",value:function(){var t=this.container;t&&(this._containerClickListener=this.handleContainerClick.bind(this),E(t,"click",this._containerClickListener))}},{key:"unbindContainerClick",value:function(){var t=this.container;t&&this._containerClickListener&&(A(t,"click",this._containerClickListener),this._containerClickListener=null)}},{key:"bindContainerStop",value:function(){var t=this.container;t&&(this._stopScrollListener=this.handleStopScroll.bind(this),E(t,Qt,this._stopScrollListener))}},{key:"unbindContainerStop",value:function(){var t=this.container;t&&this._stopScrollListener&&(A(t,Qt,this._stopScrollListener),this._stopScrollListener=null)}},{key:"hook",value:function(t,n){for(var e=t[n],i=arguments.length,r=Array(i>2?i-2:0),l=2;l<i;l++)r[l-2]=arguments[l];if(o(e)){var u=e.apply(this,r);if("undefined"==typeof u)return u}return this[n].apply(this,r)}},{key:"handleStopScroll",value:function(t){var n=this._options?this._options.stopScroll:this.options.stopScroll;n?this.stop():t.preventDefault()}},{key:"handleContainerClick",value:function(t){for(var n=this.options,e=t.target;e&&e!==_t;e=e.parentNode)if(v(e,n.trigger)){var o=e.getAttribute("data-scroll"),i=this.parseDataOptions(e),r=o||e.getAttribute("href");n=s({},n,i),n.preventDefault&&t.preventDefault(),n.stopPropagation&&t.stopPropagation(),this._trigger=e,n.horizontalScroll&&n.verticalScroll?this.to(r,n):n.verticalScroll?this.toTop(r,n):n.horizontalScroll&&this.toLeft(r,n)}}},{key:"parseDataOptions",value:function(t){var n=t.getAttribute("data-scroll-options");return n?JSON.parse(n):{}}}]),t}();return Rt.defaults={trigger:"[data-scroll]",header:"[data-scroll-header]",duration:1e3,delay:0,easing:"easeOutQuint",offset:0,verticalScroll:!0,horizontalScroll:!1,stopScroll:!0,updateURL:!1,preventDefault:!0,stopPropagation:!0,searchContainerTimeout:4e3,outputLog:!1,initialized:null,beforeScroll:null,afterScroll:null,cancelScroll:null,completeScroll:null,stepScroll:null},Rt});

const sweetScroll = new SweetScroll({
  trigger: "a[href^='#']",
  verticalScroll: true,
  horizontalScroll: true,
  useVelocity: true
});