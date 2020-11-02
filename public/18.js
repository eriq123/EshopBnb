(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{87:function(t,e,n){"use strict";n.r(e);var o={components:{"app-raw-category":function(){return n.e(19).then(n.bind(null,96))},"app-raw-menu":function(){return n.e(0).then(n.bind(null,93))},"app-raw-dialog":function(){return n.e(20).then(n.bind(null,97))},"app-raw-converted-units":function(){return n.e(1).then(n.bind(null,94))},"app-raw-qrcode":function(){return n.e(2).then(n.bind(null,83))}},data:function(){return{selected:!1,showForm:!1,dialogAction:null,qrcode:null,formInput:{quantity:null,reorder_point:null},formData:{category_id:0,category_name:null,name:null,quantity:null,reorder_point:null,base_id:0,base_name:null},headers:[{text:"Code",align:"start",value:"id"},{text:"Raw Item Name",value:"name"},{text:"Quantity",value:"quantity",align:"end"},{text:"Reorder Point",value:"reorder_point",align:"end"}],loading:!1,items:[],itemIndex:-1,base_collection:[],convert_collection:[],convertFiltered:[],convert:{quantity:{name:null,value:1},reorder_point:{name:null,value:1}},base_count:!0,convert_count:!0}},mounted:function(){var t=this;axios.post("/units/all").then((function(e){t.base_collection=e.data.base,t.convert_collection=e.data.convert,t.base_count=e.data.base.length>0,t.convert_count=e.data.convert.length>0,0==t.base_count&&0==t.convert_count&&(t.convert_count=!0)})).catch((function(e){e.response&&(console.log(e.response),t.$store.commit("errorSnackbar"))}))},methods:{unitsCrud:function(){window.location.href="/units/"},convertFilter:function(){var t=this;this.convertFiltered=[],this.convert_collection.forEach((function(e){e.base_id==t.formData.base_id&&t.convertFiltered.push(e)})),this.convert.quantity.name=this.convert.reorder_point.name=this.convertFiltered[0].name,this.convert.quantity.value=this.convert.reorder_point.value=this.convertFiltered[0].value},processdelete:function(){var t=this;axios.post("/products/raw/delete",this.formData).then((function(e){t.$store.commit("showSnackbar",{color:!0,text:"".concat(e.data.raw.name," deleted.")}),t.items.splice(t.itemIndex,1),t.showForm=!1})).catch((function(e){e.response&&(console.log(e.response),t.$store.commit("errorSnackbar"))}))},processrawsave:function(){var t=this;this.formData.quantity=this.convert.quantity.value*this.formInput.quantity,this.formData.reorder_point=this.convert.reorder_point.value*this.formInput.reorder_point,axios.post("Add"==this.dialogAction?"/products/raw/add":"/products/raw/update",this.formData).then((function(e){var n=e.data.raw;"Add"==t.dialogAction?(t.$store.commit("showSnackbar",{color:!0,text:"".concat(n.name," added.")}),t.items.push(n)):(t.$store.commit("showSnackbar",{color:!0,text:"".concat(n.name," has been updated.")}),Object.assign(t.items[t.itemIndex],n)),t.showForm=!1})).catch((function(e){e.response&&(console.log(e.response),t.$store.commit("errorSnackbar"))}))},selectedconvertquantity:function(t){this.convert.quantity.name=t.name,this.convert.quantity.value=t.value},selectedconvertreorderpoint:function(t){this.convert.reorder_point.name=t.name,this.convert.reorder_point.value=t.value},selectunitsofmeasurement:function(t){this.formData.base_id=t.id,this.formData.base_name=t.name,this.convertFilter()},showAddDialog:function(){this.dialogAction="Add",this.qrcode=null,this.formData.name=null,this.formInput.quantity=null,this.formInput.reorder_point=null,this.formData.base_id=this.base_collection[0].id,this.formData.base_name=this.base_collection[0].name,this.convertFilter(),this.showForm=!0},showEditDialog:function(t){this.dialogAction="Update",this.qrcode=t.qr_code,this.itemIndex=this.items.indexOf(t),this.formData.id=t.id,this.formData.name=t.name,this.formInput.quantity=t.quantity,this.formInput.reorder_point=t.reorder_point,this.formData.base_id=t.base.id,this.formData.base_name=t.base.name,this.convertFilter(),this.showForm=!0},showrawitems:function(t){var e=this;this.selected=!0,this.formData.category_id=t.id,this.formData.category_name=t.name,this.loading=!0,axios.post("/products/raw/view",{id:this.formData.category_id}).then((function(t){e.items=t.data.raw,e.loading=!1})).catch((function(t){t.response&&(console.log(t.response),e.$store.commit("errorSnackbar")),e.loading=!1}))}},computed:{}},a=n(0),r=Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[t.selected?t._e():n("app-raw-category",{on:{showrawitems:t.showrawitems}}),t._v(" "),t.selected?n("v-row",[n("v-col",[n("v-card",{attrs:{flat:""}},[n("v-card-title",[t._v("\n                    "+t._s(this.formData.category_name)+" raw items\n                    "),n("v-btn",{staticClass:"ml-3",attrs:{text:"",outlined:"",color:"green darken-4",disabled:!t.base_count||!t.convert_count},on:{click:t.showAddDialog}},[t._v("\n                        Add\n                    ")]),t._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.showForm,callback:function(e){t.showForm=e},expression:"showForm"}},[n("app-raw-dialog",{attrs:{title:t.dialogAction,categoryName:t.formData.category_name},on:{closedialog:function(e){t.showForm=!1},processrawsave:t.processrawsave,processdelete:t.processdelete},scopedSlots:t._u([{key:"dialogForm",fn:function(){return[n("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Raw item name"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({attrs:{text:""},on:{click:t.unitsCrud}},"v-btn",a,!1),o),[t._v("\n                                                Unit of Measurement:\n                                            ")])]}}],null,!1,2081435147)},[t._v(" "),n("span",[t._v("\n                                            Update units of measurement.\n                                        ")])]),t._v(" "),n("app-raw-menu",{attrs:{menu:t.base_collection,selected:t.formData.base_name},on:{selectedmenu:t.selectunitsofmeasurement}})],1),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-text-field",{attrs:{type:"number",label:"Quantity"},scopedSlots:t._u([{key:"append-outer",fn:function(){return[n("app-raw-menu",{attrs:{menu:t.convertFiltered,selected:t.convert.quantity.name},on:{selectedmenu:t.selectedconvertquantity}})]},proxy:!0}],null,!1,839093261),model:{value:t.formInput.quantity,callback:function(e){t.$set(t.formInput,"quantity",e)},expression:"formInput.quantity"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("app-raw-converted-units",{attrs:{value:t.formInput.quantity,convertValue:t.convert.quantity.value,formDataBaseName:t.formData.base_name}})],1),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-text-field",{attrs:{type:"number",label:"Reorder Point"},scopedSlots:t._u([{key:"append-outer",fn:function(){return[n("app-raw-menu",{attrs:{menu:t.convertFiltered,selected:t.convert.reorder_point.name},on:{selectedmenu:t.selectedconvertreorderpoint}})]},proxy:!0}],null,!1,4051307640),model:{value:t.formInput.reorder_point,callback:function(e){t.$set(t.formInput,"reorder_point",e)},expression:"formInput.reorder_point"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("app-raw-converted-units",{attrs:{value:t.formInput.reorder_point,convertValue:t.convert.reorder_point.value,formDataBaseName:t.formData.base_name}})],1),t._v(" "),t.qrcode?n("v-col",{staticClass:"py-0",attrs:{align:"center"}},[n("app-raw-qrcode",{staticClass:"center-align",attrs:{value:t.qrcode,level:"H"}})],1):t._e()]},proxy:!0}],null,!1,612924443)})],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.selected=!1}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-arrow-left")]),t._v("\n                        Back to categories\n                    ")],1)],1),t._v(" "),n("v-card-text",[t.base_count?t._e():n("p",[t._v("\n                        Please create atleast one unit with one sub-unit:\n                        "),n("v-btn",{attrs:{text:"",outlined:""},on:{click:t.unitsCrud}},[t._v("\n                            Unit of Measurement\n                        ")])],1),t._v(" "),t.convert_count?t._e():n("p",[t._v("\n                        Please create atleast one sub-unit:\n                        "),n("v-btn",{attrs:{text:"",outlined:""},on:{click:t.unitsCrud}},[t._v("\n                            Unit of Measurement\n                        ")])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{sm:"12"}},[n("v-data-table",{attrs:{headers:t.headers,items:t.items,loading:t.loading},on:{"click:row":t.showEditDialog},scopedSlots:t._u([{key:"item.id",fn:function(e){var n=e.item;return[t._v("\n                                    RI -\n                                    "+t._s(n.id.toString().padStart(4,"0"))+"\n                                ")]}},{key:"item.quantity",fn:function(e){var n=e.item;return[t._v("\n                                    "+t._s(n.quantity)+" "+t._s(n.base.name)+"\n                                ")]}},{key:"item.reorder_point",fn:function(e){var n=e.item;return[t._v("\n                                    "+t._s(n.reorder_point)+"\n                                    "+t._s(n.base.name)+"\n                                ")]}}],null,!1,846620746)})],1)],1)],1)],1)],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=r.exports}}]);