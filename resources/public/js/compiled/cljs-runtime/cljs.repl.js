goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51315){
var map__51316 = p__51315;
var map__51316__$1 = cljs.core.__destructure_map(map__51316);
var m = map__51316__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51316__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51316__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51317_51530 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51318_51531 = null;
var count__51319_51532 = (0);
var i__51320_51533 = (0);
while(true){
if((i__51320_51533 < count__51319_51532)){
var f_51534 = chunk__51318_51531.cljs$core$IIndexed$_nth$arity$2(null,i__51320_51533);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51534], 0));


var G__51535 = seq__51317_51530;
var G__51536 = chunk__51318_51531;
var G__51537 = count__51319_51532;
var G__51538 = (i__51320_51533 + (1));
seq__51317_51530 = G__51535;
chunk__51318_51531 = G__51536;
count__51319_51532 = G__51537;
i__51320_51533 = G__51538;
continue;
} else {
var temp__5753__auto___51539 = cljs.core.seq(seq__51317_51530);
if(temp__5753__auto___51539){
var seq__51317_51540__$1 = temp__5753__auto___51539;
if(cljs.core.chunked_seq_QMARK_(seq__51317_51540__$1)){
var c__4679__auto___51541 = cljs.core.chunk_first(seq__51317_51540__$1);
var G__51542 = cljs.core.chunk_rest(seq__51317_51540__$1);
var G__51543 = c__4679__auto___51541;
var G__51544 = cljs.core.count(c__4679__auto___51541);
var G__51545 = (0);
seq__51317_51530 = G__51542;
chunk__51318_51531 = G__51543;
count__51319_51532 = G__51544;
i__51320_51533 = G__51545;
continue;
} else {
var f_51546 = cljs.core.first(seq__51317_51540__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51546], 0));


var G__51547 = cljs.core.next(seq__51317_51540__$1);
var G__51548 = null;
var G__51549 = (0);
var G__51550 = (0);
seq__51317_51530 = G__51547;
chunk__51318_51531 = G__51548;
count__51319_51532 = G__51549;
i__51320_51533 = G__51550;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51551 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_51551], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_51551)))?cljs.core.second(arglists_51551):arglists_51551)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51326_51552 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51327_51553 = null;
var count__51328_51554 = (0);
var i__51329_51555 = (0);
while(true){
if((i__51329_51555 < count__51328_51554)){
var vec__51340_51556 = chunk__51327_51553.cljs$core$IIndexed$_nth$arity$2(null,i__51329_51555);
var name_51557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51340_51556,(0),null);
var map__51343_51558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51340_51556,(1),null);
var map__51343_51559__$1 = cljs.core.__destructure_map(map__51343_51558);
var doc_51560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51343_51559__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51343_51559__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51557], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51561], 0));

if(cljs.core.truth_(doc_51560)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51560], 0));
} else {
}


var G__51562 = seq__51326_51552;
var G__51563 = chunk__51327_51553;
var G__51564 = count__51328_51554;
var G__51565 = (i__51329_51555 + (1));
seq__51326_51552 = G__51562;
chunk__51327_51553 = G__51563;
count__51328_51554 = G__51564;
i__51329_51555 = G__51565;
continue;
} else {
var temp__5753__auto___51566 = cljs.core.seq(seq__51326_51552);
if(temp__5753__auto___51566){
var seq__51326_51567__$1 = temp__5753__auto___51566;
if(cljs.core.chunked_seq_QMARK_(seq__51326_51567__$1)){
var c__4679__auto___51568 = cljs.core.chunk_first(seq__51326_51567__$1);
var G__51569 = cljs.core.chunk_rest(seq__51326_51567__$1);
var G__51570 = c__4679__auto___51568;
var G__51571 = cljs.core.count(c__4679__auto___51568);
var G__51572 = (0);
seq__51326_51552 = G__51569;
chunk__51327_51553 = G__51570;
count__51328_51554 = G__51571;
i__51329_51555 = G__51572;
continue;
} else {
var vec__51346_51573 = cljs.core.first(seq__51326_51567__$1);
var name_51574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51346_51573,(0),null);
var map__51349_51575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51346_51573,(1),null);
var map__51349_51576__$1 = cljs.core.__destructure_map(map__51349_51575);
var doc_51577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51349_51576__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51349_51576__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51574], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51578], 0));

if(cljs.core.truth_(doc_51577)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51577], 0));
} else {
}


var G__51579 = cljs.core.next(seq__51326_51567__$1);
var G__51580 = null;
var G__51581 = (0);
var G__51582 = (0);
seq__51326_51552 = G__51579;
chunk__51327_51553 = G__51580;
count__51328_51554 = G__51581;
i__51329_51555 = G__51582;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__51351 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51352 = null;
var count__51353 = (0);
var i__51354 = (0);
while(true){
if((i__51354 < count__51353)){
var role = chunk__51352.cljs$core$IIndexed$_nth$arity$2(null,i__51354);
var temp__5753__auto___51583__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___51583__$1)){
var spec_51584 = temp__5753__auto___51583__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51584)], 0));
} else {
}


var G__51585 = seq__51351;
var G__51586 = chunk__51352;
var G__51587 = count__51353;
var G__51588 = (i__51354 + (1));
seq__51351 = G__51585;
chunk__51352 = G__51586;
count__51353 = G__51587;
i__51354 = G__51588;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__51351);
if(temp__5753__auto____$1){
var seq__51351__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__51351__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51351__$1);
var G__51589 = cljs.core.chunk_rest(seq__51351__$1);
var G__51590 = c__4679__auto__;
var G__51591 = cljs.core.count(c__4679__auto__);
var G__51592 = (0);
seq__51351 = G__51589;
chunk__51352 = G__51590;
count__51353 = G__51591;
i__51354 = G__51592;
continue;
} else {
var role = cljs.core.first(seq__51351__$1);
var temp__5753__auto___51593__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___51593__$2)){
var spec_51594 = temp__5753__auto___51593__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51594)], 0));
} else {
}


var G__51596 = cljs.core.next(seq__51351__$1);
var G__51597 = null;
var G__51598 = (0);
var G__51599 = (0);
seq__51351 = G__51596;
chunk__51352 = G__51597;
count__51353 = G__51598;
i__51354 = G__51599;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__51605 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__51606 = cljs.core.ex_cause(t);
via = G__51605;
t = G__51606;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__51450 = datafied_throwable;
var map__51450__$1 = cljs.core.__destructure_map(map__51450);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51450__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51450__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51450__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__51451 = cljs.core.last(via);
var map__51451__$1 = cljs.core.__destructure_map(map__51451);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51451__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51451__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51451__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__51452 = data;
var map__51452__$1 = cljs.core.__destructure_map(map__51452);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51452__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51452__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51452__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__51453 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__51453__$1 = cljs.core.__destructure_map(map__51453);
var top_data = map__51453__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51453__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__51458 = phase;
var G__51458__$1 = (((G__51458 instanceof cljs.core.Keyword))?G__51458.fqn:null);
switch (G__51458__$1) {
case "read-source":
var map__51460 = data;
var map__51460__$1 = cljs.core.__destructure_map(map__51460);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51460__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51460__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__51461 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__51461__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51461,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51461);
var G__51461__$2 = (cljs.core.truth_((function (){var fexpr__51462 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51462.cljs$core$IFn$_invoke$arity$1 ? fexpr__51462.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51462.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51461__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51461__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51461__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51461__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__51464 = top_data;
var G__51464__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51464,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51464);
var G__51464__$2 = (cljs.core.truth_((function (){var fexpr__51465 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51465.cljs$core$IFn$_invoke$arity$1 ? fexpr__51465.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51465.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51464__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51464__$1);
var G__51464__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51464__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51464__$2);
var G__51464__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51464__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51464__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51464__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51464__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__51466 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51466,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51466,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51466,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51466,(3),null);
var G__51469 = top_data;
var G__51469__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51469,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__51469);
var G__51469__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51469__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__51469__$1);
var G__51469__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51469__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__51469__$2);
var G__51469__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51469__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51469__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51469__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51469__$4;
}

break;
case "execution":
var vec__51471 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51471,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51471,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51471,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51471,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51441_SHARP_){
var or__4253__auto__ = (p1__51441_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__51475 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51475.cljs$core$IFn$_invoke$arity$1 ? fexpr__51475.cljs$core$IFn$_invoke$arity$1(p1__51441_SHARP_) : fexpr__51475.call(null,p1__51441_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__51476 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__51476__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51476,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__51476);
var G__51476__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51476__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51476__$1);
var G__51476__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51476__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__51476__$2);
var G__51476__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51476__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__51476__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51476__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51476__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51458__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__51481){
var map__51482 = p__51481;
var map__51482__$1 = cljs.core.__destructure_map(map__51482);
var triage_data = map__51482__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51482__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51482__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51482__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51482__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51482__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51482__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51482__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51482__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__51491 = phase;
var G__51491__$1 = (((G__51491 instanceof cljs.core.Keyword))?G__51491.fqn:null);
switch (G__51491__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__51492 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__51493 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51494 = loc;
var G__51495 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51496_51620 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51497_51621 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51498_51622 = true;
var _STAR_print_fn_STAR__temp_val__51499_51623 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51498_51622);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51499_51623);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51479_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51479_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51497_51621);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51496_51620);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51492,G__51493,G__51494,G__51495) : format.call(null,G__51492,G__51493,G__51494,G__51495));

break;
case "macroexpansion":
var G__51500 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__51501 = cause_type;
var G__51502 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51503 = loc;
var G__51504 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51500,G__51501,G__51502,G__51503,G__51504) : format.call(null,G__51500,G__51501,G__51502,G__51503,G__51504));

break;
case "compile-syntax-check":
var G__51505 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__51506 = cause_type;
var G__51507 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51508 = loc;
var G__51509 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51505,G__51506,G__51507,G__51508,G__51509) : format.call(null,G__51505,G__51506,G__51507,G__51508,G__51509));

break;
case "compilation":
var G__51510 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__51511 = cause_type;
var G__51512 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51513 = loc;
var G__51514 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51510,G__51511,G__51512,G__51513,G__51514) : format.call(null,G__51510,G__51511,G__51512,G__51513,G__51514));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__51515 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__51516 = symbol;
var G__51517 = loc;
var G__51518 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51520_51631 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51521_51632 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51522_51633 = true;
var _STAR_print_fn_STAR__temp_val__51523_51634 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51522_51633);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51523_51634);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51480_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51480_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51521_51632);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51520_51631);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51515,G__51516,G__51517,G__51518) : format.call(null,G__51515,G__51516,G__51517,G__51518));
} else {
var G__51524 = "Execution error%s at %s(%s).\n%s\n";
var G__51525 = cause_type;
var G__51526 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51527 = loc;
var G__51528 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51524,G__51525,G__51526,G__51527,G__51528) : format.call(null,G__51524,G__51525,G__51526,G__51527,G__51528));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51491__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
