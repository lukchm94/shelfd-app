var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  Avatar: () => Avatar,
  Button: () => Button,
  Card: () => Card
});
module.exports = __toCommonJS(index_exports);

// src/components/Card.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Card({ title, description, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "p-4 border rounded-md bg-white shadow-sm", children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "font-semibold", children: title }),
    description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-sm text-slate-600 mb-2", children: description }),
    children
  ] });
}

// src/components/Button.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Button({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { className: "px-3 py-1 rounded-md bg-blue-600 text-white text-sm", children });
}

// src/components/Avatar.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Avatar({ src, alt }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { src, alt, className: "w-12 h-12 rounded-full object-cover" });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  Button,
  Card
});
