import '../../assets/index2.css';
import { jsxs as c } from "react/jsx-runtime";
import m from "clsx";
const o = "_btn_vy9nn_1", t = {
  btn: o,
  "btn--primary": "_btn--primary_vy9nn_15",
  "btn--secondary": "_btn--secondary_vy9nn_22",
  "btn--tertiary": "_btn--tertiary_vy9nn_27",
  "btn--sm": "_btn--sm_vy9nn_34",
  "btn--md": "_btn--md_vy9nn_37",
  "btn--lg": "_btn--lg_vy9nn_40",
  "btn--full": "_btn--full_vy9nn_43",
  "btn--border-primary": "_btn--border-primary_vy9nn_46",
  "btn--border-secondary": "_btn--border-secondary_vy9nn_49",
  "btn--disabled": "_btn--disabled_vy9nn_53",
  "btn--uppercase": "_btn--uppercase_vy9nn_57"
}, v = ({
  children: _,
  variant: b = "primary",
  size: e = "md",
  fullWidth: r = !1,
  borderAccent: a = "primary",
  disabled: y = !1,
  uppercase: d = !1,
  className: s,
  ...n
}) => {
  const l = m(
    t.btn,
    t[`btn--${b}`],
    t[`btn--${e}`],
    t[`btn--${r ? "full" : ""}`],
    t[`btn--border-${a}`],
    { [t["btn--disabled"]]: b === "secondary" && y },
    { [t["btn--uppercase"]]: d },
    s
  );
  return /* @__PURE__ */ c("button", { className: l, ...n, children: [
    n == null ? void 0 : n.startIcon,
    _,
    n == null ? void 0 : n.endIcon
  ] });
};
export {
  v as default
};
