goog.provide('re_frisk.ui.timeline');
re_frisk.ui.timeline.timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
re_frisk.ui.timeline.change_zoom = (function re_frisk$ui$timeline$change_zoom(tool_state,inc_QMARK_){
var curr = new cljs.core.Keyword(null,"timeline-zoom","timeline-zoom",-2049020154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tool_state));
if(cljs.core.truth_((function (){var or__4253__auto__ = ((cljs.core.not(inc_QMARK_)) && ((curr >= 0.05)));
if(or__4253__auto__){
return or__4253__auto__;
} else {
var and__4251__auto__ = inc_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return (curr < (12));
} else {
return and__4251__auto__;
}
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.update,new cljs.core.Keyword(null,"timeline-zoom","timeline-zoom",-2049020154),(function (p1__48517_SHARP_){
if(cljs.core.truth_(inc_QMARK_)){
return (p1__48517_SHARP_ + (((curr < 0.1))?0.01:curr));
} else {
return (p1__48517_SHARP_ - (((curr <= 0.1))?0.01:(curr / (2))));
}
}));

var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tool_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-event","selected-event",898030638),new cljs.core.Keyword(null,"indx","indx",1571035590)], null));
if(cljs.core.truth_(temp__5753__auto__)){
var indx = temp__5753__auto__;
if(cljs.core.truth_(cljs.core.deref(re_frisk.ui.timeline.timeout))){
clearTimeout(cljs.core.deref(re_frisk.ui.timeline.timeout));
} else {
}

return cljs.core.reset_BANG_(re_frisk.ui.timeline.timeout,setTimeout((function (){
return re_frisk.utils.scroll_timeline_event_item(new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tool_state)),indx);
}),(500)));
} else {
return null;
}
} else {
return null;
}
});
re_frisk.ui.timeline.buttons = (function re_frisk$ui$timeline$buttons(tool_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top","top",-1856271961),(70),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.small_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frisk.ui.timeline.change_zoom(tool_state,false);
})], null),"-"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(5)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.small_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frisk.ui.timeline.change_zoom(tool_state,true);
})], null),"+"], null)], null)], null);
});
re_frisk.ui.timeline.timeline = (function re_frisk$ui$timeline$timeline(re_frame_data,tool_state){
var indx = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction((function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tool_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-event","selected-event",898030638),new cljs.core.Keyword(null,"indx","indx",1571035590)], null));
}));
var mult = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"timeline-zoom","timeline-zoom",-2049020154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tool_state));
}));
var selected = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction((function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48523_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__48523_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(indx),new cljs.core.Keyword(null,"indx","indx",1571035590).cljs$core$IFn$_invoke$arity$1(p1__48523_SHARP_)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"width","width",-384071477),(function (){var width = (new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(p1__48523_SHARP_) * cljs.core.deref(mult));
return ((((width < (2)))?(2):width) | (0));
})(),new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(indx),new cljs.core.Keyword(null,"indx","indx",1571035590).cljs$core$IFn$_invoke$arity$1(p1__48523_SHARP_)))?"#df691a":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(p1__48523_SHARP_),new cljs.core.Keyword(null,"event","event",301435442)))?new cljs.core.Keyword(null,"blue","blue",-622100620):"#219653"))], 0));
}),cljs.core.deref(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(re_frame_data))));
}));
return (function (){
var mult__$1 = cljs.core.deref(mult);
var devi = ((200) / mult__$1);
var events = cljs.core.deref(selected);
var all_time = (((new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.last(events)) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.first(events))) + devi) | (0));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f3f3f3",new cljs.core.Keyword(null,"max-height","max-height",-612563804),(100)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),new cljs.core.Keyword(null,"auto","auto",-566279492)], null)], null),(function (){var iter__4652__auto__ = (function re_frisk$ui$timeline$timeline_$_iter__48524(s__48525){
return (new cljs.core.LazySeq(null,(function (){
var s__48525__$1 = s__48525;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48525__$1);
if(temp__5753__auto__){
var s__48525__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48525__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__48525__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__48527 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__48526 = (0);
while(true){
if((i__48526 < size__4651__auto__)){
var x = cljs.core._nth(c__4650__auto__,i__48526);
cljs.core.chunk_append(b__48527,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),(devi * mult__$1),new cljs.core.Keyword(null,"min-width","min-width",1926193728),(devi * mult__$1),new cljs.core.Keyword(null,"height","height",1025178622),(90),new cljs.core.Keyword(null,"border-left-width","border-left-width",2037218085),(1),new cljs.core.Keyword(null,"border-left-color","border-left-color",-1166146583),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"border-left-style","border-left-style",65166675),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(10)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((x * devi) | (0)))," ms"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["timelime-time-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')], null)));

var G__48542 = (i__48526 + (1));
i__48526 = G__48542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48527),re_frisk$ui$timeline$timeline_$_iter__48524(cljs.core.chunk_rest(s__48525__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48527),null);
}
} else {
var x = cljs.core.first(s__48525__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),(devi * mult__$1),new cljs.core.Keyword(null,"min-width","min-width",1926193728),(devi * mult__$1),new cljs.core.Keyword(null,"height","height",1025178622),(90),new cljs.core.Keyword(null,"border-left-width","border-left-width",2037218085),(1),new cljs.core.Keyword(null,"border-left-color","border-left-color",-1166146583),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"border-left-style","border-left-style",65166675),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(10)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((x * devi) | (0)))," ms"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["timelime-time-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')], null)),re_frisk$ui$timeline$timeline_$_iter__48524(cljs.core.rest(s__48525__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(((all_time / devi) | (0))));
})(),(function (){var iter__4652__auto__ = (function re_frisk$ui$timeline$timeline_$_iter__48528(s__48529){
return (new cljs.core.LazySeq(null,(function (){
var s__48529__$1 = s__48529;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48529__$1);
if(temp__5753__auto__){
var s__48529__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48529__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__48529__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__48531 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__48530 = (0);
while(true){
if((i__48530 < size__4651__auto__)){
var map__48532 = cljs.core._nth(c__4650__auto__,i__48530);
var map__48532__$1 = cljs.core.__destructure_map(map__48532);
var item = map__48532__$1;
var indx__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48532__$1,new cljs.core.Keyword(null,"indx","indx",1571035590));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48532__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48532__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48532__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
cljs.core.chunk_append(b__48531,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["timeline-event-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(indx__$1)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__48530,map__48532,map__48532__$1,item,indx__$1,color,width,position,c__4650__auto__,size__4651__auto__,b__48531,s__48529__$2,temp__5753__auto__,mult__$1,devi,events,all_time,indx,mult,selected){
return (function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-event","selected-event",898030638),item);

re_frisk.utils.scroll_event_list_item(new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tool_state)),indx__$1);

return event.preventDefault();
});})(i__48530,map__48532,map__48532__$1,item,indx__$1,color,width,position,c__4650__auto__,size__4651__auto__,b__48531,s__48529__$2,temp__5753__auto__,mult__$1,devi,events,all_time,indx,mult,selected))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"left","left",-399115937),((position * mult__$1) | (0)),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"min-width","min-width",1926193728),width,new cljs.core.Keyword(null,"top","top",-1856271961),(20),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"background-color","background-color",570434026),color,new cljs.core.Keyword(null,"opacity","opacity",397153780),0.5], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["timeline-event-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(indx__$1)].join('')], null)));

var G__48545 = (i__48530 + (1));
i__48530 = G__48545;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48531),re_frisk$ui$timeline$timeline_$_iter__48528(cljs.core.chunk_rest(s__48529__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48531),null);
}
} else {
var map__48537 = cljs.core.first(s__48529__$2);
var map__48537__$1 = cljs.core.__destructure_map(map__48537);
var item = map__48537__$1;
var indx__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48537__$1,new cljs.core.Keyword(null,"indx","indx",1571035590));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48537__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48537__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48537__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["timeline-event-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(indx__$1)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__48537,map__48537__$1,item,indx__$1,color,width,position,s__48529__$2,temp__5753__auto__,mult__$1,devi,events,all_time,indx,mult,selected){
return (function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-event","selected-event",898030638),item);

re_frisk.utils.scroll_event_list_item(new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tool_state)),indx__$1);

return event.preventDefault();
});})(map__48537,map__48537__$1,item,indx__$1,color,width,position,s__48529__$2,temp__5753__auto__,mult__$1,devi,events,all_time,indx,mult,selected))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"left","left",-399115937),((position * mult__$1) | (0)),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"min-width","min-width",1926193728),width,new cljs.core.Keyword(null,"top","top",-1856271961),(20),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"background-color","background-color",570434026),color,new cljs.core.Keyword(null,"opacity","opacity",397153780),0.5], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["timeline-event-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(indx__$1)].join('')], null)),re_frisk$ui$timeline$timeline_$_iter__48528(cljs.core.rest(s__48529__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(events);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.timeline.buttons,tool_state], null)], null);
});
});
re_frisk.ui.timeline.timeline_visibility = (function re_frisk$ui$timeline$timeline_visibility(re_frame_data,tool_state){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"timeline-opened?","timeline-opened?",1560712236).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tool_state)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.timeline.timeline,re_frame_data,tool_state], null);
} else {
return null;
}
});
});

//# sourceMappingURL=re_frisk.ui.timeline.js.map
