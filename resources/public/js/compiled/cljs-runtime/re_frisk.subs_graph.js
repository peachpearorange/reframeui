goog.provide('re_frisk.subs_graph');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.network !== 'undefined')){
} else {
re_frisk.subs_graph.network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.reaction__GT_operation !== 'undefined')){
} else {
re_frisk.subs_graph.reaction__GT_operation = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.view__GT_reactions !== 'undefined')){
} else {
re_frisk.subs_graph.view__GT_reactions = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.vis !== 'undefined')){
} else {
re_frisk.subs_graph.vis = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.doc !== 'undefined')){
} else {
re_frisk.subs_graph.doc = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.nodes !== 'undefined')){
} else {
re_frisk.subs_graph.nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.edges !== 'undefined')){
} else {
re_frisk.subs_graph.edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.options !== 'undefined')){
} else {
re_frisk.subs_graph.options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"solver","solver",-744421825),"forceAtlas2Based",new cljs.core.Keyword(null,"maxVelocity","maxVelocity",1721643083),(30),new cljs.core.Keyword(null,"minVelocity","minVelocity",-32716928),(10),new cljs.core.Keyword(null,"stabilization","stabilization",-1209068026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"iterations","iterations",-1402710890),(30)], null)], null)], null));
}
re_frisk.subs_graph.init = (function re_frisk$subs_graph$init(win,document){
cljs.core.reset_BANG_(re_frisk.subs_graph.vis,win.vis);

return cljs.core.reset_BANG_(re_frisk.subs_graph.doc,document);
});
re_frisk.subs_graph.set_root_node = (function re_frisk$subs_graph$set_root_node(reaction){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction))){
return null;
} else {
var data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"app-db",new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction,data);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction,"app-db");

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));
} else {
return null;
}
}
});
re_frisk.subs_graph.destroy = (function re_frisk$subs_graph$destroy(){
var temp__5753__auto__ = new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network));
if(cljs.core.truth_(temp__5753__auto__)){
var network_js = temp__5753__auto__;
network_js.destroy();

return cljs.core.reset_BANG_(re_frisk.subs_graph.network,null);
} else {
return null;
}
});
re_frisk.subs_graph.create = (function re_frisk$subs_graph$create(){
re_frisk.subs_graph.destroy();

if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__4251__auto__;
}
})())){
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.nodes)))));
var edges_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.edges)))));
var data = ({"nodes": nodes_ds, "edges": edges_ds});
var temp__5753__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("global-subs-graph-container");
if(cljs.core.truth_(temp__5753__auto__)){
var container = temp__5753__auto__;
return cljs.core.reset_BANG_(re_frisk.subs_graph.network,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"network","network",2050004697),(new Network(container,data,re_frisk.subs_graph.options))], null));
} else {
return null;
}
} else {
return null;
}
});
re_frisk.subs_graph.update_subs = (function re_frisk$subs_graph$update_subs(traces){
var temp__5753__auto___42258 = new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135).cljs$core$IFn$_invoke$arity$1(cljs.core.first(traces));
if(cljs.core.truth_(temp__5753__auto___42258)){
var app_db_reaction_42259 = temp__5753__auto___42258;
re_frisk.subs_graph.set_root_node(app_db_reaction_42259);
} else {
}

var seq__41831_42260 = cljs.core.seq(traces);
var chunk__41832_42261 = null;
var count__41833_42262 = (0);
var i__41834_42263 = (0);
while(true){
if((i__41834_42263 < count__41833_42262)){
var map__41858_42264 = chunk__41832_42261.cljs$core$IIndexed$_nth$arity$2(null,i__41834_42263);
var map__41858_42265__$1 = cljs.core.__destructure_map(map__41858_42264);
var subs_42266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41858_42265__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__41859_42267 = cljs.core.seq(subs_42266);
var chunk__41860_42268 = null;
var count__41861_42269 = (0);
var i__41862_42270 = (0);
while(true){
if((i__41862_42270 < count__41861_42269)){
var map__41869_42272 = chunk__41860_42268.cljs$core$IIndexed$_nth$arity$2(null,i__41862_42270);
var map__41869_42273__$1 = cljs.core.__destructure_map(map__41869_42272);
var operation_42274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41869_42273__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_42275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41869_42273__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_42275)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_42275,operation_42274);
} else {
}


var G__42276 = seq__41859_42267;
var G__42277 = chunk__41860_42268;
var G__42278 = count__41861_42269;
var G__42279 = (i__41862_42270 + (1));
seq__41859_42267 = G__42276;
chunk__41860_42268 = G__42277;
count__41861_42269 = G__42278;
i__41862_42270 = G__42279;
continue;
} else {
var temp__5753__auto___42280 = cljs.core.seq(seq__41859_42267);
if(temp__5753__auto___42280){
var seq__41859_42282__$1 = temp__5753__auto___42280;
if(cljs.core.chunked_seq_QMARK_(seq__41859_42282__$1)){
var c__4679__auto___42283 = cljs.core.chunk_first(seq__41859_42282__$1);
var G__42284 = cljs.core.chunk_rest(seq__41859_42282__$1);
var G__42285 = c__4679__auto___42283;
var G__42286 = cljs.core.count(c__4679__auto___42283);
var G__42287 = (0);
seq__41859_42267 = G__42284;
chunk__41860_42268 = G__42285;
count__41861_42269 = G__42286;
i__41862_42270 = G__42287;
continue;
} else {
var map__41870_42288 = cljs.core.first(seq__41859_42282__$1);
var map__41870_42289__$1 = cljs.core.__destructure_map(map__41870_42288);
var operation_42290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41870_42289__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_42291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41870_42289__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_42291)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_42291,operation_42290);
} else {
}


var G__42292 = cljs.core.next(seq__41859_42282__$1);
var G__42293 = null;
var G__42294 = (0);
var G__42295 = (0);
seq__41859_42267 = G__42292;
chunk__41860_42268 = G__42293;
count__41861_42269 = G__42294;
i__41862_42270 = G__42295;
continue;
}
} else {
}
}
break;
}


var G__42296 = seq__41831_42260;
var G__42297 = chunk__41832_42261;
var G__42298 = count__41833_42262;
var G__42299 = (i__41834_42263 + (1));
seq__41831_42260 = G__42296;
chunk__41832_42261 = G__42297;
count__41833_42262 = G__42298;
i__41834_42263 = G__42299;
continue;
} else {
var temp__5753__auto___42300 = cljs.core.seq(seq__41831_42260);
if(temp__5753__auto___42300){
var seq__41831_42301__$1 = temp__5753__auto___42300;
if(cljs.core.chunked_seq_QMARK_(seq__41831_42301__$1)){
var c__4679__auto___42302 = cljs.core.chunk_first(seq__41831_42301__$1);
var G__42303 = cljs.core.chunk_rest(seq__41831_42301__$1);
var G__42304 = c__4679__auto___42302;
var G__42305 = cljs.core.count(c__4679__auto___42302);
var G__42306 = (0);
seq__41831_42260 = G__42303;
chunk__41832_42261 = G__42304;
count__41833_42262 = G__42305;
i__41834_42263 = G__42306;
continue;
} else {
var map__41874_42307 = cljs.core.first(seq__41831_42301__$1);
var map__41874_42308__$1 = cljs.core.__destructure_map(map__41874_42307);
var subs_42309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41874_42308__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__41875_42310 = cljs.core.seq(subs_42309);
var chunk__41876_42311 = null;
var count__41877_42312 = (0);
var i__41878_42313 = (0);
while(true){
if((i__41878_42313 < count__41877_42312)){
var map__41884_42315 = chunk__41876_42311.cljs$core$IIndexed$_nth$arity$2(null,i__41878_42313);
var map__41884_42316__$1 = cljs.core.__destructure_map(map__41884_42315);
var operation_42317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41884_42316__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_42318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41884_42316__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_42318)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_42318,operation_42317);
} else {
}


var G__42321 = seq__41875_42310;
var G__42322 = chunk__41876_42311;
var G__42323 = count__41877_42312;
var G__42324 = (i__41878_42313 + (1));
seq__41875_42310 = G__42321;
chunk__41876_42311 = G__42322;
count__41877_42312 = G__42323;
i__41878_42313 = G__42324;
continue;
} else {
var temp__5753__auto___42325__$1 = cljs.core.seq(seq__41875_42310);
if(temp__5753__auto___42325__$1){
var seq__41875_42326__$1 = temp__5753__auto___42325__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41875_42326__$1)){
var c__4679__auto___42327 = cljs.core.chunk_first(seq__41875_42326__$1);
var G__42328 = cljs.core.chunk_rest(seq__41875_42326__$1);
var G__42329 = c__4679__auto___42327;
var G__42330 = cljs.core.count(c__4679__auto___42327);
var G__42331 = (0);
seq__41875_42310 = G__42328;
chunk__41876_42311 = G__42329;
count__41877_42312 = G__42330;
i__41878_42313 = G__42331;
continue;
} else {
var map__41889_42332 = cljs.core.first(seq__41875_42326__$1);
var map__41889_42333__$1 = cljs.core.__destructure_map(map__41889_42332);
var operation_42334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41889_42333__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_42335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41889_42333__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_42335)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_42335,operation_42334);
} else {
}


var G__42336 = cljs.core.next(seq__41875_42326__$1);
var G__42337 = null;
var G__42338 = (0);
var G__42339 = (0);
seq__41875_42310 = G__42336;
chunk__41876_42311 = G__42337;
count__41877_42312 = G__42338;
i__41878_42313 = G__42339;
continue;
}
} else {
}
}
break;
}


var G__42342 = cljs.core.next(seq__41831_42301__$1);
var G__42343 = null;
var G__42344 = (0);
var G__42345 = (0);
seq__41831_42260 = G__42342;
chunk__41832_42261 = G__42343;
count__41833_42262 = G__42344;
i__41834_42263 = G__42345;
continue;
}
} else {
}
}
break;
}

var new_nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__41890_42346 = cljs.core.seq(traces);
var chunk__41891_42347 = null;
var count__41892_42348 = (0);
var i__41893_42349 = (0);
while(true){
if((i__41893_42349 < count__41892_42348)){
var map__42030_42350 = chunk__41891_42347.cljs$core$IIndexed$_nth$arity$2(null,i__41893_42349);
var map__42030_42351__$1 = cljs.core.__destructure_map(map__42030_42350);
var subs_42352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42030_42351__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__42031_42353 = cljs.core.seq(subs_42352);
var chunk__42032_42354 = null;
var count__42033_42355 = (0);
var i__42034_42356 = (0);
while(true){
if((i__42034_42356 < count__42033_42355)){
var map__42075_42357 = chunk__42032_42354.cljs$core$IIndexed$_nth$arity$2(null,i__42034_42356);
var map__42075_42358__$1 = cljs.core.__destructure_map(map__42075_42357);
var op_type_42359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42075_42358__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_42360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42075_42358__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_42361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42075_42358__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_42362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42075_42358__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_42359,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_42359,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__4251__auto__){
return input_signals_42360;
} else {
return and__4251__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_42361,input_signals_42360);
} else {
}

var operation_42365__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_42361);
if(cljs.core.truth_(reaction_42362)){
var temp__5751__auto___42366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_42365__$1);
if(cljs.core.truth_(temp__5751__auto___42366)){
var old_reaction_42367 = temp__5751__auto___42366;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_42359,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_42367))){
var updated_node_42368 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_42367,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_42359,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_42359)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_42365__$1,updated_node_42368);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_42365__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_42365__$1,updated_node_42368);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_42368], null)));
}
} else {
}
} else {
}
} else {
var data_42369 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_42365__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_42365__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_42359)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_42359], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_42365__$1,data_42369);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_42365__$1,data_42369);
}
} else {
}

if(cljs.core.truth_(input_signals_42360)){
var seq__42076_42370 = cljs.core.seq(input_signals_42360);
var chunk__42077_42371 = null;
var count__42078_42372 = (0);
var i__42079_42373 = (0);
while(true){
if((i__42079_42373 < count__42078_42372)){
var input_reaction_42374 = chunk__42077_42371.cljs$core$IIndexed$_nth$arity$2(null,i__42079_42373);
var input_operation_42375 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_42374));
var reaction_path_42376 = [input_operation_42375,"-",operation_42365__$1].join('');
var temp__5751__auto___42377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_42376);
if(cljs.core.truth_(temp__5751__auto___42377)){
var old_edge_42378 = temp__5751__auto___42377;
var updated_edge_42379 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_42378,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_42376,updated_edge_42379);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_42379], null)));
} else {
}
} else {
var data_42380 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_42376,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_42375,new cljs.core.Keyword(null,"to","to",192099007),operation_42365__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_42376,data_42380);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_42380));
} else {
}
}


var G__42382 = seq__42076_42370;
var G__42383 = chunk__42077_42371;
var G__42384 = count__42078_42372;
var G__42385 = (i__42079_42373 + (1));
seq__42076_42370 = G__42382;
chunk__42077_42371 = G__42383;
count__42078_42372 = G__42384;
i__42079_42373 = G__42385;
continue;
} else {
var temp__5753__auto___42386 = cljs.core.seq(seq__42076_42370);
if(temp__5753__auto___42386){
var seq__42076_42387__$1 = temp__5753__auto___42386;
if(cljs.core.chunked_seq_QMARK_(seq__42076_42387__$1)){
var c__4679__auto___42388 = cljs.core.chunk_first(seq__42076_42387__$1);
var G__42389 = cljs.core.chunk_rest(seq__42076_42387__$1);
var G__42390 = c__4679__auto___42388;
var G__42391 = cljs.core.count(c__4679__auto___42388);
var G__42392 = (0);
seq__42076_42370 = G__42389;
chunk__42077_42371 = G__42390;
count__42078_42372 = G__42391;
i__42079_42373 = G__42392;
continue;
} else {
var input_reaction_42393 = cljs.core.first(seq__42076_42387__$1);
var input_operation_42394 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_42393));
var reaction_path_42395 = [input_operation_42394,"-",operation_42365__$1].join('');
var temp__5751__auto___42396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_42395);
if(cljs.core.truth_(temp__5751__auto___42396)){
var old_edge_42397 = temp__5751__auto___42396;
var updated_edge_42398 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_42397,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_42395,updated_edge_42398);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_42398], null)));
} else {
}
} else {
var data_42399 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_42395,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_42394,new cljs.core.Keyword(null,"to","to",192099007),operation_42365__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_42395,data_42399);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_42399));
} else {
}
}


var G__42411 = cljs.core.next(seq__42076_42387__$1);
var G__42412 = null;
var G__42413 = (0);
var G__42414 = (0);
seq__42076_42370 = G__42411;
chunk__42077_42371 = G__42412;
count__42078_42372 = G__42413;
i__42079_42373 = G__42414;
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


var G__42415 = seq__42031_42353;
var G__42416 = chunk__42032_42354;
var G__42417 = count__42033_42355;
var G__42418 = (i__42034_42356 + (1));
seq__42031_42353 = G__42415;
chunk__42032_42354 = G__42416;
count__42033_42355 = G__42417;
i__42034_42356 = G__42418;
continue;
} else {
var temp__5753__auto___42419 = cljs.core.seq(seq__42031_42353);
if(temp__5753__auto___42419){
var seq__42031_42425__$1 = temp__5753__auto___42419;
if(cljs.core.chunked_seq_QMARK_(seq__42031_42425__$1)){
var c__4679__auto___42426 = cljs.core.chunk_first(seq__42031_42425__$1);
var G__42427 = cljs.core.chunk_rest(seq__42031_42425__$1);
var G__42428 = c__4679__auto___42426;
var G__42429 = cljs.core.count(c__4679__auto___42426);
var G__42430 = (0);
seq__42031_42353 = G__42427;
chunk__42032_42354 = G__42428;
count__42033_42355 = G__42429;
i__42034_42356 = G__42430;
continue;
} else {
var map__42103_42431 = cljs.core.first(seq__42031_42425__$1);
var map__42103_42432__$1 = cljs.core.__destructure_map(map__42103_42431);
var op_type_42433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42103_42432__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_42434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42103_42432__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_42435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42103_42432__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_42436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42103_42432__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_42433,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_42433,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__4251__auto__){
return input_signals_42434;
} else {
return and__4251__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_42435,input_signals_42434);
} else {
}

var operation_42437__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_42435);
if(cljs.core.truth_(reaction_42436)){
var temp__5751__auto___42438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_42437__$1);
if(cljs.core.truth_(temp__5751__auto___42438)){
var old_reaction_42439 = temp__5751__auto___42438;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_42433,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_42439))){
var updated_node_42440 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_42439,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_42433,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_42433)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_42437__$1,updated_node_42440);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_42437__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_42437__$1,updated_node_42440);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_42440], null)));
}
} else {
}
} else {
}
} else {
var data_42441 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_42437__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_42437__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_42433)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_42433], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_42437__$1,data_42441);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_42437__$1,data_42441);
}
} else {
}

if(cljs.core.truth_(input_signals_42434)){
var seq__42105_42442 = cljs.core.seq(input_signals_42434);
var chunk__42106_42443 = null;
var count__42107_42444 = (0);
var i__42108_42445 = (0);
while(true){
if((i__42108_42445 < count__42107_42444)){
var input_reaction_42446 = chunk__42106_42443.cljs$core$IIndexed$_nth$arity$2(null,i__42108_42445);
var input_operation_42447 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_42446));
var reaction_path_42448 = [input_operation_42447,"-",operation_42437__$1].join('');
var temp__5751__auto___42449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_42448);
if(cljs.core.truth_(temp__5751__auto___42449)){
var old_edge_42450 = temp__5751__auto___42449;
var updated_edge_42451 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_42450,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_42448,updated_edge_42451);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_42451], null)));
} else {
}
} else {
var data_42452 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_42448,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_42447,new cljs.core.Keyword(null,"to","to",192099007),operation_42437__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_42448,data_42452);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_42452));
} else {
}
}


var G__42453 = seq__42105_42442;
var G__42454 = chunk__42106_42443;
var G__42455 = count__42107_42444;
var G__42456 = (i__42108_42445 + (1));
seq__42105_42442 = G__42453;
chunk__42106_42443 = G__42454;
count__42107_42444 = G__42455;
i__42108_42445 = G__42456;
continue;
} else {
var temp__5753__auto___42457__$1 = cljs.core.seq(seq__42105_42442);
if(temp__5753__auto___42457__$1){
var seq__42105_42458__$1 = temp__5753__auto___42457__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42105_42458__$1)){
var c__4679__auto___42459 = cljs.core.chunk_first(seq__42105_42458__$1);
var G__42460 = cljs.core.chunk_rest(seq__42105_42458__$1);
var G__42461 = c__4679__auto___42459;
var G__42462 = cljs.core.count(c__4679__auto___42459);
var G__42463 = (0);
seq__42105_42442 = G__42460;
chunk__42106_42443 = G__42461;
count__42107_42444 = G__42462;
i__42108_42445 = G__42463;
continue;
} else {
var input_reaction_42464 = cljs.core.first(seq__42105_42458__$1);
var input_operation_42465 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_42464));
var reaction_path_42466 = [input_operation_42465,"-",operation_42437__$1].join('');
var temp__5751__auto___42467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_42466);
if(cljs.core.truth_(temp__5751__auto___42467)){
var old_edge_42468 = temp__5751__auto___42467;
var updated_edge_42469 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_42468,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_42466,updated_edge_42469);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_42469], null)));
} else {
}
} else {
var data_42470 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_42466,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_42465,new cljs.core.Keyword(null,"to","to",192099007),operation_42437__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_42466,data_42470);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_42470));
} else {
}
}


var G__42471 = cljs.core.next(seq__42105_42458__$1);
var G__42472 = null;
var G__42473 = (0);
var G__42474 = (0);
seq__42105_42442 = G__42471;
chunk__42106_42443 = G__42472;
count__42107_42444 = G__42473;
i__42108_42445 = G__42474;
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


var G__42475 = cljs.core.next(seq__42031_42425__$1);
var G__42476 = null;
var G__42477 = (0);
var G__42478 = (0);
seq__42031_42353 = G__42475;
chunk__42032_42354 = G__42476;
count__42033_42355 = G__42477;
i__42034_42356 = G__42478;
continue;
}
} else {
}
}
break;
}


var G__42479 = seq__41890_42346;
var G__42480 = chunk__41891_42347;
var G__42481 = count__41892_42348;
var G__42482 = (i__41893_42349 + (1));
seq__41890_42346 = G__42479;
chunk__41891_42347 = G__42480;
count__41892_42348 = G__42481;
i__41893_42349 = G__42482;
continue;
} else {
var temp__5753__auto___42484 = cljs.core.seq(seq__41890_42346);
if(temp__5753__auto___42484){
var seq__41890_42485__$1 = temp__5753__auto___42484;
if(cljs.core.chunked_seq_QMARK_(seq__41890_42485__$1)){
var c__4679__auto___42486 = cljs.core.chunk_first(seq__41890_42485__$1);
var G__42487 = cljs.core.chunk_rest(seq__41890_42485__$1);
var G__42488 = c__4679__auto___42486;
var G__42489 = cljs.core.count(c__4679__auto___42486);
var G__42490 = (0);
seq__41890_42346 = G__42487;
chunk__41891_42347 = G__42488;
count__41892_42348 = G__42489;
i__41893_42349 = G__42490;
continue;
} else {
var map__42121_42492 = cljs.core.first(seq__41890_42485__$1);
var map__42121_42493__$1 = cljs.core.__destructure_map(map__42121_42492);
var subs_42494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42121_42493__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__42122_42495 = cljs.core.seq(subs_42494);
var chunk__42123_42496 = null;
var count__42124_42497 = (0);
var i__42125_42498 = (0);
while(true){
if((i__42125_42498 < count__42124_42497)){
var map__42176_42499 = chunk__42123_42496.cljs$core$IIndexed$_nth$arity$2(null,i__42125_42498);
var map__42176_42500__$1 = cljs.core.__destructure_map(map__42176_42499);
var op_type_42501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42176_42500__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_42502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42176_42500__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_42503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42176_42500__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_42504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42176_42500__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_42501,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_42501,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__4251__auto__){
return input_signals_42502;
} else {
return and__4251__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_42503,input_signals_42502);
} else {
}

var operation_42505__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_42503);
if(cljs.core.truth_(reaction_42504)){
var temp__5751__auto___42506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_42505__$1);
if(cljs.core.truth_(temp__5751__auto___42506)){
var old_reaction_42507 = temp__5751__auto___42506;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_42501,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_42507))){
var updated_node_42514 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_42507,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_42501,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_42501)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_42505__$1,updated_node_42514);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_42505__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_42505__$1,updated_node_42514);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_42514], null)));
}
} else {
}
} else {
}
} else {
var data_42515 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_42505__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_42505__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_42501)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_42501], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_42505__$1,data_42515);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_42505__$1,data_42515);
}
} else {
}

if(cljs.core.truth_(input_signals_42502)){
var seq__42179_42516 = cljs.core.seq(input_signals_42502);
var chunk__42180_42517 = null;
var count__42181_42518 = (0);
var i__42182_42519 = (0);
while(true){
if((i__42182_42519 < count__42181_42518)){
var input_reaction_42520 = chunk__42180_42517.cljs$core$IIndexed$_nth$arity$2(null,i__42182_42519);
var input_operation_42521 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_42520));
var reaction_path_42522 = [input_operation_42521,"-",operation_42505__$1].join('');
var temp__5751__auto___42523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_42522);
if(cljs.core.truth_(temp__5751__auto___42523)){
var old_edge_42524 = temp__5751__auto___42523;
var updated_edge_42525 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_42524,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_42522,updated_edge_42525);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_42525], null)));
} else {
}
} else {
var data_42526 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_42522,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_42521,new cljs.core.Keyword(null,"to","to",192099007),operation_42505__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_42522,data_42526);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_42526));
} else {
}
}


var G__42527 = seq__42179_42516;
var G__42528 = chunk__42180_42517;
var G__42529 = count__42181_42518;
var G__42530 = (i__42182_42519 + (1));
seq__42179_42516 = G__42527;
chunk__42180_42517 = G__42528;
count__42181_42518 = G__42529;
i__42182_42519 = G__42530;
continue;
} else {
var temp__5753__auto___42531__$1 = cljs.core.seq(seq__42179_42516);
if(temp__5753__auto___42531__$1){
var seq__42179_42532__$1 = temp__5753__auto___42531__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42179_42532__$1)){
var c__4679__auto___42533 = cljs.core.chunk_first(seq__42179_42532__$1);
var G__42534 = cljs.core.chunk_rest(seq__42179_42532__$1);
var G__42535 = c__4679__auto___42533;
var G__42536 = cljs.core.count(c__4679__auto___42533);
var G__42537 = (0);
seq__42179_42516 = G__42534;
chunk__42180_42517 = G__42535;
count__42181_42518 = G__42536;
i__42182_42519 = G__42537;
continue;
} else {
var input_reaction_42538 = cljs.core.first(seq__42179_42532__$1);
var input_operation_42539 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_42538));
var reaction_path_42540 = [input_operation_42539,"-",operation_42505__$1].join('');
var temp__5751__auto___42541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_42540);
if(cljs.core.truth_(temp__5751__auto___42541)){
var old_edge_42542 = temp__5751__auto___42541;
var updated_edge_42543 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_42542,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_42540,updated_edge_42543);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_42543], null)));
} else {
}
} else {
var data_42544 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_42540,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_42539,new cljs.core.Keyword(null,"to","to",192099007),operation_42505__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_42540,data_42544);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_42544));
} else {
}
}


var G__42545 = cljs.core.next(seq__42179_42532__$1);
var G__42546 = null;
var G__42547 = (0);
var G__42548 = (0);
seq__42179_42516 = G__42545;
chunk__42180_42517 = G__42546;
count__42181_42518 = G__42547;
i__42182_42519 = G__42548;
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


var G__42549 = seq__42122_42495;
var G__42550 = chunk__42123_42496;
var G__42551 = count__42124_42497;
var G__42552 = (i__42125_42498 + (1));
seq__42122_42495 = G__42549;
chunk__42123_42496 = G__42550;
count__42124_42497 = G__42551;
i__42125_42498 = G__42552;
continue;
} else {
var temp__5753__auto___42553__$1 = cljs.core.seq(seq__42122_42495);
if(temp__5753__auto___42553__$1){
var seq__42122_42554__$1 = temp__5753__auto___42553__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42122_42554__$1)){
var c__4679__auto___42555 = cljs.core.chunk_first(seq__42122_42554__$1);
var G__42556 = cljs.core.chunk_rest(seq__42122_42554__$1);
var G__42557 = c__4679__auto___42555;
var G__42558 = cljs.core.count(c__4679__auto___42555);
var G__42559 = (0);
seq__42122_42495 = G__42556;
chunk__42123_42496 = G__42557;
count__42124_42497 = G__42558;
i__42125_42498 = G__42559;
continue;
} else {
var map__42193_42560 = cljs.core.first(seq__42122_42554__$1);
var map__42193_42561__$1 = cljs.core.__destructure_map(map__42193_42560);
var op_type_42562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42193_42561__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_42563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42193_42561__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_42564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42193_42561__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_42565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42193_42561__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_42562,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_42562,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__4251__auto__){
return input_signals_42563;
} else {
return and__4251__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_42564,input_signals_42563);
} else {
}

var operation_42566__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_42564);
if(cljs.core.truth_(reaction_42565)){
var temp__5751__auto___42567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_42566__$1);
if(cljs.core.truth_(temp__5751__auto___42567)){
var old_reaction_42568 = temp__5751__auto___42567;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_42562,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_42568))){
var updated_node_42569 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_42568,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_42562,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_42562)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_42566__$1,updated_node_42569);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_42566__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_42566__$1,updated_node_42569);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_42569], null)));
}
} else {
}
} else {
}
} else {
var data_42570 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_42566__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_42566__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_42562)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_42562], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_42566__$1,data_42570);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_42566__$1,data_42570);
}
} else {
}

if(cljs.core.truth_(input_signals_42563)){
var seq__42195_42573 = cljs.core.seq(input_signals_42563);
var chunk__42196_42574 = null;
var count__42197_42575 = (0);
var i__42198_42576 = (0);
while(true){
if((i__42198_42576 < count__42197_42575)){
var input_reaction_42579 = chunk__42196_42574.cljs$core$IIndexed$_nth$arity$2(null,i__42198_42576);
var input_operation_42580 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_42579));
var reaction_path_42581 = [input_operation_42580,"-",operation_42566__$1].join('');
var temp__5751__auto___42582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_42581);
if(cljs.core.truth_(temp__5751__auto___42582)){
var old_edge_42583 = temp__5751__auto___42582;
var updated_edge_42584 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_42583,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_42581,updated_edge_42584);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_42584], null)));
} else {
}
} else {
var data_42585 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_42581,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_42580,new cljs.core.Keyword(null,"to","to",192099007),operation_42566__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_42581,data_42585);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_42585));
} else {
}
}


var G__42586 = seq__42195_42573;
var G__42587 = chunk__42196_42574;
var G__42588 = count__42197_42575;
var G__42589 = (i__42198_42576 + (1));
seq__42195_42573 = G__42586;
chunk__42196_42574 = G__42587;
count__42197_42575 = G__42588;
i__42198_42576 = G__42589;
continue;
} else {
var temp__5753__auto___42590__$2 = cljs.core.seq(seq__42195_42573);
if(temp__5753__auto___42590__$2){
var seq__42195_42591__$1 = temp__5753__auto___42590__$2;
if(cljs.core.chunked_seq_QMARK_(seq__42195_42591__$1)){
var c__4679__auto___42592 = cljs.core.chunk_first(seq__42195_42591__$1);
var G__42593 = cljs.core.chunk_rest(seq__42195_42591__$1);
var G__42594 = c__4679__auto___42592;
var G__42595 = cljs.core.count(c__4679__auto___42592);
var G__42596 = (0);
seq__42195_42573 = G__42593;
chunk__42196_42574 = G__42594;
count__42197_42575 = G__42595;
i__42198_42576 = G__42596;
continue;
} else {
var input_reaction_42597 = cljs.core.first(seq__42195_42591__$1);
var input_operation_42598 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_42597));
var reaction_path_42599 = [input_operation_42598,"-",operation_42566__$1].join('');
var temp__5751__auto___42600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_42599);
if(cljs.core.truth_(temp__5751__auto___42600)){
var old_edge_42601 = temp__5751__auto___42600;
var updated_edge_42602 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_42601,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_42599,updated_edge_42602);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_42602], null)));
} else {
}
} else {
var data_42603 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_42599,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_42598,new cljs.core.Keyword(null,"to","to",192099007),operation_42566__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_42599,data_42603);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_42603));
} else {
}
}


var G__42604 = cljs.core.next(seq__42195_42591__$1);
var G__42605 = null;
var G__42606 = (0);
var G__42607 = (0);
seq__42195_42573 = G__42604;
chunk__42196_42574 = G__42605;
count__42197_42575 = G__42606;
i__42198_42576 = G__42607;
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


var G__42608 = cljs.core.next(seq__42122_42554__$1);
var G__42609 = null;
var G__42610 = (0);
var G__42611 = (0);
seq__42122_42495 = G__42608;
chunk__42123_42496 = G__42609;
count__42124_42497 = G__42610;
i__42125_42498 = G__42611;
continue;
}
} else {
}
}
break;
}


var G__42612 = cljs.core.next(seq__41890_42485__$1);
var G__42613 = null;
var G__42614 = (0);
var G__42615 = (0);
seq__41890_42346 = G__42612;
chunk__41891_42347 = G__42613;
count__41892_42348 = G__42614;
i__41893_42349 = G__42615;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if((cljs.core.count(cljs.core.deref(new_nodes)) > (20))){
return re_frisk.subs_graph.create();
} else {
var seq__42201 = cljs.core.seq(cljs.core.vals(cljs.core.deref(new_nodes)));
var chunk__42202 = null;
var count__42203 = (0);
var i__42204 = (0);
while(true){
if((i__42204 < count__42203)){
var data = chunk__42202.cljs$core$IIndexed$_nth$arity$2(null,i__42204);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__42616 = seq__42201;
var G__42617 = chunk__42202;
var G__42618 = count__42203;
var G__42619 = (i__42204 + (1));
seq__42201 = G__42616;
chunk__42202 = G__42617;
count__42203 = G__42618;
i__42204 = G__42619;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42201);
if(temp__5753__auto__){
var seq__42201__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42201__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__42201__$1);
var G__42620 = cljs.core.chunk_rest(seq__42201__$1);
var G__42621 = c__4679__auto__;
var G__42622 = cljs.core.count(c__4679__auto__);
var G__42623 = (0);
seq__42201 = G__42620;
chunk__42202 = G__42621;
count__42203 = G__42622;
i__42204 = G__42623;
continue;
} else {
var data = cljs.core.first(seq__42201__$1);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__42624 = cljs.core.next(seq__42201__$1);
var G__42625 = null;
var G__42626 = (0);
var G__42627 = (0);
seq__42201 = G__42624;
chunk__42202 = G__42625;
count__42203 = G__42626;
i__42204 = G__42627;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.event_network !== 'undefined')){
} else {
re_frisk.subs_graph.event_network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
re_frisk.subs_graph.create_event_subs = (function re_frisk$subs_graph$create_event_subs(p__42206){
var map__42207 = p__42206;
var map__42207__$1 = cljs.core.__destructure_map(map__42207);
var app_db_reaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42207__$1,new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42207__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.event_network))){
cljs.core.deref(re_frisk.subs_graph.event_network).destroy();

cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,null);
} else {
}

if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__4251__auto__;
}
})())){
var temp__5753__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("event-subs-graph-container");
if(cljs.core.truth_(temp__5753__auto__)){
var container = temp__5753__auto__;
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([app_db_reaction,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),app_db_reaction,new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null)]));
var edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__42208_42631 = cljs.core.seq(subs);
var chunk__42209_42632 = null;
var count__42210_42633 = (0);
var i__42211_42634 = (0);
while(true){
if((i__42211_42634 < count__42210_42633)){
var map__42237_42635 = chunk__42209_42632.cljs$core$IIndexed$_nth$arity$2(null,i__42211_42634);
var map__42237_42636__$1 = cljs.core.__destructure_map(map__42237_42635);
var op_type_42637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42237_42636__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_42638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42237_42636__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_42639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42237_42636__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_42640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42237_42636__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5751__auto___42641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_42638);
if(cljs.core.truth_(temp__5751__auto___42641)){
var old_reaction_42642 = temp__5751__auto___42641;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_42637,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_42642))){
var updated_node_42643 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_42642,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_42637,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_42637)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_42638,updated_node_42643);
} else {
}
} else {
var data_42644 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_42638,new cljs.core.Keyword(null,"label","label",1718410804),operation_42640,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_42637)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_42637], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_42638,data_42644);
}

if(cljs.core.truth_(input_signals_42639)){
var seq__42238_42645 = cljs.core.seq(input_signals_42639);
var chunk__42239_42646 = null;
var count__42240_42647 = (0);
var i__42241_42648 = (0);
while(true){
if((i__42241_42648 < count__42240_42647)){
var input_reaction_42649 = chunk__42239_42646.cljs$core$IIndexed$_nth$arity$2(null,i__42241_42648);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_42649),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_42638)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_42649),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_42638)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_42649,new cljs.core.Keyword(null,"to","to",192099007),reaction_42638], null));
}


var G__42650 = seq__42238_42645;
var G__42651 = chunk__42239_42646;
var G__42652 = count__42240_42647;
var G__42653 = (i__42241_42648 + (1));
seq__42238_42645 = G__42650;
chunk__42239_42646 = G__42651;
count__42240_42647 = G__42652;
i__42241_42648 = G__42653;
continue;
} else {
var temp__5753__auto___42654__$1 = cljs.core.seq(seq__42238_42645);
if(temp__5753__auto___42654__$1){
var seq__42238_42656__$1 = temp__5753__auto___42654__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42238_42656__$1)){
var c__4679__auto___42657 = cljs.core.chunk_first(seq__42238_42656__$1);
var G__42658 = cljs.core.chunk_rest(seq__42238_42656__$1);
var G__42659 = c__4679__auto___42657;
var G__42660 = cljs.core.count(c__4679__auto___42657);
var G__42661 = (0);
seq__42238_42645 = G__42658;
chunk__42239_42646 = G__42659;
count__42240_42647 = G__42660;
i__42241_42648 = G__42661;
continue;
} else {
var input_reaction_42662 = cljs.core.first(seq__42238_42656__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_42662),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_42638)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_42662),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_42638)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_42662,new cljs.core.Keyword(null,"to","to",192099007),reaction_42638], null));
}


var G__42663 = cljs.core.next(seq__42238_42656__$1);
var G__42664 = null;
var G__42665 = (0);
var G__42666 = (0);
seq__42238_42645 = G__42663;
chunk__42239_42646 = G__42664;
count__42240_42647 = G__42665;
i__42241_42648 = G__42666;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__42667 = seq__42208_42631;
var G__42668 = chunk__42209_42632;
var G__42669 = count__42210_42633;
var G__42670 = (i__42211_42634 + (1));
seq__42208_42631 = G__42667;
chunk__42209_42632 = G__42668;
count__42210_42633 = G__42669;
i__42211_42634 = G__42670;
continue;
} else {
var temp__5753__auto___42671__$1 = cljs.core.seq(seq__42208_42631);
if(temp__5753__auto___42671__$1){
var seq__42208_42672__$1 = temp__5753__auto___42671__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42208_42672__$1)){
var c__4679__auto___42673 = cljs.core.chunk_first(seq__42208_42672__$1);
var G__42674 = cljs.core.chunk_rest(seq__42208_42672__$1);
var G__42675 = c__4679__auto___42673;
var G__42676 = cljs.core.count(c__4679__auto___42673);
var G__42677 = (0);
seq__42208_42631 = G__42674;
chunk__42209_42632 = G__42675;
count__42210_42633 = G__42676;
i__42211_42634 = G__42677;
continue;
} else {
var map__42244_42678 = cljs.core.first(seq__42208_42672__$1);
var map__42244_42679__$1 = cljs.core.__destructure_map(map__42244_42678);
var op_type_42680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42244_42679__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_42681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42244_42679__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_42682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42244_42679__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_42683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42244_42679__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5751__auto___42685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_42681);
if(cljs.core.truth_(temp__5751__auto___42685)){
var old_reaction_42686 = temp__5751__auto___42685;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_42680,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_42686))){
var updated_node_42687 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_42686,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_42680,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_42680)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_42681,updated_node_42687);
} else {
}
} else {
var data_42692 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_42681,new cljs.core.Keyword(null,"label","label",1718410804),operation_42683,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_42680)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_42680], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_42681,data_42692);
}

if(cljs.core.truth_(input_signals_42682)){
var seq__42246_42694 = cljs.core.seq(input_signals_42682);
var chunk__42247_42695 = null;
var count__42248_42696 = (0);
var i__42249_42697 = (0);
while(true){
if((i__42249_42697 < count__42248_42696)){
var input_reaction_42698 = chunk__42247_42695.cljs$core$IIndexed$_nth$arity$2(null,i__42249_42697);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_42698),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_42681)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_42698),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_42681)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_42698,new cljs.core.Keyword(null,"to","to",192099007),reaction_42681], null));
}


var G__42699 = seq__42246_42694;
var G__42700 = chunk__42247_42695;
var G__42701 = count__42248_42696;
var G__42702 = (i__42249_42697 + (1));
seq__42246_42694 = G__42699;
chunk__42247_42695 = G__42700;
count__42248_42696 = G__42701;
i__42249_42697 = G__42702;
continue;
} else {
var temp__5753__auto___42703__$2 = cljs.core.seq(seq__42246_42694);
if(temp__5753__auto___42703__$2){
var seq__42246_42704__$1 = temp__5753__auto___42703__$2;
if(cljs.core.chunked_seq_QMARK_(seq__42246_42704__$1)){
var c__4679__auto___42705 = cljs.core.chunk_first(seq__42246_42704__$1);
var G__42706 = cljs.core.chunk_rest(seq__42246_42704__$1);
var G__42707 = c__4679__auto___42705;
var G__42708 = cljs.core.count(c__4679__auto___42705);
var G__42709 = (0);
seq__42246_42694 = G__42706;
chunk__42247_42695 = G__42707;
count__42248_42696 = G__42708;
i__42249_42697 = G__42709;
continue;
} else {
var input_reaction_42710 = cljs.core.first(seq__42246_42704__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_42710),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_42681)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_42710),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_42681)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_42710,new cljs.core.Keyword(null,"to","to",192099007),reaction_42681], null));
}


var G__42711 = cljs.core.next(seq__42246_42704__$1);
var G__42712 = null;
var G__42713 = (0);
var G__42714 = (0);
seq__42246_42694 = G__42711;
chunk__42247_42695 = G__42712;
count__42248_42696 = G__42713;
i__42249_42697 = G__42714;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__42715 = cljs.core.next(seq__42208_42672__$1);
var G__42716 = null;
var G__42717 = (0);
var G__42718 = (0);
seq__42208_42631 = G__42715;
chunk__42209_42632 = G__42716;
count__42210_42633 = G__42717;
i__42211_42634 = G__42718;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,(new Network(container,({"nodes": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(nodes))))), "edges": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(edges)))))}),re_frisk.subs_graph.options)));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=re_frisk.subs_graph.js.map
