(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    Abj7: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("0iUn"),
        o = n("sLSF"),
        i = n("MI3g"),
        s = n("a7VT"),
        r = n("Tit0"),
        l = n("q1tI"),
        u = n.n(l),
        c = n("pzeu"),
        m = n("zR9M"),
        p = n("Oref"),
        h = u.a.createElement,
        f = (function(e) {
          function t() {
            return (
              Object(a.a)(this, t),
              Object(i.a)(this, Object(s.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(r.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function() {
                  return h(
                    p.a,
                    null,
                    h("h1", null, "Icons"),
                    h("h2", null, "Icons font"),
                    h(
                      "p",
                      null,
                      "In order to use the font ",
                      h("code", null, "Icon"),
                      " component, or to use icon names (ligatures) directly in components that support them, you must first add the",
                      " ",
                      h(
                        "a",
                        {
                          href: "https://material.io/icons/?ref=creativetim",
                          target: "_blank"
                        },
                        "Material icons font"
                      ),
                      ". Here are some",
                      " ",
                      h(
                        "a",
                        {
                          href:
                            "https://google.github.io/material-design-icons/#icon-font-for-the-web?ref=creativetim",
                          target: "_blank"
                        },
                        "instructions"
                      ),
                      " ",
                      "on how to do so."
                    ),
                    h("p", null, "You would use them like:"),
                    h(
                      c.a,
                      { language: "jsx", style: m.prism },
                      '<i className="material-icons">name_of_the_icon</i>'
                    ),
                    h(
                      "p",
                      null,
                      "or you could use them with material-ui like so:"
                    ),
                    h(
                      c.a,
                      { language: "jsx", style: m.prism },
                      "import Icon from 'material-ui/Icon';"
                    ),
                    h(
                      c.a,
                      { language: "jsx", style: m.prism },
                      "<Icon>name_of_the_icon</Icon>"
                    ),
                    h("h2", null, "SVG Icons"),
                    h(
                      "p",
                      null,
                      "In order to use prebuilt SVG Material icons, such as those found in the component demos you must first install the",
                      " ",
                      h(
                        "a",
                        {
                          href:
                            "https://www.npmjs.com/package/@material-ui/icons?ref=creativetim",
                          target: "_blank"
                        },
                        "@material-ui/icons"
                      ),
                      " ",
                      "package:"
                    ),
                    h(
                      c.a,
                      { language: "jsx", style: m.prism },
                      "npm install --save @material-ui/icons"
                    ),
                    h("p", null, "Then you would use them like so:"),
                    h(
                      c.a,
                      { language: "jsx", style: m.prism },
                      "import NameOfTheIcon from '@material-ui/icons/NameOfTheIcon';"
                    ),
                    h(
                      c.a,
                      { language: "jsx", style: m.prism },
                      "<NameOfTheIcon />"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(u.a.Component);
      t.default = f;
    },
    raka: function(e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/icons",
        function() {
          var e = n("Abj7");
          return { page: e.default || e };
        }
      ]);
    }
  },
  [["raka", 1, 0]]
]);
