(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    "+4wc": function(e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/clearfix",
        function() {
          var e = t("cTXE");
          return { page: e.default || e };
        }
      ]);
    },
    cTXE: function(e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, "default", function() {
          return d;
        });
      var a = t("q1tI"),
        l = t.n(a),
        o = t("pzeu"),
        i = t("zR9M"),
        r = t("Oref"),
        s = l.a.createElement,
        u = 'import Clearfix from "components/Clearfix/Clearfix.js";',
        c = "<Clearfix />";
      function d() {
        return s(
          r.a,
          null,
          s("h1", null, "Clearfix"),
          s(
            "p",
            null,
            "A clearfix is a way for an element to automatically clear its child elements, so that you don't need to add additional markup. It's generally used in float layouts where elements are floated to be stacked horizontally."
          ),
          s(
            "p",
            null,
            "You can see it being used in",
            " ",
            s(
              "code",
              null,
              "src/views/Components/Sections/SectionNotifications.jsx"
            ),
            "."
          ),
          s(o.a, { language: "jsx", style: i.prism }, u),
          s(o.a, { language: "jsx", style: i.prism }, c)
        );
      }
    }
  },
  [["+4wc", 1, 0]]
]);
