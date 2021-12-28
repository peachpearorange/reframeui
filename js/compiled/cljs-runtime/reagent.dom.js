goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__43430 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__43431 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__43431);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__43432 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__43433 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__43433);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__43432);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__43430);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__43435 = arguments.length;
switch (G__43435) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__43436 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43436,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43436,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__43439_43461 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__43440_43462 = null;
var count__43441_43463 = (0);
var i__43442_43464 = (0);
while(true){
if((i__43442_43464 < count__43441_43463)){
var vec__43449_43466 = chunk__43440_43462.cljs$core$IIndexed$_nth$arity$2(null,i__43442_43464);
var container_43467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43449_43466,(0),null);
var comp_43468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43449_43466,(1),null);
reagent.dom.re_render_component(comp_43468,container_43467);


var G__43469 = seq__43439_43461;
var G__43470 = chunk__43440_43462;
var G__43471 = count__43441_43463;
var G__43472 = (i__43442_43464 + (1));
seq__43439_43461 = G__43469;
chunk__43440_43462 = G__43470;
count__43441_43463 = G__43471;
i__43442_43464 = G__43472;
continue;
} else {
var temp__5753__auto___43473 = cljs.core.seq(seq__43439_43461);
if(temp__5753__auto___43473){
var seq__43439_43474__$1 = temp__5753__auto___43473;
if(cljs.core.chunked_seq_QMARK_(seq__43439_43474__$1)){
var c__4679__auto___43475 = cljs.core.chunk_first(seq__43439_43474__$1);
var G__43476 = cljs.core.chunk_rest(seq__43439_43474__$1);
var G__43477 = c__4679__auto___43475;
var G__43478 = cljs.core.count(c__4679__auto___43475);
var G__43479 = (0);
seq__43439_43461 = G__43476;
chunk__43440_43462 = G__43477;
count__43441_43463 = G__43478;
i__43442_43464 = G__43479;
continue;
} else {
var vec__43452_43480 = cljs.core.first(seq__43439_43474__$1);
var container_43481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43452_43480,(0),null);
var comp_43482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43452_43480,(1),null);
reagent.dom.re_render_component(comp_43482,container_43481);


var G__43483 = cljs.core.next(seq__43439_43474__$1);
var G__43484 = null;
var G__43485 = (0);
var G__43486 = (0);
seq__43439_43461 = G__43483;
chunk__43440_43462 = G__43484;
count__43441_43463 = G__43485;
i__43442_43464 = G__43486;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
