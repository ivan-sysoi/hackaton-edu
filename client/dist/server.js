global.assets = require("./assets.json");
module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isBrowser = typeof window !== 'undefined';
var isServer = typeof window === 'undefined';
var isDev = "production" !== 'production';
var env = "production" || 'development';
var basename = '';
var host = process.env.HOST || 'localhost';
var port = process.env.PORT || 8080;
var requestOptionsKey = 'o';
var api = 'http://deav-api.local/api/v1/';

if (isDev) {
  //jwtExpiryTime = 60
  //jwtRefreshTimeout = 30 * 1000
}

module.exports = {
  isBrowser: isBrowser,
  isServer: isServer,
  isDev: isDev,
  env: env,
  basename: basename,
  host: host,
  port: port,
  api: api,
  requestOptionsKey: requestOptionsKey
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fields = __webpack_require__(61);

Object.keys(_fields).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fields[key];
    }
  });
});

var _forms = __webpack_require__(71);

Object.keys(_forms).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _forms[key];
    }
  });
});

var _pages = __webpack_require__(77);

Object.keys(_pages).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pages[key];
    }
  });
});

var _templates = __webpack_require__(96);

Object.keys(_templates).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _templates[key];
    }
  });
});

var _layouts = __webpack_require__(100);

Object.keys(_layouts).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _layouts[key];
    }
  });
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _selectors = __webpack_require__(74);

Object.keys(_selectors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _selectors[key];
    }
  });
});

var _selectors2 = __webpack_require__(23);

Object.keys(_selectors2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _selectors2[key];
    }
  });
});

var _selectors3 = __webpack_require__(13);

Object.keys(_selectors3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _selectors3[key];
    }
  });
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-md/lib/Buttons/Button");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UI_INITIAL_STATE = exports.UI_PAGES = exports.UI_MEDIA = exports.SUCCESS = exports.ERROR = exports.INFO = exports.UI = undefined;

var _UI_INITIAL_STATE;

var _Drawers = __webpack_require__(47);

var _Drawers2 = _interopRequireDefault(_Drawers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UI = exports.UI = 'ui';
var INFO = exports.INFO = 'info';
var ERROR = exports.ERROR = 'error';
var SUCCESS = exports.SUCCESS = 'success';
var UI_MEDIA = exports.UI_MEDIA = 'media';
var UI_PAGES = exports.UI_PAGES = 'pages';

var _Drawer$getCurrentMed = _Drawers2.default.getCurrentMedia(),
    mobile = _Drawer$getCurrentMed.mobile,
    tablet = _Drawer$getCurrentMed.tablet,
    desktop = _Drawer$getCurrentMed.desktop;

var defaultMedia = 'mobile';
if (desktop) {
  defaultMedia = 'desktop';
} else if (tablet) {
  defaultMedia = 'tablet';
}

var UI_INITIAL_STATE = exports.UI_INITIAL_STATE = (_UI_INITIAL_STATE = {
  toasts: [],
  loading: false,
  drawerVisible: false,
  secondToolbarVisible: false
}, _defineProperty(_UI_INITIAL_STATE, UI_MEDIA, {
  mobile: mobile,
  tablet: tablet,
  desktop: desktop,
  defaultMedia: defaultMedia
}), _defineProperty(_UI_INITIAL_STATE, UI_PAGES, {}), _defineProperty(_UI_INITIAL_STATE, 'dialogs', {}), _UI_INITIAL_STATE);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(18);

Object.keys(_actions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _actions[key];
    }
  });
});

var _actions2 = __webpack_require__(11);

Object.keys(_actions2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _actions2[key];
    }
  });
});

var _actions3 = __webpack_require__(21);

Object.keys(_actions3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _actions3[key];
    }
  });
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_FORM_DATA = exports.SET_FORM_DATA = 'SET_FORM_DATA';
var RESET_FORM_DATA = exports.RESET_FORM_DATA = 'RESET_FORM_DATA';

var setFormData = exports.setFormData = function setFormData(formName, data) {
  return { type: SET_FORM_DATA, payload: { data: data, formName: formName } };
};
var resetFormData = exports.resetFormData = function resetFormData(formName) {
  var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return { type: RESET_FORM_DATA, payload: { formName: formName, initial: initial } };
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var AUTH = exports.AUTH = 'auth';

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectCurrentUserRole = exports.selectCurrentUser = exports.selectUserByUserName = exports.selectUsers = exports.selectStudent = exports.selectTeacherUser = undefined;

var _const = __webpack_require__(12);

var selectTeacherUser = exports.selectTeacherUser = function selectTeacherUser() {
  return {
    username: 'profichain4',
    pass: 'P5KYjy9G5Sj9ZiaEoA2waeLgqsNt6gHVcv2DkRk7Nkk54ptP1TgT',
    role: 'teacher'
  };
};

var selectStudent = exports.selectStudent = function selectStudent() {
  return {
    username: 'profichain2',
    pass: 'P5K22HBBg2y2UcJyvb6CSHwHXsPW22QyaoFweAp5K78as3DjW2eZ',
    role: 'student'
  };
};

var selectUsers = exports.selectUsers = function selectUsers() {
  return [selectTeacherUser(), selectStudent()];
};

var selectUserByUserName = exports.selectUserByUserName = function selectUserByUserName(state, username) {
  return selectUsers().find(function (u) {
    return u.username === username;
  });
};

var selectCurrentUser = exports.selectCurrentUser = function selectCurrentUser(state) {
  return state[_const.AUTH].currentUser;
};

var selectCurrentUserRole = exports.selectCurrentUserRole = function selectCurrentUserRole(state) {
  return (state[_const.AUTH].currentUser || {}).role;
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-md/lib/Cards/Card");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _golosJs = __webpack_require__(82);

var _golosJs2 = _interopRequireDefault(_golosJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_golosJs2.default.config.set('chain_id', '5876894a41e6361bde2e73278f07340f2eb8b41c2facd29099de9deef6cdb679');
_golosJs2.default.config.set('websocket', 'wss://ws.testnet.golos.io');

exports.default = _golosJs2.default;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux-saga-thunk");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideDialog = exports.showDialog = exports.finishLoading = exports.beginLoading = exports.toggleDrawer = exports.removeToast = exports.addSuccessToast = exports.addServerErrorToast = exports.addErrorToast = exports.addInfoToast = exports.HIDE_DIALOG = exports.SHOW_DIALOG = exports.SET_SECOND_TOOLBAR_VISIBLE = exports.SET_PAGE_UI_PROP = exports.INIT_PAGES_UI = exports.TOGGLE_DRAWER = exports.FINISH_LOADING = exports.BEGIN_LOADING = exports.REMOVE_TOAST = exports.ADD_TOAST = undefined;

var _const = __webpack_require__(8);

var ADD_TOAST = exports.ADD_TOAST = 'ADD_TOAST';
var REMOVE_TOAST = exports.REMOVE_TOAST = 'REMOVE_TOAST';
var BEGIN_LOADING = exports.BEGIN_LOADING = 'BEGIN_LOADING';
var FINISH_LOADING = exports.FINISH_LOADING = 'FINISH_LOADING';
var TOGGLE_DRAWER = exports.TOGGLE_DRAWER = 'TOGGLE_DRAWER';
var INIT_PAGES_UI = exports.INIT_PAGES_UI = 'INIT_PAGES_UI';
var SET_PAGE_UI_PROP = exports.SET_PAGE_UI_PROP = 'SET_PAGE_UI_PROP';
var SET_SECOND_TOOLBAR_VISIBLE = exports.SET_SECOND_TOOLBAR_VISIBLE = 'SET_SECOND_TOOLBAR_VISIBLE';
var SHOW_DIALOG = exports.SHOW_DIALOG = 'SHOW_DIALOG';
var HIDE_DIALOG = exports.HIDE_DIALOG = 'HIDE_DIALOG';

var addInfoToast = exports.addInfoToast = function addInfoToast(text) {
  return { type: ADD_TOAST, payload: { text: text, type: _const.INFO } };
};
var addErrorToast = exports.addErrorToast = function addErrorToast(text) {
  return { type: ADD_TOAST, payload: { text: text, type: _const.ERROR } };
};
var addServerErrorToast = exports.addServerErrorToast = function addServerErrorToast() {
  return addErrorToast('Ошибка сервера. Попробуйте позже.');
};
var addSuccessToast = exports.addSuccessToast = function addSuccessToast(text) {
  return { type: ADD_TOAST, payload: { text: text, type: _const.SUCCESS } };
};
var removeToast = exports.removeToast = function removeToast() {
  return { type: REMOVE_TOAST };
};
var toggleDrawer = exports.toggleDrawer = function toggleDrawer() {
  return { type: TOGGLE_DRAWER };
};

var beginLoading = exports.beginLoading = function beginLoading() {
  return { type: BEGIN_LOADING };
};
var finishLoading = exports.finishLoading = function finishLoading() {
  return { type: FINISH_LOADING };
};

var showDialog = exports.showDialog = function showDialog(name) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return { type: SHOW_DIALOG, payload: { name: name, data: data } };
};
var hideDialog = exports.hideDialog = function hideDialog(name) {
  return { type: HIDE_DIALOG, payload: { name: name } };
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getFormState = exports.getFormState = function getFormState(id, data) {
  return {
    id: id,
    data: data
  };
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FORMS = exports.FORMS = 'forms';

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_CURRENT_USER = exports.SET_CURRENT_USER = 'SET_CURRENT_USER';

var setCurrentUser = exports.setCurrentUser = function setCurrentUser(user) {
  return { type: SET_CURRENT_USER, payload: user };
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectFormState = exports.INITIAL_FORM_DATA = undefined;

var _isPlainObject = __webpack_require__(53);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _const = __webpack_require__(20);

var c = _interopRequireWildcard(_const);

var _utils = __webpack_require__(19);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_FORM_DATA = exports.INITIAL_FORM_DATA = {};

var selectFormsState = function selectFormsState(state) {
  return state[c.FORMS] || {};
};

var selectFormState = exports.selectFormState = function selectFormState(state, formName) {
  var formState = selectFormsState(state)[formName] || null;
  //console.log(`selectFormState ${formName}: `, formState)
  if (formState === null && INITIAL_FORM_DATA[formName] !== undefined) {
    //console.log(`get initial: `, INITIAL_FORM_DATA[formName](state))
    return INITIAL_FORM_DATA[formName](state);
  }
  return formState || (0, _utils.getFormState)(0, {});
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-md/lib/Cards/CardTitle");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-md/lib/Cards/CardText");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorPage = function (_Component) {
  _inherits(ErrorPage, _Component);

  function ErrorPage() {
    _classCallCheck(this, ErrorPage);

    return _possibleConstructorReturn(this, (ErrorPage.__proto__ || Object.getPrototypeOf(ErrorPage)).apply(this, arguments));
  }

  _createClass(ErrorPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var staticContext = this.props.staticContext;

      if (staticContext) {
        staticContext.status = 500;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _components.MinimalTemplate,
        {
          title: 'Error 500'
        },
        _react2.default.createElement(
          'h1',
          null,
          '500 '
        ),
        _react2.default.createElement(
          'h2',
          null,
          'Server Error'
        )
      );
    }
  }]);

  return ErrorPage;
}(_react.Component);

exports.default = ErrorPage;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(29);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(30);

var _serverApp = __webpack_require__(31);

var _serverApp2 = _interopRequireDefault(_serverApp);

var _config = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_serverApp2.default.listen(_config.port, function (error) {
  var boldBlue = function boldBlue(text) {
    return '\x1B[1m\x1B[34m' + text + '\x1B[39m\x1B[22m';
  };
  if (error) {
    console.error(error);
  } else {
    console.info('Server is running at ' + boldBlue('http://' + _config.host + ':' + _config.port + _config.basename + '/' + (_config.isDev ? ' in dev mode' : ' in production mode')));
  }
}); /* eslint-disable no-console */

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = __webpack_require__(32);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(33);

var _express2 = _interopRequireDefault(_express);

var _cookieParser = __webpack_require__(34);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _configure = __webpack_require__(35);

var _configure2 = _interopRequireDefault(_configure);

var _utils = __webpack_require__(54);

var _render = __webpack_require__(56);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
app.use((0, _cookieParser2.default)());

app.get('/favicon.ico', function (req, res) {
  // FIXME
  res.status(204);
});

app.get('/robots.txt', function (req, res) {
  // FIXME
  res.status(204);
});

app.use(function (req, res, next) {
  (0, _utils.getInitialStoreData)(req, res).then(function (initialData) {
    //console.log('initialData: ', initialData)
    var context = {};
    var store = (0, _configure2.default)(initialData, req);
    (0, _render.renderApp)({ store: store, context: context, location: req.url }).then(function (_ref) {
      var serverState = _ref.state,
          content = _ref.html;

      if (context.status) {
        res.status(context.status);
      }
      if (context.url) {
        res.redirect(context.url);
      } else {
        var initialState = store.getState();
        res.send((0, _render.renderHtml)({ serverState: serverState, initialState: initialState, content: content, staticPage: false }));
      }
    }).catch(next);
  }).catch(next);
});

app.use(function (err, req, res, next) {
  //console.log('express 500 route', err, req.url)
  res.status(500).send((0, _render.renderHtml)({ content: (0, _render.render500)(), staticPage: true }));
  next(err);
});

exports.default = app;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(16);

var _reduxSagaThunk = __webpack_require__(17);

var _reduxSaga = __webpack_require__(36);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _config = __webpack_require__(2);

var _history = __webpack_require__(37);

var _history2 = _interopRequireDefault(_history);

var _cookies = __webpack_require__(40);

var _cookies2 = _interopRequireDefault(_cookies);

var _api = __webpack_require__(42);

var _api2 = _interopRequireDefault(_api);

var _reducer = __webpack_require__(45);

var _reducer2 = _interopRequireDefault(_reducer);

var _sagas = __webpack_require__(51);

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var devtools = _config.isDev && _config.isBrowser && window.devToolsExtension ? window.devToolsExtension : function () {
  return function (fn) {
    return fn;
  };
};

var configureStore = function configureStore(initialState) {
  var req = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var services = {
    history: _history2.default
  };
  if (req !== null) {
    services.api = req.apiServerClient;
    //console.log('Got server cookies: ', req.cookies)
    services.cookies = new _cookies2.default(req.cookies);
  } else {
    services.cookies = new _cookies2.default();
    services.api = new _api2.default();
  }

  var sagaMiddleware = (0, _reduxSaga2.default)();
  var enhancers = [(0, _redux.applyMiddleware)(_reduxSagaThunk.middleware, sagaMiddleware)];
  if (_config.isBrowser) {
    enhancers.push(devtools());
  }
  var store = (0, _redux.createStore)(_reducer2.default, initialState, _redux.compose.apply(undefined, enhancers));
  var sagaTask = sagaMiddleware.run(_sagas2.default, services);

  if (false) {
    module.hot.accept('./reducer', function () {
      var nextReducer = require('./reducer').default;
      store.replaceReducer(nextReducer);
    });
    module.hot.accept('./sagas', function () {
      var nextSagas = require('./sagas').default;
      sagaTask.cancel();
      sagaTask.done.then(function () {
        sagaTask = sagaMiddleware.run(nextSagas, services);
      });
    });
  }

  return store;
};

exports.default = configureStore;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(2);

var createHistory = void 0;
if (_config.isBrowser) {
  createHistory = __webpack_require__(38).default;
} else {
  createHistory = __webpack_require__(39).default;
}

var history = createHistory();

exports.default = history;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("history/createMemoryHistory");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalCookie = __webpack_require__(41);

var _universalCookie2 = _interopRequireDefault(_universalCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _universalCookie2.default;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _fetch = __webpack_require__(43);

var _fetch2 = _interopRequireDefault(_fetch);

var _config = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Api = (_temp = _class = function () {
  function Api() {
    var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Api);

    if (_config.api.startsWith('http')) {
      this.apiEndpoint = _config.api;
    } else {
      this.apiEndpoint = location.protocol + '//' + location.host + _config.api;
    }

    if (headers !== null) {
      this.constructor.headers = Object.assign({}, this.constructor.headers, headers);
    }
  }

  _createClass(Api, [{
    key: 'makeUrl',
    value: function makeUrl(endpoint) {
      var url = endpoint;
      if (!url.startsWith('http')) url = this.apiEndpoint + '/' + url;
      //if (!url.endsWith('/')) url = `${url}/`
      return url;
    }
  }, {
    key: 'prepareBody',
    value: function prepareBody(body) {
      if (!_config.isServer && body instanceof FormData) {
        return body;
      } else if (body) {
        return JSON.stringify(body);
      }
      return undefined;
    }
  }, {
    key: 'prepareHeaders',
    value: function prepareHeaders(customHeaders) {
      var headers = Object.assign({}, this.constructor.headers, customHeaders || {});
      //console.log('prepareHeaders: ', headers, this.constructor.headers)
      Object.keys(headers).filter(function (k) {
        return headers[k] === undefined;
      }).forEach(function (k) {
        delete headers[k];
      });
      return headers;
    }
  }, {
    key: 'request',
    value: function request(endpoint, method, body) {
      var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;


      var requestOptions = {
        method: method,
        body: this.prepareBody(body),
        headers: this.prepareHeaders(headers)
      };

      var url = this.makeUrl(endpoint);
      //console.log(`[REQUEST] ${url}`, requestOptions)

      return new Promise(function (resolve, reject) {
        var rejectError = function rejectError(_ref) {
          var _ref$errorData = _ref.errorData,
              errorData = _ref$errorData === undefined ? null : _ref$errorData,
              _ref$responseStatus = _ref.responseStatus,
              responseStatus = _ref$responseStatus === undefined ? null : _ref$responseStatus,
              _ref$message = _ref.message,
              message = _ref$message === undefined ? null : _ref$message;

          //const error = new Error(message)
          //error.errorData = errorData
          //error.responseStatus = responseStatus
          reject({ errorData: errorData, responseStatus: responseStatus, message: message });
        };
        (0, _fetch2.default)(url, requestOptions).then(function (response) {
          if (response.status === 204) {
            resolve(null);
          } else {
            var responseMethod = response.headers.get('Content-Type') === 'text/plain' ? 'text' : 'json';

            response[responseMethod]().then(function (respData) {
              //console.log('response json norm', respData)
              if (response.ok) {
                resolve(respData);
              } else {
                rejectError({ errorData: respData, responseStatus: response.status });
              }
            }).catch(function (e) {
              //console.log('response json error', e)
              rejectError({ message: e, responseStatus: response.status });
            });
          }
        }).catch(function (e) {
          //console.error(`[REQUEST ERROR] ${e}`, e)
          rejectError({ message: e });
        });
      });
    }
  }, {
    key: 'read',
    value: function read(endpoint) {
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return this.request(endpoint, 'GET', null, headers);
    }
  }, {
    key: 'delete',
    value: function _delete(endpoint) {
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return this.request(endpoint, 'DELETE', null, headers);
    }
  }, {
    key: 'create',
    value: function create(endpoint, data) {
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      //console.log('create: ', endpoint, data, headers)
      return this.request(endpoint, 'POST', data, headers);
    }
  }, {
    key: 'update',
    value: function update(endpoint, data) {
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      return this.request(endpoint, 'PUT', data, headers);
    }
  }, {
    key: 'partialUpdate',
    value: function partialUpdate(endpoint, data) {
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      return this.request(endpoint, 'PATCH', data, headers);
    }
  }]);

  return Api;
}(), _class.headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Accept-Language': 'ru-ru'
}, _temp);
exports.default = Api;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isomorphicFetch = __webpack_require__(44);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _isomorphicFetch2.default;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers;

var _redux = __webpack_require__(16);

var _reduxSagaThunk = __webpack_require__(17);

var _reducer = __webpack_require__(46);

var _reducer2 = _interopRequireDefault(_reducer);

var _const = __webpack_require__(8);

var _reducer3 = __webpack_require__(48);

var _reducer4 = _interopRequireDefault(_reducer3);

var _const2 = __webpack_require__(20);

var _const3 = __webpack_require__(12);

var _reducers2 = __webpack_require__(50);

var _reducers3 = _interopRequireDefault(_reducers2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducers = (_reducers = {}, _defineProperty(_reducers, _const.UI, _reducer2.default), _defineProperty(_reducers, _const2.FORMS, _reducer4.default), _defineProperty(_reducers, _const3.AUTH, _reducers3.default), _defineProperty(_reducers, 'thunk', _reduxSagaThunk.reducer), _reducers);

var reducer = (0, _redux.combineReducers)(reducers);

exports.default = reducer;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = __webpack_require__(18);

var actions = _interopRequireWildcard(_actions);

var _const = __webpack_require__(8);

var c = _interopRequireWildcard(_const);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var uiReducer = function uiReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : c.UI_INITIAL_STATE;
  var action = arguments[1];

  var toasts = void 0;
  switch (action.type) {
    case actions.ADD_TOAST:
      toasts = [].concat(_toConsumableArray(state.toasts || []), [_extends({}, action.payload)]);
      return _extends({}, state, {
        toasts: toasts
      });
    case actions.REMOVE_TOAST:
      toasts = [].concat(_toConsumableArray(state.toasts || []));
      toasts.shift();
      return _extends({}, state, {
        toasts: toasts
      });
    case actions.BEGIN_LOADING:
      return _extends({}, state, {
        loading: true
      });
    case actions.FINISH_LOADING:
      return _extends({}, state, {
        loading: false
      });
    case actions.SHOW_DIALOG:
      return _extends({}, state, {
        dialogs: _extends({}, state.dialogs, _defineProperty({}, action.payload.name, {
          visible: true,
          data: action.payload.data
        }))
      });
    case actions.HIDE_DIALOG:
      return _extends({}, state, {
        dialogs: _extends({}, state.dialogs, _defineProperty({}, action.payload.name, {
          visible: false
        }))
      });
    default:
      return state;
  }
};

exports.default = uiReducer;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("react-md/lib/Drawers");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(49);

var _actions = __webpack_require__(11);

var actions = _interopRequireWildcard(_actions);

var _utils2 = __webpack_require__(19);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var formsReducer = function formsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case actions.SET_FORM_DATA:
      {
        //console.log(`${actions.SET_FORM_DATA}: `, action, getUniqueId())
        var prevData = (state[action.payload.formName] || {}).data || {};
        var curData = action.payload.data || {};
        var isChanged = !(0, _utils.deepEqual)(curData, prevData);
        //console.log('prev data = ', prevData)
        //console.log('cur data = ', curData)
        //console.log('changed = ', isChanged)

        if (isChanged) {
          var prevId = (state[action.payload.formName] || {}).id || 0;
          return _extends({}, state, _defineProperty({}, action.payload.formName, (0, _utils2.getFormState)(prevId + 1, curData)));
        }
        return state;
      }
    //case actions.RESET_FORM_DATA: {
    //  return {
    //    ...state,
    //    [action.payload.formName]: getFormState(
    //      getUniqueId(),
    //      {},
    //    ),
    //  }
    //}
    default:
      return state;
  }
};

exports.default = formsReducer;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var deepEqual = exports.deepEqual = function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case actions.SET_CURRENT_USER:
      {
        return _extends({}, state, {
          currentUser: _extends({}, action.payload)
        });
      }
    default:
      return state;
  }
};

exports.default = authReducer;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _callee;

var _effects = __webpack_require__(22);

var _sagas = __webpack_require__(52);

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(_callee);

function _callee() {
  var services = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.fork)(_sagas2.default, services);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _callee;

var _effects = __webpack_require__(22);

var _actions = __webpack_require__(11);

var a = _interopRequireWildcard(_actions);

var _selectors = __webpack_require__(23);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(resetForm),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(watchFormReset),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(_callee);

function resetForm(action) {
  var data;
  return regeneratorRuntime.wrap(function resetForm$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(action.payload.initial && _selectors.INITIAL_FORM_DATA[action.payload.formName])) {
            _context.next = 8;
            break;
          }

          _context.next = 3;
          return (0, _effects.select)(_selectors.INITIAL_FORM_DATA[action.payload.formName]);

        case 3:
          data = _context.sent;
          _context.next = 6;
          return (0, _effects.put)(a.setFormData(action.payload.formName, data.data));

        case 6:
          _context.next = 10;
          break;

        case 8:
          _context.next = 10;
          return (0, _effects.put)(a.setFormData(action.payload.formName, {}));

        case 10:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function watchFormReset() {
  return regeneratorRuntime.wrap(function watchFormReset$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeEvery)(a.RESET_FORM_DATA, resetForm);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.fork)(watchFormReset);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("lodash/isPlainObject");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInitialUIData = getInitialUIData;
exports.getInitialStoreData = getInitialStoreData;

var _es6Promise = __webpack_require__(55);

var _const = __webpack_require__(8);

var _const2 = __webpack_require__(12);

var _selectors = __webpack_require__(13);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getInitialUIData(req) {
  var userAgent = req.header('user-agent');
  var mobile = !!userAgent.match(/mobile/i);
  var tablet = !!userAgent.match(/ipad/i);
  var desktop = !mobile && !tablet;
  var defaultMedia = 'desktop';
  if (tablet) {
    defaultMedia = 'tablet';
  } else if (mobile) {
    defaultMedia = 'mobile';
  }
  return Object.assign({}, _const.UI_INITIAL_STATE, _defineProperty({}, _const.UI_MEDIA, { mobile: mobile, tablet: tablet, desktop: desktop, defaultMedia: defaultMedia }));
}

function getInitialStoreData(req, res) {
  return new _es6Promise.Promise(function (resolve) {
    var _resolve;

    resolve((_resolve = {}, _defineProperty(_resolve, _const.UI, getInitialUIData(req)), _defineProperty(_resolve, _const2.AUTH, {
      currentUser: (0, _selectors.selectTeacherUser)()
    }), _resolve));
  });
}

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderHtml = exports.render500 = exports.renderApp = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _serializeJavascript = __webpack_require__(57);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _server = __webpack_require__(58);

var _reactRedux = __webpack_require__(4);

var _reactRouter = __webpack_require__(24);

var _reactRouterServer = __webpack_require__(59);

var _App = __webpack_require__(60);

var _App2 = _interopRequireDefault(_App);

var _Html = __webpack_require__(111);

var _Html2 = _interopRequireDefault(_Html);

var _ErrorPage = __webpack_require__(27);

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

var _config = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderApp = exports.renderApp = function renderApp(_ref) {
  var store = _ref.store,
      context = _ref.context,
      location = _ref.location;

  var app = _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouter.StaticRouter,
      { basename: _config.basename, context: context, location: location },
      _react2.default.createElement(_App2.default, null)
    )
  );

  return (0, _reactRouterServer.renderToString)(app);
};

var render500 = exports.render500 = function render500() {
  return (0, _server.renderToStaticMarkup)(_react2.default.createElement(_ErrorPage2.default, null));
};

var renderHtml = exports.renderHtml = function renderHtml(_ref2) {
  var serverState = _ref2.serverState,
      initialState = _ref2.initialState,
      content = _ref2.content,
      staticPage = _ref2.staticPage;

  var assets = { css: [], js: [] };
  if (!staticPage) {
    assets = global.assets;
  }
  var state = '\n    window.__SERVER_STATE__ = ' + (0, _serializeJavascript2.default)(serverState) + ';\n    window.__INITIAL_STATE__ = ' + (0, _serializeJavascript2.default)(initialState) + ';\n  ';
  var html = (0, _server.renderToStaticMarkup)(_react2.default.createElement(_Html2.default, { state: state, content: content, assets: assets }));
  return '<!doctype html>\n' + html;
};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("react-router-server");

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _reactHelmet = __webpack_require__(10);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _components = __webpack_require__(3);

var _config = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_config.isBrowser) {
  __webpack_require__(110);
}

var App = function App() {
  return [_react2.default.createElement(
    _reactHelmet2.default,
    { titleTemplate: '%s', key: 'Helmet' },
    _react2.default.createElement(
      'title',
      null,
      '\u0413\u043B\u0430\u0432\u043D\u0430\u044F'
    ),
    _react2.default.createElement('meta', { name: 'description', content: 'EduChain' }),
    _react2.default.createElement('link', { rel: 'manifest', href: '/manifest.json' }),
    _react2.default.createElement('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }),
    _react2.default.createElement('meta', { charset: 'utf-8' }),
    _react2.default.createElement('meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }),
    _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
    _react2.default.createElement('body', { className: 'app' })
  ), _react2.default.createElement(
    _reactRouterDom.Switch,
    { key: 'Switch' },
    _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _components.CoursesListPage, strict: true }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/courses/add', exact: true, component: _components.CoursesAddPage, strict: true }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/course/', component: _components.CoursesItemPage })
  )];
};

exports.default = App;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OneSelectWidget = exports.TextWidget = exports.FieldTemplate = exports.CheckboxWidget = undefined;

var _CheckboxWidget2 = __webpack_require__(62);

var _CheckboxWidget3 = _interopRequireDefault(_CheckboxWidget2);

var _FieldTemplate2 = __webpack_require__(65);

var _FieldTemplate3 = _interopRequireDefault(_FieldTemplate2);

var _TextWidget2 = __webpack_require__(66);

var _TextWidget3 = _interopRequireDefault(_TextWidget2);

var _OneSelectWidget2 = __webpack_require__(69);

var _OneSelectWidget3 = _interopRequireDefault(_OneSelectWidget2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CheckboxWidget = _CheckboxWidget3.default;
exports.FieldTemplate = _FieldTemplate3.default;
exports.TextWidget = _TextWidget3.default;
exports.OneSelectWidget = _OneSelectWidget3.default;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SelectionControl = __webpack_require__(63);

var _SelectionControl2 = _interopRequireDefault(_SelectionControl);

var _components = __webpack_require__(3);

var _config = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_config.isBrowser) {
  __webpack_require__(64);
}

var CheckboxWidget = function CheckboxWidget(props) {
  //console.log('CheckboxWidget: ', props)
  var options = props.options || {};
  var type = options.type || 'checkbox';

  return _react2.default.createElement(
    _components.InputContainer,
    {
      helpText: options.description
    },
    _react2.default.createElement(_SelectionControl2.default, {
      id: props.id,
      name: props.id,
      className: 'checkbox-widget',
      label: props.schema.title,
      checked: props.value || false,
      disabled: props.disabled,
      required: props.required,
      onChange: props.onChange,
      onFocus: props.onFocus,
      onBlur: props.onBlur,
      type: type
    })
  );
};

exports.default = CheckboxWidget;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("react-md/lib/SelectionControls/SelectionControl");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module './assets.json'\n    at Function.Module._resolveFilename (module.js:536:15)\n    at Function.Module._load (module.js:466:25)\n    at Module.require (module.js:579:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/css-loader/index.js??ref--1-2!/home/ivan/Projects/hackaton/client/node_modules/postcss-loader/lib/index.js??postcss!/home/ivan/Projects/hackaton/client/node_modules/sass-loader/lib/loader.js!/home/ivan/Projects/hackaton/client/src/components/fields/CheckboxWidget/styles.scss:1:79)\n    at Module._compile (module.js:635:30)\n    at Object.exec (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/NormalModule.js:129:12)\n    at /home/ivan/Projects/hackaton/client/node_modules/extract-text-webpack-plugin/dist/loader.js:131:26\n    at compile (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:300:11)\n    at applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:510:14)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at Compiler.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/extract-text-webpack-plugin/dist/loader.js:112:7)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:204:14)\n    at Compiler.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/CachePlugin.js:78:5)\n    at Compiler.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at compilation.seal.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:507:11)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:195:46)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:680:19)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at LastCallWebpackPlugin.process (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:126:12)\n    at Compilation.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:197:12)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:671:11)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at Compilation.compilation.plugin (/home/ivan/Projects/hackaton/client/node_modules/@webpack-blocks/webpack2/node_modules/webpack/lib/BannerPlugin.js:67:5)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:204:14)\n    at LastCallWebpackPlugin.process (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:126:12)\n    at Compilation.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:194:12)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:666:10)");

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldTemplate = function FieldTemplate(props) {
  var id = props.id,
      classNames = props.classNames,
      label = props.label,
      help = props.help,
      required = props.required,
      description = props.description,
      errors = props.errors,
      children = props.children;
  //console.log(props)

  return _react2.default.createElement(
    'div',
    { className: 'form-field ' + classNames },
    children,
    errors,
    help
  );
};

exports.default = FieldTemplate;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextField = __webpack_require__(67);

var _TextField2 = _interopRequireDefault(_TextField);

var _isInteger = __webpack_require__(68);

var _isInteger2 = _interopRequireDefault(_isInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextWidget = function TextWidget(props) {
  var type = props.options.type || props.schema.type === 'number' ? 'number' : 'text';

  return _react2.default.createElement(_TextField2.default, {
    id: props.id,
    name: props.id,
    label: props.schema.title,
    lineDirection: 'left',
    fullWidth: true,
    value: props.value,
    disabled: props.disabled,
    required: props.required,
    onChange: props.onChange,
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    maxLength: props.schema.maxLength,
    placeholder: props.placeholder,
    error: false,
    className: props.className,
    ref: props.inputRef,
    helpText: props.options.description,
    min: props.schema.minimum,
    max: props.schema.maximum,
    step: props.schema.multipleOf,
    rows: props.options.rows,
    maxRows: (0, _isInteger2.default)(props.options.rows) ? props.options.maxRows || 10 : undefined,
    type: type
  });
};

TextWidget.defaultProps = {
  className: '',
  inputRef: null,
  onFocus: null,
  onBlur: null,
  schema: {},
  uiSchema: {},
  options: {},
  value: '',
  required: false,
  disabled: false,
  placeholder: undefined
};

exports.default = TextWidget;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("react-md/lib/TextFields/TextField");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("lodash/isInteger");

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SelectFields = __webpack_require__(70);

var _SelectFields2 = _interopRequireDefault(_SelectFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OneSelectWidget = function OneSelectWidget(props) {
  //console.log(props.id, props.options.enumOptions)
  return _react2.default.createElement(_SelectFields2.default, {
    id: props.id,
    name: props.id,
    label: props.schema.title,
    className: props.className,
    value: props.value,
    disabled: props.disabled,
    required: props.required,
    onChange: props.onChange,
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    placeholder: props.placeholder,
    itemLabel: 'label',
    itemValue: 'value',
    menuItems: props.options.enumOptions,
    error: false,
    fullWidth: props.options._fullWidth === undefined ? true : props.options._fullWidth,
    position: props.options._position === undefined ? _SelectFields2.default.Positions.TOP_LEFT : props.options._position
  });
};

OneSelectWidget.defaultProps = {
  className: '',
  schema: {},
  placeholder: undefined,
  disabled: false,
  required: false,
  value: undefined,
  onFocus: undefined,
  onBlur: undefined
};

exports.default = OneSelectWidget;

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("react-md/lib/SelectFields");

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnswerForm = exports.AddCourseForm = exports.BaseForm = undefined;

var _BaseForm2 = __webpack_require__(72);

var _BaseForm3 = _interopRequireDefault(_BaseForm2);

var _AddCourseForm2 = __webpack_require__(75);

var _AddCourseForm3 = _interopRequireDefault(_AddCourseForm2);

var _AnswerForm2 = __webpack_require__(76);

var _AnswerForm3 = _interopRequireDefault(_AnswerForm2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BaseForm = _BaseForm3.default;
exports.AddCourseForm = _AddCourseForm3.default;
exports.AnswerForm = _AnswerForm3.default;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJsonschemaForm = __webpack_require__(73);

var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

var _reactRedux = __webpack_require__(4);

var _components = __webpack_require__(3);

var _actions = __webpack_require__(9);

var _selectors = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fields = {};

var widgets = {
  SelectWidget: _components.OneSelectWidget,
  TextWidget: _components.TextWidget,
  TextareaWidget: function TextareaWidget(props) {
    return _react2.default.createElement(_components.TextWidget, _extends({}, props, {
      options: _extends({}, props.options, {
        rows: 3,
        maxRows: 10
      })
    }));
  },
  PasswordWidget: function PasswordWidget(props) {
    return _react2.default.createElement(_components.TextWidget, _extends({}, props, {
      options: _extends({}, props.options, {
        type: 'password'
      })
    }));
  },
  EmailWidget: function EmailWidget(props) {
    return _react2.default.createElement(_components.TextWidget, props);
  },

  CheckboxWidget: _components.CheckboxWidget

};

var BaseForm = (_dec = (0, _reactRedux.connect)(function (state, props) {
  //console.log('BaseForm connect', props)
  if (!props.name) {
    throw new Error('BaseForm requires name', props);
  }
  return {
    formState: (0, _selectors.selectFormState)(state, props.name)
  };
}, function (dispatch) {
  return {
    setFormData: function setFormData(formName, data) {
      return dispatch((0, _actions.setFormData)(formName, data));
    },
    addErrorToast: function addErrorToast(text) {
      return dispatch((0, _actions.addErrorToast)(text));
    }
  };
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(BaseForm, _Component);

  function BaseForm(props) {
    _classCallCheck(this, BaseForm);

    var _this = _possibleConstructorReturn(this, (BaseForm.__proto__ || Object.getPrototypeOf(BaseForm)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    _this.onError = _this.onError.bind(_this);
    return _this;
  }

  _createClass(BaseForm, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var isFormStateChanged = this.props.formState.id !== nextProps.formState.id;
      var isSchemaChanged = this.props.schema !== nextProps.schema || this.props.uiSchema !== nextProps.uiSchema;
      var shouldUpdate = isFormStateChanged || isSchemaChanged;

      //console.log('BaseForm shouldUpdate: ', shouldUpdate)

      return shouldUpdate;
    }
  }, {
    key: 'onChange',
    value: function onChange(data) {
      //console.log('BaseForm Change: ', this.props.formState)
      this.props.setFormData(this.props.name, data.formData);
    }
  }, {
    key: 'onError',
    value: function onError(data) {
      console.log(this.props.name + ' errors: ', data);
      if (this.props.showErrorToast) {
        this.props.addErrorToast('Заполните правильно форму для продолжения');
      }
      if (this.props.onError !== null) {
        this.props.onError(data);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      //console.log('BaseForm render', this.props.formState)

      return _react2.default.createElement(
        _reactJsonschemaForm2.default,
        {
          className: this.props.className
          //liveValidate
          , fields: fields,
          FieldTemplate: _components.FieldTemplate,
          onError: this.onError
          //ArrayFieldTemplate={ArrayFieldTemplate}
          , widgets: widgets,
          showErrorList: false
          //transformErrors={transformErrors}
          , onChange: this.props.onChange || this.onChange,
          schema: this.props.schema,
          validate: this.props.validate,
          formData: this.props.formState.data,
          uiSchema: this.props.uiSchema,
          onSubmit: this.props.onSubmit
        },
        this.props.children !== null && this.props.children,
        this.props.submitRef !== null ? _react2.default.createElement('input', {
          type: 'submit',
          style: { display: 'none' },
          ref: this.props.submitRef
        }) : null
      );
    }
  }]);

  return BaseForm;
}(_react.Component), _class2.defaultProps = {
  onChange: null,
  onSubmit: null,
  onError: null,
  validate: null,
  showErrorToast: false,
  uiSchema: null,
  children: null,
  submitRef: null,
  className: ''
}, _temp)) || _class);
exports.default = BaseForm;

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("react-jsonschema-form");

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectDialogData = exports.selectDialogVisible = exports.selectLoading = exports.selectToasts = exports.selectIsMobileMedia = exports.selectMedia = undefined;

var _const = __webpack_require__(8);

var c = _interopRequireWildcard(_const);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var selectUI = function selectUI(state) {
  return state[c.UI] || c.UI_INITIAL_STATE;
};

var selectMedia = exports.selectMedia = function selectMedia(state) {
  return selectUI(state)[c.UI_MEDIA] || {};
};

var selectIsMobileMedia = exports.selectIsMobileMedia = function selectIsMobileMedia(state) {
  return selectMedia(state).mobile === true;
};

var selectToasts = exports.selectToasts = function selectToasts(state) {
  return selectUI(state).toasts || [];
};

var selectLoading = exports.selectLoading = function selectLoading(state) {
  return selectUI(state).loading || false;
};

var selectDialogState = function selectDialogState(state, name) {
  return selectUI(state).dialogs[name] || {};
};

var selectDialogVisible = exports.selectDialogVisible = function selectDialogVisible(state, name) {
  return selectDialogState(state, name).visible || false;
};
var selectDialogData = exports.selectDialogData = function selectDialogData(state, name) {
  return selectDialogState(state, name).data || null;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(7);

var _Button2 = _interopRequireDefault(_Button);

var _reactRouterDom = __webpack_require__(5);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var schema = {
  type: 'object',
  required: ['title', 'desc'],
  properties: {
    title: { type: 'string', title: 'Title' },
    desc: { type: 'string', title: 'Description' }
  }
};

var uiSchema = {
  desc: {
    'ui:options': {
      rows: 10
    }
  }
};

var AddCourseFormName = 'AddCourseForm';

var AddCourseForm = (_temp = _class = function (_PureComponent) {
  _inherits(AddCourseForm, _PureComponent);

  function AddCourseForm() {
    _classCallCheck(this, AddCourseForm);

    return _possibleConstructorReturn(this, (AddCourseForm.__proto__ || Object.getPrototypeOf(AddCourseForm)).apply(this, arguments));
  }

  _createClass(AddCourseForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_components.BaseForm, {
        name: this.constructor.formName,
        className: 'form',
        onSubmit: this.props.onSubmit,
        schema: schema,
        uiSchema: uiSchema,
        children: this.props.children
      });
    }
  }]);

  return AddCourseForm;
}(_react.PureComponent), _class.defaultProps = {
  onSubmit: null
}, _class.formName = AddCourseFormName, _temp);
exports.default = AddCourseForm;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(7);

var _Button2 = _interopRequireDefault(_Button);

var _reactRouterDom = __webpack_require__(5);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var schema = {
  type: 'object',
  required: ['answer'],
  properties: {
    answer: { type: 'string', title: 'Answer' }
  }
};

var uiSchema = {
  answer: {
    'ui:options': {
      rows: 5
    }
  }
};

var AnswerFormName = 'AnswerForm';

var AnswerForm = (_temp = _class = function (_PureComponent) {
  _inherits(AnswerForm, _PureComponent);

  function AnswerForm() {
    _classCallCheck(this, AnswerForm);

    return _possibleConstructorReturn(this, (AnswerForm.__proto__ || Object.getPrototypeOf(AnswerForm)).apply(this, arguments));
  }

  _createClass(AnswerForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_components.BaseForm, {
        name: this.constructor.formName,
        className: 'form',
        onSubmit: this.props.onSubmit,
        schema: schema,
        uiSchema: uiSchema,
        children: this.props.children
      });
    }
  }]);

  return AnswerForm;
}(_react.PureComponent), _class.defaultProps = {
  onSubmit: null
}, _class.formName = AnswerFormName, _temp);
exports.default = AnswerForm;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorPage = exports.NotFound = undefined;

var _courses = __webpack_require__(78);

Object.keys(_courses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _courses[key];
    }
  });
});

var _NotFound2 = __webpack_require__(95);

var _NotFound3 = _interopRequireDefault(_NotFound2);

var _ErrorPage2 = __webpack_require__(27);

var _ErrorPage3 = _interopRequireDefault(_ErrorPage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.NotFound = _NotFound3.default;
exports.ErrorPage = _ErrorPage3.default;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoursesItemPage = exports.CoursesListPage = exports.CoursesAddPage = undefined;

var _add = __webpack_require__(79);

var _add2 = _interopRequireDefault(_add);

var _list = __webpack_require__(85);

var _list2 = _interopRequireDefault(_list);

var _item = __webpack_require__(92);

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CoursesAddPage = _add2.default;
exports.CoursesListPage = _list2.default;
exports.CoursesItemPage = _item2.default;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(7);

var _Button2 = _interopRequireDefault(_Button);

var _Card = __webpack_require__(14);

var _Card2 = _interopRequireDefault(_Card);

var _CardTitle = __webpack_require__(25);

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _CardText = __webpack_require__(26);

var _CardText2 = _interopRequireDefault(_CardText);

var _CardActions = __webpack_require__(80);

var _CardActions2 = _interopRequireDefault(_CardActions);

var _reactRedux = __webpack_require__(4);

var _slug = __webpack_require__(81);

var _slug2 = _interopRequireDefault(_slug);

var _golos = __webpack_require__(15);

var _golos2 = _interopRequireDefault(_golos);

var _config = __webpack_require__(2);

var _components = __webpack_require__(3);

var _selectors = __webpack_require__(6);

var _decorators = __webpack_require__(83);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (_config.isBrowser) {
  __webpack_require__(84);
}

var CoursesAddPage = (_dec = (0, _decorators.teacherRoleRequired)(), _dec2 = (0, _reactRedux.connect)(function (state) {
  return {
    user: (0, _selectors.selectCurrentUser)(state)
  };
}), _dec(_class = _dec2(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(CoursesAddPage, _PureComponent);

  function CoursesAddPage(props) {
    _classCallCheck(this, CoursesAddPage);

    var _this = _possibleConstructorReturn(this, (CoursesAddPage.__proto__ || Object.getPrototypeOf(CoursesAddPage)).call(this, props));

    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(CoursesAddPage, [{
    key: 'onSubmit',
    value: function onSubmit(data) {
      console.log(data);
      var postingWif = _golos2.default.auth.toWif(this.props.user.username, this.props.user.pass, 'posting');
      //golos.broadcast.comment(wif, parentAuthor, parentPermlink, author, permlink, title, body, jsonMetadata, function(err, result) {
      _golos2.default.broadcast.comment(postingWif, '', 'profichain', this.props.user.username, ((0, _slug2.default)(data.formData.title) + '-' + new Date().getTime()).toLocaleLowerCase(), data.formData.title, data.formData.desc, {}, function (err, result) {
        console.log('submit post: ', err, result);
        if (!err) {
          location.href = '/';
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _components.PageTemplate,
        {
          title: 'Create new course'
        },
        _react2.default.createElement(
          _Card2.default,
          null,
          _react2.default.createElement(_CardTitle2.default, {
            title: 'New course'
          }),
          _react2.default.createElement(
            _CardText2.default,
            null,
            _react2.default.createElement(
              _components.AddCourseForm,
              {
                onSubmit: this.onSubmit
              },
              _react2.default.createElement(
                _Button2.default,
                {
                  raised: true,
                  primary: true,
                  type: 'submit'
                },
                'Submit'
              )
            )
          ),
          _react2.default.createElement(_CardActions2.default, null)
        )
      );
    }
  }]);

  return CoursesAddPage;
}(_react.PureComponent), _class2.defaultProps = {}, _temp)) || _class) || _class);
exports.default = CoursesAddPage;

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("react-md/lib/Cards/CardActions");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("slug");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("golos-js");

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.teacherRoleRequired = teacherRoleRequired;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _reactRouter = __webpack_require__(24);

var _selectors = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function teacherRoleRequired() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { redirectUrl: '/' };


  return function (DecoratedComponent) {
    var wrapper = function wrapper(props) {
      console.log(props.userRole);
      if (props.userRole !== 'teacher') {
        return _react2.default.createElement(_reactRouter.Redirect, { to: opts.redirectUrl });
      }
      return _react2.default.createElement(DecoratedComponent, props);
    };

    return (0, _reactRedux.connect)(function (state) {
      return {
        userRole: (0, _selectors.selectCurrentUserRole)(state)
      };
    })(wrapper);
  };
}

/***/ }),
/* 84 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module './assets.json'\n    at Function.Module._resolveFilename (module.js:536:15)\n    at Function.Module._load (module.js:466:25)\n    at Module.require (module.js:579:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/css-loader/index.js??ref--1-2!/home/ivan/Projects/hackaton/client/node_modules/postcss-loader/lib/index.js??postcss!/home/ivan/Projects/hackaton/client/node_modules/sass-loader/lib/loader.js!/home/ivan/Projects/hackaton/client/src/components/pages/courses/add/styles.scss:1:79)\n    at Module._compile (module.js:635:30)\n    at Object.exec (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/NormalModule.js:129:12)\n    at /home/ivan/Projects/hackaton/client/node_modules/extract-text-webpack-plugin/dist/loader.js:131:26\n    at compile (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:300:11)\n    at applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:510:14)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at Compiler.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/extract-text-webpack-plugin/dist/loader.js:112:7)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:204:14)\n    at Compiler.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/CachePlugin.js:78:5)\n    at Compiler.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at compilation.seal.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:507:11)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:195:46)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:680:19)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at LastCallWebpackPlugin.process (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:126:12)\n    at Compilation.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:197:12)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:671:11)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at Compilation.compilation.plugin (/home/ivan/Projects/hackaton/client/node_modules/@webpack-blocks/webpack2/node_modules/webpack/lib/BannerPlugin.js:67:5)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:204:14)\n    at LastCallWebpackPlugin.process (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:126:12)\n    at Compilation.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:194:12)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:666:10)");

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = __webpack_require__(14);

var _Card2 = _interopRequireDefault(_Card);

var _DataTable = __webpack_require__(86);

var _DataTable2 = _interopRequireDefault(_DataTable);

var _TableHeader = __webpack_require__(87);

var _TableHeader2 = _interopRequireDefault(_TableHeader);

var _TableBody = __webpack_require__(88);

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableRow = __webpack_require__(89);

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableColumn = __webpack_require__(90);

var _TableColumn2 = _interopRequireDefault(_TableColumn);

var _reactRedux = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(5);

var _Button = __webpack_require__(7);

var _Button2 = _interopRequireDefault(_Button);

var _golos = __webpack_require__(15);

var _golos2 = _interopRequireDefault(_golos);

var _config = __webpack_require__(2);

var _selectors = __webpack_require__(6);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (_config.isBrowser) {
  __webpack_require__(91);
  window.golos = _golos2.default;
}

var CoursesListPage = (_dec = (0, _reactRedux.connect)(function (state) {
  return {
    teacher: (0, _selectors.selectTeacherUser)(state)
  };
}), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(CoursesListPage, _PureComponent);

  function CoursesListPage(props) {
    _classCallCheck(this, CoursesListPage);

    var _this = _possibleConstructorReturn(this, (CoursesListPage.__proto__ || Object.getPrototypeOf(CoursesListPage)).call(this, props));

    _this.state = {
      posts: []
    };
    return _this;
  }

  _createClass(CoursesListPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      _golos2.default.api.getState('@' + this.props.teacher.username, function (err, result) {
        //console.log('getState', err, result)
        if (result && result.content) {
          _this2.setState(function (prevState) {
            var posts = Object.values(result.content).sort(function (a, b) {
              return new Date(b.created) - new Date(a.created);
            }).map(function (item) {
              return {
                id: item.id,
                created: item.created,
                title: item.title,
                url: item.url
              };
            });
            return _extends({}, prevState, {
              posts: posts
            });
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _components.PageTemplate,
        {
          title: 'All courses'
        },
        _react2.default.createElement(
          _Card2.default,
          null,
          _react2.default.createElement(
            _DataTable2.default,
            {
              baseId: 'coursesTable',
              plain: true,
              className: 'courses-table'
            },
            _react2.default.createElement(
              _TableHeader2.default,
              null,
              _react2.default.createElement(
                _TableRow2.default,
                null,
                _react2.default.createElement(
                  _TableColumn2.default,
                  null,
                  'Title'
                ),
                _react2.default.createElement(
                  _TableColumn2.default,
                  null,
                  'Created'
                ),
                _react2.default.createElement(_TableColumn2.default, null)
              )
            ),
            _react2.default.createElement(
              _TableBody2.default,
              null,
              this.state.posts.map(function (course, i) {
                return _react2.default.createElement(
                  _TableRow2.default,
                  {
                    key: course.id
                  },
                  _react2.default.createElement(
                    _TableColumn2.default,
                    {
                      className: 'courses-table__title'
                    },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      {
                        to: '/course' + course.url
                      },
                      course.title
                    )
                  ),
                  _react2.default.createElement(
                    _TableColumn2.default,
                    null,
                    course.created
                  ),
                  _react2.default.createElement(
                    _TableColumn2.default,
                    null,
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      {
                        to: '/course' + course.url
                      },
                      _react2.default.createElement(
                        _Button2.default,
                        {
                          icon: true,
                          primary: true
                        },
                        'chevron_right'
                      )
                    )
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return CoursesListPage;
}(_react.PureComponent), _class2.defaultProps = {}, _temp)) || _class);
exports.default = CoursesListPage;

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("react-md/lib/DataTables/DataTable");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("react-md/lib/DataTables/TableHeader");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("react-md/lib/DataTables/TableBody");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("react-md/lib/DataTables/TableRow");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("react-md/lib/DataTables/TableColumn");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module './assets.json'\n    at Function.Module._resolveFilename (module.js:536:15)\n    at Function.Module._load (module.js:466:25)\n    at Module.require (module.js:579:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/css-loader/index.js??ref--1-2!/home/ivan/Projects/hackaton/client/node_modules/postcss-loader/lib/index.js??postcss!/home/ivan/Projects/hackaton/client/node_modules/sass-loader/lib/loader.js!/home/ivan/Projects/hackaton/client/src/components/pages/courses/list/styles.scss:1:79)\n    at Module._compile (module.js:635:30)\n    at Object.exec (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/NormalModule.js:129:12)\n    at /home/ivan/Projects/hackaton/client/node_modules/extract-text-webpack-plugin/dist/loader.js:131:26\n    at compile (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:300:11)\n    at applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:510:14)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at Compiler.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/extract-text-webpack-plugin/dist/loader.js:112:7)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:204:14)\n    at Compiler.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/CachePlugin.js:78:5)\n    at Compiler.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at compilation.seal.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:507:11)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:195:46)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:680:19)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at LastCallWebpackPlugin.process (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:126:12)\n    at Compilation.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:197:12)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:671:11)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at Compilation.compilation.plugin (/home/ivan/Projects/hackaton/client/node_modules/@webpack-blocks/webpack2/node_modules/webpack/lib/BannerPlugin.js:67:5)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:204:14)\n    at LastCallWebpackPlugin.process (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:126:12)\n    at Compilation.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:194:12)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:666:10)");

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(7);

var _Button2 = _interopRequireDefault(_Button);

var _Card = __webpack_require__(14);

var _Card2 = _interopRequireDefault(_Card);

var _CardTitle = __webpack_require__(25);

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _CardText = __webpack_require__(26);

var _CardText2 = _interopRequireDefault(_CardText);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _cryptoJs = __webpack_require__(93);

var _cryptoJs2 = _interopRequireDefault(_cryptoJs);

var _golos = __webpack_require__(15);

var _golos2 = _interopRequireDefault(_golos);

var _config = __webpack_require__(2);

var _selectors = __webpack_require__(6);

var _actions = __webpack_require__(9);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (_config.isBrowser) {
  __webpack_require__(94);
  window.golos = _golos2.default;
  window.CryptoJS = _cryptoJs2.default;
}

var CoursesItemPage = (_dec = (0, _reactRedux.connect)(function (state) {
  return {
    user: (0, _selectors.selectCurrentUser)(state)
  };
}, function (dispatch) {
  return {
    resetAnswerForm: function resetAnswerForm() {
      return dispatch((0, _actions.resetFormData)(_components.AnswerForm.formName));
    },
    addVoteNotification: function addVoteNotification() {
      return dispatch((0, _actions.addSuccessToast)('Your vote has been added!'));
    }
  };
}), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(CoursesItemPage, _PureComponent);

  function CoursesItemPage(props) {
    _classCallCheck(this, CoursesItemPage);

    //console.log(this.props)
    var _this = _possibleConstructorReturn(this, (CoursesItemPage.__proto__ || Object.getPrototypeOf(CoursesItemPage)).call(this, props));

    _this.state = {
      post: {
        title: '',
        created: '',
        body: ''
      },
      replies: []
    };
    _this.onAnswerSubmit = _this.onAnswerSubmit.bind(_this);
    _this.decrypt = _this.decrypt.bind(_this);
    _this.voteAnswer = _this.voteAnswer.bind(_this);
    _this.onMarkChange = _this.onMarkChange.bind(_this);
    return _this;
  }

  _createClass(CoursesItemPage, [{
    key: 'postContentData',
    value: function postContentData(content) {
      return {
        id: content.id,
        title: content.title,
        body: content.body,
        created: content.created,
        permlink: content.permlink,
        author: content.author
      };
    }
  }, {
    key: 'fetchPost',
    value: function fetchPost() {
      var _this2 = this;

      if (_config.isBrowser) {
        var url = this.props.location.pathname.slice(7);
        _golos2.default.api.getState(url, function (err, result) {
          var postContent = Object.values(result.content).filter(function (c) {
            return c.url === url;
          })[0];

          _golos2.default.api.getAccounts([postContent.author], function (getAccountsErr, getAccountsResults) {
            console.log('getState', err, result);
            if (result && result.content) {
              _this2.setState(function (prevState) {
                var replies = [];

                if (postContent.replies && postContent.replies.length > 0) {
                  replies = postContent.replies.map(function (r) {
                    var replyContent = result.content[r];

                    var isVotedByTeacher = _this2.props.user.role === 'teacher' && replyContent.active_votes.findIndex(function (v) {
                      return v.voter === _this2.props.user.username;
                    }) !== -1;

                    var reply = Object.assign({}, _this2.postContentData(replyContent), { encrypted: true, replies: [], isVotedByTeacher: isVotedByTeacher });

                    if (replyContent.replies && replyContent.replies.length > 0) {
                      reply.replies = replyContent.replies.map(function (r) {
                        var answerContent = result.content[r];
                        return _this2.postContentData(answerContent);
                      });
                    }
                    return reply;
                  });
                }
                return _extends({}, prevState, {
                  post: _this2.postContentData(postContent),
                  replies: replies,
                  memoKey: getAccountsResults[0].memo_key
                });
              });
            }
          });
        });
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.fetchPost();
      this.props.resetAnswerForm();
    }
  }, {
    key: 'onAnswerSubmit',
    value: function onAnswerSubmit(data) {
      var _this3 = this;

      var msgData = [this.props.user.username, data.formData.answer];
      var encryptedMessage = _cryptoJs2.default.AES.encrypt(msgData.join(':'), this.state.memoKey).toString();

      var postingWif = _golos2.default.auth.toWif(this.props.user.username, this.props.user.pass, 'posting');

      var parentAuthor = this.state.post.author;
      var author = this.props.user.username;
      var parentPermlink = this.state.post.permlink;
      //golos.broadcast.comment(wif, parentAuthor, parentPermlink, author, permlink, title, body, jsonMetadata, function(err, result) {
      _golos2.default.broadcast.comment(postingWif, parentAuthor, parentPermlink, author, this.state.post.permlink + '-answer-' + new Date().getTime(), '', encryptedMessage, {}, function (err, result) {
        console.log(err, result);
        if (!err) {
          _this3.fetchPost();
        }
      });
    }
  }, {
    key: 'decrypt',
    value: function decrypt(ind) {
      var _this4 = this;

      return function () {
        _this4.setState(function (prevState) {
          var replies = [].concat(_toConsumableArray(prevState.replies));
          replies[ind].encrypted = false;
          try {
            replies[ind].body = _cryptoJs2.default.AES.decrypt(replies[ind].body, prevState.memoKey).toString(_cryptoJs2.default.enc.Utf8);
          } catch (e) {
            replies[ind].body = 'Invalid encrypted message';
          }
          //console.log(replies)
          return Object.assign({}, prevState, {
            replies: replies
          });
        });
      };
    }
  }, {
    key: 'voteAnswer',
    value: function voteAnswer(ind) {
      var _this5 = this;

      return function () {
        var reply = _this5.state.replies[ind];
        var postingWif = _golos2.default.auth.toWif(_this5.props.user.username, _this5.props.user.pass, 'posting');
        //golos.broadcast.comment(wif, parentAuthor, parentPermlink, author, permlink, title, body, jsonMetadata, function(err, result) {
        //golos.broadcast.comment(
        //  postingWif,
        //  reply.author,
        //  reply.permlink,
        //  this.props.user.username,
        //  `${reply.permlink}-teacher-${new Date().getTime()}`,
        //  '',
        //  `Оценка ${reply.mark}`,
        //  {},
        //  (err, result) => {
        //    console.log(err, result);
        //    if (!err) {
        //      this.fetchPost()
        //    }
        //  })

        _golos2.default.broadcast.vote(postingWif, _this5.props.user.username, reply.author, reply.permlink, 10000 * reply.mark / 5, function (err, results) {
          if (!err) {
            _this5.props.addVoteNotification();
            _this5.fetchPost();
          }
          console.log('Vote for reply', err, results);
        });
      };
    }
  }, {
    key: 'onMarkChange',
    value: function onMarkChange(ind) {
      var _this6 = this;

      return function (value) {
        _this6.setState(function (prevState) {
          var replies = [].concat(_toConsumableArray(prevState.replies));
          replies[ind].mark = value;
          return Object.assign({}, prevState, {
            replies: replies
          });
        });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      //console.log('Item page render: ', this.props)
      //console.log('Item page render: ', this.state)
      return _react2.default.createElement(
        _components.PageTemplate,
        {
          title: 'Course: ' + this.state.post.title
        },
        _react2.default.createElement(
          _Card2.default,
          {
            className: 'course-card'
          },
          _react2.default.createElement(
            _CardText2.default,
            null,
            _react2.default.createElement(
              'p',
              {
                className: 'course-card__body'
              },
              this.state.post.body.split('\n').map(function (l) {
                return _react2.default.createElement(
                  'p',
                  null,
                  l
                );
              })
            ),
            _react2.default.createElement(
              'div',
              null,
              this.state.post.created
            )
          )
        ),
        this.props.user.role === 'student' && _react2.default.createElement(
          'div',
          {
            className: 'course-item__answer-form'
          },
          _react2.default.createElement(
            _Card2.default,
            {
              className: 'course-item-reply'
            },
            _react2.default.createElement(_CardTitle2.default, {
              title: 'Reply'
            }),
            _react2.default.createElement(
              _CardText2.default,
              null,
              _react2.default.createElement(
                _components.AnswerForm,
                {
                  onSubmit: this.onAnswerSubmit
                },
                _react2.default.createElement(
                  _Button2.default,
                  {
                    raised: true,
                    primary: true,
                    type: 'submit'
                  },
                  'Submit'
                )
              )
            )
          )
        ),
        this.state.replies.length > 0 && _react2.default.createElement(
          'div',
          {
            className: 'course-item__replies'
          },
          _react2.default.createElement(
            'h3',
            null,
            'Answers'
          ),
          this.state.replies.map(function (r, ind) {
            return _react2.default.createElement(
              _Card2.default,
              {
                key: r.id,
                className: 'course-item-reply'
              },
              _react2.default.createElement(
                _CardText2.default,
                null,
                _react2.default.createElement(
                  'p',
                  null,
                  r.body
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  r.created
                ),
                _this7.props.user.role === 'teacher' && _react2.default.createElement(
                  'div',
                  {
                    className: 'course-item-reply__btns'
                  },
                  r.encrypted && _react2.default.createElement(
                    _Button2.default,
                    {
                      raised: true,
                      onClick: _this7.decrypt(ind)
                    },
                    'Decode'
                  ),
                  !r.isVotedByTeacher && _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_components.OneSelectWidget, {
                      placeholder: 'Mark',
                      style: { width: 50 },
                      value: r.mark,
                      options: {
                        _fullWidth: false,
                        enumOptions: [{ value: 1, label: '1' }, { value: 2, label: '2' }, { value: 3, label: '3' }, { value: 4, label: '4' }, { value: 5, label: '5' }]
                      },
                      onChange: _this7.onMarkChange(ind)
                    }),
                    _react2.default.createElement(
                      _Button2.default,
                      {
                        raised: true,
                        primary: true,
                        onClick: _this7.voteAnswer(ind)
                      },
                      'Vote'
                    )
                  )
                ),
                _react2.default.createElement(
                  'ul',
                  null,
                  r.replies && r.replies.map(function (r) {
                    return _react2.default.createElement(
                      'li',
                      null,
                      r.body
                    );
                  })
                )
              )
            );
          })
        )
      );
    }
  }]);

  return CoursesItemPage;
}(_react.PureComponent), _class2.defaultProps = {}, _temp)) || _class);
exports.default = CoursesItemPage;

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("crypto-js");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module './assets.json'\n    at Function.Module._resolveFilename (module.js:536:15)\n    at Function.Module._load (module.js:466:25)\n    at Module.require (module.js:579:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/css-loader/index.js??ref--1-2!/home/ivan/Projects/hackaton/client/node_modules/postcss-loader/lib/index.js??postcss!/home/ivan/Projects/hackaton/client/node_modules/sass-loader/lib/loader.js!/home/ivan/Projects/hackaton/client/src/components/pages/courses/item/styles.scss:1:79)\n    at Module._compile (module.js:635:30)\n    at Object.exec (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/NormalModule.js:129:12)\n    at /home/ivan/Projects/hackaton/client/node_modules/extract-text-webpack-plugin/dist/loader.js:131:26\n    at compile (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:300:11)\n    at applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:510:14)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at Compiler.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/extract-text-webpack-plugin/dist/loader.js:112:7)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:204:14)\n    at Compiler.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/CachePlugin.js:78:5)\n    at Compiler.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at compilation.seal.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:507:11)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:195:46)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:680:19)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at LastCallWebpackPlugin.process (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:126:12)\n    at Compilation.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:197:12)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:671:11)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at Compilation.compilation.plugin (/home/ivan/Projects/hackaton/client/node_modules/@webpack-blocks/webpack2/node_modules/webpack/lib/BannerPlugin.js:67:5)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:204:14)\n    at LastCallWebpackPlugin.process (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:126:12)\n    at Compilation.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:194:12)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:666:10)");

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_Component) {
  _inherits(NotFound, _Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var staticContext = this.props.staticContext;

      if (staticContext) {
        staticContext.status = 404;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _components.MinimalTemplate,
        {
          title: 'Not found'
        },
        _react2.default.createElement(
          'h1',
          null,
          '404'
        ),
        _react2.default.createElement(
          'h2',
          null,
          'Not found'
        )
      );
    }
  }]);

  return NotFound;
}(_react.Component);

exports.default = NotFound;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MinimalTemplate = exports.PageTemplate = undefined;

var _PageTemplate2 = __webpack_require__(97);

var _PageTemplate3 = _interopRequireDefault(_PageTemplate2);

var _MinimalTemplate2 = __webpack_require__(99);

var _MinimalTemplate3 = _interopRequireDefault(_MinimalTemplate2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.PageTemplate = _PageTemplate3.default;
exports.MinimalTemplate = _MinimalTemplate3.default;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _reactHelmet = __webpack_require__(10);

var _Button = __webpack_require__(7);

var _Button2 = _interopRequireDefault(_Button);

var _reactRouterDom = __webpack_require__(5);

var _components = __webpack_require__(3);

var _selectors = __webpack_require__(6);

var _actions = __webpack_require__(9);

var _config = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (_config.isBrowser) {
  __webpack_require__(98);
}

//@connect(
//
//)
var PageTemplate = (_temp = _class = function (_Component) {
  _inherits(PageTemplate, _Component);

  function PageTemplate() {
    _classCallCheck(this, PageTemplate);

    return _possibleConstructorReturn(this, (PageTemplate.__proto__ || Object.getPrototypeOf(PageTemplate)).apply(this, arguments));
  }

  _createClass(PageTemplate, [{
    key: 'render',
    value: function render() {
      //console.log('PageTemplate render')
      var _props = this.props,
          customer = _props.customer,
          title = _props.title,
          pageImage = _props.pageImage;
      //console.log('PageTemplate render: ', this.props.drawer)
      //const hasSecondToolbar = this.props.toolbar !== null

      var toolbar = void 0;
      if (this.props.toolbar !== null) {
        toolbar = this.props.toolbar;
      } else {
        toolbar = _react2.default.createElement(_components.Toolbar, {
          title: this.props.title
        });
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            this.props.title
          )
        ),
        _react2.default.createElement(
          'div',
          {
            className: '' + (this.props.drawerVisible && this.props.drawer ? 'md-drawer-relative' : '')
          },
          toolbar,
          _react2.default.createElement(
            'main',
            {
              className: 'main-container md-toolbar-relative'
            },
            _react2.default.createElement(
              'div',
              {
                className: '' + this.props.contentClassName
              },
              this.props.children
            )
          ),
          _react2.default.createElement(_components.Footer, null)
        ),
        _react2.default.createElement(_components.Notifications, null)
      );
    }
  }]);

  return PageTemplate;
}(_react.Component), _class.defaultProps = {
  pageDescription: null,
  toolbar: null,
  pageKeywords: null,
  pageImage: null,
  contentClassName: ''
}, _temp);
exports.default = PageTemplate;

/***/ }),
/* 98 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module './assets.json'\n    at Function.Module._resolveFilename (module.js:536:15)\n    at Function.Module._load (module.js:466:25)\n    at Module.require (module.js:579:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/css-loader/index.js??ref--1-2!/home/ivan/Projects/hackaton/client/node_modules/postcss-loader/lib/index.js??postcss!/home/ivan/Projects/hackaton/client/node_modules/sass-loader/lib/loader.js!/home/ivan/Projects/hackaton/client/src/components/templates/PageTemplate/styles.scss:1:79)\n    at Module._compile (module.js:635:30)\n    at Object.exec (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/NormalModule.js:129:12)\n    at /home/ivan/Projects/hackaton/client/node_modules/extract-text-webpack-plugin/dist/loader.js:131:26\n    at compile (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:300:11)\n    at applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:510:14)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at Compiler.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/extract-text-webpack-plugin/dist/loader.js:112:7)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:204:14)\n    at Compiler.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/CachePlugin.js:78:5)\n    at Compiler.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at compilation.seal.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:507:11)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:195:46)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:680:19)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at LastCallWebpackPlugin.process (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:126:12)\n    at Compilation.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:197:12)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:671:11)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at Compilation.compilation.plugin (/home/ivan/Projects/hackaton/client/node_modules/@webpack-blocks/webpack2/node_modules/webpack/lib/BannerPlugin.js:67:5)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:204:14)\n    at LastCallWebpackPlugin.process (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:126:12)\n    at Compilation.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:194:12)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:666:10)");

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MinimalTemplate = function MinimalTemplate(props) {
  var minimalStyles = '\n      @import url(\'https://fonts.googleapis.com/css?family=Roboto\');\n      html, body {\n        margin: 0;\n        padding: 0;\n        background-color: #fafafa;\n        font-family:Roboto,sans-serif;\n        font-weight:400;\n        -moz-osx-font-smoothing:grayscale;\n        -webkit-font-smoothing:antialiased;\n        text-rendering:optimizeLegibility;\n      }\n      h1 {\n        font-size:112px;\n        font-weight:300;\n        line-height:128px;\n        color: rgba(0, 0, 0, 0.5);\n      }\n      h2 {\n        margin: 0;\n        font-weight: 400;\n        font-size:34px;\n        line-height:72px;\n        color: rgba(0, 0, 0, 0.5);\n      }\n      .main-container{\n        width: 100% !important;\n        position:absolute !important;\n        left:0 !important;\n        text-align:center !important;\n        padding: 20px !important;\n        color: #000 !important;\n       }\n      @media (max-width: 450px) {\n        h1 {\n          font-size:50px !important;\n          line-height:60px !important;\n         }\n        h2 {\n          font-size:18px !important;\n          line-height:36px !important;\n         }\n      }\n      @media (max-height: 450px) {\n        h1 {\n          font-size:50px !important;\n          line-height:60px !important;\n         }\n        h2 {\n          font-size:18px !important;\n          line-height:36px !important;\n         }\n      }';
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        props.title
      )
    ),
    _react2.default.createElement('style', { type: 'text/css', dangerouslySetInnerHTML: { __html: minimalStyles }
    }),
    _react2.default.createElement(
      'main',
      {
        className: 'main-container'
      },
      props.children
    )
  );
};

MinimalTemplate.defaultProps = {};

exports.default = MinimalTemplate;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notifications = exports.Toolbar = exports.Footer = undefined;

var _Footer2 = __webpack_require__(101);

var _Footer3 = _interopRequireDefault(_Footer2);

var _Toolbar2 = __webpack_require__(103);

var _Toolbar3 = _interopRequireDefault(_Toolbar2);

var _Notifications2 = __webpack_require__(107);

var _Notifications3 = _interopRequireDefault(_Notifications2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Footer = _Footer3.default;
exports.Toolbar = _Toolbar3.default;
exports.Notifications = _Notifications3.default;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _config = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (_config.isBrowser) {
  __webpack_require__(102);
}

var Footer = (_temp = _class = function (_PureComponent) {
  _inherits(Footer, _PureComponent);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      var className = this.props.className;

      return _react2.default.createElement(
        'footer',
        { className: 'footer ' + className },
        _react2.default.createElement(
          'div',
          {
            className: 'footer__copy'
          },
          'Copyright ',
          new Date().getFullYear(),
          ' Profichain'
        )
      );
    }
  }]);

  return Footer;
}(_react.PureComponent), _class.defaultProps = {
  className: ''
}, _temp);
exports.default = Footer;

/***/ }),
/* 102 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module './assets.json'\n    at Function.Module._resolveFilename (module.js:536:15)\n    at Function.Module._load (module.js:466:25)\n    at Module.require (module.js:579:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/css-loader/index.js??ref--1-2!/home/ivan/Projects/hackaton/client/node_modules/postcss-loader/lib/index.js??postcss!/home/ivan/Projects/hackaton/client/node_modules/sass-loader/lib/loader.js!/home/ivan/Projects/hackaton/client/src/components/layouts/Footer/styles.scss:1:79)\n    at Module._compile (module.js:635:30)\n    at Object.exec (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/NormalModule.js:129:12)\n    at /home/ivan/Projects/hackaton/client/node_modules/extract-text-webpack-plugin/dist/loader.js:131:26\n    at compile (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:300:11)\n    at applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:510:14)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at Compiler.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/extract-text-webpack-plugin/dist/loader.js:112:7)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:204:14)\n    at Compiler.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/CachePlugin.js:78:5)\n    at Compiler.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at compilation.seal.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:507:11)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:195:46)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:680:19)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at LastCallWebpackPlugin.process (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:126:12)\n    at Compilation.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:197:12)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:671:11)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at Compilation.compilation.plugin (/home/ivan/Projects/hackaton/client/node_modules/@webpack-blocks/webpack2/node_modules/webpack/lib/BannerPlugin.js:67:5)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:204:14)\n    at LastCallWebpackPlugin.process (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:126:12)\n    at Compilation.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:194:12)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:666:10)");

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LinearProgress = __webpack_require__(104);

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

var _Toolbars = __webpack_require__(105);

var _Toolbars2 = _interopRequireDefault(_Toolbars);

var _Button = __webpack_require__(7);

var _Button2 = _interopRequireDefault(_Button);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _components = __webpack_require__(3);

var _selectors = __webpack_require__(6);

var _actions = __webpack_require__(9);

var _config = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (_config.isBrowser) {
  __webpack_require__(106);
}

var Toolbar = (_dec = (0, _reactRedux.connect)(function (state) {
  return {
    currentUser: (0, _selectors.selectCurrentUser)(state),
    selectUserByUserName: function selectUserByUserName(userName) {
      return (0, _selectors.selectUserByUserName)(state, userName);
    },
    allUsers: (0, _selectors.selectUsers)(state)
  };
}, function (dispatch) {
  return {
    setCurrentUser: function setCurrentUser(user) {
      return dispatch((0, _actions.setCurrentUser)(user));
    }
  };
}), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(Toolbar, _PureComponent);

  function Toolbar(props) {
    _classCallCheck(this, Toolbar);

    var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, props));

    _this.onUserRoleChange = _this.onUserRoleChange.bind(_this);
    return _this;
  }

  _createClass(Toolbar, [{
    key: 'onUserRoleChange',
    value: function onUserRoleChange(userName) {
      var user = this.props.selectUserByUserName(userName);
      console.log(user);
      if (user) {
        this.props.setCurrentUser(user);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var results = [_react2.default.createElement(
        _Toolbars2.default,
        {
          key: 'toolbar',
          fixed: true
          //colored
          , zDepth: 1,
          className: 'toolbar ',
          title: this.props.title
        },
        _react2.default.createElement(
          'div',
          {
            className: 'toolbar__right-btns'
          },
          _react2.default.createElement(
            _reactRouterDom.Link,
            {
              to: '/'
            },
            _react2.default.createElement(
              _Button2.default,
              {
                flat: true,
                primary: true,
                type: 'submit'
              },
              'All courses'
            )
          ),
          this.props.currentUser.role === 'teacher' && _react2.default.createElement(
            _reactRouterDom.Link,
            {
              to: '/courses/add'
            },
            _react2.default.createElement(
              _Button2.default,
              {
                flat: true,
                primary: true,
                type: 'submit'
              },
              'Create course'
            )
          ),
          _react2.default.createElement(_components.OneSelectWidget, {
            className: 'toolbar__user',
            value: this.props.currentUser.username,
            onChange: this.onUserRoleChange,
            options: {
              _fullWidth: false,
              enumOptions: this.props.allUsers.map(function (u) {
                return { value: u.username, label: u.role };
              })
            }
          })
        )
      )];
      if (this.props.loading) {
        results.push(_react2.default.createElement(_LinearProgress2.default, {
          key: 'progress',
          id: 'progress-id',
          className: 'toolbar__progress'
        }));
      }
      return results;
    }
  }]);

  return Toolbar;
}(_react.PureComponent), _class2.defaultProps = {
  className: '',
  items: [],
  loading: false
}, _temp)) || _class);
exports.default = Toolbar;

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("react-md/lib/Progress/LinearProgress");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("react-md/lib/Toolbars");

/***/ }),
/* 106 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module './assets.json'\n    at Function.Module._resolveFilename (module.js:536:15)\n    at Function.Module._load (module.js:466:25)\n    at Module.require (module.js:579:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/css-loader/index.js??ref--1-2!/home/ivan/Projects/hackaton/client/node_modules/postcss-loader/lib/index.js??postcss!/home/ivan/Projects/hackaton/client/node_modules/sass-loader/lib/loader.js!/home/ivan/Projects/hackaton/client/src/components/layouts/Toolbar/styles.scss:1:79)\n    at Module._compile (module.js:635:30)\n    at Object.exec (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/NormalModule.js:129:12)\n    at /home/ivan/Projects/hackaton/client/node_modules/extract-text-webpack-plugin/dist/loader.js:131:26\n    at compile (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:300:11)\n    at applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:510:14)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at Compiler.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/extract-text-webpack-plugin/dist/loader.js:112:7)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:204:14)\n    at Compiler.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/CachePlugin.js:78:5)\n    at Compiler.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at compilation.seal.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:507:11)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:195:46)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:680:19)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at LastCallWebpackPlugin.process (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:126:12)\n    at Compilation.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:197:12)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:671:11)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at Compilation.compilation.plugin (/home/ivan/Projects/hackaton/client/node_modules/@webpack-blocks/webpack2/node_modules/webpack/lib/BannerPlugin.js:67:5)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:204:14)\n    at LastCallWebpackPlugin.process (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:126:12)\n    at Compilation.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:194:12)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:666:10)");

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _Snackbars = __webpack_require__(108);

var _Snackbars2 = _interopRequireDefault(_Snackbars);

var _actions = __webpack_require__(9);

var _selectors = __webpack_require__(6);

var _config = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (_config.isBrowser) {
  __webpack_require__(109);
}

var Notifications = (_dec = (0, _reactRedux.connect)(function (state) {
  return {
    toasts: (0, _selectors.selectToasts)(state)
  };
}, function (dispatch) {
  return {
    removeToast: function removeToast() {
      return dispatch((0, _actions.removeToast)());
    }
  };
}), _dec(_class = function (_PureComponent) {
  _inherits(Notifications, _PureComponent);

  function Notifications(props) {
    _classCallCheck(this, Notifications);

    var _this = _possibleConstructorReturn(this, (Notifications.__proto__ || Object.getPrototypeOf(Notifications)).call(this, props));

    _this.onDismiss = _this.onDismiss.bind(_this);
    return _this;
  }

  _createClass(Notifications, [{
    key: 'onDismiss',
    value: function onDismiss() {
      this.props.removeToast();
    }
  }, {
    key: 'render',
    value: function render() {
      var toasts = this.props.toasts;

      var toast = toasts[0];
      return _react2.default.createElement(_Snackbars2.default, {
        toasts: toast ? [toast] : [],
        autohideTimeout: 3000,
        className: toast ? 'toast toast_' + toast.type : '',
        autohide: true,
        onDismiss: this.onDismiss
      });
    }
  }]);

  return Notifications;
}(_react.PureComponent)) || _class);
exports.default = Notifications;

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("react-md/lib/Snackbars");

/***/ }),
/* 109 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module './assets.json'\n    at Function.Module._resolveFilename (module.js:536:15)\n    at Function.Module._load (module.js:466:25)\n    at Module.require (module.js:579:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/css-loader/index.js??ref--1-2!/home/ivan/Projects/hackaton/client/node_modules/postcss-loader/lib/index.js??postcss!/home/ivan/Projects/hackaton/client/node_modules/sass-loader/lib/loader.js!/home/ivan/Projects/hackaton/client/src/components/layouts/Notifications/styles.scss:1:79)\n    at Module._compile (module.js:635:30)\n    at Object.exec (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/NormalModule.js:129:12)\n    at /home/ivan/Projects/hackaton/client/node_modules/extract-text-webpack-plugin/dist/loader.js:131:26\n    at compile (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:300:11)\n    at applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:510:14)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at Compiler.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/extract-text-webpack-plugin/dist/loader.js:112:7)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:204:14)\n    at Compiler.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/CachePlugin.js:78:5)\n    at Compiler.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at compilation.seal.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:507:11)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:195:46)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:680:19)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at LastCallWebpackPlugin.process (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:126:12)\n    at Compilation.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:197:12)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:671:11)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at Compilation.compilation.plugin (/home/ivan/Projects/hackaton/client/node_modules/@webpack-blocks/webpack2/node_modules/webpack/lib/BannerPlugin.js:67:5)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:204:14)\n    at LastCallWebpackPlugin.process (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:126:12)\n    at Compilation.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:194:12)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:666:10)");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module './assets.json'\n    at Function.Module._resolveFilename (module.js:536:15)\n    at Function.Module._load (module.js:466:25)\n    at Module.require (module.js:579:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/css-loader/index.js??ref--1-2!/home/ivan/Projects/hackaton/client/node_modules/postcss-loader/lib/index.js??postcss!/home/ivan/Projects/hackaton/client/node_modules/sass-loader/lib/loader.js!/home/ivan/Projects/hackaton/client/src/components/styles.scss:1:79)\n    at Module._compile (module.js:635:30)\n    at Object.exec (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/NormalModule.js:129:12)\n    at /home/ivan/Projects/hackaton/client/node_modules/extract-text-webpack-plugin/dist/loader.js:131:26\n    at compile (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:300:11)\n    at applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:510:14)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at Compiler.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/extract-text-webpack-plugin/dist/loader.js:112:7)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:204:14)\n    at Compiler.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/CachePlugin.js:78:5)\n    at Compiler.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at compilation.seal.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compiler.js:507:11)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:195:46)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:680:19)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at LastCallWebpackPlugin.process (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:126:12)\n    at Compilation.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:197:12)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:671:11)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:202:11)\n    at Compilation.compilation.plugin (/home/ivan/Projects/hackaton/client/node_modules/@webpack-blocks/webpack2/node_modules/webpack/lib/BannerPlugin.js:67:5)\n    at next (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:204:14)\n    at LastCallWebpackPlugin.process (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:126:12)\n    at Compilation.<anonymous> (/home/ivan/Projects/hackaton/client/node_modules/last-call-webpack-plugin/index.js:194:12)\n    at Compilation.applyPluginsAsyncSeries (/home/ivan/Projects/hackaton/client/node_modules/tapable/lib/Tapable.js:206:13)\n    at self.applyPluginsAsync.err (/home/ivan/Projects/hackaton/client/node_modules/webpack/lib/Compilation.js:666:10)");

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable react/no-danger */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(10);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html = function Html(_ref) {
  var assets = _ref.assets,
      state = _ref.state,
      content = _ref.content;

  var helmet = _reactHelmet2.default.renderStatic();
  var htmlAttrs = helmet.htmlAttributes.toComponent();
  var bodyAttrs = helmet.bodyAttributes.toComponent();

  return _react2.default.createElement(
    'html',
    _extends({ lang: 'ru' }, htmlAttrs),
    _react2.default.createElement(
      'head',
      null,
      helmet.title.toComponent(),
      helmet.meta.toComponent(),
      helmet.link.toComponent(),
      assets.css.map(function (path) {
        return _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', key: path, href: path });
      })
    ),
    _react2.default.createElement(
      'body',
      bodyAttrs,
      _react2.default.createElement('span', { id: 'app', dangerouslySetInnerHTML: { __html: content } }),
      _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: state } }),
      assets.js.map(function (path) {
        return _react2.default.createElement('script', { key: path, src: path });
      })
    )
  );
};

exports.default = Html;

/***/ })
/******/ ]);