webpackHotUpdate_N_E("pages/categories/[slug]",{

/***/ "./pages/categories/[slug].js":
/*!************************************!*\
  !*** ./pages/categories/[slug].js ***!
  \************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Categories; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Post */ \"./components/Post/index.js\");\n/* harmony import */ var _components_Layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layouts */ \"./components/Layouts/index.js\");\n\nvar _jsxFileName = \"/Users/suphawadee/Desktop/Project/next-contentful/pages/categories/[slug].js\";\n\n// import { useRouter } from 'next/router'\n\n // import PageHeader from \"components/PageHeader\";\n\nvar __N_SSG = true;\nfunction Categories(_ref) {\n  var _this = this;\n\n  var posts = _ref.posts,\n      category = _ref.category,\n      post2 = _ref.post2;\n  console.log('category', posts, post2);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layouts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Blog with Next.js and Contentful\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-1345616107\" + \" \" + \"container-lg py-4\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        className: \"jsx-1345616107\" + \" \" + \"nav justify-content-center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          className: \"jsx-1345616107\" + \" \" + \"nav-item\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: \"./category\",\n            className: \"jsx-1345616107\" + \" \" + \"nav-link\",\n            children: \"All\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }, this), category === null || category === void 0 ? void 0 : category.map(function (_ref2, index) {\n          var fields = _ref2.fields;\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: \"jsx-1345616107\" + \" \" + \"nav-item\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"./\".concat(fields.category),\n              className: \"jsx-1345616107\" + \" \" + \"nav-link active\",\n              children: fields.category\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 19\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 17\n          }, _this) // <li className=\"nav-item\">\n          //   <a className=\"nav-link disabled\" href=\"#\">Disabled</a>\n          // </li>\n          ;\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-1345616107\" + \" \" + \"card-deck flex-wrap\",\n        children: post2 === null || post2 === void 0 ? void 0 : post2.map(function (_ref3, index) {\n          var fields = _ref3.fields;\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            title: fields.title,\n            author: fields.author,\n            date: fields.publishDate,\n            description: fields.description,\n            slug: fields.slug,\n            coverImage: fields.heroImage.fields\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 17\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        id: \"1345616107\",\n        children: \".card-deck.jsx-1345616107 .card.jsx-1345616107{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXBoYXdhZGVlL0Rlc2t0b3AvUHJvamVjdC9uZXh0LWNvbnRlbnRmdWwvcGFnZXMvY2F0ZWdvcmllcy9bc2x1Z10uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEVzQixBQUc0QiwwRUFDQyxzREFDaEIiLCJmaWxlIjoiL1VzZXJzL3N1cGhhd2FkZWUvRGVza3RvcC9Qcm9qZWN0L25leHQtY29udGVudGZ1bC9wYWdlcy9jYXRlZ29yaWVzL1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFBvc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRzXCI7XG4vLyBpbXBvcnQgUGFnZUhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9QYWdlSGVhZGVyXCI7XG5cbmltcG9ydCB7IGdldEFsbFBvc3RzLCBnZXRQb3N0c0J5Q2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vbGliL2luZGV4XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuICBjb25zdCBwYXRocyA9IHBvc3RzLm1hcCgoe2ZpZWxkc30pID0+ICh7XG4gICAgcGFyYW1zOiB7c2x1ZzogZmllbGRzLmNhdGVnb3J5LnRvU3RyaW5nKCl9LFxuICB9KSlcbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICAvLyBmYWxsYmFjazogdHJ1ZSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG4gIC8vIHJldHVybiB7IHBhdGhzOiBbXSwgZmFsbGJhY2s6IHRydWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgeyBzbHVnIH0gPSBwYXJhbXM7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcbiAgY29uc3QgcG9zdDIgPSBhd2FpdCBnZXRQb3N0c0J5Q2F0ZWdvcnkoc2x1ZylcbiAgLy8gY29uc3QgcG9zdDIgPSBwb3N0cy5maWx0ZXIocG9zdCA9PiBwb3N0LmZpZWxkcy5jYXRlZ29yeS5maWVsZHMuc29tZShjYXRlID0+IGNhdGUubmFtZSA9PT0gJ3djb21tZXJjZScpKTtcbiAgLy8gY29uc3QgY2F0ZWdvcnkgPSBbLi4ubmV3IE1hcChwb3N0cy5tYXAoaXRlbSA9PiBbaXRlbS5maWVsZHMuY2F0ZWdvcnkuZmllbGRzLm5hbWUsIGl0ZW1dKSkudmFsdWVzKCldXG4gIGNvbnN0IGNhdGVnb3J5ID0gWy4uLm5ldyBNYXAocG9zdHMubWFwKGl0ZW0gPT4gW2l0ZW0uZmllbGRzLmNhdGVnb3J5LCBpdGVtXSkpLnZhbHVlcygpXVxuICByZXR1cm4geyByZXZhbGlkYXRlOiAxLCBwcm9wczogeyBwb3N0cywgY2F0ZWdvcnksIHBvc3QyIH0gfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcmllcyAoeyBwb3N0cywgY2F0ZWdvcnksIHBvc3QyIH0pIHtcbiAgY29uc29sZS5sb2coJ2NhdGVnb3J5JywgcG9zdHMsIHBvc3QyKVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJCbG9nIHdpdGggTmV4dC5qcyBhbmQgQ29udGVudGZ1bFwiPlxuICAgICAgey8qIDxMYXlvdXRcbiAgICAgICAgLy8gdHlwZSB5b3VyIHBhZ2UgdGl0bGUgYW5kIHBhZ2UgZGVzY3JpcHRpb24uXG4gICAgICAgIHRpdGxlPVwiQmxvZyB3aXRoIE5leHQuanMgYW5kIENvbnRlbnRmdWxcIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIlRoaXMgaXMgYSBCbG9nIERlbW8gd2l0aCBOZXh0LmpzIGFuZCBDb250ZW50ZnVsLiBZb3UgY2FuIHNlZSB0aGUgY29kZSBpbiBnaXRodWIuIEFuZCB5b3UgY2FuIHVzZSB0aGUgY29kZSB0byBtYWtlIHlvdXIgb3duIGJsb2cuIFwiXG4gICAgICA+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1sZyBweS00XCI+XG4gICAgICAgICAgey8qIHlvdSBjYW4gZGVsZXRlIHRoaXMgY29tcG9uZW50IG9yIHlvdSBjYW4gdXNlIHRoaXMgZm9yIHlvdXIgcGFnZSBoZWFkZXIuICovfVxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj17YC4vY2F0ZWdvcnlgfT5BbGw8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5Py5tYXAoKHtmaWVsZHN9LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgYWN0aXZlXCIgaHJlZj17YC4vJHtmaWVsZHMuY2F0ZWdvcnl9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtmaWVsZHMuY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAvLyA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAvLyAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGRpc2FibGVkXCIgaHJlZj1cIiNcIj5EaXNhYmxlZDwvYT5cbiAgICAgICAgICAgICAgICAvLyA8L2xpPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICB7LyogPFBhZ2VIZWFkZXIgLz4gKi99XG4gICAgICAgICAgey8qIGJsb2cgcG9zdCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVjayBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIHtwb3N0Mj8ubWFwKCh7ZmllbGRzfSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UG9zdFxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtmaWVsZHMudGl0bGV9XG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2ZpZWxkcy5hdXRob3J9XG4gICAgICAgICAgICAgICAgICBkYXRlPXtmaWVsZHMucHVibGlzaERhdGV9XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZmllbGRzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgc2x1Zz17ZmllbGRzLnNsdWd9XG4gICAgICAgICAgICAgICAgICBjb3ZlckltYWdlPXtmaWVsZHMuaGVyb0ltYWdlLmZpZWxkc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jYXJkLWRlY2sgLmNhcmQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgey8qIDwvTGF5b3V0PiAqL31cbiAgICA8L0xheW91dD5cbiAgKTtcbn0iXX0= */\\n/*@ sourceURL=/Users/suphawadee/Desktop/Project/next-contentful/pages/categories/[slug].js */\"\n      }, void 0, false, void 0, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, this);\n}\n_c = Categories;\n\nvar _c;\n\n$RefreshReg$(_c, \"Categories\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcmllcy9bc2x1Z10uanM/M2FjNSJdLCJuYW1lcyI6WyJDYXRlZ29yaWVzIiwicG9zdHMiLCJjYXRlZ29yeSIsInBvc3QyIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImluZGV4IiwiZmllbGRzIiwidGl0bGUiLCJhdXRob3IiLCJwdWJsaXNoRGF0ZSIsImRlc2NyaXB0aW9uIiwic2x1ZyIsImhlcm9JbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOzs7QUEyQmUsU0FBU0EsVUFBVCxPQUFpRDtBQUFBOztBQUFBLE1BQTFCQyxLQUEwQixRQUExQkEsS0FBMEI7QUFBQSxNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1CO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQzlEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCSixLQUF4QixFQUErQkUsS0FBL0I7QUFDQSxzQkFDRSxxRUFBQywyREFBRDtBQUFRLFNBQUssRUFBQyxrQ0FBZDtBQUFBLDJCQU1JO0FBQUEsMENBQWUsbUJBQWY7QUFBQSw4QkFFRTtBQUFBLDRDQUFjLDRCQUFkO0FBQUEsZ0NBQ0U7QUFBQSw4Q0FBYyxVQUFkO0FBQUEsaUNBQ0U7QUFBd0IsZ0JBQUksY0FBNUI7QUFBQSxnREFBYSxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUtFRCxRQUxGLGFBS0VBLFFBTEYsdUJBS0VBLFFBQVEsQ0FBRUksR0FBVixDQUFjLGlCQUFXQyxLQUFYO0FBQUEsY0FBRUMsTUFBRixTQUFFQSxNQUFGO0FBQUEsOEJBQ1Y7QUFBQSxnREFBYyxVQUFkO0FBQUEsbUNBQ0U7QUFBK0Isa0JBQUksY0FBT0EsTUFBTSxDQUFDTixRQUFkLENBQW5DO0FBQUEsa0RBQWEsaUJBQWI7QUFBQSx3QkFDR00sTUFBTSxDQUFDTjtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUE4QkssS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVSxDQU1WO0FBQ0E7QUFDQTtBQVJVO0FBQUEsU0FBZCxDQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBcUJFO0FBQUEsNENBQWUscUJBQWY7QUFBQSxrQkFDR0osS0FESCxhQUNHQSxLQURILHVCQUNHQSxLQUFLLENBQUVHLEdBQVAsQ0FBVyxpQkFBV0MsS0FBWCxFQUFxQjtBQUFBLGNBQW5CQyxNQUFtQixTQUFuQkEsTUFBbUI7QUFDL0IsOEJBQ0UscUVBQUMsd0RBQUQ7QUFFRSxpQkFBSyxFQUFFQSxNQUFNLENBQUNDLEtBRmhCO0FBR0Usa0JBQU0sRUFBRUQsTUFBTSxDQUFDRSxNQUhqQjtBQUlFLGdCQUFJLEVBQUVGLE1BQU0sQ0FBQ0csV0FKZjtBQUtFLHVCQUFXLEVBQUVILE1BQU0sQ0FBQ0ksV0FMdEI7QUFNRSxnQkFBSSxFQUFFSixNQUFNLENBQUNLLElBTmY7QUFPRSxzQkFBVSxFQUFFTCxNQUFNLENBQUNNLFNBQVAsQ0FBaUJOO0FBUC9CLGFBQ09ELEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQVVBLFNBWEQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9ERDtLQXREdUJQLFUiLCJmaWxlIjoiLi9wYWdlcy9jYXRlZ29yaWVzL1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFBvc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRzXCI7XG4vLyBpbXBvcnQgUGFnZUhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9QYWdlSGVhZGVyXCI7XG5cbmltcG9ydCB7IGdldEFsbFBvc3RzLCBnZXRQb3N0c0J5Q2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vbGliL2luZGV4XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuICBjb25zdCBwYXRocyA9IHBvc3RzLm1hcCgoe2ZpZWxkc30pID0+ICh7XG4gICAgcGFyYW1zOiB7c2x1ZzogZmllbGRzLmNhdGVnb3J5LnRvU3RyaW5nKCl9LFxuICB9KSlcbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICAvLyBmYWxsYmFjazogdHJ1ZSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG4gIC8vIHJldHVybiB7IHBhdGhzOiBbXSwgZmFsbGJhY2s6IHRydWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgeyBzbHVnIH0gPSBwYXJhbXM7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcbiAgY29uc3QgcG9zdDIgPSBhd2FpdCBnZXRQb3N0c0J5Q2F0ZWdvcnkoc2x1ZylcbiAgLy8gY29uc3QgcG9zdDIgPSBwb3N0cy5maWx0ZXIocG9zdCA9PiBwb3N0LmZpZWxkcy5jYXRlZ29yeS5maWVsZHMuc29tZShjYXRlID0+IGNhdGUubmFtZSA9PT0gJ3djb21tZXJjZScpKTtcbiAgLy8gY29uc3QgY2F0ZWdvcnkgPSBbLi4ubmV3IE1hcChwb3N0cy5tYXAoaXRlbSA9PiBbaXRlbS5maWVsZHMuY2F0ZWdvcnkuZmllbGRzLm5hbWUsIGl0ZW1dKSkudmFsdWVzKCldXG4gIGNvbnN0IGNhdGVnb3J5ID0gWy4uLm5ldyBNYXAocG9zdHMubWFwKGl0ZW0gPT4gW2l0ZW0uZmllbGRzLmNhdGVnb3J5LCBpdGVtXSkpLnZhbHVlcygpXVxuICByZXR1cm4geyByZXZhbGlkYXRlOiAxLCBwcm9wczogeyBwb3N0cywgY2F0ZWdvcnksIHBvc3QyIH0gfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcmllcyAoeyBwb3N0cywgY2F0ZWdvcnksIHBvc3QyIH0pIHtcbiAgY29uc29sZS5sb2coJ2NhdGVnb3J5JywgcG9zdHMsIHBvc3QyKVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJCbG9nIHdpdGggTmV4dC5qcyBhbmQgQ29udGVudGZ1bFwiPlxuICAgICAgey8qIDxMYXlvdXRcbiAgICAgICAgLy8gdHlwZSB5b3VyIHBhZ2UgdGl0bGUgYW5kIHBhZ2UgZGVzY3JpcHRpb24uXG4gICAgICAgIHRpdGxlPVwiQmxvZyB3aXRoIE5leHQuanMgYW5kIENvbnRlbnRmdWxcIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIlRoaXMgaXMgYSBCbG9nIERlbW8gd2l0aCBOZXh0LmpzIGFuZCBDb250ZW50ZnVsLiBZb3UgY2FuIHNlZSB0aGUgY29kZSBpbiBnaXRodWIuIEFuZCB5b3UgY2FuIHVzZSB0aGUgY29kZSB0byBtYWtlIHlvdXIgb3duIGJsb2cuIFwiXG4gICAgICA+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1sZyBweS00XCI+XG4gICAgICAgICAgey8qIHlvdSBjYW4gZGVsZXRlIHRoaXMgY29tcG9uZW50IG9yIHlvdSBjYW4gdXNlIHRoaXMgZm9yIHlvdXIgcGFnZSBoZWFkZXIuICovfVxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj17YC4vY2F0ZWdvcnlgfT5BbGw8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5Py5tYXAoKHtmaWVsZHN9LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgYWN0aXZlXCIgaHJlZj17YC4vJHtmaWVsZHMuY2F0ZWdvcnl9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtmaWVsZHMuY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAvLyA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAvLyAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGRpc2FibGVkXCIgaHJlZj1cIiNcIj5EaXNhYmxlZDwvYT5cbiAgICAgICAgICAgICAgICAvLyA8L2xpPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICB7LyogPFBhZ2VIZWFkZXIgLz4gKi99XG4gICAgICAgICAgey8qIGJsb2cgcG9zdCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVjayBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIHtwb3N0Mj8ubWFwKCh7ZmllbGRzfSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UG9zdFxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtmaWVsZHMudGl0bGV9XG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2ZpZWxkcy5hdXRob3J9XG4gICAgICAgICAgICAgICAgICBkYXRlPXtmaWVsZHMucHVibGlzaERhdGV9XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZmllbGRzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgc2x1Zz17ZmllbGRzLnNsdWd9XG4gICAgICAgICAgICAgICAgICBjb3ZlckltYWdlPXtmaWVsZHMuaGVyb0ltYWdlLmZpZWxkc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jYXJkLWRlY2sgLmNhcmQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgey8qIDwvTGF5b3V0PiAqL31cbiAgICA8L0xheW91dD5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/categories/[slug].js\n");

/***/ })

})