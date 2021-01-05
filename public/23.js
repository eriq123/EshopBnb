(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{b6xi:function(t,e,n){"use strict";n.r(e);var a={components:{"app-raw-menu":function(){return n.e(0).then(n.bind(null,"AWs8"))}},data:function(){return{headers:[{text:"Code",align:"start",value:"id"},{text:"Unit Name",value:"name"},{text:"Actions",value:"actions"}],items:[],loading:!1,showForm:!1,deleteForm:!1,formData:{action:null,id:0,base_name:null},itemIndex:-1,menu:{id:0,name:null}}},mounted:function(){this.getBaseUnits()},methods:{selectunitsofmeasurement:function(t){this.menu.id=t.id,this.menu.name=t.name},getBaseUnits:function(){var t=this;this.loading=!0,axios.post("/units/base/view").then((function(e){t.items=e.data.base,t.resetMenu(),t.loading=!1})).catch((function(e){e.response&&(console.log(e.response),t.$store.commit("errorSnackbar")),t.loading=!1}))},showAddForm:function(){this.formData.action="add",this.formData.id=0,this.formData.base_name=null,this.itemIndex=-1,this.showForm=!0},showUpdateForm:function(t){this.formData.action="update",this.formData.id=t.id,this.formData.base_name=t.name,this.itemIndex=this.items.indexOf(t),this.showForm=!0},deleteProcess:function(t){var e=this;t.id?confirm("Are you sure you want to delete ".concat(t.name))&&(this.loading=!0,axios.post("/units/base/delete",{id:t.id}).then((function(n){e.$store.commit("showSnackbar",{color:!0,text:"".concat(n.data.base.name," deleted.")}),e.itemIndex=e.items.indexOf(t),e.items.splice(e.itemIndex,1),e.loading=!1,e.showForm=!1,e.menu.id==n.data.base.id&&e.resetMenu()})).catch((function(t){t.response&&(console.log(t.response),e.$store.commit("errorSnackbar")),e.loading=!1}))):this.$store.commit("errorSnackbar")},submitForm:function(){this.formData.base_name?(this.loading=!0,"add"==this.formData.action?this.processAdd():this.processUpdate(),this.showForm=!1):this.$store.commit("showSnackbar",{color:!1,text:"Unit name is required."})},processAdd:function(){var t=this;axios.post("/units/base/add",{name:this.formData.base_name}).then((function(e){t.$store.commit("showSnackbar",{color:!0,text:"".concat(e.data.base.name," added.")}),t.items.push(e.data.base),t.loading=!1})).catch((function(e){e.response&&(console.log(e.response),t.$store.commit("errorSnackbar")),t.loading=!1}))},processUpdate:function(){var t=this;axios.post("/units/base/update",{id:this.formData.id,name:this.formData.base_name}).then((function(e){t.$store.commit("showSnackbar",{color:!0,text:"".concat(e.data.base.name," updated.")}),Object.assign(t.items[t.itemIndex],e.data.base),t.loading=!1,e.data.base.id==t.menu.id&&(t.menu.name=e.data.base.name)})).catch((function(e){e.response&&(console.log(e.response),t.$store.commit("errorSnackbar")),t.loading=!1}))},resetMenu:function(){this.menu.id=this.items[0].id,this.menu.name=this.items[0].name},showConverts:function(t){this.$emit("showconverts",t)}},computed:{customID:function(){return this.formData.id>0?"UNIT - ".concat(this.formData.id.toString().padStart(4,"0")):"N/A"}}},o=n("KHd+"),s=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{attrs:{sm:"10","offset-sm":"1"}},[n("v-card",{attrs:{flat:""}},[n("v-card-title",[n("span",{staticClass:"mr-1"},[t._v("Units of Measurement:")]),t._v(" "),n("app-raw-menu",{attrs:{menu:t.items,selected:t.menu.name},on:{selectedmenu:t.selectunitsofmeasurement}}),t._v(" "),n("v-btn",{staticClass:"ml-3",attrs:{text:"",outlined:"",color:"green darken-4"},on:{click:t.showAddForm}},[t._v("\n                        Add\n                    ")])],1),t._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{sm:"12"}},[n("v-data-table",{attrs:{headers:t.headers,items:t.items,loading:t.loading},on:{"click:row":t.showConverts},scopedSlots:t._u([{key:"item.id",fn:function(e){var n=e.item;return[t._v("\n                                    UNIT -\n                                    "+t._s(n.id.toString().padStart(4,"0"))+"\n                                ")]}},{key:"item.actions",fn:function(e){var a=e.item;return[n("v-btn",{attrs:{text:"",color:"blue darken-4"},on:{click:function(e){return e.stopPropagation(),t.showUpdateForm(a)}}},[t._v("Update")]),t._v(" "),n("v-btn",{attrs:{text:"",color:"red darken-4"},on:{click:function(e){return e.stopPropagation(),t.deleteProcess(a)}}},[t._v("Delete")])]}},t.showForm?{key:"body.prepend",fn:function(){return[n("tr",[n("td",[t._v("\n                                            "+t._s(t.customID)+"\n                                        ")]),t._v(" "),n("td",[n("v-text-field",{attrs:{autofocus:"",label:"Unit Name"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm(e)}},model:{value:t.formData.base_name,callback:function(e){t.$set(t.formData,"base_name",e)},expression:"formData.base_name"}})],1),t._v(" "),n("td",[n("v-btn",{staticClass:"ml-1 my-1",attrs:{text:"",outlined:"",color:"green darken-4"},on:{click:function(e){return e.stopPropagation(),t.submitForm(e)}}},[t._v("\n                                                Save\n                                            ")]),t._v(" "),n("v-btn",{staticClass:"ml-1 my-1",attrs:{text:"",outlined:""},on:{click:function(e){e.stopPropagation(),t.showForm=!t.showForm}}},[t._v("\n                                                Cancel\n                                            ")])],1)])]},proxy:!0}:null],null,!0)})],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=s.exports}}]);