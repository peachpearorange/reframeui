goog.provide('re_frisk.stat');
re_frisk.stat.assoc_map = (function re_frisk$stat$assoc_map(acc,key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cnt","cnt",283978798),(0),new cljs.core.Keyword(null,"ms","ms",-1152709733),(0)], null));
});
re_frisk.stat.get_re_frame_handlers = (function re_frisk$stat$get_re_frame_handlers(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fx","fx",-1237829572).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),new cljs.core.Keyword(null,"db","db",993250759)], 0)))),new cljs.core.Keyword(null,"cofx","cofx",2013202907),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cofx","cofx",2013202907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)),new cljs.core.Keyword(null,"db","db",993250759)))),new cljs.core.Keyword(null,"event","event",301435442),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)))),new cljs.core.Keyword(null,"sub","sub",-2093760025),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler))))], null);
});
re_frisk.stat.init_stat = (function re_frisk$stat$init_stat(re_frame_data){
if(cljs.core.empty_QMARK_(cljs.core.deref(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data)))){
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),re_frisk.stat.get_re_frame_handlers());
} else {
return null;
}
});
re_frisk.stat.update_trace_stat = (function re_frisk$stat$update_trace_stat(re_frame_data,traces){
var seq__48626 = cljs.core.seq(traces);
var chunk__48627 = null;
var count__48628 = (0);
var i__48629 = (0);
while(true){
if((i__48629 < count__48628)){
var map__48697 = chunk__48627.cljs$core$IIndexed$_nth$arity$2(null,i__48629);
var map__48697__$1 = cljs.core.__destructure_map(map__48697);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48697__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48697__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48697__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48697__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48697__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration], 0));

if((cljs.core.count(effects) > (0))){
var seq__48698_48752 = cljs.core.seq(cljs.core.keys(effects));
var chunk__48699_48753 = null;
var count__48700_48754 = (0);
var i__48701_48755 = (0);
while(true){
if((i__48701_48755 < count__48700_48754)){
var key_48756 = chunk__48699_48753.cljs$core$IIndexed$_nth$arity$2(null,i__48701_48755);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_48756,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__48757 = seq__48698_48752;
var G__48758 = chunk__48699_48753;
var G__48759 = count__48700_48754;
var G__48760 = (i__48701_48755 + (1));
seq__48698_48752 = G__48757;
chunk__48699_48753 = G__48758;
count__48700_48754 = G__48759;
i__48701_48755 = G__48760;
continue;
} else {
var temp__5753__auto___48762 = cljs.core.seq(seq__48698_48752);
if(temp__5753__auto___48762){
var seq__48698_48763__$1 = temp__5753__auto___48762;
if(cljs.core.chunked_seq_QMARK_(seq__48698_48763__$1)){
var c__4679__auto___48764 = cljs.core.chunk_first(seq__48698_48763__$1);
var G__48765 = cljs.core.chunk_rest(seq__48698_48763__$1);
var G__48766 = c__4679__auto___48764;
var G__48767 = cljs.core.count(c__4679__auto___48764);
var G__48768 = (0);
seq__48698_48752 = G__48765;
chunk__48699_48753 = G__48766;
count__48700_48754 = G__48767;
i__48701_48755 = G__48768;
continue;
} else {
var key_48769 = cljs.core.first(seq__48698_48763__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_48769,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__48771 = cljs.core.next(seq__48698_48763__$1);
var G__48772 = null;
var G__48773 = (0);
var G__48774 = (0);
seq__48698_48752 = G__48771;
chunk__48699_48753 = G__48772;
count__48700_48754 = G__48773;
i__48701_48755 = G__48774;
continue;
}
} else {
}
}
break;
}
} else {
}

if((cljs.core.count(coeffects) > (0))){
var seq__48702_48776 = cljs.core.seq(cljs.core.keys(coeffects));
var chunk__48703_48777 = null;
var count__48704_48778 = (0);
var i__48705_48779 = (0);
while(true){
if((i__48705_48779 < count__48704_48778)){
var key_48780 = chunk__48703_48777.cljs$core$IIndexed$_nth$arity$2(null,i__48705_48779);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_48780,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__48781 = seq__48702_48776;
var G__48782 = chunk__48703_48777;
var G__48783 = count__48704_48778;
var G__48784 = (i__48705_48779 + (1));
seq__48702_48776 = G__48781;
chunk__48703_48777 = G__48782;
count__48704_48778 = G__48783;
i__48705_48779 = G__48784;
continue;
} else {
var temp__5753__auto___48785 = cljs.core.seq(seq__48702_48776);
if(temp__5753__auto___48785){
var seq__48702_48786__$1 = temp__5753__auto___48785;
if(cljs.core.chunked_seq_QMARK_(seq__48702_48786__$1)){
var c__4679__auto___48787 = cljs.core.chunk_first(seq__48702_48786__$1);
var G__48788 = cljs.core.chunk_rest(seq__48702_48786__$1);
var G__48789 = c__4679__auto___48787;
var G__48790 = cljs.core.count(c__4679__auto___48787);
var G__48791 = (0);
seq__48702_48776 = G__48788;
chunk__48703_48777 = G__48789;
count__48704_48778 = G__48790;
i__48705_48779 = G__48791;
continue;
} else {
var key_48792 = cljs.core.first(seq__48702_48786__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_48792,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__48793 = cljs.core.next(seq__48702_48786__$1);
var G__48794 = null;
var G__48795 = (0);
var G__48796 = (0);
seq__48702_48776 = G__48793;
chunk__48703_48777 = G__48794;
count__48704_48778 = G__48795;
i__48705_48779 = G__48796;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

if(cljs.core.seq(subs)){
var seq__48706_48797 = cljs.core.seq(subs);
var chunk__48707_48798 = null;
var count__48708_48799 = (0);
var i__48709_48800 = (0);
while(true){
if((i__48709_48800 < count__48708_48799)){
var map__48712_48801 = chunk__48707_48798.cljs$core$IIndexed$_nth$arity$2(null,i__48709_48800);
var map__48712_48802__$1 = cljs.core.__destructure_map(map__48712_48801);
var op_type_48803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48712_48802__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_48804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48712_48802__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_48805__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48712_48802__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_48803,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_48804,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_48804,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_48805__$1], 0));
} else {
}


var G__48807 = seq__48706_48797;
var G__48808 = chunk__48707_48798;
var G__48809 = count__48708_48799;
var G__48810 = (i__48709_48800 + (1));
seq__48706_48797 = G__48807;
chunk__48707_48798 = G__48808;
count__48708_48799 = G__48809;
i__48709_48800 = G__48810;
continue;
} else {
var temp__5753__auto___48811 = cljs.core.seq(seq__48706_48797);
if(temp__5753__auto___48811){
var seq__48706_48812__$1 = temp__5753__auto___48811;
if(cljs.core.chunked_seq_QMARK_(seq__48706_48812__$1)){
var c__4679__auto___48813 = cljs.core.chunk_first(seq__48706_48812__$1);
var G__48814 = cljs.core.chunk_rest(seq__48706_48812__$1);
var G__48815 = c__4679__auto___48813;
var G__48816 = cljs.core.count(c__4679__auto___48813);
var G__48817 = (0);
seq__48706_48797 = G__48814;
chunk__48707_48798 = G__48815;
count__48708_48799 = G__48816;
i__48709_48800 = G__48817;
continue;
} else {
var map__48721_48818 = cljs.core.first(seq__48706_48812__$1);
var map__48721_48819__$1 = cljs.core.__destructure_map(map__48721_48818);
var op_type_48820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48721_48819__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_48821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48721_48819__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_48822__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48721_48819__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_48820,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_48821,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_48821,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_48822__$1], 0));
} else {
}


var G__48823 = cljs.core.next(seq__48706_48812__$1);
var G__48824 = null;
var G__48825 = (0);
var G__48826 = (0);
seq__48706_48797 = G__48823;
chunk__48707_48798 = G__48824;
count__48708_48799 = G__48825;
i__48709_48800 = G__48826;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__48827 = seq__48626;
var G__48828 = chunk__48627;
var G__48829 = count__48628;
var G__48830 = (i__48629 + (1));
seq__48626 = G__48827;
chunk__48627 = G__48828;
count__48628 = G__48829;
i__48629 = G__48830;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48626);
if(temp__5753__auto__){
var seq__48626__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48626__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48626__$1);
var G__48831 = cljs.core.chunk_rest(seq__48626__$1);
var G__48832 = c__4679__auto__;
var G__48833 = cljs.core.count(c__4679__auto__);
var G__48834 = (0);
seq__48626 = G__48831;
chunk__48627 = G__48832;
count__48628 = G__48833;
i__48629 = G__48834;
continue;
} else {
var map__48734 = cljs.core.first(seq__48626__$1);
var map__48734__$1 = cljs.core.__destructure_map(map__48734);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48734__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48734__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48734__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48734__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48734__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration], 0));

if((cljs.core.count(effects) > (0))){
var seq__48735_48835 = cljs.core.seq(cljs.core.keys(effects));
var chunk__48736_48836 = null;
var count__48737_48837 = (0);
var i__48738_48838 = (0);
while(true){
if((i__48738_48838 < count__48737_48837)){
var key_48839 = chunk__48736_48836.cljs$core$IIndexed$_nth$arity$2(null,i__48738_48838);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_48839,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__48840 = seq__48735_48835;
var G__48841 = chunk__48736_48836;
var G__48842 = count__48737_48837;
var G__48843 = (i__48738_48838 + (1));
seq__48735_48835 = G__48840;
chunk__48736_48836 = G__48841;
count__48737_48837 = G__48842;
i__48738_48838 = G__48843;
continue;
} else {
var temp__5753__auto___48844__$1 = cljs.core.seq(seq__48735_48835);
if(temp__5753__auto___48844__$1){
var seq__48735_48845__$1 = temp__5753__auto___48844__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48735_48845__$1)){
var c__4679__auto___48846 = cljs.core.chunk_first(seq__48735_48845__$1);
var G__48847 = cljs.core.chunk_rest(seq__48735_48845__$1);
var G__48848 = c__4679__auto___48846;
var G__48849 = cljs.core.count(c__4679__auto___48846);
var G__48850 = (0);
seq__48735_48835 = G__48847;
chunk__48736_48836 = G__48848;
count__48737_48837 = G__48849;
i__48738_48838 = G__48850;
continue;
} else {
var key_48851 = cljs.core.first(seq__48735_48845__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_48851,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__48852 = cljs.core.next(seq__48735_48845__$1);
var G__48853 = null;
var G__48854 = (0);
var G__48855 = (0);
seq__48735_48835 = G__48852;
chunk__48736_48836 = G__48853;
count__48737_48837 = G__48854;
i__48738_48838 = G__48855;
continue;
}
} else {
}
}
break;
}
} else {
}

if((cljs.core.count(coeffects) > (0))){
var seq__48739_48856 = cljs.core.seq(cljs.core.keys(coeffects));
var chunk__48740_48857 = null;
var count__48741_48858 = (0);
var i__48742_48859 = (0);
while(true){
if((i__48742_48859 < count__48741_48858)){
var key_48860 = chunk__48740_48857.cljs$core$IIndexed$_nth$arity$2(null,i__48742_48859);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_48860,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__48861 = seq__48739_48856;
var G__48862 = chunk__48740_48857;
var G__48863 = count__48741_48858;
var G__48864 = (i__48742_48859 + (1));
seq__48739_48856 = G__48861;
chunk__48740_48857 = G__48862;
count__48741_48858 = G__48863;
i__48742_48859 = G__48864;
continue;
} else {
var temp__5753__auto___48865__$1 = cljs.core.seq(seq__48739_48856);
if(temp__5753__auto___48865__$1){
var seq__48739_48866__$1 = temp__5753__auto___48865__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48739_48866__$1)){
var c__4679__auto___48867 = cljs.core.chunk_first(seq__48739_48866__$1);
var G__48868 = cljs.core.chunk_rest(seq__48739_48866__$1);
var G__48869 = c__4679__auto___48867;
var G__48870 = cljs.core.count(c__4679__auto___48867);
var G__48871 = (0);
seq__48739_48856 = G__48868;
chunk__48740_48857 = G__48869;
count__48741_48858 = G__48870;
i__48742_48859 = G__48871;
continue;
} else {
var key_48872 = cljs.core.first(seq__48739_48866__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_48872,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__48873 = cljs.core.next(seq__48739_48866__$1);
var G__48874 = null;
var G__48875 = (0);
var G__48876 = (0);
seq__48739_48856 = G__48873;
chunk__48740_48857 = G__48874;
count__48741_48858 = G__48875;
i__48742_48859 = G__48876;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

if(cljs.core.seq(subs)){
var seq__48743_48877 = cljs.core.seq(subs);
var chunk__48744_48878 = null;
var count__48745_48879 = (0);
var i__48746_48880 = (0);
while(true){
if((i__48746_48880 < count__48745_48879)){
var map__48749_48881 = chunk__48744_48878.cljs$core$IIndexed$_nth$arity$2(null,i__48746_48880);
var map__48749_48882__$1 = cljs.core.__destructure_map(map__48749_48881);
var op_type_48883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48749_48882__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_48884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48749_48882__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_48885__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48749_48882__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_48883,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_48884,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_48884,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_48885__$1], 0));
} else {
}


var G__48886 = seq__48743_48877;
var G__48887 = chunk__48744_48878;
var G__48888 = count__48745_48879;
var G__48889 = (i__48746_48880 + (1));
seq__48743_48877 = G__48886;
chunk__48744_48878 = G__48887;
count__48745_48879 = G__48888;
i__48746_48880 = G__48889;
continue;
} else {
var temp__5753__auto___48890__$1 = cljs.core.seq(seq__48743_48877);
if(temp__5753__auto___48890__$1){
var seq__48743_48891__$1 = temp__5753__auto___48890__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48743_48891__$1)){
var c__4679__auto___48892 = cljs.core.chunk_first(seq__48743_48891__$1);
var G__48893 = cljs.core.chunk_rest(seq__48743_48891__$1);
var G__48894 = c__4679__auto___48892;
var G__48895 = cljs.core.count(c__4679__auto___48892);
var G__48896 = (0);
seq__48743_48877 = G__48893;
chunk__48744_48878 = G__48894;
count__48745_48879 = G__48895;
i__48746_48880 = G__48896;
continue;
} else {
var map__48750_48897 = cljs.core.first(seq__48743_48891__$1);
var map__48750_48898__$1 = cljs.core.__destructure_map(map__48750_48897);
var op_type_48899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48750_48898__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_48900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48750_48898__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_48901__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48750_48898__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_48899,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_48900,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_48900,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_48901__$1], 0));
} else {
}


var G__48902 = cljs.core.next(seq__48743_48891__$1);
var G__48903 = null;
var G__48904 = (0);
var G__48905 = (0);
seq__48743_48877 = G__48902;
chunk__48744_48878 = G__48903;
count__48745_48879 = G__48904;
i__48746_48880 = G__48905;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__48906 = cljs.core.next(seq__48626__$1);
var G__48907 = null;
var G__48908 = (0);
var G__48909 = (0);
seq__48626 = G__48906;
chunk__48627 = G__48907;
count__48628 = G__48908;
i__48629 = G__48909;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frisk.stat.update_event_stat = (function re_frisk$stat$update_event_stat(re_frame_data,event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);
});

//# sourceMappingURL=re_frisk.stat.js.map
