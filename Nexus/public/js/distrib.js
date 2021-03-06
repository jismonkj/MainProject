/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/distrib/Orders.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/distrib/Orders.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
  mounted: function mounted() {
    var _this = this;

    //fresh
    axios.get("orders/fresh").then(function (res) {
      _this.freshOrders = res.data.data;
      _this.freshTotalPages = res.data.data.total;
      _this.freshNextUrl = res.data.data.next_page_url;
    }); //collected

    axios.get("orders/ontheway").then(function (res) {
      _this.collectedOrders = res.data.data;
      _this.collectedTotalPages = res.data.data.total;
      _this.collectedhNextUrl = res.data.data.next_page_url;
    }); //delivered

    axios.get("orders/delivered").then(function (res) {
      _this.deliveredOrders = res.data.data;
      _this.deliveredTotalPages = res.data.data.total;
      _this.deliveredNextUrl = res.data.data.next_page_url;
    });
  },
  data: function data() {
    return {
      freshOrders: null,
      collectedOrders: null,
      deliveredOrders: null,
      deliveryPin: "",
      delAddress: {
        tfname: "",
        tlname: "",
        tcontact: "",
        taddress: "",
        tzip: "",
        tcity_name: "",
        tstate_name: "",
        tcountry_name: "",
        fcity_name: "",
        fstate_name: "",
        fcountry_name: "",
        contents: "",
        amount: "",
        quantity: "",
        service_charge: ""
      }
    };
  },
  methods: {
    showMore: function showMore($oid, $type) {
      switch ($type) {
        case "fresh":
          //find index
          var index = this.freshOrders.findIndex(function (item) {
            return item.o_id == $oid;
          }); //set address data

          this.delAddress = this.freshOrders[index];
          break;

        case "del":
          //find index
          var index = this.deliveredOrders.findIndex(function (item) {
            return item.o_id == $oid;
          }); //set address data

          this.delAddress = this.deliveredOrders[index];
          break;

        case "coll":
          //find index
          var index = this.collectedOrders.findIndex(function (item) {
            return item.o_id == $oid;
          }); //set address data

          this.delAddress = this.collectedOrders[index];
          break;

        default:
          break;
      }
    },
    collectForDelivery: function collectForDelivery(oid) {
      var _this2 = this;

      axios.post("orders/status/update/ontheway", {
        o_id: oid
      }).then(function (res) {
        //find index
        var index = _this2.freshOrders.findIndex(function (item) {
          return item.o_id == oid;
        }); //set status


        _this2.freshOrders[index].status = "ontheway";
      });
    },
    itemDelivered: function itemDelivered(oid) {
      //find index
      var index = this.collectedOrders.findIndex(function (item) {
        return item.o_id == oid;
      }); //set status

      this.collectedOrders[index].status = "delivery";
    },
    verifySecret: function verifySecret(oid) {
      var _this3 = this;

      if (this.deliveryPin != "") {
        axios.post("orders/status/update/delivered", {
          o_id: oid,
          uid: oid,
          token: this.deliveryPin,
          type: "delivery"
        }).then(function (res) {
          //find index
          var index = _this3.collectedOrders.findIndex(function (item) {
            return item.o_id == oid;
          }); //set status


          _this3.collectedOrders[index].status = "delivered";
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/distrib/Payments.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/distrib/Payments.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
  mounted: function mounted() {
    var _this = this;

    axios.get('distrib/transactions').then(function (res) {
      _this.distribTransactions = res.data.distributor;
      _this.walletTransfers = res.data.transferCredits;
      _this.walletTransfers2 = res.data.transferDebits;
      _this.walletBalance = res.data.walletBalance;
    });
  },
  data: function data() {
    return {
      distribTransactions: [],
      walletTransfers: [],
      walletTransfers2: [],
      walletBalance: ''
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/distrib/Places.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/distrib/Places.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    //load country list
    axios.get("/country").then(function (response) {
      _this.countries = response.data;
    }); //
    // axios.get("/country").then(response => {
    //   this.landMarks = response.data;
    // });
  },
  data: function data() {
    return {
      countries: [],
      states: [],
      cities: [],
      landMarks: [],
      seldState: -1,
      seldCountry: -1,
      seldCity: -1,
      newLandMark: ""
    };
  },
  computed: {},
  watch: {
    seldState: function seldState() {
      this.getCityList();
    },
    seldCountry: function seldCountry() {
      this.cities = {};
      this.seldState = -1;
      this.getStateList();
    },
    seldCity: function seldCity() {
      // getLandMarks
      this.getLandMarks();
    }
  },
  methods: {
    getCityList: function getCityList() {
      var _this2 = this;

      axios.get("/city/" + this.seldState).then(function (response) {
        _this2.cities = response.data;
      });
    },
    getStateList: function getStateList() {
      var _this3 = this;

      axios.get("/state/" + this.seldCountry).then(function (response) {
        _this3.states = response.data;
      });
    },
    getLandMarks: function getLandMarks() {
      var _this4 = this;

      axios.get("/distrib/list/landm/" + this.seldCity).then(function (response) {
        _this4.landMarks = response.data;
      });
    },
    storeLandMark: function storeLandMark() {
      var _this5 = this;

      if (this.seldCity != -1) {
        axios.post("/distrib/store/landm", {
          landmark: this.newLandMark,
          city_id: this.seldCity
        }).then(function (res) {
          _this5.landMarks.push(res.data);
        });
      } else {
        this.newLandMark = "Please select a state";
        setTimeout(function () {
          _this5.newLandMark = "";
        }, 2000);
      }
    },
    delLandMark: function delLandMark(key) {
      var _this6 = this;

      axios.get("/distrib/del/landm/" + key).then(function (res) {
        _this6.landMarks.splice(_this6.landMarks.findIndex(function (item) {
          return item.dcid === key;
        }), 1);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/distrib/SideBar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/distrib/SideBar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    axios.get("distrib/profile").then(function (res) {
      _this.distributor = res.data.distrib_name;
    });
  },
  methods: {
    setBreadCumb: function setBreadCumb(title) {
      this.$parent.breadCumbPath = title;
      this.activeTab = title;
    }
  },
  data: function data() {
    return {
      activeTab: false,
      distributor: ""
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/distrib/Orders.vue?vue&type=template&id=0e2a8b8c&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/distrib/Orders.vue?vue&type=template&id=0e2a8b8c& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-7" }, [
      _c("div", { staticClass: "panel panel-default" }, [
        _c("div", { staticClass: "panel-body tabs" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "tab-content distrib" }, [
            _c(
              "div",
              {
                staticClass: "tab-pane fade in active",
                attrs: { id: "pilltab1" }
              },
              [
                _c(
                  "ul",
                  { staticClass: "dist-order-list" },
                  _vm._l(_vm.freshOrders, function(order) {
                    return _c(
                      "li",
                      { key: order.o_id, staticClass: "left clearfix more" },
                      [
                        _c("div", { staticClass: "chat-body clearfix" }, [
                          _c("div", { staticClass: "header" }, [
                            _c("strong", { staticClass: "primary-font" }, [
                              _vm._v(
                                "\n                      " +
                                  _vm._s(order.ffname) +
                                  " " +
                                  _vm._s(order.flname) +
                                  "\n                      "
                              ),
                              _c("i", {
                                staticClass: "fa fa-angle-double-right",
                                attrs: { "aria-hidden": "true" }
                              }),
                              _vm._v(
                                "\n                      " +
                                  _vm._s(order.tfname) +
                                  " " +
                                  _vm._s(order.tlname) +
                                  "\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("small", { staticClass: "text-muted" }, [
                              _vm._v(_vm._s(order.created_at))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "From: " +
                                _vm._s(order.fcity_name) +
                                ", " +
                                _vm._s(order.fstate_name) +
                                ", " +
                                _vm._s(order.fcountry_name)
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: order.status == "fresh",
                                  expression: "order.status=='fresh'"
                                }
                              ],
                              staticClass: "btn btn-primary",
                              on: {
                                click: function($event) {
                                  return _vm.collectForDelivery(order.o_id)
                                }
                              }
                            },
                            [_vm._v("Collect")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              on: {
                                click: function($event) {
                                  return _vm.showMore(order.o_id, "fresh")
                                }
                              }
                            },
                            [_vm._v("More")]
                          )
                        ])
                      ]
                    )
                  }),
                  0
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tab-pane fade", attrs: { id: "pilltab2" } },
              [
                _c(
                  "ul",
                  { staticClass: "dist-order-list" },
                  _vm._l(_vm.collectedOrders, function(order) {
                    return _c(
                      "li",
                      { key: order.o_id, staticClass: "left clearfix more" },
                      [
                        _c("div", { staticClass: "chat-body clearfix" }, [
                          _c("div", { staticClass: "header" }, [
                            _c("strong", { staticClass: "primary-font" }, [
                              _vm._v(
                                "\n                      " +
                                  _vm._s(order.ffname) +
                                  " " +
                                  _vm._s(order.flname) +
                                  "\n                      "
                              ),
                              _c("i", {
                                staticClass: "fa fa-angle-double-right",
                                attrs: { "aria-hidden": "true" }
                              }),
                              _vm._v(
                                "\n                      " +
                                  _vm._s(order.tfname) +
                                  " " +
                                  _vm._s(order.tlname) +
                                  "\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("small", { staticClass: "text-muted" }, [
                              _vm._v(_vm._s(order.created_at))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "From: " +
                                _vm._s(order.fcity_name) +
                                ", " +
                                _vm._s(order.fstate_name) +
                                ", " +
                                _vm._s(order.fcountry_name)
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: order.status == "ontheway",
                                  expression: "order.status=='ontheway'"
                                }
                              ],
                              staticClass: "btn btn-primary",
                              on: {
                                click: function($event) {
                                  return _vm.itemDelivered(order.o_id)
                                }
                              }
                            },
                            [_vm._v("Deliver")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: order.status == "delivery",
                                  expression: "order.status=='delivery'"
                                }
                              ],
                              staticClass: "alert bg-danger",
                              attrs: { role: "alert" }
                            },
                            [
                              _c("div", { staticClass: "row" }, [
                                _vm._m(1, true),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-4" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.deliveryPin,
                                        expression: "deliveryPin"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "number",
                                      name: "deliveryPin"
                                    },
                                    domProps: { value: _vm.deliveryPin },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.deliveryPin = $event.target.value
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-4" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary btn-lg",
                                      on: {
                                        click: function($event) {
                                          return _vm.verifySecret(order.o_id)
                                        }
                                      }
                                    },
                                    [_vm._v("Verify")]
                                  ),
                                  _vm._v(" "),
                                  _c("em", {
                                    staticClass:
                                      "fa fa-lg fa-close distrib-close",
                                    on: {
                                      click: function($event) {
                                        order.status = "ontheway"
                                      }
                                    }
                                  })
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: order.status == "delivered",
                                  expression: "order.status=='delivered'"
                                }
                              ],
                              staticClass: "btn btn-success"
                            },
                            [_c("i", { staticClass: "fa fa-check" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              on: {
                                click: function($event) {
                                  return _vm.showMore(order.o_id, "coll")
                                }
                              }
                            },
                            [_vm._v("More")]
                          )
                        ])
                      ]
                    )
                  }),
                  0
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tab-pane fade", attrs: { id: "pilltab3" } },
              [
                _c(
                  "ul",
                  { staticClass: "dist-order-list" },
                  _vm._l(_vm.deliveredOrders, function(order) {
                    return _c(
                      "li",
                      { key: order.o_id, staticClass: "left clearfix more" },
                      [
                        _c("div", { staticClass: "chat-body clearfix" }, [
                          _c("div", { staticClass: "header" }, [
                            _c("strong", { staticClass: "primary-font" }, [
                              _vm._v(
                                "\n                      " +
                                  _vm._s(order.ffname) +
                                  " " +
                                  _vm._s(order.flname) +
                                  "\n                      "
                              ),
                              _c("i", {
                                staticClass: "fa fa-angle-double-right",
                                attrs: { "aria-hidden": "true" }
                              }),
                              _vm._v(
                                "\n                      " +
                                  _vm._s(order.tfname) +
                                  " " +
                                  _vm._s(order.tlname) +
                                  "\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("small", { staticClass: "text-muted" }, [
                              _vm._v(_vm._s(order.created_at))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "From: " +
                                _vm._s(order.fcity_name) +
                                ", " +
                                _vm._s(order.fstate_name) +
                                ", " +
                                _vm._s(order.fcountry_name)
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              on: {
                                click: function($event) {
                                  return _vm.showMore(order.o_id, "del")
                                }
                              }
                            },
                            [_vm._v("More")]
                          )
                        ])
                      ]
                    )
                  }),
                  0
                )
              ]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-5" }, [
      _c("div", { staticClass: "panel distrib panel-default" }, [
        _c("div", { staticClass: "panel-heading" }, [_vm._v("Order Details")]),
        _vm._v(" "),
        _c("div", { staticClass: "panel-body" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("strong", [_vm._v("Collection Address")]),
            _vm._v(" "),
            _c("address", [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.delAddress.ffname) +
                  " " +
                  _vm._s(_vm.delAddress.flname) +
                  "\n            "
              ),
              _c("br"),
              _vm._v(
                "\n            " +
                  _vm._s(_vm.delAddress.fcontact) +
                  "\n            "
              ),
              _c("br"),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.delAddress.fcity_name != "",
                      expression: "delAddress.fcity_name!=''"
                    }
                  ]
                },
                [_vm._v(_vm._s(_vm.delAddress.fcity_name))]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.delAddress.fstate_name != "",
                      expression: "delAddress.fstate_name!=''"
                    }
                  ]
                },
                [_vm._v(_vm._s("," + _vm.delAddress.fstate_name))]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.delAddress.fcountry_name != "",
                      expression: "delAddress.fcountry_name!=''"
                    }
                  ]
                },
                [_vm._v(_vm._s("," + _vm.delAddress.fcountry_name))]
              )
            ]),
            _vm._v(" "),
            _c("strong", [_vm._v("Delivery Address")]),
            _vm._v(" "),
            _c("address", [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.delAddress.tfname) +
                  " " +
                  _vm._s(_vm.delAddress.tlname) +
                  "\n            "
              ),
              _c("br"),
              _vm._v(
                "\n            " +
                  _vm._s(_vm.delAddress.taddress) +
                  "\n            "
              ),
              _c("br"),
              _vm._v(
                "\n            " +
                  _vm._s(_vm.delAddress.tcontact) +
                  "\n            "
              ),
              _c("br"),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.delAddress.tcity_name != "",
                      expression: "delAddress.tcity_name!=''"
                    }
                  ]
                },
                [_vm._v(_vm._s(_vm.delAddress.tcity_name))]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.delAddress.tstate_name != "",
                      expression: "delAddress.tstate_name!=''"
                    }
                  ]
                },
                [_vm._v(_vm._s("," + _vm.delAddress.tstate_name))]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.delAddress.tcountry_name != "",
                      expression: "delAddress.tcountry_name!=''"
                    }
                  ]
                },
                [_vm._v(_vm._s("," + _vm.delAddress.tcountry_name))]
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(
                "\n            " + _vm._s(_vm.delAddress.tzip) + "\n          "
              )
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("strong", [_vm._v("Updated On:")]),
            _vm._v(" "),
            _c("br"),
            _vm._v(
              "\n          " + _vm._s(_vm.delAddress.updated_at) + "\n        "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c("strong", [_vm._v("Order Summary")]),
            _vm._v(" "),
            _c("br"),
            _vm._v(
              "\n          " +
                _vm._s(
                  _vm.delAddress.contents != " "
                    ? _vm.delAddress.contents.split("\n")[0]
                    : ""
                ) +
                "\n          "
            ),
            _c("br"),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.delAddress.quantity != "",
                    expression: "delAddress.quantity!=''"
                  }
                ]
              },
              [_vm._v(_vm._s(_vm.delAddress.quantity) + " Nos.")]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.delAddress.amount != "",
                    expression: "delAddress.amount!=''"
                  }
                ]
              },
              [
                _vm._v(
                  _vm._s(_vm.delAddress.amount * _vm.delAddress.quantity) +
                    " Rs."
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.delAddress.service_charge != "",
                    expression: "delAddress.service_charge!=''"
                  }
                ]
              },
              [
                _vm._v(
                  _vm._s(
                    _vm.delAddress.amount *
                      _vm.delAddress.quantity *
                      (_vm.delAddress.service_charge / 100)
                  ) + " Rs."
                )
              ]
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("strong", [_vm._v("Grand Total")]),
            _vm._v(
              "\n\n          : " +
                _vm._s(
                  _vm.delAddress.amount * _vm.delAddress.quantity +
                    _vm.delAddress.amount *
                      _vm.delAddress.quantity *
                      (_vm.delAddress.service_charge / 100)
                ) +
                "\n        "
            )
          ]),
          _vm._v(" "),
          _c("button", { staticClass: "btn btn-primary d-bottom" }, [
            _vm._v("Print")
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "nav nav-pills" }, [
      _c("li", { staticClass: "active" }, [
        _c("a", { attrs: { href: "#pilltab1", "data-toggle": "tab" } }, [
          _vm._v("Fresh")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#pilltab2", "data-toggle": "tab" } }, [
          _vm._v("Collected")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#pilltab3", "data-toggle": "tab" } }, [
          _vm._v("Delivered")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("em", { staticClass: "fa fa-md fa-warning" }, [_vm._v(" ")]),
      _vm._v(" "),
      _c("br"),
      _vm._v("Enter Delivery PIN:\n                      ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/distrib/Payments.vue?vue&type=template&id=620b2742&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/distrib/Payments.vue?vue&type=template&id=620b2742& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "panel panel-default" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "panel-body timeline-container" }, [
          _c(
            "ul",
            { staticClass: "timeline" },
            _vm._l(_vm.distribTransactions, function(item) {
              return _c("li", { key: item.trid }, [
                _c("div", { staticClass: "timeline-badge warning" }, [
                  item.orderid != null
                    ? _c("em", {
                        staticClass: "glyphicon glyphicon-shopping-cart",
                        attrs: { title: "Order Payment" }
                      })
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "timeline-panel" }, [
                  _c("div", { staticClass: "timeline-heading" }, [
                    _c("h4", { staticClass: "timeline-title" }, [
                      _vm._v(
                        "\n                    " +
                          _vm._s(item.dfname) +
                          " " +
                          _vm._s(item.dlname) +
                          " \n                    "
                      ),
                      _c("em", {
                        staticClass: "glyphicon glyphicon-chevron-right"
                      }),
                      _vm._v(
                        "\n                    " +
                          _vm._s(item.distrib_name) +
                          "\n                  "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "timeline-body" }, [
                    _c("p", [
                      _vm._v(
                        "\n                    Amount: " +
                          _vm._s(item.amount) +
                          " | Date: " +
                          _vm._s(item.created_at) +
                          "\n                  "
                      )
                    ])
                  ])
                ])
              ])
            }),
            0
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "panel panel-default" }, [
        _c("div", { staticClass: "panel-heading" }, [
          _vm._v(
            "\n          Wallet Balance: " +
              _vm._s(_vm.walletBalance.toFixed(2)) +
              "\n          "
          ),
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "panel-body timeline-container" }, [
          _c(
            "ul",
            { staticClass: "timeline" },
            [
              _vm._l(_vm.walletTransfers, function(item) {
                return _c("li", { key: item.trid }, [
                  _vm._m(3, true),
                  _vm._v(" "),
                  _c("div", { staticClass: "timeline-panel" }, [
                    _c("div", { staticClass: "timeline-heading" }, [
                      _c("h4", { staticClass: "timeline-title" }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(item.cfname) +
                            " " +
                            _vm._s(item.clname) +
                            " \n                    "
                        ),
                        _c("em", {
                          staticClass: "glyphicon glyphicon-chevron-right"
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "timeline-body" }, [
                      _c("p", [
                        _vm._v(
                          "\n                    Amount: " +
                            _vm._s(item.amount) +
                            " | Date: " +
                            _vm._s(item.created_at) +
                            "\n                  "
                        )
                      ])
                    ])
                  ])
                ])
              }),
              _vm._v(" "),
              _vm._l(_vm.walletTransfers2, function(item) {
                return _c("li", { key: item.trid }, [
                  _vm._m(4, true),
                  _vm._v(" "),
                  _c("div", { staticClass: "timeline-panel" }, [
                    _c("div", { staticClass: "timeline-heading" }, [
                      _c("h4", { staticClass: "timeline-title" }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(item.cfname) +
                            " " +
                            _vm._s(item.clname) +
                            " \n                    "
                        ),
                        _c("em", {
                          staticClass: "glyphicon glyphicon-chevron-right"
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "timeline-body" }, [
                      _c("p", [
                        _vm._v(
                          "\n                    Amount: " +
                            _vm._s(item.amount) +
                            " | Date: " +
                            _vm._s(item.created_at) +
                            "\n                  "
                        )
                      ])
                    ])
                  ])
                ])
              })
            ],
            2
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _vm._v("\n          Distributors\n          "),
      _c(
        "ul",
        { staticClass: "pull-right panel-settings panel-button-tab-right" },
        [
          _c("li", { staticClass: "dropdown" }, [
            _c(
              "a",
              {
                staticClass: "pull-right dropdown-toggle",
                attrs: { "data-toggle": "dropdown", href: "#" }
              },
              [_c("em", { staticClass: "fa fa-cogs" })]
            ),
            _vm._v(" "),
            _c("ul", { staticClass: "dropdown-menu dropdown-menu-right" }, [
              _c("li", [
                _c("ul", { staticClass: "dropdown-settings" }, [
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("em", { staticClass: "fa fa-cog" }),
                      _vm._v(" Settings 1\n                      ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "divider" }),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("em", { staticClass: "fa fa-cog" }),
                      _vm._v(" Settings 2\n                      ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "divider" }),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("em", { staticClass: "fa fa-cog" }),
                      _vm._v(" Settings 3\n                      ")
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "pull-right clickable panel-toggle panel-button-tab-left"
        },
        [_c("em", { staticClass: "fa fa-toggle-up" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "pull-right panel-settings panel-button-tab-right" },
      [
        _c("li", { staticClass: "dropdown" }, [
          _c(
            "a",
            {
              staticClass: "pull-right dropdown-toggle",
              attrs: { "data-toggle": "dropdown", href: "#" }
            },
            [_c("em", { staticClass: "fa fa-cogs" })]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "dropdown-menu dropdown-menu-right" }, [
            _c("li", [
              _c("ul", { staticClass: "dropdown-settings" }, [
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("em", { staticClass: "fa fa-cog" }),
                    _vm._v(" Settings 1\n                      ")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "divider" }),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("em", { staticClass: "fa fa-cog" }),
                    _vm._v(" Settings 2\n                      ")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "divider" }),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("em", { staticClass: "fa fa-cog" }),
                    _vm._v(" Settings 3\n                      ")
                  ])
                ])
              ])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      {
        staticClass: "pull-right clickable panel-toggle panel-button-tab-left"
      },
      [_c("em", { staticClass: "fa fa-toggle-up" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "timeline-badge primary" }, [
      _c("em", {
        staticClass: "glyphicon glyphicon-log-in",
        attrs: { title: "Credit Transfer" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "timeline-badge danger" }, [
      _c("em", {
        staticClass: "glyphicon glyphicon-log-out",
        attrs: { title: "Debit Transfer" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/distrib/Places.vue?vue&type=template&id=880ad7be&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/distrib/Places.vue?vue&type=template&id=880ad7be& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "panel panel-default" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "panel-body" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v("Select Country")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.seldCountry,
                    expression: "seldCountry"
                  }
                ],
                staticClass: "form-control",
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.seldCountry = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { value: "-1" } }, [
                  _vm._v("--Select Country--")
                ]),
                _vm._v(" "),
                _vm._l(this.countries, function(country) {
                  return _c(
                    "option",
                    { key: country.id, domProps: { value: country.id } },
                    [_vm._v(_vm._s(country.country_name))]
                  )
                })
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v("Select State")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.seldState,
                    expression: "seldState"
                  }
                ],
                staticClass: "form-control",
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.seldState = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { value: "-1" } }, [
                  _vm._v("--Select State--")
                ]),
                _vm._v(" "),
                _vm._l(this.states, function(state) {
                  return _c(
                    "option",
                    { key: state.id, domProps: { value: state.id } },
                    [_vm._v(_vm._s(state.state_name))]
                  )
                })
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v("Select City")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.seldCity,
                    expression: "seldCity"
                  }
                ],
                staticClass: "form-control",
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.seldCity = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { value: "-1" } }, [
                  _vm._v("--Select City--")
                ]),
                _vm._v(" "),
                _vm._l(this.cities, function(city) {
                  return _c(
                    "option",
                    { key: city.id, domProps: { value: city.id } },
                    [_vm._v(_vm._s(city.city_name))]
                  )
                })
              ],
              2
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "panel-footer" }, [
          _c("div", { staticClass: "input-group" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.newLandMark,
                  expression: "newLandMark"
                }
              ],
              staticClass: "form-control input-md",
              attrs: {
                id: "btn-input",
                type: "text",
                placeholder: "Add New Location"
              },
              domProps: { value: _vm.newLandMark },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.newLandMark = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "input-group-btn" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-md",
                  attrs: { id: "btn-add" },
                  on: { click: _vm.storeLandMark }
                },
                [_vm._v("Add")]
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "panel panel-default" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "panel-body" }, [
          _c(
            "ul",
            { staticClass: "todo-list" },
            _vm._l(this.landMarks, function(landMark) {
              return _c(
                "li",
                { key: landMark.dcid, staticClass: "todo-list-item" },
                [
                  _c("div", { staticClass: "checkbox" }, [
                    _c("i", { staticClass: "fa fa-check-square" }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "checkbox-1" } }, [
                      _vm._v(_vm._s(landMark.landmark))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "pull-right action-buttons" }, [
                    _c(
                      "a",
                      {
                        staticClass: "trash",
                        attrs: { href: "" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.delLandMark(landMark.dcid)
                          }
                        }
                      },
                      [_c("em", { staticClass: "fa fa-trash" })]
                    )
                  ])
                ]
              )
            }),
            0
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(2)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _vm._v("\n        Available Delivery Locations\n        "),
      _c(
        "ul",
        { staticClass: "pull-right panel-settings panel-button-tab-right" },
        [
          _c("li", { staticClass: "dropdown" }, [
            _c(
              "a",
              {
                staticClass: "pull-right dropdown-toggle",
                attrs: { "data-toggle": "dropdown", href: "#" }
              },
              [_c("em", { staticClass: "fa fa-cogs" })]
            ),
            _vm._v(" "),
            _c("ul", { staticClass: "dropdown-menu dropdown-menu-right" }, [
              _c("li", [
                _c("ul", { staticClass: "dropdown-settings" }, [
                  _c("li", [
                    _c("a", { attrs: { href: "" } }, [
                      _c("em", { staticClass: "fa fa-cog" }),
                      _vm._v(" Settings 1\n                    ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "divider" }),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "" } }, [
                      _c("em", { staticClass: "fa fa-cog" }),
                      _vm._v(" Settings 2\n                    ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "divider" }),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "" } }, [
                      _c("em", { staticClass: "fa fa-cog" }),
                      _vm._v(" Settings 3\n                    ")
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "pull-right clickable panel-toggle panel-button-tab-left"
        },
        [_c("em", { staticClass: "fa fa-toggle-up" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _vm._v("\n        Locations / Land Marks\n        "),
      _c(
        "ul",
        { staticClass: "pull-right panel-settings panel-button-tab-right" },
        [
          _c("li", { staticClass: "dropdown" }, [
            _c(
              "a",
              {
                staticClass: "pull-right dropdown-toggle",
                attrs: { "data-toggle": "dropdown", href: "#" }
              },
              [_c("em", { staticClass: "fa fa-cogs" })]
            ),
            _vm._v(" "),
            _c("ul", { staticClass: "dropdown-menu dropdown-menu-right" }, [
              _c("li", [
                _c("ul", { staticClass: "dropdown-settings" }, [
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("em", { staticClass: "fa fa-cog" }),
                      _vm._v(" Settings 1\n                    ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "divider" }),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("em", { staticClass: "fa fa-cog" }),
                      _vm._v(" Settings 2\n                    ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "divider" }),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("em", { staticClass: "fa fa-cog" }),
                      _vm._v(" Settings 3\n                    ")
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "pull-right clickable panel-toggle panel-button-tab-left"
        },
        [_c("em", { staticClass: "fa fa-toggle-up" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-12" }, [
      _c("p", { staticClass: "back-link" }, [
        _vm._v("\n      Lumino Theme by\n      "),
        _c("a", { attrs: { href: "https://www.medialoot.com" } }, [
          _vm._v("Medialoot")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/distrib/SideBar.vue?vue&type=template&id=49b4df92&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/distrib/SideBar.vue?vue&type=template&id=49b4df92& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    "div",
    {
      staticClass: "col-sm-3 col-lg-2 sidebar",
      attrs: { id: "sidebar-collapse" }
    },
    [
      _c("div", { staticClass: "profile-sidebar" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "profile-usertitle" }, [
          _c("div", { staticClass: "profile-usertitle-name" }, [
            _vm._v(_vm._s(_vm.distributor))
          ]),
          _vm._v(" "),
          _vm._m(1)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "clear" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "divider" }),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("ul", { staticClass: "nav menu" }, [
        _c(
          "li",
          {
            class: { active: _vm.activeTab == "Dashboard" },
            on: {
              click: function($event) {
                return _vm.setBreadCumb("Dashboard")
              }
            }
          },
          [
            _c("router-link", { attrs: { to: "dashboard" } }, [
              _c("a", { attrs: { href: "" } }, [
                _c("em", { staticClass: "fa fa-dashboard" }, [_vm._v(" ")]),
                _vm._v("\n          Dashboard\n        ")
              ])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            class: { active: _vm.activeTab == "Places" },
            on: {
              click: function($event) {
                return _vm.setBreadCumb("Places")
              }
            }
          },
          [
            _c("router-link", { attrs: { to: "places" } }, [
              _c("a", { attrs: { href: "" } }, [
                _c("em", { staticClass: "fa fa-map" }, [_vm._v(" ")]),
                _vm._v("\n          Places\n        ")
              ])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            class: { active: _vm.activeTab == "Orders" },
            on: {
              click: function($event) {
                return _vm.setBreadCumb("Orders")
              }
            }
          },
          [
            _c("router-link", { attrs: { to: "/orders" } }, [
              _c("a", { attrs: { href: "" } }, [
                _c("em", { staticClass: "fa fa-dashboard" }, [_vm._v(" ")]),
                _vm._v("\n          Orders\n        ")
              ])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            class: { active: _vm.activeTab == "Payments" },
            on: {
              click: function($event) {
                return _vm.setBreadCumb("Payments")
              }
            }
          },
          [
            _c("router-link", { attrs: { to: "/payments" } }, [
              _c("a", { attrs: { href: "" } }, [
                _c("em", { staticClass: "fa fa-money" }, [_vm._v(" ")]),
                _vm._v("\n          Payments\n        ")
              ])
            ])
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "profile-userpic" }, [
      _c("img", {
        staticClass: "img-responsive",
        attrs: { src: "http://placehold.it/50/30a5ff/fff", alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "profile-usertitle-status" }, [
      _c("span", { staticClass: "indicator label-success" }),
      _vm._v("Online\n      ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", { attrs: { role: "search" } }, [
      _c("div", { staticClass: "form-group" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", placeholder: "Search" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
  * vue-router v3.0.2
  * (c) 2018 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ( true && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
     true && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
      ? 'router-link-active'
      : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
      ? 'router-link-exact-active'
      : globalExactActiveClass;
    var activeClass = this.activeClass == null
      ? activeClassFallback
      : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
      ? exactActiveClassFallback
      : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
}

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (true) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ( true && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  window.history.replaceState({ key: getStateKey() }, '', window.location.href.replace(window.location.origin, ''));
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(router, to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (true) {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
           true && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (
    instances[key] &&
    !instances[key]._isBeingDestroyed // do not reuse being destroyed instance
  ) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = decodeURI(window.location.pathname);
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : decodeURI(href.slice(index + 1))
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */



var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

   true && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.2';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),

/***/ "./resources/js/components/distrib/Orders.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/distrib/Orders.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Orders_vue_vue_type_template_id_0e2a8b8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Orders.vue?vue&type=template&id=0e2a8b8c& */ "./resources/js/components/distrib/Orders.vue?vue&type=template&id=0e2a8b8c&");
/* harmony import */ var _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Orders.vue?vue&type=script&lang=js& */ "./resources/js/components/distrib/Orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Orders_vue_vue_type_template_id_0e2a8b8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Orders_vue_vue_type_template_id_0e2a8b8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/distrib/Orders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/distrib/Orders.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/distrib/Orders.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Orders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/distrib/Orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/distrib/Orders.vue?vue&type=template&id=0e2a8b8c&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/distrib/Orders.vue?vue&type=template&id=0e2a8b8c& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_0e2a8b8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Orders.vue?vue&type=template&id=0e2a8b8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/distrib/Orders.vue?vue&type=template&id=0e2a8b8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_0e2a8b8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_0e2a8b8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/distrib/Payments.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/distrib/Payments.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Payments_vue_vue_type_template_id_620b2742___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Payments.vue?vue&type=template&id=620b2742& */ "./resources/js/components/distrib/Payments.vue?vue&type=template&id=620b2742&");
/* harmony import */ var _Payments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Payments.vue?vue&type=script&lang=js& */ "./resources/js/components/distrib/Payments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Payments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Payments_vue_vue_type_template_id_620b2742___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Payments_vue_vue_type_template_id_620b2742___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/distrib/Payments.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/distrib/Payments.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/distrib/Payments.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Payments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/distrib/Payments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/distrib/Payments.vue?vue&type=template&id=620b2742&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/distrib/Payments.vue?vue&type=template&id=620b2742& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payments_vue_vue_type_template_id_620b2742___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Payments.vue?vue&type=template&id=620b2742& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/distrib/Payments.vue?vue&type=template&id=620b2742&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payments_vue_vue_type_template_id_620b2742___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payments_vue_vue_type_template_id_620b2742___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/distrib/Places.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/distrib/Places.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Places_vue_vue_type_template_id_880ad7be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Places.vue?vue&type=template&id=880ad7be& */ "./resources/js/components/distrib/Places.vue?vue&type=template&id=880ad7be&");
/* harmony import */ var _Places_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Places.vue?vue&type=script&lang=js& */ "./resources/js/components/distrib/Places.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Places_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Places_vue_vue_type_template_id_880ad7be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Places_vue_vue_type_template_id_880ad7be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/distrib/Places.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/distrib/Places.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/distrib/Places.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Places_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Places.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/distrib/Places.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Places_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/distrib/Places.vue?vue&type=template&id=880ad7be&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/distrib/Places.vue?vue&type=template&id=880ad7be& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Places_vue_vue_type_template_id_880ad7be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Places.vue?vue&type=template&id=880ad7be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/distrib/Places.vue?vue&type=template&id=880ad7be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Places_vue_vue_type_template_id_880ad7be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Places_vue_vue_type_template_id_880ad7be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/distrib/SideBar.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/distrib/SideBar.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideBar_vue_vue_type_template_id_49b4df92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideBar.vue?vue&type=template&id=49b4df92& */ "./resources/js/components/distrib/SideBar.vue?vue&type=template&id=49b4df92&");
/* harmony import */ var _SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar.vue?vue&type=script&lang=js& */ "./resources/js/components/distrib/SideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SideBar_vue_vue_type_template_id_49b4df92___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SideBar_vue_vue_type_template_id_49b4df92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/distrib/SideBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/distrib/SideBar.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/distrib/SideBar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SideBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/distrib/SideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/distrib/SideBar.vue?vue&type=template&id=49b4df92&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/distrib/SideBar.vue?vue&type=template&id=49b4df92& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_49b4df92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SideBar.vue?vue&type=template&id=49b4df92& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/distrib/SideBar.vue?vue&type=template&id=49b4df92&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_49b4df92___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_49b4df92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/distrib.js":
/*!*********************************!*\
  !*** ./resources/js/distrib.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _components_distrib_SideBar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/distrib/SideBar.vue */ "./resources/js/components/distrib/SideBar.vue");
/* harmony import */ var _components_distrib_Places_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/distrib/Places.vue */ "./resources/js/components/distrib/Places.vue");
/* harmony import */ var _components_distrib_Orders_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/distrib/Orders.vue */ "./resources/js/components/distrib/Orders.vue");
/* harmony import */ var _components_distrib_Payments_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/distrib/Payments.vue */ "./resources/js/components/distrib/Payments.vue");
// vue router
// ________________________

Vue.use(vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]); // components
// _____________________





Vue.component('SBar', _components_distrib_SideBar_vue__WEBPACK_IMPORTED_MODULE_1__["default"]); // routes
// __________________

var routes = [{
  path: '/dashboard',
  component: {
    template: "<div>some</div>"
  }
}, {
  path: '/places',
  component: _components_distrib_Places_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  path: '/orders',
  component: _components_distrib_Orders_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: '/payments',
  component: _components_distrib_Payments_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
}];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]({
  routes: routes // short for `routes: routes`

}); // admin app
// ____________________

var app = new Vue({
  el: '#adminApp',
  data: {
    csrftoken: '',
    data: '',
    breadCumbPath: "Dashboard",
    processing: false // info:null

  },
  router: router,
  mounted: function mounted() {
    var _this = this;

    this.csrftoken = $("#csrf-token").attr('content');
    window.axios.interceptors.request.use(function (config) {
      _this.processing = true;
      return config;
    });
    window.axios.interceptors.response.use(function (response) {
      _this.processing = false;
      return response;
    });
  },
  methods: {}
});

/***/ }),

/***/ 4:
/*!***************************************!*\
  !*** multi ./resources/js/distrib.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/blake/_workspace/WebApps/MCAMainProject/Nexus/resources/js/distrib.js */"./resources/js/distrib.js");


/***/ })

/******/ });