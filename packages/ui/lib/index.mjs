// src/components/Card.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Card({ title, description, children }) {
  return /* @__PURE__ */ jsxs("div", { className: "p-4 border rounded-md bg-white shadow-sm", children: [
    title && /* @__PURE__ */ jsx("div", { className: "font-semibold", children: title }),
    description && /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-600 mb-2", children: description }),
    children
  ] });
}

// src/components/Button.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function Button({ children }) {
  return /* @__PURE__ */ jsx2("button", { className: "px-3 py-1 rounded-md bg-blue-600 text-white text-sm", children });
}

// src/components/Avatar.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Avatar({ src, alt }) {
  return /* @__PURE__ */ jsx3("img", { src, alt, className: "w-12 h-12 rounded-full object-cover" });
}
export {
  Avatar,
  Button,
  Card
};
