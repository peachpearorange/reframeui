goog.provide('re_com.debug');
goog.scope(function(){
  re_com.debug.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Returns the interesting part of component-name
 */
re_com.debug.short_component_name = (function re_com$debug$short_component_name(component_name){
return clojure.string.replace(clojure.string.replace(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(component_name,/\./)),/_render/,""),/_/,"-");
});
/**
 * Return a version of args which is stripped of uninteresting values, suitable for logging.
 */
re_com.debug.loggable_args = (function re_com$debug$loggable_args(args){
if(cljs.core.map_QMARK_(args)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.Keyword(null,"debug-as","debug-as",283322354)], 0))));
} else {
return args;
}
});
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__42846){
var map__42847 = p__42846;
var map__42847__$1 = cljs.core.__destructure_map(map__42847);
var args = map__42847__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42847__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42847__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
if(cljs.core.not(re_com.config.debug_QMARK_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component()));
}
})();
var rc_args = re_com.debug.loggable_args((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return args;
}
})());
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
re_com.debug.goog$module$goog$object.set(el,"__rc-args",rc_args);
} else {
}

var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ref","ref",1289896967)], null));
if(cljs.core.truth_(temp__5753__auto__)){
var user_ref_fn = temp__5753__auto__;
if(cljs.core.fn_QMARK_(user_ref_fn)){
return (user_ref_fn.cljs$core$IFn$_invoke$arity$1 ? user_ref_fn.cljs$core$IFn$_invoke$arity$1(el) : user_ref_fn.call(null,el));
} else {
return null;
}
} else {
return null;
}
});
var map__42848 = src;
var map__42848__$1 = cljs.core.__destructure_map(map__42848);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42848__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42848__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__42881 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42881,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__42881;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__42898 = arguments.length;
switch (G__42898) {
case 1:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1 = (function (el){
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,el);
}));

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2 = (function (stack,el){
if(cljs.core.not(el)){
return stack;
} else {
var component = el.dataset.rc;
var parent = el.parentElement;
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("stack-spy",component))?stack:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"src","src",-1651076051),el.dataset.rcSrc,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"args","args",1315556576),re_com.debug.goog$module$goog$object.get(el,"__rc-args")], null))),parent);
}
}));

(re_com.debug.component_stack.cljs$lang$maxFixedArity = 2);

re_com.debug.validate_args_problems_style = (function re_com$debug$validate_args_problems_style(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"32px",new cljs.core.Keyword(null,"min-height","min-height",398480837),"32px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.4em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#FF4136"], null);
});
re_com.debug.h1_style = "background: #FF4136; color: white; font-size: 1.4em; padding: 3px";
re_com.debug.h2_style = "background: #0074D9; color: white; padding: 0.25em";
re_com.debug.code_style = "font-family: monospace; font-weight: bold; background: #eee; color: #333; padding: 3px";
re_com.debug.error_style = "font-weight: bold";
re_com.debug.index_style = "font-weight: bold; font-size: 1.1em";
re_com.debug.collision_icon = "\uD83D\uDCA5";
re_com.debug.gear_icon = "\u2699\uFE0F";
re_com.debug.blue_book_icon = "\uD83D\uDCD8";
re_com.debug.confused_icon = "\uD83D\uDE15";
re_com.debug.globe_icon = "\uD83C\uDF10";
re_com.debug.log_component_stack = (function re_com$debug$log_component_stack(stack){
console.groupCollapsed("\u2022 %c Component stack (click me)",re_com.debug.h2_style);

var seq__42901_42987 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__42900_SHARP_,p2__42899_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__42899_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__42900_SHARP_ + (1)));
}),stack));
var chunk__42902_42988 = null;
var count__42903_42989 = (0);
var i__42904_42990 = (0);
while(true){
if((i__42904_42990 < count__42903_42989)){
var map__42914_42992 = chunk__42902_42988.cljs$core$IIndexed$_nth$arity$2(null,i__42904_42990);
var map__42914_42993__$1 = cljs.core.__destructure_map(map__42914_42992);
var i_42994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42914_42993__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_42995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42914_42993__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_42996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42914_42993__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_42997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42914_42993__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_42998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42914_42993__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_42996)){
if(cljs.core.truth_(src_42997)){
var vec__42915_42999 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_42997,/:/);
var file_43000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42915_42999,(0),null);
var line_43001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42915_42999,(1),null);
if(cljs.core.truth_(args_42998)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_42994),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_42996)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_43000),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_43001),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_42998,el_42995);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_42994),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_42996)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_43000),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_43001),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_42995);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_42994),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_42996)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_42998,el_42995);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_42994),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_42995);
}


var G__43002 = seq__42901_42987;
var G__43003 = chunk__42902_42988;
var G__43004 = count__42903_42989;
var G__43005 = (i__42904_42990 + (1));
seq__42901_42987 = G__43002;
chunk__42902_42988 = G__43003;
count__42903_42989 = G__43004;
i__42904_42990 = G__43005;
continue;
} else {
var temp__5753__auto___43006 = cljs.core.seq(seq__42901_42987);
if(temp__5753__auto___43006){
var seq__42901_43007__$1 = temp__5753__auto___43006;
if(cljs.core.chunked_seq_QMARK_(seq__42901_43007__$1)){
var c__4679__auto___43008 = cljs.core.chunk_first(seq__42901_43007__$1);
var G__43009 = cljs.core.chunk_rest(seq__42901_43007__$1);
var G__43010 = c__4679__auto___43008;
var G__43011 = cljs.core.count(c__4679__auto___43008);
var G__43012 = (0);
seq__42901_42987 = G__43009;
chunk__42902_42988 = G__43010;
count__42903_42989 = G__43011;
i__42904_42990 = G__43012;
continue;
} else {
var map__42918_43013 = cljs.core.first(seq__42901_43007__$1);
var map__42918_43014__$1 = cljs.core.__destructure_map(map__42918_43013);
var i_43015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42918_43014__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_43016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42918_43014__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_43017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42918_43014__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_43018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42918_43014__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_43019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42918_43014__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_43017)){
if(cljs.core.truth_(src_43018)){
var vec__42919_43020 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_43018,/:/);
var file_43021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42919_43020,(0),null);
var line_43022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42919_43020,(1),null);
if(cljs.core.truth_(args_43019)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_43015),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_43017)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_43021),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_43022),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_43019,el_43016);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_43015),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_43017)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_43021),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_43022),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_43016);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_43015),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_43017)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_43019,el_43016);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_43015),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_43016);
}


var G__43023 = cljs.core.next(seq__42901_43007__$1);
var G__43024 = null;
var G__43025 = (0);
var G__43026 = (0);
seq__42901_42987 = G__43023;
chunk__42902_42988 = G__43024;
count__42903_42989 = G__43025;
i__42904_42990 = G__43026;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
re_com.debug.log_validate_args_error_problems = (function re_com$debug$log_validate_args_error_problems(problems){
var seq__42922 = cljs.core.seq(problems);
var chunk__42923 = null;
var count__42924 = (0);
var i__42925 = (0);
while(true){
if((i__42925 < count__42924)){
var map__42930 = chunk__42923.cljs$core$IIndexed$_nth$arity$2(null,i__42925);
var map__42930__$1 = cljs.core.__destructure_map(map__42930);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42930__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42930__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42930__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42930__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42930__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__42931_43027 = problem;
var G__42931_43028__$1 = (((G__42931_43027 instanceof cljs.core.Keyword))?G__42931_43027.fqn:null);
switch (G__42931_43028__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__43030 = seq__42922;
var G__43031 = chunk__42923;
var G__43032 = count__42924;
var G__43033 = (i__42925 + (1));
seq__42922 = G__43030;
chunk__42923 = G__43031;
count__42924 = G__43032;
i__42925 = G__43033;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42922);
if(temp__5753__auto__){
var seq__42922__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42922__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__42922__$1);
var G__43034 = cljs.core.chunk_rest(seq__42922__$1);
var G__43035 = c__4679__auto__;
var G__43036 = cljs.core.count(c__4679__auto__);
var G__43037 = (0);
seq__42922 = G__43034;
chunk__42923 = G__43035;
count__42924 = G__43036;
i__42925 = G__43037;
continue;
} else {
var map__42932 = cljs.core.first(seq__42922__$1);
var map__42932__$1 = cljs.core.__destructure_map(map__42932);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42932__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42932__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42932__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42932__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42932__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__42933_43038 = problem;
var G__42933_43039__$1 = (((G__42933_43038 instanceof cljs.core.Keyword))?G__42933_43038.fqn:null);
switch (G__42933_43039__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__43041 = cljs.core.next(seq__42922__$1);
var G__43042 = null;
var G__43043 = (0);
var G__43044 = (0);
seq__42922 = G__43041;
chunk__42923 = G__43042;
count__42924 = G__43043;
i__42925 = G__43044;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__42938){
var map__42939 = p__42938;
var map__42939__$1 = cljs.core.__destructure_map(map__42939);
var src = map__42939__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42939__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42939__$1,new cljs.core.Keyword(null,"line","line",212345235));
var source_url = (((!(cljs.core.empty_QMARK_(re_com.config.root_url_for_compiler_output))))?[re_com.config.root_url_for_compiler_output,cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null);
console.group(["%c",re_com.debug.collision_icon," re-com validation error "].join(''),re_com.debug.h1_style);

if(cljs.core.truth_(src)){
if(cljs.core.truth_(source_url)){
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"%c see ",source_url].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"");
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Add %cre-com.config/root-url-for-compiler-output%c to your %c:closure-defines%c to enable clickable source urls"].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"");
}
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]"].join(''),re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Learn how to add source coordinates to your components at https://re-com.day8.com.au/#/debug"].join(''));
}

re_com.debug.log_validate_args_error_problems(problems);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(element)));

return console.groupEnd();
});
re_com.debug.validate_args_error = (function re_com$debug$validate_args_error(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43049 = arguments.length;
var i__4865__auto___43050 = (0);
while(true){
if((i__4865__auto___43050 < len__4864__auto___43049)){
args__4870__auto__.push((arguments[i__4865__auto___43050]));

var G__43051 = (i__4865__auto___43050 + (1));
i__4865__auto___43050 = G__43051;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__42948){
var map__42949 = p__42948;
var map__42949__$1 = cljs.core.__destructure_map(map__42949);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42949__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42949__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42949__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var internal_problems = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(problems);
var internal_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(component);
var internal_args = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(args);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"validate-args-error",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__43058__delegate = function (p__42952){
var map__42953 = p__42952;
var map__42953__$1 = cljs.core.__destructure_map(map__42953);
var problems__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42953__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42953__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42953__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_(internal_problems,problems__$1);

cljs.core.reset_BANG_(internal_component,component__$1);

cljs.core.reset_BANG_(internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style()], null)], 0)),re_com.debug.collision_icon], null);
};
var G__43058 = function (var_args){
var p__42952 = null;
if (arguments.length > 0) {
var G__43062__i = 0, G__43062__a = new Array(arguments.length -  0);
while (G__43062__i < G__43062__a.length) {G__43062__a[G__43062__i] = arguments[G__43062__i + 0]; ++G__43062__i;}
  p__42952 = new cljs.core.IndexedSeq(G__43062__a,0,null);
} 
return G__43058__delegate.call(this,p__42952);};
G__43058.cljs$lang$maxFixedArity = 0;
G__43058.cljs$lang$applyTo = (function (arglist__43063){
var p__42952 = cljs.core.seq(arglist__43063);
return G__43058__delegate(p__42952);
});
G__43058.cljs$core$IFn$_invoke$arity$variadic = G__43058__delegate;
return G__43058;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq42946){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42946));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43064 = arguments.length;
var i__4865__auto___43065 = (0);
while(true){
if((i__4865__auto___43065 < len__4864__auto___43064)){
args__4870__auto__.push((arguments[i__4865__auto___43065]));

var G__43066 = (i__4865__auto___43065 + (1));
i__4865__auto___43065 = G__43066;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__42955){
var map__42956 = p__42955;
var map__42956__$1 = cljs.core.__destructure_map(map__42956);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42956__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42956__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var log_fn = (function (){
var el = cljs.core.deref(element);
if(cljs.core.truth_(el)){
var first_child = cljs.core.first(el.children);
console.group("%c[stack-spy ...]",re_com.debug.code_style);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(first_child));

return console.groupEnd();
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"stack-spy",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),log_fn,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),log_fn,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__43072__delegate = function (p__42968){
var map__42969 = p__42968;
var map__42969__$1 = cljs.core.__destructure_map(map__42969);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42969__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42969__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__43072 = function (var_args){
var p__42968 = null;
if (arguments.length > 0) {
var G__43074__i = 0, G__43074__a = new Array(arguments.length -  0);
while (G__43074__i < G__43074__a.length) {G__43074__a[G__43074__i] = arguments[G__43074__i + 0]; ++G__43074__i;}
  p__42968 = new cljs.core.IndexedSeq(G__43074__a,0,null);
} 
return G__43072__delegate.call(this,p__42968);};
G__43072.cljs$lang$maxFixedArity = 0;
G__43072.cljs$lang$applyTo = (function (arglist__43075){
var p__42968 = cljs.core.seq(arglist__43075);
return G__43072__delegate(p__42968);
});
G__43072.cljs$core$IFn$_invoke$arity$variadic = G__43072__delegate;
return G__43072;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq42954){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42954));
}));


//# sourceMappingURL=re_com.debug.js.map
