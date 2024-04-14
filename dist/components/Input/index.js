import '../../assets/index.css';
import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { useId as _ } from "react";
const u = "_input_ylg9p_1", d = "_input__wrapper_ylg9p_12", i = {
  input: u,
  input__wrapper: d
}, w = ({ value: a, onChange: c, ...t }) => {
  const e = (t == null ? void 0 : t.id) ?? _();
  return /* @__PURE__ */ n("div", { className: i.input, children: [
    t.label && /* @__PURE__ */ l("label", { htmlFor: e, children: t.label }),
    /* @__PURE__ */ n("div", { className: i.input__wrapper, children: [
      t == null ? void 0 : t.startIcon,
      /* @__PURE__ */ l(
        "input",
        {
          placeholder: t == null ? void 0 : t.placeholder,
          id: e,
          value: a,
          onChange: c,
          ...t
        }
      ),
      t == null ? void 0 : t.endIcon
    ] })
  ] });
};
export {
  w as default
};
