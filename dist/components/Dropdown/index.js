import '../../assets/index2.css';
import { jsxs as p, jsx as n } from "react/jsx-runtime";
import d from "clsx";
import { useState as q, useRef as z, useEffect as b } from "react";
const C = "_dropdown_1eqzx_1", N = "_dropdown__placeholder_1eqzx_9", e = {
  dropdown: C,
  "dropdown--full": "_dropdown--full_1eqzx_6",
  dropdown__placeholder: N,
  "dropdown-btn": "_dropdown-btn_1eqzx_13",
  "dropdown--secondary": "_dropdown--secondary_1eqzx_25",
  "dropdown-content": "_dropdown-content_1eqzx_31",
  "dropdown-item": "_dropdown-item_1eqzx_45"
}, E = ({
  options: i,
  placeholder: a,
  value: l,
  onChange: w,
  className: _,
  dropdownClassName: m,
  optionClassName: h,
  dropdownBtnClassName: u,
  fullWidth: f,
  variant: x = "primary",
  ...k
}) => {
  const [s, r] = q(!1), t = z(null), v = (o) => {
    w(o), r(!1);
  }, g = () => {
    r(!s);
  }, c = (o) => {
    t.current && !t.current.contains(o.target) && r(!1);
  };
  return b(() => (document.addEventListener("click", c), () => {
    document.removeEventListener("click", c);
  }), []), /* @__PURE__ */ p(
    "div",
    {
      className: d(
        e.dropdown,
        f && e["dropdown--full"],
        e[`dropdown--${x}`],
        _
      ),
      ref: t,
      ...k,
      children: [
        /* @__PURE__ */ p(
          "div",
          {
            className: d(e["dropdown-btn"], u),
            onClick: g,
            children: [
              l ? l.label : /* @__PURE__ */ n("span", { className: e.dropdown__placeholder, children: a }),
              /* @__PURE__ */ n(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "1em",
                  height: "1em",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ n(
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
        s && /* @__PURE__ */ n("div", { className: d(e["dropdown-content"], m), children: i.map((o) => /* @__PURE__ */ n(
          "div",
          {
            className: d(e["dropdown-item"], h),
            onClick: () => v(o),
            children: o.label
          },
          o.value
        )) })
      ]
    }
  );
};
export {
  E as default
};
