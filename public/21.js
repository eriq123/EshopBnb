(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{IQ1M:function(t,e,a){"use strict";a.r(e);var o=a("o0o1"),n=a.n(o);function r(t,e,a,o,n,r,s){try{var i=t[r](s),l=i.value}catch(t){return void a(t)}i.done?e(l):Promise.resolve(l).then(o,n)}function s(t){return function(){var e=this,a=arguments;return new Promise((function(o,n){var s=t.apply(e,a);function i(t){r(s,o,n,i,l,"next",t)}function l(t){r(s,o,n,i,l,"throw",t)}i(void 0)}))}}var i={components:{"app-report-datatable":function(){return a.e(22).then(a.bind(null,"MPol"))},"app-download-excel":a("8tky").a,"app-datepicker":function(){return a.e(23).then(a.bind(null,"1EA1"))}},data:function(){return{toggle:{state:!1,loading:!1,disabled:!1},fields:{Code:"code","Category - Raw Item":"name",Purchase:"custom_purchase",Rts:"custom_rts",Sold:"custom_sold",Loss:"custom_loss","Available units":"units"},data:[],header:null,filename:null,dialog:!1,date:{from:null,to:null},today:null}},created:function(){var t=this;return s(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.post("/inventory/report/today").then((function(e){t.date.from=t.date.to=t.today=e.data}));case 2:case"end":return e.stop()}}),e)})))()},methods:{viewLogs:function(){window.location.href="/logs"},savefromdate:function(t){this.date.from=t},savetodate:function(t){this.date.to=t},toggleChange:function(t){this.toggle.disabled=this.toggle.loading=t},getExcelData:function(t){var e=this;return s(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.prepareHeader(),a=0,t.next=4,axios.post("/inventory/report/download",e.date).then((function(t){e.data=t.data.log,t.data.log.length>0?a=1:e.$store.commit("showSnackbar",{color:!1,text:"There are no records found. Please check the action logs."})})).catch((function(t){t.response?(console.log(t.response),t.response.data.error_message?e.$store.commit("showSnackbar",{color:!1,text:t.response.data.error_message}):e.$store.commit("errorSnackbar")):console.log(t)}));case 4:a&&e.$store.commit("showSnackbar",{color:!0,text:"Downloading..."});case 5:case"end":return t.stop()}}),t)})))()},prepareHeader:function(){this.$store.commit("showSnackbar",{color:!0,text:"Please wait while preparing data."});var t={year:"numeric",month:"long",day:"numeric"},e=new Date(this.date.from).toLocaleDateString("en-US",t),a=new Date(this.date.to).toLocaleDateString("en-US",t);this.filename="Inventory Report ".concat(e," - ").concat(a),this.header="Eshop Beauty and Bottles Online Shop\n Inventory Report\n ".concat(e," - ").concat(a)},downloadFinished:function(){this.dialog=!1,this.date.from=this.date.to=this.today,this.$store.commit("showSnackbar",{color:!0,text:"Inventory report download done."})}},computed:{switchLabel:function(){return 1==this.toggle.state?"Products":"Raw Items"}}},l=a("KHd+"),c=Object(l.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-switch",{staticClass:"ml-3",attrs:{inset:"",ripple:"",disabled:t.toggle.disabled,loading:t.toggle.disabled,label:"Filtered by: "+t.switchLabel},model:{value:t.toggle.state,callback:function(e){t.$set(t.toggle,"state",e)},expression:"toggle.state"}}),t._v(" "),a("v-btn",{attrs:{text:"",color:"pink accent-2"},on:{click:function(e){t.dialog=!t.dialog}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-clipboard-arrow-down-outline")]),t._v("\n        Download Report\n      ")],1),t._v(" "),a("v-btn",{attrs:{text:"",color:"pink accent-2"},on:{click:t.viewLogs}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-file-document-outline")]),t._v("\n        Action Logs\n      ")],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"350px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[t._v(" Inventory report ")]),t._v(" "),a("v-card-text",[a("app-datepicker",{attrs:{date:t.date.from,label:"Start Date"},on:{savedate:t.savefromdate}}),t._v(" "),a("app-datepicker",{attrs:{date:t.date.to,label:"End Date"},on:{savedate:t.savetodate}})],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),t._v(" "),a("app-download-excel",{staticClass:"green--text text--darken-3 v-btn v-btn--flat v-btn--text theme--light v-size--default",attrs:{name:t.filename,header:t.header,data:t.data,fields:t.fields,"before-generate":t.getExcelData,"before-finish":t.downloadFinished}},[t._v("\n          Save\n        ")])],1)],1)],1),t._v(" "),a("app-report-datatable",{attrs:{toggleState:t.toggle.state},on:{toggleChange:t.toggleChange}})],1)}),[],!1,null,null,null);e.default=c.exports}}]);