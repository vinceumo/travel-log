"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function composedTreeWalk(e,t,n){if(e.nodeType==Node.ELEMENT_NODE){var i=e;t&&t(i);var r=i.shadowRoot||i.webkitShadowRoot;if(r)return void composedTreeWalk(r,t,r);if("content"==i.localName){for(var o=i,s=o.getDistributedNodes?o.getDistributedNodes():[],a=0;a<s.length;a++)composedTreeWalk(s[a],t,n);return}if("slot"==i.localName){for(var d=i,u=d.assignedNodes?d.assignedNodes({flatten:!0}):[],h=0;h<u.length;h++)composedTreeWalk(u[h],t,n);return}}for(var c=e.firstChild;null!=c;)composedTreeWalk(c,t,n),c=c.nextSibling}function addInertStyle(e){if(!e.querySelector("style#inert-style")){var t=document.createElement("style");t.setAttribute("id","inert-style"),t.textContent="\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n",e.appendChild(t)}}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),slice=Array.prototype.slice,_focusableElementsString=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]"].join(","),InertRoot=function(){function e(t,n){_classCallCheck(this,e),this._inertManager=n,this._rootElement=t,this._managedNodes=new Set([]),this._rootElement.hasAttribute("aria-hidden")&&(this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden")),this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}return _createClass(e,[{key:"destructor",value:function(){this._observer.disconnect(),this._observer=null,this._rootElement&&(this.hasSavedAriaHidden?this._rootElement.setAttribute("aria-hidden",this.savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._rootElement=null,this._managedNodes.forEach(function(e){this._unmanageNode(e.node)},this),this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(e){var t=this;composedTreeWalk(e,function(e){return t._visitNode(e)});var n=document.activeElement;if(!document.body.contains(e)){for(var i=e,r=void 0;i;){if(i.nodeType===Node.DOCUMENT_FRAGMENT_NODE){r=i;break}i=i.parentNode}r&&(n=r.activeElement)}e.contains(n)&&(n.blur(),n===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(e){e.nodeType===Node.ELEMENT_NODE&&(e!==this._rootElement&&e.hasAttribute("inert")&&this._adoptInertRoot(e),(e.matches(_focusableElementsString)||e.hasAttribute("tabindex"))&&this._manageNode(e))}},{key:"_manageNode",value:function(e){var t=this._inertManager.register(e,this);this._managedNodes.add(t)}},{key:"_unmanageNode",value:function(e){var t=this._inertManager.deregister(e,this);t&&this._managedNodes["delete"](t)}},{key:"_unmanageSubtree",value:function(e){var t=this;composedTreeWalk(e,function(e){return t._unmanageNode(e)})}},{key:"_adoptInertRoot",value:function(e){var t=this._inertManager.getInertRoot(e);t||(this._inertManager.setInert(e,!0),t=this._inertManager.getInertRoot(e)),t.managedNodes.forEach(function(e){this._manageNode(e.node)},this)}},{key:"_onMutation",value:function(e,t){e.forEach(function(e){var t=e.target;if("childList"===e.type)slice.call(e.addedNodes).forEach(function(e){this._makeSubtreeUnfocusable(e)},this),slice.call(e.removedNodes).forEach(function(e){this._unmanageSubtree(e)},this);else if("attributes"===e.type)if("tabindex"===e.attributeName)this._manageNode(t);else if(t!==this._rootElement&&"inert"===e.attributeName&&t.hasAttribute("inert")){this._adoptInertRoot(t);var n=this._inertManager.getInertRoot(t);this._managedNodes.forEach(function(e){t.contains(e.node)&&n._manageNode(e.node)})}},this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return"_savedAriaHidden"in this}},{key:"savedAriaHidden",set:function(e){this._savedAriaHidden=e},get:function(){return this._savedAriaHidden}}]),e}(),InertNode=function(){function e(t,n){_classCallCheck(this,e),this._node=t,this._overrodeFocusMethod=!1,this._inertRoots=new Set([n]),this._destroyed=!1,this.ensureUntabbable()}return _createClass(e,[{key:"destructor",value:function(){this._throwIfDestroyed(),this._node&&(this.hasSavedTabIndex?this._node.setAttribute("tabindex",this.savedTabIndex):this._node.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete this._node.focus),this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){var e=this.node;if(e.matches(_focusableElementsString)){if(-1===e.tabIndex&&this.hasSavedTabIndex)return;e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex),e.setAttribute("tabindex","-1"),e.nodeType===Node.ELEMENT_NODE&&(e.focus=function(){},this._overrodeFocusMethod=!0)}else e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex,e.removeAttribute("tabindex"))}},{key:"addInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.add(e)}},{key:"removeInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots["delete"](e),0===this._inertRoots.size&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return"_savedTabIndex"in this}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(e){this._throwIfDestroyed(),this._savedTabIndex=e},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),e}(),InertManager=function(){function e(t){if(_classCallCheck(this,e),!t)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=t,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),addInertStyle(t.head||t.body||t.documentElement),"loading"===t.readyState?t.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}return _createClass(e,[{key:"setInert",value:function(e,t){if(t){if(this._inertRoots.has(e))return;var n=new InertRoot(e,this);if(e.setAttribute("inert",""),this._inertRoots.set(e,n),!this._document.body.contains(e))for(var i=e.parentNode;i;)11===i.nodeType&&addInertStyle(i),i=i.parentNode}else{if(!this._inertRoots.has(e))return;var r=this._inertRoots.get(e);r.destructor(),this._inertRoots["delete"](e),e.removeAttribute("inert")}}},{key:"getInertRoot",value:function(e){return this._inertRoots.get(e)}},{key:"register",value:function(e,t){var n=this._managedNodes.get(e);return void 0!==n?n.addInertRoot(t):n=new InertNode(e,t),this._managedNodes.set(e,n),n}},{key:"deregister",value:function(e,t){var n=this._managedNodes.get(e);return n?(n.removeInertRoot(t),n.destroyed&&this._managedNodes["delete"](e),n):null}},{key:"_onDocumentLoaded",value:function(){var e=slice.call(this._document.querySelectorAll("[inert]"));e.forEach(function(e){this.setInert(e,!0)},this),this._observer.observe(this._document.body,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(e,t){e.forEach(function(e){switch(e.type){case"childList":slice.call(e.addedNodes).forEach(function(e){if(e.nodeType===Node.ELEMENT_NODE){var t=slice.call(e.querySelectorAll("[inert]"));e.matches("[inert]")&&t.unshift(e),t.forEach(function(e){this.setInert(e,!0)},this)}},this);break;case"attributes":if("inert"!==e.attributeName)return;var t=e.target,n=t.hasAttribute("inert");this.setInert(t,n)}},this)}}]),e}(),inertManager=new InertManager(document);Object.defineProperty(Element.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(e){inertManager.setInert(this,e)}});
"use strict";var focusableElements=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],keyList={tab:9,escape:27},breakpoints={na:0,xs:320,sm:600,md:900,lg:1200,xl:1800};
"use strict";!function(){function n(n,t){t.classList.contains("is-open")?o(n,t):e(n,t)}function o(n,o){var e=document.querySelector("body"),t=document.querySelectorAll("body > *:not(.nav-bar-container):not(.main-navigation)");o.classList.remove("is-open"),n.classList.remove("is-open"),e.classList.remove("has-modal-open"),Array.prototype.forEach.call(t,function(n,o){n.inert=!1}),n.inert=!0}function e(n,o){var e=document.querySelector("body"),t=document.querySelectorAll("body > *:not(.nav-bar-container):not(.main-navigation)");o.classList.add("is-open"),n.classList.add("is-open"),e.classList.add("has-modal-open"),Array.prototype.forEach.call(t,function(n,o){n.inert=!0}),n.inert=!1}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll("button.burger"),t=document.querySelector("#main-navigation"),a=t.querySelectorAll("a, button");Array.prototype.forEach.call(e,function(r,c){var i=e[c];i.addEventListener("click",function(){n(t,i)}),Array.prototype.forEach.call(a,function(o,e){var r=a[e];r.addEventListener("click",function(){n(t,i)})}),document.onkeydown=function(n){n.keyCode==keyList.escape&&o(t,i)}})})}();
//# sourceMappingURL=maps/scriptsBundleMain.js.map