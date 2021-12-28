goog.provide('cljs_time.coerce');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

var cljs_time$coerce$ICoerce$to_date_time$dyn_44011 = (function (obj){
var x__4550__auto__ = (((obj == null))?null:obj);
var m__4551__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4551__auto__.call(null,obj));
} else {
var m__4549__auto__ = (cljs_time.coerce.to_date_time["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4549__auto__.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
return cljs_time$coerce$ICoerce$to_date_time$dyn_44011(obj);
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__43969 = millis;
if((G__43969 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__43969) : goog.date.UtcDateTime.fromTimestamp.call(null,G__43969));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__4652__auto__ = (function cljs_time$coerce$from_string_$_iter__43970(s__43971){
return (new cljs.core.LazySeq(null,(function (){
var s__43971__$1 = s__43971;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__43971__$1);
if(temp__5753__auto__){
var s__43971__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43971__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__43971__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43973 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43972 = (0);
while(true){
if((i__43972 < size__4651__auto__)){
var f = cljs.core._nth(c__4650__auto__,i__43972);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e43975){if((e43975 instanceof Error)){
var _ = e43975;
return null;
} else {
throw e43975;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__43973,d);

var G__44012 = (i__43972 + (1));
i__43972 = G__44012;
continue;
} else {
var G__44013 = (i__43972 + (1));
i__43972 = G__44013;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43973),cljs_time$coerce$from_string_$_iter__43970(cljs.core.chunk_rest(s__43971__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43973),null);
}
} else {
var f = cljs.core.first(s__43971__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e43976){if((e43976 instanceof Error)){
var _ = e43976;
return null;
} else {
throw e43976;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__43970(cljs.core.rest(s__43971__$2)));
} else {
var G__44014 = cljs.core.rest(s__43971__$2);
s__43971__$1 = G__44014;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__43977 = date;
var G__43977__$1 = (((G__43977 == null))?null:G__43977.getTime());
if((G__43977__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__43977__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__43979 = obj;
var G__43979__$1 = (((G__43979 == null))?null:cljs_time.coerce.to_date_time(G__43979));
if((G__43979__$1 == null)){
return null;
} else {
return G__43979__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__4251__auto__ = millis;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__4251__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__43988 = obj;
var G__43988__$1 = (((G__43988 == null))?null:cljs_time.coerce.to_date_time(G__43988));
var G__43988__$2 = (((G__43988__$1 == null))?null:G__43988__$1.getTime());
if((G__43988__$2 == null)){
return null;
} else {
return (new Date(G__43988__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__43992 = obj;
var G__43992__$1 = (((G__43992 == null))?null:cljs_time.coerce.to_date_time(G__43992));
if((G__43992__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__43992__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.Date,cljs.core.type(obj))){
return obj;
} else {
var temp__5751__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5751__auto__)){
var dt = temp__5751__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__5751__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5751__auto__)){
var dt = temp__5751__auto__;
var G__44009 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__44009.setHours(dt.getHours());

G__44009.setMinutes(dt.getMinutes());

G__44009.setSeconds(dt.getSeconds());

G__44009.setMilliseconds(dt.getMilliseconds());

return G__44009;
} else {
return null;
}
} else {
return null;
}
});
(cljs_time.coerce.ICoerce["null"] = true);

(cljs_time.coerce.to_date_time["null"] = (function (_){
return null;
}));

(Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
}));

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
}));

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
}));

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
}));

(cljs_time.coerce.ICoerce["number"] = true);

(cljs_time.coerce.to_date_time["number"] = (function (long$){
return cljs_time.coerce.from_long(long$);
}));

(cljs_time.coerce.ICoerce["string"] = true);

(cljs_time.coerce.to_date_time["string"] = (function (string){
return cljs_time.coerce.from_string(string);
}));

//# sourceMappingURL=cljs_time.coerce.js.map
