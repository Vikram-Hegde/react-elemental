import '../../assets/index3.css';
import { jsxs as o, jsx as s } from "react/jsx-runtime";
import p from "clsx";
const c = "_wrapper_14kuw_1", n = "_badge_14kuw_6", l = "_count_14kuw_51", e = {
  wrapper: c,
  badge: n,
  "badge--primary": "_badge--primary_14kuw_21",
  "badge--secondary": "_badge--secondary_14kuw_24",
  "badge--success": "_badge--success_14kuw_28",
  "badge--danger": "_badge--danger_14kuw_31",
  "badge--top-left": "_badge--top-left_14kuw_34",
  "badge--top-right": "_badge--top-right_14kuw_38",
  "badge--bottom-left": "_badge--bottom-left_14kuw_42",
  "badge--bottom-right": "_badge--bottom-right_14kuw_46",
  count: l
}, i = ({
  variant: r = "primary",
  count: a,
  maxCount: t = 10,
  anchor: _ = "top-right",
  anchorOffset: d,
  children: g
}) => {
  const b = p(
    e.badge,
    e[`badge--${r}`],
    e[`badge--${_}`]
  );
  return /* @__PURE__ */ o("span", { className: e.wrapper, children: [
    g,
    /* @__PURE__ */ s("span", { className: b, style: { ...d }, children: /* @__PURE__ */ s("span", { className: e.count, children: a ? a > t ? `${t}+` : a : null }) })
  ] });
};
export {
  i as default
};
