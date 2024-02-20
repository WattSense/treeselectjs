var ui = Object.defineProperty;
var pi = (l, e, t) => e in l ? ui(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t;
var r = (l, e, t) => (pi(l, typeof e != "symbol" ? e + "" : e, t), t), wt = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
};
var n = (l, e, t) => (wt(l, e, "read from private field"), t ? t.call(l) : e.get(l)), c = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, f = (l, e, t, s) => (wt(l, e, "write to private field"), s ? s.call(l, t) : e.set(l, t), t);
var o = (l, e, t) => (wt(l, e, "access private method"), t);
const Vt = {
  arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>',
  arrowDown: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
  attention: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
  clear: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
  cross: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
  partialCheck: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>'
}, P = (l, e) => {
  if (e.innerHTML = "", typeof l == "string")
    e.innerHTML = l;
  else {
    const t = l.cloneNode(!0);
    e.appendChild(t);
  }
}, Dt = (l) => {
  const e = l ? { ...l } : {};
  return Object.keys(Vt).forEach((t) => {
    e[t] || (e[t] = Vt[t]);
  }), e;
}, mi = (l) => l.reduce((e, { name: t }, s) => (e += t, s < l.length - 1 && (e += ", "), e), "");
var _, k, H, E, pe, Mt, G, U, me, Ft, fe, qt, M, Y, T, D, Ce, zt, be, jt, ge, Rt, ke, $t, we, Wt, ve, Ut, Ee, Yt, Le, Kt, ye, Xt, Se, Jt, xe, Zt, _e, Qt, Ae, es, Oe, ts, Ne, ss, Te, is, K, vt;
class fi {
  constructor({
    value: e,
    showTags: t,
    tagsCountText: s,
    clearable: i,
    isAlwaysOpened: a,
    searchable: h,
    placeholder: d,
    disabled: C,
    isSingleSelect: m,
    id: b,
    ariaLabel: g,
    iconElements: w,
    showPlaceholderOnOpen: v,
    inputCallback: S,
    searchCallback: x,
    openCallback: V,
    closeCallback: q,
    keydownCallback: W,
    focusCallback: gt,
    blurCallback: re,
    nameChangeCallback: kt
  }) {
    // Private methods
    c(this, pe);
    c(this, G);
    c(this, me);
    c(this, fe);
    c(this, M);
    c(this, T);
    c(this, Ce);
    c(this, be);
    c(this, ge);
    c(this, ke);
    c(this, we);
    c(this, ve);
    c(this, Ee);
    c(this, Le);
    c(this, ye);
    c(this, Se);
    c(this, xe);
    c(this, _e);
    c(this, Ae);
    c(this, Oe);
    c(this, Ne);
    c(this, Te);
    // Emits
    c(this, K);
    // Props
    r(this, "value");
    r(this, "showTags");
    r(this, "tagsCountText");
    r(this, "clearable");
    r(this, "isAlwaysOpened");
    r(this, "searchable");
    r(this, "placeholder");
    r(this, "disabled");
    r(this, "isSingleSelect");
    r(this, "id");
    r(this, "ariaLabel");
    r(this, "iconElements");
    r(this, "showPlaceholderOnOpen");
    // InnerState
    r(this, "isOpened");
    r(this, "searchText");
    r(this, "srcElement");
    // PrivateInnerState
    c(this, _, void 0);
    c(this, k, void 0);
    c(this, H, void 0);
    c(this, E, void 0);
    // Callbacks
    r(this, "inputCallback");
    r(this, "searchCallback");
    r(this, "openCallback");
    r(this, "closeCallback");
    r(this, "keydownCallback");
    r(this, "focusCallback");
    r(this, "blurCallback");
    r(this, "nameChangeCallback");
    this.value = e, this.showTags = t, this.tagsCountText = s, this.searchable = h, this.placeholder = d, this.clearable = i, this.isAlwaysOpened = a, this.disabled = C, this.isSingleSelect = m, this.id = b, this.ariaLabel = g, this.iconElements = w, this.showPlaceholderOnOpen = v ?? !1, this.isOpened = !1, this.searchText = "", f(this, _, o(this, ge, Rt).call(this)), f(this, k, o(this, ye, Xt).call(this)), f(this, H, o(this, _e, Qt).call(this)), f(this, E, null), this.inputCallback = S, this.searchCallback = x, this.openCallback = V, this.closeCallback = q, this.keydownCallback = W, this.focusCallback = gt, this.blurCallback = re, this.nameChangeCallback = kt, this.srcElement = o(this, Ce, zt).call(this, n(this, _), n(this, k), n(this, H)), o(this, pe, Mt).call(this);
  }
  // Public methods
  focus() {
    setTimeout(() => n(this, k).focus(), 0);
  }
  blur() {
    this.isOpened && o(this, T, D).call(this), this.clearSearch(), n(this, k).blur();
  }
  updateValue(e) {
    this.value = e, o(this, G, U).call(this), o(this, M, Y).call(this);
  }
  removeItem(e) {
    this.value = this.value.filter((t) => t.id !== e), o(this, K, vt).call(this), o(this, G, U).call(this), o(this, M, Y).call(this);
  }
  clear() {
    this.value = [], o(this, K, vt).call(this), o(this, G, U).call(this), this.clearSearch();
  }
  openClose() {
    o(this, T, D).call(this);
  }
  clearSearch() {
    this.searchText = "", this.searchCallback(""), o(this, M, Y).call(this);
  }
}
_ = new WeakMap(), k = new WeakMap(), H = new WeakMap(), E = new WeakMap(), pe = new WeakSet(), Mt = function() {
  o(this, G, U).call(this), o(this, M, Y).call(this), o(this, me, Ft).call(this);
}, G = new WeakSet(), U = function() {
  if (n(this, _).innerHTML = "", this.showTags) {
    n(this, _).append(...o(this, ke, $t).call(this));
    const e = mi(this.value);
    this.nameChangeCallback(e);
  } else {
    const e = o(this, Le, Kt).call(this);
    n(this, _).appendChild(e), this.nameChangeCallback(e.innerText);
  }
  n(this, _).appendChild(n(this, k));
}, me = new WeakSet(), Ft = function() {
  const e = [];
  n(this, H).innerHTML = "", this.clearable && e.push(o(this, Ae, es).call(this)), this.isAlwaysOpened || e.push(o(this, Ne, ss).call(this, this.isOpened)), e.length && n(this, H).append(...e);
}, fe = new WeakSet(), qt = function() {
  if (!this.isAlwaysOpened && n(this, E)) {
    const e = this.isOpened ? this.iconElements.arrowUp : this.iconElements.arrowDown;
    P(e, n(this, E));
  }
}, M = new WeakSet(), Y = function() {
  var e;
  (e = this.value) != null && e.length ? (n(this, k).removeAttribute("placeholder"), this.srcElement.classList.remove("treeselect-input--value-not-selected")) : (n(this, k).setAttribute("placeholder", this.placeholder), this.srcElement.classList.add("treeselect-input--value-not-selected")), this.searchable ? this.srcElement.classList.remove("treeselect-input--unsearchable") : this.srcElement.classList.add("treeselect-input--unsearchable"), this.isSingleSelect ? this.srcElement.classList.add("treeselect-input--is-single-select") : this.srcElement.classList.remove("treeselect-input--is-single-select"), n(this, k).value = this.searchText;
}, T = new WeakSet(), D = function() {
  this.isOpened = !this.isOpened, o(this, fe, qt).call(this);
  const e = n(this, _).querySelector(".treeselect-input__tags-count");
  this.isOpened ? (this.showPlaceholderOnOpen && this.isSingleSelect && this.value.length && (e == null || e.setAttribute("style", "display: none;"), n(this, k).setAttribute("placeholder", this.placeholder)), this.openCallback()) : (this.showPlaceholderOnOpen && this.isSingleSelect && this.value.length && (e == null || e.setAttribute("style", "display: block;"), n(this, k).removeAttribute("placeholder")), this.closeCallback());
}, Ce = new WeakSet(), zt = function(e, t, s) {
  const i = document.createElement("div");
  return i.classList.add("treeselect-input"), i.setAttribute("tabindex", "-1"), i.addEventListener("mousedown", (a) => o(this, be, jt).call(this, a)), i.addEventListener("focus", () => this.focusCallback(), !0), i.addEventListener("blur", () => this.blurCallback(), !0), e.appendChild(t), i.append(e, s), i;
}, be = new WeakSet(), jt = function(e) {
  e.stopPropagation(), this.isOpened || o(this, T, D).call(this), this.focus();
}, ge = new WeakSet(), Rt = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-input__tags"), e;
}, ke = new WeakSet(), $t = function() {
  return this.value.map((e) => {
    const t = document.createElement("div");
    t.classList.add("treeselect-input__tags-element"), t.setAttribute("tabindex", "-1"), t.setAttribute("tag-id", e.id.toString()), t.setAttribute("title", e.name);
    const s = o(this, ve, Ut).call(this, e.name), i = o(this, Ee, Yt).call(this);
    return t.addEventListener("mousedown", (a) => o(this, we, Wt).call(this, a, e.id)), t.append(s, i), t;
  });
}, we = new WeakSet(), Wt = function(e, t) {
  e.preventDefault(), e.stopPropagation(), this.removeItem(t), this.focus();
}, ve = new WeakSet(), Ut = function(e) {
  const t = document.createElement("span");
  return t.classList.add("treeselect-input__tags-name"), t.textContent = e, t;
}, Ee = new WeakSet(), Yt = function() {
  const e = document.createElement("span");
  return e.classList.add("treeselect-input__tags-cross"), P(this.iconElements.cross, e), e;
}, Le = new WeakSet(), Kt = function() {
  const e = document.createElement("span");
  if (e.classList.add("treeselect-input__tags-count"), !this.value.length)
    return e.textContent = "", e.setAttribute("title", ""), e;
  const t = this.value.length === 1 ? this.value[0].name : `${this.value.length} ${this.tagsCountText}`;
  return e.textContent = t, e.setAttribute("title", t), e;
}, ye = new WeakSet(), Xt = function() {
  const e = document.createElement("input");
  return e.classList.add("treeselect-input__edit"), this.id && e.setAttribute("id", this.id), (!this.searchable || this.disabled) && e.setAttribute("readonly", "readonly"), this.disabled && e.setAttribute("tabindex", "-1"), this.ariaLabel.length && e.setAttribute("aria-label", this.ariaLabel), e.addEventListener("keydown", (t) => o(this, Se, Jt).call(this, t)), e.addEventListener("input", (t) => o(this, xe, Zt).call(this, t, e)), e;
}, Se = new WeakSet(), Jt = function(e) {
  e.stopPropagation();
  const t = e.key;
  t === "Backspace" && !this.searchText.length && this.value.length && !this.showTags && this.clear(), t === "Backspace" && !this.searchText.length && this.value.length && this.removeItem(this.value[this.value.length - 1].id), e.code === "Space" && (!this.searchText || !this.searchable) && o(this, T, D).call(this), (t === "Enter" || t === "ArrowDown" || t === "ArrowUp") && e.preventDefault(), this.keydownCallback(e), t !== "Tab" && this.focus();
}, xe = new WeakSet(), Zt = function(e, t) {
  e.stopPropagation();
  const s = this.searchText, i = t.value.trim();
  if (s.length === 0 && i.length === 0) {
    t.value = "";
    return;
  }
  if (this.searchable) {
    const a = e.target.value;
    this.searchCallback(a), this.isOpened || o(this, T, D).call(this);
  } else
    t.value = "";
  this.searchText = t.value;
}, _e = new WeakSet(), Qt = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-input__operators"), e;
}, Ae = new WeakSet(), es = function() {
  const e = document.createElement("span");
  return e.classList.add("treeselect-input__clear"), e.setAttribute("tabindex", "-1"), P(this.iconElements.clear, e), e.addEventListener("mousedown", (t) => o(this, Oe, ts).call(this, t)), e;
}, Oe = new WeakSet(), ts = function(e) {
  e.preventDefault(), e.stopPropagation(), (this.searchText.length || this.value.length) && this.clear(), this.focus();
}, Ne = new WeakSet(), ss = function(e) {
  f(this, E, document.createElement("span")), n(this, E).classList.add("treeselect-input__arrow");
  const t = e ? this.iconElements.arrowUp : this.iconElements.arrowDown;
  return P(t, n(this, E)), n(this, E).addEventListener("mousedown", (s) => o(this, Te, is).call(this, s)), n(this, E);
}, Te = new WeakSet(), is = function(e) {
  e.stopPropagation(), e.preventDefault(), this.focus(), o(this, T, D).call(this);
}, K = new WeakSet(), vt = function() {
  this.inputCallback(this.value);
};
const Et = (l, e, t, s) => {
  ki(e);
  const i = e.filter((a) => !a.disabled && l.some((h) => h === a.id));
  if (t && i.length) {
    i[0].checked = !0;
    return;
  }
  i.forEach((a) => {
    a.checked = !0;
    const h = Bt(a, e, s);
    a.checked = h;
  });
}, Bt = ({ id: l, checked: e }, t, s) => {
  const i = t.find((h) => h.id === l);
  if (!i)
    return !1;
  if (s)
    return i.checked = i.disabled ? !1 : !!e, i.checked;
  const a = ls(!!e, i, t);
  return ns(i, t), a;
}, ls = (l, e, t) => {
  if (!e.isGroup)
    return e.checked = e.disabled ? !1 : !!l, e.isPartialChecked = !1, e.checked;
  const s = t.filter((d) => d.childOf === e.id);
  return !l || e.disabled || e.isPartialChecked ? (e.checked = !1, e.isPartialChecked = !1, Lt(e, s, t), e.checked) : as(s, t) ? os(s) ? (e.checked = !1, e.isPartialChecked = !1, e.disabled = !0, e.checked) : (e.checked = !1, e.isPartialChecked = !0, s.forEach((d) => {
    ls(l, d, t);
  }), e.checked) : (e.checked = !0, e.isPartialChecked = !1, Lt(e, s, t), e.checked);
}, ns = (l, e) => {
  const t = e.find((s) => s.id === l.childOf);
  t && (Ci(t, e), ns(t, e));
}, Ci = (l, e) => {
  const t = Ct(l, e);
  if (os(t)) {
    l.checked = !1, l.isPartialChecked = !1, l.disabled = !0;
    return;
  }
  if (bi(t)) {
    l.checked = !0, l.isPartialChecked = !1;
    return;
  }
  if (gi(t)) {
    l.checked = !1, l.isPartialChecked = !0;
    return;
  }
  l.checked = !1, l.isPartialChecked = !1;
}, Lt = ({ checked: l, disabled: e }, t, s) => {
  t.forEach((i) => {
    i.disabled = !!e || !!i.disabled, i.checked = !!l && !i.disabled, i.isPartialChecked = !1;
    const a = Ct(i, s);
    Lt({ checked: l, disabled: e }, a, s);
  });
}, as = (l, e) => l.some((i) => i.disabled) ? !0 : l.some((i) => {
  if (i.isGroup) {
    const a = Ct(i, e);
    return as(a, e);
  }
  return !1;
}), os = (l) => l.every((e) => !!e.disabled), bi = (l) => l.every((e) => !!e.checked), gi = (l) => l.some((e) => !!e.checked || !!e.isPartialChecked), ki = (l) => {
  l.forEach((e) => {
    e.checked = !1, e.isPartialChecked = !1;
  });
}, wi = (l, e, t) => {
  const s = { level: 0, groupId: "" }, i = rs(l, e, s.groupId, s.level);
  return Ei(i, t);
}, rs = (l, e, t, s) => l.reduce((i, a) => {
  var m;
  const h = !!((m = a.children) != null && m.length), d = s >= e && h, C = s > e;
  if (i.push({
    id: a.value,
    name: a.name,
    childOf: t,
    isGroup: h,
    checked: !1,
    isPartialChecked: !1,
    level: s,
    isClosed: d,
    hidden: C,
    disabled: a.disabled ?? !1
  }), h) {
    const b = rs(a.children, e, a.value, s + 1);
    i.push(...b);
  }
  return i;
}, []), Ct = ({ id: l }, e) => e.filter((t) => t.childOf === l), vi = (l) => {
  const { ungroupedNodes: e, allGroupedNodes: t, allNodes: s } = l.reduce(
    (a, h) => (h.checked && (a.allNodes.push(h), h.isGroup ? a.allGroupedNodes.push(h) : a.ungroupedNodes.push(h)), a),
    {
      ungroupedNodes: [],
      allGroupedNodes: [],
      allNodes: []
    }
  ), i = s.filter((a) => !t.some(({ id: h }) => h === a.childOf));
  return { ungroupedNodes: e, groupedNodes: i, allNodes: s };
}, Ei = (l, e) => (l.filter((s) => !!s.disabled).forEach(
  ({ id: s }) => Bt({ id: s, checked: !1 }, l, e)
), l), bt = (l, { id: e, isClosed: t }) => {
  Ct({ id: e }, l).forEach((i) => {
    i.hidden = t ?? !1, i.isGroup && !i.isClosed && bt(l, { id: i.id, isClosed: t });
  });
}, Li = (l) => {
  l.filter((e) => e.isGroup && !e.disabled && (e.checked || e.isPartialChecked)).forEach((e) => {
    e.isClosed = !1, bt(l, e);
  });
}, yi = (l, e) => {
  const t = Si(l, e);
  l.forEach((s) => {
    t.some(({ id: a }) => a === s.id) ? (s.isGroup && (s.isClosed = !1, bt(l, s)), s.hidden = !1) : s.hidden = !0;
  });
}, Si = (l, e) => l.reduce((t, s) => {
  if (s.name.toLowerCase().includes(e.toLowerCase())) {
    if (t.push(s), s.isGroup) {
      const a = cs(s.id, l);
      t.push(...a);
    }
    if (s.childOf) {
      const a = hs(s.childOf, l);
      t.push(...a);
    }
  }
  return t;
}, []), cs = (l, e) => e.reduce((t, s) => (s.childOf === l && (t.push(s), s.isGroup && t.push(...cs(s.id, e))), t), []), hs = (l, e) => e.reduce((t, s) => (s.id === l && (t.push(s), s.childOf && t.push(...hs(s.childOf, e))), t), []), xi = (l) => {
  const { duplications: e } = l.reduce(
    (t, s) => (t.allItems.some((i) => i.toString() === s.id.toString()) && t.duplications.push(s.id), t.allItems.push(s.id), t),
    {
      duplications: [],
      allItems: []
    }
  );
  e.length && console.error(`Validation: You have duplicated values: ${e.join(", ")}! You should use unique values.`);
}, _i = (l, e, t, s, i, a, h, d, C, m, b, g) => {
  Et(l, e, i, C), d && h && Li(e), he(
    e,
    t,
    s,
    a,
    m,
    b,
    g
  );
}, he = (l, e, t, s, i, a, h) => {
  l.forEach((d) => {
    const C = e.querySelector(`[input-id="${d.id}"]`), m = N(C);
    C.checked = d.checked, Ai(d, m, s), Oi(d, m), Ni(d, m), Ti(d, m, t), Pi(d, m), Bi(d, m, l, i, a, h), Ii(d, C, t);
  }), Vi(l, e);
}, Ai = (l, e, t) => {
  l.checked ? e.classList.add("treeselect-list__item--checked") : e.classList.remove("treeselect-list__item--checked"), Array.isArray(t) && t[0] === l.id && !l.disabled ? e.classList.add("treeselect-list__item--single-selected") : e.classList.remove("treeselect-list__item--single-selected");
}, Oi = (l, e) => {
  l.isPartialChecked ? e.classList.add("treeselect-list__item--partial-checked") : e.classList.remove("treeselect-list__item--partial-checked");
}, Ni = (l, e) => {
  l.disabled ? e.classList.add("treeselect-list__item--disabled") : e.classList.remove("treeselect-list__item--disabled");
}, Ti = (l, e, t) => {
  if (l.isGroup) {
    const s = e.querySelector(".treeselect-list__item-icon"), i = l.isClosed ? t.arrowRight : t.arrowDown;
    P(i, s), l.isClosed ? e.classList.add("treeselect-list__item--closed") : e.classList.remove("treeselect-list__item--closed");
  }
}, Pi = (l, e) => {
  l.hidden ? e.classList.add("treeselect-list__item--hidden") : e.classList.remove("treeselect-list__item--hidden");
}, Ii = (l, e, t) => {
  const i = e.parentNode.querySelector(".treeselect-list__item-checkbox-icon");
  l.checked ? P(t.check, i) : l.isPartialChecked ? P(t.partialCheck, i) : i.innerHTML = "";
}, Bi = (l, e, t, s, i, a) => {
  if (l.level === 0) {
    const d = t.some((b) => b.isGroup && b.level === l.level), m = !l.isGroup && d ? `${i}px` : `${a}px`;
    s ? e.style.paddingRight = m : e.style.paddingLeft = m;
  } else {
    const d = l.isGroup ? `${l.level * i}px` : `${l.level * i + i}px`;
    s ? e.style.paddingRight = d : e.style.paddingLeft = d;
  }
  e.setAttribute("level", l.level.toString()), e.setAttribute("group", l.isGroup.toString());
}, Vi = (l, e) => {
  const t = l.some((i) => !i.hidden), s = e.querySelector(".treeselect-list__empty");
  t ? s.classList.add("treeselect-list__empty--hidden") : s.classList.remove("treeselect-list__empty--hidden");
}, N = (l) => l.parentNode.parentNode, Ht = (l, e) => e.find((t) => t.id.toString() === l), Di = (l) => N(l).querySelector(".treeselect-list__item-icon"), Hi = (l, e) => {
  e && Object.keys(e).forEach((t) => {
    const s = e[t];
    typeof s == "string" && l.setAttribute(t, s);
  });
};
var F, I, L, X, Pe, ds, Ie, us, Be, ps, Ve, ms, De, fs, He, Cs, J, yt, Ge, bs, Me, gs, Fe, ks, Z, St, qe, ws, ze, vs, je, Es, Re, Ls, $e, ys, We, Ss, Ue, xs, Ye, _s, Ke, As, Xe, Os, Je, Ns, Q, xt, ee, _t, Ze, Ts;
class Gi {
  constructor({
    options: e,
    value: t,
    openLevel: s,
    listSlotHtmlComponent: i,
    emptyText: a,
    isSingleSelect: h,
    iconElements: d,
    unselectOnClickSingleSelected: C,
    showCount: m,
    disabledBranchNode: b,
    expandSelected: g,
    isIndependentNodes: w,
    rtl: v,
    defaultPadding: S,
    zeroLevelItemPadding: x,
    inputCallback: V,
    arrowClickCallback: q,
    mouseupCallback: W
  }) {
    // Private methods
    c(this, Pe);
    c(this, Ie);
    c(this, Be);
    c(this, Ve);
    c(this, De);
    c(this, He);
    c(this, J);
    c(this, Ge);
    c(this, Me);
    c(this, Fe);
    c(this, Z);
    c(this, qe);
    c(this, ze);
    c(this, je);
    c(this, Re);
    c(this, $e);
    c(this, We);
    c(this, Ue);
    c(this, Ye);
    c(this, Ke);
    // Actions
    c(this, Xe);
    c(this, Je);
    c(this, Q);
    c(this, ee);
    // Emits
    c(this, Ze);
    // Props
    r(this, "options");
    r(this, "value");
    r(this, "openLevel");
    r(this, "listSlotHtmlComponent");
    r(this, "emptyText");
    r(this, "isSingleSelect");
    r(this, "showCount");
    r(this, "disabledBranchNode");
    r(this, "expandSelected");
    r(this, "isIndependentNodes");
    r(this, "rtl");
    r(this, "defaultPadding");
    r(this, "zeroLevelItemPadding");
    r(this, "iconElements");
    r(this, "unselectOnClickSingleSelected");
    // InnerState
    r(this, "searchText");
    r(this, "flattedOptions");
    r(this, "flattedOptionsBeforeSearch");
    r(this, "selectedNodes");
    r(this, "srcElement");
    // Callbacks
    r(this, "inputCallback");
    r(this, "arrowClickCallback");
    r(this, "mouseupCallback");
    // PrivateInnerState
    c(this, F, null);
    c(this, I, !0);
    c(this, L, []);
    c(this, X, !0);
    this.options = e, this.value = t, this.openLevel = s ?? 0, this.listSlotHtmlComponent = i ?? null, this.emptyText = a ?? "No results found...", this.isSingleSelect = h ?? !1, this.showCount = m ?? !1, this.disabledBranchNode = b ?? !1, this.expandSelected = g ?? !1, this.isIndependentNodes = w ?? !1, this.rtl = v ?? !1, this.defaultPadding = S ?? 20, this.zeroLevelItemPadding = x ?? 5, this.iconElements = d, this.unselectOnClickSingleSelected = C ?? !1, this.searchText = "", this.flattedOptions = wi(this.options, this.openLevel, this.isIndependentNodes), this.flattedOptionsBeforeSearch = this.flattedOptions, this.selectedNodes = { nodes: [], groupedNodes: [], allNodes: [] }, this.srcElement = o(this, Be, ps).call(this), this.inputCallback = V, this.arrowClickCallback = q, this.mouseupCallback = W, xi(this.flattedOptions);
  }
  // Public methods
  updateValue(e) {
    this.value = e, f(this, L, this.isSingleSelect ? this.value : []), _i(
      e,
      this.flattedOptions,
      this.srcElement,
      this.iconElements,
      this.isSingleSelect,
      n(this, L),
      this.expandSelected,
      n(this, X),
      this.isIndependentNodes,
      this.rtl,
      this.defaultPadding,
      this.zeroLevelItemPadding
    ), f(this, X, !1), o(this, ee, _t).call(this);
  }
  updateSearchValue(e) {
    if (e === this.searchText)
      return;
    const t = this.searchText === "" && e !== "";
    this.searchText = e, t && (this.flattedOptionsBeforeSearch = JSON.parse(JSON.stringify(this.flattedOptions))), this.searchText === "" && (this.flattedOptions = this.flattedOptionsBeforeSearch.map((s) => {
      const i = this.flattedOptions.find((a) => a.id === s.id);
      return i.isClosed = s.isClosed, i.hidden = s.hidden, i;
    }), this.flattedOptionsBeforeSearch = []), this.searchText && yi(this.flattedOptions, e), he(
      this.flattedOptions,
      this.srcElement,
      this.iconElements,
      n(this, L),
      this.rtl,
      this.defaultPadding,
      this.zeroLevelItemPadding
    ), this.focusFirstListElement();
  }
  callKeyAction(e) {
    f(this, I, !1);
    const t = this.srcElement.querySelector(".treeselect-list__item--focused");
    if (t == null ? void 0 : t.classList.contains("treeselect-list__item--hidden"))
      return;
    const i = e.key;
    i === "Enter" && t && t.dispatchEvent(new Event("mousedown")), (i === "ArrowLeft" || i === "ArrowRight") && o(this, Pe, ds).call(this, t, e), (i === "ArrowDown" || i === "ArrowUp") && o(this, Ie, us).call(this, t, i);
  }
  focusFirstListElement() {
    const e = "treeselect-list__item--focused", t = this.srcElement.querySelector(`.${e}`), s = Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter(
      (a) => window.getComputedStyle(N(a)).display !== "none"
    );
    if (!s.length)
      return;
    t && t.classList.remove(e), N(s[0]).classList.add(e);
  }
  isLastFocusedElementExist() {
    return !!n(this, F);
  }
}
F = new WeakMap(), I = new WeakMap(), L = new WeakMap(), X = new WeakMap(), Pe = new WeakSet(), ds = function(e, t) {
  if (!e)
    return;
  const s = t.key, a = e.querySelector(".treeselect-list__item-checkbox").getAttribute("input-id"), h = Ht(a, this.flattedOptions), d = e.querySelector(".treeselect-list__item-icon");
  s === "ArrowLeft" && !h.isClosed && h.isGroup && (d.dispatchEvent(new Event("mousedown")), t.preventDefault()), s === "ArrowRight" && h.isClosed && h.isGroup && (d.dispatchEvent(new Event("mousedown")), t.preventDefault());
}, Ie = new WeakSet(), us = function(e, t) {
  var i;
  const s = Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter(
    (a) => window.getComputedStyle(N(a)).display !== "none"
  );
  if (s.length)
    if (!e)
      N(s[0]).classList.add("treeselect-list__item--focused");
    else {
      const a = s.findIndex(
        (x) => N(x).classList.contains("treeselect-list__item--focused")
      );
      N(s[a]).classList.remove("treeselect-list__item--focused");
      const d = t === "ArrowDown" ? a + 1 : a - 1, C = t === "ArrowDown" ? 0 : s.length - 1, m = s[d] ?? s[C], b = !s[d], g = N(m);
      g.classList.add("treeselect-list__item--focused");
      const w = this.srcElement.getBoundingClientRect(), v = g.getBoundingClientRect();
      if (b && t === "ArrowDown") {
        this.srcElement.scroll(0, 0);
        return;
      }
      if (b && t === "ArrowUp") {
        this.srcElement.scroll(0, this.srcElement.scrollHeight);
        return;
      }
      const S = ((i = this.listSlotHtmlComponent) == null ? void 0 : i.clientHeight) ?? 0;
      if (w.y + w.height < v.y + v.height + S) {
        this.srcElement.scroll(0, this.srcElement.scrollTop + v.height);
        return;
      }
      if (w.y > v.y) {
        this.srcElement.scroll(0, this.srcElement.scrollTop - v.height);
        return;
      }
    }
}, Be = new WeakSet(), ps = function() {
  const e = o(this, Ve, ms).call(this), t = o(this, J, yt).call(this, this.options);
  e.append(...t);
  const s = o(this, Me, gs).call(this);
  e.append(s);
  const i = o(this, Ge, bs).call(this);
  return i && e.append(i), e;
}, Ve = new WeakSet(), ms = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-list"), this.isSingleSelect && e.classList.add("treeselect-list--single-select"), this.disabledBranchNode && e.classList.add("treeselect-list--disabled-branch-node"), e.addEventListener("mouseout", (t) => o(this, De, fs).call(this, t)), e.addEventListener("mousemove", () => o(this, He, Cs).call(this)), e.addEventListener("mouseup", () => this.mouseupCallback(), !0), e;
}, De = new WeakSet(), fs = function(e) {
  e.stopPropagation(), n(this, F) && n(this, I) && n(this, F).classList.add("treeselect-list__item--focused");
}, He = new WeakSet(), Cs = function() {
  f(this, I, !0);
}, J = new WeakSet(), yt = function(e) {
  return e.reduce((t, s) => {
    var a;
    if ((a = s.children) != null && a.length) {
      const h = o(this, Fe, ks).call(this, s), d = o(this, J, yt).call(this, s.children);
      return h.append(...d), t.push(h), t;
    }
    const i = o(this, Z, St).call(this, s, !1);
    return t.push(i), t;
  }, []);
}, Ge = new WeakSet(), bs = function() {
  if (!this.listSlotHtmlComponent)
    return null;
  const e = document.createElement("div");
  return e.classList.add("treeselect-list__slot"), e.appendChild(this.listSlotHtmlComponent), e;
}, Me = new WeakSet(), gs = function() {
  const e = document.createElement("div");
  e.classList.add("treeselect-list__empty"), e.setAttribute("title", this.emptyText);
  const t = document.createElement("span");
  t.classList.add("treeselect-list__empty-icon"), P(this.iconElements.attention, t);
  const s = document.createElement("span");
  return s.classList.add("treeselect-list__empty-text"), s.textContent = this.emptyText, e.append(t, s), e;
}, Fe = new WeakSet(), ks = function(e) {
  const t = document.createElement("div");
  t.setAttribute("group-container-id", e.value.toString()), t.classList.add("treeselect-list__group-container");
  const s = o(this, Z, St).call(this, e, !0);
  return t.appendChild(s), t;
}, Z = new WeakSet(), St = function(e, t) {
  const s = o(this, qe, ws).call(this, e);
  if (t) {
    const h = o(this, $e, ys).call(this);
    s.appendChild(h), s.classList.add("treeselect-list__item--group");
  }
  const i = o(this, Ue, xs).call(this, e), a = o(this, Ye, _s).call(this, e, t);
  return s.append(i, a), s;
}, qe = new WeakSet(), ws = function(e) {
  const t = document.createElement("div");
  return Hi(t, e.htmlAttr), t.setAttribute("tabindex", "-1"), t.setAttribute("title", e.name), t.classList.add("treeselect-list__item"), t.addEventListener("mouseover", () => o(this, ze, vs).call(this, t), !0), t.addEventListener("mouseout", () => o(this, je, Es).call(this, t), !0), t.addEventListener("mousedown", (s) => o(this, Re, Ls).call(this, s, e)), t;
}, ze = new WeakSet(), vs = function(e) {
  n(this, I) && o(this, Q, xt).call(this, !0, e);
}, je = new WeakSet(), Es = function(e) {
  n(this, I) && (o(this, Q, xt).call(this, !1, e), f(this, F, e));
}, Re = new WeakSet(), Ls = function(e, t) {
  var a;
  if (e.preventDefault(), e.stopPropagation(), (a = this.flattedOptions.find((h) => h.id === t.value)) == null ? void 0 : a.disabled)
    return;
  const i = e.target.querySelector(".treeselect-list__item-checkbox");
  i.checked = !i.checked, o(this, Xe, Os).call(this, i, t);
}, $e = new WeakSet(), ys = function() {
  const e = document.createElement("span");
  return e.setAttribute("tabindex", "-1"), e.classList.add("treeselect-list__item-icon"), P(this.iconElements.arrowDown, e), e.addEventListener("mousedown", (t) => o(this, We, Ss).call(this, t)), e;
}, We = new WeakSet(), Ss = function(e) {
  e.preventDefault(), e.stopPropagation(), o(this, Je, Ns).call(this, e);
}, Ue = new WeakSet(), xs = function(e) {
  const t = document.createElement("div");
  t.classList.add("treeselect-list__item-checkbox-container");
  const s = document.createElement("span");
  s.classList.add("treeselect-list__item-checkbox-icon"), s.innerHTML = "";
  const i = document.createElement("input");
  return i.setAttribute("tabindex", "-1"), i.setAttribute("type", "checkbox"), i.setAttribute("input-id", e.value.toString()), i.classList.add("treeselect-list__item-checkbox"), t.append(s, i), t;
}, Ye = new WeakSet(), _s = function(e, t) {
  const s = document.createElement("label");
  if (s.textContent = e.name, s.classList.add("treeselect-list__item-label"), t && this.showCount) {
    const i = o(this, Ke, As).call(this, e);
    s.appendChild(i);
  }
  return s;
}, Ke = new WeakSet(), As = function(e) {
  const t = document.createElement("span"), s = this.flattedOptions.filter((i) => i.childOf === e.value);
  return t.textContent = `(${s.length})`, t.classList.add("treeselect-list__item-label-counter"), t;
}, Xe = new WeakSet(), Os = function(e, t) {
  const s = this.flattedOptions.find((i) => i.id === t.value);
  if (s) {
    if (s != null && s.isGroup && this.disabledBranchNode) {
      const i = Di(e);
      i == null || i.dispatchEvent(new Event("mousedown"));
      return;
    }
    if (this.isSingleSelect) {
      const [i] = n(this, L);
      if (s.id === i)
        if (this.unselectOnClickSingleSelected)
          f(this, L, []), Et([], this.flattedOptions, this.isSingleSelect, this.isIndependentNodes);
        else
          return;
      else
        f(this, L, [s.id]), Et([s.id], this.flattedOptions, this.isSingleSelect, this.isIndependentNodes);
    } else {
      s.checked = e.checked;
      const i = Bt(s, this.flattedOptions, this.isIndependentNodes);
      e.checked = i;
    }
    he(
      this.flattedOptions,
      this.srcElement,
      this.iconElements,
      n(this, L),
      this.rtl,
      this.defaultPadding,
      this.zeroLevelItemPadding
    ), o(this, Ze, Ts).call(this);
  }
}, Je = new WeakSet(), Ns = function(e) {
  var a, h;
  const t = (h = (a = e.target) == null ? void 0 : a.parentNode) == null ? void 0 : h.querySelector("[input-id]"), s = (t == null ? void 0 : t.getAttribute("input-id")) ?? null, i = Ht(s, this.flattedOptions);
  i && (i.isClosed = !i.isClosed, bt(this.flattedOptions, i), he(
    this.flattedOptions,
    this.srcElement,
    this.iconElements,
    n(this, L),
    this.rtl,
    this.defaultPadding,
    this.zeroLevelItemPadding
  ), this.arrowClickCallback(i.id, i.isClosed));
}, Q = new WeakSet(), xt = function(e, t) {
  const s = "treeselect-list__item--focused";
  if (e) {
    const i = Array.from(this.srcElement.querySelectorAll(`.${s}`));
    i.length && i.forEach((a) => a.classList.remove(s)), t.classList.add(s);
  } else
    t.classList.remove(s);
}, ee = new WeakSet(), _t = function() {
  const { ungroupedNodes: e, groupedNodes: t, allNodes: s } = vi(this.flattedOptions);
  this.selectedNodes = { nodes: e, groupedNodes: t, allNodes: s };
}, Ze = new WeakSet(), Ts = function() {
  o(this, ee, _t).call(this), this.inputCallback(this.selectedNodes), this.value = this.selectedNodes.nodes.map((e) => e.id);
};
const Gt = ({
  parentHtmlContainer: l,
  staticList: e,
  appendToBody: t,
  isSingleSelect: s,
  value: i,
  direction: a
}) => {
  l || console.error("Validation: parentHtmlContainer prop is required!"), e && t && console.error("Validation: You should set staticList to false if you use appendToBody!"), s && Array.isArray(i) && console.error("Validation: if you use isSingleSelect prop, you should pass a single value!"), !s && !Array.isArray(i) && console.error("Validation: you should pass an array as a value!"), a && a !== "auto" && a !== "bottom" && a !== "top" && console.error("Validation: you should pass (auto | top | bottom | undefined) as a value for the direction prop!");
}, ce = (l) => l.map((e) => e.id), Mi = (l) => l ? Array.isArray(l) ? l : [l] : [], Fi = (l, e) => {
  if (e) {
    const [t] = l;
    return t ?? null;
  }
  return l;
};
var u, p, z, te, j, A, O, y, B, se, At, ie, Ot, Qe, Ps, et, Is, tt, Bs, st, Vs, it, Ds, lt, Hs, le, Nt, nt, Gs, at, Ms, ot, Fs, rt, qs, ne, Tt, ct, zs, R, de, ae, Pt, $, ue, ht, js, oe, It, dt, Rs, ut, $s, pt, Ws, mt, Us, ft, Ys;
class zi {
  constructor({
    parentHtmlContainer: e,
    value: t,
    options: s,
    openLevel: i,
    appendToBody: a,
    alwaysOpen: h,
    showTags: d,
    tagsCountText: C,
    clearable: m,
    searchable: b,
    placeholder: g,
    grouped: w,
    isGroupedValue: v,
    listSlotHtmlComponent: S,
    disabled: x,
    emptyText: V,
    staticList: q,
    id: W,
    ariaLabel: gt,
    isSingleSelect: re,
    showCount: kt,
    disabledBranchNode: Ks,
    direction: Xs,
    expandSelected: Js,
    saveScrollPosition: Zs,
    isIndependentNodes: Qs,
    rtl: ei,
    defaultPadding: ti,
    zeroLevelItemPadding: si,
    iconElements: ii,
    showPlaceholderOnOpen: li,
    unselectOnClickSingleSelected: ni,
    inputCallback: ai,
    openCallback: oi,
    closeCallback: ri,
    nameChangeCallback: ci,
    searchCallback: hi,
    openCloseGroupCallback: di
  }) {
    c(this, se);
    c(this, ie);
    c(this, Qe);
    c(this, et);
    c(this, tt);
    c(this, st);
    c(this, it);
    c(this, lt);
    c(this, le);
    c(this, nt);
    c(this, at);
    c(this, ot);
    c(this, rt);
    c(this, ne);
    c(this, ct);
    c(this, R);
    c(this, ae);
    c(this, $);
    c(this, ht);
    // Emits
    c(this, oe);
    c(this, dt);
    c(this, ut);
    c(this, pt);
    c(this, mt);
    c(this, ft);
    // Props
    r(this, "parentHtmlContainer");
    r(this, "value");
    r(this, "options");
    r(this, "openLevel");
    r(this, "appendToBody");
    r(this, "alwaysOpen");
    r(this, "showTags");
    r(this, "tagsCountText");
    r(this, "clearable");
    r(this, "searchable");
    r(this, "placeholder");
    r(this, "grouped");
    r(this, "isGroupedValue");
    r(this, "listSlotHtmlComponent");
    r(this, "disabled");
    r(this, "emptyText");
    r(this, "staticList");
    r(this, "id");
    r(this, "ariaLabel");
    r(this, "isSingleSelect");
    r(this, "showCount");
    r(this, "disabledBranchNode");
    r(this, "direction");
    r(this, "expandSelected");
    r(this, "saveScrollPosition");
    r(this, "isIndependentNodes");
    r(this, "rtl");
    r(this, "defaultPadding");
    r(this, "zeroLevelItemPadding");
    r(this, "iconElements");
    r(this, "showPlaceholderOnOpen");
    r(this, "unselectOnClickSingleSelected");
    r(this, "inputCallback");
    r(this, "openCallback");
    r(this, "closeCallback");
    r(this, "nameChangeCallback");
    r(this, "searchCallback");
    r(this, "openCloseGroupCallback");
    // InnerState
    r(this, "ungroupedValue");
    r(this, "groupedValue");
    r(this, "allValue");
    r(this, "isListOpened");
    r(this, "selectedName");
    r(this, "srcElement");
    // Components
    c(this, u, null);
    c(this, p, null);
    // Resize props
    c(this, z, null);
    // List position scroll
    c(this, te, 0);
    // Timer for search text
    c(this, j, 0);
    // Outside listeners
    c(this, A, null);
    c(this, O, null);
    c(this, y, null);
    c(this, B, null);
    Gt({
      parentHtmlContainer: e,
      value: t,
      staticList: q,
      appendToBody: a,
      isSingleSelect: re
    }), this.parentHtmlContainer = e, this.value = [], this.options = s ?? [], this.openLevel = i ?? 0, this.appendToBody = a ?? !1, this.alwaysOpen = !!(h && !x), this.showTags = d ?? !0, this.tagsCountText = C ?? "elements selected", this.clearable = m ?? !0, this.searchable = b ?? !0, this.placeholder = g ?? "Search...", this.grouped = w ?? !0, this.isGroupedValue = v ?? !1, this.listSlotHtmlComponent = S ?? null, this.disabled = x ?? !1, this.emptyText = V ?? "No results found...", this.staticList = !!(q && !this.appendToBody), this.id = W ?? "", this.ariaLabel = gt ?? "", this.isSingleSelect = re ?? !1, this.showCount = kt ?? !1, this.disabledBranchNode = Ks ?? !1, this.direction = Xs ?? "auto", this.expandSelected = Js ?? !1, this.saveScrollPosition = Zs ?? !0, this.isIndependentNodes = Qs ?? !1, this.rtl = ei ?? !1, this.defaultPadding = ti ?? 20, this.zeroLevelItemPadding = si ?? 5, this.iconElements = Dt(ii), this.showPlaceholderOnOpen = li ?? !1, this.unselectOnClickSingleSelected = ni ?? !1, this.inputCallback = ai, this.openCallback = oi, this.closeCallback = ri, this.nameChangeCallback = ci, this.searchCallback = hi, this.openCloseGroupCallback = di, this.ungroupedValue = [], this.groupedValue = [], this.allValue = [], this.isListOpened = !1, this.selectedName = "", this.srcElement = null, o(this, se, At).call(this, t);
  }
  mount() {
    Gt({
      parentHtmlContainer: this.parentHtmlContainer,
      value: this.value,
      staticList: this.staticList,
      appendToBody: this.appendToBody,
      isSingleSelect: this.isSingleSelect
    }), this.iconElements = Dt(this.iconElements), o(this, se, At).call(this, this.value);
  }
  updateValue(e) {
    const t = Mi(e), s = n(this, u);
    s && (s.updateValue(t), o(this, le, Nt).call(this, s == null ? void 0 : s.selectedNodes));
  }
  destroy() {
    this.srcElement && (o(this, ne, Tt).call(this), this.srcElement.innerHTML = "", this.srcElement = null, o(this, $, ue).call(this, !0));
  }
  focus() {
    n(this, p) && n(this, p).focus();
  }
  toggleOpenClose() {
    n(this, p) && (n(this, p).openClose(), n(this, p).focus());
  }
  // Outside Listeners
  scrollWindowHandler() {
    this.updateListPosition();
  }
  focusWindowHandler(e) {
    var s, i, a;
    ((s = this.srcElement) == null ? void 0 : s.contains(e.target)) || ((i = n(this, u)) == null ? void 0 : i.srcElement.contains(e.target)) || ((a = n(this, p)) == null || a.blur(), o(this, $, ue).call(this, !1), o(this, R, de).call(this, !1));
  }
  blurWindowHandler() {
    var e;
    (e = n(this, p)) == null || e.blur(), o(this, $, ue).call(this, !1), o(this, R, de).call(this, !1);
  }
  // Update direction of the list. Support appendToBody and standard mode with absolute
  updateListPosition() {
    var S;
    const e = this.srcElement, t = (S = n(this, u)) == null ? void 0 : S.srcElement;
    if (!e || !t)
      return;
    const { height: s } = t.getBoundingClientRect(), {
      x: i,
      y: a,
      height: h,
      width: d
    } = e.getBoundingClientRect(), C = window.innerHeight, m = a, b = C - a - h;
    let g = m > b && m >= s && b < s;
    if (this.direction !== "auto" && (g = this.direction === "top"), this.appendToBody) {
      (t.style.top !== "0px" || t.style.left !== "0px") && (t.style.top = "0px", t.style.left = "0px");
      const x = i + window.scrollX, V = g ? a + window.scrollY - s : a + window.scrollY + h;
      t.style.transform = `translate(${x}px,${V}px)`, t.style.width = `${d}px`;
    }
    const w = g ? "top" : "bottom";
    t.getAttribute("direction") !== w && (t.setAttribute("direction", w), o(this, ct, zs).call(this, g, this.appendToBody));
  }
}
u = new WeakMap(), p = new WeakMap(), z = new WeakMap(), te = new WeakMap(), j = new WeakMap(), A = new WeakMap(), O = new WeakMap(), y = new WeakMap(), B = new WeakMap(), se = new WeakSet(), At = function(e) {
  var a;
  this.destroy();
  const { container: t, list: s, input: i } = o(this, Qe, Ps).call(this);
  this.srcElement = t, f(this, u, s), f(this, p, i), f(this, A, this.scrollWindowHandler.bind(this)), f(this, O, this.scrollWindowHandler.bind(this)), f(this, y, this.focusWindowHandler.bind(this)), f(this, B, this.blurWindowHandler.bind(this)), this.alwaysOpen && ((a = n(this, p)) == null || a.openClose()), this.disabled ? this.srcElement.classList.add("treeselect--disabled") : this.srcElement.classList.remove("treeselect--disabled"), this.updateValue(e ?? this.value);
}, ie = new WeakSet(), Ot = function({
  groupedNodes: e,
  nodes: t,
  allNodes: s
}) {
  this.ungroupedValue = t ? ce(t) : [], this.groupedValue = e ? ce(e) : [], this.allValue = s ? ce(s) : [];
  let i = [];
  this.isIndependentNodes || this.isSingleSelect ? i = this.allValue : this.isGroupedValue ? i = this.groupedValue : i = this.ungroupedValue, this.value = Fi(i, this.isSingleSelect);
}, Qe = new WeakSet(), Ps = function() {
  const e = this.parentHtmlContainer;
  e.classList.add("treeselect"), this.rtl && e.setAttribute("dir", "rtl");
  const t = new Gi({
    value: [],
    // updateValue method calls in initMount method to set actual value
    options: this.options,
    openLevel: this.openLevel,
    listSlotHtmlComponent: this.listSlotHtmlComponent,
    emptyText: this.emptyText,
    isSingleSelect: this.isSingleSelect,
    showCount: this.showCount,
    disabledBranchNode: this.disabledBranchNode,
    expandSelected: this.expandSelected,
    isIndependentNodes: this.isIndependentNodes,
    rtl: this.rtl,
    defaultPadding: this.defaultPadding,
    zeroLevelItemPadding: this.zeroLevelItemPadding,
    iconElements: this.iconElements,
    unselectOnClickSingleSelected: this.unselectOnClickSingleSelected,
    inputCallback: (i) => o(this, nt, Gs).call(this, i),
    arrowClickCallback: (i, a) => o(this, at, Ms).call(this, i, a),
    mouseupCallback: () => {
      var i;
      return (i = n(this, p)) == null ? void 0 : i.focus();
    }
  }), s = new fi({
    value: [],
    // updateValue method calls in initMount method to set actual value
    showTags: this.showTags,
    tagsCountText: this.tagsCountText,
    clearable: this.clearable,
    isAlwaysOpened: this.alwaysOpen,
    searchable: this.searchable,
    placeholder: this.placeholder,
    disabled: this.disabled,
    isSingleSelect: this.isSingleSelect,
    id: this.id,
    ariaLabel: this.ariaLabel,
    iconElements: this.iconElements,
    showPlaceholderOnOpen: this.showPlaceholderOnOpen,
    inputCallback: (i) => o(this, et, Is).call(this, i),
    searchCallback: (i) => o(this, st, Vs).call(this, i),
    openCallback: () => o(this, rt, qs).call(this),
    closeCallback: () => o(this, ne, Tt).call(this),
    keydownCallback: (i) => o(this, tt, Bs).call(this, i),
    focusCallback: () => o(this, it, Ds).call(this),
    blurCallback: () => o(this, lt, Hs).call(this),
    nameChangeCallback: (i) => o(this, ot, Fs).call(this, i)
  });
  return this.appendToBody && f(this, z, new ResizeObserver(() => this.updateListPosition())), e.append(s.srcElement), { container: e, list: t, input: s };
}, et = new WeakSet(), Is = function(e) {
  var i, a;
  const t = ce(e);
  (i = n(this, u)) == null || i.updateValue(t);
  const s = ((a = n(this, u)) == null ? void 0 : a.selectedNodes) ?? {};
  o(this, ie, Ot).call(this, s), o(this, oe, It).call(this);
}, tt = new WeakSet(), Bs = function(e) {
  var t;
  this.isListOpened && ((t = n(this, u)) == null || t.callKeyAction(e));
}, st = new WeakSet(), Vs = function(e) {
  n(this, j) && clearTimeout(n(this, j)), f(this, j, window.setTimeout(() => {
    var t;
    (t = n(this, u)) == null || t.updateSearchValue(e), this.updateListPosition();
  }, 350)), o(this, mt, Us).call(this, e);
}, it = new WeakSet(), Ds = function() {
  o(this, R, de).call(this, !0), n(this, y) && n(this, y) && n(this, B) && (document.addEventListener("mousedown", n(this, y), !0), document.addEventListener("focus", n(this, y), !0), window.addEventListener("blur", n(this, B)));
}, lt = new WeakSet(), Hs = function() {
  setTimeout(() => {
    var s, i;
    const e = (s = n(this, p)) == null ? void 0 : s.srcElement.contains(document.activeElement), t = (i = n(this, u)) == null ? void 0 : i.srcElement.contains(document.activeElement);
    !e && !t && this.blurWindowHandler();
  }, 1);
}, le = new WeakSet(), Nt = function(e) {
  var s;
  if (!e)
    return;
  let t = [];
  this.isIndependentNodes || this.isSingleSelect ? t = e.allNodes : this.grouped ? t = e.groupedNodes : t = e.nodes, (s = n(this, p)) == null || s.updateValue(t), o(this, ie, Ot).call(this, e);
}, nt = new WeakSet(), Gs = function(e) {
  var t, s, i;
  o(this, le, Nt).call(this, e), this.isSingleSelect && !this.alwaysOpen && ((t = n(this, p)) == null || t.openClose(), (s = n(this, p)) == null || s.clearSearch()), (i = n(this, p)) == null || i.focus(), o(this, oe, It).call(this);
}, at = new WeakSet(), Ms = function(e, t) {
  var s;
  (s = n(this, p)) == null || s.focus(), this.updateListPosition(), o(this, ft, Ys).call(this, e, t);
}, ot = new WeakSet(), Fs = function(e) {
  this.selectedName !== e && (this.selectedName = e, o(this, dt, Rs).call(this));
}, rt = new WeakSet(), qs = function() {
  var e;
  this.isListOpened = !0, n(this, A) && n(this, O) && (window.addEventListener("scroll", n(this, A), !0), window.addEventListener("resize", n(this, O))), !(!n(this, u) || !this.srcElement) && (this.appendToBody ? (document.body.appendChild(n(this, u).srcElement), (e = n(this, z)) == null || e.observe(this.srcElement)) : this.srcElement.appendChild(n(this, u).srcElement), this.updateListPosition(), o(this, ae, Pt).call(this, !0), o(this, ht, js).call(this), o(this, ut, $s).call(this));
}, ne = new WeakSet(), Tt = function() {
  var t;
  this.alwaysOpen || (this.isListOpened = !1, n(this, A) && n(this, O) && (window.removeEventListener("scroll", n(this, A), !0), window.removeEventListener("resize", n(this, O))), !n(this, u) || !this.srcElement) || !(this.appendToBody ? document.body.contains(n(this, u).srcElement) : this.srcElement.contains(n(this, u).srcElement)) || (f(this, te, n(this, u).srcElement.scrollTop), this.appendToBody ? (document.body.removeChild(n(this, u).srcElement), (t = n(this, z)) == null || t.disconnect()) : this.srcElement.removeChild(n(this, u).srcElement), o(this, ae, Pt).call(this, !1), o(this, pt, Ws).call(this));
}, ct = new WeakSet(), zs = function(e, t) {
  if (!n(this, u) || !n(this, p))
    return;
  const s = t ? "treeselect-list--top-to-body" : "treeselect-list--top", i = t ? "treeselect-list--bottom-to-body" : "treeselect-list--bottom";
  e ? (n(this, u).srcElement.classList.add(s), n(this, u).srcElement.classList.remove(i), n(this, p).srcElement.classList.add("treeselect-input--top"), n(this, p).srcElement.classList.remove("treeselect-input--bottom")) : (n(this, u).srcElement.classList.remove(s), n(this, u).srcElement.classList.add(i), n(this, p).srcElement.classList.remove("treeselect-input--top"), n(this, p).srcElement.classList.add("treeselect-input--bottom"));
}, R = new WeakSet(), de = function(e) {
  !n(this, p) || !n(this, u) || (e ? (n(this, p).srcElement.classList.add("treeselect-input--focused"), n(this, u).srcElement.classList.add("treeselect-list--focused")) : (n(this, p).srcElement.classList.remove("treeselect-input--focused"), n(this, u).srcElement.classList.remove("treeselect-list--focused")));
}, ae = new WeakSet(), Pt = function(e) {
  var t, s, i, a;
  e ? (t = n(this, p)) == null || t.srcElement.classList.add("treeselect-input--opened") : (s = n(this, p)) == null || s.srcElement.classList.remove("treeselect-input--opened"), this.staticList ? (i = n(this, u)) == null || i.srcElement.classList.add("treeselect-list--static") : (a = n(this, u)) == null || a.srcElement.classList.remove("treeselect-list--static");
}, $ = new WeakSet(), ue = function(e) {
  !n(this, A) || !n(this, O) || !n(this, y) || !n(this, B) || ((!this.alwaysOpen || e) && (window.removeEventListener("scroll", n(this, A), !0), window.removeEventListener("resize", n(this, O))), document.removeEventListener("mousedown", n(this, y), !0), document.removeEventListener("focus", n(this, y), !0), window.removeEventListener("blur", n(this, B)));
}, ht = new WeakSet(), js = function() {
  var t, s, i;
  const e = (t = n(this, u)) == null ? void 0 : t.isLastFocusedElementExist();
  this.saveScrollPosition && e ? (s = n(this, u)) == null || s.srcElement.scroll(0, n(this, te)) : (i = n(this, u)) == null || i.focusFirstListElement();
}, oe = new WeakSet(), It = function() {
  var e;
  (e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("input", { detail: this.value })), this.inputCallback && this.inputCallback(this.value);
}, dt = new WeakSet(), Rs = function() {
  var e;
  (e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("name-change", { detail: this.selectedName })), this.nameChangeCallback && this.nameChangeCallback(this.selectedName);
}, ut = new WeakSet(), $s = function() {
  var e;
  this.alwaysOpen || ((e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("open", { detail: this.value })), this.openCallback && this.openCallback(this.value));
}, pt = new WeakSet(), Ws = function() {
  var e;
  this.alwaysOpen || ((e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("close", { detail: this.value })), this.closeCallback && this.closeCallback(this.value));
}, mt = new WeakSet(), Us = function(e) {
  var s;
  const t = (e == null ? void 0 : e.trim()) ?? "";
  (s = this.srcElement) == null || s.dispatchEvent(new CustomEvent("search", { detail: t })), this.searchCallback && this.searchCallback(t);
}, ft = new WeakSet(), Ys = function(e, t) {
  var s;
  (s = this.srcElement) == null || s.dispatchEvent(new CustomEvent("open-close-group", { detail: { groupId: e, isClosed: t } })), this.openCloseGroupCallback && this.openCloseGroupCallback(e, t);
};
export {
  zi as default
};
