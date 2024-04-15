import '../../assets/index.css';
import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { useId as m } from "react";
import h from "clsx";
const I = "_input_3em11_1", f = "_input__wrapper_3em11_8", a = {
  input: I,
  input__wrapper: f
}, r = ({ value: i, onChange: c, className: d, ...e }) => {
  const _ = m(), t = (e == null ? void 0 : e.id) ?? _, u = h(a.input, d);
  return /* @__PURE__ */ n("div", { className: u, children: [
    e.label && /* @__PURE__ */ l("label", { htmlFor: t, children: e.label }),
    /* @__PURE__ */ n("div", { className: a.input__wrapper, children: [
      e == null ? void 0 : e.startIcon,
      /* @__PURE__ */ l(
        "input",
        {
          placeholder: e == null ? void 0 : e.placeholder,
          id: t,
          value: i,
          onChange: c,
          ...e
        }
      ),
      e == null ? void 0 : e.endIcon
    ] })
  ] });
};
export {
  r as default
};
