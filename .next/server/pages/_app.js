/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": function() { return /* binding */ Context; },\n/* harmony export */   \"Provider\": function() { return /* binding */ Provider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/dammy/Downloads/AIApplication/MedicAIFrontEnd-main/context/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n // initial state\n\nconst intialState = {\n  user: null\n}; // create context\n\nconst Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(); // root reducer\n\nconst rootReducer = (state, action) => {\n  switch (action.type) {\n    case \"LOGIN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: action.payload\n      });\n\n    case \"LOGOUT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: null\n      });\n\n    default:\n      return state;\n  }\n}; // context provider\n\n\nconst Provider = ({\n  children\n}) => {\n  const {\n    0: state,\n    1: dispatch\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(rootReducer, intialState); // router\n\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    dispatch({\n      type: \"LOGIN\",\n      payload: JSON.parse(window.localStorage.getItem(\"user\"))\n    });\n  }, []);\n  axios__WEBPACK_IMPORTED_MODULE_2___default().interceptors.response.use(function (response) {\n    // any status code that lie within the range of 2XX cause this function\n    // to trigger\n    return response;\n  }, function (error) {\n    // any status codes that falls outside the range of 2xx cause this function\n    // to trigger\n    let res = error.response; //once the cookie expires this function runs and if these conditions true it means it has expired and we have to logout\n\n    if (res.status === 401 && res.config && !res.config.__isRetryRequest) {\n      return new Promise((resolve, reject) => {\n        axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/logout\").then(data => {\n          console.log(\"/401 error > logout\");\n          dispatch({\n            type: \"LOGOUT\"\n          });\n          window.localStorage.removeItem(\"user\");\n          router.push(\"/login\");\n        }).catch(err => {\n          console.log(\"AXIOS INTERCEPTORS ERR\", err);\n          reject(error);\n        });\n      });\n    }\n\n    return Promise.reject(error);\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const getCsrfToken = async () => {\n      const {\n        data\n      } = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/csrf-token\"); // console.log(\"CSRF\", data);\n\n      (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers[\"X-CSRF-Token\"]) = data.getCsrfToken;\n    };\n\n    getCsrfToken();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n    value: {\n      state,\n      dispatch\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 5\n  }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb250ZXh0L2luZGV4LmpzPzAyNjUiXSwibmFtZXMiOlsiaW50aWFsU3RhdGUiLCJ1c2VyIiwiQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImF4aW9zIiwicmVzcG9uc2UiLCJlcnJvciIsInJlcyIsInN0YXR1cyIsImNvbmZpZyIsIl9faXNSZXRyeVJlcXVlc3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiY2F0Y2giLCJlcnIiLCJnZXRDc3JmVG9rZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0EsTUFBTUEsV0FBVyxHQUFHO0FBQ2xCQyxNQUFJLEVBQUU7QUFEWSxDQUFwQixDLENBSUE7O0FBQ0EsTUFBTUMsT0FBTyxnQkFBR0Msb0RBQWEsRUFBN0IsQyxDQUVBOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxDQUFDQyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDckMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxPQUFMO0FBQ0UsNkNBQVlGLEtBQVo7QUFBbUJKLFlBQUksRUFBRUssTUFBTSxDQUFDRTtBQUFoQzs7QUFFRixTQUFLLFFBQUw7QUFDRSw2Q0FBWUgsS0FBWjtBQUFtQkosWUFBSSxFQUFFO0FBQXpCOztBQUVGO0FBQ0UsYUFBT0ksS0FBUDtBQVJKO0FBVUQsQ0FYRCxDLENBYUE7OztBQUNBLE1BQU1JLFFBQVEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUNqQyxRQUFNO0FBQUEsT0FBQ0wsS0FBRDtBQUFBLE9BQVFNO0FBQVIsTUFBb0JDLGlEQUFVLENBQUNSLFdBQUQsRUFBY0osV0FBZCxDQUFwQyxDQURpQyxDQUdqQzs7QUFDQSxRQUFNYSxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkSixZQUFRLENBQUM7QUFDUEosVUFBSSxFQUFFLE9BREM7QUFFUEMsYUFBTyxFQUFFUSxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixNQUE1QixDQUFYO0FBRkYsS0FBRCxDQUFSO0FBSUQsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BQyx3RUFBQSxDQUNFLFVBQVVDLFFBQVYsRUFBb0I7QUFDbEI7QUFDQTtBQUNBLFdBQU9BLFFBQVA7QUFDRCxHQUxILEVBTUUsVUFBVUMsS0FBVixFQUFpQjtBQUNmO0FBQ0E7QUFDQSxRQUFJQyxHQUFHLEdBQUdELEtBQUssQ0FBQ0QsUUFBaEIsQ0FIZSxDQUdVOztBQUN6QixRQUFJRSxHQUFHLENBQUNDLE1BQUosS0FBZSxHQUFmLElBQXNCRCxHQUFHLENBQUNFLE1BQTFCLElBQW9DLENBQUNGLEdBQUcsQ0FBQ0UsTUFBSixDQUFXQyxnQkFBcEQsRUFBc0U7QUFDcEUsYUFBTyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3RDVCx3REFBQSxDQUNPLGFBRFAsRUFFR1UsSUFGSCxDQUVTQyxJQUFELElBQVU7QUFDZEMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBQ0F2QixrQkFBUSxDQUFDO0FBQUVKLGdCQUFJLEVBQUU7QUFBUixXQUFELENBQVI7QUFDQVcsZ0JBQU0sQ0FBQ0MsWUFBUCxDQUFvQmdCLFVBQXBCLENBQStCLE1BQS9CO0FBQ0F0QixnQkFBTSxDQUFDdUIsSUFBUCxDQUFZLFFBQVo7QUFDRCxTQVBILEVBUUdDLEtBUkgsQ0FRVUMsR0FBRCxJQUFTO0FBQ2RMLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ0ksR0FBdEM7QUFDQVIsZ0JBQU0sQ0FBQ1AsS0FBRCxDQUFOO0FBQ0QsU0FYSDtBQVlELE9BYk0sQ0FBUDtBQWNEOztBQUNELFdBQU9LLE9BQU8sQ0FBQ0UsTUFBUixDQUFlUCxLQUFmLENBQVA7QUFDRCxHQTNCSDtBQThCQVIsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTXdCLFlBQVksR0FBRyxZQUFZO0FBQy9CLFlBQU07QUFBRVA7QUFBRixVQUFXLE1BQU1YLGdEQUFBLENBQVUsaUJBQVYsQ0FBdkIsQ0FEK0IsQ0FFL0I7O0FBQ0FBLHFGQUFBLEdBQXlDVyxJQUFJLENBQUNPLFlBQTlDO0FBQ0QsS0FKRDs7QUFLQUEsZ0JBQVk7QUFDYixHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0Esc0JBQ0UsOERBQUMsT0FBRCxDQUFTLFFBQVQ7QUFBa0IsU0FBSyxFQUFFO0FBQUVsQyxXQUFGO0FBQVNNO0FBQVQsS0FBekI7QUFBQSxjQUErQ0Q7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBR0QsQ0F2REQiLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVkdWNlciwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZXJSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuLy8gaW5pdGlhbCBzdGF0ZVxuY29uc3QgaW50aWFsU3RhdGUgPSB7XG4gIHVzZXI6IG51bGwsXG59O1xuXG4vLyBjcmVhdGUgY29udGV4dFxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuLy8gcm9vdCByZWR1Y2VyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiTE9HSU5cIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBhY3Rpb24ucGF5bG9hZCB9O1xuXG4gICAgY2FzZSBcIkxPR09VVFwiOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IG51bGwgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbi8vIGNvbnRleHQgcHJvdmlkZXJcbmNvbnN0IFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocm9vdFJlZHVjZXIsIGludGlhbFN0YXRlKTtcblxuICAvLyByb3V0ZXJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBcIkxPR0lOXCIsXG4gICAgICBwYXlsb2FkOiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpLFxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcbiAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIC8vIGFueSBzdGF0dXMgY29kZSB0aGF0IGxpZSB3aXRoaW4gdGhlIHJhbmdlIG9mIDJYWCBjYXVzZSB0aGlzIGZ1bmN0aW9uXG4gICAgICAvLyB0byB0cmlnZ2VyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSxcbiAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIC8vIGFueSBzdGF0dXMgY29kZXMgdGhhdCBmYWxscyBvdXRzaWRlIHRoZSByYW5nZSBvZiAyeHggY2F1c2UgdGhpcyBmdW5jdGlvblxuICAgICAgLy8gdG8gdHJpZ2dlclxuICAgICAgbGV0IHJlcyA9IGVycm9yLnJlc3BvbnNlOy8vb25jZSB0aGUgY29va2llIGV4cGlyZXMgdGhpcyBmdW5jdGlvbiBydW5zIGFuZCBpZiB0aGVzZSBjb25kaXRpb25zIHRydWUgaXQgbWVhbnMgaXQgaGFzIGV4cGlyZWQgYW5kIHdlIGhhdmUgdG8gbG9nb3V0XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxICYmIHJlcy5jb25maWcgJiYgIXJlcy5jb25maWcuX19pc1JldHJ5UmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAuZ2V0KFwiL2FwaS9sb2dvdXRcIilcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLzQwMSBlcnJvciA+IGxvZ291dFwiKTtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkxPR09VVFwiIH0pO1xuICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFYSU9TIElOVEVSQ0VQVE9SUyBFUlJcIiwgZXJyKTtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0Q3NyZlRva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2NzcmYtdG9rZW5cIik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkNTUkZcIiwgZGF0YSk7XG4gICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzW1wiWC1DU1JGLVRva2VuXCJdID0gZGF0YS5nZXRDc3JmVG9rZW47XG4gICAgfTtcbiAgICBnZXRDc3JmVG9rZW4oKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgeyBDb250ZXh0LCBQcm92aWRlciB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/dammy/Downloads/AIApplication/MedicAIFrontEnd-main/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n          children: \"MedicAI\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 8\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n          rel: \"shortcut icon\",\n          href: \"https://cdn-icons-png.flaticon.com/512/5278/5278402.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 8\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n          rel: \"stylesheet\",\n          href: \"https://pro.fontawesome.com/releases/v5.10.0/css/all.css\",\n          integrity: \"sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p\",\n          crossorigin: \"anonymous\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n          href: \"https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap\",\n          rel: \"stylesheet\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 8\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"noscript\", {\n          children: \"You need to enable JavaScript to run this app.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 5\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          id: \"root\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 5\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 6\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }, this)\n  }, void 0, false);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUNFO0FBQUEsMkJBQ0EsOERBQUMsOENBQUQ7QUFBQSw4QkFDQSw4REFBQyxrREFBRDtBQUFBLGdDQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURILGVBRUc7QUFBTSxhQUFHLEVBQUMsZUFBVjtBQUEwQixjQUFJLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSCxlQUdJO0FBQU0sYUFBRyxFQUFDLFlBQVY7QUFBdUIsY0FBSSxFQUFDLDBEQUE1QjtBQUF1RixtQkFBUyxFQUFDLHlFQUFqRztBQUEySyxxQkFBVyxFQUFDO0FBQXZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosZUFJRztBQUNELGNBQUksRUFBQyx3R0FESjtBQUVELGFBQUcsRUFBQztBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFVQztBQUFBLGdDQUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURDLGVBRUQ7QUFBSyxZQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZELGVBY0UsOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsbUJBREY7QUFxQkQ7O0FBRUQsK0RBQWVGLEtBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHRvYXN0LCB7IFRvYXN0ZXIgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xuXG5cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8UHJvdmlkZXI+XG4gICAgPEhlYWQ+XG4gICAgICAgPHRpdGxlPk1lZGljQUk8L3RpdGxlPlxuICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS81MTIvNTI3OC81Mjc4NDAyLnBuZ1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9wcm8uZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjEwLjAvY3NzL2FsbC5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtQVltRUMzWXc1Y1ZiM1pjdUh0T0E5M3czNWRZVHN2aExQVm5ZczllU3RIZkdKdk92S3hWZkVMR3JvR2t2c2crcFwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIvPlxuICAgICAgIDxsaW5rXG4gICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MTAwLDEwMGksMzAwLDMwMGksNDAwLDQwMGksNzAwLDcwMGksOTAwLDkwMGkmZGlzcGxheT1zd2FwXCJcbiAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgIC8+XG4gICAgIDwvSGVhZD5cbiAgICAgPGJvZHk+XG4gICAgPG5vc2NyaXB0PllvdSBuZWVkIHRvIGVuYWJsZSBKYXZhU2NyaXB0IHRvIHJ1biB0aGlzIGFwcC48L25vc2NyaXB0PlxuICAgIDxkaXYgaWQ9XCJyb290XCI+PC9kaXY+XG4gIDwvYm9keT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Byb3ZpZGVyPlxuICAgIDwvPlxuICApO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (function() {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-hot-toast");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();