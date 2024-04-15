import '../../assets/index3.css';
import { jsxs as c } from "react/jsx-runtime";
import m from "clsx";
const o = "_btn_1y3el_1", n = {
  btn: o,
  "btn--primary": "_btn--primary_1y3el_19",
  "btn--secondary": "_btn--secondary_1y3el_26",
  "btn--tertiary": "_btn--tertiary_1y3el_31",
  "btn--sm": "_btn--sm_1y3el_38",
  "btn--md": "_btn--md_1y3el_41",
  "btn--lg": "_btn--lg_1y3el_44",
  "btn--full": "_btn--full_1y3el_47",
  "btn--border-primary": "_btn--border-primary_1y3el_50",
  "btn--border-secondary": "_btn--border-secondary_1y3el_53",
  "btn--disabled": "_btn--disabled_1y3el_57",
  "btn--uppercase": "_btn--uppercase_1y3el_61"
}, f = ({
  children: b,
  variant: e = "primary",
  size: _ = "md",
  fullWidth: l = !1,
  borderAccent: r = "primary",
  disabled: a = !1,
  uppercase: y = !1,
  className: d,
  ...t
}) => {
  const s = m(
    n.btn,
    n[`btn--${e}`],
    n[`btn--${_}`],
    n[`btn--${l ? "full" : ""}`],
    n[`btn--border-${r}`],
    { [n["btn--disabled"]]: e === "secondary" && a },
    { [n["btn--uppercase"]]: y },
    d
  );
  return /* @__PURE__ */ c("button", { className: s, ...t, children: [
    t == null ? void 0 : t.startIcon,
    b,
    t == null ? void 0 : t.endIcon
  ] });
};
export {
  f as default
};
