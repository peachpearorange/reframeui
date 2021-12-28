goog.provide('re_frisk.reagent.impl.batching');
re_frisk.reagent.impl.batching.operation_name = cljs.core.memoize((function (c){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(reagent.impl.component.component_name(c),/ > /));
}));
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.reagent !== 'undefined') && (typeof re_frisk.reagent.impl !== 'undefined') && (typeof re_frisk.reagent.impl.batching !== 'undefined') && (typeof re_frisk.reagent.impl.batching.original_next_tick !== 'undefined')){
} else {
re_frisk.reagent.impl.batching.original_next_tick = reagent.impl.batching.next_tick;
}
re_frisk.reagent.impl.batching.next_tick = (function re_frisk$reagent$impl$batching$next_tick(f){
var G__48643 = (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__48644 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__48645 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"raf","raf",-1295410152)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__48645);

try{try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__48646_48665 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__48647_48666 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"raf-end","raf-end",-220596864)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__48647_48666);

try{try{}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__40542__auto___48667 = re_frame.interop.now();
var duration__40543__auto___48668 = (end__40542__auto___48667 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40543__auto___48668,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__40542__auto___48667);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__48646_48665);
}} else {
}

if(reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__48648 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__48649 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__48649);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__40542__auto___48669 = re_frame.interop.now();
var duration__40543__auto___48670 = (end__40542__auto___48669 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40543__auto___48670,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__40542__auto___48669);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__48648);
}} else {
return null;
}
} else {
return null;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__40542__auto___48671 = re_frame.interop.now();
var duration__40543__auto___48672 = (end__40542__auto___48671 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40543__auto___48672,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__40542__auto___48671);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__48644);
}} else {
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__48651_48673 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__48652_48674 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"raf-end","raf-end",-220596864)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__48652_48674);

try{try{}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__40542__auto___48675 = re_frame.interop.now();
var duration__40543__auto___48676 = (end__40542__auto___48675 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40543__auto___48676,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__40542__auto___48675);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__48651_48673);
}} else {
}

if(reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__48654 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__48655 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__48655);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__40542__auto___48677 = re_frame.interop.now();
var duration__40543__auto___48678 = (end__40542__auto___48677 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40543__auto___48678,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__40542__auto___48677);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__48654);
}} else {
return null;
}
} else {
return null;
}
}
});
return (re_frisk.reagent.impl.batching.original_next_tick.cljs$core$IFn$_invoke$arity$1 ? re_frisk.reagent.impl.batching.original_next_tick.cljs$core$IFn$_invoke$arity$1(G__48643) : re_frisk.reagent.impl.batching.original_next_tick.call(null,G__48643));
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.reagent !== 'undefined') && (typeof re_frisk.reagent.impl !== 'undefined') && (typeof re_frisk.reagent.impl.batching !== 'undefined') && (typeof re_frisk.reagent.impl.batching.original_run_queue !== 'undefined')){
} else {
re_frisk.reagent.impl.batching.original_run_queue = reagent.impl.batching.run_queue;
}
re_frisk.reagent.impl.batching.run_queue = (function re_frisk$reagent$impl$batching$run_queue(a){
a.sort(reagent.impl.batching.compare_mount_order);

var n__4741__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4741__auto__)){
var c_48679 = (a[i]);
if(c_48679.cljsIsDirty === true){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__48658_48680 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__48659_48681 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"force-update","force-update",725693267),new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frisk.reagent.impl.batching.operation_name(c_48679)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__48659_48681);

try{try{c_48679.forceUpdate();
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__40542__auto___48682 = re_frame.interop.now();
var duration__40543__auto___48683 = (end__40542__auto___48682 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40543__auto___48683,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__40542__auto___48682);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__48658_48680);
}} else {
c_48679.forceUpdate();
}
} else {
}

var G__48684 = (i + (1));
i = G__48684;
continue;
} else {
return null;
}
break;
}
});
re_frisk.reagent.impl.batching.patch_next_tick = (function re_frisk$reagent$impl$batching$patch_next_tick(){
(reagent.impl.batching.next_tick = re_frisk.reagent.impl.batching.next_tick);

return (reagent.impl.batching.run_queue = re_frisk.reagent.impl.batching.run_queue);
});

//# sourceMappingURL=re_frisk.reagent.impl.batching.js.map
