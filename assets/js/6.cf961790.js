(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{308:function(e,t,n){var r=n(1),o=n(6);r({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperties:n(170)})},309:function(e,t,n){var r=n(1),o=n(2),c=n(15),u=n(25).f,i=n(6),a=o((function(){u(1)}));r({target:"Object",stat:!0,forced:!i||a,sham:!i},{getOwnPropertyDescriptor:function(e,t){return u(c(e),t)}})},310:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(45),n(29),n(95),n(308),n(168),n(309),n(174),n(97),n(96);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},315:function(e,t,n){"use strict";var r=n(1),o=n(43).every,c=n(44),u=n(20),i=c("every"),a=u("every");r({target:"Array",proto:!0,forced:!i||!a},{every:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},336:function(e,t,n){var r=n(1),o=n(4),c=n(105),u=[].slice,i=function(e){return function(t,n){var r=arguments.length>2,o=r?u.call(arguments,2):void 0;return e(r?function(){("function"==typeof t?t:Function(t)).apply(this,o)}:t,n)}};r({global:!0,bind:!0,forced:/MSIE .\./.test(c)},{setTimeout:i(o.setTimeout),setInterval:i(o.setInterval)})},343:function(e,t,n){},382:function(e,t,n){"use strict";var r=n(343);n.n(r).a},396:function(e,t,n){"use strict";n.r(t);n(182),n(315),n(102),n(180),n(336);var r=n(310),o=n(107),c={props:{stenoStrokes:{required:!0,type:Array,validator:function(e){return!!Array.isArray(e)&&e.every((function(e){return!!Array.isArray(e)&&e.every((function(e){return 2===e.length&&e.every((function(e){return"string"==typeof e}))}))}))}}},setup:function(e){var t=e.stenoStrokes,n=Object(o.d)({text:"",word:"",timeoutId:null,wordIndex:-1,strokeIndex:-1,speed:3.5,playing:!1,done:!1}),c=Object(o.a)((function(){return"".concat(n.text).concat(n.word)})),u=Object(o.a)((function(){return n.wordIndex<0||n.wordIndex===t.length?"":t[n.wordIndex][n.strokeIndex][1]})),i=Object(o.a)((function(){return t.reduce((function(e,t){return e+t.length}),0)})),a=Object(o.a)((function(){return t.reduce((function(e,t){return e+t[t.length-1][0].length}),0)})),s=function(){n.timeoutId=setTimeout((function(){return d()}),1e3/n.speed)},d=function(){n.wordIndex<0?(n.wordIndex=0,n.strokeIndex=0):t[n.wordIndex].length===n.strokeIndex+1?(n.strokeIndex=0,n.wordIndex+=1):n.strokeIndex+=1,0===n.strokeIndex&&(n.text+=n.word,n.word=""),n.wordIndex<t.length?(n.word=t[n.wordIndex][n.strokeIndex][0],s()):n.done=!0};return Object(o.c)((function(){clearTimeout(n.timeoutId),n.timeoutId=null})),Object(r.a)(Object(r.a)({},Object(o.f)(n)),{},{handlePlay:function(e){n.playing=e,e?(n.done&&(n.done=!1,n.text="",n.word="",n.wordIndex=-1,n.strokeIndex=-1),n.timeoutId||s()):(clearTimeout(n.timeoutId),n.timeoutId=null)},handleSpeed:function(e){n.speed=e},currentText:c,currentStroke:u,characterCount:a,strokeCount:i})}},u=(n(382),n(42)),i=Object(u.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Card",{attrs:{title:"What Steno Looks Like"}},[n("div",{staticClass:"wrapper"},[n("Demo-Controls",{attrs:{done:e.done,strokeCount:e.strokeCount,characterCount:e.characterCount},on:{play:e.handlePlay,speed:e.handleSpeed}}),e._v(" "),n("h3",[e._v("Output")]),e._v(" "),n("Demo-TypeArea",{attrs:{text:e.currentText,playing:e.playing}}),e._v(" "),n("h3",[e._v("\n      Steno layout\n      "),n("div",{staticClass:"stroke-name"},[e._v("\n        Syllable:\n        "),n("div",{staticClass:"stroke-container"},[e._v("\n          "+e._s(e.currentStroke)+"\n        ")])])]),e._v(" "),n("Steno-Display",{attrs:{stroke:e.currentStroke,labels:"all"}})],1)])}),[],!1,null,"4ae6a6b2",null);t.default=i.exports}}]);