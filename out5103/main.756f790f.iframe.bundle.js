(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "./.storybook/preview.tsx-generated-config-entry.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(
          preview_namespaceObject,
          "parameters",
          function () {
            return parameters;
          }
        ),
        __webpack_require__.d(
          preview_namespaceObject,
          "decorators",
          function () {
            return decorators;
          }
        );
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.filter.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.for-each.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/web.dom-collections.for-each.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.define-properties.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.define-property.js"
        );
      var ClientApi = __webpack_require__(
          "./node_modules/@storybook/client-api/dist/esm/ClientApi.js"
        ),
        esm = __webpack_require__(
          "./node_modules/@storybook/client-logger/dist/esm/index.js"
        ),
        dist = __webpack_require__("./packages/design-tokens/dist/index.js"),
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        parameters = {
          actions: { argTypesRegex: "^on[A-Z].*" },
          controls: {
            matchers: { color: /(background|color)$/i, date: /Date$/ },
          },
        },
        decorators = [
          function (Story) {
            return Object(jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: Object(jsx_runtime.jsxs)(dist.ThemeProvider, {
                children: [
                  Object(jsx_runtime.jsx)(dist.ResetCSS, {}),
                  Object(jsx_runtime.jsx)(Story, {}),
                ],
              }),
            });
          },
        ];
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case "args":
          case "argTypes":
            return esm.a.warn(
              "Invalid args/argTypes in config, ignoring.",
              JSON.stringify(value)
            );
          case "decorators":
            return value.forEach(function (decorator) {
              return Object(ClientApi.d)(decorator, !1);
            });
          case "loaders":
            return value.forEach(function (loader) {
              return Object(ClientApi.e)(loader, !1);
            });
          case "parameters":
            return Object(ClientApi.f)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        );
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case "argTypesEnhancers":
            return value.forEach(function (enhancer) {
              return Object(ClientApi.b)(enhancer);
            });
          case "argsEnhancers":
            return value.forEach(function (enhancer) {
              return Object(ClientApi.c)(enhancer);
            });
          case "render":
            return Object(ClientApi.g)(value);
          case "globals":
          case "globalTypes":
            var v = {};
            return (v[key] = value), Object(ClientApi.f)(v, !1);
          case "__namedExportsOrder":
          case "decorateStory":
          case "renderToDOM":
            return null;
          default:
            return console.log(key + " was not supported :( !");
        }
      });
    },
    "./generated-stories-entry.js": function (
      module,
      exports,
      __webpack_require__
    ) {
      "use strict";
      (function (module) {
        (0,
        __webpack_require__(
          "./node_modules/@storybook/react/dist/esm/client/index.js"
        ).configure)(
          [
            __webpack_require__(
              "./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"
            ),
            __webpack_require__(
              "./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"
            ),
          ],
          module,
          !1
        );
      }.call(
        this,
        __webpack_require__("./node_modules/webpack/buildin/module.js")(module)
      ));
    },
    "./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":
      function (module, exports, __webpack_require__) {
        var map = {
          "./layout/stories/box.stories.tsx":
            "./packages/layout/stories/box.stories.tsx",
          "./layout/stories/flex.stories.tsx":
            "./packages/layout/stories/flex.stories.tsx",
          "./layout/stories/grid.stories.tsx":
            "./packages/layout/stories/grid.stories.tsx",
          "./typography/stories/text.stories.tsx":
            "./packages/typography/stories/text.stories.tsx",
          "./typography/stories/title.one.stories.tsx":
            "./packages/typography/stories/title.one.stories.tsx",
          "./typography/stories/title.three.stories.tsx":
            "./packages/typography/stories/title.three.stories.tsx",
          "./typography/stories/title.two.stories.tsx":
            "./packages/typography/stories/title.two.stories.tsx",
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            "./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$");
      },
    "./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":
      function (module, exports) {
        function webpackEmptyContext(req) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        (webpackEmptyContext.keys = function () {
          return [];
        }),
          (webpackEmptyContext.resolve = webpackEmptyContext),
          (module.exports = webpackEmptyContext),
          (webpackEmptyContext.id =
            "./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$");
      },
    "./packages/design-tokens/dist/index.js": function (
      module,
      exports,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__("./node_modules/core-js/modules/es.object.create.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.define-property.js"
        );
      var __createBinding =
          (this && this.__createBinding) ||
          (Object.create
            ? function (o, m, k, k2) {
                void 0 === k2 && (k2 = k),
                  Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function get() {
                      return m[k];
                    },
                  });
              }
            : function (o, m, k, k2) {
                void 0 === k2 && (k2 = k), (o[k2] = m[k]);
              }),
        __exportStar =
          (this && this.__exportStar) ||
          function (m, exports) {
            for (var p in m)
              "default" === p ||
                Object.prototype.hasOwnProperty.call(exports, p) ||
                __createBinding(exports, m, p);
          };
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        __exportStar(
          __webpack_require__("./packages/design-tokens/dist/reset-css.js"),
          exports
        ),
        __exportStar(
          __webpack_require__(
            "./packages/design-tokens/dist/theme-provider.js"
          ),
          exports
        );
    },
    "./packages/design-tokens/dist/reset-css.js": function (
      module,
      exports,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__(
        "./node_modules/core-js/modules/es.object.define-property.js"
      );
      var __makeTemplateObject =
        (this && this.__makeTemplateObject) ||
        function (cooked, raw) {
          return (
            Object.defineProperty
              ? Object.defineProperty(cooked, "raw", { value: raw })
              : (cooked.raw = raw),
            cooked
          );
        };
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.ResetCSS = void 0);
      var templateObject_1,
        styled_components_1 = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        );
      exports.ResetCSS = (0, styled_components_1.createGlobalStyle)(
        templateObject_1 ||
          (templateObject_1 = __makeTemplateObject(
            [
              "\n  abbr,\n  address,\n  article,\n  aside,\n  audio,\n  b,\n  blockquote,\n  body,\n  body div,\n  caption,\n  cite,\n  code,\n  dd,\n  del,\n  details,\n  dfn,\n  dl,\n  dt,\n  em,\n  fieldset,\n  figure,\n  footer,\n  form,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  header,\n  html,\n  i,\n  iframe,\n  img,\n  ins,\n  kbd,\n  label,\n  legend,\n  li,\n  mark,\n  menu,\n  nav,\n  object,\n  ol,\n  p,\n  pre,\n  q,\n  samp,\n  section,\n  small,\n  span,\n  strong,\n  sub,\n  summary,\n  sup,\n  table,\n  tbody,\n  td,\n  tfoot,\n  th,\n  thead,\n  time,\n  tr,\n  ul,\n  var,\n  video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font-weight: 400;\n    vertical-align: baseline;\n    background: 0 0\n  }\n\n  article,\n  aside,\n  details,\n  figure,\n  footer,\n  header,\n  main,\n  nav,\n  section,\n  summary {\n    display: block\n  }\n\n  html {\n    box-sizing: border-box\n  }\n\n  *,\n  :after,\n  :before {\n    box-sizing: inherit\n  }\n\n  embed,\n  img,\n  object {\n    max-width: 100%\n  }\n\n  html {\n    overflow-y: scroll\n  }\n\n  ul {\n    list-style: none\n  }\n\n  blockquote,\n  q {\n    quotes: none\n  }\n\n  blockquote:after,\n  blockquote:before,\n  q:after,\n  q:before {\n    content: '';\n    content: none\n  }\n\n  a {\n    margin: 0;\n    padding: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n    background: 0 0\n  }\n\n  del {\n    text-decoration: line-through\n  }\n\n  abbr[title],\n  dfn[title] {\n    border-bottom: 1px dotted #000;\n    cursor: help\n  }\n\n  table {\n    border-collapse: separate;\n    border-spacing: 0\n  }\n\n  th {\n    font-weight: 700;\n    vertical-align: bottom\n  }\n\n  td {\n    font-weight: 400;\n    vertical-align: top\n  }\n\n  hr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #ccc;\n    margin: 1em 0;\n    padding: 0\n  }\n\n  input,\n  select {\n    vertical-align: middle\n  }\n\n  pre {\n    white-space: pre;\n    white-space: pre-wrap;\n    white-space: pre-line;\n    word-wrap: break-word\n  }\n\n  input[type=radio] {\n    vertical-align: text-bottom\n  }\n\n  input[type=checkbox] {\n    vertical-align: bottom\n  }\n\n  .ie7 input[type=checkbox] {\n    vertical-align: baseline\n  }\n\n  .ie6 input {\n    vertical-align: text-bottom\n  }\n\n  input,\n  select,\n  textarea {\n    font: 99% sans-serif\n  }\n\n  table {\n    font-size: inherit;\n    font: 100%\n  }\n\n  small {\n    font-size: 85%\n  }\n\n  strong {\n    font-weight: 700\n  }\n\n  td,\n  td img {\n    vertical-align: top\n  }\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative\n  }\n\n  sup {\n    top: -.5em\n  }\n\n  sub {\n    bottom: -.25em\n  }\n\n  code,\n  kbd,\n  pre,\n  samp {\n    font-family: monospace, sans-serif\n  }\n\n  .clickable,\n  button,\n  input[type=button],\n  input[type=file],\n  input[type=submit],\n  label {\n    cursor: pointer\n  }\n\n  button,\n  input,\n  select,\n  textarea {\n    margin: 0\n  }\n\n  button,\n  input[type=button] {\n    width: auto;\n    overflow: visible\n  }\n\n  .ie7 img {\n    -ms-interpolation-mode: bicubic\n  }\n\n  .clearfix:after {\n    content: \" \";\n    display: block;\n    clear: both\n  }\n",
            ],
            [
              "\n  abbr,\n  address,\n  article,\n  aside,\n  audio,\n  b,\n  blockquote,\n  body,\n  body div,\n  caption,\n  cite,\n  code,\n  dd,\n  del,\n  details,\n  dfn,\n  dl,\n  dt,\n  em,\n  fieldset,\n  figure,\n  footer,\n  form,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  header,\n  html,\n  i,\n  iframe,\n  img,\n  ins,\n  kbd,\n  label,\n  legend,\n  li,\n  mark,\n  menu,\n  nav,\n  object,\n  ol,\n  p,\n  pre,\n  q,\n  samp,\n  section,\n  small,\n  span,\n  strong,\n  sub,\n  summary,\n  sup,\n  table,\n  tbody,\n  td,\n  tfoot,\n  th,\n  thead,\n  time,\n  tr,\n  ul,\n  var,\n  video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font-weight: 400;\n    vertical-align: baseline;\n    background: 0 0\n  }\n\n  article,\n  aside,\n  details,\n  figure,\n  footer,\n  header,\n  main,\n  nav,\n  section,\n  summary {\n    display: block\n  }\n\n  html {\n    box-sizing: border-box\n  }\n\n  *,\n  :after,\n  :before {\n    box-sizing: inherit\n  }\n\n  embed,\n  img,\n  object {\n    max-width: 100%\n  }\n\n  html {\n    overflow-y: scroll\n  }\n\n  ul {\n    list-style: none\n  }\n\n  blockquote,\n  q {\n    quotes: none\n  }\n\n  blockquote:after,\n  blockquote:before,\n  q:after,\n  q:before {\n    content: '';\n    content: none\n  }\n\n  a {\n    margin: 0;\n    padding: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n    background: 0 0\n  }\n\n  del {\n    text-decoration: line-through\n  }\n\n  abbr[title],\n  dfn[title] {\n    border-bottom: 1px dotted #000;\n    cursor: help\n  }\n\n  table {\n    border-collapse: separate;\n    border-spacing: 0\n  }\n\n  th {\n    font-weight: 700;\n    vertical-align: bottom\n  }\n\n  td {\n    font-weight: 400;\n    vertical-align: top\n  }\n\n  hr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #ccc;\n    margin: 1em 0;\n    padding: 0\n  }\n\n  input,\n  select {\n    vertical-align: middle\n  }\n\n  pre {\n    white-space: pre;\n    white-space: pre-wrap;\n    white-space: pre-line;\n    word-wrap: break-word\n  }\n\n  input[type=radio] {\n    vertical-align: text-bottom\n  }\n\n  input[type=checkbox] {\n    vertical-align: bottom\n  }\n\n  .ie7 input[type=checkbox] {\n    vertical-align: baseline\n  }\n\n  .ie6 input {\n    vertical-align: text-bottom\n  }\n\n  input,\n  select,\n  textarea {\n    font: 99% sans-serif\n  }\n\n  table {\n    font-size: inherit;\n    font: 100%\n  }\n\n  small {\n    font-size: 85%\n  }\n\n  strong {\n    font-weight: 700\n  }\n\n  td,\n  td img {\n    vertical-align: top\n  }\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative\n  }\n\n  sup {\n    top: -.5em\n  }\n\n  sub {\n    bottom: -.25em\n  }\n\n  code,\n  kbd,\n  pre,\n  samp {\n    font-family: monospace, sans-serif\n  }\n\n  .clickable,\n  button,\n  input[type=button],\n  input[type=file],\n  input[type=submit],\n  label {\n    cursor: pointer\n  }\n\n  button,\n  input,\n  select,\n  textarea {\n    margin: 0\n  }\n\n  button,\n  input[type=button] {\n    width: auto;\n    overflow: visible\n  }\n\n  .ie7 img {\n    -ms-interpolation-mode: bicubic\n  }\n\n  .clearfix:after {\n    content: \" \";\n    display: block;\n    clear: both\n  }\n",
            ]
          ))
      );
    },
    "./packages/design-tokens/dist/theme-provider.js": function (
      module,
      exports,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__(
        "./node_modules/core-js/modules/es.object.define-property.js"
      ),
        Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.ThemeProvider = void 0);
      var React = __webpack_require__("./node_modules/react/index.js"),
        styled_components_1 = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        tokens_1 = __webpack_require__(
          "./packages/design-tokens/dist/tokens.js"
        ),
        ThemeProvider = function ThemeProvider(_a) {
          var _b = _a.theme,
            theme = void 0 === _b ? tokens_1.tokens : _b,
            children = _a.children;
          return React.createElement(
            styled_components_1.ThemeProvider,
            { theme: theme },
            children
          );
        };
      (exports.ThemeProvider = ThemeProvider),
        (ThemeProvider.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "ThemeProvider",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "packages/design-tokens/dist/theme-provider.js"
          ] = {
            name: "ThemeProvider",
            docgenInfo: ThemeProvider.__docgenInfo,
            path: "packages/design-tokens/dist/theme-provider.js",
          });
    },
    "./packages/design-tokens/dist/tokens.js": function (
      module,
      exports,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__(
        "./node_modules/core-js/modules/es.object.define-property.js"
      ),
        Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.tokens = void 0),
        (exports.tokens = {
          fontSizes: {
            title1: 36,
            title2: 30,
            title3: 26,
            base: 21,
            small: 16,
          },
          colors: { text: "rgb(29, 29, 31)" },
          space: [
            0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
          ],
          fontWeights: { light: 200, medium: 400, bold: 600 },
          lineHeights: { title: 1.7, base: 1.5, small: 1.5 },
          letterSpacings: { title: 0.012, base: 0.012, small: 0.012 },
          wordSpacings: { title: 0.016, base: 0.016, small: 0.016 },
          fontFamilies: {
            title: '"Libre Franklin", sans-serif',
            base: '"Inter", sans-serif',
            small: '"Inter", sans-serif',
          },
        });
    },
    "./packages/layout/src/components/box.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return Box;
      });
      __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var _templateObject,
        styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/styled-system/dist/index.esm.js"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      var _Box = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div(
          _templateObject ||
            (_templateObject = (function _taggedTemplateLiteralLoose(
              strings,
              raw
            ) {
              return (
                raw || (raw = strings.slice(0)), (strings.raw = raw), strings
              );
            })(["\n  ", "\n"])),
          Object(styled_system__WEBPACK_IMPORTED_MODULE_4__.b)(
            styled_system__WEBPACK_IMPORTED_MODULE_4__.f,
            styled_system__WEBPACK_IMPORTED_MODULE_4__.e,
            styled_system__WEBPACK_IMPORTED_MODULE_4__.a
          )
        ),
        Box = function Box(args) {
          return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
            _Box,
            Object.assign({}, args)
          );
        };
      (Box.displayName = "Box"),
        (_Box.defaultProps = {
          backgroundColor: "red",
          width: "100px",
          height: "100px",
        });
      try {
        (_Box.displayName = "_Box"),
          (_Box.__docgenInfo = {
            description: "",
            displayName: "_Box",
            props: {
              ref: {
                defaultValue: null,
                description: "",
                name: "ref",
                required: !1,
                type: { name: "Ref<HTMLDivElement>" },
              },
              theme: {
                defaultValue: null,
                description: "",
                name: "theme",
                required: !1,
                type: { name: "any" },
              },
              as: {
                defaultValue: null,
                description: "",
                name: "as",
                required: !1,
                type: { name: "undefined" },
              },
              forwardedAs: {
                defaultValue: null,
                description: "",
                name: "forwardedAs",
                required: !1,
                type: { name: "undefined" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/layout/src/components/box.tsx#_Box"
            ] = {
              docgenInfo: _Box.__docgenInfo,
              name: "_Box",
              path: "packages/layout/src/components/box.tsx#_Box",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Box.displayName = "Box"),
          (Box.__docgenInfo = {
            description: "",
            displayName: "Box",
            props: {
              p: {
                defaultValue: null,
                description: "",
                name: "p",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              slot: {
                defaultValue: null,
                description: "",
                name: "slot",
                required: !1,
                type: { name: "string" },
              },
              style: {
                defaultValue: null,
                description: "",
                name: "style",
                required: !1,
                type: { name: "CSSProperties" },
              },
              title: {
                defaultValue: null,
                description: "",
                name: "title",
                required: !1,
                type: { name: "string" },
              },
              ref: {
                defaultValue: null,
                description: "",
                name: "ref",
                required: !1,
                type: {
                  name: "RefObject<HTMLDivElement> | ((instance: HTMLDivElement) => void)",
                },
              },
              defaultChecked: {
                defaultValue: null,
                description: "",
                name: "defaultChecked",
                required: !1,
                type: { name: "boolean" },
              },
              defaultValue: {
                defaultValue: null,
                description: "",
                name: "defaultValue",
                required: !1,
                type: { name: "string | number | readonly string[]" },
              },
              suppressContentEditableWarning: {
                defaultValue: null,
                description: "",
                name: "suppressContentEditableWarning",
                required: !1,
                type: { name: "boolean" },
              },
              suppressHydrationWarning: {
                defaultValue: null,
                description: "",
                name: "suppressHydrationWarning",
                required: !1,
                type: { name: "boolean" },
              },
              accessKey: {
                defaultValue: null,
                description: "",
                name: "accessKey",
                required: !1,
                type: { name: "string" },
              },
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              contentEditable: {
                defaultValue: null,
                description: "",
                name: "contentEditable",
                required: !1,
                type: { name: 'boolean | "true" | "false" | "inherit"' },
              },
              contextMenu: {
                defaultValue: null,
                description: "",
                name: "contextMenu",
                required: !1,
                type: { name: "string" },
              },
              dir: {
                defaultValue: null,
                description: "",
                name: "dir",
                required: !1,
                type: { name: "string" },
              },
              draggable: {
                defaultValue: null,
                description: "",
                name: "draggable",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              hidden: {
                defaultValue: null,
                description: "",
                name: "hidden",
                required: !1,
                type: { name: "boolean" },
              },
              id: {
                defaultValue: null,
                description: "",
                name: "id",
                required: !1,
                type: { name: "string" },
              },
              lang: {
                defaultValue: null,
                description: "",
                name: "lang",
                required: !1,
                type: { name: "string" },
              },
              placeholder: {
                defaultValue: null,
                description: "",
                name: "placeholder",
                required: !1,
                type: { name: "string" },
              },
              spellCheck: {
                defaultValue: null,
                description: "",
                name: "spellCheck",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              tabIndex: {
                defaultValue: null,
                description: "",
                name: "tabIndex",
                required: !1,
                type: { name: "number" },
              },
              translate: {
                defaultValue: null,
                description: "",
                name: "translate",
                required: !1,
                type: { name: '"yes" | "no"' },
              },
              radioGroup: {
                defaultValue: null,
                description: "",
                name: "radioGroup",
                required: !1,
                type: { name: "string" },
              },
              role: {
                defaultValue: null,
                description: "",
                name: "role",
                required: !1,
                type: { name: "AriaRole" },
              },
              about: {
                defaultValue: null,
                description: "",
                name: "about",
                required: !1,
                type: { name: "string" },
              },
              datatype: {
                defaultValue: null,
                description: "",
                name: "datatype",
                required: !1,
                type: { name: "string" },
              },
              inlist: {
                defaultValue: null,
                description: "",
                name: "inlist",
                required: !1,
                type: { name: "any" },
              },
              prefix: {
                defaultValue: null,
                description: "",
                name: "prefix",
                required: !1,
                type: { name: "string" },
              },
              property: {
                defaultValue: null,
                description: "",
                name: "property",
                required: !1,
                type: { name: "string" },
              },
              resource: {
                defaultValue: null,
                description: "",
                name: "resource",
                required: !1,
                type: { name: "string" },
              },
              typeof: {
                defaultValue: null,
                description: "",
                name: "typeof",
                required: !1,
                type: { name: "string" },
              },
              vocab: {
                defaultValue: null,
                description: "",
                name: "vocab",
                required: !1,
                type: { name: "string" },
              },
              autoCapitalize: {
                defaultValue: null,
                description: "",
                name: "autoCapitalize",
                required: !1,
                type: { name: "string" },
              },
              autoCorrect: {
                defaultValue: null,
                description: "",
                name: "autoCorrect",
                required: !1,
                type: { name: "string" },
              },
              autoSave: {
                defaultValue: null,
                description: "",
                name: "autoSave",
                required: !1,
                type: { name: "string" },
              },
              color: {
                defaultValue: null,
                description: "",
                name: "color",
                required: !1,
                type: {
                  name: "string & ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              itemProp: {
                defaultValue: null,
                description: "",
                name: "itemProp",
                required: !1,
                type: { name: "string" },
              },
              itemScope: {
                defaultValue: null,
                description: "",
                name: "itemScope",
                required: !1,
                type: { name: "boolean" },
              },
              itemType: {
                defaultValue: null,
                description: "",
                name: "itemType",
                required: !1,
                type: { name: "string" },
              },
              itemID: {
                defaultValue: null,
                description: "",
                name: "itemID",
                required: !1,
                type: { name: "string" },
              },
              itemRef: {
                defaultValue: null,
                description: "",
                name: "itemRef",
                required: !1,
                type: { name: "string" },
              },
              results: {
                defaultValue: null,
                description: "",
                name: "results",
                required: !1,
                type: { name: "number" },
              },
              security: {
                defaultValue: null,
                description: "",
                name: "security",
                required: !1,
                type: { name: "string" },
              },
              unselectable: {
                defaultValue: null,
                description: "",
                name: "unselectable",
                required: !1,
                type: { name: '"on" | "off"' },
              },
              inputMode: {
                defaultValue: null,
                description: "",
                name: "inputMode",
                required: !1,
                type: {
                  name: '"none" | "search" | "text" | "tel" | "url" | "email" | "numeric" | "decimal"',
                },
              },
              is: {
                defaultValue: null,
                description: "",
                name: "is",
                required: !1,
                type: { name: "string" },
              },
              "aria-activedescendant": {
                defaultValue: null,
                description: "",
                name: "aria-activedescendant",
                required: !1,
                type: { name: "string" },
              },
              "aria-atomic": {
                defaultValue: null,
                description: "",
                name: "aria-atomic",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-autocomplete": {
                defaultValue: null,
                description: "",
                name: "aria-autocomplete",
                required: !1,
                type: { name: '"list" | "none" | "inline" | "both"' },
              },
              "aria-busy": {
                defaultValue: null,
                description: "",
                name: "aria-busy",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-checked": {
                defaultValue: null,
                description: "",
                name: "aria-checked",
                required: !1,
                type: { name: 'boolean | "true" | "false" | "mixed"' },
              },
              "aria-colcount": {
                defaultValue: null,
                description: "",
                name: "aria-colcount",
                required: !1,
                type: { name: "number" },
              },
              "aria-colindex": {
                defaultValue: null,
                description: "",
                name: "aria-colindex",
                required: !1,
                type: { name: "number" },
              },
              "aria-colspan": {
                defaultValue: null,
                description: "",
                name: "aria-colspan",
                required: !1,
                type: { name: "number" },
              },
              "aria-controls": {
                defaultValue: null,
                description: "",
                name: "aria-controls",
                required: !1,
                type: { name: "string" },
              },
              "aria-current": {
                defaultValue: null,
                description: "",
                name: "aria-current",
                required: !1,
                type: {
                  name: 'boolean | "true" | "false" | "time" | "page" | "step" | "location" | "date"',
                },
              },
              "aria-describedby": {
                defaultValue: null,
                description: "",
                name: "aria-describedby",
                required: !1,
                type: { name: "string" },
              },
              "aria-details": {
                defaultValue: null,
                description: "",
                name: "aria-details",
                required: !1,
                type: { name: "string" },
              },
              "aria-disabled": {
                defaultValue: null,
                description: "",
                name: "aria-disabled",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-dropeffect": {
                defaultValue: null,
                description: "",
                name: "aria-dropeffect",
                required: !1,
                type: {
                  name: '"link" | "none" | "copy" | "execute" | "move" | "popup"',
                },
              },
              "aria-errormessage": {
                defaultValue: null,
                description: "",
                name: "aria-errormessage",
                required: !1,
                type: { name: "string" },
              },
              "aria-expanded": {
                defaultValue: null,
                description: "",
                name: "aria-expanded",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-flowto": {
                defaultValue: null,
                description: "",
                name: "aria-flowto",
                required: !1,
                type: { name: "string" },
              },
              "aria-grabbed": {
                defaultValue: null,
                description: "",
                name: "aria-grabbed",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-haspopup": {
                defaultValue: null,
                description: "",
                name: "aria-haspopup",
                required: !1,
                type: {
                  name: 'boolean | "true" | "false" | "dialog" | "grid" | "listbox" | "menu" | "tree"',
                },
              },
              "aria-hidden": {
                defaultValue: null,
                description: "",
                name: "aria-hidden",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-invalid": {
                defaultValue: null,
                description: "",
                name: "aria-invalid",
                required: !1,
                type: {
                  name: 'boolean | "true" | "false" | "grammar" | "spelling"',
                },
              },
              "aria-keyshortcuts": {
                defaultValue: null,
                description: "",
                name: "aria-keyshortcuts",
                required: !1,
                type: { name: "string" },
              },
              "aria-label": {
                defaultValue: null,
                description: "",
                name: "aria-label",
                required: !1,
                type: { name: "string" },
              },
              "aria-labelledby": {
                defaultValue: null,
                description: "",
                name: "aria-labelledby",
                required: !1,
                type: { name: "string" },
              },
              "aria-level": {
                defaultValue: null,
                description: "",
                name: "aria-level",
                required: !1,
                type: { name: "number" },
              },
              "aria-live": {
                defaultValue: null,
                description: "",
                name: "aria-live",
                required: !1,
                type: { name: '"off" | "assertive" | "polite"' },
              },
              "aria-modal": {
                defaultValue: null,
                description: "",
                name: "aria-modal",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-multiline": {
                defaultValue: null,
                description: "",
                name: "aria-multiline",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-multiselectable": {
                defaultValue: null,
                description: "",
                name: "aria-multiselectable",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-orientation": {
                defaultValue: null,
                description: "",
                name: "aria-orientation",
                required: !1,
                type: { name: '"horizontal" | "vertical"' },
              },
              "aria-owns": {
                defaultValue: null,
                description: "",
                name: "aria-owns",
                required: !1,
                type: { name: "string" },
              },
              "aria-placeholder": {
                defaultValue: null,
                description: "",
                name: "aria-placeholder",
                required: !1,
                type: { name: "string" },
              },
              "aria-posinset": {
                defaultValue: null,
                description: "",
                name: "aria-posinset",
                required: !1,
                type: { name: "number" },
              },
              "aria-pressed": {
                defaultValue: null,
                description: "",
                name: "aria-pressed",
                required: !1,
                type: { name: 'boolean | "true" | "false" | "mixed"' },
              },
              "aria-readonly": {
                defaultValue: null,
                description: "",
                name: "aria-readonly",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-relevant": {
                defaultValue: null,
                description: "",
                name: "aria-relevant",
                required: !1,
                type: {
                  name: '"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals"',
                },
              },
              "aria-required": {
                defaultValue: null,
                description: "",
                name: "aria-required",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-roledescription": {
                defaultValue: null,
                description: "",
                name: "aria-roledescription",
                required: !1,
                type: { name: "string" },
              },
              "aria-rowcount": {
                defaultValue: null,
                description: "",
                name: "aria-rowcount",
                required: !1,
                type: { name: "number" },
              },
              "aria-rowindex": {
                defaultValue: null,
                description: "",
                name: "aria-rowindex",
                required: !1,
                type: { name: "number" },
              },
              "aria-rowspan": {
                defaultValue: null,
                description: "",
                name: "aria-rowspan",
                required: !1,
                type: { name: "number" },
              },
              "aria-selected": {
                defaultValue: null,
                description: "",
                name: "aria-selected",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-setsize": {
                defaultValue: null,
                description: "",
                name: "aria-setsize",
                required: !1,
                type: { name: "number" },
              },
              "aria-sort": {
                defaultValue: null,
                description: "",
                name: "aria-sort",
                required: !1,
                type: { name: '"none" | "ascending" | "descending" | "other"' },
              },
              "aria-valuemax": {
                defaultValue: null,
                description: "",
                name: "aria-valuemax",
                required: !1,
                type: { name: "number" },
              },
              "aria-valuemin": {
                defaultValue: null,
                description: "",
                name: "aria-valuemin",
                required: !1,
                type: { name: "number" },
              },
              "aria-valuenow": {
                defaultValue: null,
                description: "",
                name: "aria-valuenow",
                required: !1,
                type: { name: "number" },
              },
              "aria-valuetext": {
                defaultValue: null,
                description: "",
                name: "aria-valuetext",
                required: !1,
                type: { name: "string" },
              },
              dangerouslySetInnerHTML: {
                defaultValue: null,
                description: "",
                name: "dangerouslySetInnerHTML",
                required: !1,
                type: { name: "{ __html: string; }" },
              },
              onCopy: {
                defaultValue: null,
                description: "",
                name: "onCopy",
                required: !1,
                type: { name: "ClipboardEventHandler<HTMLDivElement>" },
              },
              onCopyCapture: {
                defaultValue: null,
                description: "",
                name: "onCopyCapture",
                required: !1,
                type: { name: "ClipboardEventHandler<HTMLDivElement>" },
              },
              onCut: {
                defaultValue: null,
                description: "",
                name: "onCut",
                required: !1,
                type: { name: "ClipboardEventHandler<HTMLDivElement>" },
              },
              onCutCapture: {
                defaultValue: null,
                description: "",
                name: "onCutCapture",
                required: !1,
                type: { name: "ClipboardEventHandler<HTMLDivElement>" },
              },
              onPaste: {
                defaultValue: null,
                description: "",
                name: "onPaste",
                required: !1,
                type: { name: "ClipboardEventHandler<HTMLDivElement>" },
              },
              onPasteCapture: {
                defaultValue: null,
                description: "",
                name: "onPasteCapture",
                required: !1,
                type: { name: "ClipboardEventHandler<HTMLDivElement>" },
              },
              onCompositionEnd: {
                defaultValue: null,
                description: "",
                name: "onCompositionEnd",
                required: !1,
                type: { name: "CompositionEventHandler<HTMLDivElement>" },
              },
              onCompositionEndCapture: {
                defaultValue: null,
                description: "",
                name: "onCompositionEndCapture",
                required: !1,
                type: { name: "CompositionEventHandler<HTMLDivElement>" },
              },
              onCompositionStart: {
                defaultValue: null,
                description: "",
                name: "onCompositionStart",
                required: !1,
                type: { name: "CompositionEventHandler<HTMLDivElement>" },
              },
              onCompositionStartCapture: {
                defaultValue: null,
                description: "",
                name: "onCompositionStartCapture",
                required: !1,
                type: { name: "CompositionEventHandler<HTMLDivElement>" },
              },
              onCompositionUpdate: {
                defaultValue: null,
                description: "",
                name: "onCompositionUpdate",
                required: !1,
                type: { name: "CompositionEventHandler<HTMLDivElement>" },
              },
              onCompositionUpdateCapture: {
                defaultValue: null,
                description: "",
                name: "onCompositionUpdateCapture",
                required: !1,
                type: { name: "CompositionEventHandler<HTMLDivElement>" },
              },
              onFocus: {
                defaultValue: null,
                description: "",
                name: "onFocus",
                required: !1,
                type: { name: "FocusEventHandler<HTMLDivElement>" },
              },
              onFocusCapture: {
                defaultValue: null,
                description: "",
                name: "onFocusCapture",
                required: !1,
                type: { name: "FocusEventHandler<HTMLDivElement>" },
              },
              onBlur: {
                defaultValue: null,
                description: "",
                name: "onBlur",
                required: !1,
                type: { name: "FocusEventHandler<HTMLDivElement>" },
              },
              onBlurCapture: {
                defaultValue: null,
                description: "",
                name: "onBlurCapture",
                required: !1,
                type: { name: "FocusEventHandler<HTMLDivElement>" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onChangeCapture: {
                defaultValue: null,
                description: "",
                name: "onChangeCapture",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onBeforeInput: {
                defaultValue: null,
                description: "",
                name: "onBeforeInput",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onBeforeInputCapture: {
                defaultValue: null,
                description: "",
                name: "onBeforeInputCapture",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onInput: {
                defaultValue: null,
                description: "",
                name: "onInput",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onInputCapture: {
                defaultValue: null,
                description: "",
                name: "onInputCapture",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onReset: {
                defaultValue: null,
                description: "",
                name: "onReset",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onResetCapture: {
                defaultValue: null,
                description: "",
                name: "onResetCapture",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onSubmit: {
                defaultValue: null,
                description: "",
                name: "onSubmit",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onSubmitCapture: {
                defaultValue: null,
                description: "",
                name: "onSubmitCapture",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onInvalid: {
                defaultValue: null,
                description: "",
                name: "onInvalid",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onInvalidCapture: {
                defaultValue: null,
                description: "",
                name: "onInvalidCapture",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onLoad: {
                defaultValue: null,
                description: "",
                name: "onLoad",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onLoadCapture: {
                defaultValue: null,
                description: "",
                name: "onLoadCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onError: {
                defaultValue: null,
                description: "",
                name: "onError",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onErrorCapture: {
                defaultValue: null,
                description: "",
                name: "onErrorCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onKeyDown: {
                defaultValue: null,
                description: "",
                name: "onKeyDown",
                required: !1,
                type: { name: "KeyboardEventHandler<HTMLDivElement>" },
              },
              onKeyDownCapture: {
                defaultValue: null,
                description: "",
                name: "onKeyDownCapture",
                required: !1,
                type: { name: "KeyboardEventHandler<HTMLDivElement>" },
              },
              onKeyPress: {
                defaultValue: null,
                description: "",
                name: "onKeyPress",
                required: !1,
                type: { name: "KeyboardEventHandler<HTMLDivElement>" },
              },
              onKeyPressCapture: {
                defaultValue: null,
                description: "",
                name: "onKeyPressCapture",
                required: !1,
                type: { name: "KeyboardEventHandler<HTMLDivElement>" },
              },
              onKeyUp: {
                defaultValue: null,
                description: "",
                name: "onKeyUp",
                required: !1,
                type: { name: "KeyboardEventHandler<HTMLDivElement>" },
              },
              onKeyUpCapture: {
                defaultValue: null,
                description: "",
                name: "onKeyUpCapture",
                required: !1,
                type: { name: "KeyboardEventHandler<HTMLDivElement>" },
              },
              onAbort: {
                defaultValue: null,
                description: "",
                name: "onAbort",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onAbortCapture: {
                defaultValue: null,
                description: "",
                name: "onAbortCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onCanPlay: {
                defaultValue: null,
                description: "",
                name: "onCanPlay",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onCanPlayCapture: {
                defaultValue: null,
                description: "",
                name: "onCanPlayCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onCanPlayThrough: {
                defaultValue: null,
                description: "",
                name: "onCanPlayThrough",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onCanPlayThroughCapture: {
                defaultValue: null,
                description: "",
                name: "onCanPlayThroughCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onDurationChange: {
                defaultValue: null,
                description: "",
                name: "onDurationChange",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onDurationChangeCapture: {
                defaultValue: null,
                description: "",
                name: "onDurationChangeCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onEmptied: {
                defaultValue: null,
                description: "",
                name: "onEmptied",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onEmptiedCapture: {
                defaultValue: null,
                description: "",
                name: "onEmptiedCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onEncrypted: {
                defaultValue: null,
                description: "",
                name: "onEncrypted",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onEncryptedCapture: {
                defaultValue: null,
                description: "",
                name: "onEncryptedCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onEnded: {
                defaultValue: null,
                description: "",
                name: "onEnded",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onEndedCapture: {
                defaultValue: null,
                description: "",
                name: "onEndedCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onLoadedData: {
                defaultValue: null,
                description: "",
                name: "onLoadedData",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onLoadedDataCapture: {
                defaultValue: null,
                description: "",
                name: "onLoadedDataCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onLoadedMetadata: {
                defaultValue: null,
                description: "",
                name: "onLoadedMetadata",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onLoadedMetadataCapture: {
                defaultValue: null,
                description: "",
                name: "onLoadedMetadataCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onLoadStart: {
                defaultValue: null,
                description: "",
                name: "onLoadStart",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onLoadStartCapture: {
                defaultValue: null,
                description: "",
                name: "onLoadStartCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onPause: {
                defaultValue: null,
                description: "",
                name: "onPause",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onPauseCapture: {
                defaultValue: null,
                description: "",
                name: "onPauseCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onPlay: {
                defaultValue: null,
                description: "",
                name: "onPlay",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onPlayCapture: {
                defaultValue: null,
                description: "",
                name: "onPlayCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onPlaying: {
                defaultValue: null,
                description: "",
                name: "onPlaying",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onPlayingCapture: {
                defaultValue: null,
                description: "",
                name: "onPlayingCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onProgress: {
                defaultValue: null,
                description: "",
                name: "onProgress",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onProgressCapture: {
                defaultValue: null,
                description: "",
                name: "onProgressCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onRateChange: {
                defaultValue: null,
                description: "",
                name: "onRateChange",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onRateChangeCapture: {
                defaultValue: null,
                description: "",
                name: "onRateChangeCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onSeeked: {
                defaultValue: null,
                description: "",
                name: "onSeeked",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onSeekedCapture: {
                defaultValue: null,
                description: "",
                name: "onSeekedCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onSeeking: {
                defaultValue: null,
                description: "",
                name: "onSeeking",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onSeekingCapture: {
                defaultValue: null,
                description: "",
                name: "onSeekingCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onStalled: {
                defaultValue: null,
                description: "",
                name: "onStalled",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onStalledCapture: {
                defaultValue: null,
                description: "",
                name: "onStalledCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onSuspend: {
                defaultValue: null,
                description: "",
                name: "onSuspend",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onSuspendCapture: {
                defaultValue: null,
                description: "",
                name: "onSuspendCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onTimeUpdate: {
                defaultValue: null,
                description: "",
                name: "onTimeUpdate",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onTimeUpdateCapture: {
                defaultValue: null,
                description: "",
                name: "onTimeUpdateCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onVolumeChange: {
                defaultValue: null,
                description: "",
                name: "onVolumeChange",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onVolumeChangeCapture: {
                defaultValue: null,
                description: "",
                name: "onVolumeChangeCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onWaiting: {
                defaultValue: null,
                description: "",
                name: "onWaiting",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onWaitingCapture: {
                defaultValue: null,
                description: "",
                name: "onWaitingCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onAuxClick: {
                defaultValue: null,
                description: "",
                name: "onAuxClick",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onAuxClickCapture: {
                defaultValue: null,
                description: "",
                name: "onAuxClickCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onClick: {
                defaultValue: null,
                description: "",
                name: "onClick",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onClickCapture: {
                defaultValue: null,
                description: "",
                name: "onClickCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onContextMenu: {
                defaultValue: null,
                description: "",
                name: "onContextMenu",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onContextMenuCapture: {
                defaultValue: null,
                description: "",
                name: "onContextMenuCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onDoubleClick: {
                defaultValue: null,
                description: "",
                name: "onDoubleClick",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onDoubleClickCapture: {
                defaultValue: null,
                description: "",
                name: "onDoubleClickCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onDrag: {
                defaultValue: null,
                description: "",
                name: "onDrag",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragCapture: {
                defaultValue: null,
                description: "",
                name: "onDragCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragEnd: {
                defaultValue: null,
                description: "",
                name: "onDragEnd",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragEndCapture: {
                defaultValue: null,
                description: "",
                name: "onDragEndCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragEnter: {
                defaultValue: null,
                description: "",
                name: "onDragEnter",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragEnterCapture: {
                defaultValue: null,
                description: "",
                name: "onDragEnterCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragExit: {
                defaultValue: null,
                description: "",
                name: "onDragExit",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragExitCapture: {
                defaultValue: null,
                description: "",
                name: "onDragExitCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragLeave: {
                defaultValue: null,
                description: "",
                name: "onDragLeave",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragLeaveCapture: {
                defaultValue: null,
                description: "",
                name: "onDragLeaveCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragOver: {
                defaultValue: null,
                description: "",
                name: "onDragOver",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragOverCapture: {
                defaultValue: null,
                description: "",
                name: "onDragOverCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragStart: {
                defaultValue: null,
                description: "",
                name: "onDragStart",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragStartCapture: {
                defaultValue: null,
                description: "",
                name: "onDragStartCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDrop: {
                defaultValue: null,
                description: "",
                name: "onDrop",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDropCapture: {
                defaultValue: null,
                description: "",
                name: "onDropCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onMouseDown: {
                defaultValue: null,
                description: "",
                name: "onMouseDown",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseDownCapture: {
                defaultValue: null,
                description: "",
                name: "onMouseDownCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseEnter: {
                defaultValue: null,
                description: "",
                name: "onMouseEnter",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseLeave: {
                defaultValue: null,
                description: "",
                name: "onMouseLeave",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseMove: {
                defaultValue: null,
                description: "",
                name: "onMouseMove",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseMoveCapture: {
                defaultValue: null,
                description: "",
                name: "onMouseMoveCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseOut: {
                defaultValue: null,
                description: "",
                name: "onMouseOut",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseOutCapture: {
                defaultValue: null,
                description: "",
                name: "onMouseOutCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseOver: {
                defaultValue: null,
                description: "",
                name: "onMouseOver",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseOverCapture: {
                defaultValue: null,
                description: "",
                name: "onMouseOverCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseUp: {
                defaultValue: null,
                description: "",
                name: "onMouseUp",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseUpCapture: {
                defaultValue: null,
                description: "",
                name: "onMouseUpCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onSelect: {
                defaultValue: null,
                description: "",
                name: "onSelect",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onSelectCapture: {
                defaultValue: null,
                description: "",
                name: "onSelectCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onTouchCancel: {
                defaultValue: null,
                description: "",
                name: "onTouchCancel",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onTouchCancelCapture: {
                defaultValue: null,
                description: "",
                name: "onTouchCancelCapture",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onTouchEnd: {
                defaultValue: null,
                description: "",
                name: "onTouchEnd",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onTouchEndCapture: {
                defaultValue: null,
                description: "",
                name: "onTouchEndCapture",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onTouchMove: {
                defaultValue: null,
                description: "",
                name: "onTouchMove",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onTouchMoveCapture: {
                defaultValue: null,
                description: "",
                name: "onTouchMoveCapture",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onTouchStart: {
                defaultValue: null,
                description: "",
                name: "onTouchStart",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onTouchStartCapture: {
                defaultValue: null,
                description: "",
                name: "onTouchStartCapture",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onPointerDown: {
                defaultValue: null,
                description: "",
                name: "onPointerDown",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerDownCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerDownCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerMove: {
                defaultValue: null,
                description: "",
                name: "onPointerMove",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerMoveCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerMoveCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerUp: {
                defaultValue: null,
                description: "",
                name: "onPointerUp",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerUpCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerUpCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerCancel: {
                defaultValue: null,
                description: "",
                name: "onPointerCancel",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerCancelCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerCancelCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerEnter: {
                defaultValue: null,
                description: "",
                name: "onPointerEnter",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerEnterCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerEnterCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerLeave: {
                defaultValue: null,
                description: "",
                name: "onPointerLeave",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerLeaveCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerLeaveCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerOver: {
                defaultValue: null,
                description: "",
                name: "onPointerOver",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerOverCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerOverCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerOut: {
                defaultValue: null,
                description: "",
                name: "onPointerOut",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerOutCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerOutCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onGotPointerCapture: {
                defaultValue: null,
                description: "",
                name: "onGotPointerCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onGotPointerCaptureCapture: {
                defaultValue: null,
                description: "",
                name: "onGotPointerCaptureCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onLostPointerCapture: {
                defaultValue: null,
                description: "",
                name: "onLostPointerCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onLostPointerCaptureCapture: {
                defaultValue: null,
                description: "",
                name: "onLostPointerCaptureCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onScroll: {
                defaultValue: null,
                description: "",
                name: "onScroll",
                required: !1,
                type: { name: "UIEventHandler<HTMLDivElement>" },
              },
              onScrollCapture: {
                defaultValue: null,
                description: "",
                name: "onScrollCapture",
                required: !1,
                type: { name: "UIEventHandler<HTMLDivElement>" },
              },
              onWheel: {
                defaultValue: null,
                description: "",
                name: "onWheel",
                required: !1,
                type: { name: "WheelEventHandler<HTMLDivElement>" },
              },
              onWheelCapture: {
                defaultValue: null,
                description: "",
                name: "onWheelCapture",
                required: !1,
                type: { name: "WheelEventHandler<HTMLDivElement>" },
              },
              onAnimationStart: {
                defaultValue: null,
                description: "",
                name: "onAnimationStart",
                required: !1,
                type: { name: "AnimationEventHandler<HTMLDivElement>" },
              },
              onAnimationStartCapture: {
                defaultValue: null,
                description: "",
                name: "onAnimationStartCapture",
                required: !1,
                type: { name: "AnimationEventHandler<HTMLDivElement>" },
              },
              onAnimationEnd: {
                defaultValue: null,
                description: "",
                name: "onAnimationEnd",
                required: !1,
                type: { name: "AnimationEventHandler<HTMLDivElement>" },
              },
              onAnimationEndCapture: {
                defaultValue: null,
                description: "",
                name: "onAnimationEndCapture",
                required: !1,
                type: { name: "AnimationEventHandler<HTMLDivElement>" },
              },
              onAnimationIteration: {
                defaultValue: null,
                description: "",
                name: "onAnimationIteration",
                required: !1,
                type: { name: "AnimationEventHandler<HTMLDivElement>" },
              },
              onAnimationIterationCapture: {
                defaultValue: null,
                description: "",
                name: "onAnimationIterationCapture",
                required: !1,
                type: { name: "AnimationEventHandler<HTMLDivElement>" },
              },
              onTransitionEnd: {
                defaultValue: null,
                description: "",
                name: "onTransitionEnd",
                required: !1,
                type: { name: "TransitionEventHandler<HTMLDivElement>" },
              },
              onTransitionEndCapture: {
                defaultValue: null,
                description: "",
                name: "onTransitionEndCapture",
                required: !1,
                type: { name: "TransitionEventHandler<HTMLDivElement>" },
              },
              width: {
                defaultValue: { value: "100px" },
                description: "",
                name: "width",
                required: !1,
                type: {
                  name: "ResponsiveValue<Width<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              height: {
                defaultValue: { value: "100px" },
                description: "",
                name: "height",
                required: !1,
                type: {
                  name: "ResponsiveValue<Height<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              minWidth: {
                defaultValue: null,
                description: "",
                name: "minWidth",
                required: !1,
                type: {
                  name: "ResponsiveValue<MinWidth<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              minHeight: {
                defaultValue: null,
                description: "",
                name: "minHeight",
                required: !1,
                type: {
                  name: "ResponsiveValue<MinHeight<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              maxWidth: {
                defaultValue: null,
                description: "",
                name: "maxWidth",
                required: !1,
                type: {
                  name: "ResponsiveValue<MaxWidth<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              maxHeight: {
                defaultValue: null,
                description: "",
                name: "maxHeight",
                required: !1,
                type: {
                  name: "ResponsiveValue<MaxHeight<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              display: {
                defaultValue: null,
                description: "",
                name: "display",
                required: !1,
                type: {
                  name: "ResponsiveValue<Display, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              verticalAlign: {
                defaultValue: null,
                description: "",
                name: "verticalAlign",
                required: !1,
                type: {
                  name: "ResponsiveValue<VerticalAlign<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              size: {
                defaultValue: null,
                description: "",
                name: "size",
                required: !1,
                type: {
                  name: "ResponsiveValue<Height<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              overflow: {
                defaultValue: null,
                description: "",
                name: "overflow",
                required: !1,
                type: {
                  name: "ResponsiveValue<Overflow, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              overflowX: {
                defaultValue: null,
                description: "",
                name: "overflowX",
                required: !1,
                type: {
                  name: "ResponsiveValue<OverflowX, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              overflowY: {
                defaultValue: null,
                description: "",
                name: "overflowY",
                required: !1,
                type: {
                  name: "ResponsiveValue<OverflowY, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              bg: {
                defaultValue: null,
                description: "",
                name: "bg",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              backgroundColor: {
                defaultValue: { value: "red" },
                description: "",
                name: "backgroundColor",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              opacity: {
                defaultValue: null,
                description: "",
                name: "opacity",
                required: !1,
                type: {
                  name: "ResponsiveValue<Opacity, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              m: {
                defaultValue: null,
                description: "",
                name: "m",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              margin: {
                defaultValue: null,
                description: "",
                name: "margin",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              mt: {
                defaultValue: null,
                description: "",
                name: "mt",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              marginTop: {
                defaultValue: null,
                description: "",
                name: "marginTop",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              mr: {
                defaultValue: null,
                description: "",
                name: "mr",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              marginRight: {
                defaultValue: null,
                description: "",
                name: "marginRight",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              mb: {
                defaultValue: null,
                description: "",
                name: "mb",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              marginBottom: {
                defaultValue: null,
                description: "",
                name: "marginBottom",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              ml: {
                defaultValue: null,
                description: "",
                name: "ml",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              marginLeft: {
                defaultValue: null,
                description: "",
                name: "marginLeft",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              mx: {
                defaultValue: null,
                description: "",
                name: "mx",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              marginX: {
                defaultValue: null,
                description: "",
                name: "marginX",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              my: {
                defaultValue: null,
                description: "",
                name: "my",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              marginY: {
                defaultValue: null,
                description: "",
                name: "marginY",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              padding: {
                defaultValue: null,
                description: "",
                name: "padding",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              pt: {
                defaultValue: null,
                description: "",
                name: "pt",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              paddingTop: {
                defaultValue: null,
                description: "",
                name: "paddingTop",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              pr: {
                defaultValue: null,
                description: "",
                name: "pr",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              paddingRight: {
                defaultValue: null,
                description: "",
                name: "paddingRight",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              pb: {
                defaultValue: null,
                description: "",
                name: "pb",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              paddingBottom: {
                defaultValue: null,
                description: "",
                name: "paddingBottom",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              pl: {
                defaultValue: null,
                description: "",
                name: "pl",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              paddingLeft: {
                defaultValue: null,
                description: "",
                name: "paddingLeft",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              px: {
                defaultValue: null,
                description: "",
                name: "px",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              paddingX: {
                defaultValue: null,
                description: "",
                name: "paddingX",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              py: {
                defaultValue: null,
                description: "",
                name: "py",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              paddingY: {
                defaultValue: null,
                description: "",
                name: "paddingY",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              theme: {
                defaultValue: null,
                description: "",
                name: "theme",
                required: !1,
                type: { name: "any" },
              },
              as: {
                defaultValue: null,
                description: "",
                name: "as",
                required: !1,
                type: { name: "undefined" },
              },
              forwardedAs: {
                defaultValue: null,
                description: "",
                name: "forwardedAs",
                required: !1,
                type: { name: "undefined" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/layout/src/components/box.tsx#Box"
            ] = {
              docgenInfo: Box.__docgenInfo,
              name: "Box",
              path: "packages/layout/src/components/box.tsx#Box",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./packages/layout/stories/box.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Basic", function () {
          return Basic;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var _src_components_box__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./packages/layout/src/components/box.tsx"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      __webpack_exports__.default = {
        title: "Components / Layout / Box",
        component: _src_components_box__WEBPACK_IMPORTED_MODULE_3__.a,
        argTypes: { backgroundColor: { control: "color" } },
      };
      var Template = function Template(args) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _src_components_box__WEBPACK_IMPORTED_MODULE_3__.a,
          Object.assign({}, args)
        );
      };
      Template.displayName = "Template";
      var Basic = Template.bind({});
      (Basic.args = { backgroundColor: "#00FF00" }),
        (Basic.parameters = Object.assign(
          { storySource: { source: "(args) => <Box {...args} />" } },
          Basic.parameters
        ));
    },
    "./packages/layout/stories/flex.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Vertical", function () {
          return Vertical;
        }),
        __webpack_require__.d(__webpack_exports__, "Horizontal", function () {
          return Horizontal;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        ),
        __webpack_require__("./node_modules/react/index.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.slice.js");
      var _templateObject,
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        index_esm = __webpack_require__(
          "./node_modules/styled-system/dist/index.esm.js"
        ),
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      var _Flex = styled_components_browser_esm.default.div(
          _templateObject ||
            (_templateObject = (function _taggedTemplateLiteralLoose(
              strings,
              raw
            ) {
              return (
                raw || (raw = strings.slice(0)), (strings.raw = raw), strings
              );
            })(["\n  display: flex;\n  ", "\n"])),
          Object(index_esm.b)(index_esm.c, index_esm.e, index_esm.a)
        ),
        flex_Flex = function Flex(args) {
          return Object(jsx_runtime.jsx)(_Flex, Object.assign({}, args));
        };
      flex_Flex.displayName = "Flex";
      try {
        (flex_Flex.displayName = "Flex"),
          (flex_Flex.__docgenInfo = {
            description: "",
            displayName: "Flex",
            props: {
              slot: {
                defaultValue: null,
                description: "",
                name: "slot",
                required: !1,
                type: { name: "string" },
              },
              style: {
                defaultValue: null,
                description: "",
                name: "style",
                required: !1,
                type: { name: "CSSProperties" },
              },
              title: {
                defaultValue: null,
                description: "",
                name: "title",
                required: !1,
                type: { name: "string" },
              },
              ref: {
                defaultValue: null,
                description: "",
                name: "ref",
                required: !1,
                type: {
                  name: "RefObject<HTMLDivElement> | ((instance: HTMLDivElement) => void)",
                },
              },
              defaultChecked: {
                defaultValue: null,
                description: "",
                name: "defaultChecked",
                required: !1,
                type: { name: "boolean" },
              },
              defaultValue: {
                defaultValue: null,
                description: "",
                name: "defaultValue",
                required: !1,
                type: { name: "string | number | readonly string[]" },
              },
              suppressContentEditableWarning: {
                defaultValue: null,
                description: "",
                name: "suppressContentEditableWarning",
                required: !1,
                type: { name: "boolean" },
              },
              suppressHydrationWarning: {
                defaultValue: null,
                description: "",
                name: "suppressHydrationWarning",
                required: !1,
                type: { name: "boolean" },
              },
              accessKey: {
                defaultValue: null,
                description: "",
                name: "accessKey",
                required: !1,
                type: { name: "string" },
              },
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              contentEditable: {
                defaultValue: null,
                description: "",
                name: "contentEditable",
                required: !1,
                type: { name: 'boolean | "true" | "false" | "inherit"' },
              },
              contextMenu: {
                defaultValue: null,
                description: "",
                name: "contextMenu",
                required: !1,
                type: { name: "string" },
              },
              dir: {
                defaultValue: null,
                description: "",
                name: "dir",
                required: !1,
                type: { name: "string" },
              },
              draggable: {
                defaultValue: null,
                description: "",
                name: "draggable",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              hidden: {
                defaultValue: null,
                description: "",
                name: "hidden",
                required: !1,
                type: { name: "boolean" },
              },
              id: {
                defaultValue: null,
                description: "",
                name: "id",
                required: !1,
                type: { name: "string" },
              },
              lang: {
                defaultValue: null,
                description: "",
                name: "lang",
                required: !1,
                type: { name: "string" },
              },
              placeholder: {
                defaultValue: null,
                description: "",
                name: "placeholder",
                required: !1,
                type: { name: "string" },
              },
              spellCheck: {
                defaultValue: null,
                description: "",
                name: "spellCheck",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              tabIndex: {
                defaultValue: null,
                description: "",
                name: "tabIndex",
                required: !1,
                type: { name: "number" },
              },
              translate: {
                defaultValue: null,
                description: "",
                name: "translate",
                required: !1,
                type: { name: '"yes" | "no"' },
              },
              radioGroup: {
                defaultValue: null,
                description: "",
                name: "radioGroup",
                required: !1,
                type: { name: "string" },
              },
              role: {
                defaultValue: null,
                description: "",
                name: "role",
                required: !1,
                type: { name: "AriaRole" },
              },
              about: {
                defaultValue: null,
                description: "",
                name: "about",
                required: !1,
                type: { name: "string" },
              },
              datatype: {
                defaultValue: null,
                description: "",
                name: "datatype",
                required: !1,
                type: { name: "string" },
              },
              inlist: {
                defaultValue: null,
                description: "",
                name: "inlist",
                required: !1,
                type: { name: "any" },
              },
              prefix: {
                defaultValue: null,
                description: "",
                name: "prefix",
                required: !1,
                type: { name: "string" },
              },
              property: {
                defaultValue: null,
                description: "",
                name: "property",
                required: !1,
                type: { name: "string" },
              },
              resource: {
                defaultValue: null,
                description: "",
                name: "resource",
                required: !1,
                type: { name: "string" },
              },
              typeof: {
                defaultValue: null,
                description: "",
                name: "typeof",
                required: !1,
                type: { name: "string" },
              },
              vocab: {
                defaultValue: null,
                description: "",
                name: "vocab",
                required: !1,
                type: { name: "string" },
              },
              autoCapitalize: {
                defaultValue: null,
                description: "",
                name: "autoCapitalize",
                required: !1,
                type: { name: "string" },
              },
              autoCorrect: {
                defaultValue: null,
                description: "",
                name: "autoCorrect",
                required: !1,
                type: { name: "string" },
              },
              autoSave: {
                defaultValue: null,
                description: "",
                name: "autoSave",
                required: !1,
                type: { name: "string" },
              },
              color: {
                defaultValue: null,
                description: "",
                name: "color",
                required: !1,
                type: { name: "string" },
              },
              itemProp: {
                defaultValue: null,
                description: "",
                name: "itemProp",
                required: !1,
                type: { name: "string" },
              },
              itemScope: {
                defaultValue: null,
                description: "",
                name: "itemScope",
                required: !1,
                type: { name: "boolean" },
              },
              itemType: {
                defaultValue: null,
                description: "",
                name: "itemType",
                required: !1,
                type: { name: "string" },
              },
              itemID: {
                defaultValue: null,
                description: "",
                name: "itemID",
                required: !1,
                type: { name: "string" },
              },
              itemRef: {
                defaultValue: null,
                description: "",
                name: "itemRef",
                required: !1,
                type: { name: "string" },
              },
              results: {
                defaultValue: null,
                description: "",
                name: "results",
                required: !1,
                type: { name: "number" },
              },
              security: {
                defaultValue: null,
                description: "",
                name: "security",
                required: !1,
                type: { name: "string" },
              },
              unselectable: {
                defaultValue: null,
                description: "",
                name: "unselectable",
                required: !1,
                type: { name: '"on" | "off"' },
              },
              inputMode: {
                defaultValue: null,
                description: "",
                name: "inputMode",
                required: !1,
                type: {
                  name: '"none" | "search" | "text" | "tel" | "url" | "email" | "numeric" | "decimal"',
                },
              },
              is: {
                defaultValue: null,
                description: "",
                name: "is",
                required: !1,
                type: { name: "string" },
              },
              "aria-activedescendant": {
                defaultValue: null,
                description: "",
                name: "aria-activedescendant",
                required: !1,
                type: { name: "string" },
              },
              "aria-atomic": {
                defaultValue: null,
                description: "",
                name: "aria-atomic",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-autocomplete": {
                defaultValue: null,
                description: "",
                name: "aria-autocomplete",
                required: !1,
                type: { name: '"list" | "none" | "inline" | "both"' },
              },
              "aria-busy": {
                defaultValue: null,
                description: "",
                name: "aria-busy",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-checked": {
                defaultValue: null,
                description: "",
                name: "aria-checked",
                required: !1,
                type: { name: 'boolean | "true" | "false" | "mixed"' },
              },
              "aria-colcount": {
                defaultValue: null,
                description: "",
                name: "aria-colcount",
                required: !1,
                type: { name: "number" },
              },
              "aria-colindex": {
                defaultValue: null,
                description: "",
                name: "aria-colindex",
                required: !1,
                type: { name: "number" },
              },
              "aria-colspan": {
                defaultValue: null,
                description: "",
                name: "aria-colspan",
                required: !1,
                type: { name: "number" },
              },
              "aria-controls": {
                defaultValue: null,
                description: "",
                name: "aria-controls",
                required: !1,
                type: { name: "string" },
              },
              "aria-current": {
                defaultValue: null,
                description: "",
                name: "aria-current",
                required: !1,
                type: {
                  name: 'boolean | "true" | "false" | "time" | "page" | "step" | "location" | "date"',
                },
              },
              "aria-describedby": {
                defaultValue: null,
                description: "",
                name: "aria-describedby",
                required: !1,
                type: { name: "string" },
              },
              "aria-details": {
                defaultValue: null,
                description: "",
                name: "aria-details",
                required: !1,
                type: { name: "string" },
              },
              "aria-disabled": {
                defaultValue: null,
                description: "",
                name: "aria-disabled",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-dropeffect": {
                defaultValue: null,
                description: "",
                name: "aria-dropeffect",
                required: !1,
                type: {
                  name: '"link" | "none" | "copy" | "execute" | "move" | "popup"',
                },
              },
              "aria-errormessage": {
                defaultValue: null,
                description: "",
                name: "aria-errormessage",
                required: !1,
                type: { name: "string" },
              },
              "aria-expanded": {
                defaultValue: null,
                description: "",
                name: "aria-expanded",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-flowto": {
                defaultValue: null,
                description: "",
                name: "aria-flowto",
                required: !1,
                type: { name: "string" },
              },
              "aria-grabbed": {
                defaultValue: null,
                description: "",
                name: "aria-grabbed",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-haspopup": {
                defaultValue: null,
                description: "",
                name: "aria-haspopup",
                required: !1,
                type: {
                  name: 'boolean | "true" | "false" | "dialog" | "grid" | "listbox" | "menu" | "tree"',
                },
              },
              "aria-hidden": {
                defaultValue: null,
                description: "",
                name: "aria-hidden",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-invalid": {
                defaultValue: null,
                description: "",
                name: "aria-invalid",
                required: !1,
                type: {
                  name: 'boolean | "true" | "false" | "grammar" | "spelling"',
                },
              },
              "aria-keyshortcuts": {
                defaultValue: null,
                description: "",
                name: "aria-keyshortcuts",
                required: !1,
                type: { name: "string" },
              },
              "aria-label": {
                defaultValue: null,
                description: "",
                name: "aria-label",
                required: !1,
                type: { name: "string" },
              },
              "aria-labelledby": {
                defaultValue: null,
                description: "",
                name: "aria-labelledby",
                required: !1,
                type: { name: "string" },
              },
              "aria-level": {
                defaultValue: null,
                description: "",
                name: "aria-level",
                required: !1,
                type: { name: "number" },
              },
              "aria-live": {
                defaultValue: null,
                description: "",
                name: "aria-live",
                required: !1,
                type: { name: '"off" | "assertive" | "polite"' },
              },
              "aria-modal": {
                defaultValue: null,
                description: "",
                name: "aria-modal",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-multiline": {
                defaultValue: null,
                description: "",
                name: "aria-multiline",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-multiselectable": {
                defaultValue: null,
                description: "",
                name: "aria-multiselectable",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-orientation": {
                defaultValue: null,
                description: "",
                name: "aria-orientation",
                required: !1,
                type: { name: '"horizontal" | "vertical"' },
              },
              "aria-owns": {
                defaultValue: null,
                description: "",
                name: "aria-owns",
                required: !1,
                type: { name: "string" },
              },
              "aria-placeholder": {
                defaultValue: null,
                description: "",
                name: "aria-placeholder",
                required: !1,
                type: { name: "string" },
              },
              "aria-posinset": {
                defaultValue: null,
                description: "",
                name: "aria-posinset",
                required: !1,
                type: { name: "number" },
              },
              "aria-pressed": {
                defaultValue: null,
                description: "",
                name: "aria-pressed",
                required: !1,
                type: { name: 'boolean | "true" | "false" | "mixed"' },
              },
              "aria-readonly": {
                defaultValue: null,
                description: "",
                name: "aria-readonly",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-relevant": {
                defaultValue: null,
                description: "",
                name: "aria-relevant",
                required: !1,
                type: {
                  name: '"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals"',
                },
              },
              "aria-required": {
                defaultValue: null,
                description: "",
                name: "aria-required",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-roledescription": {
                defaultValue: null,
                description: "",
                name: "aria-roledescription",
                required: !1,
                type: { name: "string" },
              },
              "aria-rowcount": {
                defaultValue: null,
                description: "",
                name: "aria-rowcount",
                required: !1,
                type: { name: "number" },
              },
              "aria-rowindex": {
                defaultValue: null,
                description: "",
                name: "aria-rowindex",
                required: !1,
                type: { name: "number" },
              },
              "aria-rowspan": {
                defaultValue: null,
                description: "",
                name: "aria-rowspan",
                required: !1,
                type: { name: "number" },
              },
              "aria-selected": {
                defaultValue: null,
                description: "",
                name: "aria-selected",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-setsize": {
                defaultValue: null,
                description: "",
                name: "aria-setsize",
                required: !1,
                type: { name: "number" },
              },
              "aria-sort": {
                defaultValue: null,
                description: "",
                name: "aria-sort",
                required: !1,
                type: { name: '"none" | "ascending" | "descending" | "other"' },
              },
              "aria-valuemax": {
                defaultValue: null,
                description: "",
                name: "aria-valuemax",
                required: !1,
                type: { name: "number" },
              },
              "aria-valuemin": {
                defaultValue: null,
                description: "",
                name: "aria-valuemin",
                required: !1,
                type: { name: "number" },
              },
              "aria-valuenow": {
                defaultValue: null,
                description: "",
                name: "aria-valuenow",
                required: !1,
                type: { name: "number" },
              },
              "aria-valuetext": {
                defaultValue: null,
                description: "",
                name: "aria-valuetext",
                required: !1,
                type: { name: "string" },
              },
              dangerouslySetInnerHTML: {
                defaultValue: null,
                description: "",
                name: "dangerouslySetInnerHTML",
                required: !1,
                type: { name: "{ __html: string; }" },
              },
              onCopy: {
                defaultValue: null,
                description: "",
                name: "onCopy",
                required: !1,
                type: { name: "ClipboardEventHandler<HTMLDivElement>" },
              },
              onCopyCapture: {
                defaultValue: null,
                description: "",
                name: "onCopyCapture",
                required: !1,
                type: { name: "ClipboardEventHandler<HTMLDivElement>" },
              },
              onCut: {
                defaultValue: null,
                description: "",
                name: "onCut",
                required: !1,
                type: { name: "ClipboardEventHandler<HTMLDivElement>" },
              },
              onCutCapture: {
                defaultValue: null,
                description: "",
                name: "onCutCapture",
                required: !1,
                type: { name: "ClipboardEventHandler<HTMLDivElement>" },
              },
              onPaste: {
                defaultValue: null,
                description: "",
                name: "onPaste",
                required: !1,
                type: { name: "ClipboardEventHandler<HTMLDivElement>" },
              },
              onPasteCapture: {
                defaultValue: null,
                description: "",
                name: "onPasteCapture",
                required: !1,
                type: { name: "ClipboardEventHandler<HTMLDivElement>" },
              },
              onCompositionEnd: {
                defaultValue: null,
                description: "",
                name: "onCompositionEnd",
                required: !1,
                type: { name: "CompositionEventHandler<HTMLDivElement>" },
              },
              onCompositionEndCapture: {
                defaultValue: null,
                description: "",
                name: "onCompositionEndCapture",
                required: !1,
                type: { name: "CompositionEventHandler<HTMLDivElement>" },
              },
              onCompositionStart: {
                defaultValue: null,
                description: "",
                name: "onCompositionStart",
                required: !1,
                type: { name: "CompositionEventHandler<HTMLDivElement>" },
              },
              onCompositionStartCapture: {
                defaultValue: null,
                description: "",
                name: "onCompositionStartCapture",
                required: !1,
                type: { name: "CompositionEventHandler<HTMLDivElement>" },
              },
              onCompositionUpdate: {
                defaultValue: null,
                description: "",
                name: "onCompositionUpdate",
                required: !1,
                type: { name: "CompositionEventHandler<HTMLDivElement>" },
              },
              onCompositionUpdateCapture: {
                defaultValue: null,
                description: "",
                name: "onCompositionUpdateCapture",
                required: !1,
                type: { name: "CompositionEventHandler<HTMLDivElement>" },
              },
              onFocus: {
                defaultValue: null,
                description: "",
                name: "onFocus",
                required: !1,
                type: { name: "FocusEventHandler<HTMLDivElement>" },
              },
              onFocusCapture: {
                defaultValue: null,
                description: "",
                name: "onFocusCapture",
                required: !1,
                type: { name: "FocusEventHandler<HTMLDivElement>" },
              },
              onBlur: {
                defaultValue: null,
                description: "",
                name: "onBlur",
                required: !1,
                type: { name: "FocusEventHandler<HTMLDivElement>" },
              },
              onBlurCapture: {
                defaultValue: null,
                description: "",
                name: "onBlurCapture",
                required: !1,
                type: { name: "FocusEventHandler<HTMLDivElement>" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onChangeCapture: {
                defaultValue: null,
                description: "",
                name: "onChangeCapture",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onBeforeInput: {
                defaultValue: null,
                description: "",
                name: "onBeforeInput",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onBeforeInputCapture: {
                defaultValue: null,
                description: "",
                name: "onBeforeInputCapture",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onInput: {
                defaultValue: null,
                description: "",
                name: "onInput",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onInputCapture: {
                defaultValue: null,
                description: "",
                name: "onInputCapture",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onReset: {
                defaultValue: null,
                description: "",
                name: "onReset",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onResetCapture: {
                defaultValue: null,
                description: "",
                name: "onResetCapture",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onSubmit: {
                defaultValue: null,
                description: "",
                name: "onSubmit",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onSubmitCapture: {
                defaultValue: null,
                description: "",
                name: "onSubmitCapture",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onInvalid: {
                defaultValue: null,
                description: "",
                name: "onInvalid",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onInvalidCapture: {
                defaultValue: null,
                description: "",
                name: "onInvalidCapture",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onLoad: {
                defaultValue: null,
                description: "",
                name: "onLoad",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onLoadCapture: {
                defaultValue: null,
                description: "",
                name: "onLoadCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onError: {
                defaultValue: null,
                description: "",
                name: "onError",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onErrorCapture: {
                defaultValue: null,
                description: "",
                name: "onErrorCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onKeyDown: {
                defaultValue: null,
                description: "",
                name: "onKeyDown",
                required: !1,
                type: { name: "KeyboardEventHandler<HTMLDivElement>" },
              },
              onKeyDownCapture: {
                defaultValue: null,
                description: "",
                name: "onKeyDownCapture",
                required: !1,
                type: { name: "KeyboardEventHandler<HTMLDivElement>" },
              },
              onKeyPress: {
                defaultValue: null,
                description: "",
                name: "onKeyPress",
                required: !1,
                type: { name: "KeyboardEventHandler<HTMLDivElement>" },
              },
              onKeyPressCapture: {
                defaultValue: null,
                description: "",
                name: "onKeyPressCapture",
                required: !1,
                type: { name: "KeyboardEventHandler<HTMLDivElement>" },
              },
              onKeyUp: {
                defaultValue: null,
                description: "",
                name: "onKeyUp",
                required: !1,
                type: { name: "KeyboardEventHandler<HTMLDivElement>" },
              },
              onKeyUpCapture: {
                defaultValue: null,
                description: "",
                name: "onKeyUpCapture",
                required: !1,
                type: { name: "KeyboardEventHandler<HTMLDivElement>" },
              },
              onAbort: {
                defaultValue: null,
                description: "",
                name: "onAbort",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onAbortCapture: {
                defaultValue: null,
                description: "",
                name: "onAbortCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onCanPlay: {
                defaultValue: null,
                description: "",
                name: "onCanPlay",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onCanPlayCapture: {
                defaultValue: null,
                description: "",
                name: "onCanPlayCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onCanPlayThrough: {
                defaultValue: null,
                description: "",
                name: "onCanPlayThrough",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onCanPlayThroughCapture: {
                defaultValue: null,
                description: "",
                name: "onCanPlayThroughCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onDurationChange: {
                defaultValue: null,
                description: "",
                name: "onDurationChange",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onDurationChangeCapture: {
                defaultValue: null,
                description: "",
                name: "onDurationChangeCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onEmptied: {
                defaultValue: null,
                description: "",
                name: "onEmptied",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onEmptiedCapture: {
                defaultValue: null,
                description: "",
                name: "onEmptiedCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onEncrypted: {
                defaultValue: null,
                description: "",
                name: "onEncrypted",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onEncryptedCapture: {
                defaultValue: null,
                description: "",
                name: "onEncryptedCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onEnded: {
                defaultValue: null,
                description: "",
                name: "onEnded",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onEndedCapture: {
                defaultValue: null,
                description: "",
                name: "onEndedCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onLoadedData: {
                defaultValue: null,
                description: "",
                name: "onLoadedData",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onLoadedDataCapture: {
                defaultValue: null,
                description: "",
                name: "onLoadedDataCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onLoadedMetadata: {
                defaultValue: null,
                description: "",
                name: "onLoadedMetadata",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onLoadedMetadataCapture: {
                defaultValue: null,
                description: "",
                name: "onLoadedMetadataCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onLoadStart: {
                defaultValue: null,
                description: "",
                name: "onLoadStart",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onLoadStartCapture: {
                defaultValue: null,
                description: "",
                name: "onLoadStartCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onPause: {
                defaultValue: null,
                description: "",
                name: "onPause",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onPauseCapture: {
                defaultValue: null,
                description: "",
                name: "onPauseCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onPlay: {
                defaultValue: null,
                description: "",
                name: "onPlay",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onPlayCapture: {
                defaultValue: null,
                description: "",
                name: "onPlayCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onPlaying: {
                defaultValue: null,
                description: "",
                name: "onPlaying",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onPlayingCapture: {
                defaultValue: null,
                description: "",
                name: "onPlayingCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onProgress: {
                defaultValue: null,
                description: "",
                name: "onProgress",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onProgressCapture: {
                defaultValue: null,
                description: "",
                name: "onProgressCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onRateChange: {
                defaultValue: null,
                description: "",
                name: "onRateChange",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onRateChangeCapture: {
                defaultValue: null,
                description: "",
                name: "onRateChangeCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onSeeked: {
                defaultValue: null,
                description: "",
                name: "onSeeked",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onSeekedCapture: {
                defaultValue: null,
                description: "",
                name: "onSeekedCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onSeeking: {
                defaultValue: null,
                description: "",
                name: "onSeeking",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onSeekingCapture: {
                defaultValue: null,
                description: "",
                name: "onSeekingCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onStalled: {
                defaultValue: null,
                description: "",
                name: "onStalled",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onStalledCapture: {
                defaultValue: null,
                description: "",
                name: "onStalledCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onSuspend: {
                defaultValue: null,
                description: "",
                name: "onSuspend",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onSuspendCapture: {
                defaultValue: null,
                description: "",
                name: "onSuspendCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onTimeUpdate: {
                defaultValue: null,
                description: "",
                name: "onTimeUpdate",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onTimeUpdateCapture: {
                defaultValue: null,
                description: "",
                name: "onTimeUpdateCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onVolumeChange: {
                defaultValue: null,
                description: "",
                name: "onVolumeChange",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onVolumeChangeCapture: {
                defaultValue: null,
                description: "",
                name: "onVolumeChangeCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onWaiting: {
                defaultValue: null,
                description: "",
                name: "onWaiting",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onWaitingCapture: {
                defaultValue: null,
                description: "",
                name: "onWaitingCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onAuxClick: {
                defaultValue: null,
                description: "",
                name: "onAuxClick",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onAuxClickCapture: {
                defaultValue: null,
                description: "",
                name: "onAuxClickCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onClick: {
                defaultValue: null,
                description: "",
                name: "onClick",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onClickCapture: {
                defaultValue: null,
                description: "",
                name: "onClickCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onContextMenu: {
                defaultValue: null,
                description: "",
                name: "onContextMenu",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onContextMenuCapture: {
                defaultValue: null,
                description: "",
                name: "onContextMenuCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onDoubleClick: {
                defaultValue: null,
                description: "",
                name: "onDoubleClick",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onDoubleClickCapture: {
                defaultValue: null,
                description: "",
                name: "onDoubleClickCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onDrag: {
                defaultValue: null,
                description: "",
                name: "onDrag",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragCapture: {
                defaultValue: null,
                description: "",
                name: "onDragCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragEnd: {
                defaultValue: null,
                description: "",
                name: "onDragEnd",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragEndCapture: {
                defaultValue: null,
                description: "",
                name: "onDragEndCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragEnter: {
                defaultValue: null,
                description: "",
                name: "onDragEnter",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragEnterCapture: {
                defaultValue: null,
                description: "",
                name: "onDragEnterCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragExit: {
                defaultValue: null,
                description: "",
                name: "onDragExit",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragExitCapture: {
                defaultValue: null,
                description: "",
                name: "onDragExitCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragLeave: {
                defaultValue: null,
                description: "",
                name: "onDragLeave",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragLeaveCapture: {
                defaultValue: null,
                description: "",
                name: "onDragLeaveCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragOver: {
                defaultValue: null,
                description: "",
                name: "onDragOver",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragOverCapture: {
                defaultValue: null,
                description: "",
                name: "onDragOverCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragStart: {
                defaultValue: null,
                description: "",
                name: "onDragStart",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragStartCapture: {
                defaultValue: null,
                description: "",
                name: "onDragStartCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDrop: {
                defaultValue: null,
                description: "",
                name: "onDrop",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDropCapture: {
                defaultValue: null,
                description: "",
                name: "onDropCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onMouseDown: {
                defaultValue: null,
                description: "",
                name: "onMouseDown",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseDownCapture: {
                defaultValue: null,
                description: "",
                name: "onMouseDownCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseEnter: {
                defaultValue: null,
                description: "",
                name: "onMouseEnter",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseLeave: {
                defaultValue: null,
                description: "",
                name: "onMouseLeave",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseMove: {
                defaultValue: null,
                description: "",
                name: "onMouseMove",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseMoveCapture: {
                defaultValue: null,
                description: "",
                name: "onMouseMoveCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseOut: {
                defaultValue: null,
                description: "",
                name: "onMouseOut",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseOutCapture: {
                defaultValue: null,
                description: "",
                name: "onMouseOutCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseOver: {
                defaultValue: null,
                description: "",
                name: "onMouseOver",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseOverCapture: {
                defaultValue: null,
                description: "",
                name: "onMouseOverCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseUp: {
                defaultValue: null,
                description: "",
                name: "onMouseUp",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseUpCapture: {
                defaultValue: null,
                description: "",
                name: "onMouseUpCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onSelect: {
                defaultValue: null,
                description: "",
                name: "onSelect",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onSelectCapture: {
                defaultValue: null,
                description: "",
                name: "onSelectCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onTouchCancel: {
                defaultValue: null,
                description: "",
                name: "onTouchCancel",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onTouchCancelCapture: {
                defaultValue: null,
                description: "",
                name: "onTouchCancelCapture",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onTouchEnd: {
                defaultValue: null,
                description: "",
                name: "onTouchEnd",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onTouchEndCapture: {
                defaultValue: null,
                description: "",
                name: "onTouchEndCapture",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onTouchMove: {
                defaultValue: null,
                description: "",
                name: "onTouchMove",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onTouchMoveCapture: {
                defaultValue: null,
                description: "",
                name: "onTouchMoveCapture",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onTouchStart: {
                defaultValue: null,
                description: "",
                name: "onTouchStart",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onTouchStartCapture: {
                defaultValue: null,
                description: "",
                name: "onTouchStartCapture",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onPointerDown: {
                defaultValue: null,
                description: "",
                name: "onPointerDown",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerDownCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerDownCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerMove: {
                defaultValue: null,
                description: "",
                name: "onPointerMove",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerMoveCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerMoveCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerUp: {
                defaultValue: null,
                description: "",
                name: "onPointerUp",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerUpCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerUpCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerCancel: {
                defaultValue: null,
                description: "",
                name: "onPointerCancel",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerCancelCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerCancelCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerEnter: {
                defaultValue: null,
                description: "",
                name: "onPointerEnter",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerEnterCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerEnterCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerLeave: {
                defaultValue: null,
                description: "",
                name: "onPointerLeave",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerLeaveCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerLeaveCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerOver: {
                defaultValue: null,
                description: "",
                name: "onPointerOver",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerOverCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerOverCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerOut: {
                defaultValue: null,
                description: "",
                name: "onPointerOut",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerOutCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerOutCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onGotPointerCapture: {
                defaultValue: null,
                description: "",
                name: "onGotPointerCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onGotPointerCaptureCapture: {
                defaultValue: null,
                description: "",
                name: "onGotPointerCaptureCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onLostPointerCapture: {
                defaultValue: null,
                description: "",
                name: "onLostPointerCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onLostPointerCaptureCapture: {
                defaultValue: null,
                description: "",
                name: "onLostPointerCaptureCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onScroll: {
                defaultValue: null,
                description: "",
                name: "onScroll",
                required: !1,
                type: { name: "UIEventHandler<HTMLDivElement>" },
              },
              onScrollCapture: {
                defaultValue: null,
                description: "",
                name: "onScrollCapture",
                required: !1,
                type: { name: "UIEventHandler<HTMLDivElement>" },
              },
              onWheel: {
                defaultValue: null,
                description: "",
                name: "onWheel",
                required: !1,
                type: { name: "WheelEventHandler<HTMLDivElement>" },
              },
              onWheelCapture: {
                defaultValue: null,
                description: "",
                name: "onWheelCapture",
                required: !1,
                type: { name: "WheelEventHandler<HTMLDivElement>" },
              },
              onAnimationStart: {
                defaultValue: null,
                description: "",
                name: "onAnimationStart",
                required: !1,
                type: { name: "AnimationEventHandler<HTMLDivElement>" },
              },
              onAnimationStartCapture: {
                defaultValue: null,
                description: "",
                name: "onAnimationStartCapture",
                required: !1,
                type: { name: "AnimationEventHandler<HTMLDivElement>" },
              },
              onAnimationEnd: {
                defaultValue: null,
                description: "",
                name: "onAnimationEnd",
                required: !1,
                type: { name: "AnimationEventHandler<HTMLDivElement>" },
              },
              onAnimationEndCapture: {
                defaultValue: null,
                description: "",
                name: "onAnimationEndCapture",
                required: !1,
                type: { name: "AnimationEventHandler<HTMLDivElement>" },
              },
              onAnimationIteration: {
                defaultValue: null,
                description: "",
                name: "onAnimationIteration",
                required: !1,
                type: { name: "AnimationEventHandler<HTMLDivElement>" },
              },
              onAnimationIterationCapture: {
                defaultValue: null,
                description: "",
                name: "onAnimationIterationCapture",
                required: !1,
                type: { name: "AnimationEventHandler<HTMLDivElement>" },
              },
              onTransitionEnd: {
                defaultValue: null,
                description: "",
                name: "onTransitionEnd",
                required: !1,
                type: { name: "TransitionEventHandler<HTMLDivElement>" },
              },
              onTransitionEndCapture: {
                defaultValue: null,
                description: "",
                name: "onTransitionEndCapture",
                required: !1,
                type: { name: "TransitionEventHandler<HTMLDivElement>" },
              },
              alignItems: {
                defaultValue: null,
                description: "",
                name: "alignItems",
                required: !1,
                type: {
                  name: "ResponsiveValue<AlignItems, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              alignContent: {
                defaultValue: null,
                description: "",
                name: "alignContent",
                required: !1,
                type: {
                  name: "ResponsiveValue<AlignContent, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              justifyItems: {
                defaultValue: null,
                description: "",
                name: "justifyItems",
                required: !1,
                type: {
                  name: "ResponsiveValue<JustifyItems, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              justifyContent: {
                defaultValue: null,
                description: "",
                name: "justifyContent",
                required: !1,
                type: {
                  name: "ResponsiveValue<JustifyContent, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              flexWrap: {
                defaultValue: null,
                description: "",
                name: "flexWrap",
                required: !1,
                type: {
                  name: "ResponsiveValue<FlexWrap, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              flexDirection: {
                defaultValue: null,
                description: "",
                name: "flexDirection",
                required: !1,
                type: {
                  name: "ResponsiveValue<FlexDirection, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              flex: {
                defaultValue: null,
                description: "",
                name: "flex",
                required: !1,
                type: {
                  name: "ResponsiveValue<Flex<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              flexGrow: {
                defaultValue: null,
                description: "",
                name: "flexGrow",
                required: !1,
                type: {
                  name: "ResponsiveValue<FlexGrow, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              flexShrink: {
                defaultValue: null,
                description: "",
                name: "flexShrink",
                required: !1,
                type: {
                  name: "ResponsiveValue<FlexShrink, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              flexBasis: {
                defaultValue: null,
                description: "",
                name: "flexBasis",
                required: !1,
                type: {
                  name: "ResponsiveValue<FlexBasis<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              justifySelf: {
                defaultValue: null,
                description: "",
                name: "justifySelf",
                required: !1,
                type: {
                  name: "ResponsiveValue<JustifySelf, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              alignSelf: {
                defaultValue: null,
                description: "",
                name: "alignSelf",
                required: !1,
                type: {
                  name: "ResponsiveValue<AlignSelf, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              order: {
                defaultValue: null,
                description: "",
                name: "order",
                required: !1,
                type: {
                  name: "ResponsiveValue<Order, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              width: {
                defaultValue: null,
                description: "",
                name: "width",
                required: !1,
                type: {
                  name: "ResponsiveValue<Width<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              height: {
                defaultValue: null,
                description: "",
                name: "height",
                required: !1,
                type: {
                  name: "ResponsiveValue<Height<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              minWidth: {
                defaultValue: null,
                description: "",
                name: "minWidth",
                required: !1,
                type: {
                  name: "ResponsiveValue<MinWidth<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              minHeight: {
                defaultValue: null,
                description: "",
                name: "minHeight",
                required: !1,
                type: {
                  name: "ResponsiveValue<MinHeight<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              maxWidth: {
                defaultValue: null,
                description: "",
                name: "maxWidth",
                required: !1,
                type: {
                  name: "ResponsiveValue<MaxWidth<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              maxHeight: {
                defaultValue: null,
                description: "",
                name: "maxHeight",
                required: !1,
                type: {
                  name: "ResponsiveValue<MaxHeight<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              display: {
                defaultValue: null,
                description: "",
                name: "display",
                required: !1,
                type: {
                  name: "ResponsiveValue<Display, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              verticalAlign: {
                defaultValue: null,
                description: "",
                name: "verticalAlign",
                required: !1,
                type: {
                  name: "ResponsiveValue<VerticalAlign<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              size: {
                defaultValue: null,
                description: "",
                name: "size",
                required: !1,
                type: {
                  name: "ResponsiveValue<Height<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              overflow: {
                defaultValue: null,
                description: "",
                name: "overflow",
                required: !1,
                type: {
                  name: "ResponsiveValue<Overflow, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              overflowX: {
                defaultValue: null,
                description: "",
                name: "overflowX",
                required: !1,
                type: {
                  name: "ResponsiveValue<OverflowX, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              overflowY: {
                defaultValue: null,
                description: "",
                name: "overflowY",
                required: !1,
                type: {
                  name: "ResponsiveValue<OverflowY, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              theme: {
                defaultValue: null,
                description: "",
                name: "theme",
                required: !1,
                type: { name: "any" },
              },
              as: {
                defaultValue: null,
                description: "",
                name: "as",
                required: !1,
                type: { name: "undefined" },
              },
              forwardedAs: {
                defaultValue: null,
                description: "",
                name: "forwardedAs",
                required: !1,
                type: { name: "undefined" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/layout/src/components/flex.tsx#Flex"
            ] = {
              docgenInfo: flex_Flex.__docgenInfo,
              name: "Flex",
              path: "packages/layout/src/components/flex.tsx#Flex",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var box = __webpack_require__("./packages/layout/src/components/box.tsx"),
        flex_stories_Template =
          ((__webpack_exports__.default = {
            title: "Components / Layout / Flex",
            component: flex_Flex,
          }),
          function Template(args) {
            return Object(jsx_runtime.jsxs)(
              flex_Flex,
              Object.assign({}, args, {
                children: [
                  Object(jsx_runtime.jsx)(box.a, {
                    width: "40px",
                    height: "40px",
                    backgroundColor: "red",
                    m: 2,
                  }),
                  Object(jsx_runtime.jsx)(box.a, {
                    width: "40px",
                    height: "40px",
                    backgroundColor: "green",
                    m: 2,
                  }),
                  Object(jsx_runtime.jsx)(box.a, {
                    width: "40px",
                    height: "40px",
                    backgroundColor: "blue",
                    m: 2,
                  }),
                ],
              })
            );
          });
      flex_stories_Template.displayName = "Template";
      var Vertical = flex_stories_Template.bind({});
      Vertical.args = { flexDirection: "column" };
      var Horizontal = flex_stories_Template.bind({});
      (Vertical.args = { flexDirection: "row" }),
        (Vertical.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\n  <Flex {...args}>\n    <Box width="40px" height="40px" backgroundColor="red" m={2} />\n    <Box width="40px" height="40px" backgroundColor="green" m={2} />\n    <Box width="40px" height="40px" backgroundColor="blue" m={2} />\n  </Flex>\n)',
            },
          },
          Vertical.parameters
        )),
        (Horizontal.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\n  <Flex {...args}>\n    <Box width="40px" height="40px" backgroundColor="red" m={2} />\n    <Box width="40px" height="40px" backgroundColor="green" m={2} />\n    <Box width="40px" height="40px" backgroundColor="blue" m={2} />\n  </Flex>\n)',
            },
          },
          Horizontal.parameters
        ));
    },
    "./packages/layout/stories/grid.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Basic", function () {
          return Basic;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        ),
        __webpack_require__("./node_modules/react/index.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.slice.js");
      var _templateObject,
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        index_esm = __webpack_require__(
          "./node_modules/styled-system/dist/index.esm.js"
        ),
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      var _Grid = styled_components_browser_esm.default.div(
          _templateObject ||
            (_templateObject = (function _taggedTemplateLiteralLoose(
              strings,
              raw
            ) {
              return (
                raw || (raw = strings.slice(0)), (strings.raw = raw), strings
              );
            })(["\n  ", "\n"])),
          Object(index_esm.b)(index_esm.d, index_esm.e, index_esm.a)
        ),
        grid_Grid = function Grid(args) {
          return Object(jsx_runtime.jsx)(_Grid, Object.assign({}, args));
        };
      grid_Grid.displayName = "Grid";
      try {
        (grid_Grid.displayName = "Grid"),
          (grid_Grid.__docgenInfo = {
            description: "",
            displayName: "Grid",
            props: {
              slot: {
                defaultValue: null,
                description: "",
                name: "slot",
                required: !1,
                type: { name: "string" },
              },
              style: {
                defaultValue: null,
                description: "",
                name: "style",
                required: !1,
                type: { name: "CSSProperties" },
              },
              title: {
                defaultValue: null,
                description: "",
                name: "title",
                required: !1,
                type: { name: "string" },
              },
              ref: {
                defaultValue: null,
                description: "",
                name: "ref",
                required: !1,
                type: {
                  name: "RefObject<HTMLDivElement> | ((instance: HTMLDivElement) => void)",
                },
              },
              defaultChecked: {
                defaultValue: null,
                description: "",
                name: "defaultChecked",
                required: !1,
                type: { name: "boolean" },
              },
              defaultValue: {
                defaultValue: null,
                description: "",
                name: "defaultValue",
                required: !1,
                type: { name: "string | number | readonly string[]" },
              },
              suppressContentEditableWarning: {
                defaultValue: null,
                description: "",
                name: "suppressContentEditableWarning",
                required: !1,
                type: { name: "boolean" },
              },
              suppressHydrationWarning: {
                defaultValue: null,
                description: "",
                name: "suppressHydrationWarning",
                required: !1,
                type: { name: "boolean" },
              },
              accessKey: {
                defaultValue: null,
                description: "",
                name: "accessKey",
                required: !1,
                type: { name: "string" },
              },
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              contentEditable: {
                defaultValue: null,
                description: "",
                name: "contentEditable",
                required: !1,
                type: { name: 'boolean | "true" | "false" | "inherit"' },
              },
              contextMenu: {
                defaultValue: null,
                description: "",
                name: "contextMenu",
                required: !1,
                type: { name: "string" },
              },
              dir: {
                defaultValue: null,
                description: "",
                name: "dir",
                required: !1,
                type: { name: "string" },
              },
              draggable: {
                defaultValue: null,
                description: "",
                name: "draggable",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              hidden: {
                defaultValue: null,
                description: "",
                name: "hidden",
                required: !1,
                type: { name: "boolean" },
              },
              id: {
                defaultValue: null,
                description: "",
                name: "id",
                required: !1,
                type: { name: "string" },
              },
              lang: {
                defaultValue: null,
                description: "",
                name: "lang",
                required: !1,
                type: { name: "string" },
              },
              placeholder: {
                defaultValue: null,
                description: "",
                name: "placeholder",
                required: !1,
                type: { name: "string" },
              },
              spellCheck: {
                defaultValue: null,
                description: "",
                name: "spellCheck",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              tabIndex: {
                defaultValue: null,
                description: "",
                name: "tabIndex",
                required: !1,
                type: { name: "number" },
              },
              translate: {
                defaultValue: null,
                description: "",
                name: "translate",
                required: !1,
                type: { name: '"yes" | "no"' },
              },
              radioGroup: {
                defaultValue: null,
                description: "",
                name: "radioGroup",
                required: !1,
                type: { name: "string" },
              },
              role: {
                defaultValue: null,
                description: "",
                name: "role",
                required: !1,
                type: { name: "AriaRole" },
              },
              about: {
                defaultValue: null,
                description: "",
                name: "about",
                required: !1,
                type: { name: "string" },
              },
              datatype: {
                defaultValue: null,
                description: "",
                name: "datatype",
                required: !1,
                type: { name: "string" },
              },
              inlist: {
                defaultValue: null,
                description: "",
                name: "inlist",
                required: !1,
                type: { name: "any" },
              },
              prefix: {
                defaultValue: null,
                description: "",
                name: "prefix",
                required: !1,
                type: { name: "string" },
              },
              property: {
                defaultValue: null,
                description: "",
                name: "property",
                required: !1,
                type: { name: "string" },
              },
              resource: {
                defaultValue: null,
                description: "",
                name: "resource",
                required: !1,
                type: { name: "string" },
              },
              typeof: {
                defaultValue: null,
                description: "",
                name: "typeof",
                required: !1,
                type: { name: "string" },
              },
              vocab: {
                defaultValue: null,
                description: "",
                name: "vocab",
                required: !1,
                type: { name: "string" },
              },
              autoCapitalize: {
                defaultValue: null,
                description: "",
                name: "autoCapitalize",
                required: !1,
                type: { name: "string" },
              },
              autoCorrect: {
                defaultValue: null,
                description: "",
                name: "autoCorrect",
                required: !1,
                type: { name: "string" },
              },
              autoSave: {
                defaultValue: null,
                description: "",
                name: "autoSave",
                required: !1,
                type: { name: "string" },
              },
              color: {
                defaultValue: null,
                description: "",
                name: "color",
                required: !1,
                type: {
                  name: "string & ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              itemProp: {
                defaultValue: null,
                description: "",
                name: "itemProp",
                required: !1,
                type: { name: "string" },
              },
              itemScope: {
                defaultValue: null,
                description: "",
                name: "itemScope",
                required: !1,
                type: { name: "boolean" },
              },
              itemType: {
                defaultValue: null,
                description: "",
                name: "itemType",
                required: !1,
                type: { name: "string" },
              },
              itemID: {
                defaultValue: null,
                description: "",
                name: "itemID",
                required: !1,
                type: { name: "string" },
              },
              itemRef: {
                defaultValue: null,
                description: "",
                name: "itemRef",
                required: !1,
                type: { name: "string" },
              },
              results: {
                defaultValue: null,
                description: "",
                name: "results",
                required: !1,
                type: { name: "number" },
              },
              security: {
                defaultValue: null,
                description: "",
                name: "security",
                required: !1,
                type: { name: "string" },
              },
              unselectable: {
                defaultValue: null,
                description: "",
                name: "unselectable",
                required: !1,
                type: { name: '"on" | "off"' },
              },
              inputMode: {
                defaultValue: null,
                description: "",
                name: "inputMode",
                required: !1,
                type: {
                  name: '"none" | "search" | "text" | "tel" | "url" | "email" | "numeric" | "decimal"',
                },
              },
              is: {
                defaultValue: null,
                description: "",
                name: "is",
                required: !1,
                type: { name: "string" },
              },
              "aria-activedescendant": {
                defaultValue: null,
                description: "",
                name: "aria-activedescendant",
                required: !1,
                type: { name: "string" },
              },
              "aria-atomic": {
                defaultValue: null,
                description: "",
                name: "aria-atomic",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-autocomplete": {
                defaultValue: null,
                description: "",
                name: "aria-autocomplete",
                required: !1,
                type: { name: '"list" | "none" | "inline" | "both"' },
              },
              "aria-busy": {
                defaultValue: null,
                description: "",
                name: "aria-busy",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-checked": {
                defaultValue: null,
                description: "",
                name: "aria-checked",
                required: !1,
                type: { name: 'boolean | "true" | "false" | "mixed"' },
              },
              "aria-colcount": {
                defaultValue: null,
                description: "",
                name: "aria-colcount",
                required: !1,
                type: { name: "number" },
              },
              "aria-colindex": {
                defaultValue: null,
                description: "",
                name: "aria-colindex",
                required: !1,
                type: { name: "number" },
              },
              "aria-colspan": {
                defaultValue: null,
                description: "",
                name: "aria-colspan",
                required: !1,
                type: { name: "number" },
              },
              "aria-controls": {
                defaultValue: null,
                description: "",
                name: "aria-controls",
                required: !1,
                type: { name: "string" },
              },
              "aria-current": {
                defaultValue: null,
                description: "",
                name: "aria-current",
                required: !1,
                type: {
                  name: 'boolean | "true" | "false" | "time" | "page" | "step" | "location" | "date"',
                },
              },
              "aria-describedby": {
                defaultValue: null,
                description: "",
                name: "aria-describedby",
                required: !1,
                type: { name: "string" },
              },
              "aria-details": {
                defaultValue: null,
                description: "",
                name: "aria-details",
                required: !1,
                type: { name: "string" },
              },
              "aria-disabled": {
                defaultValue: null,
                description: "",
                name: "aria-disabled",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-dropeffect": {
                defaultValue: null,
                description: "",
                name: "aria-dropeffect",
                required: !1,
                type: {
                  name: '"link" | "none" | "copy" | "execute" | "move" | "popup"',
                },
              },
              "aria-errormessage": {
                defaultValue: null,
                description: "",
                name: "aria-errormessage",
                required: !1,
                type: { name: "string" },
              },
              "aria-expanded": {
                defaultValue: null,
                description: "",
                name: "aria-expanded",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-flowto": {
                defaultValue: null,
                description: "",
                name: "aria-flowto",
                required: !1,
                type: { name: "string" },
              },
              "aria-grabbed": {
                defaultValue: null,
                description: "",
                name: "aria-grabbed",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-haspopup": {
                defaultValue: null,
                description: "",
                name: "aria-haspopup",
                required: !1,
                type: {
                  name: 'boolean | "true" | "false" | "dialog" | "grid" | "listbox" | "menu" | "tree"',
                },
              },
              "aria-hidden": {
                defaultValue: null,
                description: "",
                name: "aria-hidden",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-invalid": {
                defaultValue: null,
                description: "",
                name: "aria-invalid",
                required: !1,
                type: {
                  name: 'boolean | "true" | "false" | "grammar" | "spelling"',
                },
              },
              "aria-keyshortcuts": {
                defaultValue: null,
                description: "",
                name: "aria-keyshortcuts",
                required: !1,
                type: { name: "string" },
              },
              "aria-label": {
                defaultValue: null,
                description: "",
                name: "aria-label",
                required: !1,
                type: { name: "string" },
              },
              "aria-labelledby": {
                defaultValue: null,
                description: "",
                name: "aria-labelledby",
                required: !1,
                type: { name: "string" },
              },
              "aria-level": {
                defaultValue: null,
                description: "",
                name: "aria-level",
                required: !1,
                type: { name: "number" },
              },
              "aria-live": {
                defaultValue: null,
                description: "",
                name: "aria-live",
                required: !1,
                type: { name: '"off" | "assertive" | "polite"' },
              },
              "aria-modal": {
                defaultValue: null,
                description: "",
                name: "aria-modal",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-multiline": {
                defaultValue: null,
                description: "",
                name: "aria-multiline",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-multiselectable": {
                defaultValue: null,
                description: "",
                name: "aria-multiselectable",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-orientation": {
                defaultValue: null,
                description: "",
                name: "aria-orientation",
                required: !1,
                type: { name: '"horizontal" | "vertical"' },
              },
              "aria-owns": {
                defaultValue: null,
                description: "",
                name: "aria-owns",
                required: !1,
                type: { name: "string" },
              },
              "aria-placeholder": {
                defaultValue: null,
                description: "",
                name: "aria-placeholder",
                required: !1,
                type: { name: "string" },
              },
              "aria-posinset": {
                defaultValue: null,
                description: "",
                name: "aria-posinset",
                required: !1,
                type: { name: "number" },
              },
              "aria-pressed": {
                defaultValue: null,
                description: "",
                name: "aria-pressed",
                required: !1,
                type: { name: 'boolean | "true" | "false" | "mixed"' },
              },
              "aria-readonly": {
                defaultValue: null,
                description: "",
                name: "aria-readonly",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-relevant": {
                defaultValue: null,
                description: "",
                name: "aria-relevant",
                required: !1,
                type: {
                  name: '"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals"',
                },
              },
              "aria-required": {
                defaultValue: null,
                description: "",
                name: "aria-required",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-roledescription": {
                defaultValue: null,
                description: "",
                name: "aria-roledescription",
                required: !1,
                type: { name: "string" },
              },
              "aria-rowcount": {
                defaultValue: null,
                description: "",
                name: "aria-rowcount",
                required: !1,
                type: { name: "number" },
              },
              "aria-rowindex": {
                defaultValue: null,
                description: "",
                name: "aria-rowindex",
                required: !1,
                type: { name: "number" },
              },
              "aria-rowspan": {
                defaultValue: null,
                description: "",
                name: "aria-rowspan",
                required: !1,
                type: { name: "number" },
              },
              "aria-selected": {
                defaultValue: null,
                description: "",
                name: "aria-selected",
                required: !1,
                type: { name: 'boolean | "true" | "false"' },
              },
              "aria-setsize": {
                defaultValue: null,
                description: "",
                name: "aria-setsize",
                required: !1,
                type: { name: "number" },
              },
              "aria-sort": {
                defaultValue: null,
                description: "",
                name: "aria-sort",
                required: !1,
                type: { name: '"none" | "ascending" | "descending" | "other"' },
              },
              "aria-valuemax": {
                defaultValue: null,
                description: "",
                name: "aria-valuemax",
                required: !1,
                type: { name: "number" },
              },
              "aria-valuemin": {
                defaultValue: null,
                description: "",
                name: "aria-valuemin",
                required: !1,
                type: { name: "number" },
              },
              "aria-valuenow": {
                defaultValue: null,
                description: "",
                name: "aria-valuenow",
                required: !1,
                type: { name: "number" },
              },
              "aria-valuetext": {
                defaultValue: null,
                description: "",
                name: "aria-valuetext",
                required: !1,
                type: { name: "string" },
              },
              dangerouslySetInnerHTML: {
                defaultValue: null,
                description: "",
                name: "dangerouslySetInnerHTML",
                required: !1,
                type: { name: "{ __html: string; }" },
              },
              onCopy: {
                defaultValue: null,
                description: "",
                name: "onCopy",
                required: !1,
                type: { name: "ClipboardEventHandler<HTMLDivElement>" },
              },
              onCopyCapture: {
                defaultValue: null,
                description: "",
                name: "onCopyCapture",
                required: !1,
                type: { name: "ClipboardEventHandler<HTMLDivElement>" },
              },
              onCut: {
                defaultValue: null,
                description: "",
                name: "onCut",
                required: !1,
                type: { name: "ClipboardEventHandler<HTMLDivElement>" },
              },
              onCutCapture: {
                defaultValue: null,
                description: "",
                name: "onCutCapture",
                required: !1,
                type: { name: "ClipboardEventHandler<HTMLDivElement>" },
              },
              onPaste: {
                defaultValue: null,
                description: "",
                name: "onPaste",
                required: !1,
                type: { name: "ClipboardEventHandler<HTMLDivElement>" },
              },
              onPasteCapture: {
                defaultValue: null,
                description: "",
                name: "onPasteCapture",
                required: !1,
                type: { name: "ClipboardEventHandler<HTMLDivElement>" },
              },
              onCompositionEnd: {
                defaultValue: null,
                description: "",
                name: "onCompositionEnd",
                required: !1,
                type: { name: "CompositionEventHandler<HTMLDivElement>" },
              },
              onCompositionEndCapture: {
                defaultValue: null,
                description: "",
                name: "onCompositionEndCapture",
                required: !1,
                type: { name: "CompositionEventHandler<HTMLDivElement>" },
              },
              onCompositionStart: {
                defaultValue: null,
                description: "",
                name: "onCompositionStart",
                required: !1,
                type: { name: "CompositionEventHandler<HTMLDivElement>" },
              },
              onCompositionStartCapture: {
                defaultValue: null,
                description: "",
                name: "onCompositionStartCapture",
                required: !1,
                type: { name: "CompositionEventHandler<HTMLDivElement>" },
              },
              onCompositionUpdate: {
                defaultValue: null,
                description: "",
                name: "onCompositionUpdate",
                required: !1,
                type: { name: "CompositionEventHandler<HTMLDivElement>" },
              },
              onCompositionUpdateCapture: {
                defaultValue: null,
                description: "",
                name: "onCompositionUpdateCapture",
                required: !1,
                type: { name: "CompositionEventHandler<HTMLDivElement>" },
              },
              onFocus: {
                defaultValue: null,
                description: "",
                name: "onFocus",
                required: !1,
                type: { name: "FocusEventHandler<HTMLDivElement>" },
              },
              onFocusCapture: {
                defaultValue: null,
                description: "",
                name: "onFocusCapture",
                required: !1,
                type: { name: "FocusEventHandler<HTMLDivElement>" },
              },
              onBlur: {
                defaultValue: null,
                description: "",
                name: "onBlur",
                required: !1,
                type: { name: "FocusEventHandler<HTMLDivElement>" },
              },
              onBlurCapture: {
                defaultValue: null,
                description: "",
                name: "onBlurCapture",
                required: !1,
                type: { name: "FocusEventHandler<HTMLDivElement>" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onChangeCapture: {
                defaultValue: null,
                description: "",
                name: "onChangeCapture",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onBeforeInput: {
                defaultValue: null,
                description: "",
                name: "onBeforeInput",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onBeforeInputCapture: {
                defaultValue: null,
                description: "",
                name: "onBeforeInputCapture",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onInput: {
                defaultValue: null,
                description: "",
                name: "onInput",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onInputCapture: {
                defaultValue: null,
                description: "",
                name: "onInputCapture",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onReset: {
                defaultValue: null,
                description: "",
                name: "onReset",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onResetCapture: {
                defaultValue: null,
                description: "",
                name: "onResetCapture",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onSubmit: {
                defaultValue: null,
                description: "",
                name: "onSubmit",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onSubmitCapture: {
                defaultValue: null,
                description: "",
                name: "onSubmitCapture",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onInvalid: {
                defaultValue: null,
                description: "",
                name: "onInvalid",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onInvalidCapture: {
                defaultValue: null,
                description: "",
                name: "onInvalidCapture",
                required: !1,
                type: { name: "FormEventHandler<HTMLDivElement>" },
              },
              onLoad: {
                defaultValue: null,
                description: "",
                name: "onLoad",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onLoadCapture: {
                defaultValue: null,
                description: "",
                name: "onLoadCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onError: {
                defaultValue: null,
                description: "",
                name: "onError",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onErrorCapture: {
                defaultValue: null,
                description: "",
                name: "onErrorCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onKeyDown: {
                defaultValue: null,
                description: "",
                name: "onKeyDown",
                required: !1,
                type: { name: "KeyboardEventHandler<HTMLDivElement>" },
              },
              onKeyDownCapture: {
                defaultValue: null,
                description: "",
                name: "onKeyDownCapture",
                required: !1,
                type: { name: "KeyboardEventHandler<HTMLDivElement>" },
              },
              onKeyPress: {
                defaultValue: null,
                description: "",
                name: "onKeyPress",
                required: !1,
                type: { name: "KeyboardEventHandler<HTMLDivElement>" },
              },
              onKeyPressCapture: {
                defaultValue: null,
                description: "",
                name: "onKeyPressCapture",
                required: !1,
                type: { name: "KeyboardEventHandler<HTMLDivElement>" },
              },
              onKeyUp: {
                defaultValue: null,
                description: "",
                name: "onKeyUp",
                required: !1,
                type: { name: "KeyboardEventHandler<HTMLDivElement>" },
              },
              onKeyUpCapture: {
                defaultValue: null,
                description: "",
                name: "onKeyUpCapture",
                required: !1,
                type: { name: "KeyboardEventHandler<HTMLDivElement>" },
              },
              onAbort: {
                defaultValue: null,
                description: "",
                name: "onAbort",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onAbortCapture: {
                defaultValue: null,
                description: "",
                name: "onAbortCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onCanPlay: {
                defaultValue: null,
                description: "",
                name: "onCanPlay",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onCanPlayCapture: {
                defaultValue: null,
                description: "",
                name: "onCanPlayCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onCanPlayThrough: {
                defaultValue: null,
                description: "",
                name: "onCanPlayThrough",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onCanPlayThroughCapture: {
                defaultValue: null,
                description: "",
                name: "onCanPlayThroughCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onDurationChange: {
                defaultValue: null,
                description: "",
                name: "onDurationChange",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onDurationChangeCapture: {
                defaultValue: null,
                description: "",
                name: "onDurationChangeCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onEmptied: {
                defaultValue: null,
                description: "",
                name: "onEmptied",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onEmptiedCapture: {
                defaultValue: null,
                description: "",
                name: "onEmptiedCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onEncrypted: {
                defaultValue: null,
                description: "",
                name: "onEncrypted",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onEncryptedCapture: {
                defaultValue: null,
                description: "",
                name: "onEncryptedCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onEnded: {
                defaultValue: null,
                description: "",
                name: "onEnded",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onEndedCapture: {
                defaultValue: null,
                description: "",
                name: "onEndedCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onLoadedData: {
                defaultValue: null,
                description: "",
                name: "onLoadedData",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onLoadedDataCapture: {
                defaultValue: null,
                description: "",
                name: "onLoadedDataCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onLoadedMetadata: {
                defaultValue: null,
                description: "",
                name: "onLoadedMetadata",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onLoadedMetadataCapture: {
                defaultValue: null,
                description: "",
                name: "onLoadedMetadataCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onLoadStart: {
                defaultValue: null,
                description: "",
                name: "onLoadStart",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onLoadStartCapture: {
                defaultValue: null,
                description: "",
                name: "onLoadStartCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onPause: {
                defaultValue: null,
                description: "",
                name: "onPause",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onPauseCapture: {
                defaultValue: null,
                description: "",
                name: "onPauseCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onPlay: {
                defaultValue: null,
                description: "",
                name: "onPlay",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onPlayCapture: {
                defaultValue: null,
                description: "",
                name: "onPlayCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onPlaying: {
                defaultValue: null,
                description: "",
                name: "onPlaying",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onPlayingCapture: {
                defaultValue: null,
                description: "",
                name: "onPlayingCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onProgress: {
                defaultValue: null,
                description: "",
                name: "onProgress",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onProgressCapture: {
                defaultValue: null,
                description: "",
                name: "onProgressCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onRateChange: {
                defaultValue: null,
                description: "",
                name: "onRateChange",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onRateChangeCapture: {
                defaultValue: null,
                description: "",
                name: "onRateChangeCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onSeeked: {
                defaultValue: null,
                description: "",
                name: "onSeeked",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onSeekedCapture: {
                defaultValue: null,
                description: "",
                name: "onSeekedCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onSeeking: {
                defaultValue: null,
                description: "",
                name: "onSeeking",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onSeekingCapture: {
                defaultValue: null,
                description: "",
                name: "onSeekingCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onStalled: {
                defaultValue: null,
                description: "",
                name: "onStalled",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onStalledCapture: {
                defaultValue: null,
                description: "",
                name: "onStalledCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onSuspend: {
                defaultValue: null,
                description: "",
                name: "onSuspend",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onSuspendCapture: {
                defaultValue: null,
                description: "",
                name: "onSuspendCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onTimeUpdate: {
                defaultValue: null,
                description: "",
                name: "onTimeUpdate",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onTimeUpdateCapture: {
                defaultValue: null,
                description: "",
                name: "onTimeUpdateCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onVolumeChange: {
                defaultValue: null,
                description: "",
                name: "onVolumeChange",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onVolumeChangeCapture: {
                defaultValue: null,
                description: "",
                name: "onVolumeChangeCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onWaiting: {
                defaultValue: null,
                description: "",
                name: "onWaiting",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onWaitingCapture: {
                defaultValue: null,
                description: "",
                name: "onWaitingCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onAuxClick: {
                defaultValue: null,
                description: "",
                name: "onAuxClick",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onAuxClickCapture: {
                defaultValue: null,
                description: "",
                name: "onAuxClickCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onClick: {
                defaultValue: null,
                description: "",
                name: "onClick",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onClickCapture: {
                defaultValue: null,
                description: "",
                name: "onClickCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onContextMenu: {
                defaultValue: null,
                description: "",
                name: "onContextMenu",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onContextMenuCapture: {
                defaultValue: null,
                description: "",
                name: "onContextMenuCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onDoubleClick: {
                defaultValue: null,
                description: "",
                name: "onDoubleClick",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onDoubleClickCapture: {
                defaultValue: null,
                description: "",
                name: "onDoubleClickCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onDrag: {
                defaultValue: null,
                description: "",
                name: "onDrag",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragCapture: {
                defaultValue: null,
                description: "",
                name: "onDragCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragEnd: {
                defaultValue: null,
                description: "",
                name: "onDragEnd",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragEndCapture: {
                defaultValue: null,
                description: "",
                name: "onDragEndCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragEnter: {
                defaultValue: null,
                description: "",
                name: "onDragEnter",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragEnterCapture: {
                defaultValue: null,
                description: "",
                name: "onDragEnterCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragExit: {
                defaultValue: null,
                description: "",
                name: "onDragExit",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragExitCapture: {
                defaultValue: null,
                description: "",
                name: "onDragExitCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragLeave: {
                defaultValue: null,
                description: "",
                name: "onDragLeave",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragLeaveCapture: {
                defaultValue: null,
                description: "",
                name: "onDragLeaveCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragOver: {
                defaultValue: null,
                description: "",
                name: "onDragOver",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragOverCapture: {
                defaultValue: null,
                description: "",
                name: "onDragOverCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragStart: {
                defaultValue: null,
                description: "",
                name: "onDragStart",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDragStartCapture: {
                defaultValue: null,
                description: "",
                name: "onDragStartCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDrop: {
                defaultValue: null,
                description: "",
                name: "onDrop",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onDropCapture: {
                defaultValue: null,
                description: "",
                name: "onDropCapture",
                required: !1,
                type: { name: "DragEventHandler<HTMLDivElement>" },
              },
              onMouseDown: {
                defaultValue: null,
                description: "",
                name: "onMouseDown",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseDownCapture: {
                defaultValue: null,
                description: "",
                name: "onMouseDownCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseEnter: {
                defaultValue: null,
                description: "",
                name: "onMouseEnter",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseLeave: {
                defaultValue: null,
                description: "",
                name: "onMouseLeave",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseMove: {
                defaultValue: null,
                description: "",
                name: "onMouseMove",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseMoveCapture: {
                defaultValue: null,
                description: "",
                name: "onMouseMoveCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseOut: {
                defaultValue: null,
                description: "",
                name: "onMouseOut",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseOutCapture: {
                defaultValue: null,
                description: "",
                name: "onMouseOutCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseOver: {
                defaultValue: null,
                description: "",
                name: "onMouseOver",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseOverCapture: {
                defaultValue: null,
                description: "",
                name: "onMouseOverCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseUp: {
                defaultValue: null,
                description: "",
                name: "onMouseUp",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onMouseUpCapture: {
                defaultValue: null,
                description: "",
                name: "onMouseUpCapture",
                required: !1,
                type: { name: "MouseEventHandler<HTMLDivElement>" },
              },
              onSelect: {
                defaultValue: null,
                description: "",
                name: "onSelect",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onSelectCapture: {
                defaultValue: null,
                description: "",
                name: "onSelectCapture",
                required: !1,
                type: { name: "ReactEventHandler<HTMLDivElement>" },
              },
              onTouchCancel: {
                defaultValue: null,
                description: "",
                name: "onTouchCancel",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onTouchCancelCapture: {
                defaultValue: null,
                description: "",
                name: "onTouchCancelCapture",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onTouchEnd: {
                defaultValue: null,
                description: "",
                name: "onTouchEnd",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onTouchEndCapture: {
                defaultValue: null,
                description: "",
                name: "onTouchEndCapture",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onTouchMove: {
                defaultValue: null,
                description: "",
                name: "onTouchMove",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onTouchMoveCapture: {
                defaultValue: null,
                description: "",
                name: "onTouchMoveCapture",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onTouchStart: {
                defaultValue: null,
                description: "",
                name: "onTouchStart",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onTouchStartCapture: {
                defaultValue: null,
                description: "",
                name: "onTouchStartCapture",
                required: !1,
                type: { name: "TouchEventHandler<HTMLDivElement>" },
              },
              onPointerDown: {
                defaultValue: null,
                description: "",
                name: "onPointerDown",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerDownCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerDownCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerMove: {
                defaultValue: null,
                description: "",
                name: "onPointerMove",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerMoveCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerMoveCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerUp: {
                defaultValue: null,
                description: "",
                name: "onPointerUp",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerUpCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerUpCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerCancel: {
                defaultValue: null,
                description: "",
                name: "onPointerCancel",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerCancelCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerCancelCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerEnter: {
                defaultValue: null,
                description: "",
                name: "onPointerEnter",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerEnterCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerEnterCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerLeave: {
                defaultValue: null,
                description: "",
                name: "onPointerLeave",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerLeaveCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerLeaveCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerOver: {
                defaultValue: null,
                description: "",
                name: "onPointerOver",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerOverCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerOverCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerOut: {
                defaultValue: null,
                description: "",
                name: "onPointerOut",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onPointerOutCapture: {
                defaultValue: null,
                description: "",
                name: "onPointerOutCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onGotPointerCapture: {
                defaultValue: null,
                description: "",
                name: "onGotPointerCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onGotPointerCaptureCapture: {
                defaultValue: null,
                description: "",
                name: "onGotPointerCaptureCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onLostPointerCapture: {
                defaultValue: null,
                description: "",
                name: "onLostPointerCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onLostPointerCaptureCapture: {
                defaultValue: null,
                description: "",
                name: "onLostPointerCaptureCapture",
                required: !1,
                type: { name: "PointerEventHandler<HTMLDivElement>" },
              },
              onScroll: {
                defaultValue: null,
                description: "",
                name: "onScroll",
                required: !1,
                type: { name: "UIEventHandler<HTMLDivElement>" },
              },
              onScrollCapture: {
                defaultValue: null,
                description: "",
                name: "onScrollCapture",
                required: !1,
                type: { name: "UIEventHandler<HTMLDivElement>" },
              },
              onWheel: {
                defaultValue: null,
                description: "",
                name: "onWheel",
                required: !1,
                type: { name: "WheelEventHandler<HTMLDivElement>" },
              },
              onWheelCapture: {
                defaultValue: null,
                description: "",
                name: "onWheelCapture",
                required: !1,
                type: { name: "WheelEventHandler<HTMLDivElement>" },
              },
              onAnimationStart: {
                defaultValue: null,
                description: "",
                name: "onAnimationStart",
                required: !1,
                type: { name: "AnimationEventHandler<HTMLDivElement>" },
              },
              onAnimationStartCapture: {
                defaultValue: null,
                description: "",
                name: "onAnimationStartCapture",
                required: !1,
                type: { name: "AnimationEventHandler<HTMLDivElement>" },
              },
              onAnimationEnd: {
                defaultValue: null,
                description: "",
                name: "onAnimationEnd",
                required: !1,
                type: { name: "AnimationEventHandler<HTMLDivElement>" },
              },
              onAnimationEndCapture: {
                defaultValue: null,
                description: "",
                name: "onAnimationEndCapture",
                required: !1,
                type: { name: "AnimationEventHandler<HTMLDivElement>" },
              },
              onAnimationIteration: {
                defaultValue: null,
                description: "",
                name: "onAnimationIteration",
                required: !1,
                type: { name: "AnimationEventHandler<HTMLDivElement>" },
              },
              onAnimationIterationCapture: {
                defaultValue: null,
                description: "",
                name: "onAnimationIterationCapture",
                required: !1,
                type: { name: "AnimationEventHandler<HTMLDivElement>" },
              },
              onTransitionEnd: {
                defaultValue: null,
                description: "",
                name: "onTransitionEnd",
                required: !1,
                type: { name: "TransitionEventHandler<HTMLDivElement>" },
              },
              onTransitionEndCapture: {
                defaultValue: null,
                description: "",
                name: "onTransitionEndCapture",
                required: !1,
                type: { name: "TransitionEventHandler<HTMLDivElement>" },
              },
              gridGap: {
                defaultValue: null,
                description: "",
                name: "gridGap",
                required: !1,
                type: {
                  name: "ResponsiveValue<GridGap<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              gridColumnGap: {
                defaultValue: null,
                description: "",
                name: "gridColumnGap",
                required: !1,
                type: {
                  name: "ResponsiveValue<GridColumnGap<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              gridRowGap: {
                defaultValue: null,
                description: "",
                name: "gridRowGap",
                required: !1,
                type: {
                  name: "ResponsiveValue<GridRowGap<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              gridColumn: {
                defaultValue: null,
                description: "",
                name: "gridColumn",
                required: !1,
                type: {
                  name: "ResponsiveValue<GridColumn, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              gridRow: {
                defaultValue: null,
                description: "",
                name: "gridRow",
                required: !1,
                type: {
                  name: "ResponsiveValue<GridRow, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              gridAutoFlow: {
                defaultValue: null,
                description: "",
                name: "gridAutoFlow",
                required: !1,
                type: {
                  name: "ResponsiveValue<GridAutoFlow, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              gridAutoColumns: {
                defaultValue: null,
                description: "",
                name: "gridAutoColumns",
                required: !1,
                type: {
                  name: "ResponsiveValue<GridAutoColumns<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              gridAutoRows: {
                defaultValue: null,
                description: "",
                name: "gridAutoRows",
                required: !1,
                type: {
                  name: "ResponsiveValue<GridAutoRows<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              gridTemplateColumns: {
                defaultValue: null,
                description: "",
                name: "gridTemplateColumns",
                required: !1,
                type: {
                  name: "ResponsiveValue<GridTemplateColumns<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              gridTemplateRows: {
                defaultValue: null,
                description: "",
                name: "gridTemplateRows",
                required: !1,
                type: {
                  name: "ResponsiveValue<GridTemplateRows<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              gridTemplateAreas: {
                defaultValue: null,
                description: "",
                name: "gridTemplateAreas",
                required: !1,
                type: {
                  name: "ResponsiveValue<GridTemplateAreas, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              gridArea: {
                defaultValue: null,
                description: "",
                name: "gridArea",
                required: !1,
                type: {
                  name: "ResponsiveValue<GridArea, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              width: {
                defaultValue: null,
                description: "",
                name: "width",
                required: !1,
                type: {
                  name: "ResponsiveValue<Width<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              height: {
                defaultValue: null,
                description: "",
                name: "height",
                required: !1,
                type: {
                  name: "ResponsiveValue<Height<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              minWidth: {
                defaultValue: null,
                description: "",
                name: "minWidth",
                required: !1,
                type: {
                  name: "ResponsiveValue<MinWidth<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              minHeight: {
                defaultValue: null,
                description: "",
                name: "minHeight",
                required: !1,
                type: {
                  name: "ResponsiveValue<MinHeight<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              maxWidth: {
                defaultValue: null,
                description: "",
                name: "maxWidth",
                required: !1,
                type: {
                  name: "ResponsiveValue<MaxWidth<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              maxHeight: {
                defaultValue: null,
                description: "",
                name: "maxHeight",
                required: !1,
                type: {
                  name: "ResponsiveValue<MaxHeight<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              display: {
                defaultValue: null,
                description: "",
                name: "display",
                required: !1,
                type: {
                  name: "ResponsiveValue<Display, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              verticalAlign: {
                defaultValue: null,
                description: "",
                name: "verticalAlign",
                required: !1,
                type: {
                  name: "ResponsiveValue<VerticalAlign<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              size: {
                defaultValue: null,
                description: "",
                name: "size",
                required: !1,
                type: {
                  name: "ResponsiveValue<Height<TLengthStyledSystem>, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              overflow: {
                defaultValue: null,
                description: "",
                name: "overflow",
                required: !1,
                type: {
                  name: "ResponsiveValue<Overflow, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              overflowX: {
                defaultValue: null,
                description: "",
                name: "overflowX",
                required: !1,
                type: {
                  name: "ResponsiveValue<OverflowX, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              overflowY: {
                defaultValue: null,
                description: "",
                name: "overflowY",
                required: !1,
                type: {
                  name: "ResponsiveValue<OverflowY, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              bg: {
                defaultValue: null,
                description: "",
                name: "bg",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              backgroundColor: {
                defaultValue: null,
                description: "",
                name: "backgroundColor",
                required: !1,
                type: {
                  name: "ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              opacity: {
                defaultValue: null,
                description: "",
                name: "opacity",
                required: !1,
                type: {
                  name: "ResponsiveValue<Opacity, Required<Theme<TLengthStyledSystem>>>",
                },
              },
              theme: {
                defaultValue: null,
                description: "",
                name: "theme",
                required: !1,
                type: { name: "any" },
              },
              as: {
                defaultValue: null,
                description: "",
                name: "as",
                required: !1,
                type: { name: "undefined" },
              },
              forwardedAs: {
                defaultValue: null,
                description: "",
                name: "forwardedAs",
                required: !1,
                type: { name: "undefined" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/layout/src/components/grid.tsx#Grid"
            ] = {
              docgenInfo: grid_Grid.__docgenInfo,
              name: "Grid",
              path: "packages/layout/src/components/grid.tsx#Grid",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = {
        title: "Components / Layout / Grid",
        component: grid_Grid,
      };
      var grid_stories_Template = function Template(args) {
        return Object(jsx_runtime.jsxs)(
          grid_Grid,
          Object.assign({ display: "grid", height: "100vh" }, args, {
            children: [
              Object(jsx_runtime.jsx)(grid_Grid, {
                gridArea: "header",
                backgroundColor: "red",
              }),
              Object(jsx_runtime.jsx)(grid_Grid, {
                gridArea: "main",
                backgroundColor: "green",
              }),
              Object(jsx_runtime.jsx)(grid_Grid, {
                gridArea: "sidebar",
                backgroundColor: "blue",
              }),
              Object(jsx_runtime.jsx)(grid_Grid, {
                gridArea: "footer",
                backgroundColor: "orange",
              }),
            ],
          })
        );
      };
      grid_stories_Template.displayName = "Template";
      var Basic = grid_stories_Template.bind({});
      (Basic.args = {
        gridTemplateAreas:
          ' \n  "header header header header"\n  "sidebar main main main"\n  "sidebar main main main"\n  "footer footer footer footer"  \n  ',
      }),
        (Basic.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\n  <Grid display="grid" height="100vh" {...args}>\n    <Grid gridArea="header" backgroundColor="red" />\n    <Grid gridArea="main" backgroundColor="green" />\n    <Grid gridArea="sidebar" backgroundColor="blue" />\n    <Grid gridArea="footer" backgroundColor="orange" />\n  </Grid>\n)',
            },
          },
          Basic.parameters
        ));
    },
    "./packages/typography/src/components/heading.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return Title;
      });
      __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),
        __webpack_require__("./node_modules/core-js/modules/es.string.bold.js");
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        );
      function _taggedTemplateLiteralLoose(strings, raw) {
        return raw || (raw = strings.slice(0)), (strings.raw = raw), strings;
      }
      var baseStyles = Object(
          styled_components__WEBPACK_IMPORTED_MODULE_2__.css
        )(
          _templateObject ||
            (_templateObject = _taggedTemplateLiteralLoose([
              '\n  @import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;700&display=swap");\n  font-family: ',
              ";\n  color: ",
              ";\n  font-weight: ",
              ";\n  line-height: ",
              ";\n  letter-spacing: ",
              "em;\n  word-spacing: ",
              "em;\n",
            ])),
          function (props) {
            return props.theme.fontFamilies.title;
          },
          function (props) {
            return props.theme.colors.text;
          },
          function (props) {
            return props.theme.fontWeights.bold;
          },
          function (props) {
            return props.theme.lineHeights.title;
          },
          function (props) {
            return props.theme.letterSpacings.title;
          },
          function (props) {
            return props.theme.wordSpacings.title;
          }
        ),
        Title = {
          One: styled_components__WEBPACK_IMPORTED_MODULE_2__.default.h1(
            _templateObject2 ||
              (_templateObject2 = _taggedTemplateLiteralLoose([
                "\n  ",
                "\n  font-size: ",
                "px;\n  padding-bottom: ",
                "px;\n",
              ])),
            baseStyles,
            function (props) {
              return props.theme.fontSizes.title1;
            },
            function (props) {
              return props.theme.space[8];
            }
          ),
          Two: styled_components__WEBPACK_IMPORTED_MODULE_2__.default.h2(
            _templateObject3 ||
              (_templateObject3 = _taggedTemplateLiteralLoose([
                "\n  ",
                ";\n  font-size: ",
                "px;\n  padding-bottom: ",
                "px;\n",
              ])),
            baseStyles,
            function (props) {
              return props.theme.fontSizes.title2;
            },
            function (props) {
              return props.theme.space[7];
            }
          ),
          Three: styled_components__WEBPACK_IMPORTED_MODULE_2__.default.h3(
            _templateObject4 ||
              (_templateObject4 = _taggedTemplateLiteralLoose([
                "\n  ",
                ";\n  font-size: ",
                "px;\n  padding-bottom: ",
                "px;\n",
              ])),
            baseStyles,
            function (props) {
              return props.theme.fontSizes.title3;
            },
            function (props) {
              return props.theme.space[6];
            }
          ),
        };
    },
    "./packages/typography/src/components/text.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return Text;
      });
      var _templateObject;
      __webpack_require__("./node_modules/core-js/modules/es.array.slice.js");
      var Text = __webpack_require__(
        "./node_modules/styled-components/dist/styled-components.browser.esm.js"
      ).default.p(
        _templateObject ||
          (_templateObject = (function _taggedTemplateLiteralLoose(
            strings,
            raw
          ) {
            return (
              raw || (raw = strings.slice(0)), (strings.raw = raw), strings
            );
          })([
            '\n  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600&display=swap");\n  font-family: ',
            ";\n  color: ",
            ";\n  max-width: ",
            "px;\n  padding-bottom: ",
            "px;\n  font-weight: ",
            ";\n  font-size: ",
            "px;\n  line-height: ",
            ";\n  letter-spacing: ",
            "em;\n  word-spacing: ",
            "em;\n",
          ])),
        function (props) {
          return props.theme.fontFamilies.base;
        },
        function (props) {
          return props.theme.colors.text;
        },
        function (props) {
          return props.theme.space[15];
        },
        function (props) {
          return props.theme.space[9];
        },
        function (props) {
          return props.theme.fontWeights.medium;
        },
        function (props) {
          return props.theme.fontSizes.base;
        },
        function (props) {
          return props.theme.lineHeights.body;
        },
        function (props) {
          return props.theme.letterSpacings.base;
        },
        function (props) {
          return props.theme.wordSpacings.base;
        }
      );
      try {
        (Text.displayName = "Text"),
          (Text.__docgenInfo = {
            description: "",
            displayName: "Text",
            props: {
              ref: {
                defaultValue: null,
                description: "",
                name: "ref",
                required: !1,
                type: { name: "Ref<HTMLParagraphElement>" },
              },
              theme: {
                defaultValue: null,
                description: "",
                name: "theme",
                required: !1,
                type: { name: "any" },
              },
              as: {
                defaultValue: null,
                description: "",
                name: "as",
                required: !1,
                type: { name: "undefined" },
              },
              forwardedAs: {
                defaultValue: null,
                description: "",
                name: "forwardedAs",
                required: !1,
                type: { name: "undefined" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/typography/src/components/text.tsx#Text"
            ] = {
              docgenInfo: Text.__docgenInfo,
              name: "Text",
              path: "packages/typography/src/components/text.tsx#Text",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./packages/typography/stories/text.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Paragraph", function () {
          return Paragraph;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          "MultiParagraph",
          function () {
            return MultiParagraph;
          }
        );
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__("./node_modules/react/index.js");
      var _src_components_text__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__("./packages/typography/src/components/text.tsx"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      __webpack_exports__.default = {
        title: "Typography/Text",
        component: _src_components_text__WEBPACK_IMPORTED_MODULE_2__.a,
      };
      var Paragraph = function Paragraph() {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
          _src_components_text__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            children:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue est eu tempor sollicitudin. Aenean nisl tortor, tempor eu magna in, facilisis ornare felis. Aliquam tristique eros maximus, posuere felis eu, euismod augue. Nunc tellus dui, malesuada eu magna molestie, consequat suscipit mauris. Sed volutpat euismod dignissim. Phasellus lacinia mi non nisl rutrum pellentesque. Sed fermentum odio sed orci lobortis accumsan. Vestibulum suscipit mollis odio. Suspendisse iaculis porttitor fringilla. Donec vitae magna nec nisl accumsan pulvinar. Donec mattis urna eu libero sollicitudin, ac euismod quam consequat. Praesent ultricies ultrices enim, et maximus mauris vulputate in. Ut ornare ut libero sed faucibus.",
          }
        );
      };
      Paragraph.displayName = "Paragraph";
      var MultiParagraph = function MultiParagraph() {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
          {
            children: [
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                _src_components_text__WEBPACK_IMPORTED_MODULE_2__.a,
                {
                  children:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue est eu tempor sollicitudin. Aenean nisl tortor, tempor eu magna in, facilisis ornare felis. Aliquam tristique eros maximus, posuere felis eu, euismod augue. Nunc tellus dui, malesuada eu magna molestie, consequat suscipit mauris. Sed volutpat euismod dignissim. Phasellus lacinia mi non nisl rutrum pellentesque. Sed fermentum odio sed orci lobortis accumsan. Vestibulum suscipit mollis odio. Suspendisse iaculis porttitor fringilla. Donec vitae magna nec nisl accumsan pulvinar. Donec mattis urna eu libero sollicitudin, ac euismod quam consequat. Praesent ultricies ultrices enim, et maximus mauris vulputate in. Ut ornare ut libero sed faucibus.",
                }
              ),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                _src_components_text__WEBPACK_IMPORTED_MODULE_2__.a,
                {
                  children:
                    "Nam a turpis urna. Proin nec pharetra turpis, eget euismod nunc. Aliquam pharetra ut odio ac suscipit. Vivamus eu lacinia turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam et dolor ac magna auctor egestas. Vestibulum non turpis purus. Fusce at magna vel est ullamcorper egestas. Quisque a elit ac nibh rhoncus varius non nec felis. Curabitur non leo nisi. Nunc semper aliquam dictum. Aenean et dignissim odio. Cras neque velit, ultricies eu sodales nec, auctor a massa. Ut at dignissim lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                }
              ),
            ],
          }
        );
      };
      (Paragraph.parameters = Object.assign(
        {
          storySource: {
            source:
              "() => (\n  <Text>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue est\n    eu tempor sollicitudin. Aenean nisl tortor, tempor eu magna in, facilisis\n    ornare felis. Aliquam tristique eros maximus, posuere felis eu, euismod\n    augue. Nunc tellus dui, malesuada eu magna molestie, consequat suscipit\n    mauris. Sed volutpat euismod dignissim. Phasellus lacinia mi non nisl rutrum\n    pellentesque. Sed fermentum odio sed orci lobortis accumsan. Vestibulum\n    suscipit mollis odio. Suspendisse iaculis porttitor fringilla. Donec vitae\n    magna nec nisl accumsan pulvinar. Donec mattis urna eu libero sollicitudin,\n    ac euismod quam consequat. Praesent ultricies ultrices enim, et maximus\n    mauris vulputate in. Ut ornare ut libero sed faucibus.\n  </Text>\n)",
          },
        },
        Paragraph.parameters
      )),
        (MultiParagraph.parameters = Object.assign(
          {
            storySource: {
              source:
                "() => (\n  <>\n    <Text>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue est\n      eu tempor sollicitudin. Aenean nisl tortor, tempor eu magna in, facilisis\n      ornare felis. Aliquam tristique eros maximus, posuere felis eu, euismod\n      augue. Nunc tellus dui, malesuada eu magna molestie, consequat suscipit\n      mauris. Sed volutpat euismod dignissim. Phasellus lacinia mi non nisl\n      rutrum pellentesque. Sed fermentum odio sed orci lobortis accumsan.\n      Vestibulum suscipit mollis odio. Suspendisse iaculis porttitor fringilla.\n      Donec vitae magna nec nisl accumsan pulvinar. Donec mattis urna eu libero\n      sollicitudin, ac euismod quam consequat. Praesent ultricies ultrices enim,\n      et maximus mauris vulputate in. Ut ornare ut libero sed faucibus.\n    </Text>\n    <Text>\n      Nam a turpis urna. Proin nec pharetra turpis, eget euismod nunc. Aliquam\n      pharetra ut odio ac suscipit. Vivamus eu lacinia turpis. Pellentesque\n      habitant morbi tristique senectus et netus et malesuada fames ac turpis\n      egestas. Nullam et dolor ac magna auctor egestas. Vestibulum non turpis\n      purus. Fusce at magna vel est ullamcorper egestas. Quisque a elit ac nibh\n      rhoncus varius non nec felis. Curabitur non leo nisi. Nunc semper aliquam\n      dictum. Aenean et dignissim odio. Cras neque velit, ultricies eu sodales\n      nec, auctor a massa. Ut at dignissim lacus. Orci varius natoque penatibus\n      et magnis dis parturient montes, nascetur ridiculus mus.\n    </Text>\n  </>\n)",
            },
          },
          MultiParagraph.parameters
        ));
    },
    "./packages/typography/stories/title.one.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "TitleOne", function () {
          return TitleOne;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          "Title1WithParagraph",
          function () {
            return Title1WithParagraph;
          }
        );
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__("./node_modules/react/index.js");
      var _src_components_text__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__("./packages/typography/src/components/text.tsx"),
        _src_components_heading__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            "./packages/typography/src/components/heading.tsx"
          ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      __webpack_exports__.default = {
        title: "Typography/Title/One",
        component: _src_components_heading__WEBPACK_IMPORTED_MODULE_3__.a.One,
      };
      var TitleOne = function TitleOne() {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _src_components_heading__WEBPACK_IMPORTED_MODULE_3__.a.One,
          { children: "Lorem ipsum dolor sit amet" }
        );
      };
      TitleOne.displayName = "TitleOne";
      var Title1WithParagraph = function Title1WithParagraph() {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
          {
            children: [
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                _src_components_heading__WEBPACK_IMPORTED_MODULE_3__.a.One,
                { children: "Lorem ipsum dolor sit amet" }
              ),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                _src_components_text__WEBPACK_IMPORTED_MODULE_2__.a,
                {
                  children:
                    "Nam a turpis urna. Proin nec pharetra turpis, eget euismod nunc. Aliquam pharetra ut odio ac suscipit. Vivamus eu lacinia turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam et dolor ac magna auctor egestas. Vestibulum non turpis purus. Fusce at magna vel est ullamcorper egestas. Quisque a elit ac nibh rhoncus varius non nec felis. Curabitur non leo nisi. Nunc semper aliquam dictum. Aenean et dignissim odio. Cras neque velit, ultricies eu sodales nec, auctor a massa. Ut at dignissim lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                }
              ),
            ],
          }
        );
      };
      (TitleOne.parameters = Object.assign(
        {
          storySource: {
            source:
              "() => (\n  <Title.One>Lorem ipsum dolor sit amet</Title.One>\n)",
          },
        },
        TitleOne.parameters
      )),
        (Title1WithParagraph.parameters = Object.assign(
          {
            storySource: {
              source:
                "() => (\n  <>\n    <Title.One>Lorem ipsum dolor sit amet</Title.One>\n    <Text>\n      Nam a turpis urna. Proin nec pharetra turpis, eget euismod nunc. Aliquam\n      pharetra ut odio ac suscipit. Vivamus eu lacinia turpis. Pellentesque\n      habitant morbi tristique senectus et netus et malesuada fames ac turpis\n      egestas. Nullam et dolor ac magna auctor egestas. Vestibulum non turpis\n      purus. Fusce at magna vel est ullamcorper egestas. Quisque a elit ac nibh\n      rhoncus varius non nec felis. Curabitur non leo nisi. Nunc semper aliquam\n      dictum. Aenean et dignissim odio. Cras neque velit, ultricies eu sodales\n      nec, auctor a massa. Ut at dignissim lacus. Orci varius natoque penatibus\n      et magnis dis parturient montes, nascetur ridiculus mus.\n    </Text>\n  </>\n)",
            },
          },
          Title1WithParagraph.parameters
        ));
    },
    "./packages/typography/stories/title.three.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "TitleThree", function () {
          return TitleThree;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          "Title1WithParagraph",
          function () {
            return Title1WithParagraph;
          }
        );
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__("./node_modules/react/index.js");
      var _src_components_text__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__("./packages/typography/src/components/text.tsx"),
        _src_components_heading__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            "./packages/typography/src/components/heading.tsx"
          ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      __webpack_exports__.default = {
        title: "Typography/Title/Three",
        component: _src_components_heading__WEBPACK_IMPORTED_MODULE_3__.a.Three,
      };
      var TitleThree = function TitleThree() {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _src_components_heading__WEBPACK_IMPORTED_MODULE_3__.a.Three,
          { children: "Lorem ipsum dolor sit amet" }
        );
      };
      TitleThree.displayName = "TitleThree";
      var Title1WithParagraph = function Title1WithParagraph() {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
          {
            children: [
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                _src_components_heading__WEBPACK_IMPORTED_MODULE_3__.a.Three,
                { children: "Lorem ipsum dolor sit amet" }
              ),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                _src_components_text__WEBPACK_IMPORTED_MODULE_2__.a,
                {
                  children:
                    "Nam a turpis urna. Proin nec pharetra turpis, eget euismod nunc. Aliquam pharetra ut odio ac suscipit. Vivamus eu lacinia turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam et dolor ac magna auctor egestas. Vestibulum non turpis purus. Fusce at magna vel est ullamcorper egestas. Quisque a elit ac nibh rhoncus varius non nec felis. Curabitur non leo nisi. Nunc semper aliquam dictum. Aenean et dignissim odio. Cras neque velit, ultricies eu sodales nec, auctor a massa. Ut at dignissim lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                }
              ),
            ],
          }
        );
      };
      (TitleThree.parameters = Object.assign(
        {
          storySource: {
            source:
              "() => (\n  <Title.Three>Lorem ipsum dolor sit amet</Title.Three>\n)",
          },
        },
        TitleThree.parameters
      )),
        (Title1WithParagraph.parameters = Object.assign(
          {
            storySource: {
              source:
                "() => (\n  <>\n    <Title.Three>Lorem ipsum dolor sit amet</Title.Three>\n    <Text>\n      Nam a turpis urna. Proin nec pharetra turpis, eget euismod nunc. Aliquam\n      pharetra ut odio ac suscipit. Vivamus eu lacinia turpis. Pellentesque\n      habitant morbi tristique senectus et netus et malesuada fames ac turpis\n      egestas. Nullam et dolor ac magna auctor egestas. Vestibulum non turpis\n      purus. Fusce at magna vel est ullamcorper egestas. Quisque a elit ac nibh\n      rhoncus varius non nec felis. Curabitur non leo nisi. Nunc semper aliquam\n      dictum. Aenean et dignissim odio. Cras neque velit, ultricies eu sodales\n      nec, auctor a massa. Ut at dignissim lacus. Orci varius natoque penatibus\n      et magnis dis parturient montes, nascetur ridiculus mus.\n    </Text>\n  </>\n)",
            },
          },
          Title1WithParagraph.parameters
        ));
    },
    "./packages/typography/stories/title.two.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "TitleTwo", function () {
          return TitleTwo;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          "TitleTwoWithParagraph",
          function () {
            return TitleTwoWithParagraph;
          }
        );
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__("./node_modules/react/index.js");
      var _src_components_text__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__("./packages/typography/src/components/text.tsx"),
        _src_components_heading__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            "./packages/typography/src/components/heading.tsx"
          ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      __webpack_exports__.default = {
        title: "Typography/Title/Two",
        component: _src_components_heading__WEBPACK_IMPORTED_MODULE_3__.a.Two,
      };
      var TitleTwo = function TitleTwo() {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _src_components_heading__WEBPACK_IMPORTED_MODULE_3__.a.Two,
          { children: "Lorem ipsum dolor sit amet" }
        );
      };
      TitleTwo.displayName = "TitleTwo";
      var TitleTwoWithParagraph = function TitleTwoWithParagraph() {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
          {
            children: [
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                _src_components_heading__WEBPACK_IMPORTED_MODULE_3__.a.Two,
                { children: "Lorem ipsum dolor sit amet" }
              ),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                _src_components_text__WEBPACK_IMPORTED_MODULE_2__.a,
                {
                  children:
                    "Nam a turpis urna. Proin nec pharetra turpis, eget euismod nunc. Aliquam pharetra ut odio ac suscipit. Vivamus eu lacinia turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam et dolor ac magna auctor egestas. Vestibulum non turpis purus. Fusce at magna vel est ullamcorper egestas. Quisque a elit ac nibh rhoncus varius non nec felis. Curabitur non leo nisi. Nunc semper aliquam dictum. Aenean et dignissim odio. Cras neque velit, ultricies eu sodales nec, auctor a massa. Ut at dignissim lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                }
              ),
            ],
          }
        );
      };
      (TitleTwo.parameters = Object.assign(
        {
          storySource: {
            source:
              "() => (\n  <Title.Two>Lorem ipsum dolor sit amet</Title.Two>\n)",
          },
        },
        TitleTwo.parameters
      )),
        (TitleTwoWithParagraph.parameters = Object.assign(
          {
            storySource: {
              source:
                "() => (\n  <>\n    <Title.Two>Lorem ipsum dolor sit amet</Title.Two>\n    <Text>\n      Nam a turpis urna. Proin nec pharetra turpis, eget euismod nunc. Aliquam\n      pharetra ut odio ac suscipit. Vivamus eu lacinia turpis. Pellentesque\n      habitant morbi tristique senectus et netus et malesuada fames ac turpis\n      egestas. Nullam et dolor ac magna auctor egestas. Vestibulum non turpis\n      purus. Fusce at magna vel est ullamcorper egestas. Quisque a elit ac nibh\n      rhoncus varius non nec felis. Curabitur non leo nisi. Nunc semper aliquam\n      dictum. Aenean et dignissim odio. Cras neque velit, ultricies eu sodales\n      nec, auctor a massa. Ut at dignissim lacus. Orci varius natoque penatibus\n      et magnis dis parturient montes, nascetur ridiculus mus.\n    </Text>\n  </>\n)",
            },
          },
          TitleTwoWithParagraph.parameters
        ));
    },
    "./storybook-init-framework-entry.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(
        "./node_modules/@storybook/react/dist/esm/client/index.js"
      );
    },
    0: function (module, exports, __webpack_require__) {
      __webpack_require__(
        "./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"
      ),
        __webpack_require__(
          "./node_modules/@storybook/core-client/dist/esm/globals/globals.js"
        ),
        __webpack_require__("./storybook-init-framework-entry.js"),
        __webpack_require__(
          "./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./.storybook/preview.tsx-generated-config-entry.js"
        ),
        (module.exports = __webpack_require__("./generated-stories-entry.js"));
    },
    1: function (module, exports) {},
  },
  [[0, 5, 6]],
]);