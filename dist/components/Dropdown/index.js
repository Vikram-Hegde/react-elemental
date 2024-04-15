import '../../assets/index2.css';
import { jsxs as i, jsx as e } from "react/jsx-runtime";
import n from "clsx";
import { useState as g, useRef as x, useEffect as b } from "react";
const C = "_dropdown_qw5l9_1", t = {
  dropdown: C,
  "dropdown-btn": "_dropdown-btn_qw5l9_6",
  "dropdown-content": "_dropdown-content_qw5l9_15",
  "dropdown-item": "_dropdown-item_qw5l9_23"
}, j = ({
  options: w,
  placeholder: p,
  value: s,
  onChange: a,
  className: m,
  dropdownClassName: u,
  optionClassName: f,
  dropdownBtnClassName: h,
  ..._
}) => {
  const [l, d] = g(!1), r = x(null), k = (o) => {
    a(o), d(!1);
  }, v = () => {
    d(!l);
  }, c = (o) => {
    r.current && !r.current.contains(o.target) && d(!1);
  };
  return b(() => (document.addEventListener("click", c), () => {
    document.removeEventListener("click", c);
  }), []), /* @__PURE__ */ i(
    "div",
    {
      className: n(t.dropdown, m),
      ref: r,
      ..._,
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            className: n(t["dropdown-btn"], h),
            onClick: v,
            children: [
              s ? s.label : p,
              /* @__PURE__ */ e(
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
              )
            ]
          }
        ),
        l && /* @__PURE__ */ e("div", { className: n(t["dropdown-content"], u), children: w.map((o) => /* @__PURE__ */ e(
          "div",
          {
            className: n(t["dropdown-item"], f),
            onClick: () => k(o),
            children: o.label
          },
          o.value
        )) })
      ]
    }
  );
};
export {
  j as default
};
