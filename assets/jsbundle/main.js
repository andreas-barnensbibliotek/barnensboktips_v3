(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        main: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/main.js", "vendors~main" ]);
    return checkDeferredModules();
})({
    "./assets/js/components/old.js": function(module, exports) {
        eval("module.exports = {\n  testarold: function testarold(msg) {\n    return 'detta �r ett meddelande ' + msg;\n  }\n};\n\n//# sourceURL=webpack:///./assets/js/components/old.js?");
    },
    "./assets/js/components/test.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("let _ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nconst hello = () => {\n  return {\n    skrik: msg => {\n      alert('Hello2! ');\n      return 'TEST igen dettaeller' + _.add(6, 4) + ' --- ' + msg;\n    },\n    alfvalue: 'detta är ett simpelt värde från hello test!'\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (hello);\n\n//# sourceURL=webpack:///./assets/js/components/test.js?");
    },
    "./assets/js/handlebar/handlebarUsageExemple.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var _service_apiServiceHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/apiServiceHandler */ "./assets/js/service/apiServiceHandler.js");\n\n\nconst HBusageExemple = () => {\n  let _apiObj = Object(_service_apiServiceHandler__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();\n\n  function ServiceApi(tmpl, url, callback) {\n    $curtmpl = tmpl;\n\n    _apiObj.GetjsonDetail(url, function (data) {\n      callback($curtmpl(data));\n    });\n  }\n\n  function HandelbarService(tmpl, callback) {\n    let $curtmpl = __webpack_require__(/*! ../../../htmlTemplate/hb_exemple.hbs */ "./htmlTemplate/hb_exemple.hbs");\n\n    callback($curtmpl());\n  }\n\n  return {\n    HandlebarServiceApiCallExemple: ServiceApi,\n    HandlebarServiceExemple: HandelbarService\n  };\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (HBusageExemple);\n\n//# sourceURL=webpack:///./assets/js/handlebar/handlebarUsageExemple.js?');
    },
    "./assets/js/main.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _components_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/test */ "./assets/js/components/test.js");\n/* harmony import */ var _handlebar_handlebarUsageExemple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlebar/handlebarUsageExemple */ "./assets/js/handlebar/handlebarUsageExemple.js");\n\n\n\nvar dt = __webpack_require__(/*! ./components/old */ "./assets/js/components/old.js");\n\nlet ny = Object(_components_test__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();\nconsole.log(ny.skrik());\nalert(ny.alfvalue);\n\nlet _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");\n\ndt.testarold(\'funkar detta\');\n$(function () {\n  let _HBObj = Object(_handlebar_handlebarUsageExemple__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();\n\n  alert(\' och igen..nu utan \' + ny.skrik(dt.testarold(\'funkar detta\')));\n  console.log(\'innan jplist2\');\n  jplist.init();\n\n  function visaHBExemple() {\n    let templ = \'../../htmlTemplate/hb_exemple.hbs\';\n\n    _HBObj.HandlebarServiceExemple(templ, function (data) {\n      $(\'#handlebarTmplExemple\').html(data);\n    });\n  }\n\n  visaHBExemple();\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))\n\n//# sourceURL=webpack:///./assets/js/main.js?');
    },
    "./assets/js/service/apiServiceHandler.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _storagehandler_storagehandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storagehandler/storagehandler */ \"./assets/js/storagehandler/storagehandler.js\");\n\n\nconst apiServiceHandler = () => {\n  let storeObj = Object(_storagehandler_storagehandler__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"])();\n\n  function GetJsonData(url, callback) {\n    if (!url) {\n      return false;\n    } else {\n      fetch(url).then(resp => resp.json()) // Transform the data into json\n      .then(function (data) {\n        //storeObj.addDataToStorage(data);\n        callback(data);\n      }).catch(function () {\n        console.log('error i Fetch: ' + url);\n      });\n    }\n  }\n\n  function PostJsonData(url, postdata, callback) {\n    if (!url) {\n      return false;\n    } else {\n      //console.log(\"Searchservicen hämtar Arrangemangdata\");\n      $.ajax({\n        async: true,\n        type: 'post',\n        url: url,\n        data: postdata,\n        success: function success(data) {\n          console.log('Hämtar Data: '); //storeObj.addDataToStorage(data);\n\n          callback(data);\n        },\n        error: function error(xhr, ajaxOptions, thrownError) {\n          alert('Nått blev fel vid hämtning av POST json!');\n        }\n      });\n    }\n  }\n\n  function GetJsonDataFromStorage(url, callback) {\n    if (!storeObj.chkifSession()) {\n      GetJsonData(url, function (data) {\n        storeObj.addDataToStorage(data);\n        storeObj.setSession();\n        callback(data);\n      });\n    } else {\n      let currdata = storeObj.getDataFromStorage();\n\n      if (currdata) {\n        callback(currdata);\n      } else {\n        GetJsonData(url, function (data) {\n          storeObj.addDataToStorage(data);\n          callback(data);\n        });\n        console.log('hämta ny data');\n      }\n    }\n  }\n\n  function GetJsonPostDataFromStorage(url, postdata, callback) {\n    if (!storeObj.chkifSession()) {\n      PostJsonData(url, postdata, function (data) {\n        storeObj.addDataToStorage(data);\n        storeObj.setSession();\n        callback(data);\n      });\n    } else {\n      let currdata = storeObj.getDataFromStorage();\n\n      if (currdata) {\n        callback(currdata);\n      } else {\n        PostJsonData(url, postdata, function (data) {\n          storeObj.addDataToStorage(data);\n          callback(data);\n        });\n        console.log('hämta ny Postdata');\n      }\n    }\n  }\n\n  function updateGetJson(url, callback) {\n    GetJsonData(url, function (data) {\n      callback(data);\n    });\n  }\n\n  function GetJsonDataAutocomplete(url, callback) {\n    GetJsonData(url, function (data) {\n      storeObj.addDataToStorage(data);\n      storeObj.setSession();\n      callback(data);\n    });\n  }\n\n  return {\n    Getjson: GetJsonDataFromStorage,\n    GetjsonAuto: GetJsonDataAutocomplete,\n    GetjsonDetail: GetJsonData,\n    UpdgetJson: updateGetJson,\n    UpdPostjson: PostJsonData,\n    Postjson: GetJsonPostDataFromStorage\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (apiServiceHandler);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./assets/js/service/apiServiceHandler.js?");
    },
    "./assets/js/storagehandler/storagehandler.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("const storagehandler = () => {\n  let _storage = Storages.localStorage; //console.log('storage: ' + _storage);\n\n  let _session = Storages.sessionStorage; // LOCALSTORAGE\n  // används för att rätt listningar skall visas om användaren öppnar sidan för förstagången = alla arr annars senaste sökningen och\n  // om användaren går till detalj skall senaste sökningen visas.\n\n  function SetSession() {\n    _session.set('session', 'true');\n\n    console.log('session true');\n  }\n\n  function chkIfsessionActive() {\n    let sess = _session.get('session');\n\n    if (sess) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  function isCurrentdataSet() {\n    let tmpdata = _storage.get('currentdata');\n\n    if (tmpdata) {\n      console.log('currentdata =  true DATA Finns i localstorage');\n      return true;\n    }\n\n    console.log('currentdata = false Det finns ingen data');\n    return false;\n  }\n\n  function addDataToStorageHandler(stdata) {\n    if (stdata) {\n      // _storage.removeAll();\n      console.log('ADD currentdata to storage: ' + stdata);\n\n      _storage.remove('currentdata');\n\n      _storage.set('currentdata', stdata);\n    }\n\n    return stdata;\n  }\n\n  function getDataFromStorageHandler() {\n    let stdata;\n\n    if (isCurrentdataSet()) {\n      stdata = _storage.get('currentdata');\n      console.log('GET currentdata from storage: ' + stdata);\n    }\n\n    return stdata;\n  }\n\n  function resetStorage() {\n    _storage.remove('currentdata');\n\n    _storage.remove('my-page-storage');\n  }\n\n  return {\n    checkStorageData: isCurrentdataSet,\n    addDataToStorage: addDataToStorageHandler,\n    getDataFromStorage: getDataFromStorageHandler,\n    setSession: SetSession,\n    chkifSession: chkIfsessionActive,\n    resetstorage: resetStorage\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (storagehandler);\n\n//# sourceURL=webpack:///./assets/js/storagehandler/storagehandler.js?");
    },
    "./htmlTemplate/hb_exemple.hbs": function(module, exports, __webpack_require__) {
        eval('var Handlebars = __webpack_require__(/*! ../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");\nfunction __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }\nmodule.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "<div class=\\"starttemplateClass\\">\\r\\n    Detta är en handlebar template\\r\\n</div>\\r\\n";\n},"useData":true});\n\n//# sourceURL=webpack:///./htmlTemplate/hb_exemple.hbs?');
    }
});