goog.provide('re_frisk.ui.components.frisk');
re_frisk.ui.components.frisk.debounce_pending = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
re_frisk.ui.components.frisk.debounce = (function re_frisk$ui$components$frisk$debounce(key,delay,f){
var old_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.ui.components.frisk.debounce_pending),key);
var new_timeout = setTimeout(f,delay);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.ui.components.frisk.debounce_pending,cljs.core.assoc,key,new_timeout);

return clearTimeout(old_timeout);
});
re_frisk.ui.components.frisk.ExpandButton = (function re_frisk$ui$components$frisk$ExpandButton(p__48369){
var map__48370 = p__48369;
var map__48370__$1 = cljs.core.__destructure_map(map__48370);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48370__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48370__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48370__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),(0),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"transparent",new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"height","height",1025178622),"20px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__48371 = (cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"contract","contract",798152745):new cljs.core.Keyword(null,"expand","expand",595248157));
var G__48372 = path;
return (emit_fn.cljs$core$IFn$_invoke$arity$2 ? emit_fn.cljs$core$IFn$_invoke$arity$2(G__48371,G__48372) : emit_fn.call(null,G__48371,G__48372));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 100 100",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.2s ease",new cljs.core.Keyword(null,"transform","transform",1381301764),(cljs.core.truth_(expanded_QMARK_)?"rotate(90deg)":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"points","points",-1486596883),"0,0 0,100 100,50",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"gray",new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)], null)], null)], null);
});
re_frisk.ui.components.frisk.styles = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"shell","shell",1402941019),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#FAFAFA",new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Consolas,Monaco,Courier New,monospace",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"12px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(9999)], null),new cljs.core.Keyword(null,"strings","strings",-2055406807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#4Ebb4E"], null),new cljs.core.Keyword(null,"keywords","keywords",1526959054),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null),new cljs.core.Keyword(null,"numbers","numbers",1036309864),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.Keyword(null,"shell-visible-button","shell-visible-button",-1362287320),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#4EE24E"], null)], null);
re_frisk.ui.components.frisk.ExpandAllButton = (function re_frisk$ui$components$frisk$ExpandAllButton(emit_fn,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (emit_fn.cljs$core$IFn$_invoke$arity$2 ? emit_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expand-all","expand-all",-1489416197),data) : emit_fn.call(null,new cljs.core.Keyword(null,"expand-all","expand-all",-1489416197),data));
})], null),"exp"], null);
});
re_frisk.ui.components.frisk.CollapseAllButton = (function re_frisk$ui$components$frisk$CollapseAllButton(emit_fn,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (emit_fn.cljs$core$IFn$_invoke$arity$1 ? emit_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"collapse-all","collapse-all",957676825)) : emit_fn.call(null,new cljs.core.Keyword(null,"collapse-all","collapse-all",957676825)));
})], null),"coll"], null);
});
re_frisk.ui.components.frisk.button = (function re_frisk$ui$components$frisk$button(label,emit_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),emit_fn,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"5px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"5px",new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"5px"], null)], null),label], null);
});
re_frisk.ui.components.frisk.FilterEditBox = (function re_frisk$ui$components$frisk$FilterEditBox(emit_fn,inp_val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(inp_val),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(5)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type here to find keys...",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__48375_SHARP_){
var val = p1__48375_SHARP_.target.value;
cljs.core.reset_BANG_(inp_val,val);

return (emit_fn.cljs$core$IFn$_invoke$arity$2 ? emit_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"filter-change","filter-change",-1776980903),val) : emit_fn.call(null,new cljs.core.Keyword(null,"filter-change","filter-change",-1776980903),val));
})], null)], null);
});
re_frisk.ui.components.frisk.FilterReset = (function re_frisk$ui$components$frisk$FilterReset(emit_fn,inp_val){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(5),new cljs.core.Keyword(null,"width","width",-384071477),(25)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(inp_val,"");

return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"filter-change","filter-change",-1776980903),"",(0)) : emit_fn.call(null,new cljs.core.Keyword(null,"filter-change","filter-change",-1776980903),"",(0)));
})], null),"X"], null);
});
re_frisk.ui.components.frisk.node_clicked = (function re_frisk$ui$components$frisk$node_clicked(p__48381){
var map__48382 = p__48381;
var map__48382__$1 = cljs.core.__destructure_map(map__48382);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48382__$1,new cljs.core.Keyword(null,"event","event",301435442));
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48382__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48382__$1,new cljs.core.Keyword(null,"path","path",-188191168));
event.stopPropagation();

var G__48383 = new cljs.core.Keyword(null,"filter-change-exp","filter-change-exp",1327301093);
var G__48384 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(path);
var G__48385 = (0);
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__48383,G__48384,G__48385) : emit_fn.call(null,G__48383,G__48384,G__48385));
});
re_frisk.ui.components.frisk.NilText = (function re_frisk$ui$components$frisk$NilText(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"nil","nil",99600501).cljs$core$IFn$_invoke$arity$1(re_frisk.ui.components.frisk.styles)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0))], null);
});
re_frisk.ui.components.frisk.StringText = (function re_frisk$ui$components$frisk$StringText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"strings","strings",-2055406807).cljs$core$IFn$_invoke$arity$1(re_frisk.ui.components.frisk.styles)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))], null);
});
re_frisk.ui.components.frisk.KeywordText = (function re_frisk$ui$components$frisk$KeywordText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keywords","keywords",1526959054).cljs$core$IFn$_invoke$arity$1(re_frisk.ui.components.frisk.styles)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)], null);
});
re_frisk.ui.components.frisk.NumberText = (function re_frisk$ui$components$frisk$NumberText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"numbers","numbers",1036309864).cljs$core$IFn$_invoke$arity$1(re_frisk.ui.components.frisk.styles)], null),data], null);
});
re_frisk.ui.components.frisk.is_prefix = (function re_frisk$ui$components$frisk$is_prefix(needle,haystack){
return (((cljs.core.count(needle) < cljs.core.count(haystack))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(haystack,(0),cljs.core.count(needle)))));
});
re_frisk.ui.components.frisk.Node = (function re_frisk$ui$components$frisk$Node(p__48395){
var map__48397 = p__48395;
var map__48397__$1 = cljs.core.__destructure_map(map__48397);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48397__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48397__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48397__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48397__$1,new cljs.core.Keyword(null,"swappable","swappable",-2024641906));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48397__$1,new cljs.core.Keyword(null,"node","node",581201198));
var matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48397__$1,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"5px"], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.Node,node], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__48393_SHARP_){
return re_frisk.ui.components.frisk.node_clicked(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),p1__48393_SHARP_,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn,new cljs.core.Keyword(null,"path","path",-188191168),path], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(node)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"10px"], null):null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(matching_paths,path))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff9db"], null):null)], 0))], null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(matching_paths,path))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__48394_SHARP_){
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"filter-ref","filter-ref",1346795740),path,p1__48394_SHARP_) : emit_fn.call(null,new cljs.core.Keyword(null,"filter-ref","filter-ref",1346795740),path,p1__48394_SHARP_));
})], null):null)], 0)),(((data == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.NilText], null):((typeof data === 'string')?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"default-value","default-value",232220170),data,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function re_frisk$ui$components$frisk$Node_$_string_changed(e){
var G__48407 = new cljs.core.Keyword(null,"changed","changed",570724917);
var G__48408 = path;
var G__48409 = e.target.value;
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__48407,G__48408,G__48409) : emit_fn.call(null,G__48407,G__48408,G__48409));
})], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.StringText,data], null)):(((data instanceof cljs.core.Keyword))?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.name(data),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function re_frisk$ui$components$frisk$Node_$_keyword_changed(e){
var G__48417 = new cljs.core.Keyword(null,"changed","changed",570724917);
var G__48418 = path;
var G__48419 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.target.value);
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__48417,G__48418,G__48419) : emit_fn.call(null,G__48417,G__48418,G__48419));
})], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.KeywordText,data], null)):((cljs.core.object_QMARK_(data))?"Object":((typeof data === 'number')?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"default-value","default-value",232220170),data,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function re_frisk$ui$components$frisk$Node_$_number_changed(e){
var G__48420 = new cljs.core.Keyword(null,"changed","changed",570724917);
var G__48421 = path;
var G__48422 = Number(e.target.value);
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__48420,G__48421,G__48422) : emit_fn.call(null,G__48420,G__48421,G__48422));
})], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.NumberText,data], null)):cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)
)))))], null)], null);
});
re_frisk.ui.components.frisk.is_expanded = (function re_frisk$ui$components$frisk$is_expanded(expanded_paths,expanded_matching_paths,path){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(expanded_paths,path);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(expanded_matching_paths,path);
}
});
re_frisk.ui.components.frisk.KeyValNode = (function re_frisk$ui$components$frisk$KeyValNode(p__48426){
var map__48427 = p__48426;
var map__48427__$1 = cljs.core.__destructure_map(map__48427);
var vec__48428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48427__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48428,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48428,(1),null);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48427__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48427__$1,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540));
var matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48427__$1,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723));
var expanded_matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48427__$1,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716));
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48427__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48427__$1,new cljs.core.Keyword(null,"swappable","swappable",-2024641906));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),k,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723),matching_paths], null),new cljs.core.Keyword(null,"data","data",-232669377),v,new cljs.core.Keyword(null,"swappable","swappable",-2024641906),swappable,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540),expanded_paths,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723),matching_paths,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716),expanded_matching_paths,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null)], null);
});
re_frisk.ui.components.frisk.copy = (function re_frisk$ui$components$frisk$copy(_){
var show_copied = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(show_copied,true);

setTimeout((function (){
return cljs.core.reset_BANG_(show_copied,false);
}),(2000));

return re_frisk.clipboard.copy_to_clip((function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48431_48533 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48432_48534 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48433_48535 = true;
var _STAR_print_fn_STAR__temp_val__48434_48536 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48433_48535);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48434_48536);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48432_48534);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48431_48533);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})());
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)," \u2398",(cljs.core.truth_(cljs.core.deref(show_copied))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(5)], null)], null),"copied"], null):null)], null);
});
});
re_frisk.ui.components.frisk.MapNode = (function re_frisk$ui$components$frisk$MapNode(p__48439){
var map__48440 = p__48439;
var map__48440__$1 = cljs.core.__destructure_map(map__48440);
var all = map__48440__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48440__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48440__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48440__$1,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540));
var expanded_matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48440__$1,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716));
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48440__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48440__$1,new cljs.core.Keyword(null,"node","node",581201198));
var expanded_QMARK_ = re_frisk.ui.components.frisk.is_expanded(expanded_paths,expanded_matching_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"3px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),((cljs.core.empty_QMARK_(data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"20px"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null))], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.Node,node], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," {"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.keys(data)))," keys"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"}"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.copy,data], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.KeyValNode,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(all,new cljs.core.Keyword(null,"data","data",-232669377),x)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),data):null)], null)], null);
});
re_frisk.ui.components.frisk.ListVecNode = (function re_frisk$ui$components$frisk$ListVecNode(p__48442){
var map__48443 = p__48442;
var map__48443__$1 = cljs.core.__destructure_map(map__48443);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48443__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48443__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48443__$1,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540));
var matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48443__$1,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723));
var expanded_matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48443__$1,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716));
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48443__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48443__$1,new cljs.core.Keyword(null,"swappable","swappable",-2024641906));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48443__$1,new cljs.core.Keyword(null,"node","node",581201198));
var expanded_QMARK_ = re_frisk.ui.components.frisk.is_expanded(expanded_paths,expanded_matching_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"3px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),((cljs.core.empty_QMARK_(data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"20px"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.Node,node], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((cljs.core.vector_QMARK_(data))?" [":" ("),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data))," items"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((cljs.core.vector_QMARK_(data))?"]":")")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.copy,data], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"data","data",-232669377),x,new cljs.core.Keyword(null,"swappable","swappable",-2024641906),swappable,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540),expanded_paths,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723),matching_paths,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716),expanded_matching_paths,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),data):null)], null)], null);
});
re_frisk.ui.components.frisk.SetNode = (function re_frisk$ui$components$frisk$SetNode(p__48444){
var map__48445 = p__48444;
var map__48445__$1 = cljs.core.__destructure_map(map__48445);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48445__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48445__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48445__$1,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540));
var matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48445__$1,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723));
var expanded_matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48445__$1,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716));
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48445__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48445__$1,new cljs.core.Keyword(null,"swappable","swappable",-2024641906));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48445__$1,new cljs.core.Keyword(null,"node","node",581201198));
var expanded_QMARK_ = re_frisk.ui.components.frisk.is_expanded(expanded_paths,expanded_matching_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"3px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),((cljs.core.empty_QMARK_(data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"20px"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.Node,node], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," #{",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data))," items"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"}"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.copy,data], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"data","data",-232669377),x,new cljs.core.Keyword(null,"swappable","swappable",-2024641906),swappable,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,x),new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540),expanded_paths,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723),matching_paths,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716),expanded_matching_paths,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),data):null)], null)], null);
});
re_frisk.ui.components.frisk.DataFrisk = (function re_frisk$ui$components$frisk$DataFrisk(p__48448){
var map__48449 = p__48448;
var map__48449__$1 = cljs.core.__destructure_map(map__48449);
var all = map__48449__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48449__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.map_QMARK_(data)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.MapNode,all], null);
} else {
if(cljs.core.set_QMARK_(data)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.SetNode,all], null);
} else {
if(((cljs.core.seq_QMARK_(data)) || (cljs.core.vector_QMARK_(data)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.ListVecNode,all], null);
} else {
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IDeref$))))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.DataFrisk,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(all,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref(data))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.Node,all], null);

}
}
}
}
});
re_frisk.ui.components.frisk.conj_to_set = (function re_frisk$ui$components$frisk$conj_to_set(coll,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4253__auto__ = coll;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),x);
});
re_frisk.ui.components.frisk.expand_all_paths = (function re_frisk$ui$components$frisk$expand_all_paths(root_value){
var remaining = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"node","node",581201198),root_value], null)], null);
var expanded_paths = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(remaining)){
var vec__48463 = remaining;
var seq__48464 = cljs.core.seq(vec__48463);
var first__48465 = cljs.core.first(seq__48464);
var seq__48464__$1 = cljs.core.next(seq__48464);
var current = first__48465;
var rest = seq__48464__$1;
var current_node = (((function (){var G__48466 = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(current);
if((!((G__48466 == null)))){
if((((G__48466.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === G__48466.cljs$core$IDeref$)))){
return true;
} else {
if((!G__48466.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__48466);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__48466);
}
})())?cljs.core.deref(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(current)):new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(current));
if(cljs.core.map_QMARK_(current_node)){
var G__48555 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rest,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remaining,expanded_paths,vec__48463,seq__48464,first__48465,seq__48464__$1,current,rest,current_node){
return (function (p__48467){
var vec__48468 = p__48467;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48468,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48468,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current),k),new cljs.core.Keyword(null,"node","node",581201198),v], null);
});})(remaining,expanded_paths,vec__48463,seq__48464,first__48465,seq__48464__$1,current,rest,current_node))
,current_node));
var G__48556 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded_paths,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current));
remaining = G__48555;
expanded_paths = G__48556;
continue;
} else {
if(((cljs.core.seq_QMARK_(current_node)) || (cljs.core.vector_QMARK_(current_node)))){
var G__48562 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rest,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (remaining,expanded_paths,vec__48463,seq__48464,first__48465,seq__48464__$1,current,rest,current_node){
return (function (i,node){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current),i),new cljs.core.Keyword(null,"node","node",581201198),node], null);
});})(remaining,expanded_paths,vec__48463,seq__48464,first__48465,seq__48464__$1,current,rest,current_node))
,current_node));
var G__48563 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded_paths,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current));
remaining = G__48562;
expanded_paths = G__48563;
continue;
} else {
var G__48564 = rest;
var G__48565 = ((cljs.core.coll_QMARK_(current_node))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded_paths,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current)):expanded_paths);
remaining = G__48564;
expanded_paths = G__48565;
continue;

}
}
} else {
return expanded_paths;
}
break;
}
});
re_frisk.ui.components.frisk.apply_filter = (function re_frisk$ui$components$frisk$apply_filter(state,id,value){
var filter = re_frisk.filter.filter_parser.parse(value);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),filter);
});
re_frisk.ui.components.frisk.emit_fn_factory = (function re_frisk$ui$components$frisk$emit_fn_factory(state_atom,id,swappable,filter_refs,inp_val){
return (function() { 
var G__48567__delegate = function (event,args){
var G__48474 = event;
var G__48474__$1 = (((G__48474 instanceof cljs.core.Keyword))?G__48474.fqn:null);
switch (G__48474__$1) {
case "expand":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),re_frisk.ui.components.frisk.conj_to_set,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args)], 0));

break;
case "expand-all":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),re_frisk.ui.components.frisk.expand_all_paths(cljs.core.first(args)));

break;
case "contract":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args)], 0));

break;
case "collapse-all":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.PersistentHashSet.EMPTY);

break;
case "filter-ref":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(filter_refs,(function (p1__48473_SHARP_){
if(cljs.core.truth_(cljs.core.second(args))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48473_SHARP_,cljs.core.first(args),cljs.core.second(args));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__48473_SHARP_,cljs.core.first(args));
}
}));

break;
case "filter-change-exp":
cljs.core.reset_BANG_(inp_val,cljs.core.first(args));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,re_frisk.ui.components.frisk.apply_filter,id,cljs.core.first(args));

break;
case "filter-change":
cljs.core.reset_BANG_(inp_val,cljs.core.first(args));

return re_frisk.ui.components.frisk.debounce(new cljs.core.Keyword(null,"filter-change","filter-change",-1776980903),(400),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,re_frisk.ui.components.frisk.apply_filter,id,cljs.core.first(args));
}));

break;
case "changed":
var vec__48475 = args;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48475,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48475,(1),null);
if(cljs.core.seq(path)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(swappable,cljs.core.assoc_in,path,value);
} else {
return cljs.core.reset_BANG_(swappable,value);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48474__$1)].join('')));

}
};
var G__48567 = function (event,var_args){
var args = null;
if (arguments.length > 1) {
var G__48569__i = 0, G__48569__a = new Array(arguments.length -  1);
while (G__48569__i < G__48569__a.length) {G__48569__a[G__48569__i] = arguments[G__48569__i + 1]; ++G__48569__i;}
  args = new cljs.core.IndexedSeq(G__48569__a,0,null);
} 
return G__48567__delegate.call(this,event,args);};
G__48567.cljs$lang$maxFixedArity = 1;
G__48567.cljs$lang$applyTo = (function (arglist__48570){
var event = cljs.core.first(arglist__48570);
var args = cljs.core.rest(arglist__48570);
return G__48567__delegate(event,args);
});
G__48567.cljs$core$IFn$_invoke$arity$variadic = G__48567__delegate;
return G__48567;
})()
;
});
re_frisk.ui.components.frisk.emit_fn_factory_simple = (function re_frisk$ui$components$frisk$emit_fn_factory_simple(state_atom,id){
return (function() { 
var G__48571__delegate = function (event,args){
var G__48481 = event;
var G__48481__$1 = (((G__48481 instanceof cljs.core.Keyword))?G__48481.fqn:null);
switch (G__48481__$1) {
case "expand":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),re_frisk.ui.components.frisk.conj_to_set,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args)], 0));

break;
case "contract":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args)], 0));

break;
default:
return null;

}
};
var G__48571 = function (event,var_args){
var args = null;
if (arguments.length > 1) {
var G__48573__i = 0, G__48573__a = new Array(arguments.length -  1);
while (G__48573__i < G__48573__a.length) {G__48573__a[G__48573__i] = arguments[G__48573__i + 1]; ++G__48573__i;}
  args = new cljs.core.IndexedSeq(G__48573__a,0,null);
} 
return G__48571__delegate.call(this,event,args);};
G__48571.cljs$lang$maxFixedArity = 1;
G__48571.cljs$lang$applyTo = (function (arglist__48574){
var event = cljs.core.first(arglist__48574);
var args = cljs.core.rest(arglist__48574);
return G__48571__delegate(event,args);
});
G__48571.cljs$core$IFn$_invoke$arity$variadic = G__48571__delegate;
return G__48571;
})()
;
});
re_frisk.ui.components.frisk.walk_paths = (function re_frisk$ui$components$frisk$walk_paths(var_args){
var G__48483 = arguments.length;
switch (G__48483) {
case 1:
return re_frisk.ui.components.frisk.walk_paths.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk.ui.components.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frisk.ui.components.frisk.walk_paths.cljs$core$IFn$_invoke$arity$1 = (function (data){
return re_frisk.ui.components.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,data);
}));

(re_frisk.ui.components.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2 = (function (prefix,data){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((cljs.core.map_QMARK_(data))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48487){
var vec__48489 = p__48487;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48489,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48489,(1),null);
return re_frisk.ui.components.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k),v);
}),data)):((cljs.core.set_QMARK_(data))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return re_frisk.ui.components.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,v),v);
}),data)):((((cljs.core.seq_QMARK_(data)) || (cljs.core.vector_QMARK_(data))))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return re_frisk.ui.components.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,i),v);
}),data)):(((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IDeref$))))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,data)))?re_frisk.ui.components.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2(prefix,cljs.core.deref(data)):cljs.core.PersistentHashSet.EMPTY
)))),prefix);
}));

(re_frisk.ui.components.frisk.walk_paths.cljs$lang$maxFixedArity = 2);

re_frisk.ui.components.frisk.matching_paths = (function re_frisk$ui$components$frisk$matching_paths(data,filter_SINGLEQUOTE_){
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48493_SHARP_){
return re_frisk.filter.filter_matcher.match(filter_SINGLEQUOTE_,p1__48493_SHARP_);
}),re_frisk.ui.components.frisk.walk_paths.cljs$core$IFn$_invoke$arity$1(data)));
});
re_frisk.ui.components.frisk.prefixes = (function re_frisk$ui$components$frisk$prefixes(path){
return cljs.core.set(cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,path));
});
re_frisk.ui.components.frisk.expanded_matching_paths = (function re_frisk$ui$components$frisk$expanded_matching_paths(paths){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.frisk.prefixes,paths));
});
re_frisk.ui.components.frisk.scroll_frisk_list_item = (function re_frisk$ui$components$frisk$scroll_frisk_list_item(filter_ref,current_search_index,dec_QMARK_){
var filter_ref__$1 = cljs.core.deref(filter_ref);
var len = cljs.core.count(filter_ref__$1);
var indx = cljs.core.deref(current_search_index);
if((len > (0))){
var matching = cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48501_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"el","el",-1618201118)],[cljs.core.first(p1__48501_SHARP_),cljs.core.second(p1__48501_SHARP_).getBoundingClientRect().top,cljs.core.second(p1__48501_SHARP_)]);
}),filter_ref__$1)));
if(cljs.core.truth_(dec_QMARK_)){
if((((indx === (0))) || (((indx - (1)) >= len)))){
cljs.core.reset_BANG_(current_search_index,(len - (1)));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current_search_index,cljs.core.dec);
}
} else {
if(((indx + (1)) >= len)){
cljs.core.reset_BANG_(current_search_index,(0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current_search_index,cljs.core.inc);
}
}

var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(matching,indx);
if(cljs.core.truth_(temp__5753__auto__)){
var path = temp__5753__auto__;
var temp__5753__auto____$1 = new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(path);
if(cljs.core.truth_(temp__5753__auto____$1)){
var elem = temp__5753__auto____$1;
return elem.scrollIntoView(({"block": "center"}));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
re_frisk.ui.components.frisk.Root = (function re_frisk$ui$components$frisk$Root(_,___$1,___$2){
var filter_refs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var current_search_index = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var inp_val = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (data,id,state_atom){
var data_frisk = new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom));
var swappable = (((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IAtom$))))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data)))?data:null);
var filter = (function (){var or__4253__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data_frisk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"filter","filter",-948537934)], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var matching = re_frisk.ui.components.frisk.matching_paths(data,filter);
var expanded_matching = re_frisk.ui.components.frisk.expanded_matching_paths(matching);
var emit_fn = re_frisk.ui.components.frisk.emit_fn_factory(state_atom,id,swappable,filter_refs,inp_val);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f3f3f3",new cljs.core.Keyword(null,"color","color",1011675173),"#444444",new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 2px",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.ExpandAllButton,emit_fn,data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.CollapseAllButton,emit_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff9db"], null)], null),cljs.core.count(matching)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.button,"\u2191",(function (){
return re_frisk.ui.components.frisk.scroll_frisk_list_item(filter_refs,current_search_index,true);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.button,"\u2193",(function (){
return re_frisk.ui.components.frisk.scroll_frisk_list_item(filter_refs,current_search_index,false);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.FilterEditBox,emit_fn,inp_val], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.FilterReset,emit_fn,inp_val], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.scroller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"swappable","swappable",-2024641906),swappable,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data_frisk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null)),new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723),matching,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716),expanded_matching,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null)], null)], null);
});
});
re_frisk.ui.components.frisk.expand_by_default = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__48506_SHARP_,p2__48507_SHARP_){
return cljs.core.assoc_in(p1__48506_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),p2__48507_SHARP_,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY]));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1((1)));
re_frisk.ui.components.frisk.Root_Simple = (function re_frisk$ui$components$frisk$Root_Simple(_,___$1,___$2){
var state_atom = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_frisk.ui.components.frisk.expand_by_default);
return (function (data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),(0),new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null)),new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),re_frisk.ui.components.frisk.emit_fn_factory_simple(state_atom,(0))], null)], null);
});
});

//# sourceMappingURL=re_frisk.ui.components.frisk.js.map
