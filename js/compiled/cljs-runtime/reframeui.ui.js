goog.provide('reframeui.ui');
reframeui.ui.d = (function reframeui$ui$d(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52369 = arguments.length;
var i__4865__auto___52370 = (0);
while(true){
if((i__4865__auto___52370 < len__4864__auto___52369)){
args__4870__auto__.push((arguments[i__4865__auto___52370]));

var G__52371 = (i__4865__auto___52370 + (1));
i__4865__auto___52370 = G__52371;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return reframeui.ui.d.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(reframeui.ui.d.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return re_frame.core.dispatch(cljs.core.vec(args));
}));

(reframeui.ui.d.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(reframeui.ui.d.cljs$lang$applyTo = (function (seq52349){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52349));
}));

reframeui.ui.sub = (function reframeui$ui$sub(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52372 = arguments.length;
var i__4865__auto___52373 = (0);
while(true){
if((i__4865__auto___52373 < len__4864__auto___52372)){
args__4870__auto__.push((arguments[i__4865__auto___52373]));

var G__52374 = (i__4865__auto___52373 + (1));
i__4865__auto___52373 = G__52374;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return reframeui.ui.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(reframeui.ui.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(args));
}));

(reframeui.ui.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(reframeui.ui.sub.cljs$lang$applyTo = (function (seq52350){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52350));
}));

reframeui.ui.render_this = (function reframeui$ui$render_this(p1__52351_SHARP_){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(p1__52351_SHARP_,document.getElementById("app"));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reframeui.ui","click-button","reframeui.ui/click-button",586307547),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"click-count","click-count",-1016274336),cljs.core.inc);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("reframeui.ui","clicks","reframeui.ui/clicks",1131939563),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"click-count","click-count",-1016274336).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
reframeui.ui.button = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"click this!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return reframeui.ui.d.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("reframeui.ui","click-button","reframeui.ui/click-button",586307547)], 0));
}),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"click iiiiiit!!!",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"blue"], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"draggable","draggable",1676206163),true], null)], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-mouse-position","set-mouse-position",2072115149),(function (db,p__52352){
var vec__52353 = p__52352;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52353,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52353,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg.clientX,arg.clientY], null));
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-time","set-time",-835321927),(function (db,p__52356){
var vec__52357 = p__52356;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52357,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52357,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"time","time",1385887882),t);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
setInterval((function (){
return reframeui.ui.d.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"set-time","set-time",-835321927),Date.now()], 0));
}),(100));
reframeui.ui.fullscreenstyle = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"background","background",-863952629),"#222222"], null);
reframeui.ui.ui = (function reframeui$ui$ui(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"style","style",-496642736),reframeui.ui.fullscreenstyle,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"stretch","stretch",-1888837380),new cljs.core.Keyword(null,"gap","gap",80255254),"0px",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),(function (p1__52360_SHARP_){
return reframeui.ui.d.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"set-mouse-position","set-mouse-position",2072115149),p1__52360_SHARP_], 0));
})], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reframeui.ui.sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("reframeui.ui","clicks","reframeui.ui/clicks",1131939563)], 0))))," clicks so far. Click more!"].join(''),new cljs.core.Keyword(null,"size","size",1098693007),"auto"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),["mouse position: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(reframeui.ui.sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492)], 0)))], 0))].join(''),new cljs.core.Keyword(null,"size","size",1098693007),"auto"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),reframeui.ui.button,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),reframeui.ui.button,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"end","end",-268185958)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),(function (){var G__52361 = new cljs.core.Keyword(null,"style","style",-496642736);
var G__52362 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotate","rotate",152705015),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.mod(cljs.core.deref(reframeui.ui.sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"time","time",1385887882)], 0))),(1000000)) * 1.0E-4)),"turn"].join('')], null);
var G__52363 = new cljs.core.Keyword(null,"model","model",331153215);
var G__52364 = Math.round(((50) + ((80) * Math.sin((0.001 * cljs.core.mod(cljs.core.deref(reframeui.ui.sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"time","time",1385887882)], 0))),(1000000)))))));
var G__52365 = new cljs.core.Keyword(null,"striped?","striped?",-797214979);
var G__52366 = true;
var G__52367 = new cljs.core.Keyword(null,"width","width",-384071477);
var G__52368 = "300px";
return (re_com.core.progress_bar.cljs$core$IFn$_invoke$arity$8 ? re_com.core.progress_bar.cljs$core$IFn$_invoke$arity$8(G__52361,G__52362,G__52363,G__52364,G__52365,G__52366,G__52367,G__52368) : re_com.core.progress_bar.call(null,G__52361,G__52362,G__52363,G__52364,G__52365,G__52366,G__52367,G__52368));
})(),new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),(re_com.core.input_text.cljs$core$IFn$_invoke$arity$2 ? re_com.core.input_text.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true) : re_com.core.input_text.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true)),new cljs.core.Keyword(null,"size","size",1098693007),"auto"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"left","left",-399115937),(6.5 + cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reframeui.ui.sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492)], 0))),(0))),new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reframeui.ui.sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492)], 0))),(1)),new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null)], null)], null)], null)], null);
});

//# sourceMappingURL=reframeui.ui.js.map
