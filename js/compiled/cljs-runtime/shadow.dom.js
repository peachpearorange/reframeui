goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_49536 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_49536(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_49537 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_49537(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__49019 = coll;
var G__49020 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__49019,G__49020) : shadow.dom.lazy_native_coll_seq.call(null,G__49019,G__49020));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__49036 = arguments.length;
switch (G__49036) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__49051 = arguments.length;
switch (G__49051) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__49054 = arguments.length;
switch (G__49054) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__49100 = arguments.length;
switch (G__49100) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__49112 = arguments.length;
switch (G__49112) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__49115 = arguments.length;
switch (G__49115) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e49116){if((e49116 instanceof Object)){
var e = e49116;
return console.log("didnt support attachEvent",el,e);
} else {
throw e49116;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__49122 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__49123 = null;
var count__49124 = (0);
var i__49125 = (0);
while(true){
if((i__49125 < count__49124)){
var el = chunk__49123.cljs$core$IIndexed$_nth$arity$2(null,i__49125);
var handler_49544__$1 = ((function (seq__49122,chunk__49123,count__49124,i__49125,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49122,chunk__49123,count__49124,i__49125,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49544__$1);


var G__49545 = seq__49122;
var G__49546 = chunk__49123;
var G__49547 = count__49124;
var G__49548 = (i__49125 + (1));
seq__49122 = G__49545;
chunk__49123 = G__49546;
count__49124 = G__49547;
i__49125 = G__49548;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49122);
if(temp__5753__auto__){
var seq__49122__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49122__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49122__$1);
var G__49549 = cljs.core.chunk_rest(seq__49122__$1);
var G__49550 = c__4679__auto__;
var G__49551 = cljs.core.count(c__4679__auto__);
var G__49552 = (0);
seq__49122 = G__49549;
chunk__49123 = G__49550;
count__49124 = G__49551;
i__49125 = G__49552;
continue;
} else {
var el = cljs.core.first(seq__49122__$1);
var handler_49554__$1 = ((function (seq__49122,chunk__49123,count__49124,i__49125,el,seq__49122__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49122,chunk__49123,count__49124,i__49125,el,seq__49122__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49554__$1);


var G__49556 = cljs.core.next(seq__49122__$1);
var G__49557 = null;
var G__49558 = (0);
var G__49559 = (0);
seq__49122 = G__49556;
chunk__49123 = G__49557;
count__49124 = G__49558;
i__49125 = G__49559;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__49136 = arguments.length;
switch (G__49136) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__49137 = cljs.core.seq(events);
var chunk__49138 = null;
var count__49139 = (0);
var i__49140 = (0);
while(true){
if((i__49140 < count__49139)){
var vec__49148 = chunk__49138.cljs$core$IIndexed$_nth$arity$2(null,i__49140);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49148,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49148,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49561 = seq__49137;
var G__49562 = chunk__49138;
var G__49563 = count__49139;
var G__49564 = (i__49140 + (1));
seq__49137 = G__49561;
chunk__49138 = G__49562;
count__49139 = G__49563;
i__49140 = G__49564;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49137);
if(temp__5753__auto__){
var seq__49137__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49137__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49137__$1);
var G__49565 = cljs.core.chunk_rest(seq__49137__$1);
var G__49566 = c__4679__auto__;
var G__49567 = cljs.core.count(c__4679__auto__);
var G__49568 = (0);
seq__49137 = G__49565;
chunk__49138 = G__49566;
count__49139 = G__49567;
i__49140 = G__49568;
continue;
} else {
var vec__49151 = cljs.core.first(seq__49137__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49151,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49151,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49569 = cljs.core.next(seq__49137__$1);
var G__49570 = null;
var G__49571 = (0);
var G__49572 = (0);
seq__49137 = G__49569;
chunk__49138 = G__49570;
count__49139 = G__49571;
i__49140 = G__49572;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__49154 = cljs.core.seq(styles);
var chunk__49155 = null;
var count__49156 = (0);
var i__49157 = (0);
while(true){
if((i__49157 < count__49156)){
var vec__49173 = chunk__49155.cljs$core$IIndexed$_nth$arity$2(null,i__49157);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49173,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49173,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49573 = seq__49154;
var G__49574 = chunk__49155;
var G__49575 = count__49156;
var G__49576 = (i__49157 + (1));
seq__49154 = G__49573;
chunk__49155 = G__49574;
count__49156 = G__49575;
i__49157 = G__49576;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49154);
if(temp__5753__auto__){
var seq__49154__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49154__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49154__$1);
var G__49577 = cljs.core.chunk_rest(seq__49154__$1);
var G__49578 = c__4679__auto__;
var G__49579 = cljs.core.count(c__4679__auto__);
var G__49580 = (0);
seq__49154 = G__49577;
chunk__49155 = G__49578;
count__49156 = G__49579;
i__49157 = G__49580;
continue;
} else {
var vec__49176 = cljs.core.first(seq__49154__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49176,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49176,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49581 = cljs.core.next(seq__49154__$1);
var G__49582 = null;
var G__49583 = (0);
var G__49584 = (0);
seq__49154 = G__49581;
chunk__49155 = G__49582;
count__49156 = G__49583;
i__49157 = G__49584;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__49179_49585 = key;
var G__49179_49586__$1 = (((G__49179_49585 instanceof cljs.core.Keyword))?G__49179_49585.fqn:null);
switch (G__49179_49586__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_49588 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_49588,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_49588,"aria-");
}
})())){
el.setAttribute(ks_49588,value);
} else {
(el[ks_49588] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__49191){
var map__49192 = p__49191;
var map__49192__$1 = cljs.core.__destructure_map(map__49192);
var props = map__49192__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49192__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__49193 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49193,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49193,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49193,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__49196 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__49196,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__49196;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__49198 = arguments.length;
switch (G__49198) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__49199){
var vec__49200 = p__49199;
var seq__49201 = cljs.core.seq(vec__49200);
var first__49202 = cljs.core.first(seq__49201);
var seq__49201__$1 = cljs.core.next(seq__49201);
var nn = first__49202;
var first__49202__$1 = cljs.core.first(seq__49201__$1);
var seq__49201__$2 = cljs.core.next(seq__49201__$1);
var np = first__49202__$1;
var nc = seq__49201__$2;
var node = vec__49200;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49203 = nn;
var G__49204 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49203,G__49204) : create_fn.call(null,G__49203,G__49204));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49205 = nn;
var G__49206 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49205,G__49206) : create_fn.call(null,G__49205,G__49206));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__49207 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49207,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49207,(1),null);
var seq__49210_49592 = cljs.core.seq(node_children);
var chunk__49211_49593 = null;
var count__49212_49594 = (0);
var i__49213_49595 = (0);
while(true){
if((i__49213_49595 < count__49212_49594)){
var child_struct_49596 = chunk__49211_49593.cljs$core$IIndexed$_nth$arity$2(null,i__49213_49595);
var children_49597 = shadow.dom.dom_node(child_struct_49596);
if(cljs.core.seq_QMARK_(children_49597)){
var seq__49230_49598 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49597));
var chunk__49232_49599 = null;
var count__49233_49600 = (0);
var i__49234_49601 = (0);
while(true){
if((i__49234_49601 < count__49233_49600)){
var child_49602 = chunk__49232_49599.cljs$core$IIndexed$_nth$arity$2(null,i__49234_49601);
if(cljs.core.truth_(child_49602)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49602);


var G__49603 = seq__49230_49598;
var G__49604 = chunk__49232_49599;
var G__49605 = count__49233_49600;
var G__49606 = (i__49234_49601 + (1));
seq__49230_49598 = G__49603;
chunk__49232_49599 = G__49604;
count__49233_49600 = G__49605;
i__49234_49601 = G__49606;
continue;
} else {
var G__49607 = seq__49230_49598;
var G__49608 = chunk__49232_49599;
var G__49609 = count__49233_49600;
var G__49610 = (i__49234_49601 + (1));
seq__49230_49598 = G__49607;
chunk__49232_49599 = G__49608;
count__49233_49600 = G__49609;
i__49234_49601 = G__49610;
continue;
}
} else {
var temp__5753__auto___49611 = cljs.core.seq(seq__49230_49598);
if(temp__5753__auto___49611){
var seq__49230_49612__$1 = temp__5753__auto___49611;
if(cljs.core.chunked_seq_QMARK_(seq__49230_49612__$1)){
var c__4679__auto___49613 = cljs.core.chunk_first(seq__49230_49612__$1);
var G__49614 = cljs.core.chunk_rest(seq__49230_49612__$1);
var G__49615 = c__4679__auto___49613;
var G__49616 = cljs.core.count(c__4679__auto___49613);
var G__49617 = (0);
seq__49230_49598 = G__49614;
chunk__49232_49599 = G__49615;
count__49233_49600 = G__49616;
i__49234_49601 = G__49617;
continue;
} else {
var child_49618 = cljs.core.first(seq__49230_49612__$1);
if(cljs.core.truth_(child_49618)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49618);


var G__49619 = cljs.core.next(seq__49230_49612__$1);
var G__49620 = null;
var G__49621 = (0);
var G__49622 = (0);
seq__49230_49598 = G__49619;
chunk__49232_49599 = G__49620;
count__49233_49600 = G__49621;
i__49234_49601 = G__49622;
continue;
} else {
var G__49623 = cljs.core.next(seq__49230_49612__$1);
var G__49624 = null;
var G__49625 = (0);
var G__49626 = (0);
seq__49230_49598 = G__49623;
chunk__49232_49599 = G__49624;
count__49233_49600 = G__49625;
i__49234_49601 = G__49626;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49597);
}


var G__49627 = seq__49210_49592;
var G__49628 = chunk__49211_49593;
var G__49629 = count__49212_49594;
var G__49630 = (i__49213_49595 + (1));
seq__49210_49592 = G__49627;
chunk__49211_49593 = G__49628;
count__49212_49594 = G__49629;
i__49213_49595 = G__49630;
continue;
} else {
var temp__5753__auto___49631 = cljs.core.seq(seq__49210_49592);
if(temp__5753__auto___49631){
var seq__49210_49632__$1 = temp__5753__auto___49631;
if(cljs.core.chunked_seq_QMARK_(seq__49210_49632__$1)){
var c__4679__auto___49633 = cljs.core.chunk_first(seq__49210_49632__$1);
var G__49634 = cljs.core.chunk_rest(seq__49210_49632__$1);
var G__49635 = c__4679__auto___49633;
var G__49636 = cljs.core.count(c__4679__auto___49633);
var G__49637 = (0);
seq__49210_49592 = G__49634;
chunk__49211_49593 = G__49635;
count__49212_49594 = G__49636;
i__49213_49595 = G__49637;
continue;
} else {
var child_struct_49638 = cljs.core.first(seq__49210_49632__$1);
var children_49639 = shadow.dom.dom_node(child_struct_49638);
if(cljs.core.seq_QMARK_(children_49639)){
var seq__49236_49640 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49639));
var chunk__49238_49641 = null;
var count__49239_49642 = (0);
var i__49240_49643 = (0);
while(true){
if((i__49240_49643 < count__49239_49642)){
var child_49644 = chunk__49238_49641.cljs$core$IIndexed$_nth$arity$2(null,i__49240_49643);
if(cljs.core.truth_(child_49644)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49644);


var G__49645 = seq__49236_49640;
var G__49646 = chunk__49238_49641;
var G__49647 = count__49239_49642;
var G__49648 = (i__49240_49643 + (1));
seq__49236_49640 = G__49645;
chunk__49238_49641 = G__49646;
count__49239_49642 = G__49647;
i__49240_49643 = G__49648;
continue;
} else {
var G__49649 = seq__49236_49640;
var G__49650 = chunk__49238_49641;
var G__49651 = count__49239_49642;
var G__49652 = (i__49240_49643 + (1));
seq__49236_49640 = G__49649;
chunk__49238_49641 = G__49650;
count__49239_49642 = G__49651;
i__49240_49643 = G__49652;
continue;
}
} else {
var temp__5753__auto___49653__$1 = cljs.core.seq(seq__49236_49640);
if(temp__5753__auto___49653__$1){
var seq__49236_49654__$1 = temp__5753__auto___49653__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49236_49654__$1)){
var c__4679__auto___49655 = cljs.core.chunk_first(seq__49236_49654__$1);
var G__49656 = cljs.core.chunk_rest(seq__49236_49654__$1);
var G__49657 = c__4679__auto___49655;
var G__49658 = cljs.core.count(c__4679__auto___49655);
var G__49659 = (0);
seq__49236_49640 = G__49656;
chunk__49238_49641 = G__49657;
count__49239_49642 = G__49658;
i__49240_49643 = G__49659;
continue;
} else {
var child_49660 = cljs.core.first(seq__49236_49654__$1);
if(cljs.core.truth_(child_49660)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49660);


var G__49661 = cljs.core.next(seq__49236_49654__$1);
var G__49662 = null;
var G__49663 = (0);
var G__49664 = (0);
seq__49236_49640 = G__49661;
chunk__49238_49641 = G__49662;
count__49239_49642 = G__49663;
i__49240_49643 = G__49664;
continue;
} else {
var G__49665 = cljs.core.next(seq__49236_49654__$1);
var G__49666 = null;
var G__49667 = (0);
var G__49668 = (0);
seq__49236_49640 = G__49665;
chunk__49238_49641 = G__49666;
count__49239_49642 = G__49667;
i__49240_49643 = G__49668;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49639);
}


var G__49669 = cljs.core.next(seq__49210_49632__$1);
var G__49670 = null;
var G__49671 = (0);
var G__49672 = (0);
seq__49210_49592 = G__49669;
chunk__49211_49593 = G__49670;
count__49212_49594 = G__49671;
i__49213_49595 = G__49672;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__49243 = cljs.core.seq(node);
var chunk__49244 = null;
var count__49245 = (0);
var i__49246 = (0);
while(true){
if((i__49246 < count__49245)){
var n = chunk__49244.cljs$core$IIndexed$_nth$arity$2(null,i__49246);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49673 = seq__49243;
var G__49674 = chunk__49244;
var G__49675 = count__49245;
var G__49676 = (i__49246 + (1));
seq__49243 = G__49673;
chunk__49244 = G__49674;
count__49245 = G__49675;
i__49246 = G__49676;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49243);
if(temp__5753__auto__){
var seq__49243__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49243__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49243__$1);
var G__49677 = cljs.core.chunk_rest(seq__49243__$1);
var G__49678 = c__4679__auto__;
var G__49679 = cljs.core.count(c__4679__auto__);
var G__49680 = (0);
seq__49243 = G__49677;
chunk__49244 = G__49678;
count__49245 = G__49679;
i__49246 = G__49680;
continue;
} else {
var n = cljs.core.first(seq__49243__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49681 = cljs.core.next(seq__49243__$1);
var G__49682 = null;
var G__49683 = (0);
var G__49684 = (0);
seq__49243 = G__49681;
chunk__49244 = G__49682;
count__49245 = G__49683;
i__49246 = G__49684;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__49248 = arguments.length;
switch (G__49248) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__49250 = arguments.length;
switch (G__49250) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__49254 = arguments.length;
switch (G__49254) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49691 = arguments.length;
var i__4865__auto___49693 = (0);
while(true){
if((i__4865__auto___49693 < len__4864__auto___49691)){
args__4870__auto__.push((arguments[i__4865__auto___49693]));

var G__49694 = (i__4865__auto___49693 + (1));
i__4865__auto___49693 = G__49694;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__49256_49695 = cljs.core.seq(nodes);
var chunk__49257_49696 = null;
var count__49258_49697 = (0);
var i__49259_49698 = (0);
while(true){
if((i__49259_49698 < count__49258_49697)){
var node_49699 = chunk__49257_49696.cljs$core$IIndexed$_nth$arity$2(null,i__49259_49698);
fragment.appendChild(shadow.dom._to_dom(node_49699));


var G__49700 = seq__49256_49695;
var G__49701 = chunk__49257_49696;
var G__49702 = count__49258_49697;
var G__49703 = (i__49259_49698 + (1));
seq__49256_49695 = G__49700;
chunk__49257_49696 = G__49701;
count__49258_49697 = G__49702;
i__49259_49698 = G__49703;
continue;
} else {
var temp__5753__auto___49704 = cljs.core.seq(seq__49256_49695);
if(temp__5753__auto___49704){
var seq__49256_49705__$1 = temp__5753__auto___49704;
if(cljs.core.chunked_seq_QMARK_(seq__49256_49705__$1)){
var c__4679__auto___49706 = cljs.core.chunk_first(seq__49256_49705__$1);
var G__49708 = cljs.core.chunk_rest(seq__49256_49705__$1);
var G__49709 = c__4679__auto___49706;
var G__49710 = cljs.core.count(c__4679__auto___49706);
var G__49711 = (0);
seq__49256_49695 = G__49708;
chunk__49257_49696 = G__49709;
count__49258_49697 = G__49710;
i__49259_49698 = G__49711;
continue;
} else {
var node_49712 = cljs.core.first(seq__49256_49705__$1);
fragment.appendChild(shadow.dom._to_dom(node_49712));


var G__49713 = cljs.core.next(seq__49256_49705__$1);
var G__49714 = null;
var G__49715 = (0);
var G__49716 = (0);
seq__49256_49695 = G__49713;
chunk__49257_49696 = G__49714;
count__49258_49697 = G__49715;
i__49259_49698 = G__49716;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq49255){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49255));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__49264_49717 = cljs.core.seq(scripts);
var chunk__49265_49718 = null;
var count__49266_49719 = (0);
var i__49267_49720 = (0);
while(true){
if((i__49267_49720 < count__49266_49719)){
var vec__49274_49722 = chunk__49265_49718.cljs$core$IIndexed$_nth$arity$2(null,i__49267_49720);
var script_tag_49723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49274_49722,(0),null);
var script_body_49724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49274_49722,(1),null);
eval(script_body_49724);


var G__49725 = seq__49264_49717;
var G__49726 = chunk__49265_49718;
var G__49727 = count__49266_49719;
var G__49728 = (i__49267_49720 + (1));
seq__49264_49717 = G__49725;
chunk__49265_49718 = G__49726;
count__49266_49719 = G__49727;
i__49267_49720 = G__49728;
continue;
} else {
var temp__5753__auto___49729 = cljs.core.seq(seq__49264_49717);
if(temp__5753__auto___49729){
var seq__49264_49730__$1 = temp__5753__auto___49729;
if(cljs.core.chunked_seq_QMARK_(seq__49264_49730__$1)){
var c__4679__auto___49731 = cljs.core.chunk_first(seq__49264_49730__$1);
var G__49732 = cljs.core.chunk_rest(seq__49264_49730__$1);
var G__49733 = c__4679__auto___49731;
var G__49734 = cljs.core.count(c__4679__auto___49731);
var G__49735 = (0);
seq__49264_49717 = G__49732;
chunk__49265_49718 = G__49733;
count__49266_49719 = G__49734;
i__49267_49720 = G__49735;
continue;
} else {
var vec__49277_49736 = cljs.core.first(seq__49264_49730__$1);
var script_tag_49737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49277_49736,(0),null);
var script_body_49738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49277_49736,(1),null);
eval(script_body_49738);


var G__49739 = cljs.core.next(seq__49264_49730__$1);
var G__49740 = null;
var G__49741 = (0);
var G__49742 = (0);
seq__49264_49717 = G__49739;
chunk__49265_49718 = G__49740;
count__49266_49719 = G__49741;
i__49267_49720 = G__49742;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__49280){
var vec__49281 = p__49280;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49281,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49281,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__49289 = arguments.length;
switch (G__49289) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__49294 = cljs.core.seq(style_keys);
var chunk__49295 = null;
var count__49296 = (0);
var i__49297 = (0);
while(true){
if((i__49297 < count__49296)){
var it = chunk__49295.cljs$core$IIndexed$_nth$arity$2(null,i__49297);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49744 = seq__49294;
var G__49745 = chunk__49295;
var G__49746 = count__49296;
var G__49747 = (i__49297 + (1));
seq__49294 = G__49744;
chunk__49295 = G__49745;
count__49296 = G__49746;
i__49297 = G__49747;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49294);
if(temp__5753__auto__){
var seq__49294__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49294__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49294__$1);
var G__49748 = cljs.core.chunk_rest(seq__49294__$1);
var G__49749 = c__4679__auto__;
var G__49750 = cljs.core.count(c__4679__auto__);
var G__49751 = (0);
seq__49294 = G__49748;
chunk__49295 = G__49749;
count__49296 = G__49750;
i__49297 = G__49751;
continue;
} else {
var it = cljs.core.first(seq__49294__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49752 = cljs.core.next(seq__49294__$1);
var G__49753 = null;
var G__49754 = (0);
var G__49755 = (0);
seq__49294 = G__49752;
chunk__49295 = G__49753;
count__49296 = G__49754;
i__49297 = G__49755;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k49299,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__49303 = k49299;
var G__49303__$1 = (((G__49303 instanceof cljs.core.Keyword))?G__49303.fqn:null);
switch (G__49303__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49299,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__49304){
var vec__49305 = p__49304;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49305,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49305,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49298){
var self__ = this;
var G__49298__$1 = this;
return (new cljs.core.RecordIter((0),G__49298__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49300,other49301){
var self__ = this;
var this49300__$1 = this;
return (((!((other49301 == null)))) && ((((this49300__$1.constructor === other49301.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49300__$1.x,other49301.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49300__$1.y,other49301.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49300__$1.__extmap,other49301.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k49299){
var self__ = this;
var this__4509__auto____$1 = this;
var G__49310 = k49299;
var G__49310__$1 = (((G__49310 instanceof cljs.core.Keyword))?G__49310.fqn:null);
switch (G__49310__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49299);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__49298){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__49313 = cljs.core.keyword_identical_QMARK_;
var expr__49314 = k__4511__auto__;
if(cljs.core.truth_((pred__49313.cljs$core$IFn$_invoke$arity$2 ? pred__49313.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__49314) : pred__49313.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__49314)))){
return (new shadow.dom.Coordinate(G__49298,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49313.cljs$core$IFn$_invoke$arity$2 ? pred__49313.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__49314) : pred__49313.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__49314)))){
return (new shadow.dom.Coordinate(self__.x,G__49298,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__49298),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__49298){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__49298,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__49302){
var extmap__4542__auto__ = (function (){var G__49332 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49302,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__49302)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49332);
} else {
return G__49332;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__49302),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__49302),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k49336,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__49343 = k49336;
var G__49343__$1 = (((G__49343 instanceof cljs.core.Keyword))?G__49343.fqn:null);
switch (G__49343__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49336,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__49344){
var vec__49345 = p__49344;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49345,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49345,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49335){
var self__ = this;
var G__49335__$1 = this;
return (new cljs.core.RecordIter((0),G__49335__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49337,other49338){
var self__ = this;
var this49337__$1 = this;
return (((!((other49338 == null)))) && ((((this49337__$1.constructor === other49338.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49337__$1.w,other49338.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49337__$1.h,other49338.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49337__$1.__extmap,other49338.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k49336){
var self__ = this;
var this__4509__auto____$1 = this;
var G__49348 = k49336;
var G__49348__$1 = (((G__49348 instanceof cljs.core.Keyword))?G__49348.fqn:null);
switch (G__49348__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49336);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__49335){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__49349 = cljs.core.keyword_identical_QMARK_;
var expr__49350 = k__4511__auto__;
if(cljs.core.truth_((pred__49349.cljs$core$IFn$_invoke$arity$2 ? pred__49349.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__49350) : pred__49349.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__49350)))){
return (new shadow.dom.Size(G__49335,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49349.cljs$core$IFn$_invoke$arity$2 ? pred__49349.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__49350) : pred__49349.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__49350)))){
return (new shadow.dom.Size(self__.w,G__49335,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__49335),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__49335){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__49335,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__49339){
var extmap__4542__auto__ = (function (){var G__49352 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49339,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__49339)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49352);
} else {
return G__49352;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__49339),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__49339),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__49770 = (i + (1));
var G__49771 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49770;
ret = G__49771;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49381){
var vec__49382 = p__49381;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49382,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49382,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__49387 = arguments.length;
switch (G__49387) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49773 = ps;
var G__49774 = (i + (1));
el__$1 = G__49773;
i = G__49774;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__49453 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49453,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49453,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49453,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__49456_49775 = cljs.core.seq(props);
var chunk__49457_49776 = null;
var count__49458_49777 = (0);
var i__49459_49778 = (0);
while(true){
if((i__49459_49778 < count__49458_49777)){
var vec__49467_49779 = chunk__49457_49776.cljs$core$IIndexed$_nth$arity$2(null,i__49459_49778);
var k_49780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49467_49779,(0),null);
var v_49781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49467_49779,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_49780);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49780),v_49781);


var G__49782 = seq__49456_49775;
var G__49783 = chunk__49457_49776;
var G__49784 = count__49458_49777;
var G__49785 = (i__49459_49778 + (1));
seq__49456_49775 = G__49782;
chunk__49457_49776 = G__49783;
count__49458_49777 = G__49784;
i__49459_49778 = G__49785;
continue;
} else {
var temp__5753__auto___49786 = cljs.core.seq(seq__49456_49775);
if(temp__5753__auto___49786){
var seq__49456_49787__$1 = temp__5753__auto___49786;
if(cljs.core.chunked_seq_QMARK_(seq__49456_49787__$1)){
var c__4679__auto___49788 = cljs.core.chunk_first(seq__49456_49787__$1);
var G__49789 = cljs.core.chunk_rest(seq__49456_49787__$1);
var G__49790 = c__4679__auto___49788;
var G__49791 = cljs.core.count(c__4679__auto___49788);
var G__49792 = (0);
seq__49456_49775 = G__49789;
chunk__49457_49776 = G__49790;
count__49458_49777 = G__49791;
i__49459_49778 = G__49792;
continue;
} else {
var vec__49482_49793 = cljs.core.first(seq__49456_49787__$1);
var k_49794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49482_49793,(0),null);
var v_49795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49482_49793,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_49794);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49794),v_49795);


var G__49796 = cljs.core.next(seq__49456_49787__$1);
var G__49797 = null;
var G__49798 = (0);
var G__49799 = (0);
seq__49456_49775 = G__49796;
chunk__49457_49776 = G__49797;
count__49458_49777 = G__49798;
i__49459_49778 = G__49799;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__49487 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49487,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49487,(1),null);
var seq__49490_49800 = cljs.core.seq(node_children);
var chunk__49492_49801 = null;
var count__49493_49802 = (0);
var i__49494_49803 = (0);
while(true){
if((i__49494_49803 < count__49493_49802)){
var child_struct_49804 = chunk__49492_49801.cljs$core$IIndexed$_nth$arity$2(null,i__49494_49803);
if((!((child_struct_49804 == null)))){
if(typeof child_struct_49804 === 'string'){
var text_49805 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49805),child_struct_49804].join(''));
} else {
var children_49806 = shadow.dom.svg_node(child_struct_49804);
if(cljs.core.seq_QMARK_(children_49806)){
var seq__49508_49808 = cljs.core.seq(children_49806);
var chunk__49510_49809 = null;
var count__49511_49810 = (0);
var i__49512_49811 = (0);
while(true){
if((i__49512_49811 < count__49511_49810)){
var child_49812 = chunk__49510_49809.cljs$core$IIndexed$_nth$arity$2(null,i__49512_49811);
if(cljs.core.truth_(child_49812)){
node.appendChild(child_49812);


var G__49813 = seq__49508_49808;
var G__49814 = chunk__49510_49809;
var G__49815 = count__49511_49810;
var G__49816 = (i__49512_49811 + (1));
seq__49508_49808 = G__49813;
chunk__49510_49809 = G__49814;
count__49511_49810 = G__49815;
i__49512_49811 = G__49816;
continue;
} else {
var G__49817 = seq__49508_49808;
var G__49818 = chunk__49510_49809;
var G__49819 = count__49511_49810;
var G__49820 = (i__49512_49811 + (1));
seq__49508_49808 = G__49817;
chunk__49510_49809 = G__49818;
count__49511_49810 = G__49819;
i__49512_49811 = G__49820;
continue;
}
} else {
var temp__5753__auto___49821 = cljs.core.seq(seq__49508_49808);
if(temp__5753__auto___49821){
var seq__49508_49822__$1 = temp__5753__auto___49821;
if(cljs.core.chunked_seq_QMARK_(seq__49508_49822__$1)){
var c__4679__auto___49823 = cljs.core.chunk_first(seq__49508_49822__$1);
var G__49824 = cljs.core.chunk_rest(seq__49508_49822__$1);
var G__49825 = c__4679__auto___49823;
var G__49826 = cljs.core.count(c__4679__auto___49823);
var G__49827 = (0);
seq__49508_49808 = G__49824;
chunk__49510_49809 = G__49825;
count__49511_49810 = G__49826;
i__49512_49811 = G__49827;
continue;
} else {
var child_49828 = cljs.core.first(seq__49508_49822__$1);
if(cljs.core.truth_(child_49828)){
node.appendChild(child_49828);


var G__49829 = cljs.core.next(seq__49508_49822__$1);
var G__49830 = null;
var G__49831 = (0);
var G__49832 = (0);
seq__49508_49808 = G__49829;
chunk__49510_49809 = G__49830;
count__49511_49810 = G__49831;
i__49512_49811 = G__49832;
continue;
} else {
var G__49833 = cljs.core.next(seq__49508_49822__$1);
var G__49834 = null;
var G__49835 = (0);
var G__49836 = (0);
seq__49508_49808 = G__49833;
chunk__49510_49809 = G__49834;
count__49511_49810 = G__49835;
i__49512_49811 = G__49836;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49806);
}
}


var G__49837 = seq__49490_49800;
var G__49838 = chunk__49492_49801;
var G__49839 = count__49493_49802;
var G__49840 = (i__49494_49803 + (1));
seq__49490_49800 = G__49837;
chunk__49492_49801 = G__49838;
count__49493_49802 = G__49839;
i__49494_49803 = G__49840;
continue;
} else {
var G__49841 = seq__49490_49800;
var G__49842 = chunk__49492_49801;
var G__49843 = count__49493_49802;
var G__49844 = (i__49494_49803 + (1));
seq__49490_49800 = G__49841;
chunk__49492_49801 = G__49842;
count__49493_49802 = G__49843;
i__49494_49803 = G__49844;
continue;
}
} else {
var temp__5753__auto___49845 = cljs.core.seq(seq__49490_49800);
if(temp__5753__auto___49845){
var seq__49490_49846__$1 = temp__5753__auto___49845;
if(cljs.core.chunked_seq_QMARK_(seq__49490_49846__$1)){
var c__4679__auto___49847 = cljs.core.chunk_first(seq__49490_49846__$1);
var G__49848 = cljs.core.chunk_rest(seq__49490_49846__$1);
var G__49849 = c__4679__auto___49847;
var G__49850 = cljs.core.count(c__4679__auto___49847);
var G__49851 = (0);
seq__49490_49800 = G__49848;
chunk__49492_49801 = G__49849;
count__49493_49802 = G__49850;
i__49494_49803 = G__49851;
continue;
} else {
var child_struct_49852 = cljs.core.first(seq__49490_49846__$1);
if((!((child_struct_49852 == null)))){
if(typeof child_struct_49852 === 'string'){
var text_49853 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49853),child_struct_49852].join(''));
} else {
var children_49854 = shadow.dom.svg_node(child_struct_49852);
if(cljs.core.seq_QMARK_(children_49854)){
var seq__49514_49855 = cljs.core.seq(children_49854);
var chunk__49516_49856 = null;
var count__49517_49857 = (0);
var i__49518_49858 = (0);
while(true){
if((i__49518_49858 < count__49517_49857)){
var child_49859 = chunk__49516_49856.cljs$core$IIndexed$_nth$arity$2(null,i__49518_49858);
if(cljs.core.truth_(child_49859)){
node.appendChild(child_49859);


var G__49860 = seq__49514_49855;
var G__49861 = chunk__49516_49856;
var G__49862 = count__49517_49857;
var G__49863 = (i__49518_49858 + (1));
seq__49514_49855 = G__49860;
chunk__49516_49856 = G__49861;
count__49517_49857 = G__49862;
i__49518_49858 = G__49863;
continue;
} else {
var G__49864 = seq__49514_49855;
var G__49865 = chunk__49516_49856;
var G__49866 = count__49517_49857;
var G__49867 = (i__49518_49858 + (1));
seq__49514_49855 = G__49864;
chunk__49516_49856 = G__49865;
count__49517_49857 = G__49866;
i__49518_49858 = G__49867;
continue;
}
} else {
var temp__5753__auto___49868__$1 = cljs.core.seq(seq__49514_49855);
if(temp__5753__auto___49868__$1){
var seq__49514_49869__$1 = temp__5753__auto___49868__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49514_49869__$1)){
var c__4679__auto___49870 = cljs.core.chunk_first(seq__49514_49869__$1);
var G__49871 = cljs.core.chunk_rest(seq__49514_49869__$1);
var G__49872 = c__4679__auto___49870;
var G__49873 = cljs.core.count(c__4679__auto___49870);
var G__49874 = (0);
seq__49514_49855 = G__49871;
chunk__49516_49856 = G__49872;
count__49517_49857 = G__49873;
i__49518_49858 = G__49874;
continue;
} else {
var child_49875 = cljs.core.first(seq__49514_49869__$1);
if(cljs.core.truth_(child_49875)){
node.appendChild(child_49875);


var G__49876 = cljs.core.next(seq__49514_49869__$1);
var G__49877 = null;
var G__49878 = (0);
var G__49879 = (0);
seq__49514_49855 = G__49876;
chunk__49516_49856 = G__49877;
count__49517_49857 = G__49878;
i__49518_49858 = G__49879;
continue;
} else {
var G__49880 = cljs.core.next(seq__49514_49869__$1);
var G__49881 = null;
var G__49882 = (0);
var G__49883 = (0);
seq__49514_49855 = G__49880;
chunk__49516_49856 = G__49881;
count__49517_49857 = G__49882;
i__49518_49858 = G__49883;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49854);
}
}


var G__49884 = cljs.core.next(seq__49490_49846__$1);
var G__49885 = null;
var G__49886 = (0);
var G__49887 = (0);
seq__49490_49800 = G__49884;
chunk__49492_49801 = G__49885;
count__49493_49802 = G__49886;
i__49494_49803 = G__49887;
continue;
} else {
var G__49888 = cljs.core.next(seq__49490_49846__$1);
var G__49889 = null;
var G__49890 = (0);
var G__49891 = (0);
seq__49490_49800 = G__49888;
chunk__49492_49801 = G__49889;
count__49493_49802 = G__49890;
i__49494_49803 = G__49891;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49892 = arguments.length;
var i__4865__auto___49893 = (0);
while(true){
if((i__4865__auto___49893 < len__4864__auto___49892)){
args__4870__auto__.push((arguments[i__4865__auto___49893]));

var G__49894 = (i__4865__auto___49893 + (1));
i__4865__auto___49893 = G__49894;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq49520){
var G__49521 = cljs.core.first(seq49520);
var seq49520__$1 = cljs.core.next(seq49520);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49521,seq49520__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__49523 = arguments.length;
switch (G__49523) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__45794__auto___49897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = (function (state_49528){
var state_val_49529 = (state_49528[(1)]);
if((state_val_49529 === (1))){
var state_49528__$1 = state_49528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49528__$1,(2),once_or_cleanup);
} else {
if((state_val_49529 === (2))){
var inst_49525 = (state_49528[(2)]);
var inst_49526 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_49528__$1 = (function (){var statearr_49530 = state_49528;
(statearr_49530[(7)] = inst_49525);

return statearr_49530;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49528__$1,inst_49526);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__45721__auto__ = null;
var shadow$dom$state_machine__45721__auto____0 = (function (){
var statearr_49531 = [null,null,null,null,null,null,null,null];
(statearr_49531[(0)] = shadow$dom$state_machine__45721__auto__);

(statearr_49531[(1)] = (1));

return statearr_49531;
});
var shadow$dom$state_machine__45721__auto____1 = (function (state_49528){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_49528);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e49532){var ex__45724__auto__ = e49532;
var statearr_49533_49898 = state_49528;
(statearr_49533_49898[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_49528[(4)]))){
var statearr_49534_49899 = state_49528;
(statearr_49534_49899[(1)] = cljs.core.first((state_49528[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49900 = state_49528;
state_49528 = G__49900;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
shadow$dom$state_machine__45721__auto__ = function(state_49528){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45721__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45721__auto____1.call(this,state_49528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45721__auto____0;
shadow$dom$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45721__auto____1;
return shadow$dom$state_machine__45721__auto__;
})()
})();
var state__45796__auto__ = (function (){var statearr_49535 = f__45795__auto__();
(statearr_49535[(6)] = c__45794__auto___49897);

return statearr_49535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
