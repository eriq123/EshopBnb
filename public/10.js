(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8dA8":function(t,e,r){"use strict";r.r(e);var n=r("o0o1"),o=r.n(n);function a(t,e,r,n,o,a,s){try{var i=t[a](s),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(n,o)}var s,i,c={data:function(){return{tab:null,formUserData:{first_name:null,last_name:null,username:null},formPasswordData:{old_password:null,new_password:null,new_password_confirmation:null}}},created:(s=o.a.mark((function t(){var e=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/user").then((function(t){e.setFormData(t.data)})).catch((function(t){t.response?e.$store.commit("errorSnackbar"):console.log(t)}));case 2:case"end":return t.stop()}}),t)})),i=function(){var t=this,e=arguments;return new Promise((function(r,n){var o=s.apply(t,e);function i(t){a(o,r,n,i,c,"next",t)}function c(t){a(o,r,n,i,c,"throw",t)}i(void 0)}))},function(){return i.apply(this,arguments)}),methods:{setFormData:function(t){this.formUserData.first_name=t.first_name,this.formUserData.last_name=t.last_name,this.formUserData.username=t.username},processUpdateAccount:function(){var t=this;0==this.tab?this.formUserData.isUsername=!1:1==this.tab&&(this.formUserData.isUsername=!0),axios.post("/account/update",this.formUserData).then((function(e){0==t.tab?t.$store.commit("showSnackbar",{color:!0,text:"Refresh the page to see the changes."}):1==t.tab&&t.$store.commit("showSnackbar",{color:!0,text:"Successfully updated."})})).catch((function(e){if(e.response){console.log(e.response);var r=!1;e.response.data.errors?(r=!0,e.response.data.errors.first_name?t.$store.commit("showSnackbar",{color:!1,text:e.response.data.errors.first_name[0]}):e.response.data.errors.last_name?t.$store.commit("showSnackbar",{color:!1,text:e.response.data.errors.last_name[0]}):e.response.data.errors.username&&t.$store.commit("showSnackbar",{color:!1,text:e.response.data.errors.username[0]})):console.log(e),r||t.$store.commit("errorSnackbar")}}))},processPasswordUpdate:function(){var t=this;axios.post("/account/password",this.formPasswordData).then((function(e){e.data.status;t.$store.commit("showSnackbar",{color:!0,text:"Password has been updated."}),t.formPasswordData.old_password=t.formPasswordData.new_password=t.formPasswordData.new_password_confirmation=null})).catch((function(e){e.response?(console.log(e.response),e.response.data.error?t.$store.commit("showSnackbar",{color:!1,text:e.response.data.error}):t.$store.commit("errorSnackbar")):console.log(e)}))},updateAction:function(){0==this.tab||1==this.tab?this.processUpdateAccount():2==this.tab&&this.processPasswordUpdate()}}},u=r("KHd+"),l=Object(u.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{attrs:{sm:"8","offset-sm":"2"}},[r("v-card",{staticClass:"px-5",attrs:{outlined:""}},[r("v-card-title",[t._v("\n                    My Account\n                    "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"blue darken-4",text:""},on:{click:t.updateAction}},[t._v("\n                        Update\n                    ")])],1),t._v(" "),r("v-card-text",[r("v-tabs",{attrs:{"background-color":"transparent",grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab",[t._v("Personal Information")]),t._v(" "),r("v-tab",[t._v("Username")]),t._v(" "),r("v-tab",[t._v("Password")])],1),t._v(" "),r("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab-item",[r("v-row",{staticClass:"py-5"},[r("v-col",{attrs:{sm:"12"}},[r("v-text-field",{attrs:{label:"First Name"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateAction(e)}},model:{value:t.formUserData.first_name,callback:function(e){t.$set(t.formUserData,"first_name",e)},expression:"formUserData.first_name"}})],1),t._v(" "),r("v-col",{attrs:{sm:"12"}},[r("v-text-field",{attrs:{label:"Last Name"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateAction(e)}},model:{value:t.formUserData.last_name,callback:function(e){t.$set(t.formUserData,"last_name",e)},expression:"formUserData.last_name"}})],1)],1)],1),t._v(" "),r("v-tab-item",[r("v-row",{staticClass:"py-5"},[r("v-col",{attrs:{sm:"12"}},[r("v-text-field",{attrs:{label:"Username"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateAction(e)}},model:{value:t.formUserData.username,callback:function(e){t.$set(t.formUserData,"username",e)},expression:"formUserData.username"}})],1)],1)],1),t._v(" "),r("v-tab-item",[r("v-row",{staticClass:"py-5"},[r("v-col",{attrs:{sm:"12"}},[r("v-text-field",{attrs:{type:"password",label:"Old Password"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateAction(e)}},model:{value:t.formPasswordData.old_password,callback:function(e){t.$set(t.formPasswordData,"old_password",e)},expression:"\n                                            formPasswordData.old_password\n                                        "}})],1),t._v(" "),r("v-col",{attrs:{sm:"12"}},[r("v-text-field",{attrs:{type:"password",label:"New Password"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateAction(e)}},model:{value:t.formPasswordData.new_password,callback:function(e){t.$set(t.formPasswordData,"new_password",e)},expression:"\n                                            formPasswordData.new_password\n                                        "}})],1),t._v(" "),r("v-col",{attrs:{sm:"12"}},[r("v-text-field",{attrs:{type:"password",label:"Confirm New Password"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateAction(e)}},model:{value:t.formPasswordData.new_password_confirmation,callback:function(e){t.$set(t.formPasswordData,"new_password_confirmation",e)},expression:"\n                                            formPasswordData.new_password_confirmation\n                                        "}})],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=l.exports},ls82:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),s=new k(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var i=_(s,r);if(i){if(i===l)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,s),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function f(){}function d(){}function p(){}var h={};h[o]=function(){return this};var m=Object.getPrototypeOf,v=m&&m(m(D([])));v&&v!==e&&r.call(v,o)&&(h=v);var y=p.prototype=f.prototype=Object.create(h);function w(t){["next","throw","return"].forEach((function(e){i(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(o,a){function s(){return new e((function(n,s){!function n(o,a,s,i){var c=u(t[o],t,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,s,i)}),(function(t){n("throw",t,s,i)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,i)}))}i(c.arg)}(o,a,n,s)}))}return n=n?n.then(s,s):s()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function g(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(g,this),this.reset(!0)}function D(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:void 0,done:!0}}return d.prototype=y.constructor=p,p.constructor=d,d.displayName=i(p,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,i(t,s,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var s=new b(c(e,r,n,o),a);return t.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},w(y),i(y,s,"Generator"),y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=D,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return s.type="throw",s.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var i=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(i&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=t,s.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:D(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(t,e,r){t.exports=r("ls82")}}]);