(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    22: function(e, t, a) {
      e.exports = a(33);
    },
    27: function(e, t, a) {},
    33: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        c = a.n(n),
        r = a(17),
        l = a.n(r),
        s = a(18),
        o = a(7),
        m = (a(27), a(21)),
        u = a(1),
        i = function(e, t) {
          var a = Object(n.useState)(t),
            c = Object(u.a)(a, 2),
            r = c[0],
            l = c[1];
          return (
            t &&
              Object(n.useEffect)(
                function() {
                  console.log(e),
                    fetch(e)
                      .then(function(e) {
                        return e.json();
                      })
                      .then(function(e) {
                        return l(e);
                      });
                },
                [e]
              ),
            r
          );
        },
        d = a(6);
      var E = function(e) {
        var t = i(e.baseUrl, {}),
          a = t.message,
          r = t.data,
          l = Object(n.useState)(!1),
          s = Object(u.a)(l, 2),
          o = s[0],
          m = s[1],
          E = (function(t) {
            if ((e.setApiMessage(a), t)) {
              var n = JSON.parse(t)
                .sort(function(e, t) {
                  return e.date < t.date ? 1 : t.date < e.date ? -1 : 0;
                })
                .map(function(e, t) {
                  return c.a.createElement(
                    "tr",
                    { key: t },
                    c.a.createElement("td", { key: 0 }, e.symbol),
                    c.a.createElement("td", { key: 1 }, e.date),
                    c.a.createElement("td", { key: 2 }, e.open),
                    c.a.createElement("td", { key: 3 }, e.high),
                    c.a.createElement("td", { key: 4 }, e.low),
                    c.a.createElement("td", { key: 5 }, e.close),
                    c.a.createElement("td", { key: 6 }, e.volume),
                    c.a.createElement("td", { key: 7 }, e.adjusted)
                  );
                });
              return c.a.createElement(
                "table",
                null,
                c.a.createElement(
                  "tbody",
                  null,
                  c.a.createElement(
                    "tr",
                    { key: "tbody" },
                    c.a.createElement("td", { key: 0 }, "Symbol"),
                    c.a.createElement("td", { key: 1 }, "Date"),
                    c.a.createElement("td", { key: 2 }, "Open"),
                    c.a.createElement("td", { key: 3 }, "High"),
                    c.a.createElement("td", { key: 4 }, "Low"),
                    c.a.createElement("td", { key: 5 }, "Close"),
                    c.a.createElement("td", { key: 6 }, "Volume"),
                    c.a.createElement("td", { key: 7 }, "Adjusted")
                  ),
                  n
                )
              );
            }
          })(r),
          b = function() {
            m(!o);
          };
        return c.a.createElement(
          "div",
          null,
          o
            ? c.a.createElement(
                "button",
                { className: "page-button", onClick: b },
                "Hide Table"
              )
            : c.a.createElement(
                "button",
                { className: "page-button", onClick: b },
                "Show Table"
              ),
          c.a.createElement(
            d.Collapse,
            { isOpened: o },
            c.a.createElement(
              "div",
              null,
              c.a.createElement(
                "a",
                { href: e.baseExcel },
                c.a.createElement("h3", null, "Download Data")
              ),
              E
            )
          )
        );
      };
      var b = function(e) {
          var t = function(t) {
            console.log("Inside handleKeyPress"),
              "Enter" === t.key && e.searchQuery();
          };
          return c.a.createElement(
            "div",
            { onSubmit: e.searchQuery, className: "form-display" },
            c.a.createElement(
              "div",
              { className: "form-input" },
              c.a.createElement("label", { htmlFor: "query" }, "Query"),
              c.a.createElement("input", {
                className: "input",
                value: e.userQuery,
                onChange: function(t) {
                  console.log("Inside updateUserQuery"),
                    t.preventDefault(),
                    e.setUserQuery(t.target.value);
                },
                onKeyPress: t,
                id: "query"
              })
            ),
            c.a.createElement(
              "div",
              { className: "form-input" },
              c.a.createElement(
                "label",
                { htmlFor: "start-date" },
                "Start Date"
              ),
              c.a.createElement("input", {
                type: "date",
                value: e.userStartDate,
                onChange: function(t) {
                  console.log("Inside handleStartDate"),
                    e.setUserStartDate(t.target.value);
                },
                onKeyPress: t,
                id: "start-date"
              })
            ),
            c.a.createElement(
              "div",
              { className: "form-input" },
              c.a.createElement("label", { htmlFor: "end-date" }, "End Date"),
              c.a.createElement("input", {
                type: "date",
                value: e.userEndDate,
                onChange: function(t) {
                  console.log("Inside handleStartDate"),
                    e.setUserEndDate(t.target.value);
                },
                onKeyPress: t,
                id: "end-date"
              })
            ),
            c.a.createElement(
              "div",
              { className: "form-input" },
              c.a.createElement(
                "label",
                { htmlFor: "ma-days" },
                "Moving Average Days"
              ),
              c.a.createElement("input", {
                type: "numeric",
                value: e.maDays,
                onChange: function(t) {
                  t.preventDefault(), e.setMaDays(t.target.value);
                },
                onKeyPress: t,
                id: "ma-days"
              })
            ),
            c.a.createElement(
              "div",
              { className: "form-input" },
              c.a.createElement("button", { onClick: e.searchQuery }, "Search")
            )
          );
        },
        p = function(e) {
          return c.a.createElement(
            "div",
            null,
            c.a.createElement("h1", null, "Old Searches"),
            e.priorSearches.map(function(e, t) {
              return (
                console.log(e),
                c.a.createElement(
                  "div",
                  { key: t },
                  c.a.createElement("p", null, e)
                )
              );
            })
          );
        },
        h = function(e) {
          return c.a.createElement(
            "div",
            null,
            c.a.createElement("img", {
              className: "gg-plot",
              src: e.baseUrlImage,
              alt: e.baseUrlImage
            })
          );
        },
        k = function(e) {
          var t = Object(n.useState)(!1),
            a = Object(u.a)(t, 2),
            r = a[0],
            l = a[1],
            s = function(e) {
              l(!r);
            };
          return c.a.createElement(
            "div",
            null,
            r
              ? c.a.createElement(
                  "button",
                  { className: "page-button", onClick: s },
                  "Hide Image"
                )
              : c.a.createElement(
                  "button",
                  { className: "page-button", onClick: s },
                  "Show Image"
                ),
            c.a.createElement(
              d.Collapse,
              { isOpened: r },
              c.a.createElement(h, {
                baseUrlImage: e.baseUrlImage,
                baseUrl: e.baseUrl
              })
            )
          );
        },
        y = function(e) {
          var t = Object(n.useState)(!1),
            a = Object(u.a)(t, 2),
            r = a[0],
            l = a[1],
            s = Object(n.useState)(!1),
            o = Object(u.a)(s, 2),
            m = o[0],
            i = o[1],
            E = function(e) {
              l(!r);
            },
            b = function(e) {
              i(!m);
            };
          return c.a.createElement(
            "div",
            null,
            r
              ? c.a.createElement(
                  "button",
                  { className: "page-button", onClick: E },
                  "Hide HTML Markdown"
                )
              : c.a.createElement(
                  "button",
                  { className: "page-button", onClick: E },
                  "Show HTML Markdown"
                ),
            c.a.createElement(
              d.Collapse,
              { isOpened: r },
              c.a.createElement("iframe", {
                className: "markdown",
                src: e.htmlUrl,
                frameBorder: "0",
                title: "HTML Markdown"
              })
            ),
            m
              ? c.a.createElement(
                  "button",
                  { className: "page-button", onClick: b },
                  "Hide PDF Markdown"
                )
              : c.a.createElement(
                  "button",
                  { className: "page-button", onClick: b },
                  "Show PDF Markdown"
                ),
            c.a.createElement(
              d.Collapse,
              { isOpened: m },
              c.a.createElement("h3", null, "PDF"),
              c.a.createElement("iframe", {
                className: "markdown",
                src: "http://127.0.0.1:8000/pdf",
                frameBorder: "0",
                title: "PDF Markdown"
              })
            )
          );
        },
        f = 8e3,
        g = !0;
      var v = function() {
          var e = function(e, t, a, n, c, r) {
              var l =
                  arguments.length > 6 &&
                  void 0 !== arguments[6] &&
                  arguments[6],
                s = arguments.length > 7 ? arguments[7] : void 0,
                o = arguments.length > 8 ? arguments[8] : void 0,
                m = t.split(",").map(function(e) {
                  return e.trim();
                });
              return (
                (m = JSON.stringify(m)),
                o
                  ? l
                    ? "http://127.0.0.1:"
                        .concat(e, "/html?stocks=")
                        .concat(m, "&startDate=")
                        .concat(a, "&endDate=")
                        .concat(n, "&ma_days=")
                        .concat(c)
                    : "http://drenr.com/api/html?stocks="
                        .concat(m, "&startDate=")
                        .concat(a, "&endDate=")
                        .concat(n, "&ma_days=")
                        .concat(c)
                  : s
                  ? l
                    ? "http://127.0.0.1:8000/stocks_excel?stocks=".concat(m)
                    : "http://drenr.com/api/stocks_excel?stocks=".concat(m)
                  : r
                  ? l
                    ? "http://127.0.0.1:"
                        .concat(e, "/get_stocks?stocks=")
                        .concat(m, "&startDate=")
                        .concat(a, "&endDate=")
                        .concat(n, "&ma_days=")
                        .concat(c)
                    : "http://drenr.com/api/get_stocks?stocks="
                        .concat(m, "&startDate=")
                        .concat(a, "&endDate=")
                        .concat(n, "&ma_days=")
                        .concat(c)
                  : l
                  ? "http://127.0.0.1:"
                      .concat(e, "/get_stocks_data?stocks=")
                      .concat(m, "&startDate=")
                      .concat(a, "&endDate=")
                      .concat(n)
                  : "http://drenr.com/api/get_stocks_data?stocks="
                      .concat(m, "&startDate=")
                      .concat(a, "&endDate=")
                      .concat(n)
              );
            },
            t = Object(n.useState)("BOA, M, F, AKRX"),
            a = Object(u.a)(t, 2),
            r = a[0],
            l = a[1],
            s = Object(n.useState)("2019-01-01"),
            o = Object(u.a)(s, 2),
            i = o[0],
            h = o[1],
            v = Object(n.useState)("2020-01-01"),
            O = Object(u.a)(v, 2),
            D = O[0],
            j = O[1],
            S = Object(n.useState)("5"),
            N = Object(u.a)(S, 2),
            w = N[0],
            U = N[1],
            C = Object(n.useState)(void 0),
            M = Object(u.a)(C, 2),
            _ = M[0],
            I = M[1],
            P = e(f, r, i, D, w, !1, g, !1, !1),
            A = e(f, r, i, D, w, !0, g, !1, !1),
            F = e(f, r, i, D, w, !1, g, !0, !1),
            Q = e(f, r, i, D, w, !1, g, !1, !0),
            H = Object(n.useState)(P),
            T = Object(u.a)(H, 2),
            x = T[0],
            K = T[1],
            B = Object(n.useState)(A),
            J = Object(u.a)(B, 2),
            L = J[0],
            R = J[1],
            q = Object(n.useState)(F),
            V = Object(u.a)(q, 2),
            X = V[0],
            z = V[1],
            G = Object(n.useState)(Q),
            W = Object(u.a)(G, 2),
            Y = W[0],
            Z = W[1],
            $ = Object(n.useState)([]),
            ee = Object(u.a)($, 2),
            te = ee[0],
            ae = ee[1];
          return c.a.createElement(
            "div",
            { className: "App" },
            c.a.createElement("div", null, _),
            c.a.createElement(b, {
              searchQuery: function() {
                var t = e(f, r, i, D, w, !1, g, !1),
                  a = e(f, r, i, D, w, !0, g, !1),
                  n = e(f, r, i, D, w, !1, g, !0, !1),
                  c = e(f, r, i, D, w, !1, g, !1, !0);
                K(t), R(a), z(n), Z(c), ae([].concat(Object(m.a)(te), [t]));
              },
              userQuery: r,
              maDays: w,
              setMaDays: U,
              userStartDate: i,
              setUserStartDate: h,
              setUserEndDate: j,
              userEndDate: D,
              setUserQuery: l
            }),
            c.a.createElement("br", null),
            c.a.createElement(k, { baseUrlImage: L, baseUrl: x }),
            c.a.createElement(
              d.Collapse,
              { isOpened: !0 },
              c.a.createElement(E, {
                apiMessage: _,
                setApiMessage: I,
                baseUrl: x,
                setBaseUrl: K,
                baseExcel: X
              })
            ),
            c.a.createElement(y, { htmlUrl: Y }),
            c.a.createElement(p, { priorSearches: te })
          );
        },
        O = function(e) {
          return c.a.createElement(
            "nav",
            { className: "navbar" },
            c.a.createElement(
              "a",
              { href: "https://github.com/fdrennan/stocks", target: "_blank" },
              c.a.createElement("h1", { className: "navbar-link" }, "App REPO")
            ),
            c.a.createElement(
              "a",
              {
                href: "https://github.com/fdrennan/stockAPI",
                target: "_blank"
              },
              c.a.createElement("h1", { className: "navbar-link" }, "R REPO")
            ),
            c.a.createElement("h1", null, e.navTitle)
          );
        },
        D = c.a.createElement(
          s.a,
          { basename: "/" },
          c.a.createElement(O, { navTitle: "Stock Application" }),
          c.a.createElement(
            o.c,
            null,
            c.a.createElement(o.a, { path: "/", component: v, exact: !0 }),
            c.a.createElement(o.a, {
              path: "/image",
              component: function() {
                return c.a.createElement("div", null, "Hello");
              }
            }),
            c.a.createElement(o.a, {
              component: function() {
                return c.a.createElement("div", null, "404 NOT FOUND");
              }
            })
          )
        );
      l.a.render(D, document.getElementById("root"));
    }
  },
  [[22, 1, 2]]
]);
//# sourceMappingURL=main.8948c2ca.chunk.js.map
