import '../../assets/index3.css';
import { jsxs as o, jsx as s } from "react/jsx-runtime";
import p from "clsx";
const c = "_wrapper_1ylzx_1", n = "_badge_1ylzx_6", y = "_count_1ylzx_51", e = {
  wrapper: c,
  badge: n,
  "badge--primary": "_badge--primary_1ylzx_21",
  "badge--secondary": "_badge--secondary_1ylzx_24",
  "badge--success": "_badge--success_1ylzx_28",
  "badge--danger": "_badge--danger_1ylzx_31",
  "badge--top-left": "_badge--top-left_1ylzx_34",
  "badge--top-right": "_badge--top-right_1ylzx_38",
  "badge--bottom-left": "_badge--bottom-left_1ylzx_42",
  "badge--bottom-right": "_badge--bottom-right_1ylzx_46",
  count: y
}, m = ({
  variant: r = "primary",
  count: a,
  maxCount: t = 10,
  anchor: _ = "top-right",
  anchorOffset: d,
  className: g,
  children: l
}) => {
  const b = p(
    e.badge,
    e[`badge--${r}`],
    e[`badge--${_}`],
    g
  );
  return /* @__PURE__ */ o("span", { className: e.wrapper, children: [
    l,
    /* @__PURE__ */ s("span", { className: b, style: { ...d }, children: /* @__PURE__ */ s("span", { className: e.count, children: a ? a > t ? `${t}+` : a : null }) })
  ] });
};
export {
  m as default
};
