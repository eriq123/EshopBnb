(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"YD/W":function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r);function a(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){a(i,r,o,c,s,"next",t)}function s(t){a(i,r,o,c,s,"throw",t)}c(void 0)}))}}var c,s={components:{"app-assembled-products":function(){return n.e(19).then(n.bind(null,"XMTT"))},"app-raw-menu":function(){return n.e(0).then(n.bind(null,"AWs8"))},"app-raw-converted-units":function(){return n.e(1).then(n.bind(null,"9hRD"))},"app-assembled-qrcode":function(){return n.e(2).then(n.bind(null,"17CV"))}},data:function(){return{selected:!1,dialog:{action:"Add",show:!1,loading:!1,category_name:null,raw_name:null,raw_id:0,product_id:0,quantity:null,convert_collection:[],convert_name:null,convert_value:1,base_name:null},product_name:null,autocomplete:{selected:null,items:[],loading:!1,name:null},assembled:{headers:[{text:"Code",align:"start",value:"id"},{text:"Raw Item Name",value:"name"},{text:"Quantity",value:"units_needed",align:"end"}],items:[],loading:!1},rawItemsReady:!1,duplicateAttach:!1,qr_code:null}},mounted:function(){this.getAutocompleteRawItems()},methods:{showAddDialog:function(){this.autocomplete.selected?(console.log(this.autocomplete),console.log(this.dialog),this.dialog.action="Add",this.dialog.category_name=this.autocomplete.selected.category.name,this.dialog.raw_name=this.autocomplete.selected.name,this.dialog.raw_id=this.autocomplete.selected.id,this.dialog.base_name=this.autocomplete.selected.base.name,this.dialog.show=!0):this.$store.commit("showSnackbar",{color:!1,text:"Please select raw item first."})},showEditDialog:function(t){var e=this;return i(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.assembled.loading=!0,n.next=3,e.getConvertByBase(t.base_id);case 3:e.dialog.action="Update",e.dialog.category_name=t.category.name,e.dialog.raw_name=t.name,e.dialog.raw_id=t.id,e.dialog.base_name=t.base.name,e.dialog.quantity=t.pivot.quantity,e.assembled.loading=!1,e.dialog.show=!0;case 11:case"end":return n.stop()}}),n)})))()},processAddAndUpdate:function(){var t=this;return i(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Add"!=t.dialog.action){e.next=5;break}return e.next=3,t.attach();case 3:e.next=7;break;case 5:return e.next=7,t.updateAttach();case 7:case"end":return e.stop()}}),e)})))()},processRemove:function(){var t=this;return i(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.assembled.loading=!0,e.next=3,axios.post("/products/assembled/detach",t.dialog).then((function(e){t.$store.commit("showSnackbar",{color:!0,text:"".concat(t.dialog.raw_name," removed.")}),t.assembled.items=e.data.product.map((function(t){return t.units_needed=t.pivot.quantity,t}))})).catch((function(e){e.response&&(console.log(e.response),t.$store.commit("errorSnackbar"))}));case 3:t.assembled.loading=!1,t.dialog.show=!1;case 5:case"end":return e.stop()}}),e)})))()},attach:function(){var t=this;return i(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.checkForDuplicates(),t.duplicateAttach){e.next=10;break}return t.dialog.quantity=t.dialog.quantity*t.dialog.convert_value,t.assembled.loading=!0,e.next=6,axios.post("/products/assembled/attach",t.dialog).then((function(e){t.$store.commit("showSnackbar",{color:!0,text:"".concat(t.dialog.raw_name," added.")}),t.assembled.items=e.data.product.map((function(t){return t.units_needed=t.pivot.quantity,t}))})).catch((function(e){e.response&&(console.log(e.response),t.$store.commit("errorSnackbar"))}));case 6:t.assembled.loading=!1,t.dialog.show=!1,e.next=11;break;case 10:t.$store.commit("showSnackbar",{color:!1,text:"This raw item already exist."});case 11:case"end":return e.stop()}}),e)})))()},updateAttach:function(){var t=this;return i(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.dialog.quantity){e.next=8;break}return t.assembled.loading=!0,e.next=4,axios.post("/products/assembled/update",t.dialog).then((function(e){t.$store.commit("showSnackbar",{color:!0,text:"".concat(t.dialog.raw_name," updated.")}),t.assembled.items=e.data.product.map((function(t){return t.units_needed=t.pivot.quantity,t}))})).catch((function(e){e.response&&(console.log(e.response),t.$store.commit("errorSnackbar"))}));case 4:t.assembled.loading=!1,t.dialog.show=!1,e.next=9;break;case 8:t.$store.commit("showSnackbar",{color:!1,text:"Quantity field is required."});case 9:case"end":return e.stop()}}),e)})))()},getAutocompleteRawItems:function(){var t=this;return i(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.post("/products/raw/view").then((function(e){t.autocomplete.items=e.data.raw,t.rawItemsReady=!0})).catch((function(e){e.response&&(console.log(e.response),t.$store.commit("errorSnackbar"))}));case 2:case"end":return e.stop()}}),e)})))()},productselected:function(t){var e=this;return i(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.selected=!0,e.dialog.product_id=t.id,e.product_name=t.name,e.qr_code=t.qr_code,e.autocomplete.selected=null,e.assembled.items=[],e.assembled.loading=!0,n.next=9,axios.post("/products/assembled/view",{id:t.id}).then((function(t){e.assembled.items=t.data.raw.map((function(t){return t.units_needed=t.pivot.quantity,t}))})).catch((function(t){t.response&&(console.log(t.response),e.$store.commit("errorSnackbar"))}));case 9:e.assembled.loading=!1;case 10:case"end":return n.stop()}}),n)})))()},getConvertByBase:function(t){var e=this;return i(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.dialog.quantity=null,n.next=3,axios.post("/units/convertsByBase",{id:t}).then((function(t){e.dialog.convert_collection=t.data.convert,e.dialog.convert_name=e.dialog.convert_collection[0].name,e.dialog.convert_value=e.dialog.convert_collection[0].value})).catch((function(t){t.response&&(console.log(t.response),e.$store.commit("errorSnackbar"))}));case 3:case"end":return n.stop()}}),n)})))()},checkForDuplicates:function(){var t=this;this.duplicateAttach=!1,this.assembled.items.forEach((function(e){t.dialog.raw_id==e.id&&(t.duplicateAttach=!0)}))},selectedconvertquantity:function(t){this.dialog.convert_name=t.name,this.dialog.convert_value=t.value}},watch:{"autocomplete.selected":(c=i(o.a.mark((function t(e,n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=5;break}return this.dialog.loading=!0,t.next=4,this.getConvertByBase(this.autocomplete.selected.base_id);case 4:this.dialog.loading=!1;case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return c.apply(this,arguments)})}},l=n("KHd+"),u=Object(l.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[t.selected?t._e():n("app-assembled-products",{attrs:{rawItemsReady:t.rawItemsReady},on:{productselected:t.productselected}}),t._v(" "),t.selected?n("v-row",[n("v-col",[n("v-card",{attrs:{flat:""}},[n("v-card-title",[t._v("\n                    Assemble "+t._s(this.product_name)+"\n                    "),n("v-btn",{staticClass:"ml-3",attrs:{text:"",outlined:"",color:"green darken-4",loading:t.dialog.loading},on:{click:t.showAddDialog}},[t._v("\n                        Add\n                    ")]),t._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog.show,callback:function(e){t.$set(t.dialog,"show",e)},expression:"dialog.show"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(this.dialog.action))])]),t._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{sm:"12"}},[n("v-text-field",{attrs:{disabled:"",label:"Category Name",value:t.dialog.category_name}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{sm:"12"}},[n("v-text-field",{attrs:{disabled:"",label:"Raw Item Name",value:t.dialog.raw_name}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("v-text-field",{attrs:{type:"number",label:"Quantity",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.processAddAndUpdate(e)}},scopedSlots:t._u([{key:"append-outer",fn:function(){return[n("app-raw-menu",{attrs:{menu:t.dialog.convert_collection,selected:t.dialog.convert_name},on:{selectedmenu:t.selectedconvertquantity}})]},proxy:!0}],null,!1,299366369),model:{value:t.dialog.quantity,callback:function(e){t.$set(t.dialog,"quantity",e)},expression:"dialog.quantity"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("app-raw-converted-units",{attrs:{value:t.dialog.quantity,convertValue:t.dialog.convert_value,formDataBaseName:t.dialog.base_name}})],1)],1)],1),t._v(" "),n("v-card-actions",["Update"==t.dialog.action?n("v-btn",{attrs:{text:"",color:"red darken-3"},on:{click:t.processRemove}},[t._v("\n                                    Remove\n                                ")]):t._e(),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog.show=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{text:"",color:"green darken-3"},on:{click:t.processAddAndUpdate}},[t._v("\n                                    Save\n                                ")])],1)],1)],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.selected=!1}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-arrow-left")]),t._v("\n                        Back to Products\n                    ")],1)],1),t._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{sm:"3"}},[n("app-assembled-qrcode",{staticClass:"right-align",attrs:{value:t.qr_code,level:"H"}})],1),t._v(" "),n("v-col",{attrs:{sm:"9"}},[n("v-autocomplete",{attrs:{"search-input":t.autocomplete.name,loading:t.autocomplete.loading,items:t.autocomplete.items,"item-text":"name","item-value":"id",placeholder:"Search...",label:"Raw Items",hint:"Click the add button after selecting your preferred raw item.","persistent-hint":"","return-object":"",autofocus:"",clearable:"","open-on-clear":"",color:"pink accent-1"},on:{"update:searchInput":function(e){return t.$set(t.autocomplete,"name",e)},"update:search-input":function(e){return t.$set(t.autocomplete,"name",e)}},model:{value:t.autocomplete.selected,callback:function(e){t.$set(t.autocomplete,"selected",e)},expression:"autocomplete.selected"}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{sm:"12"}},[n("v-data-table",{attrs:{headers:t.assembled.headers,items:t.assembled.items,loading:t.assembled.loading},on:{"click:row":t.showEditDialog},scopedSlots:t._u([{key:"item.id",fn:function(e){var n=e.item;return[t._v("\n                                    RI -\n                                    "+t._s(n.id.toString().padStart(4,"0"))+"\n                                ")]}},{key:"item.units_needed",fn:function(e){var n=e.item;return[t._v("\n                                    "+t._s(n.units_needed)+"\n                                    "+t._s(n.base.name)+"\n                                ")]}}],null,!1,112599462)})],1)],1)],1)],1)],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=u.exports},ls82:function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new k(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return E()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===u)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u={};function d(){}function p(){}function h(){}var m={};m[o]=function(){return this};var f=Object.getPrototypeOf,v=f&&f(f(L([])));v&&v!==e&&n.call(v,o)&&(m=v);var g=h.prototype=d.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function y(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,u;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=g.constructor=h,h.constructor=p,p.displayName=c(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(y.prototype),y.prototype[a]=function(){return this},t.AsyncIterator=y,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new y(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),c(g,i,"Generator"),g[o]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},o0o1:function(t,e,n){t.exports=n("ls82")}}]);