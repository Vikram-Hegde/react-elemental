import '../../assets/index2.css';
import { jsxs as b, jsx as e } from "react/jsx-runtime";
import d from "clsx";
import { useState as x, useRef as C, useEffect as N } from "react";
import a from "../Button/index.js";
const O = "_dropdown_86f9m_1", j = "_dropdown__placeholder_86f9m_9", o = {
  dropdown: O,
  "dropdown--full": "_dropdown--full_86f9m_6",
  dropdown__placeholder: j,
  "dropdown-btn": "_dropdown-btn_86f9m_13",
  "dropdown--secondary": "_dropdown--secondary_86f9m_25",
  "dropdown-content": "_dropdown-content_86f9m_31",
  "dropdown-item": "_dropdown-item_86f9m_45"
}, L = ({
  options: i,
  placeholder: m,
  value: l,
  onChange: w,
  className: _,
  dropdownClassName: f,
  optionClassName: u,
  dropdownBtnClassName: h,
  fullWidth: s,
  variant: k = "primary",
  ...v
}) => {
  const [c, r] = x(!1), t = C(null), g = (n) => {
    w(n), r(!1);
  }, y = () => {
    r(!c);
  }, p = (n) => {
    t.current && !t.current.contains(n.target) && r(!1);
  };
  return N(() => (document.addEventListener("click", p), () => {
    document.removeEventListener("click", p);
  }), []), /* @__PURE__ */ b(
    "div",
    {
      className: d(
        o.dropdown,
        s && o["dropdown--full"],
        o[`dropdown--${k}`],
        _
      ),
      ref: t,
      ...v,
      children: [
        /* @__PURE__ */ e(
          a,
          {
            endIcon: /* @__PURE__ */ e(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ e(
                  "path",
                  {
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "1.5",
                    d: "m19 9l-7 6l-7-6"
                  }
                )
              }
            ),
            variant: "secondary",
            borderAccent: "secondary",
            className: d(o["dropdown-btn"], h),
            onClick: y,
            fullWidth: s,
            children: l ? l.label : /* @__PURE__ */ e("span", { className: o.dropdown__placeholder, children: m })
          }
        ),
        c && /* @__PURE__ */ e("div", { className: d(o["dropdown-content"], f), children: i.map((n) => /* @__PURE__ */ e(
          a,
          {
            className: d(o["dropdown-item"], u),
            variant: "tertiary",
            size: "sm",
            fullWidth: !0,
            onClick: () => g(n),
            children: n.label
          }
        )) })
      ]
    }
  );
};
export {
  L as default
};
