(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    "0tVQ": function(e, a, n) {
      n("FlQf"), n("VJsP"), (e.exports = n("WEpk").Array.from);
    },
    "22ne": function(e, a, n) {
      "use strict";
      var c = n("TqRt");
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0);
      var t = c(n("q1tI")),
        o = (0, c(n("8/g6")).default)(
          t.default.createElement(
            t.default.Fragment,
            null,
            t.default.createElement("path", {
              fill: "none",
              d: "M24 24H0V0h24v24z"
            }),
            t.default.createElement("circle", { cx: "12", cy: "12", r: "8" })
          ),
          "FiberManualRecord"
        );
      a.default = o;
    },
    "4hqb": function(e, a, n) {
      "use strict";
      n.d(a, "b", function() {
        return l;
      });
      var c = n("q1tI"),
        t = n.n(c),
        o = t.a.createContext();
      function l() {
        return t.a.useContext(o);
      }
      a.a = o;
    },
    "4ppn": function(e, a, n) {
      "use strict";
      var c = n("wx14"),
        t = n("ODXe"),
        o = n("Ff2n"),
        l = n("q1tI"),
        r = n.n(l),
        s = (n("17x9"), n("iuhU")),
        i = n("EHdT"),
        d = n("H2TA"),
        h = n("PsDL"),
        u = r.a.forwardRef(function(e, a) {
          var n = e.autoFocus,
            l = e.checked,
            d = e.checkedIcon,
            u = e.classes,
            b = e.className,
            m = e.defaultChecked,
            p = e.disabled,
            k = e.icon,
            f = e.id,
            g = e.inputProps,
            v = e.inputRef,
            x = e.name,
            C = e.onBlur,
            y = e.onChange,
            w = e.onFocus,
            R = e.readOnly,
            I = e.required,
            O = e.tabIndex,
            j = e.type,
            N = e.value,
            S = Object(o.a)(e, [
              "autoFocus",
              "checked",
              "checkedIcon",
              "classes",
              "className",
              "defaultChecked",
              "disabled",
              "icon",
              "id",
              "inputProps",
              "inputRef",
              "name",
              "onBlur",
              "onChange",
              "onFocus",
              "readOnly",
              "required",
              "tabIndex",
              "type",
              "value"
            ]),
            E = r.a.useRef(null != l).current,
            F = r.a.useState(Boolean(m)),
            B = Object(t.a)(F, 2),
            A = B[0],
            T = B[1],
            z = Object(i.a)(),
            L = p;
          z && "undefined" === typeof L && (L = z.disabled);
          var $ = E ? l : A,
            M = "checkbox" === j || "radio" === j;
          return r.a.createElement(
            h.a,
            Object(c.a)(
              {
                component: "span",
                className: Object(s.a)(
                  u.root,
                  b,
                  $ && u.checked,
                  L && u.disabled
                ),
                disabled: L,
                tabIndex: null,
                role: void 0,
                onFocus: function(e) {
                  w && w(e), z && z.onFocus && z.onFocus(e);
                },
                onBlur: function(e) {
                  C && C(e), z && z.onBlur && z.onBlur(e);
                },
                ref: a
              },
              S
            ),
            $ ? d : k,
            r.a.createElement(
              "input",
              Object(c.a)(
                {
                  autoFocus: n,
                  checked: l,
                  defaultChecked: m,
                  className: u.input,
                  disabled: L,
                  id: M && f,
                  name: x,
                  onChange: function(e) {
                    var a = e.target.checked;
                    E || T(a), y && y(e, a);
                  },
                  readOnly: R,
                  ref: v,
                  required: I,
                  tabIndex: O,
                  type: j,
                  value: N
                },
                g
              )
            )
          );
        });
      a.a = Object(d.a)(
        {
          root: { padding: 9 },
          checked: {},
          disabled: {},
          input: {
            cursor: "inherit",
            position: "absolute",
            opacity: 0,
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            margin: 0,
            padding: 0
          }
        },
        { name: "PrivateSwitchBase" }
      )(u);
    },
    "5rCv": function(e, a, n) {
      "use strict";
      var c = n("TqRt");
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0);
      var t = c(n("q1tI")),
        o = (0, c(n("8/g6")).default)(
          t.default.createElement("path", {
            d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
          }),
          "Check"
        );
      a.default = o;
    },
    "7TFM": function(e, a, n) {
      "use strict";
      var c = n("eDSW"),
        t = {
          checkRoot: {
            padding: "12px",
            "&:hover": { backgroundColor: "unset" }
          },
          radioRoot: {
            padding: "12px",
            "&:hover": { backgroundColor: "unset" }
          },
          labelRoot: { marginLeft: "-14px" },
          checkboxAndRadio: {
            position: "relative",
            display: "block",
            marginTop: "10px",
            marginBottom: "10px"
          },
          checkboxAndRadioHorizontal: {
            position: "relative",
            display: "block",
            "&:first-child": { marginTop: "10px" },
            "&:not(:first-child)": { marginTop: "-14px" },
            marginTop: "0",
            marginBottom: "0"
          },
          checked: { color: c.r + "!important" },
          checkedIcon: {
            width: "20px",
            height: "20px",
            border: "1px solid rgba(0, 0, 0, .54)",
            borderRadius: "3px"
          },
          uncheckedIcon: {
            width: "0px",
            height: "0px",
            padding: "9px",
            border: "1px solid rgba(0, 0, 0, .54)",
            borderRadius: "3px"
          },
          disabledCheckboxAndRadio: { opacity: "0.45" },
          label: {
            cursor: "pointer",
            paddingLeft: "0",
            color: "rgba(0, 0, 0, 0.26)",
            fontSize: "14px",
            lineHeight: "1.428571429",
            fontWeight: "400",
            display: "inline-flex",
            transition: "0.3s ease all",
            letterSpacing: "unset"
          },
          labelHorizontal: {
            color: "rgba(0, 0, 0, 0.26)",
            cursor: "pointer",
            display: "inline-flex",
            fontSize: "14px",
            lineHeight: "1.428571429",
            fontWeight: "400",
            paddingTop: "39px",
            marginRight: "0",
            "@media (min-width: 992px)": { float: "right" }
          },
          labelHorizontalRadioCheckbox: { paddingTop: "22px" },
          labelLeftHorizontal: {
            color: "rgba(0, 0, 0, 0.26)",
            cursor: "pointer",
            display: "inline-flex",
            fontSize: "14px",
            lineHeight: "1.428571429",
            fontWeight: "400",
            paddingTop: "22px",
            marginRight: "0"
          },
          labelError: { color: c.i },
          radio: { color: c.r + "!important" },
          radioChecked: {
            width: "16px",
            height: "16px",
            border: "1px solid " + c.r,
            borderRadius: "50%"
          },
          radioUnchecked: {
            width: "0px",
            height: "0px",
            padding: "7px",
            border: "1px solid rgba(0, 0, 0, .54)",
            borderRadius: "50%"
          },
          inlineChecks: { marginTop: "8px" },
          iconCheckbox: {
            height: "116px",
            width: "116px",
            color: c.l,
            "& > span:first-child": {
              borderWidth: "4px",
              borderStyle: "solid",
              borderColor: "#CCCCCC",
              textAlign: "center",
              verticalAlign: "middle",
              borderRadius: "50%",
              color: "inherit",
              margin: "0 auto 20px",
              transition: "all 0.2s"
            },
            "&:hover": {
              color: c.t,
              "& > span:first-child": { borderColor: c.t }
            }
          },
          iconCheckboxChecked: {
            color: c.t,
            "& > span:first-child": { borderColor: c.t }
          },
          iconCheckboxIcon: { fontSize: "40px", lineHeight: "111px" },
          switchBase: { color: c.r + "!important" },
          switchIcon: {
            boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.4)",
            color: "#FFFFFF !important",
            border: "1px solid rgba(0, 0, 0, .54)"
          },
          switchBar: {
            width: "30px",
            height: "15px",
            backgroundColor: "rgb(80, 80, 80)",
            borderRadius: "15px",
            opacity: "0.7!important"
          },
          switchChecked: {
            "& + $switchBar": {
              backgroundColor: "rgba(156, 39, 176, 1) !important"
            },
            "& $switchIcon": { borderColor: "#9c27b0" }
          },
          switchRoot: { height: "48px" }
        };
      a.a = t;
    },
    "8/g6": function(e, a, n) {
      "use strict";
      var c = n("TqRt");
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = function(e, a) {
          var n = o.default.memo(
            o.default.forwardRef(function(a, n) {
              return o.default.createElement(
                l.default,
                (0, t.default)({ ref: n }, a),
                e
              );
            })
          );
          0;
          return (n.muiName = l.default.muiName), n;
        });
      var t = c(n("pVnL")),
        o = c(n("q1tI")),
        l = c(n("UJJ5"));
    },
    As0B: function(e, a, n) {
      "use strict";
      n.d(a, "a", function() {
        return r;
      });
      var c = n("wx14"),
        t = n("q1tI"),
        o = n.n(t),
        l = n("HR5l");
      function r(e, a) {
        var n = o.a.memo(
          o.a.forwardRef(function(a, n) {
            return o.a.createElement(l.a, Object(c.a)({}, a, { ref: n }), e);
          })
        );
        return (n.muiName = l.a.muiName), n;
      }
    },
    EHdT: function(e, a, n) {
      "use strict";
      n.d(a, "a", function() {
        return l;
      });
      var c = n("q1tI"),
        t = n.n(c),
        o = n("4hqb");
      function l() {
        return t.a.useContext(o.a);
      }
    },
    IP1Z: function(e, a, n) {
      "use strict";
      var c = n("2faE"),
        t = n("rr1i");
      e.exports = function(e, a, n) {
        a in e ? c.f(e, a, t(0, n)) : (e[a] = n);
      };
    },
    M4Ey: function(e, a, n) {
      "use strict";
      var c = n("wx14"),
        t = n("Ff2n"),
        o = n("q1tI"),
        l = n.n(o),
        r = (n("17x9"), n("iuhU")),
        s = n("4ppn"),
        i = n("As0B"),
        d = Object(i.a)(
          l.a.createElement("path", {
            d:
              "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          }),
          "RadioButtonUnchecked"
        ),
        h = Object(i.a)(
          l.a.createElement("path", {
            d:
              "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
          }),
          "RadioButtonChecked"
        ),
        u = n("H2TA"),
        b = l.a.createElement(d, null);
      var m = Object(u.a)(
          function(e) {
            return {
              root: {
                position: "relative",
                display: "flex",
                "&$checked $layer": {
                  transform: "scale(1)",
                  transition: e.transitions.create("transform", {
                    easing: e.transitions.easing.easeOut,
                    duration: e.transitions.duration.shortest
                  })
                }
              },
              layer: {
                left: 0,
                position: "absolute",
                transform: "scale(0)",
                transition: e.transitions.create("transform", {
                  easing: e.transitions.easing.easeIn,
                  duration: e.transitions.duration.shortest
                })
              },
              checked: {}
            };
          },
          { name: "PrivateRadioButtonIcon" }
        )(function(e) {
          var a = e.checked,
            n = e.classes,
            o = e.className,
            s = Object(t.a)(e, ["checked", "classes", "className"]);
          return l.a.createElement(
            "div",
            Object(c.a)(
              { className: Object(r.a)(n.root, o, a && n.checked) },
              s
            ),
            b,
            l.a.createElement(h, { className: n.layer })
          );
        }),
        p = n("ye/S"),
        k = n("mVKy"),
        f = l.a.createContext(),
        g = l.a.createElement(m, { checked: !0 }),
        v = l.a.createElement(m, null),
        x = l.a.forwardRef(function(e, a) {
          var n = e.checked,
            o = e.classes,
            i = e.color,
            d = void 0 === i ? "secondary" : i,
            h = e.name,
            u = e.onChange,
            b = Object(t.a)(e, [
              "checked",
              "classes",
              "color",
              "name",
              "onChange"
            ]),
            m = l.a.useContext(f),
            p = n,
            x = Object(k.b)(u, m && m.onChange),
            C = h;
          return (
            m &&
              ("undefined" === typeof p && (p = m.value === e.value),
              "undefined" === typeof C && (C = m.name)),
            l.a.createElement(
              s.a,
              Object(c.a)(
                {
                  color: d,
                  type: "radio",
                  icon: v,
                  checkedIcon: g,
                  classes: {
                    root: Object(r.a)(
                      o.root,
                      o["color".concat(Object(k.a)(d))]
                    ),
                    checked: o.checked,
                    disabled: o.disabled
                  },
                  name: C,
                  checked: p,
                  onChange: x,
                  ref: a
                },
                b
              )
            )
          );
        });
      a.a = Object(u.a)(
        function(e) {
          return {
            root: { color: e.palette.text.secondary },
            checked: {},
            disabled: {},
            colorPrimary: {
              "&$checked": {
                color: e.palette.primary.main,
                "&:hover": {
                  backgroundColor: Object(p.c)(
                    e.palette.primary.main,
                    e.palette.action.hoverOpacity
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" }
                }
              },
              "&$disabled": { color: e.palette.action.disabled }
            },
            colorSecondary: {
              "&$checked": {
                color: e.palette.secondary.main,
                "&:hover": {
                  backgroundColor: Object(p.c)(
                    e.palette.secondary.main,
                    e.palette.action.hoverOpacity
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" }
                }
              },
              "&$disabled": { color: e.palette.action.disabled }
            }
          };
        },
        { name: "MuiRadio" }
      )(x);
    },
    PsDL: function(e, a, n) {
      "use strict";
      var c = n("wx14"),
        t = n("Ff2n"),
        o = n("q1tI"),
        l = n.n(o),
        r = (n("17x9"), n("iuhU")),
        s = n("H2TA"),
        i = n("ye/S"),
        d = n("VD++"),
        h = n("mVKy"),
        u = l.a.forwardRef(function(e, a) {
          var n = e.edge,
            o = void 0 !== n && n,
            s = e.children,
            i = e.classes,
            u = e.className,
            b = e.color,
            m = void 0 === b ? "default" : b,
            p = e.disabled,
            k = void 0 !== p && p,
            f = e.disableFocusRipple,
            g = void 0 !== f && f,
            v = e.size,
            x = void 0 === v ? "medium" : v,
            C = Object(t.a)(e, [
              "edge",
              "children",
              "classes",
              "className",
              "color",
              "disabled",
              "disableFocusRipple",
              "size"
            ]);
          return l.a.createElement(
            d.a,
            Object(c.a)(
              {
                className: Object(r.a)(
                  i.root,
                  u,
                  "default" !== m && i["color".concat(Object(h.a)(m))],
                  k && i.disabled,
                  { small: i["size".concat(Object(h.a)(x))] }[x],
                  { start: i.edgeStart, end: i.edgeEnd }[o]
                ),
                centerRipple: !0,
                focusRipple: !g,
                disabled: k,
                ref: a
              },
              C
            ),
            l.a.createElement("span", { className: i.label }, s)
          );
        });
      a.a = Object(s.a)(
        function(e) {
          return {
            root: {
              textAlign: "center",
              flex: "0 0 auto",
              fontSize: e.typography.pxToRem(24),
              padding: 12,
              borderRadius: "50%",
              overflow: "visible",
              color: e.palette.action.active,
              transition: e.transitions.create("background-color", {
                duration: e.transitions.duration.shortest
              }),
              "&:hover": {
                backgroundColor: Object(i.c)(
                  e.palette.action.active,
                  e.palette.action.hoverOpacity
                ),
                "@media (hover: none)": { backgroundColor: "transparent" }
              },
              "&$disabled": {
                backgroundColor: "transparent",
                color: e.palette.action.disabled
              }
            },
            edgeStart: { marginLeft: -12, "$sizeSmall&": { marginLeft: -3 } },
            edgeEnd: { marginRight: -12, "$sizeSmall&": { marginRight: -3 } },
            colorInherit: { color: "inherit" },
            colorPrimary: {
              color: e.palette.primary.main,
              "&:hover": {
                backgroundColor: Object(i.c)(
                  e.palette.primary.main,
                  e.palette.action.hoverOpacity
                ),
                "@media (hover: none)": { backgroundColor: "transparent" }
              }
            },
            colorSecondary: {
              color: e.palette.secondary.main,
              "&:hover": {
                backgroundColor: Object(i.c)(
                  e.palette.secondary.main,
                  e.palette.action.hoverOpacity
                ),
                "@media (hover: none)": { backgroundColor: "transparent" }
              }
            },
            disabled: {},
            sizeSmall: { padding: 3, fontSize: e.typography.pxToRem(18) },
            label: {
              width: "100%",
              display: "flex",
              alignItems: "inherit",
              justifyContent: "inherit"
            }
          };
        },
        { name: "MuiIconButton" }
      )(u);
    },
    UJJ5: function(e, a, n) {
      "use strict";
      n.r(a);
      var c = n("HR5l");
      n.d(a, "default", function() {
        return c.a;
      });
    },
    UhlP: function(e, a, n) {
      "use strict";
      var c = n("wx14"),
        t = n("Ff2n"),
        o = n("q1tI"),
        l = n.n(o),
        r = (n("17x9"), n("iuhU")),
        s = n("H2TA"),
        i = n("ye/S"),
        d = n("mVKy"),
        h = n("4ppn"),
        u = l.a.forwardRef(function(e, a) {
          var n = e.classes,
            o = e.className,
            s = e.color,
            i = void 0 === s ? "secondary" : s,
            u = e.edge,
            b = void 0 !== u && u,
            m = e.size,
            p = void 0 === m ? "medium" : m,
            k = Object(t.a)(e, [
              "classes",
              "className",
              "color",
              "edge",
              "size"
            ]),
            f = l.a.createElement("span", { className: n.thumb });
          return l.a.createElement(
            "span",
            {
              className: Object(r.a)(
                n.root,
                o,
                { start: n.edgeStart, end: n.edgeEnd }[b],
                { small: n["size".concat(Object(d.a)(p))] }[p]
              )
            },
            l.a.createElement(
              h.a,
              Object(c.a)(
                {
                  type: "checkbox",
                  icon: f,
                  checkedIcon: f,
                  classes: {
                    root: Object(r.a)(
                      n.switchBase,
                      n["color".concat(Object(d.a)(i))]
                    ),
                    input: n.input,
                    checked: n.checked,
                    disabled: n.disabled
                  },
                  ref: a
                },
                k
              )
            ),
            l.a.createElement("span", { className: n.track })
          );
        });
      a.a = Object(s.a)(
        function(e) {
          return {
            root: {
              display: "inline-flex",
              width: 58,
              height: 38,
              overflow: "hidden",
              padding: 12,
              boxSizing: "border-box",
              position: "relative",
              flexShrink: 0,
              zIndex: 0,
              verticalAlign: "middle"
            },
            edgeStart: { marginLeft: -8 },
            edgeEnd: { marginRight: -8 },
            switchBase: {
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              color:
                "light" === e.palette.type
                  ? e.palette.grey[50]
                  : e.palette.grey[400],
              transition: e.transitions.create(["left", "transform"], {
                duration: e.transitions.duration.shortest
              }),
              willChange: "left, transform",
              "&$checked": { left: "100%", transform: "translateX(-100%)" },
              "&$disabled": {
                color:
                  "light" === e.palette.type
                    ? e.palette.grey[400]
                    : e.palette.grey[800]
              },
              "&$checked + $track": { opacity: 0.5 },
              "&$disabled + $track": {
                opacity: "light" === e.palette.type ? 0.12 : 0.1
              }
            },
            colorPrimary: {
              "&$checked": {
                color: e.palette.primary.main,
                "&:hover": {
                  backgroundColor: Object(i.c)(
                    e.palette.primary.main,
                    e.palette.action.hoverOpacity
                  )
                }
              },
              "&$disabled": {
                color:
                  "light" === e.palette.type
                    ? e.palette.grey[400]
                    : e.palette.grey[800]
              },
              "&$checked + $track": { backgroundColor: e.palette.primary.main },
              "&$disabled + $track": {
                backgroundColor:
                  "light" === e.palette.type
                    ? e.palette.common.black
                    : e.palette.common.white
              }
            },
            colorSecondary: {
              "&$checked": {
                color: e.palette.secondary.main,
                "&:hover": {
                  backgroundColor: Object(i.c)(
                    e.palette.secondary.main,
                    e.palette.action.hoverOpacity
                  )
                }
              },
              "&$disabled": {
                color:
                  "light" === e.palette.type
                    ? e.palette.grey[400]
                    : e.palette.grey[800]
              },
              "&$checked + $track": {
                backgroundColor: e.palette.secondary.main
              },
              "&$disabled + $track": {
                backgroundColor:
                  "light" === e.palette.type
                    ? e.palette.common.black
                    : e.palette.common.white
              }
            },
            sizeSmall: {
              width: 40,
              height: 24,
              padding: 7,
              "& $thumb": { width: 16, height: 16 },
              "& $switchBase": { padding: 4 }
            },
            checked: {},
            disabled: {},
            input: { left: "-100%", width: "300%" },
            thumb: {
              boxShadow: e.shadows[1],
              backgroundColor: "currentColor",
              width: 20,
              height: 20,
              borderRadius: "50%"
            },
            track: {
              height: "100%",
              width: "100%",
              borderRadius: 7,
              zIndex: -1,
              transition: e.transitions.create(
                ["opacity", "background-color"],
                { duration: e.transitions.duration.shortest }
              ),
              backgroundColor:
                "light" === e.palette.type
                  ? e.palette.common.black
                  : e.palette.common.white,
              opacity: "light" === e.palette.type ? 0.38 : 0.3
            }
          };
        },
        { name: "MuiSwitch" }
      )(u);
    },
    VJsP: function(e, a, n) {
      "use strict";
      var c = n("2GTP"),
        t = n("Y7ZC"),
        o = n("JB68"),
        l = n("sNwI"),
        r = n("NwJ3"),
        s = n("tEej"),
        i = n("IP1Z"),
        d = n("fNZA");
      t(
        t.S +
          t.F *
            !n("TuGD")(function(e) {
              Array.from(e);
            }),
        "Array",
        {
          from: function(e) {
            var a,
              n,
              t,
              h,
              u = o(e),
              b = "function" == typeof this ? this : Array,
              m = arguments.length,
              p = m > 1 ? arguments[1] : void 0,
              k = void 0 !== p,
              f = 0,
              g = d(u);
            if (
              (k && (p = c(p, m > 2 ? arguments[2] : void 0, 2)),
              void 0 == g || (b == Array && r(g)))
            )
              for (n = new b((a = s(u.length))); a > f; f++)
                i(n, f, k ? p(u[f], f) : u[f]);
            else
              for (h = g.call(u), n = new b(); !(t = h.next()).done; f++)
                i(n, f, k ? l(h, p, [t.value, f], !0) : t.value);
            return (n.length = f), n;
          }
        }
      );
    },
    VKFn: function(e, a, n) {
      n("bBy9"), n("FlQf"), (e.exports = n("ldVq"));
    },
    VmPI: function(e, a, n) {
      "use strict";
      var c = n("wx14"),
        t = n("Ff2n"),
        o = n("q1tI"),
        l = n.n(o),
        r = (n("17x9"), n("iuhU")),
        s = n("4ppn"),
        i = n("As0B"),
        d = Object(i.a)(
          l.a.createElement("path", {
            d:
              "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
          }),
          "CheckBoxOutlineBlank"
        ),
        h = Object(i.a)(
          l.a.createElement("path", {
            d:
              "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          }),
          "CheckBox"
        ),
        u = n("ye/S"),
        b = Object(i.a)(
          l.a.createElement("path", {
            d:
              "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
          }),
          "IndeterminateCheckBox"
        ),
        m = n("mVKy"),
        p = n("H2TA"),
        k = l.a.createElement(h, null),
        f = l.a.createElement(d, null),
        g = l.a.createElement(b, null),
        v = l.a.forwardRef(function(e, a) {
          var n = e.checkedIcon,
            o = void 0 === n ? k : n,
            i = e.classes,
            d = e.color,
            h = void 0 === d ? "secondary" : d,
            u = e.icon,
            b = void 0 === u ? f : u,
            p = e.indeterminate,
            v = void 0 !== p && p,
            x = e.indeterminateIcon,
            C = void 0 === x ? g : x,
            y = e.inputProps,
            w = Object(t.a)(e, [
              "checkedIcon",
              "classes",
              "color",
              "icon",
              "indeterminate",
              "indeterminateIcon",
              "inputProps"
            ]);
          return l.a.createElement(
            s.a,
            Object(c.a)(
              {
                type: "checkbox",
                checkedIcon: v ? C : o,
                classes: {
                  root: Object(r.a)(
                    i.root,
                    i["color".concat(Object(m.a)(h))],
                    v && i.indeterminate
                  ),
                  checked: i.checked,
                  disabled: i.disabled
                },
                color: h,
                inputProps: Object(c.a)({ "data-indeterminate": v }, y),
                icon: v ? C : b,
                ref: a
              },
              w
            )
          );
        });
      a.a = Object(p.a)(
        function(e) {
          return {
            root: { color: e.palette.text.secondary },
            checked: {},
            disabled: {},
            indeterminate: {},
            colorPrimary: {
              "&$checked": {
                color: e.palette.primary.main,
                "&:hover": {
                  backgroundColor: Object(u.c)(
                    e.palette.primary.main,
                    e.palette.action.hoverOpacity
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" }
                }
              },
              "&$disabled": { color: e.palette.action.disabled }
            },
            colorSecondary: {
              "&$checked": {
                color: e.palette.secondary.main,
                "&:hover": {
                  backgroundColor: Object(u.c)(
                    e.palette.secondary.main,
                    e.palette.action.hoverOpacity
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" }
                }
              },
              "&$disabled": { color: e.palette.action.disabled }
            }
          };
        },
        { name: "MuiCheckbox" }
      )(v);
    },
    WZsg: function(e, a, n) {
      "use strict";
      n.r(a),
        n.d(a, "default", function() {
          return S;
        });
      var c = n("dfwq"),
        t = n("doui"),
        o = n("zrwo"),
        l = n("q1tI"),
        r = n.n(l),
        s = n("pzeu"),
        i = n("zR9M"),
        d = n("TSYQ"),
        h = n.n(d),
        u = n("R/WZ"),
        b = n("VmPI"),
        m = n("M4Ey"),
        p = n("UhlP"),
        k = n("ZGBi"),
        f = n("5rCv"),
        g = n.n(f),
        v = n("22ne"),
        x = n.n(v),
        C = n("Oref"),
        y = n("7TFM"),
        w = r.a.createElement,
        R = Object(o.a)({}, y.a, {
          bdExample: {
            padding: "1.5rem",
            margin: "1rem -15px",
            position: "relative",
            marginRight: "0",
            marginBottom: "-8px",
            marginLeft: "0",
            borderWidth: ".2rem",
            border: "solid rgb(245, 242, 240)"
          }
        }),
        I = Object(u.a)(R),
        O =
          'import React from "react";\nimport classNames from "classnames";\n// material-ui components\nimport { makeStyles } from "@material-ui/core/styles";\nimport Checkbox from "@material-ui/core/Checkbox";\nimport FormControlLabel from "@material-ui/core/FormControlLabel";\n// @material-ui/icons\nimport Check from "@material-ui/icons/Check";\n\nimport styles from "assets/jss/nextjs-material-kit/customCheckboxRadioSwitch.js";\n\nconst useStyles = makeStyles(styles);\n\nexport default function CheckboxRadioSwitch(){\n  const [checked, setChecked] = React.useState([24, 22]);\n  const classes = useStyles();\n  const wrapperDiv = classNames(\n    classes.checkboxAndRadio,\n    classes.checkboxAndRadioHorizontal\n  );\n  const handleToggle = value => {\n    const currentIndex = checked.indexOf(value);\n    const newChecked = [...checked];\n\n    if (currentIndex === -1) {\n      newChecked.push(value);\n    } else {\n      newChecked.splice(currentIndex, 1);\n    }\n    setChecked(newChecked);\n  };\n  return (\n    <div>\n      <div className={wrapperDiv}>\n        <FormControlLabel\n          control={\n            <Checkbox\n              tabIndex={-1}\n              onClick={() => handleToggle(21)}\n              checkedIcon={<Check className={classes.checkedIcon} />}\n              icon={<Check className={classes.uncheckedIcon} />}\n              classes={{ checked: classes.checked }}\n            />\n          }\n          classes={{ label: classes.label }}\n          label="Unchecked"\n        />\n      </div>\n      <div className={wrapperDiv}>\n        <FormControlLabel\n          control={\n            <Checkbox\n              tabIndex={-1}\n              onClick={() => handleToggle(22)}\n              checked={\n                checked.indexOf(22) !== -1 ? true : false\n              }\n              checkedIcon={<Check className={classes.checkedIcon} />}\n              icon={<Check className={classes.uncheckedIcon} />}\n              classes={{ checked: classes.checked }}\n            />\n          }\n          classes={{ label: classes.label }}\n          label="Checked"\n        />\n      </div>\n      <div className={wrapperDiv}>\n        <FormControlLabel\n          disabled\n          control={\n            <Checkbox\n              tabIndex={-1}\n              checkedIcon={<Check className={classes.checkedIcon} />}\n              icon={<Check className={classes.uncheckedIcon} />}\n              classes={{ checked: classes.checked }}\n            />\n          }\n          classes={{\n            label: classes.label,\n            disabled: classes.disabledCheckboxAndRadio\n          }}\n          label="Disabled Unchecked"\n        />\n      </div>\n      <div className={wrapperDiv}>\n        <FormControlLabel\n          disabled\n          control={\n            <Checkbox\n              tabIndex={-1}\n              checked={\n                checked.indexOf(24) !== -1 ? true : false\n              }\n              checkedIcon={<Check className={classes.checkedIcon} />}\n              icon={<Check className={classes.uncheckedIcon} />}\n              classes={{ checked: classes.checked }}\n            />\n          }\n          classes={{\n            label: classes.label,\n            disabled: classes.disabledCheckboxAndRadio\n          }}\n          label="Disabled Checked"\n        />\n      </div>\n    </div>\n  );\n}',
        j =
          'import React from "react";\nimport classNames from "classnames";\n// material-ui components\nimport { makeStyles } from "@material-ui/core/styles";\nimport Radio from "@material-ui/core/Radio";\nimport FormControlLabel from "@material-ui/core/FormControlLabel";\n// @material-ui/icons\nimport FiberManualRecord from "@material-ui/icons/FiberManualRecord";\n\nimport styles from "assets/jss/nextjs-material-kit/customCheckboxRadioSwitch.js";\n\nconst useStyles = makeStyles(styles);\n\nexport default function CheckboxRadioSwitch(){\n  const [selectedEnabled, setSelectedEnabled] = React.useState("b");\n  const classes = useStyles();\n  const wrapperDiv = classNames(\n    classes.checkboxAndRadio,\n    classes.checkboxAndRadioHorizontal\n  );\n  return (\n    <div>\n      <div className={wrapperDiv}>\n        <FormControlLabel\n          control={\n            <Radio\n              checked={selectedEnabled === "a"}\n              onChange={() => setSelectedEnabled("a")}\n              value="a"\n              name="radio button enabled"\n              aria-label="A"\n              icon={\n                <FiberManualRecord\n                  className={classes.radioUnchecked}\n                />\n              }\n              checkedIcon={\n                <FiberManualRecord className={classes.radioChecked} />\n              }\n              classes={{\n                checked: classes.radio\n              }}\n            />\n          }\n          classes={{\n            label: classes.label\n          }}\n          label="First Radio"\n        />\n      </div>\n      <div className={wrapperDiv}>\n        <FormControlLabel\n          control={\n            <Radio\n              checked={selectedEnabled === "b"}\n              onChange={() => setSelectedEnabled("b")}\n              value="b"\n              name="radio button enabled"\n              aria-label="B"\n              icon={\n                <FiberManualRecord\n                  className={classes.radioUnchecked}\n                />\n              }\n              checkedIcon={\n                <FiberManualRecord className={classes.radioChecked} />\n              }\n              classes={{\n                checked: classes.radio\n              }}\n            />\n          }\n          classes={{\n            label: classes.label\n          }}\n          label="Second Radio"\n        />\n      </div>\n      <div className={wrapperDiv}>\n        <FormControlLabel\n          disabled\n          control={\n            <Radio\n              checked={false}\n              value="a"\n              name="radio button disabled"\n              aria-label="B"\n              icon={\n                <FiberManualRecord\n                  className={classes.radioUnchecked}\n                />\n              }\n              checkedIcon={\n                <FiberManualRecord className={classes.radioChecked} />\n              }\n              classes={{\n                checked: classes.radio\n              }}\n            />\n          }\n          classes={{\n            label: classes.label,\n            disabled: classes.disabledCheckboxAndRadio\n          }}\n          label="Disabled Unchecked Radio"\n        />\n      </div>\n      <div className={wrapperDiv}>\n        <FormControlLabel\n          disabled\n          control={\n            <Radio\n              checked={true}\n              value="b"\n              name="radio button disabled"\n              aria-label="B"\n              icon={\n                <FiberManualRecord\n                  className={classes.radioUnchecked}\n                />\n              }\n              checkedIcon={\n                <FiberManualRecord className={classes.radioChecked} />\n              }\n              classes={{\n                checked: classes.radio\n              }}\n            />\n          }\n          classes={{\n            label: classes.label,\n            disabled: classes.disabledCheckboxAndRadio\n          }}\n          label="Disabled Checked Radio"\n        />\n      </div>\n    </div>\n  );\n}',
        N =
          'import React from "react";\n// material-ui components\nimport { makeStyles } from "@material-ui/core/styles";\nimport Switch from "@material-ui/core/Switch";\nimport FormControlLabel from "@material-ui/core/FormControlLabel";\n\nimport styles from "assets/jss/nextjs-material-kit/customCheckboxRadioSwitch.js";\n\nconst useStyles = makeStyles(styles);\n\nexport default function CheckboxRadioSwitch(){\n  const classes = useStyles();\n  const [checkedA, setCheckedA] = React.useState(true);\n  const [checkedB, setCheckedB] = React.useState(false);\n  return (\n    <div>\n      <div>\n        <FormControlLabel\n          control={\n            <Switch\n              checked={checkedA}\n              onChange={event => setCheckedA(event.target.checked)}\n              value="checkedA"\n              classes={{\n                switchBase: classes.switchBase,\n                checked: classes.switchChecked,\n                thumb: classes.switchIcon,\n                iconChecked: classes.switchIconChecked,\n                track: classes.switchBar\n              }}\n            />\n          }\n          classes={{\n            label: classes.label\n          }}\n          label="Toggle is on"\n        />\n      </div>\n      <div>\n        <FormControlLabel\n          control={\n            <Switch\n              checked={checkedB}\n              onChange={event => setCheckedB(event.target.checked)}\n              value="checkedB"\n              classes={{\n                switchBase: classes.switchBase,\n                checked: classes.switchChecked,\n                thumb: classes.switchIcon,\n                iconChecked: classes.switchIconChecked,\n                track: classes.switchBar\n              }}\n            />\n          }\n          classes={{\n            label: classes.label\n          }}\n          label="Toggle is off"\n        />\n      </div>\n    </div>\n  );\n}';
      function S() {
        var e = I(),
          a = r.a.useState([24, 22]),
          n = Object(t.a)(a, 2),
          o = n[0],
          l = n[1],
          d = r.a.useState("b"),
          u = Object(t.a)(d, 2),
          f = u[0],
          v = u[1],
          y = r.a.useState(!0),
          R = Object(t.a)(y, 2),
          S = R[0],
          E = R[1],
          F = r.a.useState(!1),
          B = Object(t.a)(F, 2),
          A = B[0],
          T = B[1],
          z = h()(e.checkboxAndRadio, e.checkboxAndRadioHorizontal),
          L = function(e) {
            var a = o.indexOf(e),
              n = Object(c.a)(o);
            -1 === a ? n.push(e) : n.splice(a, 1), l(n);
          };
        return w(
          C.a,
          null,
          w("h1", null, "Checkboxes, Radios and Switches"),
          w(
            "p",
            null,
            "We haven't extended",
            " ",
            w(
              "a",
              {
                href:
                  "https://material-ui-next.com/demos/selection-controls/?ref=creativetim",
                target: "_blank"
              },
              "these components from Material-UI"
            ),
            ". We've just added our style over their components."
          ),
          w("h2", null, "Styles"),
          w(
            "p",
            null,
            "You will find the styles for this component in",
            w("br", null),
            w(
              "code",
              null,
              "src/assets/jss/nextjs-material-kit/customCheckboxRadioSwitch.js"
            ),
            "."
          ),
          w(
            "p",
            null,
            "Let's take a look at each one of them, and how to use our styles."
          ),
          w("h2", null, "Checkboxes"),
          w(
            "div",
            { className: e.bdExample },
            w(
              "div",
              { className: z },
              w(k.a, {
                control: w(b.a, {
                  tabIndex: -1,
                  onClick: function() {
                    return L(21);
                  },
                  checkedIcon: w(g.a, { className: e.checkedIcon }),
                  icon: w(g.a, { className: e.uncheckedIcon }),
                  classes: { checked: e.checked }
                }),
                classes: { label: e.label },
                label: "Unchecked"
              })
            ),
            w(
              "div",
              { className: z },
              w(k.a, {
                control: w(b.a, {
                  tabIndex: -1,
                  onClick: function() {
                    return L(22);
                  },
                  checked: -1 !== o.indexOf(22),
                  checkedIcon: w(g.a, { className: e.checkedIcon }),
                  icon: w(g.a, { className: e.uncheckedIcon }),
                  classes: { checked: e.checked }
                }),
                classes: { label: e.label },
                label: "Checked"
              })
            ),
            w(
              "div",
              { className: z },
              w(k.a, {
                disabled: !0,
                control: w(b.a, {
                  tabIndex: -1,
                  checkedIcon: w(g.a, { className: e.checkedIcon }),
                  icon: w(g.a, { className: e.uncheckedIcon }),
                  classes: { checked: e.checked }
                }),
                classes: {
                  label: e.label,
                  disabled: e.disabledCheckboxAndRadio
                },
                label: "Disabled Unchecked"
              })
            ),
            w(
              "div",
              { className: z },
              w(k.a, {
                disabled: !0,
                control: w(b.a, {
                  tabIndex: -1,
                  checked: -1 !== o.indexOf(24),
                  checkedIcon: w(g.a, { className: e.checkedIcon }),
                  icon: w(g.a, { className: e.uncheckedIcon }),
                  classes: { checked: e.checked }
                }),
                classes: {
                  label: e.label,
                  disabled: e.disabledCheckboxAndRadio
                },
                label: "Disabled Checked"
              })
            )
          ),
          w(s.a, { language: "jsx", style: i.prism }, O),
          w("h2", null, "Radios"),
          w(
            "div",
            { className: e.bdExample },
            w(
              "div",
              { className: z },
              w(k.a, {
                control: w(m.a, {
                  checked: "a" === f,
                  onChange: function() {
                    return v("a");
                  },
                  value: "a",
                  name: "radio button enabled",
                  "aria-label": "A",
                  icon: w(x.a, { className: e.radioUnchecked }),
                  checkedIcon: w(x.a, { className: e.radioChecked }),
                  classes: { checked: e.radio }
                }),
                classes: { label: e.label },
                label: "First Radio"
              })
            ),
            w(
              "div",
              { className: z },
              w(k.a, {
                control: w(m.a, {
                  checked: "b" === f,
                  onChange: function() {
                    return v("b");
                  },
                  value: "b",
                  name: "radio button enabled",
                  "aria-label": "B",
                  icon: w(x.a, { className: e.radioUnchecked }),
                  checkedIcon: w(x.a, { className: e.radioChecked }),
                  classes: { checked: e.radio }
                }),
                classes: { label: e.label },
                label: "Second Radio"
              })
            ),
            w(
              "div",
              { className: z },
              w(k.a, {
                disabled: !0,
                control: w(m.a, {
                  checked: !1,
                  value: "a",
                  name: "radio button disabled",
                  "aria-label": "B",
                  icon: w(x.a, { className: e.radioUnchecked }),
                  checkedIcon: w(x.a, { className: e.radioChecked }),
                  classes: { checked: e.radio }
                }),
                classes: {
                  label: e.label,
                  disabled: e.disabledCheckboxAndRadio
                },
                label: "Disabled Unchecked Radio"
              })
            ),
            w(
              "div",
              { className: z },
              w(k.a, {
                disabled: !0,
                control: w(m.a, {
                  checked: !0,
                  value: "b",
                  name: "radio button disabled",
                  "aria-label": "B",
                  icon: w(x.a, { className: e.radioUnchecked }),
                  checkedIcon: w(x.a, { className: e.radioChecked }),
                  classes: { checked: e.radio }
                }),
                classes: {
                  label: e.label,
                  disabled: e.disabledCheckboxAndRadio
                },
                label: "Disabled Checked Radio"
              })
            )
          ),
          w(s.a, { language: "jsx", style: i.prism }, j),
          w("h2", null, "Switch"),
          w(
            "div",
            { className: e.bdExample },
            w(
              "div",
              null,
              w(k.a, {
                control: w(p.a, {
                  checked: S,
                  onChange: function(e) {
                    return E(e.target.checked);
                  },
                  value: "checkedA",
                  classes: {
                    switchBase: e.switchBase,
                    checked: e.switchChecked,
                    thumb: e.switchIcon,
                    iconChecked: e.switchIconChecked,
                    track: e.switchBar
                  }
                }),
                classes: { label: e.label },
                label: "Toggle is on"
              })
            ),
            w(
              "div",
              null,
              w(k.a, {
                control: w(p.a, {
                  checked: A,
                  onChange: function(e) {
                    return T(e.target.checked);
                  },
                  value: "checkedB",
                  classes: {
                    switchBase: e.switchBase,
                    checked: e.switchChecked,
                    thumb: e.switchIcon,
                    iconChecked: e.switchIconChecked,
                    track: e.switchBar
                  }
                }),
                classes: { label: e.label },
                label: "Toggle is off"
              })
            )
          ),
          w(s.a, { language: "jsx", style: i.prism }, N)
        );
      }
    },
    ZGBi: function(e, a, n) {
      "use strict";
      var c = n("wx14"),
        t = n("Ff2n"),
        o = n("q1tI"),
        l = n.n(o),
        r = (n("17x9"), n("iuhU")),
        s = n("EHdT"),
        i = n("H2TA"),
        d = n("ofer"),
        h = n("mVKy"),
        u = l.a.forwardRef(function(e, a) {
          e.checked;
          var n = e.classes,
            o = e.className,
            i = e.control,
            u = e.disabled,
            b = (e.inputRef, e.label),
            m = e.labelPlacement,
            p = void 0 === m ? "end" : m,
            k =
              (e.name,
              e.onChange,
              e.value,
              Object(t.a)(e, [
                "checked",
                "classes",
                "className",
                "control",
                "disabled",
                "inputRef",
                "label",
                "labelPlacement",
                "name",
                "onChange",
                "value"
              ])),
            f = Object(s.a)(),
            g = u;
          "undefined" === typeof g &&
            "undefined" !== typeof i.props.disabled &&
            (g = i.props.disabled),
            "undefined" === typeof g && f && (g = f.disabled);
          var v = { disabled: g };
          return (
            ["checked", "name", "onChange", "value", "inputRef"].forEach(
              function(a) {
                "undefined" === typeof i.props[a] &&
                  "undefined" !== typeof e[a] &&
                  (v[a] = e[a]);
              }
            ),
            l.a.createElement(
              "label",
              Object(c.a)(
                {
                  className: Object(r.a)(
                    n.root,
                    o,
                    "end" !== p && n["labelPlacement".concat(Object(h.a)(p))],
                    g && n.disabled
                  ),
                  ref: a
                },
                k
              ),
              l.a.cloneElement(i, v),
              l.a.createElement(
                d.a,
                {
                  component: "span",
                  className: Object(r.a)(n.label, g && n.disabled)
                },
                b
              )
            )
          );
        });
      a.a = Object(i.a)(
        function(e) {
          return {
            root: {
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",
              verticalAlign: "middle",
              WebkitTapHighlightColor: "transparent",
              marginLeft: -11,
              marginRight: 16,
              "&$disabled": { cursor: "default" }
            },
            labelPlacementStart: {
              flexDirection: "row-reverse",
              marginLeft: 16,
              marginRight: -11
            },
            labelPlacementTop: {
              flexDirection: "column-reverse",
              marginLeft: 16
            },
            labelPlacementBottom: { flexDirection: "column", marginLeft: 16 },
            disabled: {},
            label: { "&$disabled": { color: e.palette.text.disabled } }
          };
        },
        { name: "MuiFormControlLabel" }
      )(u);
    },
    d04V: function(e, a, n) {
      e.exports = n("0tVQ");
    },
    dfwq: function(e, a, n) {
      "use strict";
      var c = n("p0XB"),
        t = n.n(c);
      var o = n("d04V"),
        l = n.n(o),
        r = n("yLu3"),
        s = n.n(r);
      function i(e) {
        return (
          (function(e) {
            if (t()(e)) {
              for (var a = 0, n = new Array(e.length); a < e.length; a++)
                n[a] = e[a];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              s()(Object(e)) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return l()(e);
          })(e) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      n.d(a, "a", function() {
        return i;
      });
    },
    doui: function(e, a, n) {
      "use strict";
      var c = n("p0XB"),
        t = n.n(c);
      var o = n("XXOK"),
        l = n.n(o);
      function r(e, a) {
        return (
          (function(e) {
            if (t()(e)) return e;
          })(e) ||
          (function(e, a) {
            var n = [],
              c = !0,
              t = !1,
              o = void 0;
            try {
              for (
                var r, s = l()(e);
                !(c = (r = s.next()).done) &&
                (n.push(r.value), !a || n.length !== a);
                c = !0
              );
            } catch (i) {
              (t = !0), (o = i);
            } finally {
              try {
                c || null == s.return || s.return();
              } finally {
                if (t) throw o;
              }
            }
            return n;
          })(e, a) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      n.d(a, "a", function() {
        return r;
      });
    },
    fmxb: function(e, a, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/checkboxradioswitch",
        function() {
          var e = n("WZsg");
          return { page: e.default || e };
        }
      ]);
    },
    ldVq: function(e, a, n) {
      var c = n("QMMT"),
        t = n("UWiX")("iterator"),
        o = n("SBuE");
      e.exports = n("WEpk").isIterable = function(e) {
        var a = Object(e);
        return void 0 !== a[t] || "@@iterator" in a || o.hasOwnProperty(c(a));
      };
    },
    yLu3: function(e, a, n) {
      e.exports = n("VKFn");
    }
  },
  [["fmxb", 1, 0]]
]);
