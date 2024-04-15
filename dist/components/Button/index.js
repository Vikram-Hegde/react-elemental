import '../../assets/index3.css';
import { jsxs as c } from "react/jsx-runtime";
import m from "clsx";
const y = "_btn_n1o2p_1", t = {
  btn: y,
  "btn--primary": "_btn--primary_n1o2p_19",
  "btn--secondary": "_btn--secondary_n1o2p_26",
  "btn--tertiary": "_btn--tertiary_n1o2p_31",
  "btn--sm": "_btn--sm_n1o2p_38",
  "btn--md": "_btn--md_n1o2p_41",
  "btn--lg": "_btn--lg_n1o2p_44",
  "btn--full": "_btn--full_n1o2p_47",
  "btn--border-primary": "_btn--border-primary_n1o2p_50",
  "btn--border-secondary": "_btn--border-secondary_n1o2p_53",
  "btn--disabled": "_btn--disabled_n1o2p_57",
  "btn--uppercase": "_btn--uppercase_n1o2p_61"
}, f = ({
  children: _,
  variant: b = "primary",
  size: e = "md",
  fullWidth: r = !1,
  borderAccent: a = "primary",
  disabled: o = !1,
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
    { [t["btn--disabled"]]: b === "secondary" && o },
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
  f as default
};
