goog.provide('garden.stylesheet');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55271 = arguments.length;
var i__4865__auto___55272 = (0);
while(true){
if((i__4865__auto___55272 < len__4864__auto___55271)){
args__4870__auto__.push((arguments[i__4865__auto___55272]));

var G__55273 = (i__4865__auto___55272 + (1));
i__4865__auto___55272 = G__55273;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (((typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__55274__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__55274 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__55275__i = 0, G__55275__a = new Array(arguments.length -  0);
while (G__55275__i < G__55275__a.length) {G__55275__a[G__55275__i] = arguments[G__55275__i + 0]; ++G__55275__i;}
  children = new cljs.core.IndexedSeq(G__55275__a,0,null);
} 
return G__55274__delegate.call(this,children);};
G__55274.cljs$lang$maxFixedArity = 0;
G__55274.cljs$lang$applyTo = (function (arglist__55276){
var children = cljs.core.seq(arglist__55276);
return G__55274__delegate(children);
});
G__55274.cljs$core$IFn$_invoke$arity$variadic = G__55274__delegate;
return G__55274;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq55246){
var G__55247 = cljs.core.first(seq55246);
var seq55246__$1 = cljs.core.next(seq55246);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55247,seq55246__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__55277__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__55277 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55278__i = 0, G__55278__a = new Array(arguments.length -  0);
while (G__55278__i < G__55278__a.length) {G__55278__a[G__55278__i] = arguments[G__55278__i + 0]; ++G__55278__i;}
  args = new cljs.core.IndexedSeq(G__55278__a,0,null);
} 
return G__55277__delegate.call(this,args);};
G__55277.cljs$lang$maxFixedArity = 0;
G__55277.cljs$lang$applyTo = (function (arglist__55279){
var args = cljs.core.seq(arglist__55279);
return G__55277__delegate(args);
});
G__55277.cljs$core$IFn$_invoke$arity$variadic = G__55277__delegate;
return G__55277;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55280 = arguments.length;
var i__4865__auto___55281 = (0);
while(true){
if((i__4865__auto___55281 < len__4864__auto___55280)){
args__4870__auto__.push((arguments[i__4865__auto___55281]));

var G__55283 = (i__4865__auto___55281 + (1));
i__4865__auto___55281 = G__55283;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq55249){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55249));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__55253 = arguments.length;
switch (G__55253) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___55285 = arguments.length;
var i__4865__auto___55286 = (0);
while(true){
if((i__4865__auto___55286 < len__4864__auto___55285)){
args_arr__4885__auto__.push((arguments[i__4865__auto___55286]));

var G__55290 = (i__4865__auto___55286 + (1));
i__4865__auto___55286 = G__55290;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4886__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq55251){
var G__55252 = cljs.core.first(seq55251);
var seq55251__$1 = cljs.core.next(seq55251);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55252,seq55251__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55291 = arguments.length;
var i__4865__auto___55292 = (0);
while(true){
if((i__4865__auto___55292 < len__4864__auto___55291)){
args__4870__auto__.push((arguments[i__4865__auto___55292]));

var G__55293 = (i__4865__auto___55292 + (1));
i__4865__auto___55292 = G__55293;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq55254){
var G__55255 = cljs.core.first(seq55254);
var seq55254__$1 = cljs.core.next(seq55254);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55255,seq55254__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55294 = arguments.length;
var i__4865__auto___55295 = (0);
while(true){
if((i__4865__auto___55295 < len__4864__auto___55294)){
args__4870__auto__.push((arguments[i__4865__auto___55295]));

var G__55296 = (i__4865__auto___55295 + (1));
i__4865__auto___55295 = G__55296;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq55262){
var G__55263 = cljs.core.first(seq55262);
var seq55262__$1 = cljs.core.next(seq55262);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55263,seq55262__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55297 = arguments.length;
var i__4865__auto___55298 = (0);
while(true){
if((i__4865__auto___55298 < len__4864__auto___55297)){
args__4870__auto__.push((arguments[i__4865__auto___55298]));

var G__55299 = (i__4865__auto___55298 + (1));
i__4865__auto___55298 = G__55299;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq55269){
var G__55270 = cljs.core.first(seq55269);
var seq55269__$1 = cljs.core.next(seq55269);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55270,seq55269__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=garden.stylesheet.js.map
