! function(e, t, n, o, r) {
    "function" == typeof define && define.amd ? define(function() {
        return e.fullpage = o(t, n), e.fullpage
    }) : "object" == typeof exports ? module.exports = o(t, n) : t.fullpage = o(t, n)
}(this, window, document, function(e, t) {
    "use strict";
    var n = "fullpage-wrapper",
        o = "." + n,
        r = "fp-responsive",
        i = "fp-notransition",
        l = "fp-destroyed",
        a = "fp-enabled",
        s = "fp-viewing",
        c = "active",
        u = "." + c,
        d = "fp-completely",
        f = "." + d,
        v = ".section",
        p = "fp-section",
        h = "." + p,
        g = h + u,
        m = "fp-tableCell",
        S = "." + m,
        b = "fp-auto-height",
        y = "fp-normal-scroll",
        w = "fp-nav",
        E = "#" + w,
        x = "fp-tooltip",
        L = "." + x,
        A = "fp-show-active",
        M = ".slide",
        T = "fp-slide",
        O = "." + T,
        k = O + u,
        C = "fp-slides",
        H = "." + C,
        R = "fp-slidesContainer",
        I = "." + R,
        z = "fp-table",
        B = "fp-initial",
        N = "fp-slidesNav",
        P = "." + N,
        j = P + " a",
        Y = "fp-controlArrow",
        D = "." + Y,
        W = "fp-prev",
        V = Y + " " + W,
        X = D + ("." + W),
        Z = "fp-next",
        G = Y + " " + Z,
        U = D + ".fp-next";

    function F(t, n) {
     //   e.console && e.console[t] && e.console[t]("fullPage: " + n)
    }

    function _(e, n) {
        return (n = arguments.length > 1 ? n : t) ? n.querySelectorAll(e) : null
    }

    function Q(e) {
        e = e || {};
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            if (n)
                for (var o in n) n.hasOwnProperty(o) && ("object" == typeof n[o] && null != n[o] ? e[o] = Q(e[o], n[o]) : e[o] = n[o])
        }
        return e
    }

    function J(e, t) {
        return null != e && (e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className))
    }

    function K() {
        return "innerHeight" in e ? e.innerHeight : t.documentElement.offsetHeight
    }

    function q(e, t) {
        var n;
        for (n in e = le(e), t)
            if (t.hasOwnProperty(n) && null !== n)
                for (var o = 0; o < e.length; o++) {
                    e[o].style[n] = t[n]
                }
            return e
    }

    function $(e, t, n) {
        for (var o = e[n]; o && !Ae(o, t);) o = o[n];
        return o
    }

    function ee(e, t) {
        return $(e, t, "previousElementSibling")
    }

    function te(e, t) {
        return $(e, t, "nextElementSibling")
    }

    function ne(e, t) {
        if (null == t) return e.previousElementSibling;
        var n = ne(e);
        return n && Ae(n, t) ? n : null
    }

    function oe(e, t) {
        if (null == t) return e.nextElementSibling;
        var n = oe(e);
        return n && Ae(n, t) ? n : null
    }

    function re(e) {
        return e[e.length - 1]
    }

    function ie(e, t) {
        e = ce(e) ? e[0] : e;
        for (var n = null != t ? _(t, e.parentNode) : e.parentNode.childNodes, o = 0, r = 0; r < n.length; r++) {
            if (n[r] == e) return o;
            1 == n[r].nodeType && o++
        }
        return -1
    }

    function le(e) {
        return ce(e) ? e : [e]
    }

    function ae(e) {
        e = le(e);
        for (var t = 0; t < e.length; t++) e[t].style.display = "none";
        return e
    }

    function se(e) {
        e = le(e);
        for (var t = 0; t < e.length; t++) e[t].style.display = "block";
        return e
    }

    function ce(e) {
        return "[object Array]" === Object.prototype.toString.call(e) || "[object NodeList]" === Object.prototype.toString.call(e)
    }

    function ue(e, t) {
        e = le(e);
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.classList ? o.classList.add(t) : o.className += " " + t
        }
        return e
    }

    function de(e, t) {
        e = le(e);
        for (var n = t.split(" "), o = 0; o < n.length; o++) {
            t = n[o];
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.classList ? i.classList.remove(t) : i.className = i.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
            }
        }
        return e
    }

    function fe(e, t) {
        t.appendChild(e)
    }

    function ve(e, n, o) {
        var r;
        n = n || t.createElement("div");
        for (var i = 0; i < e.length; i++) {
            var l = e[i];
            (o && !i || !o) && (r = n.cloneNode(!0), l.parentNode.insertBefore(r, l)), r.appendChild(l)
        }
        return e
    }

    function pe(e, t) {
        ve(e, t, !0)
    }

    function he(e, t) {
        for ("string" == typeof t && (t = Te(t)), e.appendChild(t); e.firstChild !== t;) t.appendChild(e.firstChild)
    }

    function ge(e, t) {
        return e && 1 === e.nodeType ? Ae(e, t) ? e : ge(e.parentNode, t) : null
    }

    function me(e, t) {
        be(e, e.nextSibling, t)
    }

    function Se(e, t) {
        be(e, e, t)
    }

    function be(e, t, n) {
        ce(n) || ("string" == typeof n && (n = Te(n)), n = [n]);
        for (var o = 0; o < n.length; o++) e.parentNode.insertBefore(n[o], t)
    }

    function ye() {
        var n = t.documentElement;
        return (e.pageYOffset || n.scrollTop) - (n.clientTop || 0)
    }

    function we(e) {
        return Array.prototype.filter.call(e.parentNode.children, function(t) {
            return t !== e
        })
    }

    function Ee(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }

    function xe(e) {
        if ("function" == typeof e) return !0;
        var t = Object.prototype.toString(e);
        return "[object Function]" === t || "[object GeneratorFunction]" === t
    }

    function Le(n, o, r) {
        var i;
        r = void 0 === r ? {} : r, "function" == typeof e.CustomEvent ? i = new CustomEvent(o, {
            detail: r
        }) : (i = t.createEvent("CustomEvent")).initCustomEvent(o, !0, !0, r), n.dispatchEvent(i)
    }

    function Ae(e, t) {
        return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t)
    }

    function Me(e, t) {
        if ("boolean" == typeof t)
            for (var n = 0; n < e.length; n++) e[n].style.display = t ? "block" : "none";
        return e
    }

    function Te(e) {
        var n = t.createElement("div");
        return n.innerHTML = e.trim(), n.firstChild
    }

    function Oe(e) {
        e = le(e);
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            n && n.parentElement && n.parentNode.removeChild(n)
        }
    }

    function ke(e, t, n) {
        for (var o = e[n], r = []; o;)(Ae(o, t) || null == t) && r.push(o), o = o[n];
        return r
    }

    function Ce(e, t) {
        return ke(e, t, "nextElementSibling")
    }

    function He(e, t) {
        return ke(e, t, "previousElementSibling")
    }

    function Re(e, t) {
        e.insertBefore(t, e.firstChild)
    }
    return e.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(t, n) {
            n = n || e;
            for (var o = 0; o < this.length; o++) t.call(n, this[o], o, this)
        }), e.fp_utils = {
            $: _,
            deepExtend: Q,
            hasClass: J,
            getWindowHeight: K,
            css: q,
            until: $,
            prevUntil: ee,
            nextUntil: te,
            prev: ne,
            next: oe,
            last: re,
            index: ie,
            getList: le,
            hide: ae,
            show: se,
            isArrayOrList: ce,
            addClass: ue,
            removeClass: de,
            appendTo: fe,
            wrap: ve,
            wrapAll: pe,
            wrapInner: he,
            closest: ge,
            after: me,
            before: Se,
            insertBefore: be,
            getScrollTop: ye,
            siblings: we,
            preventDefault: Ee,
            isFunction: xe,
            trigger: Le,
            matches: Ae,
            toggle: Me,
            createElementFromHTML: Te,
            remove: Oe,
            filter: function(e, t) {
                Array.prototype.filter.call(e, t)
            },
            untilAll: ke,
            nextAll: Ce,
            prevAll: He,
            prependTo: Re,
            toggleClass: function(e, t, n) {
                if (e.classList && null == n) e.classList.toggle(t);
                else {
                    var o = J(e, t);
                    o && null == n || !n ? de(e, t) : (!o && null == n || n) && ue(e, t)
                }
            },
            showError: F
        },
        function(Y, Z) {
            var $ = Z && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|OPEN-SOURCE-GPLV3-LICENSE").test(Z.licenseKey) || t.domain.indexOf("alvarotrigo.com") > -1;
            if (!J(_("html"), a)) {
                var le = _("html, body"),
                    ce = _("body")[0],
                    ve = {};
                Z = Q({
                    menu: !1,
                    anchors: [],
                    lockAnchors: !1,
                    navigation: !1,
                    navigationPosition: "right",
                    navigationTooltips: [],
                    showActiveTooltip: !1,
                    slidesNavigation: !1,
                    slidesNavPosition: "bottom",
                    scrollBar: !1,
                    hybrid: !1,
                    css3: !0,
                    scrollingSpeed: 700,
                    autoScrolling: !0,
                    fitToSection: !0,
                    fitToSectionDelay: 1e3,
                    easing: "easeInOutCubic",
                    easingcss3: "ease",
                    loopBottom: !1,
                    loopTop: !1,
                    loopHorizontal: !0,
                    continuousVertical: !1,
                    continuousHorizontal: !1,
                    scrollHorizontally: !1,
                    interlockedSlides: !1,
                    dragAndMove: !1,
                    offsetSections: !1,
                    resetSliders: !1,
                    fadingEffect: !1,
                    normalScrollElements: null,
                    scrollOverflow: !1,
                    scrollOverflowReset: !1,
                    scrollOverflowHandler: e.fp_scrolloverflow ? e.fp_scrolloverflow.iscrollHandler : null,
                    scrollOverflowOptions: null,
                    touchSensitivity: 5,
                    normalScrollElementTouchThreshold: 5,
                    bigSectionsDestination: null,
                    keyboardScrolling: !0,
                    animateAnchor: !0,
                    recordHistory: !0,
                    controlArrows: !0,
                    controlArrowColor: "#fff",
                    verticalCentered: !0,
                    sectionsColor: [],
                    paddingTop: 0,
                    paddingBottom: 0,
                    fixedElements: null,
                    responsive: 0,
                    responsiveWidth: 0,
                    responsiveHeight: 0,
                    responsiveSlides: !1,
                    parallax: !1,
                    parallaxOptions: {
                        type: "reveal",
                        percentage: 62,
                        property: "translate"
                    },
                    sectionSelector: v,
                    slideSelector: M,
                    v2compatible: !1,
                    afterLoad: null,
                    onLeave: null,
                    afterRender: null,
                    afterResize: null,
                    afterReBuild: null,
                    afterSlideLoad: null,
                    onSlideLeave: null,
                    afterResponsive: null,
                    lazyLoading: !0
                }, Z);
                var be, ke, Ie, ze, Be = !1,
                    Ne = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                    Pe = "ontouchstart" in e || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
                    je = _(Y)[0],
                    Ye = K(),
                    De = !1,
                    We = !0,
                    Ve = !0,
                    Xe = [],
                    Ze = {
                        m: {
                            up: !0,
                            down: !0,
                            left: !0,
                            right: !0
                        }
                    };
                Ze.k = Q({}, Ze.m);
                var Ge, Ue, Fe, _e, Qe, Je, Ke, qe, $e, et = Jn(),
                    tt = {
                        touchmove: "ontouchmove" in e ? "touchmove" : et.move,
                        touchstart: "ontouchstart" in e ? "touchstart" : et.down
                    },
                    nt = !1,
                    ot = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                    rt = Q({}, Z),
                    it = {};
                so(), e.fp_easings = Q(e.fp_easings, {
                    easeInOutCubic: function(e, t, n, o) {
                        return (e /= o / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
                    }
                }), _(Y).length && (ve.version = "3.0.0", ve.setAutoScrolling = St, ve.setRecordHistory = bt, ve.setScrollingSpeed = yt, ve.setFitToSection = wt, ve.setLockAnchors = function(e) {
                    Z.lockAnchors = e
                }, ve.setMouseWheelScrolling = Et, ve.setAllowScrolling = xt, ve.setKeyboardScrolling = Lt, ve.moveSectionUp = At, ve.moveSectionDown = Mt, ve.silentMoveTo = Tt, ve.moveTo = Ot, ve.moveSlideRight = kt, ve.moveSlideLeft = Ct, ve.fitToSection = Dt, ve.reBuild = Ht, ve.setResponsive = Rt, ve.getFullpageData = function() {
                    return {
                        options: Z,
                        internals: {
                            container: je,
                            canScroll: Ve,
                            isScrollAllowed: Ze,
                            getDestinationPosition: Jt,
                            isTouch: Pe,
                            c: pn,
                            getXmovement: Yn,
                            removeAnimation: Nn,
                            getTransforms: eo,
                            lazyLoad: rn,
                            addAnimation: Bn,
                            performHorizontalMove: Rn,
                            landscapeScroll: kn,
                            silentLandscapeScroll: qn,
                            keepSlidesPosition: Qt,
                            silentScroll: $n,
                            styleSlides: Nt,
                            scrollHandler: Yt,
                            getEventsPage: Kn,
                            getMSPointer: Jn,
                            isReallyTouch: Zt,
                            usingExtension: oo,
                            toggleControlArrows: Cn,
                            touchStartHandler: Gt,
                            touchMoveHandler: Xt
                        }
                    }
                }, ve.destroy = function(n) {
                    Le(je, "destroy", n), St(!1, "internal"), xt(!1), Lt(!1), ue(je, l), clearTimeout(_e), clearTimeout(Fe), clearTimeout(Ue), clearTimeout(Qe), clearTimeout(Je), e.removeEventListener("scroll", Yt), e.removeEventListener("hashchange", mn), e.removeEventListener("resize", In), t.removeEventListener("keydown", bn), t.removeEventListener("keyup", wn);
                    var o = [Mn, yn, Ln, Tn];
                    ["click", "touchstart"].forEach(function(e) {
                        o.forEach(function(n) {
                            t.removeEventListener(e, n)
                        })
                    }), ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function(e) {
                        t.removeEventListener(e, zt, !0)
                    }), oo("dragAndMove") && ve.dragAndMove.destroy(), clearTimeout(_e), clearTimeout(Fe), n && ($n(0), _("img[data-src], source[data-src], audio[data-src], iframe[data-src]", je).forEach(function(e) {
                        on(e, "src")
                    }), _("img[data-srcset]").forEach(function(e) {
                        on(e, "srcset")
                    }), Oe(_(E + ", " + P + ", " + D)), q(_(h), {
                        height: "",
                        "background-color": "",
                        padding: ""
                    }), q(_(O), {
                        width: ""
                    }), q(je, {
                        height: "",
                        position: "",
                        "-ms-touch-action": "",
                        "touch-action": ""
                    }), q(le, {
                        overflow: "",
                        height: ""
                    }), de(_("html"), a), de(ce, r), ce.className.split(/\s+/).forEach(function(e) {
                        0 === e.indexOf(s) && de(ce, e)
                    }), _(h + ", " + O).forEach(function(e) {
                        Z.scrollOverflowHandler && Z.scrollOverflowHandler.remove(e), de(e, z + " " + c + " " + d);
                        var t = e.getAttribute("data-fp-styles");
                        t && e.setAttribute("style", e.getAttribute("data-fp-styles"))
                    }), no(je), [S, I, H].forEach(function(e) {
                        _(e, je).forEach(function(e) {
                            e.outerHTML = e.innerHTML
                        })
                    }), _("html")[0].scrollTo(0, 0), _("body")[0].scrollTo(0, 0), [p, T, R].forEach(function(e) {
                        de(_("." + e), e)
                    }))
                }, ve.getActiveSection = function() {
                    return new vo(_(g)[0])
                }, ve.getActiveSlide = function() {
                    return en(_(k, _(g)[0])[0])
                }, ve.landscapeScroll = kn, ve.test = {
                    top: "0px",
                    translate3d: "translate3d(0px, 0px, 0px)",
                    translate3dH: function() {
                        for (var e = [], t = 0; t < _(Z.sectionSelector, je).length; t++) e.push("translate3d(0px, 0px, 0px)");
                        return e
                    }(),
                    left: function() {
                        for (var e = [], t = 0; t < _(Z.sectionSelector, je).length; t++) e.push(0);
                        return e
                    }(),
                    options: Z,
                    setAutoScrolling: St
                }, ve.shared = {
                    afterRenderActions: jt
                }, e.fullpage_api = ve, Bt("continuousHorizontal"), Bt("scrollHorizontally"), Bt("resetSliders"), Bt("interlockedSlides"), Bt("responsiveSlides"), Bt("fadingEffect"), Bt("dragAndMove"), Bt("offsetSections"), Bt("scrollOverflowReset"), Bt("parallax"), oo("dragAndMove") && ve.dragAndMove.init(), Z.css3 && (Z.css3 = function() {
                    var n, o = t.createElement("p"),
                        r = {
                            webkitTransform: "-webkit-transform",
                            OTransform: "-o-transform",
                            msTransform: "-ms-transform",
                            MozTransform: "-moz-transform",
                            transform: "transform"
                        };
                    for (var i in o.style.display = "block", t.body.insertBefore(o, null), r) void 0 !== o.style[i] && (o.style[i] = "translate3d(1px,1px,1px)", n = e.getComputedStyle(o).getPropertyValue(r[i]));
                    return t.body.removeChild(o), void 0 !== n && n.length > 0 && "none" !== n
                }()), Z.scrollBar = Z.scrollBar || Z.hybrid, function() {
                    if (!Z.anchors.length) {
                        var e = _(h + "[data-anchor]");
                        e.length && e.forEach(function(e) {
                            Z.anchors.push(e.getAttribute("data-anchor").toString())
                        })
                    }
                    if (!Z.navigationTooltips.length) {
                        var t = _("[data-tooltip]", je);
                        t.length && t.forEach(function(e) {
                            Z.navigationTooltips.push(e.getAttribute("data-tooltip").toString())
                        })
                    }
                }(), function() {
                    q(je, {
                        height: "100%",
                        position: "relative"
                    }), ue(je, n), ue(_("html"), a), Ye = K(), de(je, l), ue(_(Z.sectionSelector, je), p), ue(_(Z.slideSelector, je), T), ro("parallax", "init");
                    for (var e = _(h), r = 0; r < e.length; r++) {
                        var i = r,
                            s = e[r],
                            u = _(O, s),
                            d = u.length;
                        s.setAttribute("data-fp-styles", s.getAttribute("style")), m = s, (S = i) || null != _(g)[0] || ue(m, c), ze = _(g)[0], q(m, {
                            height: Pt(m) + "px"
                        }), Z.paddingTop && q(m, {
                            "padding-top": Z.paddingTop
                        }), Z.paddingBottom && q(m, {
                            "padding-bottom": Z.paddingBottom
                        }), void 0 !== Z.sectionsColor[S] && q(m, {
                            "background-color": Z.sectionsColor[S]
                        }), void 0 !== Z.anchors[S] && m.setAttribute("data-anchor", Z.anchors[S]), f = s, v = i, void 0 !== Z.anchors[v] && J(f, c) && Pn(Z.anchors[v], v), Z.menu && Z.css3 && null != ge(_(Z.menu)[0], o) && ce.appendChild(_(Z.menu)[0]), d > 0 ? Nt(s, u, d) : Z.verticalCentered && Dn(s)
                    }
                    var f, v, m, S;
                    Z.fixedElements && Z.css3 && _(Z.fixedElements).forEach(function(e) {
                        ce.appendChild(e)
                    }), Z.navigation && function() {
                        var e = t.createElement("div");
                        e.setAttribute("id", w);
                        var n = t.createElement("ul");
                        e.appendChild(n), fe(e, ce);
                        var o = _(E)[0];
                        ue(o, "fp-" + Z.navigationPosition), Z.showActiveTooltip && ue(o, A);
                        for (var r = "", i = 0; i < _(h).length; i++) {
                            var l = "";
                            Z.anchors.length && (l = Z.anchors[i]), r += '<li><a href="#' + l + '"><span></span></a>';
                            var a = Z.navigationTooltips[i];
                            void 0 !== a && "" !== a && (r += '<div class="' + x + " " + Z.navigationPosition + '">' + a + "</div>"), r += "</li>"
                        }
                        _("ul", o)[0].innerHTML = r, q(_(E), {
                            "margin-top": "-" + _(E)[0].offsetHeight / 2 + "px"
                        }), ue(_("a", _("li", _(E)[0])[ie(_(g)[0], h)]), c)
                    }(), _('iframe[src*="youtube.com/embed/"]', je).forEach(function(e) {
                        var t, n, o;
                        n = "enablejsapi=1", o = (t = e).getAttribute("src"), t.setAttribute("src", o + (/\?/.test(o) ? "&" : "?") + n)
                    }), Z.fadingEffect && ve.fadingEffect && ve.fadingEffect.apply(), Z.scrollOverflow ? Ge = Z.scrollOverflowHandler.init(Z) : jt()
                }(), xt(!0), St(Z.autoScrolling, "internal"), zn(), Qn(), "complete" === t.readyState && gn(), e.addEventListener("load", gn), e.addEventListener("scroll", Yt), e.addEventListener("hashchange", mn), e.addEventListener("blur", An), e.addEventListener("resize", In), t.addEventListener("keydown", bn), t.addEventListener("keyup", wn), ["click", "touchstart"].forEach(function(e) {
                    t.addEventListener(e, function(e) {
                        var t = e.target;
                        t && Ae(t, E + " a") ? Mn.call(t) : Ae(t, L) ? yn.call(t) : Ae(t, D) ? Ln.call(t, e) : (Ae(t, j) || null != ge(t, j)) && Tn.call(t, e)
                    })
                }), Z.normalScrollElements && (["mouseenter", "touchstart"].forEach(function(e) {
                    It(e, !1)
                }), ["mouseleave", "touchend"].forEach(function(e) {
                    It(e, !0)
                })), oo("dragAndMove") && ve.dragAndMove.turnOffTouch());
                var lt, at, st, ct = !1,
                    ut = 0,
                    dt = 0,
                    ft = 0,
                    vt = 0,
                    pt = (new Date).getTime(),
                    ht = 0,
                    gt = 0,
                    mt = Ye;
                return ve
            }

            function St(e, t) {
                e || $n(0), ao("autoScrolling", e, t);
                var n = _(g)[0];
                if (Z.autoScrolling && !Z.scrollBar) q(le, {
                    overflow: "hidden",
                    height: "100%"
                }), bt(rt.recordHistory, "internal"), q(je, {
                    "-ms-touch-action": "none",
                    "touch-action": "none"
                }), null != n && $n(n.offsetTop);
                else if (q(le, {
                        overflow: "visible",
                        height: "initial"
                    }), bt(!1, "internal"), q(je, {
                        "-ms-touch-action": "",
                        "touch-action": ""
                    }), no(je), null != n) {
                    var o = tn(n.offsetTop);
                    o.element.scrollTo(0, o.options)
                }
                Le(je, "setAutoScrolling", e)
            }

            function bt(e, t) {
                ao("recordHistory", e, t)
            }

            function yt(e, t) {
                "internal" !== t && Z.fadingEffect && ve.fadingEffect && ve.fadingEffect.update(e), ao("scrollingSpeed", e, t)
            }

            function wt(e, t) {
                ao("fitToSection", e, t)
            }

            function Et(n) {
                n ? (function() {
                    var n, o = "";
                    e.addEventListener ? n = "addEventListener" : (n = "attachEvent", o = "on");
                    var r = "onwheel" in t.createElement("div") ? "wheel" : void 0 !== t.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                    "DOMMouseScroll" == r ? t[n](o + "MozMousePixelScroll", Ft, !1) : t[n](o + r, Ft, !1)
                }(), je.addEventListener("mousedown", En), je.addEventListener("mouseup", xn)) : (t.addEventListener ? (t.removeEventListener("mousewheel", Ft, !1), t.removeEventListener("wheel", Ft, !1), t.removeEventListener("MozMousePixelScroll", Ft, !1)) : t.detachEvent("onmousewheel", Ft), je.removeEventListener("mousedown", En), je.removeEventListener("mouseup", xn))
            }

            function xt(e, t) {
                void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach(function(t) {
                    to(e, t, "m")
                }) : (to(e, "all", "m"), e ? (Et(!0), (Ne || Pe) && (Z.autoScrolling && (ce.removeEventListener(tt.touchmove, Vt, {
                    passive: !1
                }), ce.addEventListener(tt.touchmove, Vt, {
                    passive: !1
                })), _(o)[0].removeEventListener(tt.touchstart, Gt), _(o)[0].removeEventListener(tt.touchmove, Xt, {
                    passive: !1
                }), _(o)[0].addEventListener(tt.touchstart, Gt), _(o)[0].addEventListener(tt.touchmove, Xt, {
                    passive: !1
                }))) : (Et(!1), (Ne || Pe) && (Z.autoScrolling && (ce.removeEventListener(tt.touchmove, Xt, {
                    passive: !1
                }), ce.removeEventListener(tt.touchmove, Vt, {
                    passive: !1
                })), _(o)[0].removeEventListener(tt.touchstart, Gt), _(o)[0].removeEventListener(tt.touchmove, Xt, {
                    passive: !1
                })))), Le(je, "setAllowScrolling", {
                    value: e,
                    directions: t
                })
            }

            function Lt(e, t) {
                void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach(function(t) {
                    to(e, t, "k")
                }) : (to(e, "all", "k"), Z.keyboardScrolling = e)
            }

            function At() {
                var e = ee(_(g)[0], h);
                e || !Z.loopTop && !Z.continuousVertical || (e = re(_(h))), null != e && Kt(e, null, !0)
            }

            function Mt() {
                var e = te(_(g)[0], h);
                e || !Z.loopBottom && !Z.continuousVertical || (e = _(h)[0]), null != e && Kt(e, null, !1)
            }

            function Tt(e, t) {
                yt(0, "internal"), Ot(e, t), yt(rt.scrollingSpeed, "internal")
            }

            function Ot(e, t) {
                var n = Xn(e);
                void 0 !== t ? Zn(e, t) : null != n && Kt(n)
            }

            function kt(e) {
                _t("right", e)
            }

            function Ct(e) {
                _t("left", e)
            }

            function Ht(t) {
                if (!J(je, l)) {
                    De = !0, Ye = K();
                    for (var n = _(h), o = 0; o < n.length; ++o) {
                        var r = n[o],
                            i = _(H, r)[0],
                            a = _(O, r);
                        Z.verticalCentered && q(_(S, r), {
                            height: Wn(r) + "px"
                        }), q(r, {
                            height: Pt(r) + "px"
                        }), a.length > 1 && kn(i, _(k, i)[0])
                    }
                    Z.scrollOverflow && Ge.createScrollBarForAll();
                    var s = ie(_(g)[0], h);
                    s && !oo("fadingEffect") && Tt(s + 1), De = !1, xe(Z.afterResize) && t && Z.afterResize.call(je, e.innerWidth, e.innerHeight), xe(Z.afterReBuild) && !t && Z.afterReBuild.call(je), Le(je, "afterRebuild")
                }
            }

            function Rt(e) {
                var t = J(ce, r);
                e ? t || (St(!1, "internal"), wt(!1, "internal"), ae(_(E)), ue(ce, r), xe(Z.afterResponsive) && Z.afterResponsive.call(je, e), Z.responsiveSlides && ve.responsiveSlides && ve.responsiveSlides.toSections(), Le(je, "afterResponsive", e)) : t && (St(rt.autoScrolling, "internal"), wt(rt.autoScrolling, "internal"), se(_(E)), de(ce, r), xe(Z.afterResponsive) && Z.afterResponsive.call(je, e), Z.responsiveSlides && ve.responsiveSlides && ve.responsiveSlides.toSlides(), Le(je, "afterResponsive", e))
            }

            function It(e, n) {
                t["fp_" + e] = n, t.addEventListener(e, zt, !0)
            }

            function zt(e) {
                e.target != t && Z.normalScrollElements.split(",").forEach(function(n) {
                    Ae(e.target, n) && xt(t["fp_" + e.type])
                })
            }

            function Bt(t) {
                var n = "fp_" + t + "Extension";
                it[t] = Z[t + "Key"], ve[t] = void 0 !== e[n] ? new e[n] : null, ve[t] && ve[t].c(t)
            }

            function Nt(e, n, o) {
                var r = 100 * o,
                    i = 100 / o,
                    l = t.createElement("div");
                l.className = C, pe(n, l);
                var a, s, u = t.createElement("div");
                u.className = R, pe(n, u), q(_(I, e), {
                    width: r + "%"
                }), o > 1 && (Z.controlArrows && (a = e, s = [Te('<div class="' + V + '"></div>'), Te('<div class="' + G + '"></div>')], me(_(H, a)[0], s), "#fff" !== Z.controlArrowColor && (q(_(U, a), {
                    "border-color": "transparent transparent transparent " + Z.controlArrowColor
                }), q(_(X, a), {
                    "border-color": "transparent " + Z.controlArrowColor + " transparent transparent"
                })), Z.loopHorizontal || ae(_(X, a))), Z.slidesNavigation && function(e, t) {
                    fe(Te('<div class="' + N + '"><ul></ul></div>'), e);
                    var n = _(P, e)[0];
                    ue(n, "fp-" + Z.slidesNavPosition);
                    for (var o = 0; o < t; o++) fe(Te('<li><a href="#"><span></span></a></li>'), _("ul", n)[0]);
                    q(n, {
                        "margin-left": "-" + n.innerWidth / 2 + "px"
                    }), ue(_("a", _("li", n)[0]), c)
                }(e, o)), n.forEach(function(e) {
                    q(e, {
                        width: i + "%"
                    }), Z.verticalCentered && Dn(e)
                });
                var d = _(k, e)[0];
                null != d && (0 !== ie(_(g), h) || 0 === ie(_(g), h) && 0 !== ie(d)) ? (qn(d, "internal"), ue(d, B)) : ue(n[0], c)
            }

            function Pt(e) {
                return Z.offsetSections && ve.offsetSections ? Math.round(ve.offsetSections.getWindowHeight(e)) : K()
            }

            function jt() {
                var e, t = _(g)[0];
                ue(t, d), rn(t), ln(t), Z.scrollOverflow && Z.scrollOverflowHandler.afterLoad(), (!(e = Xn(Sn().section)) || void 0 !== e && ie(e) === ie(ze)) && xe(Z.afterLoad) && qt("afterLoad", {
                    activeSection: null,
                    element: t,
                    direction: null,
                    anchorLink: t.getAttribute("data-anchor"),
                    sectionIndex: ie(t, h)
                }), xe(Z.afterRender) && qt("afterRender"), Le(je, "afterRender")
            }

            function Yt() {
                var e;
                if (Le(je, "onScroll"), (!Z.autoScrolling || Z.scrollBar || oo("dragAndMove")) && !lo()) {
                    var t = oo("dragAndMove") ? Math.abs(ve.dragAndMove.getCurrentScroll()) : ye(),
                        n = 0,
                        o = t + K() / 2,
                        r = (oo("dragAndMove") ? ve.dragAndMove.getDocumentHeight() : ce.offsetHeight - K()) === t,
                        i = _(h);
                    if (r) n = i.length - 1;
                    else if (t)
                        for (var l = 0; l < i.length; ++l) i[l].offsetTop <= o && (n = l);
                    else n = 0;
                    if (!J(e = i[n], c)) {
                        ct = !0;
                        var a, s, u = _(g)[0],
                            d = ie(u, h) + 1,
                            f = jn(e),
                            v = e.getAttribute("data-anchor"),
                            p = ie(e, h) + 1,
                            m = _(k, e)[0],
                            S = {
                                activeSection: u,
                                sectionIndex: p - 1,
                                anchorLink: v,
                                element: e,
                                leavingSection: d,
                                direction: f
                            };
                        m && (s = m.getAttribute("data-anchor"), a = ie(m)), Ve && (ue(e, c), de(we(e), c), ro("parallax", "afterLoad"), xe(Z.onLeave) && qt("onLeave", S), xe(Z.afterLoad) && qt("afterLoad", S), Z.resetSliders && ve.resetSliders && ve.resetSliders.apply({
                            localIsResizing: De,
                            leavingSection: d
                        }), sn(u), rn(e), ln(e), Pn(v, p - 1), Z.anchors.length && (be = v), Un(a, s, v)), clearTimeout(Qe), Qe = setTimeout(function() {
                            ct = !1
                        }, 100)
                    }
                    Z.fitToSection && (clearTimeout(Je), Je = setTimeout(function() {
                        Z.fitToSection && _(g)[0].offsetHeight <= Ye && Dt()
                    }, Z.fitToSectionDelay))
                }
            }

            function Dt() {
                Ve && (De = !0, Kt(_(g)[0]), De = !1)
            }

            function Wt(e) {
                if (Ze.m[e]) {
                    var t = "down" === e ? Mt : At;
                    if (ve.scrollHorizontally && (t = ve.scrollHorizontally.getScrollSection(e, t)), Z.scrollOverflow) {
                        var n = Z.scrollOverflowHandler.scrollable(_(g)[0]),
                            o = "down" === e ? "bottom" : "top";
                        if (null != n) {
                            if (!Z.scrollOverflowHandler.isScrolled(o, n)) return !0;
                            t()
                        } else t()
                    } else t()
                }
            }

            function Vt(e) {
                Z.autoScrolling && Zt(e) && Ee(e)
            }

            function Xt(t) {
                var n = ge(t.target, h);
                if (Zt(t)) {
                    Z.autoScrolling && Ee(t);
                    var o = Kn(t);
                    ft = o.y, vt = o.x, _(H, n).length && Math.abs(dt - vt) > Math.abs(ut - ft) ? !Be && Math.abs(dt - vt) > e.innerWidth / 100 * Z.touchSensitivity && (dt > vt ? Ze.m.right && kt(n) : Ze.m.left && Ct(n)) : Z.autoScrolling && Ve && Math.abs(ut - ft) > e.innerHeight / 100 * Z.touchSensitivity && (ut > ft ? Wt("down") : ft > ut && Wt("up"))
                }
            }

            function Zt(e) {
                return void 0 === e.pointerType || "mouse" != e.pointerType
            }

            function Gt(e) {
                if (Z.fitToSection && ($e = !1), Zt(e)) {
                    var t = Kn(e);
                    ut = t.y, dt = t.x
                }
            }

            function Ut(e, t) {
                for (var n = 0, o = e.slice(Math.max(e.length - t, 1)), r = 0; r < o.length; r++) n += o[r];
                return Math.ceil(n / t)
            }

            function Ft(t) {
                var n = (new Date).getTime(),
                    o = J(_(f)[0], y);
                if (Z.autoScrolling && !Ie && !o) {
                    var r = (t = t || e.event).wheelDelta || -t.deltaY || -t.detail,
                        i = Math.max(-1, Math.min(1, r)),
                        l = void 0 !== t.wheelDeltaX || void 0 !== t.deltaX,
                        a = Math.abs(t.wheelDeltaX) < Math.abs(t.wheelDelta) || Math.abs(t.deltaX) < Math.abs(t.deltaY) || !l;
                    Xe.length > 149 && Xe.shift(), Xe.push(Math.abs(r)), Z.scrollBar && Ee(t);
                    var s = n - pt;
                    return pt = n, s > 200 && (Xe = []), Ve && !io() && Ut(Xe, 10) >= Ut(Xe, 70) && a && Wt(i < 0 ? "down" : "up"), !1
                }
                Z.fitToSection && ($e = !1)
            }

            function _t(e, t) {
                var n = null == t ? _(g)[0] : t,
                    o = _(H, n)[0];
                if (!(null == o || io() || Be || _(O, o).length < 2)) {
                    var r = _(k, o)[0],
                        i = null;
                    if (null == (i = "left" === e ? ee(r, O) : te(r, O))) {
                        if (!Z.loopHorizontal) return;
                        var l = we(r);
                        i = "left" === e ? l[l.length - 1] : l[0]
                    }
                    Be = !ve.test.isTesting, kn(o, i, e)
                }
            }

            function Qt() {
                for (var e = _(k), t = 0; t < e.length; t++) qn(e[t], "internal")
            }

            function Jt(e) {
                var t = e.offsetHeight,
                    n = e.offsetTop,
                    o = n,
                    r = oo("dragAndMove") && ve.dragAndMove.isGrabbing ? ve.dragAndMove.isScrollingDown() : n > ht,
                    i = o - Ye + t,
                    l = Z.bigSectionsDestination;
                return t > Ye ? (r || l) && "bottom" !== l || (o = i) : (r || De && null == oe(e)) && (o = i), Z.offsetSections && ve.offsetSections && (o = ve.offsetSections.getSectionPosition(r, o, e)), ht = o, o
            }

            function Kt(e, t, n) {
                if (null != e) {
                    var r, i, l = {
                        element: e,
                        callback: t,
                        isMovementUp: n,
                        dtop: Jt(e),
                        yMovement: jn(e),
                        anchorLink: e.getAttribute("data-anchor"),
                        sectionIndex: ie(e, h),
                        activeSlide: _(k, e)[0],
                        activeSection: _(g)[0],
                        leavingSection: ie(_(g), h) + 1,
                        localIsResizing: De
                    };
                    if (!(l.activeSection == e && !De || Z.scrollBar && ye() === l.dtop && !J(e, b))) {
                        if (null != l.activeSlide && (r = l.activeSlide.getAttribute("data-anchor"), i = ie(l.activeSlide)), xe(Z.onLeave) && !l.localIsResizing) {
                            var a = l.yMovement;
                            if (void 0 !== n && (a = n ? "up" : "down"), l.direction = a, !1 === qt("onLeave", l)) return
                        }
                        ro("parallax", "apply", l), Z.autoScrolling && Z.continuousVertical && void 0 !== l.isMovementUp && (!l.isMovementUp && "up" == l.yMovement || l.isMovementUp && "down" == l.yMovement) && ((u = l).isMovementUp ? Se(_(g)[0], Ce(u.activeSection, h)) : me(_(g)[0], He(u.activeSection, h).reverse()), $n(_(g)[0].offsetTop), Qt(), u.wrapAroundElements = u.activeSection, u.dtop = u.element.offsetTop, u.yMovement = jn(u.element), u.leavingSection = ie(u.activeSection, h) + 1, u.sectionIndex = ie(u.element, h), Le(_(o)[0], "onContinuousVertical", u), l = u), oo("scrollOverflowReset") && ve.scrollOverflowReset.setPrevious(l.activeSection), l.localIsResizing || sn(l.activeSection), Z.scrollOverflow && Z.scrollOverflowHandler.beforeLeave(), ue(e, c), de(we(e), c), rn(e), Z.scrollOverflow && Z.scrollOverflowHandler.onLeave(), Ve = ve.test.isTesting, Un(i, r, l.anchorLink, l.sectionIndex),
                            function(e) {
                                if (Z.css3 && Z.autoScrolling && !Z.scrollBar) {
                                    var t = "translate3d(0px, -" + Math.round(e.dtop) + "px, 0px)";
                                    Vn(t, !0), Z.scrollingSpeed ? (clearTimeout(Fe), Fe = setTimeout(function() {
                                        nn(e)
                                    }, Z.scrollingSpeed)) : nn(e)
                                } else {
                                    var n = tn(e.dtop);
                                    ve.test.top = -e.dtop + "px", co(n.element, n.options, Z.scrollingSpeed, function() {
                                        Z.scrollBar ? setTimeout(function() {
                                            nn(e)
                                        }, 30) : nn(e)
                                    })
                                }
                            }(l), be = l.anchorLink, Pn(l.anchorLink, null != (s = l).wrapAroundElements ? s.isMovementUp ? _(h).length - 1 : 0 : s.sectionIndex)
                    }
                }
                var s, u
            }

            function qt(e, t) {
                var n, o, r, i, l = (o = e, r = t, (i = Z.v2compatible ? {
                    afterRender: function() {
                        return [je]
                    },
                    onLeave: function() {
                        return [r.activeSection, r.leavingSection, r.sectionIndex + 1, r.direction]
                    },
                    afterLoad: function() {
                        return [r.element, r.anchorLink, r.sectionIndex + 1]
                    },
                    afterSlideLoad: function() {
                        return [r.destiny, r.anchorLink, r.sectionIndex + 1, r.slideAnchor, r.slideIndex]
                    },
                    onSlideLeave: function() {
                        return [r.prevSlide, r.anchorLink, r.sectionIndex + 1, r.prevSlideIndex, r.direction, r.slideIndex]
                    }
                } : {
                    afterRender: function() {
                        return {
                            section: $t(_(g)[0]),
                            slide: en(_(k, _(g)[0])[0])
                        }
                    },
                    onLeave: function() {
                        return {
                            origin: $t(r.activeSection),
                            destination: $t(r.element),
                            direction: r.direction
                        }
                    },
                    afterLoad: function() {
                        return i.onLeave()
                    },
                    afterSlideLoad: function() {
                        return {
                            section: $t(r.section),
                            origin: en(r.prevSlide),
                            destination: en(r.destiny),
                            direction: r.direction
                        }
                    },
                    onSlideLeave: function() {
                        return i.afterSlideLoad()
                    }
                })[o]());
                if (Z.v2compatible) {
                    if (!1 === Z[e].apply(l[0], l.slice(1))) return !1
                } else if (Le(je, e, l), !1 === Z[e].apply(l[Object.keys(l)[0]], (n = l, Object.keys(n).map(function(e) {
                        return n[e]
                    })))) return !1;
                return !0
            }

            function $t(e) {
                return e ? new vo(e) : null
            }

            function en(e) {
                return e ? new function(e) {
                    fo.call(this, e, O)
                }(e) : null
            }

            function tn(t) {
                var n = {};
                return Z.autoScrolling && !Z.scrollBar ? (n.options = -t, n.element = _(o)[0]) : (n.options = t, n.element = e), n
            }

            function nn(e) {
                var t;
                null != (t = e).wrapAroundElements && (t.isMovementUp ? Se(_(h)[0], t.wrapAroundElements) : me(_(h)[_(h).length - 1], t.wrapAroundElements), $n(_(g)[0].offsetTop), Qt(), t.sectionIndex = ie(t.element, h), t.leavingSection = ie(t.activeSection, h) + 1), xe(Z.afterLoad) && !e.localIsResizing && qt("afterLoad", e), Z.scrollOverflow && Z.scrollOverflowHandler.afterLoad(), ro("parallax", "afterLoad"), oo("scrollOverflowReset") && ve.scrollOverflowReset.reset(), oo("resetSliders") && ve.resetSliders.apply(e), e.localIsResizing || ln(e.element), ue(e.element, d), de(we(e.element), d), Ve = !0, xe(e.callback) && e.callback()
            }

            function on(e, t) {
                e.setAttribute(t, e.getAttribute("data-" + t)), e.removeAttribute("data-" + t)
            }

            function rn(e) {
                Z.lazyLoading && _("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", cn(e)).forEach(function(e) {
                    if (["src", "srcset"].forEach(function(t) {
                            var n = e.getAttribute("data-" + t);
                            null != n && n && on(e, t)
                        }), Ae(e, "source")) {
                        var t = null != ge(e, "video") ? "video" : "audio";
                        ge(e, t).load()
                    }
                })
            }

            function ln(e) {
                var t = cn(e);
                _("video, audio", t).forEach(function(e) {
                    e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play()
                }), _('iframe[src*="youtube.com/embed/"]', t).forEach(function(e) {
                    e.hasAttribute("data-autoplay") && an(e), e.onload = function() {
                        e.hasAttribute("data-autoplay") && an(e)
                    }
                })
            }

            function an(e) {
                e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
            }

            function sn(e) {
                var t = cn(e);
                _("video, audio", t).forEach(function(e) {
                    e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause()
                }), _('iframe[src*="youtube.com/embed/"]', t).forEach(function(e) {
                    /youtube\.com\/embed\//.test(e.getAttribute("src")) && !e.hasAttribute("data-keepplaying") && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                })
            }

            function cn(e) {
                var t = _(k, e);
                return t.length && (e = t[0]), e
            }

            function un(e) {
                var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

                function n(e) {
                    var n, o, r, i, l, a, s = "",
                        c = 0;
                    for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); c < e.length;) n = t.indexOf(e.charAt(c++)) << 2 | (i = t.indexOf(e.charAt(c++))) >> 4, o = (15 & i) << 4 | (l = t.indexOf(e.charAt(c++))) >> 2, r = (3 & l) << 6 | (a = t.indexOf(e.charAt(c++))), s += String.fromCharCode(n), 64 != l && (s += String.fromCharCode(o)), 64 != a && (s += String.fromCharCode(r));
                    return s = function(e) {
                        for (var t, n = "", o = 0, r = 0, i = 0; o < e.length;)(r = e.charCodeAt(o)) < 128 ? (n += String.fromCharCode(r), o++) : r > 191 && r < 224 ? (i = e.charCodeAt(o + 1), n += String.fromCharCode((31 & r) << 6 | 63 & i), o += 2) : (i = e.charCodeAt(o + 1), t = e.charCodeAt(o + 2), n += String.fromCharCode((15 & r) << 12 | (63 & i) << 6 | 63 & t), o += 3);
                        return n
                    }(s)
                }

                function o(e) {
                    return e.slice(3).slice(0, -3)
                }
                return function(e) {
                    var t = e.split("_");
                    if (t.length > 1) {
                        var r = t[1];
                        return e.replace(o(t[1]), "").split("_")[0] + "_" + n(r.slice(3).slice(0, -3))
                    }
                    return o(e)
                }(n(e))
            }

            function dn(e) {
                var n = function() {
                        if (t.domain.length) {
                            for (var e = t.domain.replace(/^(www\.)/, "").split("."); e.length > 2;) e.shift();
                            return e.join(".").replace(/(^\.*)|(\.*$)/g, "")
                        }
                        return ""
                    }(),
                    o = ["MTM0bG9jYWxob3N0MjM0", "MTM0MC4xMjM0", "MTM0anNoZWxsLm5ldDIzNA==", "UDdDQU5ZNlNN"],
                    r = un(o[0]),
                    i = un(o[1]),
                    l = un(o[2]),
                    a = un(o[3]),
                    s = [r, i, l].indexOf(n) < 0 && 0 !== n.length,
                    c = void 0 !== it[e] && it[e].length;
                if (!c && s) return !1;
                var u = c ? un(it[e]) : "",
                    d = (u = u.split("_")).length > 1 && u[1].indexOf(e, u[1].length - e.length) > -1;
                return !(u[0].indexOf(n, u[0].length - n.length) < 0 && s && a != u[0]) && d || !s
            }

            function fn(e) {
                e.forEach(function(e) {
                    e.removedNodes[0] && e.removedNodes[0].isEqualNode(at) && (clearTimeout(st), st = setTimeout(vn, 900))
                })
            }

            function vn() {
                nt = !1
            }

            function pn(n) {
                at = t.createElement("div"), lt = un("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="), at.innerHTML = lt, at = at.firstChild, "MutationObserver" in e && new MutationObserver(fn).observe(t.body, {
                    childList: !0,
                    subtree: !1
                }), oo(n) && ve[n] && (dn(n) || (hn(), setInterval(hn, 2e3)))
            }

            function hn() {
                at && (nt || (Math.random() < .5 ? Re(ce, at) : fe(at, ce), nt = !0), at.setAttribute("style", un("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g, un("MTIzICFpbXBvcnRhbnQ7MzQ1"))))
            }

            function gn() {
                var e = Sn(),
                    t = e.section,
                    n = e.slide;
                t && (Z.animateAnchor ? Zn(t, n) : Tt(t, n))
            }

            function mn() {
                if (!ct && !Z.lockAnchors) {
                    var e = Sn(),
                        t = e.section,
                        n = e.slide,
                        o = void 0 === be,
                        r = void 0 === be && void 0 === n && !Be;
                    t && t.length && (t && t !== be && !o || r || !Be && ke != n) && Zn(t, n)
                }
            }

            function Sn() {
                var t, n, o = e.location.hash;
                if (o.length) {
                    var r = o.replace("#", "").split("/"),
                        i = o.indexOf("#/") > -1;
                    t = i ? "/" + r[1] : decodeURIComponent(r[0]);
                    var l = i ? r[2] : r[1];
                    l && l.length && (n = decodeURIComponent(l))
                }
                return {
                    section: t,
                    slide: n
                }
            }

            function bn(e) {
                clearTimeout(Ke);
                var n = t.activeElement,
                    o = e.keyCode;
                9 === o ? function(e) {
                    var n = e.shiftKey,
                        o = t.activeElement,
                        r = _(g)[0],
                        i = _(k, r)[0],
                        l = _(ot + ':not([tabindex="-1"])', i || r);

                    function a(e) {
                        return Ee(e), l[0].focus()
                    }
                    o.length ? null == ge(o, g + "," + k) && (o = a(e)) : a(e), (!n && o == l[l.length - 1] || n && o == l[0]) && Ee(e)
                }(e) : Ae(n, "textarea") || Ae(n, "input") || Ae(n, "select") || "true" === n.getAttribute("contentEditable") || "" === n.getAttribute("contentEditable") || !Z.keyboardScrolling || !Z.autoScrolling || ([40, 38, 32, 33, 34].indexOf(o) > -1 && Ee(e), Ie = e.ctrlKey, Ke = setTimeout(function() {
                    ! function(e) {
                        var t = e.shiftKey;
                        if (Ve || !([37, 39].indexOf(e.keyCode) < 0)) switch (e.keyCode) {
                            case 38:
                            case 33:
                                Ze.k.up && At();
                                break;
                            case 32:
                                if (t && Ze.k.up) {
                                    At();
                                    break
                                }
                            case 40:
                            case 34:
                                Ze.k.down && Mt();
                                break;
                            case 36:
                                Ze.k.up && Ot(1);
                                break;
                            case 35:
                                Ze.k.down && Ot(_(h).length);
                                break;
                            case 37:
                                Ze.k.left && Ct();
                                break;
                            case 39:
                                Ze.k.right && kt()
                        }
                    }(e)
                }, 150))
            }

            function yn() {
                Le(ne(this), "click")
            }

            function wn(e) {
                We && (Ie = e.ctrlKey)
            }

            function En(e) {
                2 == e.which && (gt = e.pageY, je.addEventListener("mousemove", On))
            }

            function xn(e) {
                2 == e.which && je.removeEventListener("mousemove", On)
            }

            function Ln() {
                var e = ge(this, h);
                J(this, W) ? Ze.m.left && Ct(e) : Ze.m.right && kt(e)
            }

            function An() {
                We = !1, Ie = !1
            }

            function Mn(e) {
                Ee(e);
                var t = t(this.parentNode);
                Kt(_(h)[t])
            }

            function Tn(e) {
                Ee(e);
                var t = _(H, ge(this, h))[0];
                kn(t, _(O, t)[ie(ge(this, "li"))])
            }

            function On(e) {
                Ve && (e.pageY < gt && Ze.m.up ? At() : e.pageY > gt && Ze.m.down && Mt()), gt = e.pageY
            }

            function kn(e, t, n) {
                var o = ge(e, h),
                    r = {
                        slides: e,
                        destiny: t,
                        direction: n,
                        destinyPos: {
                            left: t.offsetLeft
                        },
                        slideIndex: ie(t),
                        section: o,
                        sectionIndex: ie(o, h),
                        anchorLink: o.getAttribute("data-anchor"),
                        slidesNav: _(P, o)[0],
                        slideAnchor: _n(t),
                        prevSlide: _(k, o)[0],
                        prevSlideIndex: ie(_(k, o)[0]),
                        localIsResizing: De
                    };
                r.xMovement = Yn(r.prevSlideIndex, r.slideIndex), r.localIsResizing || (Ve = !1), ro("parallax", "applyHorizontal", r), Z.onSlideLeave && !r.localIsResizing && "none" !== r.xMovement && xe(Z.onSlideLeave) && !1 === qt("onSlideLeave", r) ? Be = !1 : (ue(t, c), de(we(t), c), r.localIsResizing || (sn(r.prevSlide), rn(t)), Cn(r), J(o, c) && !r.localIsResizing && Un(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex), ve.continuousHorizontal && ve.continuousHorizontal.apply(r), lo() ? Hn(r) : Rn(e, r, !0), Z.interlockedSlides && ve.interlockedSlides && (oo("continuousHorizontal") && void 0 !== n && n !== r.xMovement || ve.interlockedSlides.apply(r)))
            }

            function Cn(e) {
                !Z.loopHorizontal && Z.controlArrows && (Me(_(X, e.section), 0 !== e.slideIndex), Me(_(U, e.section), null != oe(e.destiny)))
            }

            function Hn(e) {
                var t, n;
                ve.continuousHorizontal && ve.continuousHorizontal.afterSlideLoads(e), t = e.slidesNav, n = e.slideIndex, Z.slidesNavigation && null != t && (de(_(u, t), c), ue(_("a", _("li", t)[n]), c)), e.localIsResizing || (ro("parallax", "afterSlideLoads"), xe(Z.afterSlideLoad) && qt("afterSlideLoad", e), Ve = !0, ln(e.destiny)), Be = !1, oo("interlockedSlides") && ve.interlockedSlides.apply(e)
            }

            function Rn(e, t, n) {
                var o = t.destinyPos;
                if (Z.css3) {
                    var r = "translate3d(-" + Math.round(o.left) + "px, 0px, 0px)";
                    ve.test.translate3dH[t.sectionIndex] = r, q(Bn(_(I, e)), eo(r)), _e = setTimeout(function() {
                        n && Hn(t)
                    }, Z.scrollingSpeed)
                } else ve.test.left[t.sectionIndex] = Math.round(o.left), co(e, Math.round(o.left), Z.scrollingSpeed, function() {
                    n && Hn(t)
                })
            }

            function In() {
                if (Le(je, "onResize"), zn(), Ne) {
                    var e = t.activeElement;
                    if (!Ae(e, "textarea") && !Ae(e, "input") && !Ae(e, "select")) {
                        var n = K();
                        Math.abs(n - mt) > 20 * Math.max(mt, n) / 100 && (Ht(!0), mt = n)
                    }
                } else clearTimeout(Ue), Ue = setTimeout(function() {
                    Ht(!0)
                }, 350)
            }

            function zn() {
                var t = Z.responsive || Z.responsiveWidth,
                    n = Z.responsiveHeight,
                    o = t && e.innerWidth < t,
                    r = n && e.innerHeight < n;
                t && n ? Rt(o || r) : t ? Rt(o) : n && Rt(r)
            }

            function Bn(e) {
                var t = "all " + Z.scrollingSpeed + "ms " + Z.easingcss3;
                return de(e, i), q(e, {
                    "-webkit-transition": t,
                    transition: t
                })
            }

            function Nn(e) {
                return ue(e, i)
            }

            function Pn(e, t) {
                var n, o, r, i;
                n = e, o = _(Z.menu)[0], Z.menu && null != o && (de(_(u, o), c), ue(_('[data-menuanchor="' + n + '"]', o), c)), r = e, i = t, Z.navigation && null != _(E)[0] && (de(_(u, _(E)[0]), c), ue(r ? _('a[href="#' + r + '"]', _(E)[0]) : _("a", _("li", _(E)[0])[i]), c))
            }

            function jn(e) {
                var t = ie(_(g)[0], h),
                    n = ie(e, h);
                return t == n ? "none" : t > n ? "up" : "down"
            }

            function Yn(e, t) {
                return e == t ? "none" : e > t ? "left" : "right"
            }

            function Dn(e) {
                if (!J(e, z)) {
                    var n = t.createElement("div");
                    n.className = m, n.style.height = Wn(e) + "px", ue(e, z), he(e, n)
                }
            }

            function Wn(e) {
                var t = Pt(e);
                if (Z.paddingTop || Z.paddingBottom) {
                    var n = e;
                    J(n, p) || (n = ge(e, h)), t -= parseInt(getComputedStyle(n)["padding-top"]) + parseInt(getComputedStyle(n)["padding-bottom"])
                }
                return t
            }

            function Vn(e, t) {
                t ? Bn(je) : Nn(je), clearTimeout(qe), q(je, eo(e)), ve.test.translate3d = e, qe = setTimeout(function() {
                    de(je, i)
                }, 10)
            }

            function Xn(e) {
                var t = _(h + '[data-anchor="' + e + '"]', je)[0];
                if (!t) {
                    var n = void 0 !== e ? e - 1 : 0;
                    t = _(h)[n]
                }
                return t
            }

            function Zn(e, t) {
                var n = Xn(e);
                if (null != n) {
                    var o, r, i, l = (null == (i = _(O + '[data-anchor="' + (o = t) + '"]', r = n)[0]) && (o = void 0 !== o ? o : 0, i = _(O, r)[o]), i);
                    e === be || J(n, c) ? Gn(l) : Kt(n, function() {
                        Gn(l)
                    })
                }
            }

            function Gn(e) {
                null != e && kn(ge(e, H), e)
            }

            function Un(e, t, n, o) {
                var r = "";
                Z.anchors.length && !Z.lockAnchors && (e ? (null != n && (r = n), null == t && (t = e), ke = t, Fn(r + "/" + t)) : null != e ? (ke = t, Fn(n)) : Fn(n)), Qn()
            }

            function Fn(t) {
                if (Z.recordHistory) location.hash = t;
                else if (Ne || Pe) e.history.replaceState(void 0, void 0, "#" + t);
                else {
                    var n = e.location.href.split("#")[0];
                    e.location.replace(n + "#" + t)
                }
            }

            function _n(e) {
                if (!e) return null;
                var t = e.getAttribute("data-anchor"),
                    n = ie(e);
                return null == t && (t = n), t
            }

            function Qn() {
                var e = _(g)[0],
                    t = _(k, e)[0],
                    n = _n(e),
                    o = _n(t),
                    r = String(n);
                t && (r = r + "-" + o), r = r.replace("/", "-").replace("#", "");
                var i = new RegExp("\\b\\s?" + s + "-[^\\s]+\\b", "g");
                ce.className = ce.className.replace(i, ""), ue(ce, s + "-" + r)
            }

            function Jn() {
                return e.PointerEvent ? {
                    down: "pointerdown",
                    move: "pointermove"
                } : {
                    down: "MSPointerDown",
                    move: "MSPointerMove"
                }
            }

            function Kn(e) {
                var t = [];
                return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, Pe && Zt(e) && Z.scrollBar && void 0 !== e.touches && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
            }

            function qn(e, t) {
                yt(0, "internal"), void 0 !== t && (De = !0), kn(ge(e, H), e), void 0 !== t && (De = !1), yt(rt.scrollingSpeed, "internal")
            }

            function $n(e) {
                var t = Math.round(e);
                if (Z.css3 && Z.autoScrolling && !Z.scrollBar) Vn("translate3d(0px, -" + t + "px, 0px)", !1);
                else if (Z.autoScrolling && !Z.scrollBar) q(je, {
                    top: -t + "px"
                }), ve.test.top = -t + "px";
                else {
                    var n = tn(t);
                    uo(n.element, n.options)
                }
            }

            function eo(e) {
                return {
                    "-webkit-transform": e,
                    "-moz-transform": e,
                    "-ms-transform": e,
                    transform: e
                }
            }

            function to(e, t, n) {
                "all" !== t ? Ze[n][t] = e : Object.keys(Ze[n]).forEach(function(t) {
                    Ze[n][t] = e
                })
            }

            function no(e) {
                return q(e, {
                    "-webkit-transition": "none",
                    transition: "none"
                })
            }

            function oo(e) {
                return null !== Z[e] && "object" == typeof Z[e] ? Z[e].enabled && ve[e] : Z[e] && ve[e]
            }

            function ro(e, t, n) {
                if (oo(e)) return ve[e][t](n)
            }

            function io() {
                return oo("dragAndMove") && ve.dragAndMove.isAnimating
            }

            function lo() {
                return oo("dragAndMove") && ve.dragAndMove.isGrabbing
            }

            function ao(e, t, n) {
                Z[e] = t, "internal" !== n && (rt[e] = t)
            }

            function so() {
                if (!$) return F("error", "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"), void F("error", "https://github.com/alvarotrigo/fullPage.js#options.");
                J(_("html"), a) ? F("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (Z.continuousVertical && (Z.loopTop || Z.loopBottom) && (Z.continuousVertical = !1, F("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), Z.scrollBar && Z.scrollOverflow && F("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !Z.continuousVertical || !Z.scrollBar && Z.autoScrolling || (Z.continuousVertical = !1, F("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), Z.scrollOverflow && null == Z.scrollOverflowHandler && (Z.scrollOverflow = !1, F("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), Z.anchors.forEach(function(e) {
                    var t = [].slice.call(_("[name]")).filter(function(t) {
                            return t.getAttribute("name") && t.getAttribute("name").toLowerCase() == e.toLowerCase()
                        }),
                        n = [].slice.call(_("[id]")).filter(function(t) {
                            return t.getAttribute("id") && t.getAttribute("id").toLowerCase() == e.toLowerCase()
                        });
                    (n.length || t.length) && (F("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), n.length && F("error", '"' + e + '" is is being used by another element `id` property'), t.length && F("error", '"' + e + '" is is being used by another element `name` property'))
                }))
            }

            function co(t, n, o, r) {
                var i, l = (i = t).self != e && J(i, C) ? i.scrollLeft : !Z.autoScrolling || Z.scrollBar ? ye() : i.offsetTop,
                    a = n - l,
                    s = 0;
                $e = !0;
                var c = function() {
                    if ($e) {
                        var i = n;
                        s += 20, o && (i = e.fp_easings[Z.easing](s, l, a, o)), uo(t, i), s < o ? setTimeout(c, 20) : void 0 !== r && r()
                    } else s < o && r()
                };
                c()
            }

            function uo(t, n) {
                !Z.autoScrolling || Z.scrollBar || t.self != e && J(t, C) ? t.self != e && J(t, C) ? t.scrollLeft = n : t.scrollTo(0, n) : t.style.top = n + "px"
            }

            function fo(e, t) {
                this.anchor = e.getAttribute("data-anchor"), this.item = e, this.index = ie(e, t), this.isLast = this.index === _(t).length - 1, this.isFirst = !this.index
            }

            function vo(e) {
                fo.call(this, e, h)
            }
            so()
        }
}), window.jQuery && function(e, t) {
    "use strict";
    e && t ? e.fn.fullpage = function(n) {
        var o = new t("#" + e(this).attr("id"), n);
        Object.keys(o).forEach(function(t) {
            e.fn.fullpage[t] = o[t]
        })
    } : window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!")
}(jQuery, fullpage);