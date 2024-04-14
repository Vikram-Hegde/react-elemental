import '../../assets/index.css';
import { jsxs as c, jsx as r } from "react/jsx-runtime";
import m from "clsx";
const i = "_btn_63soj_1", n = {
  btn: i,
  "btn--primary": "_btn--primary_63soj_15",
  "btn--secondary": "_btn--secondary_63soj_22",
  "btn--tertiary": "_btn--tertiary_63soj_27",
  "btn--sm": "_btn--sm_63soj_34",
  "btn--md": "_btn--md_63soj_37",
  "btn--lg": "_btn--lg_63soj_40",
  "btn--full": "_btn--full_63soj_43",
  "btn--border-primary": "_btn--border-primary_63soj_46",
  "btn--border-secondary": "_btn--border-secondary_63soj_49",
  "btn--disabled": "_btn--disabled_63soj_53",
  "btn--uppercase": "_btn--uppercase_63soj_57"
}, u = ({
  children: s,
  variant: b = "primary",
  size: _ = "md",
  fullWidth: e = !1,
  borderAccent: o = "primary",
  disabled: a = !1,
  uppercase: d = !1,
  className: l,
  ...t
}) => /* @__PURE__ */ c(
  "button",
  {
    className: m(
      n.btn,
      n[`btn--${b}`],
      n[`btn--${_}`],
      n[`btn--${e ? "full" : ""}`],
      n[`btn--border-${o}`],
      b === "secondary" && a && n["btn--disabled"],
      d && n["btn--uppercase"],
      l
    ),
    ...t,
    children: [
      t.startIcon && /* @__PURE__ */ r("span", { children: t.startIcon }),
      s,
      t.endIcon && /* @__PURE__ */ r("span", { children: t.endIcon })
    ]
  }
);
export {
  u as default
};
