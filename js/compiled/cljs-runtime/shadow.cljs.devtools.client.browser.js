goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52212 = arguments.length;
var i__4865__auto___52213 = (0);
while(true){
if((i__4865__auto___52213 < len__4864__auto___52212)){
args__4870__auto__.push((arguments[i__4865__auto___52213]));

var G__52214 = (i__4865__auto___52213 + (1));
i__4865__auto___52213 = G__52214;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq51992){
var G__51993 = cljs.core.first(seq51992);
var seq51992__$1 = cljs.core.next(seq51992);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51993,seq51992__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__51999 = cljs.core.seq(sources);
var chunk__52000 = null;
var count__52001 = (0);
var i__52002 = (0);
while(true){
if((i__52002 < count__52001)){
var map__52007 = chunk__52000.cljs$core$IIndexed$_nth$arity$2(null,i__52002);
var map__52007__$1 = cljs.core.__destructure_map(map__52007);
var src = map__52007__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52007__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52007__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52007__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52007__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52012){var e_52215 = e52012;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52215);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52215.message)].join('')));
}

var G__52216 = seq__51999;
var G__52217 = chunk__52000;
var G__52218 = count__52001;
var G__52219 = (i__52002 + (1));
seq__51999 = G__52216;
chunk__52000 = G__52217;
count__52001 = G__52218;
i__52002 = G__52219;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51999);
if(temp__5753__auto__){
var seq__51999__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51999__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51999__$1);
var G__52220 = cljs.core.chunk_rest(seq__51999__$1);
var G__52221 = c__4679__auto__;
var G__52222 = cljs.core.count(c__4679__auto__);
var G__52223 = (0);
seq__51999 = G__52220;
chunk__52000 = G__52221;
count__52001 = G__52222;
i__52002 = G__52223;
continue;
} else {
var map__52016 = cljs.core.first(seq__51999__$1);
var map__52016__$1 = cljs.core.__destructure_map(map__52016);
var src = map__52016__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52016__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52016__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52016__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52016__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52017){var e_52224 = e52017;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52224);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52224.message)].join('')));
}

var G__52225 = cljs.core.next(seq__51999__$1);
var G__52226 = null;
var G__52227 = (0);
var G__52228 = (0);
seq__51999 = G__52225;
chunk__52000 = G__52226;
count__52001 = G__52227;
i__52002 = G__52228;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__52024 = cljs.core.seq(js_requires);
var chunk__52025 = null;
var count__52026 = (0);
var i__52027 = (0);
while(true){
if((i__52027 < count__52026)){
var js_ns = chunk__52025.cljs$core$IIndexed$_nth$arity$2(null,i__52027);
var require_str_52229 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52229);


var G__52230 = seq__52024;
var G__52231 = chunk__52025;
var G__52232 = count__52026;
var G__52233 = (i__52027 + (1));
seq__52024 = G__52230;
chunk__52025 = G__52231;
count__52026 = G__52232;
i__52027 = G__52233;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52024);
if(temp__5753__auto__){
var seq__52024__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52024__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__52024__$1);
var G__52234 = cljs.core.chunk_rest(seq__52024__$1);
var G__52235 = c__4679__auto__;
var G__52236 = cljs.core.count(c__4679__auto__);
var G__52237 = (0);
seq__52024 = G__52234;
chunk__52025 = G__52235;
count__52026 = G__52236;
i__52027 = G__52237;
continue;
} else {
var js_ns = cljs.core.first(seq__52024__$1);
var require_str_52238 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52238);


var G__52239 = cljs.core.next(seq__52024__$1);
var G__52240 = null;
var G__52241 = (0);
var G__52242 = (0);
seq__52024 = G__52239;
chunk__52025 = G__52240;
count__52026 = G__52241;
i__52027 = G__52242;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__52040){
var map__52041 = p__52040;
var map__52041__$1 = cljs.core.__destructure_map(map__52041);
var msg = map__52041__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52041__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52041__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52042(s__52043){
return (new cljs.core.LazySeq(null,(function (){
var s__52043__$1 = s__52043;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__52043__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__52074 = cljs.core.first(xs__6308__auto__);
var map__52074__$1 = cljs.core.__destructure_map(map__52074);
var src = map__52074__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52074__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52074__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__52043__$1,map__52074,map__52074__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52041,map__52041__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52042_$_iter__52044(s__52045){
return (new cljs.core.LazySeq(null,((function (s__52043__$1,map__52074,map__52074__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52041,map__52041__$1,msg,info,reload_info){
return (function (){
var s__52045__$1 = s__52045;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__52045__$1);
if(temp__5753__auto____$1){
var s__52045__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52045__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__52045__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__52047 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__52046 = (0);
while(true){
if((i__52046 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__52046);
cljs.core.chunk_append(b__52047,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__52243 = (i__52046 + (1));
i__52046 = G__52243;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52047),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52042_$_iter__52044(cljs.core.chunk_rest(s__52045__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52047),null);
}
} else {
var warning = cljs.core.first(s__52045__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52042_$_iter__52044(cljs.core.rest(s__52045__$2)));
}
} else {
return null;
}
break;
}
});})(s__52043__$1,map__52074,map__52074__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52041,map__52041__$1,msg,info,reload_info))
,null,null));
});})(s__52043__$1,map__52074,map__52074__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52041,map__52041__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52042(cljs.core.rest(s__52043__$1)));
} else {
var G__52244 = cljs.core.rest(s__52043__$1);
s__52043__$1 = G__52244;
continue;
}
} else {
var G__52245 = cljs.core.rest(s__52043__$1);
s__52043__$1 = G__52245;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__52075_52246 = cljs.core.seq(warnings);
var chunk__52076_52247 = null;
var count__52077_52248 = (0);
var i__52078_52249 = (0);
while(true){
if((i__52078_52249 < count__52077_52248)){
var map__52081_52250 = chunk__52076_52247.cljs$core$IIndexed$_nth$arity$2(null,i__52078_52249);
var map__52081_52251__$1 = cljs.core.__destructure_map(map__52081_52250);
var w_52252 = map__52081_52251__$1;
var msg_52253__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52081_52251__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52081_52251__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52081_52251__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52081_52251__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52256)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52254),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52255),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52253__$1)].join(''));


var G__52257 = seq__52075_52246;
var G__52258 = chunk__52076_52247;
var G__52259 = count__52077_52248;
var G__52260 = (i__52078_52249 + (1));
seq__52075_52246 = G__52257;
chunk__52076_52247 = G__52258;
count__52077_52248 = G__52259;
i__52078_52249 = G__52260;
continue;
} else {
var temp__5753__auto___52261 = cljs.core.seq(seq__52075_52246);
if(temp__5753__auto___52261){
var seq__52075_52262__$1 = temp__5753__auto___52261;
if(cljs.core.chunked_seq_QMARK_(seq__52075_52262__$1)){
var c__4679__auto___52263 = cljs.core.chunk_first(seq__52075_52262__$1);
var G__52264 = cljs.core.chunk_rest(seq__52075_52262__$1);
var G__52265 = c__4679__auto___52263;
var G__52266 = cljs.core.count(c__4679__auto___52263);
var G__52267 = (0);
seq__52075_52246 = G__52264;
chunk__52076_52247 = G__52265;
count__52077_52248 = G__52266;
i__52078_52249 = G__52267;
continue;
} else {
var map__52082_52268 = cljs.core.first(seq__52075_52262__$1);
var map__52082_52269__$1 = cljs.core.__destructure_map(map__52082_52268);
var w_52270 = map__52082_52269__$1;
var msg_52271__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52082_52269__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52082_52269__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52082_52269__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52082_52269__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52274)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52272),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52273),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52271__$1)].join(''));


var G__52275 = cljs.core.next(seq__52075_52262__$1);
var G__52276 = null;
var G__52277 = (0);
var G__52278 = (0);
seq__52075_52246 = G__52275;
chunk__52076_52247 = G__52276;
count__52077_52248 = G__52277;
i__52078_52249 = G__52278;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__52039_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__52039_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__52091){
var map__52092 = p__52091;
var map__52092__$1 = cljs.core.__destructure_map(map__52092);
var msg = map__52092__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52092__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__52093 = cljs.core.seq(updates);
var chunk__52095 = null;
var count__52096 = (0);
var i__52097 = (0);
while(true){
if((i__52097 < count__52096)){
var path = chunk__52095.cljs$core$IIndexed$_nth$arity$2(null,i__52097);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52141_52279 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52145_52280 = null;
var count__52146_52281 = (0);
var i__52147_52282 = (0);
while(true){
if((i__52147_52282 < count__52146_52281)){
var node_52283 = chunk__52145_52280.cljs$core$IIndexed$_nth$arity$2(null,i__52147_52282);
if(cljs.core.not(node_52283.shadow$old)){
var path_match_52284 = shadow.cljs.devtools.client.browser.match_paths(node_52283.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52284)){
var new_link_52285 = (function (){var G__52157 = node_52283.cloneNode(true);
G__52157.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52284),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52157;
})();
(node_52283.shadow$old = true);

(new_link_52285.onload = ((function (seq__52141_52279,chunk__52145_52280,count__52146_52281,i__52147_52282,seq__52093,chunk__52095,count__52096,i__52097,new_link_52285,path_match_52284,node_52283,path,map__52092,map__52092__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52283);
});})(seq__52141_52279,chunk__52145_52280,count__52146_52281,i__52147_52282,seq__52093,chunk__52095,count__52096,i__52097,new_link_52285,path_match_52284,node_52283,path,map__52092,map__52092__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52284], 0));

goog.dom.insertSiblingAfter(new_link_52285,node_52283);


var G__52286 = seq__52141_52279;
var G__52287 = chunk__52145_52280;
var G__52288 = count__52146_52281;
var G__52289 = (i__52147_52282 + (1));
seq__52141_52279 = G__52286;
chunk__52145_52280 = G__52287;
count__52146_52281 = G__52288;
i__52147_52282 = G__52289;
continue;
} else {
var G__52290 = seq__52141_52279;
var G__52291 = chunk__52145_52280;
var G__52292 = count__52146_52281;
var G__52293 = (i__52147_52282 + (1));
seq__52141_52279 = G__52290;
chunk__52145_52280 = G__52291;
count__52146_52281 = G__52292;
i__52147_52282 = G__52293;
continue;
}
} else {
var G__52294 = seq__52141_52279;
var G__52295 = chunk__52145_52280;
var G__52296 = count__52146_52281;
var G__52297 = (i__52147_52282 + (1));
seq__52141_52279 = G__52294;
chunk__52145_52280 = G__52295;
count__52146_52281 = G__52296;
i__52147_52282 = G__52297;
continue;
}
} else {
var temp__5753__auto___52298 = cljs.core.seq(seq__52141_52279);
if(temp__5753__auto___52298){
var seq__52141_52299__$1 = temp__5753__auto___52298;
if(cljs.core.chunked_seq_QMARK_(seq__52141_52299__$1)){
var c__4679__auto___52300 = cljs.core.chunk_first(seq__52141_52299__$1);
var G__52301 = cljs.core.chunk_rest(seq__52141_52299__$1);
var G__52302 = c__4679__auto___52300;
var G__52303 = cljs.core.count(c__4679__auto___52300);
var G__52304 = (0);
seq__52141_52279 = G__52301;
chunk__52145_52280 = G__52302;
count__52146_52281 = G__52303;
i__52147_52282 = G__52304;
continue;
} else {
var node_52305 = cljs.core.first(seq__52141_52299__$1);
if(cljs.core.not(node_52305.shadow$old)){
var path_match_52306 = shadow.cljs.devtools.client.browser.match_paths(node_52305.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52306)){
var new_link_52307 = (function (){var G__52158 = node_52305.cloneNode(true);
G__52158.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52306),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52158;
})();
(node_52305.shadow$old = true);

(new_link_52307.onload = ((function (seq__52141_52279,chunk__52145_52280,count__52146_52281,i__52147_52282,seq__52093,chunk__52095,count__52096,i__52097,new_link_52307,path_match_52306,node_52305,seq__52141_52299__$1,temp__5753__auto___52298,path,map__52092,map__52092__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52305);
});})(seq__52141_52279,chunk__52145_52280,count__52146_52281,i__52147_52282,seq__52093,chunk__52095,count__52096,i__52097,new_link_52307,path_match_52306,node_52305,seq__52141_52299__$1,temp__5753__auto___52298,path,map__52092,map__52092__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52306], 0));

goog.dom.insertSiblingAfter(new_link_52307,node_52305);


var G__52308 = cljs.core.next(seq__52141_52299__$1);
var G__52309 = null;
var G__52310 = (0);
var G__52311 = (0);
seq__52141_52279 = G__52308;
chunk__52145_52280 = G__52309;
count__52146_52281 = G__52310;
i__52147_52282 = G__52311;
continue;
} else {
var G__52312 = cljs.core.next(seq__52141_52299__$1);
var G__52313 = null;
var G__52314 = (0);
var G__52315 = (0);
seq__52141_52279 = G__52312;
chunk__52145_52280 = G__52313;
count__52146_52281 = G__52314;
i__52147_52282 = G__52315;
continue;
}
} else {
var G__52316 = cljs.core.next(seq__52141_52299__$1);
var G__52317 = null;
var G__52318 = (0);
var G__52319 = (0);
seq__52141_52279 = G__52316;
chunk__52145_52280 = G__52317;
count__52146_52281 = G__52318;
i__52147_52282 = G__52319;
continue;
}
}
} else {
}
}
break;
}


var G__52322 = seq__52093;
var G__52323 = chunk__52095;
var G__52324 = count__52096;
var G__52325 = (i__52097 + (1));
seq__52093 = G__52322;
chunk__52095 = G__52323;
count__52096 = G__52324;
i__52097 = G__52325;
continue;
} else {
var G__52326 = seq__52093;
var G__52327 = chunk__52095;
var G__52328 = count__52096;
var G__52329 = (i__52097 + (1));
seq__52093 = G__52326;
chunk__52095 = G__52327;
count__52096 = G__52328;
i__52097 = G__52329;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52093);
if(temp__5753__auto__){
var seq__52093__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52093__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__52093__$1);
var G__52330 = cljs.core.chunk_rest(seq__52093__$1);
var G__52331 = c__4679__auto__;
var G__52332 = cljs.core.count(c__4679__auto__);
var G__52333 = (0);
seq__52093 = G__52330;
chunk__52095 = G__52331;
count__52096 = G__52332;
i__52097 = G__52333;
continue;
} else {
var path = cljs.core.first(seq__52093__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52164_52334 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52168_52335 = null;
var count__52169_52336 = (0);
var i__52170_52337 = (0);
while(true){
if((i__52170_52337 < count__52169_52336)){
var node_52338 = chunk__52168_52335.cljs$core$IIndexed$_nth$arity$2(null,i__52170_52337);
if(cljs.core.not(node_52338.shadow$old)){
var path_match_52339 = shadow.cljs.devtools.client.browser.match_paths(node_52338.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52339)){
var new_link_52341 = (function (){var G__52176 = node_52338.cloneNode(true);
G__52176.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52339),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52176;
})();
(node_52338.shadow$old = true);

(new_link_52341.onload = ((function (seq__52164_52334,chunk__52168_52335,count__52169_52336,i__52170_52337,seq__52093,chunk__52095,count__52096,i__52097,new_link_52341,path_match_52339,node_52338,path,seq__52093__$1,temp__5753__auto__,map__52092,map__52092__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52338);
});})(seq__52164_52334,chunk__52168_52335,count__52169_52336,i__52170_52337,seq__52093,chunk__52095,count__52096,i__52097,new_link_52341,path_match_52339,node_52338,path,seq__52093__$1,temp__5753__auto__,map__52092,map__52092__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52339], 0));

goog.dom.insertSiblingAfter(new_link_52341,node_52338);


var G__52344 = seq__52164_52334;
var G__52345 = chunk__52168_52335;
var G__52346 = count__52169_52336;
var G__52347 = (i__52170_52337 + (1));
seq__52164_52334 = G__52344;
chunk__52168_52335 = G__52345;
count__52169_52336 = G__52346;
i__52170_52337 = G__52347;
continue;
} else {
var G__52348 = seq__52164_52334;
var G__52349 = chunk__52168_52335;
var G__52350 = count__52169_52336;
var G__52351 = (i__52170_52337 + (1));
seq__52164_52334 = G__52348;
chunk__52168_52335 = G__52349;
count__52169_52336 = G__52350;
i__52170_52337 = G__52351;
continue;
}
} else {
var G__52352 = seq__52164_52334;
var G__52353 = chunk__52168_52335;
var G__52354 = count__52169_52336;
var G__52355 = (i__52170_52337 + (1));
seq__52164_52334 = G__52352;
chunk__52168_52335 = G__52353;
count__52169_52336 = G__52354;
i__52170_52337 = G__52355;
continue;
}
} else {
var temp__5753__auto___52356__$1 = cljs.core.seq(seq__52164_52334);
if(temp__5753__auto___52356__$1){
var seq__52164_52358__$1 = temp__5753__auto___52356__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52164_52358__$1)){
var c__4679__auto___52359 = cljs.core.chunk_first(seq__52164_52358__$1);
var G__52360 = cljs.core.chunk_rest(seq__52164_52358__$1);
var G__52361 = c__4679__auto___52359;
var G__52362 = cljs.core.count(c__4679__auto___52359);
var G__52363 = (0);
seq__52164_52334 = G__52360;
chunk__52168_52335 = G__52361;
count__52169_52336 = G__52362;
i__52170_52337 = G__52363;
continue;
} else {
var node_52364 = cljs.core.first(seq__52164_52358__$1);
if(cljs.core.not(node_52364.shadow$old)){
var path_match_52365 = shadow.cljs.devtools.client.browser.match_paths(node_52364.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52365)){
var new_link_52366 = (function (){var G__52177 = node_52364.cloneNode(true);
G__52177.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52365),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52177;
})();
(node_52364.shadow$old = true);

(new_link_52366.onload = ((function (seq__52164_52334,chunk__52168_52335,count__52169_52336,i__52170_52337,seq__52093,chunk__52095,count__52096,i__52097,new_link_52366,path_match_52365,node_52364,seq__52164_52358__$1,temp__5753__auto___52356__$1,path,seq__52093__$1,temp__5753__auto__,map__52092,map__52092__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52364);
});})(seq__52164_52334,chunk__52168_52335,count__52169_52336,i__52170_52337,seq__52093,chunk__52095,count__52096,i__52097,new_link_52366,path_match_52365,node_52364,seq__52164_52358__$1,temp__5753__auto___52356__$1,path,seq__52093__$1,temp__5753__auto__,map__52092,map__52092__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52365], 0));

goog.dom.insertSiblingAfter(new_link_52366,node_52364);


var G__52367 = cljs.core.next(seq__52164_52358__$1);
var G__52368 = null;
var G__52369 = (0);
var G__52370 = (0);
seq__52164_52334 = G__52367;
chunk__52168_52335 = G__52368;
count__52169_52336 = G__52369;
i__52170_52337 = G__52370;
continue;
} else {
var G__52371 = cljs.core.next(seq__52164_52358__$1);
var G__52372 = null;
var G__52373 = (0);
var G__52374 = (0);
seq__52164_52334 = G__52371;
chunk__52168_52335 = G__52372;
count__52169_52336 = G__52373;
i__52170_52337 = G__52374;
continue;
}
} else {
var G__52375 = cljs.core.next(seq__52164_52358__$1);
var G__52376 = null;
var G__52377 = (0);
var G__52378 = (0);
seq__52164_52334 = G__52375;
chunk__52168_52335 = G__52376;
count__52169_52336 = G__52377;
i__52170_52337 = G__52378;
continue;
}
}
} else {
}
}
break;
}


var G__52379 = cljs.core.next(seq__52093__$1);
var G__52380 = null;
var G__52381 = (0);
var G__52382 = (0);
seq__52093 = G__52379;
chunk__52095 = G__52380;
count__52096 = G__52381;
i__52097 = G__52382;
continue;
} else {
var G__52383 = cljs.core.next(seq__52093__$1);
var G__52384 = null;
var G__52385 = (0);
var G__52386 = (0);
seq__52093 = G__52383;
chunk__52095 = G__52384;
count__52096 = G__52385;
i__52097 = G__52386;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__52181){
var map__52182 = p__52181;
var map__52182__$1 = cljs.core.__destructure_map(map__52182);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52182__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__52188){
var map__52189 = p__52188;
var map__52189__$1 = cljs.core.__destructure_map(map__52189);
var _ = map__52189__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52189__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__52191,done,error){
var map__52192 = p__52191;
var map__52192__$1 = cljs.core.__destructure_map(map__52192);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52192__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__52193,done,error){
var map__52194 = p__52193;
var map__52194__$1 = cljs.core.__destructure_map(map__52194);
var msg = map__52194__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52194__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52194__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52194__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__52195){
var map__52196 = p__52195;
var map__52196__$1 = cljs.core.__destructure_map(map__52196);
var src = map__52196__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52196__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__52197 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__52197) : done.call(null,G__52197));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__52198){
var map__52199 = p__52198;
var map__52199__$1 = cljs.core.__destructure_map(map__52199);
var msg__$1 = map__52199__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52199__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e52200){var ex = e52200;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__52201){
var map__52202 = p__52201;
var map__52202__$1 = cljs.core.__destructure_map(map__52202);
var env = map__52202__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52202__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__52203){
var map__52204 = p__52203;
var map__52204__$1 = cljs.core.__destructure_map(map__52204);
var msg = map__52204__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52204__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__52207){
var map__52208 = p__52207;
var map__52208__$1 = cljs.core.__destructure_map(map__52208);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52208__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52208__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__52210){
var map__52211 = p__52210;
var map__52211__$1 = cljs.core.__destructure_map(map__52211);
var svc = map__52211__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52211__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
