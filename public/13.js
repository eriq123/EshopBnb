(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/assembled/products.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/assembled/products.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      headers: [{
        text: "Code",
        align: "start",
        value: "id"
      }, {
        text: "Product Name",
        align: "start",
        value: "name"
      }, {
        text: "Actions",
        value: "actions",
        sortable: false
      }],
      items: [],
      loading: false,
      showForm: false,
      deleteForm: false,
      formData: {
        action: null,
        id: 0,
        product_name: null
      },
      itemIndex: -1
    };
  },
  mounted: function mounted() {
    this.getProducts();
  },
  methods: {
    getProducts: function getProducts() {
      var _this = this;

      this.loading = true;
      axios.post("/products/view").then(function (response) {
        _this.items = response.data.product;
        _this.loading = false;
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);

          _this.errorAlert();
        }

        _this.loading = false;
      });
    },
    showAddForm: function showAddForm() {
      this.formData.action = "add";
      this.formData.id = 0;
      this.formData.product_name = null;
      this.itemIndex = -1;
      this.showForm = true;
    },
    showUpdateForm: function showUpdateForm(item) {
      this.formData.action = "update";
      this.formData.id = item.id;
      this.formData.product_name = item.name;
      this.itemIndex = this.items.indexOf(item);
      this.showForm = true;
    },
    deleteProcess: function deleteProcess(item) {
      var _this2 = this;

      if (item.id) {
        if (confirm("Are you sure you want to delete ".concat(item.name))) {
          this.loading = true;
          axios.post("/products/delete", {
            id: item.id
          }).then(function (response) {
            _this2.$store.commit("showSnackbar", {
              color: true,
              text: "".concat(response.data.product.name, " deleted.")
            });

            _this2.itemIndex = _this2.items.indexOf(item);

            _this2.items.splice(_this2.itemIndex, 1);

            _this2.loading = false;
          })["catch"](function (error) {
            if (error.response) {
              console.log(error.response);

              _this2.errorAlert();
            }

            _this2.loading = false;
          });
        }
      } else {
        this.errorAlert();
      }
    },
    submitForm: function submitForm() {
      if (this.formData.product_name) {
        this.loading = true;

        if (this.formData.action == "add") {
          this.processAdd();
        } else {
          this.processUpdate();
        }

        this.showForm = false;
      } else {
        this.$store.commit("showSnackbar", {
          color: false,
          text: "Product name is required."
        });
      }
    },
    processAdd: function processAdd() {
      var _this3 = this;

      axios.post("/products/add", {
        name: this.formData.product_name
      }).then(function (response) {
        _this3.$store.commit("showSnackbar", {
          color: true,
          text: "".concat(response.data.product.name, " added.")
        });

        console.log(response.data.product);

        _this3.items.push(response.data.product);

        _this3.loading = false;
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);

          _this3.errorAlert();
        }

        _this3.loading = false;
      });
    },
    processUpdate: function processUpdate() {
      var _this4 = this;

      axios.post("/products/update", {
        id: this.formData.id,
        name: this.formData.product_name
      }).then(function (response) {
        _this4.$store.commit("showSnackbar", {
          color: true,
          text: "".concat(response.data.product.name, " updated.")
        });

        Object.assign(_this4.items[_this4.itemIndex], response.data.product);
        _this4.loading = false;
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);

          _this4.errorAlert();
        }

        _this4.loading = false;
      });
    },
    showRawItems: function showRawItems(item) {
      this.$emit("showrawitems", item);
    },
    errorAlert: function errorAlert() {
      this.$store.commit("showSnackbar", {
        color: false,
        text: "Something went wrong."
      });
    }
  },
  computed: {
    customID: function customID() {
      return this.formData.id > 0 ? "AP - ".concat(this.formData.id.toString().padStart(4, "0")) : "N/A";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/assembled/products.vue?vue&type=template&id=1e103786&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/assembled/products.vue?vue&type=template&id=1e103786& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    [
      _c(
        "v-col",
        { attrs: { sm: "10", "offset-sm": "1" } },
        [
          _c(
            "v-card",
            { attrs: { flat: "" } },
            [
              _c(
                "v-card-title",
                [
                  _vm._v("\n                Products\n                "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "ml-3",
                      attrs: {
                        text: "",
                        outlined: "",
                        color: "green darken-4"
                      },
                      on: { click: _vm.showAddForm }
                    },
                    [_vm._v("\n                    Add\n                ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-data-table", {
                attrs: {
                  headers: _vm.headers,
                  items: _vm.items,
                  loading: _vm.loading
                },
                on: { "click:row": _vm.showRawItems },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "item.id",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _vm._v(
                            "\n                    AP - " +
                              _vm._s(item.id.toString().padStart(4, "0")) +
                              "\n                "
                          )
                        ]
                      }
                    },
                    {
                      key: "item.actions",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _c(
                            "v-btn",
                            {
                              attrs: { text: "", color: "blue darken-4" },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.showUpdateForm(item)
                                }
                              }
                            },
                            [_vm._v("Update")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { text: "", color: "red darken-4" },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.deleteProcess(item)
                                }
                              }
                            },
                            [_vm._v("Delete")]
                          )
                        ]
                      }
                    },
                    _vm.showForm
                      ? {
                          key: "body.prepend",
                          fn: function() {
                            return [
                              _c("tr", [
                                _c("td", [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.customID) +
                                      "\n                        "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        autofocus: "",
                                        label: "Product Name"
                                      },
                                      model: {
                                        value: _vm.formData.product_name,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.formData,
                                            "product_name",
                                            $$v
                                          )
                                        },
                                        expression: "formData.product_name"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "ml-1 my-1",
                                        attrs: {
                                          text: "",
                                          outlined: "",
                                          color: "green darken-4"
                                        },
                                        on: {
                                          click: function($event) {
                                            $event.stopPropagation()
                                            return _vm.submitForm($event)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                Save\n                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "ml-1 my-1",
                                        attrs: { text: "", outlined: "" },
                                        on: {
                                          click: function($event) {
                                            $event.stopPropagation()
                                            _vm.showForm = !_vm.showForm
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                Cancel\n                            "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ])
                            ]
                          },
                          proxy: true
                        }
                      : null
                  ],
                  null,
                  true
                )
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/products/assembled/products.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/pages/products/assembled/products.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products_vue_vue_type_template_id_1e103786___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.vue?vue&type=template&id=1e103786& */ "./resources/js/components/pages/products/assembled/products.vue?vue&type=template&id=1e103786&");
/* harmony import */ var _products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/products/assembled/products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _products_vue_vue_type_template_id_1e103786___WEBPACK_IMPORTED_MODULE_0__["render"],
  _products_vue_vue_type_template_id_1e103786___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/products/assembled/products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/products/assembled/products.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/pages/products/assembled/products.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/assembled/products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/products/assembled/products.vue?vue&type=template&id=1e103786&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/pages/products/assembled/products.vue?vue&type=template&id=1e103786& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_1e103786___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./products.vue?vue&type=template&id=1e103786& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/assembled/products.vue?vue&type=template&id=1e103786&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_1e103786___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_1e103786___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);