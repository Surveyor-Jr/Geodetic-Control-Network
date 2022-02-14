//>>built
/*
 @esri/arcgis-html-sanitizer - v2.2.0 - Tue Feb 04 2020 08:00:46 GMT-0500 (Eastern Standard Time)
 Copyright (c) 2020 - Environmental Systems Research Institute, Inc.
 Apache-2.0

 js-xss
 Copyright (c) 2012-2017 Zongmin Lei(雷宗民) <leizongmin@gmail.com>
 http://ucdok.com
 MIT License, see https://github.com/leizongmin/js-xss/blob/master/LICENSE for details

 Lodash/isPlainObject
 Copyright (c) JS Foundation and other contributors <https://js.foundation/>
 MIT License, see https://raw.githubusercontent.com/lodash/lodash/4.17.10-npm/LICENSE for details
*/
!function (B, y) { "object" == typeof exports && "undefined" != typeof module ? module.exports = y() : "function" == typeof define && define.amd ? define(y) : (B = B || self).Sanitizer = y() }(this, function () {
    function B(a, b) { return a(b = { exports: {} }, b.exports), b.exports } function y() {
        return {
            "align-content": !1, "align-items": !1, "align-self": !1, "alignment-adjust": !1, "alignment-baseline": !1, all: !1, "anchor-point": !1, animation: !1, "animation-delay": !1, "animation-direction": !1, "animation-duration": !1, "animation-fill-mode": !1, "animation-iteration-count": !1,
            "animation-name": !1, "animation-play-state": !1, "animation-timing-function": !1, azimuth: !1, "backface-visibility": !1, background: !0, "background-attachment": !0, "background-clip": !0, "background-color": !0, "background-image": !0, "background-origin": !0, "background-position": !0, "background-repeat": !0, "background-size": !0, "baseline-shift": !1, binding: !1, bleed: !1, "bookmark-label": !1, "bookmark-level": !1, "bookmark-state": !1, border: !0, "border-bottom": !0, "border-bottom-color": !0, "border-bottom-left-radius": !0, "border-bottom-right-radius": !0,
            "border-bottom-style": !0, "border-bottom-width": !0, "border-collapse": !0, "border-color": !0, "border-image": !0, "border-image-outset": !0, "border-image-repeat": !0, "border-image-slice": !0, "border-image-source": !0, "border-image-width": !0, "border-left": !0, "border-left-color": !0, "border-left-style": !0, "border-left-width": !0, "border-radius": !0, "border-right": !0, "border-right-color": !0, "border-right-style": !0, "border-right-width": !0, "border-spacing": !0, "border-style": !0, "border-top": !0, "border-top-color": !0,
            "border-top-left-radius": !0, "border-top-right-radius": !0, "border-top-style": !0, "border-top-width": !0, "border-width": !0, bottom: !1, "box-decoration-break": !0, "box-shadow": !0, "box-sizing": !0, "box-snap": !0, "box-suppress": !0, "break-after": !0, "break-before": !0, "break-inside": !0, "caption-side": !1, chains: !1, clear: !0, clip: !1, "clip-path": !1, "clip-rule": !1, color: !0, "color-interpolation-filters": !0, "column-count": !1, "column-fill": !1, "column-gap": !1, "column-rule": !1, "column-rule-color": !1, "column-rule-style": !1,
            "column-rule-width": !1, "column-span": !1, "column-width": !1, columns: !1, contain: !1, content: !1, "counter-increment": !1, "counter-reset": !1, "counter-set": !1, crop: !1, cue: !1, "cue-after": !1, "cue-before": !1, cursor: !1, direction: !1, display: !0, "display-inside": !0, "display-list": !0, "display-outside": !0, "dominant-baseline": !1, elevation: !1, "empty-cells": !1, filter: !1, flex: !1, "flex-basis": !1, "flex-direction": !1, "flex-flow": !1, "flex-grow": !1, "flex-shrink": !1, "flex-wrap": !1, float: !1, "float-offset": !1, "flood-color": !1,
            "flood-opacity": !1, "flow-from": !1, "flow-into": !1, font: !0, "font-family": !0, "font-feature-settings": !0, "font-kerning": !0, "font-language-override": !0, "font-size": !0, "font-size-adjust": !0, "font-stretch": !0, "font-style": !0, "font-synthesis": !0, "font-variant": !0, "font-variant-alternates": !0, "font-variant-caps": !0, "font-variant-east-asian": !0, "font-variant-ligatures": !0, "font-variant-numeric": !0, "font-variant-position": !0, "font-weight": !0, grid: !1, "grid-area": !1, "grid-auto-columns": !1, "grid-auto-flow": !1,
            "grid-auto-rows": !1, "grid-column": !1, "grid-column-end": !1, "grid-column-start": !1, "grid-row": !1, "grid-row-end": !1, "grid-row-start": !1, "grid-template": !1, "grid-template-areas": !1, "grid-template-columns": !1, "grid-template-rows": !1, "hanging-punctuation": !1, height: !0, hyphens: !1, icon: !1, "image-orientation": !1, "image-resolution": !1, "ime-mode": !1, "initial-letters": !1, "inline-box-align": !1, "justify-content": !1, "justify-items": !1, "justify-self": !1, left: !1, "letter-spacing": !0, "lighting-color": !0, "line-box-contain": !1,
            "line-break": !1, "line-grid": !1, "line-height": !1, "line-snap": !1, "line-stacking": !1, "line-stacking-ruby": !1, "line-stacking-shift": !1, "line-stacking-strategy": !1, "list-style": !0, "list-style-image": !0, "list-style-position": !0, "list-style-type": !0, margin: !0, "margin-bottom": !0, "margin-left": !0, "margin-right": !0, "margin-top": !0, "marker-offset": !1, "marker-side": !1, marks: !1, mask: !1, "mask-box": !1, "mask-box-outset": !1, "mask-box-repeat": !1, "mask-box-slice": !1, "mask-box-source": !1, "mask-box-width": !1, "mask-clip": !1,
            "mask-image": !1, "mask-origin": !1, "mask-position": !1, "mask-repeat": !1, "mask-size": !1, "mask-source-type": !1, "mask-type": !1, "max-height": !0, "max-lines": !1, "max-width": !0, "min-height": !0, "min-width": !0, "move-to": !1, "nav-down": !1, "nav-index": !1, "nav-left": !1, "nav-right": !1, "nav-up": !1, "object-fit": !1, "object-position": !1, opacity: !1, order: !1, orphans: !1, outline: !1, "outline-color": !1, "outline-offset": !1, "outline-style": !1, "outline-width": !1, overflow: !1, "overflow-wrap": !1, "overflow-x": !1, "overflow-y": !1, padding: !0,
            "padding-bottom": !0, "padding-left": !0, "padding-right": !0, "padding-top": !0, page: !1, "page-break-after": !1, "page-break-before": !1, "page-break-inside": !1, "page-policy": !1, pause: !1, "pause-after": !1, "pause-before": !1, perspective: !1, "perspective-origin": !1, pitch: !1, "pitch-range": !1, "play-during": !1, position: !1, "presentation-level": !1, quotes: !1, "region-fragment": !1, resize: !1, rest: !1, "rest-after": !1, "rest-before": !1, richness: !1, right: !1, rotation: !1, "rotation-point": !1, "ruby-align": !1, "ruby-merge": !1, "ruby-position": !1,
            "shape-image-threshold": !1, "shape-outside": !1, "shape-margin": !1, size: !1, speak: !1, "speak-as": !1, "speak-header": !1, "speak-numeral": !1, "speak-punctuation": !1, "speech-rate": !1, stress: !1, "string-set": !1, "tab-size": !1, "table-layout": !1, "text-align": !0, "text-align-last": !0, "text-combine-upright": !0, "text-decoration": !0, "text-decoration-color": !0, "text-decoration-line": !0, "text-decoration-skip": !0, "text-decoration-style": !0, "text-emphasis": !0, "text-emphasis-color": !0, "text-emphasis-position": !0, "text-emphasis-style": !0,
            "text-height": !0, "text-indent": !0, "text-justify": !0, "text-orientation": !0, "text-overflow": !0, "text-shadow": !0, "text-space-collapse": !0, "text-transform": !0, "text-underline-position": !0, "text-wrap": !0, top: !1, transform: !1, "transform-origin": !1, "transform-style": !1, transition: !1, "transition-delay": !1, "transition-duration": !1, "transition-property": !1, "transition-timing-function": !1, "unicode-bidi": !1, "vertical-align": !1, visibility: !1, "voice-balance": !1, "voice-duration": !1, "voice-family": !1, "voice-pitch": !1,
            "voice-range": !1, "voice-rate": !1, "voice-stress": !1, "voice-volume": !1, volume: !1, "white-space": !1, widows: !1, width: !0, "will-change": !1, "word-break": !0, "word-spacing": !0, "word-wrap": !0, "wrap-flow": !1, "wrap-through": !1, "writing-mode": !1, "z-index": !1
        }
    } function G(a) { var b = a || {}, c = {}, d; for (d in b) c[d] = b[d]; (a = c).whiteList = a.whiteList || z.whiteList; a.onAttr = a.onAttr || z.onAttr; a.onIgnoreAttr = a.onIgnoreAttr || z.onIgnoreAttr; a.safeAttrValue = a.safeAttrValue || z.safeAttrValue; this.options = a } function J(a) {
        return a.replace(aa,
            "\x26lt;").replace(ba, "\x26gt;")
    } function K(a) { return a.replace(ca, "\x26quot;") } function L(a) { return a.replace(da, '"') } function M(a) { return a.replace(ea, function (b, c) { return "x" === c[0] || "X" === c[0] ? String.fromCharCode(parseInt(c.substr(1), 16)) : String.fromCharCode(parseInt(c, 10)) }) } function N(a) { return a.replace(fa, ":").replace(ha, " ") } function O(a) { for (var b = "", c = 0, d = a.length; c < d; c++)b += 32 > a.charCodeAt(c) ? " " : a.charAt(c); return u(b) } function P(a) { return a = O(a = N(a = M(a = L(a)))) } function Q(a) {
        return a =
            J(a = K(a))
    } function ia(a, b) { for (; b < a.length; b++) { var c = a[b]; if (" " !== c) return "\x3d" === c ? b : -1 } } function ja(a, b) { for (; 0 < b; b--) { var c = a[b]; if (" " !== c) return "\x3d" === c ? b : -1 } } function R(a) { return '"' === a[0] && '"' === a[a.length - 1] || "'" === a[0] && "'" === a[a.length - 1] ? a.substr(1, a.length - 2) : a } function H(a) {
        var b = a || {}, c = {}, d; for (d in b) c[d] = b[d]; (a = c).stripIgnoreTag && (a.onIgnoreTag && console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'), a.onIgnoreTag = t.onIgnoreTagStripAll);
        a.whiteList = a.whiteList || t.whiteList; a.onTag = a.onTag || t.onTag; a.onTagAttr = a.onTagAttr || t.onTagAttr; a.onIgnoreTag = a.onIgnoreTag || t.onIgnoreTag; a.onIgnoreTagAttr = a.onIgnoreTagAttr || t.onIgnoreTagAttr; a.safeAttrValue = a.safeAttrValue || t.safeAttrValue; a.escapeHtml = a.escapeHtml || t.escapeHtml; this.options = a; !1 === a.css ? this.cssFilter = !1 : (a.css = a.css || {}, this.cssFilter = new ka(a.css))
    } var S, T, x = Object.prototype, U = Function.prototype.toString, la = x.hasOwnProperty, ma = U.call(Object), na = x.toString, oa = (S = Object.getPrototypeOf,
        T = Object, function (a) { return S(T(a)) }), pa = function (a) { var b; if (!(b = !a || "object" != typeof a || "[object Object]" != na.call(a)) && (b = !1, null != a && "function" != typeof a.toString)) try { b = !!(a + "") } catch (c) { } if (b) return !1; a = oa(a); if (null === a) return !0; a = la.call(a, "constructor") && a.constructor; return "function" == typeof a && a instanceof a && U.call(a) == ma }, qa = /javascript\s*:/gim, z = {
            whiteList: y(), getDefaultWhiteList: y, onAttr: function (a, b, c) { }, onIgnoreAttr: function (a, b, c) { }, safeAttrValue: function (a, b) {
                return qa.test(b) ?
                    "" : b
            }
        }, C = function (a) { return String.prototype.trim ? a.trim() : a.replace(/(^\s*)|(\s*$)/g, "") }, ra = function (a) { return String.prototype.trimRight ? a.trimRight() : a.replace(/(\s*$)/g, "") }, sa = function (a, b) {
            function c() { if (!e) { var l = C(a.slice(g, k)), m = l.indexOf(":"); if (-1 !== m) { var n = C(l.slice(0, m)); m = C(l.slice(m + 1)); n && (l = b(g, f.length, n, m, l)) && (f += l + "; ") } } g = k + 1 } ";" !== (a = ra(a))[a.length - 1] && (a += ";"); for (var d = a.length, e = !1, g = 0, k = 0, f = ""; k < d; k++) {
                var h = a[k]; if ("/" === h && "*" === a[k + 1]) {
                    h = a.indexOf("*/", k + 2); if (-1 ===
                        h) break; g = (k = h + 1) + 1; e = !1
                } else "(" === h ? e = !0 : ")" === h ? e = !1 : ";" === h ? e || c() : "\n" === h && c()
            } return C(f)
        }; G.prototype.process = function (a) {
            if (!(a = (a = a || "").toString())) return ""; var b = this.options, c = b.whiteList, d = b.onAttr, e = b.onIgnoreAttr, g = b.safeAttrValue; return sa(a, function (k, f, h, l, m) {
                var n = c[h], p = !1; if (!0 === n ? p = n : "function" == typeof n ? p = n(l) : n instanceof RegExp && (p = n.test(l)), !0 !== p && (p = !1), l = g(h, l)) {
                    var r; k = { position: f, sourcePosition: k, source: m, isWhite: p }; return p ? null == (r = d(h, l, k)) ? h + ":" + l : r : null == (r = e(h,
                        l, k)) ? void 0 : r
                }
            })
        }; x = B(function (a, b) { for (var c in (b = a.exports = function (d, e) { return (new G(e)).process(d) }).FilterCSS = G, z) b[c] = z[c] }); var V = (x.FilterCSS, function (a, b) { var c; if (Array.prototype.indexOf) return a.indexOf(b); var d = 0; for (c = a.length; d < c; d++)if (a[d] === b) return d; return -1 }), ta = function (a, b, c) { var d; if (Array.prototype.forEach) return a.forEach(b, c); var e = 0; for (d = a.length; e < d; e++)b.call(c, a[e], e, a) }, u = function (a) { return String.prototype.trim ? a.trim() : a.replace(/(^\s*)|(\s*$)/g, "") }, W = function (a) {
            return (a =
                /\s|\n|\t/.exec(a)) ? a.index : -1
        }, ua = x.getDefaultWhiteList, X = new x.FilterCSS, aa = /</g, ba = />/g, ca = /"/g, da = /&quot;/g, ea = /&#([a-zA-Z0-9]*);?/gim, fa = /&colon;?/gim, ha = /&newline;?/gim, D = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi, Y = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, Z = /u\s*r\s*l\s*\(.*/gi, va = /\x3c!--[\s\S]*?--\x3e/g, t = {
            whiteList: {
                a: ["target", "href", "title"], abbr: ["title"], address: [], area: ["shape", "coords", "href", "alt"], article: [], aside: [], audio: ["autoplay",
                    "controls", "loop", "preload", "src"], b: [], bdi: ["dir"], bdo: ["dir"], big: [], blockquote: ["cite"], br: [], caption: [], center: [], cite: [], code: [], col: ["align", "valign", "span", "width"], colgroup: ["align", "valign", "span", "width"], dd: [], del: ["datetime"], details: ["open"], div: [], dl: [], dt: [], em: [], font: ["color", "size", "face"], footer: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], header: [], hr: [], i: [], img: ["src", "alt", "title", "width", "height"], ins: ["datetime"], li: [], mark: [], nav: [], ol: [], p: [], pre: [], s: [], section: [], small: [], span: [],
                sub: [], sup: [], strong: [], table: ["width", "border", "align", "valign"], tbody: ["align", "valign"], td: ["width", "rowspan", "colspan", "align", "valign"], tfoot: ["align", "valign"], th: ["width", "rowspan", "colspan", "align", "valign"], thead: ["align", "valign"], tr: ["rowspan", "align", "valign"], tt: [], u: [], ul: [], video: "autoplay controls loop preload src height width".split(" ")
            }, getDefaultWhiteList: function () {
                return {
                    a: ["target", "href", "title"], abbr: ["title"], address: [], area: ["shape", "coords", "href", "alt"], article: [], aside: [],
                    audio: ["autoplay", "controls", "loop", "preload", "src"], b: [], bdi: ["dir"], bdo: ["dir"], big: [], blockquote: ["cite"], br: [], caption: [], center: [], cite: [], code: [], col: ["align", "valign", "span", "width"], colgroup: ["align", "valign", "span", "width"], dd: [], del: ["datetime"], details: ["open"], div: [], dl: [], dt: [], em: [], font: ["color", "size", "face"], footer: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], header: [], hr: [], i: [], img: ["src", "alt", "title", "width", "height"], ins: ["datetime"], li: [], mark: [], nav: [], ol: [], p: [], pre: [], s: [], section: [],
                    small: [], span: [], sub: [], sup: [], strong: [], table: ["width", "border", "align", "valign"], tbody: ["align", "valign"], td: ["width", "rowspan", "colspan", "align", "valign"], tfoot: ["align", "valign"], th: ["width", "rowspan", "colspan", "align", "valign"], thead: ["align", "valign"], tr: ["rowspan", "align", "valign"], tt: [], u: [], ul: [], video: "autoplay controls loop preload src height width".split(" ")
                }
            }, onTag: function (a, b, c) { }, onIgnoreTag: function (a, b, c) { }, onTagAttr: function (a, b, c) { }, onIgnoreTagAttr: function (a, b, c) { }, safeAttrValue: function (a,
                b, c, d) { if (c = P(c), "href" === b || "src" === b) { if ("#" === (c = u(c))) return "#"; if ("http://" !== c.substr(0, 7) && "https://" !== c.substr(0, 8) && "mailto:" !== c.substr(0, 7) && "tel:" !== c.substr(0, 4) && "#" !== c[0] && "/" !== c[0]) return "" } else if ("background" === b) { if (D.lastIndex = 0, D.test(c)) return "" } else if ("style" === b) { if ((Y.lastIndex = 0, Y.test(c)) || (Z.lastIndex = 0, Z.test(c) && (D.lastIndex = 0, D.test(c)))) return ""; !1 !== d && (c = (d = d || X).process(c)) } return c = Q(c) }, escapeHtml: J, escapeQuote: K, unescapeQuote: L, escapeHtmlEntities: M, escapeDangerHtml5Entities: N,
            clearNonPrintableCharacter: O, friendlyAttrValue: P, escapeAttrValue: Q, onIgnoreTagStripAll: function () { return "" }, StripTagBody: function (a, b) { "function" != typeof b && (b = function () { }); var c = !Array.isArray(a), d = [], e = !1; return { onIgnoreTag: function (g, k, f) { return c || -1 !== V(a, g) ? f.isClosing ? (d.push([!1 !== e ? e : f.position, f.position + 10]), e = !1, "[/removed]") : (e || (e = f.position), "[removed]") : b(g, k, f) }, remove: function (g) { var k = "", f = 0; return ta(d, function (h) { k += g.slice(f, h[0]); f = h[1] }), k += g.slice(f) } } }, stripCommentTag: function (a) {
                return a.replace(va,
                    "")
            }, stripBlankChar: function (a) { a = a.split(""); return (a = a.filter(function (b) { b = b.charCodeAt(0); return 127 !== b && (!(31 >= b) || 10 === b || 13 === b) })).join("") }, cssFilter: X, getDefaultCSSWhiteList: ua
        }, wa = /[^a-zA-Z0-9_:\.\-]/gim, E = {
            parseTag: function (a, b, c) {
                var d = "", e = 0, g = !1, k = !1, f = 0, h = a.length, l = "", m = ""; for (f = 0; f < h; f++)m = a.charAt(f), !1 === g ? "\x3c" === m && (g = f) : !1 === k ? "\x3c" === m ? (d += c(a.slice(e, f)), e = g = f) : "\x3e" === m ? (d += c(a.slice(e, g)), e = m = a.slice(g, f + 1), l = W(e), e = -1 === l ? e.slice(1, -1) : e.slice(1, l + 1), l = ("/" === (e = u(e).toLowerCase()).slice(0,
                    1) && (e = e.slice(1)), "/" === e.slice(-1) && (e = e.slice(0, -1)), e), d += b(g, d.length, l, m, "\x3c/" === m.slice(0, 2)), e = f + 1, g = !1) : '"' !== m && "'" !== m || "\x3d" !== a.charAt(f - 1) || (k = m) : m === k && (k = !1); return e < a.length && (d += c(a.substr(e))), d
            }, parseAttr: function (a, b) {
                function c(l, m) { 1 > (l = (l = u(l)).replace(wa, "").toLowerCase()).length || (l = b(l, m || "")) && e.push(l) } for (var d = 0, e = [], g = !1, k = a.length, f = 0; f < k; f++) {
                    var h = a.charAt(f); if (!1 !== g || "\x3d" !== h) if (!1 === g || f !== d || '"' !== h && "'" !== h || "\x3d" !== a.charAt(f - 1)) /\s|\n|\t/.test(h) &&
                        ((a = a.replace(/\s|\n|\t/g, " "), !1 === g) ? -1 === (h = ia(a, f)) ? (c(u(a.slice(d, f))), g = !1, d = f + 1) : f = h - 1 : -1 === (h = ja(a, f - 1)) && (c(g, R(u(a.slice(d, f)))), g = !1, d = f + 1)); else { if (-1 === (h = a.indexOf(h, f + 1))) break; c(g, u(a.slice(d + 1, h))); g = !1; d = (f = h) + 1 } else g = a.slice(d, f), d = f + 1
                } return d < a.length && (!1 === g ? c(a.slice(d)) : c(g, R(u(a.slice(d))))), u(e.join(" "))
            }
        }, ka = x.FilterCSS, xa = E.parseTag, ya = E.parseAttr; H.prototype.process = function (a) {
            if (!(a = (a = a || "").toString())) return ""; var b = this.options, c = b.whiteList, d = b.onTag, e = b.onIgnoreTag,
                g = b.onTagAttr, k = b.onIgnoreTagAttr, f = b.safeAttrValue, h = b.escapeHtml, l = this.cssFilter; b.stripBlankChar && (a = t.stripBlankChar(a)); b.allowCommentTag || (a = t.stripCommentTag(a)); var m = !1; b.stripIgnoreTagBody && (m = t.StripTagBody(b.stripIgnoreTagBody, e), e = m.onIgnoreTag); a = xa(a, function (n, p, r, w, za) {
                    p = { sourcePosition: n, position: p, isClosing: za, isWhite: c.hasOwnProperty(r) }; if (null != (n = d(r, w, p))) return n; if (p.isWhite) {
                        if (p.isClosing) return "\x3c/" + r + "\x3e"; n = function (q) {
                            var v = W(q); if (-1 === v) return {
                                html: "", closing: "/" ===
                                    q[q.length - 2]
                            }; v = "/" === (q = u(q.slice(v + 1, -1)))[q.length - 1]; return v && (q = u(q.slice(0, -1))), { html: q, closing: v }
                        }(w); var Aa = c[r]; p = ya(n.html, function (q, v) { var F, I = -1 !== V(Aa, q); return null == (F = g(r, q, v, I)) ? I ? (v = f(r, q, v, l)) ? q + '\x3d"' + v + '"' : q : null == (F = k(r, q, v, I)) ? void 0 : F : F }); w = "\x3c" + r; return p && (w += " " + p), n.closing && (w += " /"), w += "\x3e"
                    } return null == (n = e(r, w, p)) ? h(w) : n
                }, h); return m && (a = m.remove(a)), a
        }; var A = B(function (a, b) {
            function c(e, g) { return (new H(g)).process(e) } for (var d in (b = a.exports = c).filterXSS =
                c, b.FilterXSS = H, t) b[d] = t[d]; for (d in E) b[d] = E[d]; "undefined" != typeof self && "undefined" != typeof DedicatedWorkerGlobalScope && self instanceof DedicatedWorkerGlobalScope && (self.filterXSS = a.exports)
        }); A.filterXSS; A.FilterXSS; return function () {
            function a(b, c) {
                var d, e = this; this.arcgisWhiteList = {
                    a: ["href", "target", "style"], img: "src width height border alt style".split(" "), video: "autoplay controls height loop muted poster preload width".split(" "), audio: ["autoplay", "controls", "loop", "muted", "preload"], source: ["media",
                        "src", "type"], span: ["style"], table: "width height cellpadding cellspacing border style".split(" "), div: ["style", "align"], font: ["size", "color", "style"], tr: ["height", "valign", "align", "style"], td: "height width valign align colspan rowspan nowrap style".split(" "), th: "height width valign align colspan rowspan nowrap style".split(" "), p: ["style"], b: [], strong: [], i: [], em: [], u: [], br: [], li: [], ul: [], ol: [], hr: [], tbody: []
                }; this.allowedProtocols = "http https mailto iform tel flow lfmobile arcgis-navigator arcgis-appstudio-player arcgis-survey123 arcgis-collector arcgis-workforce arcgis-explorer arcgis-trek2there mspbi comgooglemaps pdfefile pdfehttp pdfehttps boxapp boxemm awb awbs gropen radarscope".split(" ");
                this.arcgisFilterOptions = { allowCommentTag: !0, safeAttrValue: function (g, k, f, h) { return "a" === g && "href" === k || ("img" === g || "source" === g) && "src" === k ? e.sanitizeUrl(f) : A.safeAttrValue(g, k, f, h) } }; b && !c ? d = b : b && c ? (d = Object.create(this.arcgisFilterOptions), Object.keys(b).forEach(function (g) { "whiteList" === g ? d.whiteList = e._extendObjectOfArrays([e.arcgisWhiteList, b.whiteList || {}]) : d[g] = b[g] })) : (d = Object.create(this.arcgisFilterOptions)).whiteList = this.arcgisWhiteList; this.xssFilterOptions = d; this._xssFilter = new A.FilterXSS(d);
                this.xss = A
            } return a.prototype.sanitize = function (b, c) { switch (void 0 === c && (c = {}), typeof b) { case "number": return isNaN(b) || !isFinite(b) ? null : b; case "boolean": return b; case "string": return this._xssFilter.process(b); case "object": return this._iterateOverObject(b, c); default: if (!c.allowUndefined || void 0 !== b) return null } }, a.prototype.sanitizeUrl = function (b) {
                var c = this._trim(b.substring(0, b.indexOf(":"))); return "/" === b || "#" === b || "#" === b[0] || -1 < this.allowedProtocols.indexOf(c.toLowerCase()) ? A.escapeAttrValue(b) :
                    ""
            }, a.prototype.validate = function (b, c) { void 0 === c && (c = {}); c = this.sanitize(b, c); return { isValid: b === c, sanitized: c } }, a.prototype._extendObjectOfArrays = function (b) { var c = {}; return b.forEach(function (d) { Object.keys(d).forEach(function (e) { Array.isArray(d[e]) && Array.isArray(c[e]) ? c[e] = c[e].concat(d[e]) : c[e] = d[e] }) }), c }, a.prototype._iterateOverObject = function (b, c) {
                var d = this; void 0 === c && (c = {}); try {
                    var e = !1, g = void 0; if (Array.isArray(b)) g = b.reduce(function (k, f) {
                        var h = d.validate(f, c); return h.isValid ? k.concat([f]) :
                            (e = !0, k.concat([h.sanitized]))
                    }, []); else { if (!pa(b)) return c.allowUndefined && void 0 === b ? void 0 : null; g = Object.keys(b).reduce(function (k, f) { var h = b[f], l = d.validate(h, c); return l.isValid ? k[f] = h : (e = !0, k[f] = l.sanitized), k }, {}) } return e ? g : b
                } catch (k) { return null }
            }, a.prototype._trim = function (b) { return String.prototype.trim ? b.trim() : b.replace(/(^\s*)|(\s*$)/g, "") }, a
        }()
});