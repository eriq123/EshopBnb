(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{b2o5:function(t,n,r){"use strict";r.r(n);var e={props:{color:{type:String},text:{required:!0},visible:{required:!0}},data:function(){return{}}},o=r("KHd+"),c=Object(o.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-snackbar",{attrs:{app:"",right:"",top:"",rounded:"",timeout:"2000",color:t.color,value:t.visible},on:{input:function(n){return t.$store.commit("closeSnackbar")}},scopedSlots:t._u([{key:"action",fn:function(n){var e=n.attrs;return[r("v-btn",t._b({attrs:{dark:"",text:""},on:{click:function(n){return t.$store.commit("closeSnackbar")}}},"v-btn",e,!1),[t._v("\n            Close\n        ")])]}}])},[t._v("\n    "+t._s(this.text)+"\n\n    ")])}),[],!1,null,null,null);n.default=c.exports}}]);