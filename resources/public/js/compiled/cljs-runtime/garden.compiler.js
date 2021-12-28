goog.provide('garden.compiler');
/**
 * The current compiler flags.
 */
garden.compiler._STAR_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158),true,new cljs.core.Keyword(null,"preamble","preamble",1641040241),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"output-to","output-to",-965533968),null,new cljs.core.Keyword(null,"vendors","vendors",-153040496),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755),new cljs.core.Keyword(null,"default","default",-1987822328)], null)], null);
/**
 * Retun a function to call when rendering a media expression.
 *   The returned function accepts two arguments: the media
 *   expression being evaluated and the current media expression context.
 *   Both arguments are maps. This is used to provide semantics for nested
 *   media queries.  Also used to support feature queries.
 */
garden.compiler.media_expression_behavior = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"merge","merge",-1804319409),(function (expr,context){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([context,expr], 0));
}),new cljs.core.Keyword(null,"default","default",-1987822328),(function (expr,_){
return expr;
})], null);
/**
 * The current parent selector context.
 */
garden.compiler._STAR_selector_context_STAR_ = null;
/**
 * The current media query context.
 */
garden.compiler._STAR_media_query_context_STAR_ = null;
/**
 * Return the current list of browser vendors specified in `*flags*`.
 */
garden.compiler.vendors = (function garden$compiler$vendors(){
return cljs.core.seq(new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(garden.compiler._STAR_flags_STAR_));
});
/**
 * Return the current list of auto-prefixed properties specified in `*flags*`.
 */
garden.compiler.auto_prefixed_properties = (function garden$compiler$auto_prefixed_properties(){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466).cljs$core$IFn$_invoke$arity$1(garden.compiler._STAR_flags_STAR_)));
});
garden.compiler.auto_prefix_QMARK_ = (function garden$compiler$auto_prefix_QMARK_(property){
return cljs.core.contains_QMARK_(garden.compiler.auto_prefixed_properties(),property);
});
garden.compiler.top_level_expression_QMARK_ = (function garden$compiler$top_level_expression_QMARK_(x){
var or__4253__auto__ = (garden.util.rule_QMARK_.cljs$core$IFn$_invoke$arity$1 ? garden.util.rule_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : garden.util.rule_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((garden.util.at_import_QMARK_(x)) || (((garden.util.at_media_QMARK_(x)) || (((garden.util.at_supports_QMARK_(x)) || (garden.util.at_keyframes_QMARK_(x)))))));
}
});
/**
 * Return a vector of [(filter pred coll) (remove pred coll)].
 */
garden.compiler.divide_vec = (function garden$compiler$divide_vec(pred,coll){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove)(pred,coll);
});

/**
 * @interface
 */
garden.compiler.IExpandable = function(){};

var garden$compiler$IExpandable$expand$dyn_55887 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (garden.compiler.expand[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (garden.compiler.expand["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IExpandable.expand",this$);
}
}
});
/**
 * Return a list containing the expanded form of `this`.
 */
garden.compiler.expand = (function garden$compiler$expand(this$){
if((((!((this$ == null)))) && ((!((this$.garden$compiler$IExpandable$expand$arity$1 == null)))))){
return this$.garden$compiler$IExpandable$expand$arity$1(this$);
} else {
return garden$compiler$IExpandable$expand$dyn_55887(this$);
}
});

/**
 * Like flatten but only affects seqs.
 */
garden.compiler.expand_seqs = (function garden$compiler$expand_seqs(coll){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x){
if(cljs.core.seq_QMARK_(x)){
return (garden.compiler.expand_seqs.cljs$core$IFn$_invoke$arity$1 ? garden.compiler.expand_seqs.cljs$core$IFn$_invoke$arity$1(x) : garden.compiler.expand_seqs.call(null,x));
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0));
});
garden.compiler.expand_declaration_1 = (function garden$compiler$expand_declaration_1(declaration){
if(cljs.core.map_QMARK_(declaration)){
} else {
throw (new Error("Assert failed: (map? declaration)"));
}

var prefix = (function (p1__55773_SHARP_,p2__55774_SHARP_){
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__55773_SHARP_,"-",p2__55774_SHARP_], 0));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__55775){
var vec__55776 = p__55775;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55776,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55776,(1),null);
if(garden.util.hash_map_QMARK_(v)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m1,p__55779){
var vec__55780 = p__55779;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55780,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55780,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m1,prefix(k,k1),v1);
}),m,(garden.compiler.expand_declaration_1.cljs$core$IFn$_invoke$arity$1 ? garden.compiler.expand_declaration_1.cljs$core$IFn$_invoke$arity$1(v) : garden.compiler.expand_declaration_1.call(null,v)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,garden.util.to_str(k),v);
}
}),cljs.core.empty(declaration),declaration);
});
garden.compiler.expand_declaration = (function garden$compiler$expand_declaration(declaration){
if(cljs.core.empty_QMARK_(declaration)){
return declaration;
} else {
return cljs.core.with_meta(garden.compiler.expand_declaration_1(declaration),cljs.core.meta(declaration));
}
});
/**
 * Matches a single "&" or "&" follow by one or more
 *   non-whitespace characters.
 */
garden.compiler.parent_selector_re = /^&(?:\S+)?$/;
/**
 * Extract the selector portion of a parent selector reference.
 */
garden.compiler.extract_reference = (function garden$compiler$extract_reference(selector){
var temp__5753__auto__ = cljs.core.re_find(garden.compiler.parent_selector_re,garden.util.to_str(cljs.core.last(selector)));
if(cljs.core.truth_(temp__5753__auto__)){
var reference = temp__5753__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(reference));
} else {
return null;
}
});
garden.compiler.expand_selector_reference = (function garden$compiler$expand_selector_reference(selector){
var temp__5751__auto__ = garden.compiler.extract_reference(selector);
if(cljs.core.truth_(temp__5751__auto__)){
var reference = temp__5751__auto__;
var parent = cljs.core.butlast(selector);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(parent),(new cljs.core.List(null,garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(parent),reference], 0)),null,(1),null)));
} else {
return selector;
}
});
garden.compiler.expand_selector = (function garden$compiler$expand_selector(selector,parent){
var selector__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.selectors.css_selector,selector);
var selector__$2 = ((cljs.core.seq(parent))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.flatten,garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent,selector__$1], 0))):cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,selector__$1));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.expand_selector_reference,selector__$2);
});
garden.compiler.expand_rule = (function garden$compiler$expand_rule(rule){
var vec__55783 = cljs.core.split_with(garden.selectors.selector_QMARK_,rule);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55783,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55783,(1),null);
var selector__$1 = garden.compiler.expand_selector(selector,garden.compiler._STAR_selector_context_STAR_);
var children__$1 = garden.compiler.expand(children);
var vec__55786 = garden.compiler.divide_vec(garden.util.declaration_QMARK_,children__$1);
var declarations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55786,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55786,(1),null);
var ys = (function (){var _STAR_selector_context_STAR__orig_val__55789 = garden.compiler._STAR_selector_context_STAR_;
var _STAR_selector_context_STAR__temp_val__55790 = ((cljs.core.seq(selector__$1))?selector__$1:garden.compiler._STAR_selector_context_STAR_);
(garden.compiler._STAR_selector_context_STAR_ = _STAR_selector_context_STAR__temp_val__55790);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs], 0)));
}finally {(garden.compiler._STAR_selector_context_STAR_ = _STAR_selector_context_STAR__orig_val__55789);
}})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ys,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector__$1], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([declarations], 0))));
});
if((typeof garden !== 'undefined') && (typeof garden.compiler !== 'undefined') && (typeof garden.compiler.expand_at_rule !== 'undefined')){
} else {
garden.compiler.expand_at_rule = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__55791 = cljs.core.get_global_hierarchy;
return (fexpr__55791.cljs$core$IFn$_invoke$arity$0 ? fexpr__55791.cljs$core$IFn$_invoke$arity$0() : fexpr__55791.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("garden.compiler","expand-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (at_rule){
return (new cljs.core.List(null,at_rule,null,(1),null));
}));
garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__55792){
var map__55793 = p__55792;
var map__55793__$1 = cljs.core.__destructure_map(map__55793);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55793__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__55794 = value;
var map__55794__$1 = cljs.core.__destructure_map(map__55794);
var identifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55794__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55794__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
return (new cljs.core.List(null,(new garden.types.CSSAtRule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),garden.util.to_str(identifier),new cljs.core.Keyword(null,"frames","frames",1765687497),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frames], 0))], null),null,null,null)),null,(1),null));
}));
garden.compiler.expand_media_query_expression = (function garden$compiler$expand_media_query_expression(expression){
var temp__5751__auto__ = (function (){var G__55795 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(garden.compiler._STAR_flags_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755)], null));
return (garden.compiler.media_expression_behavior.cljs$core$IFn$_invoke$arity$1 ? garden.compiler.media_expression_behavior.cljs$core$IFn$_invoke$arity$1(G__55795) : garden.compiler.media_expression_behavior.call(null,G__55795));
})();
if(cljs.core.truth_(temp__5751__auto__)){
var f = temp__5751__auto__;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(expression,garden.compiler._STAR_media_query_context_STAR_) : f.call(null,expression,garden.compiler._STAR_media_query_context_STAR_));
} else {
return expression;
}
});
garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__55796){
var map__55797 = p__55796;
var map__55797__$1 = cljs.core.__destructure_map(map__55797);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55797__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__55798 = value;
var map__55798__$1 = cljs.core.__destructure_map(map__55798);
var media_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55798__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55798__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var media_queries__$1 = garden.compiler.expand_media_query_expression(media_queries);
var xs = (function (){var _STAR_media_query_context_STAR__orig_val__55802 = garden.compiler._STAR_media_query_context_STAR_;
var _STAR_media_query_context_STAR__temp_val__55803 = media_queries__$1;
(garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR__temp_val__55803);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.expand(rules)], 0)));
}finally {(garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR__orig_val__55802);
}})();
var vec__55799 = garden.compiler.divide_vec(garden.util.at_media_QMARK_,xs);
var subqueries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55799,(0),null);
var rules__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55799,(1),null);
return cljs.core.cons((new garden.types.CSSAtRule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries__$1,new cljs.core.Keyword(null,"rules","rules",1198912366),rules__$1], null),null,null,null)),subqueries);
}));
garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"feature","feature",27242652),(function (p__55804){
var map__55805 = p__55804;
var map__55805__$1 = cljs.core.__destructure_map(map__55805);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55805__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__55806 = value;
var map__55806__$1 = cljs.core.__destructure_map(map__55806);
var feature_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55806__$1,new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408));
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55806__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var feature_queries__$1 = garden.compiler.expand_media_query_expression(feature_queries);
var xs = (function (){var _STAR_media_query_context_STAR__orig_val__55810 = garden.compiler._STAR_media_query_context_STAR_;
var _STAR_media_query_context_STAR__temp_val__55811 = feature_queries__$1;
(garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR__temp_val__55811);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.expand(rules)], 0)));
}finally {(garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR__orig_val__55810);
}})();
var vec__55807 = garden.compiler.divide_vec(garden.util.at_supports_QMARK_,xs);
var subqueries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55807,(0),null);
var rules__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55807,(1),null);
return cljs.core.cons((new garden.types.CSSAtRule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries__$1,new cljs.core.Keyword(null,"rules","rules",1198912366),rules__$1], null),null,null,null)),subqueries);
}));
garden.compiler.expand_stylesheet = (function garden$compiler$expand_stylesheet(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.expand,garden.compiler.expand(xs)));
});
(garden.compiler.IExpandable["null"] = true);

(garden.compiler.expand["null"] = (function (this$){
return null;
}));

(cljs.core.IndexedSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IndexedSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
}));

(cljs.core.LazySeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
}));

(cljs.core.NodeSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.NodeSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
}));

(cljs.core.BlackNode.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.BlackNode.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule(this$__$1);
}));

(cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
}));

(cljs.core.ChunkedSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ChunkedSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
}));

(cljs.core.Cons.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
}));

(cljs.core.RSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.RSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
}));

(garden.types.CSSFunction.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(garden.types.CSSFunction.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,this$__$1,null,(1),null));
}));

(cljs.core.PersistentHashMap.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,garden.compiler.expand_declaration(this$__$1),null,(1),null));
}));

(cljs.core.ArrayNodeSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ArrayNodeSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
}));

(cljs.core.Subvec.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule(this$__$1);
}));

(garden.compiler.IExpandable["_"] = true);

(garden.compiler.expand["_"] = (function (this$){
return (new cljs.core.List(null,this$,null,(1),null));
}));

(cljs.core.PersistentTreeMap.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,garden.compiler.expand_declaration(this$__$1),null,(1),null));
}));

(cljs.core.ChunkedCons.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ChunkedCons.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
}));

(garden.types.CSSAtRule.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(garden.types.CSSAtRule.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_at_rule.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(cljs.core.RedNode.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.RedNode.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule(this$__$1);
}));

(cljs.core.PersistentVector.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule(this$__$1);
}));

(cljs.core.PersistentArrayMap.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,garden.compiler.expand_declaration(this$__$1),null,(1),null));
}));

(garden.color.CSSColor.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(garden.color.CSSColor.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,this$__$1,null,(1),null));
}));

(cljs.core.List.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
}));

/**
 * @interface
 */
garden.compiler.CSSRenderer = function(){};

var garden$compiler$CSSRenderer$render_css$dyn_55896 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (garden.compiler.render_css[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (garden.compiler.render_css["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("CSSRenderer.render-css",this$);
}
}
});
/**
 * Convert a Clojure data type in to a string of CSS.
 */
garden.compiler.render_css = (function garden$compiler$render_css(this$){
if((((!((this$ == null)))) && ((!((this$.garden$compiler$CSSRenderer$render_css$arity$1 == null)))))){
return this$.garden$compiler$CSSRenderer$render_css$arity$1(this$);
} else {
return garden$compiler$CSSRenderer$render_css$dyn_55896(this$);
}
});

garden.compiler.comma = ", ";
garden.compiler.colon = ": ";
garden.compiler.semicolon = ";";
garden.compiler.l_brace = " {\n";
garden.compiler.r_brace = "\n}";
garden.compiler.l_brace_1 = " {\n\n";
garden.compiler.r_brace_1 = "\n\n}";
garden.compiler.rule_sep = "\n\n";
garden.compiler.indent = "  ";
/**
 * Return a space separated list of values.
 */
garden.compiler.space_separated_list = (function garden$compiler$space_separated_list(var_args){
var G__55813 = arguments.length;
switch (G__55813) {
case 1:
return garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,xs);
}));

(garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
}));

(garden.compiler.space_separated_list.cljs$lang$maxFixedArity = 2);

/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.compiler.comma_separated_list = (function garden$compiler$comma_separated_list(var_args){
var G__55815 = arguments.length;
switch (G__55815) {
case 1:
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,xs);
}));

(garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
var ys = (function (){var iter__4652__auto__ = (function garden$compiler$iter__55816(s__55817){
return (new cljs.core.LazySeq(null,(function (){
var s__55817__$1 = s__55817;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__55817__$1);
if(temp__5753__auto__){
var s__55817__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55817__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__55817__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__55819 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__55818 = (0);
while(true){
if((i__55818 < size__4651__auto__)){
var x = cljs.core._nth(c__4650__auto__,i__55818);
cljs.core.chunk_append(b__55819,((cljs.core.sequential_QMARK_(x))?garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2(f,x):(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))));

var G__55899 = (i__55818 + (1));
i__55818 = G__55899;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55819),garden$compiler$iter__55816(cljs.core.chunk_rest(s__55817__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55819),null);
}
} else {
var x = cljs.core.first(s__55817__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2(f,x):(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))),garden$compiler$iter__55816(cljs.core.rest(s__55817__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(garden.compiler.comma,ys);
}));

(garden.compiler.comma_separated_list.cljs$lang$maxFixedArity = 2);

garden.compiler.rule_join = (function garden$compiler$rule_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(garden.compiler.rule_sep,xs);
});
/**
 * Match the start of a line if the characters immediately
 *   after it are spaces or used in a CSS id (#), class (.), or tag name.
 */
garden.compiler.indent_loc_re = (new RegExp("(?=[ A-Za-z#.}-]+)^","gm"));
garden.compiler.indent_str = (function garden$compiler$indent_str(s){
return s.replace(garden.compiler.indent_loc_re,garden.compiler.indent);
});
/**
 * Render the value portion of a declaration.
 */
garden.compiler.render_value = (function garden$compiler$render_value(x){
if(garden.util.at_keyframes_QMARK_(x)){
return garden.util.to_str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"identifier","identifier",-805503498)], null)));
} else {
return garden.compiler.render_css(x);
}
});
garden.compiler.render_property_and_value = (function garden$compiler$render_property_and_value(p__55820){
var vec__55821 = p__55820;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55821,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55821,(1),null);
if(cljs.core.set_QMARK_(val)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_property_and_value,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(prop),val))));
} else {
var val__$1 = ((cljs.core.sequential_QMARK_(val))?garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_value,val):garden.compiler.render_value(val));
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prop,garden.compiler.colon,val__$1,garden.compiler.semicolon], 0));
}
});
/**
 * For each block in `declaration`, add sequence of blocks
 * returned from calling `f` on the block.
 */
garden.compiler.add_blocks = (function garden$compiler$add_blocks(f,declaration){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__55824_SHARP_){
return cljs.core.cons(p1__55824_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__55824_SHARP_) : f.call(null,p1__55824_SHARP_)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([declaration], 0));
});
/**
 * Sequence of blocks with their properties prefixed by
 * each vendor in `vendors`.
 */
garden.compiler.prefixed_blocks = (function garden$compiler$prefixed_blocks(vendors,p__55825){
var vec__55826 = p__55825;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55826,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55826,(1),null);
var iter__4652__auto__ = (function garden$compiler$prefixed_blocks_$_iter__55829(s__55830){
return (new cljs.core.LazySeq(null,(function (){
var s__55830__$1 = s__55830;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__55830__$1);
if(temp__5753__auto__){
var s__55830__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55830__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__55830__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__55832 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__55831 = (0);
while(true){
if((i__55831 < size__4651__auto__)){
var vendor = cljs.core._nth(c__4650__auto__,i__55831);
cljs.core.chunk_append(b__55832,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.util.vendor_prefix(vendor,cljs.core.name(p)),v], null));

var G__55901 = (i__55831 + (1));
i__55831 = G__55901;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55832),garden$compiler$prefixed_blocks_$_iter__55829(cljs.core.chunk_rest(s__55830__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55832),null);
}
} else {
var vendor = cljs.core.first(s__55830__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.util.vendor_prefix(vendor,cljs.core.name(p)),v], null),garden$compiler$prefixed_blocks_$_iter__55829(cljs.core.rest(s__55830__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(vendors);
});
/**
 * Add prefixes to all blocks in `declaration` using
 * vendor prefixes in `vendors`.
 */
garden.compiler.prefix_all_properties = (function garden$compiler$prefix_all_properties(vendors,declaration){
return garden.compiler.add_blocks(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(garden.compiler.prefixed_blocks,vendors),declaration);
});
/**
 * Add prefixes to all blocks in `declaration` when property
 * is in the `:auto-prefix` set.
 */
garden.compiler.prefix_auto_properties = (function garden$compiler$prefix_auto_properties(vendors,declaration){
return garden.compiler.add_blocks((function (block){
var vec__55833 = block;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55833,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55833,(1),null);
if(garden.compiler.auto_prefix_QMARK_(cljs.core.name(p))){
return garden.compiler.prefixed_blocks(vendors,block);
} else {
return null;
}
}),declaration);
});
/**
 * Prefix properties within a `declaration` if `{:prefix true}` is
 * set in its meta, or if a property is in the `:auto-prefix` set.
 */
garden.compiler.prefix_declaration = (function garden$compiler$prefix_declaration(declaration){
var vendors = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(declaration));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return garden.compiler.vendors();
}
})();
var prefix_fn = (cljs.core.truth_(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(declaration)))?garden.compiler.prefix_all_properties:garden.compiler.prefix_auto_properties);
return (prefix_fn.cljs$core$IFn$_invoke$arity$2 ? prefix_fn.cljs$core$IFn$_invoke$arity$2(vendors,declaration) : prefix_fn.call(null,vendors,declaration));
});
garden.compiler.render_declaration = (function garden$compiler$render_declaration(declaration){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_property_and_value,garden.compiler.prefix_declaration(declaration)));
});
garden.compiler.render_selector = (function garden$compiler$render_selector(selector){
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(selector);
});
/**
 * Convert a vector to a CSS rule string. The vector is expected to be
 *   fully expanded.
 */
garden.compiler.render_rule = (function garden$compiler$render_rule(p__55836){
var vec__55837 = p__55836;
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55837,(0),null);
var declarations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55837,(1),null);
var rule = vec__55837;
if(((cljs.core.seq(rule)) && (cljs.core.every_QMARK_(cljs.core.seq,rule)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.render_selector(selector)),garden.compiler.l_brace,cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.indent_str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,declarations)))),garden.compiler.r_brace].join('');
} else {
return null;
}
});
/**
 * Render the individual components of a media expression.
 */
garden.compiler.render_media_expr_part = (function garden$compiler$render_media_expr_part(p__55840){
var vec__55841 = p__55840;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55841,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55841,(1),null);
var vec__55844 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var sk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55844,(0),null);
var sv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55844,(1),null);
if(v === true){
return sk;
} else {
if(v === false){
return ["not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("only",sv)){
return ["only ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = v;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.seq(sv);
} else {
return and__4251__auto__;
}
})())){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),garden.compiler.colon,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv),")"].join('');
} else {
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),")"].join('');
}

}
}
}
});
/**
 * Make a media query expession from one or more maps. Keys are not
 *   validated but values have the following semantics:
 * 
 *  `true`  as in `{:screen true}`  == "screen"
 *  `false` as in `{:screen false}` == "not screen"
 *  `:only` as in `{:screen :only}  == "only screen"
 */
garden.compiler.render_media_expr = (function garden$compiler$render_media_expr(expr){
if(cljs.core.sequential_QMARK_(expr)){
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_media_expr,expr));
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" and ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_media_expr_part,expr));
}
});
/**
 * Render the individual components of a query expression.
 */
garden.compiler.render_feature_expr_part = (function garden$compiler$render_feature_expr_part(p__55847){
var vec__55848 = p__55847;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55848,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55848,(1),null);
var vec__55851 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var sk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55851,(0),null);
var sv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55851,(1),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = v;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.seq(sv);
} else {
return and__4251__auto__;
}
})())){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),garden.compiler.colon,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv),")"].join('');
} else {
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),")"].join('');
}
});
/**
 * Make a query expression from one or more maps. Keys are not
 *   validated.
 */
garden.compiler.render_feature_expr = (function garden$compiler$render_feature_expr(expr){
if(cljs.core.sequential_QMARK_(expr)){
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_feature_expr,expr));
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" and ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_feature_expr_part,expr));
}
});
/**
 * Render a CSSUnit.
 */
garden.compiler.render_unit = (function garden$compiler$render_unit(css_unit){
var map__55854 = css_unit;
var map__55854__$1 = cljs.core.__destructure_map(map__55854);
var magnitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55854__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55854__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var magnitude__$1 = magnitude;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(magnitude__$1),cljs.core.name(unit)].join('');
});
/**
 * Render a CSS function.
 */
garden.compiler.render_function = (function garden$compiler$render_function(css_function){
var map__55855 = css_function;
var map__55855__$1 = cljs.core.__destructure_map(map__55855);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55855__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55855__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var args__$1 = ((cljs.core.sequential_QMARK_(args))?garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(args):garden.util.to_str(args));
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic("%s(%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.util.to_str(f),args__$1], 0));
});
garden.compiler.render_color = (function garden$compiler$render_color(c){
var temp__5751__auto__ = new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(temp__5751__auto__)){
var a = temp__5751__auto__;
var map__55856 = garden.color.as_hsl(c);
var map__55856__$1 = cljs.core.__destructure_map(map__55856);
var hue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55856__$1,new cljs.core.Keyword(null,"hue","hue",-508078848));
var saturation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55856__$1,new cljs.core.Keyword(null,"saturation","saturation",-14247929));
var lightness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55856__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
var vec__55857 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.units.percent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [saturation,lightness], null));
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55857,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55857,(1),null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic("hsla(%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue,s,l,a], null))], 0));
} else {
return garden.color.as_hex(c);
}
});
if((typeof garden !== 'undefined') && (typeof garden.compiler !== 'undefined') && (typeof garden.compiler.render_at_rule !== 'undefined')){
} else {
/**
 * Render a CSS at-rule
 */
garden.compiler.render_at_rule = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__55860 = cljs.core.get_global_hierarchy;
return (fexpr__55860.cljs$core$IFn$_invoke$arity$0 ? fexpr__55860.cljs$core$IFn$_invoke$arity$0() : fexpr__55860.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("garden.compiler","render-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"import","import",-1399500709),(function (p__55861){
var map__55862 = p__55861;
var map__55862__$1 = cljs.core.__destructure_map(map__55862);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55862__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__55863 = value;
var map__55863__$1 = cljs.core.__destructure_map(map__55863);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55863__$1,new cljs.core.Keyword(null,"url","url",276297046));
var media_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55863__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var url__$1 = ((typeof url === 'string')?garden.util.wrap_quotes(url):garden.compiler.render_css(url));
var queries = (cljs.core.truth_(media_queries)?garden.compiler.render_media_expr(media_queries):null);
return ["@import ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(queries)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(queries)].join(''):url__$1)),garden.compiler.semicolon].join('');
}));
garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__55865){
var map__55866 = p__55865;
var map__55866__$1 = cljs.core.__destructure_map(map__55866);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55866__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__55867 = value;
var map__55867__$1 = cljs.core.__destructure_map(map__55867);
var identifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55867__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55867__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
if(cljs.core.seq(frames)){
var body = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.util.to_str(identifier)),garden.compiler.l_brace_1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.indent_str(garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,frames)))),garden.compiler.r_brace_1].join('');
var prefix = (function (vendor){
return ["@",garden.util.vendor_prefix(vendor,"keyframes ")].join('');
});
return garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55864_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55864_SHARP_),body].join('');
}),cljs.core.cons("@keyframes ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(prefix,garden.compiler.vendors()))));
} else {
return null;
}
}));
garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__55868){
var map__55869 = p__55868;
var map__55869__$1 = cljs.core.__destructure_map(map__55869);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55869__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__55870 = value;
var map__55870__$1 = cljs.core.__destructure_map(map__55870);
var media_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55870__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55870__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
if(cljs.core.seq(rules)){
return ["@media ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.render_media_expr(media_queries)),garden.compiler.l_brace_1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.indent_str(garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,rules)))),garden.compiler.r_brace_1].join('');
} else {
return null;
}
}));
garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"feature","feature",27242652),(function (p__55871){
var map__55872 = p__55871;
var map__55872__$1 = cljs.core.__destructure_map(map__55872);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55872__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__55873 = value;
var map__55873__$1 = cljs.core.__destructure_map(map__55873);
var feature_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55873__$1,new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408));
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55873__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
if(cljs.core.seq(rules)){
return ["@supports ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.render_feature_expr(feature_queries)),garden.compiler.l_brace_1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.indent_str(garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,rules)))),garden.compiler.r_brace_1].join('');
} else {
return null;
}
}));
(garden.compiler.CSSRenderer["null"] = true);

(garden.compiler.render_css["null"] = (function (this$){
return "";
}));

(garden.color.CSSColor.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(garden.color.CSSColor.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_color(this$__$1);
}));

(cljs.core.IndexedSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IndexedSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
}));

(cljs.core.LazySeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
}));

(cljs.core.NodeSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.NodeSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
}));

(cljs.core.BlackNode.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.BlackNode.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule(this$__$1);
}));

(cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
}));

(garden.types.CSSUnit.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(garden.types.CSSUnit.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_unit(this$__$1);
}));

(cljs.core.ChunkedSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ChunkedSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
}));

(cljs.core.Cons.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
}));

(cljs.core.RSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.RSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
}));

(garden.compiler.CSSRenderer["number"] = true);

(garden.compiler.render_css["number"] = (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

(garden.types.CSSFunction.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(garden.types.CSSFunction.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_function(this$__$1);
}));

(cljs.core.PersistentHashMap.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_declaration(this$__$1);
}));

(cljs.core.ArrayNodeSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ArrayNodeSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
}));

(cljs.core.Subvec.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule(this$__$1);
}));

(garden.compiler.CSSRenderer["_"] = true);

(garden.compiler.render_css["_"] = (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

(cljs.core.PersistentTreeMap.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_declaration(this$__$1);
}));

(cljs.core.ChunkedCons.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ChunkedCons.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
}));

(garden.types.CSSAtRule.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(garden.types.CSSAtRule.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_at_rule.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(cljs.core.RedNode.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.RedNode.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule(this$__$1);
}));

(cljs.core.PersistentVector.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule(this$__$1);
}));

(cljs.core.Keyword.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
}));

(cljs.core.PersistentArrayMap.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_declaration(this$__$1);
}));

(cljs.core.List.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
}));
/**
 * Convert a sequence of maps into CSS for use with the HTML style
 * attribute.
 */
garden.compiler.compile_style = (function garden$compiler$compile_style(ms){
return cljs.core.first(garden.compiler.render_css(garden.compiler.expand(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(garden.util.declaration_QMARK_,ms)))));
});
/**
 * Return a string of CSS.
 */
garden.compiler.do_compile = (function garden$compiler$do_compile(flags,rules){
var _STAR_flags_STAR__orig_val__55874 = garden.compiler._STAR_flags_STAR_;
var _STAR_flags_STAR__temp_val__55875 = flags;
(garden.compiler._STAR_flags_STAR_ = _STAR_flags_STAR__temp_val__55875);

try{return garden.compiler.rule_join(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(garden.compiler.top_level_expression_QMARK_,garden.compiler.expand_stylesheet(rules)))));
}finally {(garden.compiler._STAR_flags_STAR_ = _STAR_flags_STAR__orig_val__55874);
}});
/**
 * Prefix stylesheet with files in preamble. Not available in
 *   ClojureScript.
 */
garden.compiler.do_preamble = (function garden$compiler$do_preamble(p__55876,stylesheet){
var map__55877 = p__55876;
var map__55877__$1 = cljs.core.__destructure_map(map__55877);
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55877__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
return stylesheet;
});
/**
 * Compress CSS if the pretty-print(?) flag is true.
 */
garden.compiler.do_compression = (function garden$compiler$do_compression(p__55878,stylesheet){
var map__55879 = p__55878;
var map__55879__$1 = cljs.core.__destructure_map(map__55879);
var pretty_print_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55879__$1,new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158));
var pretty_print = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55879__$1,new cljs.core.Keyword(null,"pretty-print","pretty-print",-1314067013));
if(cljs.core.truth_((function (){var or__4253__auto__ = pretty_print_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pretty_print;
}
})())){
return stylesheet;
} else {
return garden.compression.compress_stylesheet(stylesheet);
}
});
/**
 * Write contents of stylesheet to disk.
 */
garden.compiler.do_output_to = (function garden$compiler$do_output_to(p__55880,stylesheet){
var map__55881 = p__55880;
var map__55881__$1 = cljs.core.__destructure_map(map__55881);
var output_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55881__$1,new cljs.core.Keyword(null,"output-to","output-to",-965533968));
return stylesheet;
});
/**
 * Convert any number of Clojure data structures to CSS.
 */
garden.compiler.compile_css = (function garden$compiler$compile_css(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55907 = arguments.length;
var i__4865__auto___55908 = (0);
while(true){
if((i__4865__auto___55908 < len__4864__auto___55907)){
args__4870__auto__.push((arguments[i__4865__auto___55908]));

var G__55909 = (i__4865__auto___55908 + (1));
i__4865__auto___55908 = G__55909;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic = (function (flags,rules){
var vec__55884 = (cljs.core.truth_((function (){var and__4251__auto__ = garden.util.hash_map_QMARK_(flags);
if(and__4251__auto__){
return cljs.core.some(cljs.core.set(cljs.core.keys(flags)),cljs.core.keys(garden.compiler._STAR_flags_STAR_));
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler._STAR_flags_STAR_,flags], 0)),rules], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.compiler._STAR_flags_STAR_,cljs.core.cons(flags,rules)], null));
var flags__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55884,(0),null);
var rules__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55884,(1),null);
return garden.compiler.do_output_to(flags__$1,garden.compiler.do_compression(flags__$1,garden.compiler.do_preamble(flags__$1,garden.compiler.do_compile(flags__$1,rules__$1))));
}));

(garden.compiler.compile_css.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.compiler.compile_css.cljs$lang$applyTo = (function (seq55882){
var G__55883 = cljs.core.first(seq55882);
var seq55882__$1 = cljs.core.next(seq55882);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55883,seq55882__$1);
}));


//# sourceMappingURL=garden.compiler.js.map
