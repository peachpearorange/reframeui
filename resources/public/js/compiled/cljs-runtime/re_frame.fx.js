goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__40821 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__40822 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__40822);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___41005 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___41005)){
var new_db_41006 = temp__5753__auto___41005;
var fexpr__40823_41007 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__40823_41007.cljs$core$IFn$_invoke$arity$1 ? fexpr__40823_41007.cljs$core$IFn$_invoke$arity$1(new_db_41006) : fexpr__40823_41007.call(null,new_db_41006));
} else {
}

var seq__40824 = cljs.core.seq(effects_without_db);
var chunk__40825 = null;
var count__40826 = (0);
var i__40827 = (0);
while(true){
if((i__40827 < count__40826)){
var vec__40834 = chunk__40825.cljs$core$IIndexed$_nth$arity$2(null,i__40827);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40834,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40834,(1),null);
var temp__5751__auto___41008 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___41008)){
var effect_fn_41009 = temp__5751__auto___41008;
(effect_fn_41009.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41009.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41009.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41010 = seq__40824;
var G__41011 = chunk__40825;
var G__41012 = count__40826;
var G__41013 = (i__40827 + (1));
seq__40824 = G__41010;
chunk__40825 = G__41011;
count__40826 = G__41012;
i__40827 = G__41013;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40824);
if(temp__5753__auto__){
var seq__40824__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40824__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__40824__$1);
var G__41014 = cljs.core.chunk_rest(seq__40824__$1);
var G__41015 = c__4679__auto__;
var G__41016 = cljs.core.count(c__4679__auto__);
var G__41017 = (0);
seq__40824 = G__41014;
chunk__40825 = G__41015;
count__40826 = G__41016;
i__40827 = G__41017;
continue;
} else {
var vec__40837 = cljs.core.first(seq__40824__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40837,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40837,(1),null);
var temp__5751__auto___41018 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___41018)){
var effect_fn_41019 = temp__5751__auto___41018;
(effect_fn_41019.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41019.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41019.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41020 = cljs.core.next(seq__40824__$1);
var G__41021 = null;
var G__41022 = (0);
var G__41023 = (0);
seq__40824 = G__41020;
chunk__40825 = G__41021;
count__40826 = G__41022;
i__40827 = G__41023;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__40542__auto___41025 = re_frame.interop.now();
var duration__40543__auto___41026 = (end__40542__auto___41025 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40543__auto___41026,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__40542__auto___41025);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__40821);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___41027 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___41027)){
var new_db_41028 = temp__5753__auto___41027;
var fexpr__40840_41029 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__40840_41029.cljs$core$IFn$_invoke$arity$1 ? fexpr__40840_41029.cljs$core$IFn$_invoke$arity$1(new_db_41028) : fexpr__40840_41029.call(null,new_db_41028));
} else {
}

var seq__40841 = cljs.core.seq(effects_without_db);
var chunk__40842 = null;
var count__40843 = (0);
var i__40844 = (0);
while(true){
if((i__40844 < count__40843)){
var vec__40864 = chunk__40842.cljs$core$IIndexed$_nth$arity$2(null,i__40844);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40864,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40864,(1),null);
var temp__5751__auto___41031 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___41031)){
var effect_fn_41032 = temp__5751__auto___41031;
(effect_fn_41032.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41032.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41032.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41038 = seq__40841;
var G__41039 = chunk__40842;
var G__41040 = count__40843;
var G__41041 = (i__40844 + (1));
seq__40841 = G__41038;
chunk__40842 = G__41039;
count__40843 = G__41040;
i__40844 = G__41041;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40841);
if(temp__5753__auto__){
var seq__40841__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40841__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__40841__$1);
var G__41042 = cljs.core.chunk_rest(seq__40841__$1);
var G__41043 = c__4679__auto__;
var G__41044 = cljs.core.count(c__4679__auto__);
var G__41045 = (0);
seq__40841 = G__41042;
chunk__40842 = G__41043;
count__40843 = G__41044;
i__40844 = G__41045;
continue;
} else {
var vec__40869 = cljs.core.first(seq__40841__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40869,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40869,(1),null);
var temp__5751__auto___41046 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___41046)){
var effect_fn_41047 = temp__5751__auto___41046;
(effect_fn_41047.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41047.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41047.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41048 = cljs.core.next(seq__40841__$1);
var G__41049 = null;
var G__41050 = (0);
var G__41051 = (0);
seq__40841 = G__41048;
chunk__40842 = G__41049;
count__40843 = G__41050;
i__40844 = G__41051;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__40873){
var map__40874 = p__40873;
var map__40874__$1 = cljs.core.__destructure_map(map__40874);
var effect = map__40874__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40874__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40874__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__40879 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__40880 = null;
var count__40881 = (0);
var i__40882 = (0);
while(true){
if((i__40882 < count__40881)){
var effect = chunk__40880.cljs$core$IIndexed$_nth$arity$2(null,i__40882);
re_frame.fx.dispatch_later(effect);


var G__41056 = seq__40879;
var G__41057 = chunk__40880;
var G__41058 = count__40881;
var G__41059 = (i__40882 + (1));
seq__40879 = G__41056;
chunk__40880 = G__41057;
count__40881 = G__41058;
i__40882 = G__41059;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40879);
if(temp__5753__auto__){
var seq__40879__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40879__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__40879__$1);
var G__41060 = cljs.core.chunk_rest(seq__40879__$1);
var G__41061 = c__4679__auto__;
var G__41062 = cljs.core.count(c__4679__auto__);
var G__41063 = (0);
seq__40879 = G__41060;
chunk__40880 = G__41061;
count__40881 = G__41062;
i__40882 = G__41063;
continue;
} else {
var effect = cljs.core.first(seq__40879__$1);
re_frame.fx.dispatch_later(effect);


var G__41064 = cljs.core.next(seq__40879__$1);
var G__41065 = null;
var G__41066 = (0);
var G__41067 = (0);
seq__40879 = G__41064;
chunk__40880 = G__41065;
count__40881 = G__41066;
i__40882 = G__41067;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__40890 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__40891 = null;
var count__40892 = (0);
var i__40893 = (0);
while(true){
if((i__40893 < count__40892)){
var vec__40933 = chunk__40891.cljs$core$IIndexed$_nth$arity$2(null,i__40893);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40933,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40933,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___41069 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___41069)){
var effect_fn_41070 = temp__5751__auto___41069;
(effect_fn_41070.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41070.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41070.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__41071 = seq__40890;
var G__41072 = chunk__40891;
var G__41073 = count__40892;
var G__41074 = (i__40893 + (1));
seq__40890 = G__41071;
chunk__40891 = G__41072;
count__40892 = G__41073;
i__40893 = G__41074;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40890);
if(temp__5753__auto__){
var seq__40890__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40890__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__40890__$1);
var G__41075 = cljs.core.chunk_rest(seq__40890__$1);
var G__41076 = c__4679__auto__;
var G__41077 = cljs.core.count(c__4679__auto__);
var G__41078 = (0);
seq__40890 = G__41075;
chunk__40891 = G__41076;
count__40892 = G__41077;
i__40893 = G__41078;
continue;
} else {
var vec__40937 = cljs.core.first(seq__40890__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40937,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40937,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___41079 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___41079)){
var effect_fn_41080 = temp__5751__auto___41079;
(effect_fn_41080.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41080.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41080.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__41081 = cljs.core.next(seq__40890__$1);
var G__41082 = null;
var G__41083 = (0);
var G__41084 = (0);
seq__40890 = G__41081;
chunk__40891 = G__41082;
count__40892 = G__41083;
i__40893 = G__41084;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__40947 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__40948 = null;
var count__40949 = (0);
var i__40950 = (0);
while(true){
if((i__40950 < count__40949)){
var event = chunk__40948.cljs$core$IIndexed$_nth$arity$2(null,i__40950);
re_frame.router.dispatch(event);


var G__41085 = seq__40947;
var G__41086 = chunk__40948;
var G__41087 = count__40949;
var G__41088 = (i__40950 + (1));
seq__40947 = G__41085;
chunk__40948 = G__41086;
count__40949 = G__41087;
i__40950 = G__41088;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40947);
if(temp__5753__auto__){
var seq__40947__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40947__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__40947__$1);
var G__41089 = cljs.core.chunk_rest(seq__40947__$1);
var G__41090 = c__4679__auto__;
var G__41091 = cljs.core.count(c__4679__auto__);
var G__41092 = (0);
seq__40947 = G__41089;
chunk__40948 = G__41090;
count__40949 = G__41091;
i__40950 = G__41092;
continue;
} else {
var event = cljs.core.first(seq__40947__$1);
re_frame.router.dispatch(event);


var G__41093 = cljs.core.next(seq__40947__$1);
var G__41094 = null;
var G__41095 = (0);
var G__41096 = (0);
seq__40947 = G__41093;
chunk__40948 = G__41094;
count__40949 = G__41095;
i__40950 = G__41096;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__40961 = cljs.core.seq(value);
var chunk__40962 = null;
var count__40963 = (0);
var i__40964 = (0);
while(true){
if((i__40964 < count__40963)){
var event = chunk__40962.cljs$core$IIndexed$_nth$arity$2(null,i__40964);
clear_event(event);


var G__41098 = seq__40961;
var G__41099 = chunk__40962;
var G__41100 = count__40963;
var G__41101 = (i__40964 + (1));
seq__40961 = G__41098;
chunk__40962 = G__41099;
count__40963 = G__41100;
i__40964 = G__41101;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40961);
if(temp__5753__auto__){
var seq__40961__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40961__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__40961__$1);
var G__41102 = cljs.core.chunk_rest(seq__40961__$1);
var G__41103 = c__4679__auto__;
var G__41104 = cljs.core.count(c__4679__auto__);
var G__41105 = (0);
seq__40961 = G__41102;
chunk__40962 = G__41103;
count__40963 = G__41104;
i__40964 = G__41105;
continue;
} else {
var event = cljs.core.first(seq__40961__$1);
clear_event(event);


var G__41106 = cljs.core.next(seq__40961__$1);
var G__41107 = null;
var G__41108 = (0);
var G__41109 = (0);
seq__40961 = G__41106;
chunk__40962 = G__41107;
count__40963 = G__41108;
i__40964 = G__41109;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
