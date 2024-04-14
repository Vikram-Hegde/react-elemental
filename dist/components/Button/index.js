import '../../assets/index.css';
import { jsxs as d, jsx as r } from "react/jsx-runtime";
import o from "clsx";
const c = "_btn_1tl0m_1", t = {
  btn: c,
  "btn--primary": "_btn--primary_1tl0m_15",
  "btn--secondary": "_btn--secondary_1tl0m_22",
  "btn--tertiary": "_btn--tertiary_1tl0m_27",
  "btn--sm": "_btn--sm_1tl0m_34",
  "btn--md": "_btn--md_1tl0m_37",
  "btn--lg": "_btn--lg_1tl0m_40",
  "btn--full": "_btn--full_1tl0m_43",
  "btn--border-primary": "_btn--border-primary_1tl0m_46",
  "btn--border-secondary": "_btn--border-secondary_1tl0m_49",
  "btn--disabled": "_btn--disabled_1tl0m_53"
}, u = ({
  children: b,
  variant: _ = "primary",
  size: l = "md",
  fullWidth: e = !1,
  borderAccent: a = "primary",
  disabled: m = !1,
  uppercase: i = !1,
  className: s,
  ...n
}) => /* @__PURE__ */ d(
  "button",
  {
    className: o(
      t.btn,
      t[`btn--${_}`],
      t[`btn--${l}`],
      t[`btn--${e ? "full" : ""}`],
      t[`btn--border-${a}`],
      m && t["btn--disabled"],
      s
    ),
    ...n,
    children: [
      n.startIcon && /* @__PURE__ */ r("span", { children: n.startIcon }),
      b,
      n.endIcon && /* @__PURE__ */ r("span", { children: n.endIcon })
    ]
  }
);
export {
  u as default
};
