goog.provide('reframeui.styles');
/**
 * @param {...*} var_args
 */
reframeui.styles.linear_gradient = (function() { 
var reframeui$styles$linear_gradient__delegate = function (args__56077__auto__){
return (new garden.types.CSSFunction("linear-gradient",cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function() {
var G__56105 = null;
var G__56105__4 = (function (c1,p1,c2,p2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,p1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c2,p2], null)], null);
});
var G__56105__5 = (function (dir,c1,p1,c2,p2){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dir,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,p1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c2,p2], null)], null);
});
G__56105 = function(dir,c1,p1,c2,p2){
switch(arguments.length){
case 4:
return G__56105__4.call(this,dir,c1,p1,c2);
case 5:
return G__56105__5.call(this,dir,c1,p1,c2,p2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__56105.cljs$core$IFn$_invoke$arity$4 = G__56105__4;
G__56105.cljs$core$IFn$_invoke$arity$5 = G__56105__5;
return G__56105;
})()
,args__56077__auto__),null,null,null));
};
var reframeui$styles$linear_gradient = function (var_args){
var args__56077__auto__ = null;
if (arguments.length > 0) {
var G__56106__i = 0, G__56106__a = new Array(arguments.length -  0);
while (G__56106__i < G__56106__a.length) {G__56106__a[G__56106__i] = arguments[G__56106__i + 0]; ++G__56106__i;}
  args__56077__auto__ = new cljs.core.IndexedSeq(G__56106__a,0,null);
} 
return reframeui$styles$linear_gradient__delegate.call(this,args__56077__auto__);};
reframeui$styles$linear_gradient.cljs$lang$maxFixedArity = 0;
reframeui$styles$linear_gradient.cljs$lang$applyTo = (function (arglist__56107){
var args__56077__auto__ = cljs.core.seq(arglist__56107);
return reframeui$styles$linear_gradient__delegate(args__56077__auto__);
});
reframeui$styles$linear_gradient.cljs$core$IFn$_invoke$arity$variadic = reframeui$styles$linear_gradient__delegate;
return reframeui$styles$linear_gradient;
})()
;
reframeui.styles.defaults_factory$ = (function reframeui$styles$defaults_factory$(style_name56097,params56098){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),style_name56097,new cljs.core.Keyword(null,"css","css",1135045163),spade.runtime.compile_css(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"#ddd","#ddd",-1886570548),new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframeui.styles.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"white","white",-483998618),garden.units.px((2)),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),garden.units.px((2))], 0)),reframeui.styles.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.units.deg((90)),new cljs.core.Keyword(null,"white","white",-483998618),garden.units.px((2)),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),garden.units.px((2))], 0)),reframeui.styles.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.color.rgba.cljs$core$IFn$_invoke$arity$4((255),(255),(255),0.3),garden.units.px((1)),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),garden.units.px((1))], 0)),reframeui.styles.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.units.deg((90)),garden.color.rgba.cljs$core$IFn$_invoke$arity$4((255),(255),(255),0.3),garden.units.px((1)),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),garden.units.px((1))], 0))], null),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((100)),garden.units.px((100))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((100)),garden.units.px((100))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((20)),garden.units.px((20))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((20)),garden.units.px((20))], null)], null),new cljs.core.Keyword(null,"background-position","background-position",1112702746),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((-2)),garden.units.px((-2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((-2)),garden.units.px((-2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((-1)),garden.units.px((-1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((-1)),garden.units.px((-1))], null)], null)], null)], null)], null))], null);
});

var factory_name56099_56108 = spade.util.factory__GT_name(reframeui.styles.defaults_factory$);
reframeui.styles.defaults = spade.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"global","global",93595047),factory_name56099_56108,reframeui.styles.defaults_factory$,null);
reframeui.styles.level1_factory$ = (function reframeui$styles$level1_factory$(style_name56100,params56101){
var style56103 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name56100)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"green","green",-945526839)], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),spade.runtime.compile_css(style56103),new cljs.core.Keyword(null,"name","name",1843675177),style_name56100], null);
});

var factory_name56102_56109 = spade.util.factory__GT_name(reframeui.styles.level1_factory$);
reframeui.styles.level1 = (function reframeui$styles$level1(){
return spade.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name56102_56109,reframeui.styles.level1_factory$,cljs.core.PersistentVector.EMPTY);
});

//# sourceMappingURL=reframeui.styles.js.map
