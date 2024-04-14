import '../../assets/index.css';
import { jsxs as c } from "react/jsx-runtime";
import m from "clsx";
const y = "_btn_63soj_1", n = {
  btn: y,
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
  children: _,
  variant: b = "primary",
  size: s = "md",
  fullWidth: e = !1,
  borderAccent: r = "primary",
  disabled: a = !1,
  uppercase: o = !1,
  className: d,
  ...t
}) => {
  const l = m(
    n.btn,
    n[`btn--${b}`],
    n[`btn--${s}`],
    n[`btn--${e ? "full" : ""}`],
    n[`btn--border-${r}`],
    { [n["btn--disabled"]]: b === "secondary" && a },
    { [n["btn--uppercase"]]: o },
    d
  );
  return /* @__PURE__ */ c("button", { className: l, ...t, children: [
    t == null ? void 0 : t.startIcon,
    _,
    t == null ? void 0 : t.endIcon
  ] });
};
export {
  u as default
};
