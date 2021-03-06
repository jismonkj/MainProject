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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/DashBoard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/DashBoard.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    axios.get('/admin').then(function (res) {
      _this.statistics = res.data;
    });
  },
  data: function data() {
    return {
      statistics: []
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/DistribReg.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/DistribReg.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {// axios.post("/admin/distributor/list", this.postData).then(response => {
    //   this.users = response.data;
    // });
  },
  data: function data() {
    return {
      postData: {
        type: "distributor"
      },
      email: "",
      distrib_name: "",
      headq: "",
      service_charge: "",
      website: "",
      contact: "",
      saveBtnText: "Save Distributor",
      errors: [],
      //validation rules
      rules: {
        email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
        password: /^(?=.*\d).{4,10}$/,
        fname: /[a-z]{1,10}/,
        // lname: /[A-z][a-z]+/,
        dob: /(\d{4})-(\d{2})-(\d{2})/,
        gender: /^male$|^female$/
      },
      invalid: true
    };
  },
  methods: {
    saveDistributor: function saveDistributor() {
      var _this = this;

      if (!this.invalid) {
        var data = {
          email: this.email,
          distrib_name: this.distrib_name,
          headq: this.headq,
          service_charge: this.service_charge,
          website: this.website,
          contact: this.contact
        }; //save distrib data

        axios.post("admin/add/distrib", data).then(function (res) {
          if (!res.data) {
            _this.notify("Email Already Exists");
          } else {
            _this.notify("Distributor Has Added!");

            _this.resetDistributor();
          }
        });
      }
    },
    resetDistributor: function resetDistributor() {
      this.email = "";
      this.distrib_name = "";
      this.headq = "";
      this.service_charge = "";
      this.website = "";
      this.contact = "";
    },
    validateFormData: function validateFormData() {
      var len = Object.keys(this.errors).length;

      if (len > 0) {
        this.invalid = true;
      } else if (this.email == "" || this.distrib_name == "" || this.headq == "" || this.service_charge == "" || this.website == "" || this.contact == "") {
        this.invalid = true;
      } else {
        this.invalid = false;
      }
    },
    notify: function notify(text) {
      var _this2 = this;

      this.saveBtnText = text;
      setTimeout(function () {
        _this2.saveBtnText = "Save Distributor";
      }, 5000);
    }
  },
  watch: {
    email: function email() {
      if (!this.rules.email.test(this.email) || this.email.length < 7) {
        this.errors.email = true;
        this.notify("Invalid Email!");
      } else {
        this.saveBtnText = "Save Distributor";
        delete this.errors.email;
      }

      this.validateFormData();
    },
    distrib_name: function distrib_name() {
      if (!this.rules.fname.test(this.distrib_name) || this.distrib_name.length < 3) {
        this.errors.name = true;
        this.notify("Invalid Distributor Name");
      } else {
        this.saveBtnText = "Save Distributor";
        delete this.errors.name;
      }

      this.validateFormData();
    },
    headq: function headq() {
      if (!this.rules.fname.test(this.headq) || this.headq.length < 3) {
        this.errors.headq = true;
        this.notify("Invalid Head Quarters");
      } else {
        this.saveBtnText = "Save Distributor";
        delete this.errors.headq;
      }

      this.validateFormData();
    },
    service_charge: function service_charge() {
      if (this.service_charge > 40 || isNaN(this.service_charge) || this.service_charge < 1) {
        this.service_charge = 1;
        this.errors.service_charge = true;
        this.notify("Invalid Service Charge");
      } else {
        delete this.errors.service_charge;
        this.saveBtnText = "Save Distributor";
      }

      this.validateFormData();
    },
    contact: function contact() {
      if (this.contact.length != 10 || isNaN(this.contact)) {
        this.errors.contact = true;
        this.notify("Invalid Contact Number");
      } else {
        this.saveBtnText = "Save Distributor";
        delete this.errors.contact;
      }

      this.validateFormData();
    },
    website: function website() {
      if (this.website.length < 4) {
        this.errors.website = true;
        this.notify("Invalid Website");
      } else {
        this.saveBtnText = "Save Distributor";
        delete this.errors.website;
      }

      this.validateFormData();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Distributors.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Distributors.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    axios.post("/admin/users/list", this.postData).then(function (response) {
      _this.users = response.data;
    });
  },
  data: function data() {
    return {
      users: "",
      postData: {
        type: 'distrib'
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Members.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Members.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    axios.post("/admin/users/list", this.postData).then(function (response) {
      _this.users = response.data;
    });
  },
  data: function data() {
    return {
      users: "",
      userProfile: [],
      postData: {
        type: "members"
      },
      showProfile: false
    };
  },
  methods: {
    blockOrUnblockUser: function blockOrUnblockUser(id) {
      var _this2 = this;

      var index = this.users.findIndex(function (user) {
        return user.id == id;
      });
      var status = this.users[index].status;

      if (status != "ban") {
        //block user
        axios.put("/admin/" + id, {
          type: "user",
          status: "ban"
        }).then(function (data) {
          // update ui
          _this2.users[index].status = "ban";
        });
      } else if (status == "ban") {
        //unblock user
        axios.put("/admin/" + id, {
          type: "user",
          status: "active"
        }).then(function (data) {
          //update ui
          _this2.users[index].status = "active";
        });
      }
    },
    viewProfile: function viewProfile(id) {
      var _this3 = this;

      //get profile
      axios.get("/admin/" + id, {
        type: "user"
      }).then(function (res) {
        console.log(res.data);
        _this3.userProfile = res.data;
      });
      this.showProfile = true;
    },
    closeProfile: function closeProfile() {
      this.showProfile = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Places.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Places.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    axios.get("/country").then(function (response) {
      _this.countries = response.data;
    });
  },
  data: function data() {
    return {
      countries: [],
      states: [],
      cities: [],
      newCountry: "",
      newState: "",
      newCity: "",
      showCountryEdit: false,
      showStateEdit: false,
      showCityEdit: false,
      updateCountry: "",
      updateState: "",
      updateCity: "",
      updateCountryKey: "",
      updateStateKey: "",
      updateCityKey: "",
      seldState: -1,
      seldCountry: -1
    };
  },
  computed: {
    newCountryObj: function newCountryObj() {
      var obj = {};
      obj.country_name = this.newCountry;
      obj._token = this.$parent.csrftoken;
      return obj;
    },
    updateCountryObj: function updateCountryObj() {
      var obj = {
        country_name: this.updateCountry,
        _token: this.$parent.csrftoken
      };
      return obj;
    },
    newStateObj: function newStateObj() {
      var obj = {};
      obj.cid = this.seldCountry;
      obj.state_name = this.newState;
      obj._token = this.$parent.csrftoken;
      return obj;
    },
    updateStateObj: function updateStateObj() {
      var obj = {
        state_name: this.updateState,
        _token: this.$parent.csrftoken
      };
      return obj;
    },
    newCityObj: function newCityObj() {
      var obj = {};
      obj.sid = this.seldState;
      obj.city_name = this.newCity;
      obj._token = this.$parent.csrftoken;
      return obj;
    },
    updateCityObj: function updateCityObj() {
      var obj = {
        city_name: this.updateCity,
        _token: this.$parent.csrftoken
      };
      return obj;
    }
  },
  watch: {
    seldState: function seldState() {
      this.showCityEdit = false;
      this.getCityList();
    },
    seldCountry: function seldCountry() {
      this.showCityEdit = false;
      this.cities = {};
      this.seldState = -1;
      this.getStateList();
    }
  },
  methods: {
    //Resource | Country
    delCountry: function delCountry(key) {
      var _this2 = this;

      //   this.states.pop();
      //delete item
      axios["delete"]("/country/" + key).then(function (response) {
        // delete item
        _this2.countries.splice(_this2.countries.findIndex(function (item) {
          return item.id === key;
        }), 1);
      });
    },
    storeCountry: function storeCountry() {
      var _this3 = this;

      //store item
      axios.post("/country", this.newCountryObj).then(function (response) {
        // push item
        var dataObj = {};
        dataObj.id = response.data;
        dataObj.country_name = _this3.newCountry;

        _this3.countries.push(dataObj);

        _this3.newCountry = "";
      });
    },
    editCountry: function editCountry(key) {
      this.showCountryEdit = true;
      this.updateCountry = this.countries.find(function (item) {
        return item.id == key;
      }).country_name;
      this.updateCountryKey = key;
    },
    updateCountryFn: function updateCountryFn() {
      var _this4 = this;

      axios.put("/country/" + this.updateCountryKey, this.updateCountryObj).then(function (response) {
        //update list and change input
        _this4.countries.find(function (item) {
          return item.id == _this4.updateCountryKey;
        }).country_name = _this4.updateCountry;
        _this4.showCountryEdit = false;
      });
    },
    //Resource | State
    delState: function delState(key) {
      var _this5 = this;

      //   this.states.pop();
      //delete item
      axios["delete"]("/state/" + key).then(function (response) {
        // delete item
        _this5.states.splice(_this5.states.findIndex(function (item) {
          return item.id === key;
        }), 1);
      });
    },
    storeState: function storeState() {
      var _this6 = this;

      //store item
      axios.post("/state", this.newStateObj).then(function (response) {
        // push item
        var dataObj = {};
        dataObj.id = response.data;
        dataObj.state_name = _this6.newState;

        _this6.states.push(dataObj);

        _this6.newState = "";
      });
    },
    editState: function editState(key) {
      this.showStateEdit = true;
      this.updateState = this.states.find(function (item) {
        return item.id == key;
      }).state_name;
      this.updateStateKey = key;
    },
    updateStateFn: function updateStateFn() {
      var _this7 = this;

      axios.put("/state/" + this.updateStateKey, this.updateStateObj).then(function (response) {
        //update list and change input
        _this7.states.find(function (item) {
          return item.id == _this7.updateStateKey;
        }).state_name = _this7.updateState;
        _this7.showStateEdit = false;
      });
    },
    //Resource | City
    delCity: function delCity(key) {
      var _this8 = this;

      //delete item
      axios["delete"]("/city/" + key).then(function (response) {
        // delete item
        _this8.cities.splice(_this8.cities.findIndex(function (item) {
          return item.id === key;
        }), 1);
      });
    },
    storeCity: function storeCity() {
      var _this9 = this;

      //store item
      axios.post("/city", this.newCityObj).then(function (response) {
        // push item
        var dataObj = {};
        dataObj.id = response.data;
        dataObj.city_name = _this9.newCity;

        _this9.cities.push(dataObj);

        _this9.newCity = "";
      });
    },
    editCity: function editCity(key) {
      this.showCityEdit = true;
      this.updateCity = this.cities.find(function (item) {
        return item.id == key;
      }).city_name;
      this.updateCityKey = key;
    },
    updateCityFn: function updateCityFn() {
      var _this10 = this;

      axios.put("/city/" + this.updateCityKey, this.updateCityObj).then(function (response) {
        //update city list and change input
        _this10.cities.find(function (item) {
          return item.id == _this10.updateCityKey;
        }).state_name = _this10.updateCity;
        _this10.showCityEdit = false;
      });
    },
    getCityList: function getCityList() {
      var _this11 = this;

      axios.get("/city/" + this.seldState).then(function (response) {
        _this11.cities = response.data;
      });
    },
    getStateList: function getStateList() {
      var _this12 = this;

      axios.get("/state/" + this.seldCountry).then(function (response) {
        _this12.states = response.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/SideBar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/SideBar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    setBreadCumb: function setBreadCumb(title) {
      this.$parent.breadCumbPath = title;
      this.activeTab = title;
    }
  },
  data: function data() {
    return {
      activeTab: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Transactions.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Transactions.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
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

    axios.get('adm/transactions').then(function (res) {
      _this.memberTransactions = res.data.member;
      _this.distribTransactions = res.data.distributor;
      _this.walletTransfers = res.data.transferCredits;
      _this.walletTransfers2 = res.data.transferDebits;
    });
  },
  data: function data() {
    return {
      memberTransactions: [],
      distribTransactions: [],
      walletTransfers: [],
      walletTransfers2: []
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/DashBoard.vue?vue&type=template&id=ec50b3ce&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/DashBoard.vue?vue&type=template&id=ec50b3ce& ***!
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
  return _c("div", { staticClass: "cover" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xs-6 col-md-3 col-lg-3 no-padding" }, [
          _c(
            "div",
            { staticClass: "panel panel-teal panel-widget border-right" },
            [
              _c("div", { staticClass: "row no-padding" }, [
                _c("em", {
                  staticClass: "fa fa-xl fa-shopping-cart color-blue"
                }),
                _vm._v(" "),
                _c("div", { staticClass: "large" }, [
                  _vm._v(_vm._s(_vm.statistics.items))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-muted" }, [_vm._v("New Posts")])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-6 col-md-3 col-lg-3 no-padding" }, [
          _c(
            "div",
            { staticClass: "panel panel-blue panel-widget border-right" },
            [
              _c("div", { staticClass: "row no-padding" }, [
                _c("em", { staticClass: "fa fa-xl fa-comments color-orange" }),
                _vm._v(" "),
                _c("div", { staticClass: "large" }, [
                  _vm._v(_vm._s(_vm.statistics.orders))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-muted" }, [_vm._v("Orders")])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-6 col-md-3 col-lg-3 no-padding" }, [
          _c(
            "div",
            { staticClass: "panel panel-orange panel-widget border-right" },
            [
              _c("div", { staticClass: "row no-padding" }, [
                _c("em", { staticClass: "fa fa-xl fa-users color-teal" }),
                _vm._v(" "),
                _c("div", { staticClass: "large" }, [
                  _vm._v(_vm._s(_vm.statistics.users))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-muted" }, [_vm._v("New Users")])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-6 col-md-3 col-lg-3 no-padding" }, [
          _c("div", { staticClass: "panel panel-red panel-widget" }, [
            _c("div", { staticClass: "row no-padding" }, [
              _c("em", { staticClass: "fa fa-xl fa-search color-red" }),
              _vm._v(" "),
              _c("div", { staticClass: "large" }, [
                _vm._v(_vm._s(_vm.statistics.auctions))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-muted" }, [
                _vm._v("Auctions This Week")
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-12" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "panel panel-default" }, [
          _c("div", { staticClass: "panel-heading" }, [
            _vm._v("\n\t\t\t\t\t\tSite Traffic Overview\n\t\t\t\t\t\t"),
            _c(
              "ul",
              {
                staticClass: "pull-right panel-settings panel-button-tab-right"
              },
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
                  _c(
                    "ul",
                    { staticClass: "dropdown-menu dropdown-menu-right" },
                    [
                      _c("li", [
                        _c("ul", { staticClass: "dropdown-settings" }, [
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [
                              _c("em", { staticClass: "fa fa-cog" }),
                              _vm._v(" Settings 1\n\t\t\t\t\t\t\t\t\t\t\t")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", { staticClass: "divider" }),
                          _vm._v(" "),
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [
                              _c("em", { staticClass: "fa fa-cog" }),
                              _vm._v(" Settings 2\n\t\t\t\t\t\t\t\t\t\t\t")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", { staticClass: "divider" }),
                          _vm._v(" "),
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [
                              _c("em", { staticClass: "fa fa-cog" }),
                              _vm._v(" Settings 3\n\t\t\t\t\t\t\t\t\t\t\t")
                            ])
                          ])
                        ])
                      ])
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass:
                  "pull-right clickable panel-toggle panel-button-tab-left"
              },
              [_c("em", { staticClass: "fa fa-toggle-up" })]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c("div", { staticClass: "canvas-wrapper" }, [
              _c("canvas", {
                staticClass: "main-chart",
                staticStyle: { width: "1070px", height: "356px" },
                attrs: { id: "line-chart", height: "356", width: "1070" }
              })
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/DistribReg.vue?vue&type=template&id=43e9725a&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/DistribReg.vue?vue&type=template&id=43e9725a& ***!
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
  return _c("div", { staticClass: "panel panel-default" }, [
    _c("div", { staticClass: "panel-body" }, [
      _c("div", { staticClass: "panel panel-default" }, [
        _c("div", { staticClass: "panel-body" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Distributor Email")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.email,
                    expression: "email"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "email" },
                domProps: { value: _vm.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.email = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Distributor Name")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.distrib_name,
                    expression: "distrib_name"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.distrib_name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.distrib_name = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Head Quarters")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.headq,
                    expression: "headq"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.headq },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.headq = $event.target.value
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Service Charge in Percentage")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.service_charge,
                    expression: "service_charge"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "number" },
                domProps: { value: _vm.service_charge },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.service_charge = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Website")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.website,
                    expression: "website"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.website },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.website = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Contact")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.contact,
                    expression: "contact"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "tel" },
                domProps: { value: _vm.contact },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.contact = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn",
                class: {
                  "btn-danger": _vm.invalid,
                  "btn-primary": !_vm.invalid
                },
                on: { click: _vm.saveDistributor }
              },
              [_vm._v(_vm._s(_vm.saveBtnText))]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-secondary",
                on: { click: _vm.resetDistributor }
              },
              [_vm._v("Reset")]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Distributors.vue?vue&type=template&id=65d437d7&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Distributors.vue?vue&type=template&id=65d437d7& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "panel panel-default" }, [
    _c("div", { staticClass: "panel-body" }, [
      _c("table", { staticClass: "table table-striped" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.users, function(user) {
            return _c("tr", { key: user.id }, [
              _c("td", [_vm._v(_vm._s(user.distrib_name))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(user.headq))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(user.email))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(user.contact))])
            ])
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("Distributor Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Head Quarters")]),
      _vm._v(" "),
      _c("th", [_vm._v("Email")]),
      _vm._v(" "),
      _c("th", [_vm._v("Contact")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Members.vue?vue&type=template&id=367ff97e&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Members.vue?vue&type=template&id=367ff97e& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "panel panel-default" },
    [
      _c("div", { staticClass: "panel-body" }, [
        _c("table", { staticClass: "table table-striped" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.users, function(user) {
              return _c("tr", { key: user.id }, [
                _c("td", [_vm._v(_vm._s(user.fname + " " + user.lname))]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(user.city_name) +
                      ", " +
                      _vm._s(user.state_name) +
                      ", " +
                      _vm._s(user.country_name)
                  )
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(user.email))]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-primary",
                      attrs: { title: "Profile" },
                      on: {
                        click: function($event) {
                          return _vm.viewProfile(user.id)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fa fa-user" })]
                  ),
                  _vm._v(" "),
                  user.status == "active"
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-danger",
                          attrs: { title: "Block User" },
                          on: {
                            click: function($event) {
                              return _vm.blockOrUnblockUser(user.id)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fa fa-ban" })]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  user.status == "ban"
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-info",
                          attrs: { title: "Unblock User" },
                          on: {
                            click: function($event) {
                              return _vm.blockOrUnblockUser(user.id)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fa fa-circle" })]
                      )
                    : _vm._e()
                ])
              ])
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { "leave-active-class": "animate fade" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showProfile,
                expression: "showProfile"
              }
            ],
            staticClass: "modal-backdrop"
          },
          [
            _c("div", { staticClass: "modal show" }, [
              _c("div", { staticClass: "modal-dialog" }, [
                _c("div", { staticClass: "modal-content" }, [
                  _c("div", { staticClass: "modal-header" }, [
                    _vm._v(
                      "\n              " +
                        _vm._s(_vm.userProfile.fname) +
                        " " +
                        _vm._s(_vm.userProfile.lname) +
                        "\n              "
                    ),
                    _c(
                      "button",
                      { staticClass: "close", on: { click: _vm.closeProfile } },
                      [_c("i", { staticClass: "fa fa-times" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "container-fluid" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-5" }, [
                          _c("img", {
                            staticStyle: { "max-width": "200px" },
                            attrs: {
                              src: "storage/" + _vm.userProfile.avatar,
                              alt: ""
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-7" }, [
                          _c("p", [_vm._v(_vm._s(_vm.userProfile.about_you))]),
                          _vm._v(" "),
                          _c("div", { staticClass: "panel panel-primary" }, [
                            _c("div", { staticClass: "panel-body" }, [
                              _c("i", { staticClass: "fa fa-birthday-cake" }),
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.userProfile.dob) +
                                  " | \n                        "
                              ),
                              _c("i", { staticClass: "fa fa-heart" }),
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.userProfile.relationship)
                              ),
                              _c("br"),
                              _vm._v(" "),
                              _c("i", { staticClass: "fa fa-phone" }),
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.userProfile.mobile) +
                                  "\n                      "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              attrs: {
                                href:
                                  "https://facebook.com/" +
                                  _vm.userProfile.facebook
                              }
                            },
                            [_c("i", { staticClass: "fa fa-facebook" })]
                          ),
                          _vm._v(" |\n                    "),
                          _c(
                            "a",
                            {
                              attrs: {
                                href:
                                  "https://twitter.com/" +
                                  _vm.userProfile.twitter
                              }
                            },
                            [_c("i", { staticClass: "fa fa-twitter" })]
                          ),
                          _vm._v(" |\n                    "),
                          _c(
                            "a",
                            {
                              attrs: {
                                href:
                                  "https://dribbble.com/" +
                                  _vm.userProfile.dribbble
                              }
                            },
                            [_c("i", { staticClass: "fa fa-dribbble" })]
                          ),
                          _vm._v(" |\n                    "),
                          _c(
                            "a",
                            { attrs: { href: _vm.userProfile.website } },
                            [_c("i", { staticClass: "fa fa-external-link" })]
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "\n                    Profile Created On: " +
                              _vm._s(_vm.userProfile.created_at) +
                              "\n                  "
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Place")]),
      _vm._v(" "),
      _c("th", [_vm._v("Email")]),
      _vm._v(" "),
      _c("th", [_vm._v("-")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Places.vue?vue&type=template&id=3a8344f7&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Places.vue?vue&type=template&id=3a8344f7& ***!
  \***************************************************************************************************************************************************************************************************************/
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
          _c(
            "ul",
            { staticClass: "todo-list" },
            [
              _c(
                "transition-group",
                { attrs: { "leave-active-class": "animated fadeOutDown" } },
                _vm._l(this.countries, function(country) {
                  return _c(
                    "li",
                    { key: country.id, staticClass: "todo-list-item" },
                    [
                      _c("div", { staticClass: "checkbox" }, [
                        _c("i", { staticClass: "fa fa-check-square" }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "checkbox-1" } }, [
                          _vm._v(_vm._s(country.country_name))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "pull-right action-buttons" }, [
                        _c(
                          "a",
                          {
                            staticClass: "pencil",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.editCountry(country.id)
                              }
                            }
                          },
                          [_c("em", { staticClass: "fa fa-pencil" })]
                        )
                      ])
                    ]
                  )
                }),
                0
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "panel-footer" }, [
          !_vm.showCountryEdit
            ? _c("div", { staticClass: "input-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newCountry,
                      expression: "newCountry"
                    }
                  ],
                  staticClass: "form-control input-md",
                  attrs: {
                    id: "btn-input",
                    type: "text",
                    placeholder: "Add New Country"
                  },
                  domProps: { value: _vm.newCountry },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.newCountry = $event.target.value
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
                      on: { click: _vm.storeCountry }
                    },
                    [_vm._v("Add")]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.showCountryEdit
            ? _c("div", { staticClass: "input-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.updateCountry,
                      expression: "updateCountry"
                    }
                  ],
                  staticClass: "form-control input-md",
                  attrs: {
                    id: "btn-edit",
                    type: "text",
                    placeholder: "Edit Country"
                  },
                  domProps: { value: _vm.updateCountry },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.updateCountry = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "input-group-btn" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-md",
                      attrs: { id: "btn-updateCountry" },
                      on: { click: _vm.updateCountryFn }
                    },
                    [_vm._v("Save")]
                  )
                ])
              ])
            : _vm._e()
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "panel panel-default" }, [
        _vm._m(1),
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
          _c(
            "ul",
            { staticClass: "todo-list" },
            _vm._l(this.states, function(state) {
              return _c(
                "li",
                { key: state.id, staticClass: "todo-list-item" },
                [
                  _c("div", { staticClass: "checkbox" }, [
                    _c("i", { staticClass: "fa fa-check-square" }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "checkbox-1" } }, [
                      _vm._v(_vm._s(state.state_name))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "pull-right action-buttons" }, [
                    _c(
                      "a",
                      {
                        staticClass: "pencil",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.editState(state.id)
                          }
                        }
                      },
                      [_c("em", { staticClass: "fa fa-pencil" })]
                    )
                  ])
                ]
              )
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "panel-footer" }, [
          !_vm.showStateEdit
            ? _c("div", { staticClass: "input-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newState,
                      expression: "newState"
                    }
                  ],
                  staticClass: "form-control input-md",
                  attrs: {
                    id: "btn-input",
                    type: "text",
                    placeholder: "Add New State"
                  },
                  domProps: { value: _vm.newState },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.newState = $event.target.value
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
                      on: { click: _vm.storeState }
                    },
                    [_vm._v("Add")]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.showStateEdit
            ? _c("div", { staticClass: "input-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.updateState,
                      expression: "updateState"
                    }
                  ],
                  staticClass: "form-control input-md",
                  attrs: {
                    id: "btn-edit",
                    type: "text",
                    placeholder: "Edit State"
                  },
                  domProps: { value: _vm.updateState },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.updateState = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "input-group-btn" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-md",
                      attrs: { id: "btn-update" },
                      on: { click: _vm.updateStateFn }
                    },
                    [_vm._v("Save")]
                  )
                ])
              ])
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "panel panel-default" }, [
        _vm._m(2),
        _vm._v(" "),
        _c("div", { staticClass: "panel-body" }, [
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
          _c(
            "ul",
            { staticClass: "todo-list" },
            _vm._l(this.cities, function(city) {
              return _c("li", { key: city.id, staticClass: "todo-list-item" }, [
                _c("div", { staticClass: "checkbox" }, [
                  _c("i", { staticClass: "fa fa-check-square" }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "checkbox-1" } }, [
                    _vm._v(_vm._s(city.city_name))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "pull-right action-buttons" }, [
                  _c(
                    "a",
                    {
                      staticClass: "pencil",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.editCity(city.id)
                        }
                      }
                    },
                    [_c("em", { staticClass: "fa fa-pencil" })]
                  )
                ])
              ])
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "panel-footer" }, [
          !_vm.showCityEdit
            ? _c("div", { staticClass: "input-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newCity,
                      expression: "newCity"
                    }
                  ],
                  staticClass: "form-control input-md",
                  attrs: {
                    id: "btn-input",
                    type: "text",
                    placeholder: "Add New City"
                  },
                  domProps: { value: _vm.newCity },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.newCity = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "input-group-btn" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-md",
                      attrs: { id: "btn-addCity" },
                      on: { click: _vm.storeCity }
                    },
                    [_vm._v("Add")]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.showCityEdit
            ? _c("div", { staticClass: "input-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.updateCity,
                      expression: "updateCity"
                    }
                  ],
                  staticClass: "form-control input-md",
                  attrs: {
                    id: "btn-edit",
                    type: "text",
                    placeholder: "Edit City"
                  },
                  domProps: { value: _vm.updateCity },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.updateCity = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "input-group-btn" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-md",
                      attrs: { id: "btn-updateCity" },
                      on: { click: _vm.updateCityFn }
                    },
                    [_vm._v("Save")]
                  )
                ])
              ])
            : _vm._e()
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
      _vm._v("Country\n        "),
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
      _vm._v("States\n        "),
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
    return _c("div", { staticClass: "panel-heading" }, [
      _vm._v("City\n        "),
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/SideBar.vue?vue&type=template&id=2db2fa21&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/SideBar.vue?vue&type=template&id=2db2fa21& ***!
  \****************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "divider" }),
      _vm._v(" "),
      _vm._m(1),
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
                _c("em", { staticClass: "fa fa-location-arrow" }, [
                  _vm._v(" ")
                ]),
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
            class: { active: _vm.activeTab == "Members" },
            on: {
              click: function($event) {
                return _vm.setBreadCumb("Members")
              }
            }
          },
          [
            _c("router-link", { attrs: { to: "members" } }, [
              _c("a", { attrs: { href: "" } }, [
                _c("em", { staticClass: "fa fa-group" }, [_vm._v(" ")]),
                _vm._v("\n          Members\n        ")
              ])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            class: { active: _vm.activeTab == "Distributors" },
            on: {
              click: function($event) {
                return _vm.setBreadCumb("Distributors")
              }
            }
          },
          [
            _c("router-link", { attrs: { to: "distributors" } }, [
              _c("a", { attrs: { href: "" } }, [
                _c("em", { staticClass: "fa fa-truck" }, [_vm._v(" ")]),
                _vm._v("\n          Distributors\n        ")
              ])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            class: { active: _vm.activeTab == "Add Distributor" },
            on: {
              click: function($event) {
                return _vm.setBreadCumb("Add Distributor")
              }
            }
          },
          [
            _c("router-link", { attrs: { to: "distribreg" } }, [
              _c("a", { attrs: { href: "" } }, [
                _c("em", { staticClass: "fa fa-plus-square-o" }, [_vm._v(" ")]),
                _vm._v("\n          Add Distributors\n        ")
              ])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            class: { active: _vm.activeTab == "Transactions" },
            on: {
              click: function($event) {
                return _vm.setBreadCumb("Transactions")
              }
            }
          },
          [
            _c("router-link", { attrs: { to: "transactions" } }, [
              _c("a", { attrs: { href: "" } }, [
                _c("em", { staticClass: "fa fa-money" }, [_vm._v(" ")]),
                _vm._v("\n          Transactions\n        ")
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
    return _c("div", { staticClass: "profile-sidebar" }, [
      _c("div", { staticClass: "profile-userpic" }, [
        _c("img", {
          staticClass: "img-responsive",
          attrs: { src: "http://placehold.it/50/30a5ff/fff", alt: "" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "profile-usertitle" }, [
        _c(
          "div",
          { staticClass: "profile-usertitle-name font-800 all-uppercase" },
          [_vm._v("Admin")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "profile-usertitle-status" }, [
          _c("span", { staticClass: "indicator label-success" }),
          _vm._v("Online\n      ")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "clear" })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Transactions.vue?vue&type=template&id=720f3f40&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Transactions.vue?vue&type=template&id=720f3f40& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "col-md-4" }, [
      _c("div", { staticClass: "panel panel-default" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "panel-body timeline-container" }, [
          _c(
            "ul",
            { staticClass: "timeline" },
            _vm._l(_vm.memberTransactions, function(item) {
              return _c("li", { key: item.trid }, [
                _c("div", { staticClass: "timeline-badge primary" }, [
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
                          _vm._s(item.cfname) +
                          " " +
                          _vm._s(item.clname) +
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
    _c("div", { staticClass: "col-md-4" }, [
      _c("div", { staticClass: "panel panel-default" }, [
        _vm._m(1),
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
    _c("div", { staticClass: "col-md-4" }, [
      _c("div", { staticClass: "panel panel-default" }, [
        _vm._m(2),
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
      _vm._v("\n          On Items\n          "),
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
    return _c("div", { staticClass: "panel-heading" }, [
      _vm._v("\n          Wallet Transfers\n          "),
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

/***/ "./resources/js/admin.js":
/*!*******************************!*\
  !*** ./resources/js/admin.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _components_admin_SideBar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/admin/SideBar.vue */ "./resources/js/components/admin/SideBar.vue");
/* harmony import */ var _components_admin_Places_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/admin/Places.vue */ "./resources/js/components/admin/Places.vue");
/* harmony import */ var _components_admin_Members_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin/Members.vue */ "./resources/js/components/admin/Members.vue");
/* harmony import */ var _components_admin_Distributors_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/Distributors.vue */ "./resources/js/components/admin/Distributors.vue");
/* harmony import */ var _components_admin_DistribReg_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/DistribReg.vue */ "./resources/js/components/admin/DistribReg.vue");
/* harmony import */ var _components_admin_DashBoard_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/DashBoard.vue */ "./resources/js/components/admin/DashBoard.vue");
/* harmony import */ var _components_admin_Transactions_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/Transactions.vue */ "./resources/js/components/admin/Transactions.vue");
// vue router
// ________________________

Vue.use(vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]); // components
// _____________________








Vue.component('SBar', _components_admin_SideBar_vue__WEBPACK_IMPORTED_MODULE_1__["default"]); // routes
// __________________

var routes = [{
  path: '/dashboard',
  component: _components_admin_DashBoard_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
}, {
  path: '/places',
  component: _components_admin_Places_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  path: '/members',
  component: _components_admin_Members_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: '/distributors',
  component: _components_admin_Distributors_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  path: '/distribreg',
  component: _components_admin_DistribReg_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  path: '/transactions',
  component: _components_admin_Transactions_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
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
    // info:null
    processing: false
  },
  router: router,
  mounted: function mounted() {
    var _this = this;

    window.axios.interceptors.request.use(function (config) {
      _this.processing = true;
      return config;
    });
    window.axios.interceptors.response.use(function (response) {
      _this.processing = false;
      return response;
    });
  },
  methods: {
    register: function register() {
      var form = $('#regForm')[0];
      this.data = new FormData(form); // this.data.append('_token', this.csrftoken);

      axios.post('/register', this.data).then(function (response) {
        return console.log(response.data);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/admin/DashBoard.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/admin/DashBoard.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashBoard_vue_vue_type_template_id_ec50b3ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashBoard.vue?vue&type=template&id=ec50b3ce& */ "./resources/js/components/admin/DashBoard.vue?vue&type=template&id=ec50b3ce&");
/* harmony import */ var _DashBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashBoard.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/DashBoard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashBoard_vue_vue_type_template_id_ec50b3ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashBoard_vue_vue_type_template_id_ec50b3ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/DashBoard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/DashBoard.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/admin/DashBoard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashBoard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/DashBoard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/DashBoard.vue?vue&type=template&id=ec50b3ce&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/admin/DashBoard.vue?vue&type=template&id=ec50b3ce& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_template_id_ec50b3ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashBoard.vue?vue&type=template&id=ec50b3ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/DashBoard.vue?vue&type=template&id=ec50b3ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_template_id_ec50b3ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_template_id_ec50b3ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/DistribReg.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/admin/DistribReg.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DistribReg_vue_vue_type_template_id_43e9725a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DistribReg.vue?vue&type=template&id=43e9725a& */ "./resources/js/components/admin/DistribReg.vue?vue&type=template&id=43e9725a&");
/* harmony import */ var _DistribReg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DistribReg.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/DistribReg.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DistribReg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DistribReg_vue_vue_type_template_id_43e9725a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DistribReg_vue_vue_type_template_id_43e9725a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/DistribReg.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/DistribReg.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/admin/DistribReg.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DistribReg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DistribReg.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/DistribReg.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DistribReg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/DistribReg.vue?vue&type=template&id=43e9725a&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/DistribReg.vue?vue&type=template&id=43e9725a& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DistribReg_vue_vue_type_template_id_43e9725a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DistribReg.vue?vue&type=template&id=43e9725a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/DistribReg.vue?vue&type=template&id=43e9725a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DistribReg_vue_vue_type_template_id_43e9725a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DistribReg_vue_vue_type_template_id_43e9725a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/Distributors.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/Distributors.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Distributors_vue_vue_type_template_id_65d437d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Distributors.vue?vue&type=template&id=65d437d7& */ "./resources/js/components/admin/Distributors.vue?vue&type=template&id=65d437d7&");
/* harmony import */ var _Distributors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Distributors.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Distributors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Distributors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Distributors_vue_vue_type_template_id_65d437d7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Distributors_vue_vue_type_template_id_65d437d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Distributors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Distributors.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/admin/Distributors.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Distributors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Distributors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Distributors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Distributors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Distributors.vue?vue&type=template&id=65d437d7&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/admin/Distributors.vue?vue&type=template&id=65d437d7& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Distributors_vue_vue_type_template_id_65d437d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Distributors.vue?vue&type=template&id=65d437d7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Distributors.vue?vue&type=template&id=65d437d7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Distributors_vue_vue_type_template_id_65d437d7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Distributors_vue_vue_type_template_id_65d437d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/Members.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/admin/Members.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Members_vue_vue_type_template_id_367ff97e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Members.vue?vue&type=template&id=367ff97e& */ "./resources/js/components/admin/Members.vue?vue&type=template&id=367ff97e&");
/* harmony import */ var _Members_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Members.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Members.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Members_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Members_vue_vue_type_template_id_367ff97e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Members_vue_vue_type_template_id_367ff97e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Members.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Members.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/admin/Members.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Members_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Members.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Members.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Members_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Members.vue?vue&type=template&id=367ff97e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/admin/Members.vue?vue&type=template&id=367ff97e& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Members_vue_vue_type_template_id_367ff97e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Members.vue?vue&type=template&id=367ff97e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Members.vue?vue&type=template&id=367ff97e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Members_vue_vue_type_template_id_367ff97e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Members_vue_vue_type_template_id_367ff97e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/Places.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/admin/Places.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Places_vue_vue_type_template_id_3a8344f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Places.vue?vue&type=template&id=3a8344f7& */ "./resources/js/components/admin/Places.vue?vue&type=template&id=3a8344f7&");
/* harmony import */ var _Places_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Places.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Places.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Places_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Places_vue_vue_type_template_id_3a8344f7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Places_vue_vue_type_template_id_3a8344f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Places.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Places.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/admin/Places.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Places_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Places.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Places.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Places_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Places.vue?vue&type=template&id=3a8344f7&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/admin/Places.vue?vue&type=template&id=3a8344f7& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Places_vue_vue_type_template_id_3a8344f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Places.vue?vue&type=template&id=3a8344f7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Places.vue?vue&type=template&id=3a8344f7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Places_vue_vue_type_template_id_3a8344f7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Places_vue_vue_type_template_id_3a8344f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/SideBar.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/admin/SideBar.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideBar_vue_vue_type_template_id_2db2fa21___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideBar.vue?vue&type=template&id=2db2fa21& */ "./resources/js/components/admin/SideBar.vue?vue&type=template&id=2db2fa21&");
/* harmony import */ var _SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/SideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SideBar_vue_vue_type_template_id_2db2fa21___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SideBar_vue_vue_type_template_id_2db2fa21___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/SideBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/SideBar.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/admin/SideBar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SideBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/SideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/SideBar.vue?vue&type=template&id=2db2fa21&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/admin/SideBar.vue?vue&type=template&id=2db2fa21& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_2db2fa21___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SideBar.vue?vue&type=template&id=2db2fa21& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/SideBar.vue?vue&type=template&id=2db2fa21&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_2db2fa21___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_2db2fa21___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/Transactions.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/Transactions.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Transactions_vue_vue_type_template_id_720f3f40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transactions.vue?vue&type=template&id=720f3f40& */ "./resources/js/components/admin/Transactions.vue?vue&type=template&id=720f3f40&");
/* harmony import */ var _Transactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Transactions.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Transactions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Transactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Transactions_vue_vue_type_template_id_720f3f40___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Transactions_vue_vue_type_template_id_720f3f40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Transactions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Transactions.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/admin/Transactions.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Transactions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Transactions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Transactions.vue?vue&type=template&id=720f3f40&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/admin/Transactions.vue?vue&type=template&id=720f3f40& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_template_id_720f3f40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Transactions.vue?vue&type=template&id=720f3f40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Transactions.vue?vue&type=template&id=720f3f40&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_template_id_720f3f40___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_template_id_720f3f40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 2:
/*!*************************************!*\
  !*** multi ./resources/js/admin.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/blake/_workspace/WebApps/MCAMainProject/Nexus/resources/js/admin.js */"./resources/js/admin.js");


/***/ })

/******/ });