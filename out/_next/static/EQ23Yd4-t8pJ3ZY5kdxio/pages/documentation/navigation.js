(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    "5jhq": function(e, n, o) {
      "use strict";
      o.r(n),
        o.d(n, "default", function() {
          return c;
        });
      var r = o("q1tI"),
        t = o.n(r),
        s = o("pzeu"),
        l = o("zR9M"),
        a = o("Oref"),
        i = t.a.createElement,
        p =
          'Header.defaultProps = {\n  color: "white"\n};\n\nHeader.propTypes = {\n  color: PropTypes.oneOf([\n    "primary",\n    "info",\n    "success",\n    "warning",\n    "danger",\n    "transparent",\n    "white",\n    "rose",\n    "dark"\n  ]),\n  rightLinks: PropTypes.node,\n  leftLinks: PropTypes.node,\n  brand: PropTypes.string,\n  fixed: PropTypes.bool,\n  absolute: PropTypes.bool,\n  // this will cause the sidebar to change the color from\n  // this.props.color (see above) to changeColorOnScroll.color\n  // when the window.pageYOffset is heigher or equal to\n  // changeColorOnScroll.height and then when it is smaller than\n  // changeColorOnScroll.height change it back to\n  // this.props.color (see above)\n  changeColorOnScroll: PropTypes.shape({\n    height: PropTypes.number.isRequired,\n    color: PropTypes.oneOf([\n      "primary",\n      "info",\n      "success",\n      "warning",\n      "danger",\n      "transparent",\n      "white",\n      "rose",\n      "dark"\n    ]).isRequired\n  })\n};';
      function c() {
        return i(
          a.a,
          null,
          i("h1", null, "Navigation"),
          i("h2", null, "Styles"),
          i(
            "p",
            null,
            "You will find all the styles for these components in",
            i("br", null),
            i(
              "code",
              null,
              "src/assets/jss/nextjs-material-kit/components/headerStyle.js"
            ),
            i("br", null),
            i(
              "code",
              null,
              "src/assets/jss/nextjs-material-kit/components/headerLinksStyle.js"
            ),
            "."
          ),
          i("p", null, "The classic Material UI Appbar was restyled."),
          i(
            "p",
            null,
            "You will find this component in",
            " ",
            i("code", null, "src/components/Header/Header.jsx"),
            ". In this component there is just the structure of the navbar. The links can be found in",
            " ",
            i("code", null, "src/components/Header/HeaderLinks.jsx"),
            ". We've done this because we want our users to be able to add their own links easily."
          ),
          i(
            "p",
            null,
            "You can choose between 9 colors by using the ",
            i("code", null, "color"),
            " ",
            "property."
          ),
          i(
            "p",
            null,
            "If this property is not set, then the Appbar will be ",
            i("code", null, "white"),
            "."
          ),
          i(s.a, { language: "jsx", style: l.prism }, p),
          i("h2", null, "Props"),
          i(
            "p",
            null,
            "Please check out the",
            " ",
            i(
              "a",
              {
                href:
                  "https://material-ui-next.com/demos/app-bar/?ref=creativetim",
                target: "_blank"
              },
              "official material-ui documentation"
            ),
            "."
          )
        );
      }
    },
    wP2k: function(e, n, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/navigation",
        function() {
          var e = o("5jhq");
          return { page: e.default || e };
        }
      ]);
    }
  },
  [["wP2k", 1, 0]]
]);
