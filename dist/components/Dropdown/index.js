import '../../assets/index2.css';
import { jsxs as c, jsx as d } from "react/jsx-runtime";
import e from "clsx";
import { useState as b, useRef as C, useEffect as N } from "react";
const y = "_dropdown_1pv64_1", O = "_dropdown__placeholder_1pv64_9", n = {
  dropdown: y,
  "dropdown--full": "_dropdown--full_1pv64_6",
  dropdown__placeholder: O,
  "dropdown-btn": "_dropdown-btn_1pv64_13",
  "dropdown--secondary": "_dropdown--secondary_1pv64_25",
  "dropdown-content": "_dropdown-content_1pv64_31",
  "dropdown-item": "_dropdown-item_1pv64_44"
}, L = ({
  options: i,
  placeholder: a,
  value: l,
  onChange: w,
  className: _,
  dropdownClassName: m,
  optionClassName: h,
  dropdownBtnClassName: u,
  fullWidth: f,
  variant: v = "primary",
  ...k
}) => {
  const [s, r] = b(!1), t = C(null), g = (o) => {
    w(o), r(!1);
  }, x = () => {
    r(!s);
  }, p = (o) => {
    t.current && !t.current.contains(o.target) && r(!1);
  };
  return N(() => (document.addEventListener("click", p), () => {
    document.removeEventListener("click", p);
  }), []), /* @__PURE__ */ c(
    "div",
    {
      className: e(
        n.dropdown,
        f && n["dropdown--full"],
        n[`dropdown--${v}`],
        _
      ),
      ref: t,
      ...k,
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            className: e(n["dropdown-btn"], u),
            onClick: x,
            children: [
              l ? l.label : /* @__PURE__ */ d("span", { className: n.dropdown__placeholder, children: a }),
              /* @__PURE__ */ d(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "1em",
                  height: "1em",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ d(
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
        s && /* @__PURE__ */ d("div", { className: e(n["dropdown-content"], m), children: i.map((o) => /* @__PURE__ */ d(
          "div",
          {
            className: e(n["dropdown-item"], h),
            onClick: () => g(o),
            children: o.label
          },
          o.value
        )) })
      ]
    }
  );
};
export {
  L as default
};
