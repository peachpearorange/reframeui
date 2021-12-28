goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45868 = arguments.length;
switch (G__45868) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45869 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45869 = (function (f,blockable,meta45870){
this.f = f;
this.blockable = blockable;
this.meta45870 = meta45870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45871,meta45870__$1){
var self__ = this;
var _45871__$1 = this;
return (new cljs.core.async.t_cljs$core$async45869(self__.f,self__.blockable,meta45870__$1));
}));

(cljs.core.async.t_cljs$core$async45869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45871){
var self__ = this;
var _45871__$1 = this;
return self__.meta45870;
}));

(cljs.core.async.t_cljs$core$async45869.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45869.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45870","meta45870",1259465853,null)], null);
}));

(cljs.core.async.t_cljs$core$async45869.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45869");

(cljs.core.async.t_cljs$core$async45869.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45869");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45869.
 */
cljs.core.async.__GT_t_cljs$core$async45869 = (function cljs$core$async$__GT_t_cljs$core$async45869(f__$1,blockable__$1,meta45870){
return (new cljs.core.async.t_cljs$core$async45869(f__$1,blockable__$1,meta45870));
});

}

return (new cljs.core.async.t_cljs$core$async45869(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__45878 = arguments.length;
switch (G__45878) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45880 = arguments.length;
switch (G__45880) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__45882 = arguments.length;
switch (G__45882) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47574 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47574) : fn1.call(null,val_47574));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47574) : fn1.call(null,val_47574));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45884 = arguments.length;
switch (G__45884) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___47580 = n;
var x_47581 = (0);
while(true){
if((x_47581 < n__4741__auto___47580)){
(a[x_47581] = x_47581);

var G__47582 = (x_47581 + (1));
x_47581 = G__47582;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45885 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45885 = (function (flag,meta45886){
this.flag = flag;
this.meta45886 = meta45886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45887,meta45886__$1){
var self__ = this;
var _45887__$1 = this;
return (new cljs.core.async.t_cljs$core$async45885(self__.flag,meta45886__$1));
}));

(cljs.core.async.t_cljs$core$async45885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45887){
var self__ = this;
var _45887__$1 = this;
return self__.meta45886;
}));

(cljs.core.async.t_cljs$core$async45885.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45885.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45885.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45885.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45886","meta45886",-333635944,null)], null);
}));

(cljs.core.async.t_cljs$core$async45885.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45885");

(cljs.core.async.t_cljs$core$async45885.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45885");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45885.
 */
cljs.core.async.__GT_t_cljs$core$async45885 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45885(flag__$1,meta45886){
return (new cljs.core.async.t_cljs$core$async45885(flag__$1,meta45886));
});

}

return (new cljs.core.async.t_cljs$core$async45885(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45888 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45888 = (function (flag,cb,meta45889){
this.flag = flag;
this.cb = cb;
this.meta45889 = meta45889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45890,meta45889__$1){
var self__ = this;
var _45890__$1 = this;
return (new cljs.core.async.t_cljs$core$async45888(self__.flag,self__.cb,meta45889__$1));
}));

(cljs.core.async.t_cljs$core$async45888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45890){
var self__ = this;
var _45890__$1 = this;
return self__.meta45889;
}));

(cljs.core.async.t_cljs$core$async45888.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45888.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45889","meta45889",-2120635854,null)], null);
}));

(cljs.core.async.t_cljs$core$async45888.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45888");

(cljs.core.async.t_cljs$core$async45888.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45888");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45888.
 */
cljs.core.async.__GT_t_cljs$core$async45888 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45888(flag__$1,cb__$1,meta45889){
return (new cljs.core.async.t_cljs$core$async45888(flag__$1,cb__$1,meta45889));
});

}

return (new cljs.core.async.t_cljs$core$async45888(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45897_SHARP_){
var G__45901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45897_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45901) : fret.call(null,G__45901));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45898_SHARP_){
var G__45902 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45898_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45902) : fret.call(null,G__45902));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47585 = (i + (1));
i = G__47585;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47586 = arguments.length;
var i__4865__auto___47587 = (0);
while(true){
if((i__4865__auto___47587 < len__4864__auto___47586)){
args__4870__auto__.push((arguments[i__4865__auto___47587]));

var G__47588 = (i__4865__auto___47587 + (1));
i__4865__auto___47587 = G__47588;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45917){
var map__45918 = p__45917;
var map__45918__$1 = cljs.core.__destructure_map(map__45918);
var opts = map__45918__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45907){
var G__45913 = cljs.core.first(seq45907);
var seq45907__$1 = cljs.core.next(seq45907);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45913,seq45907__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__45922 = arguments.length;
switch (G__45922) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__45794__auto___47591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = (function (state_45958){
var state_val_45959 = (state_45958[(1)]);
if((state_val_45959 === (7))){
var inst_45954 = (state_45958[(2)]);
var state_45958__$1 = state_45958;
var statearr_45962_47592 = state_45958__$1;
(statearr_45962_47592[(2)] = inst_45954);

(statearr_45962_47592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45959 === (1))){
var state_45958__$1 = state_45958;
var statearr_45963_47593 = state_45958__$1;
(statearr_45963_47593[(2)] = null);

(statearr_45963_47593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45959 === (4))){
var inst_45931 = (state_45958[(7)]);
var inst_45931__$1 = (state_45958[(2)]);
var inst_45932 = (inst_45931__$1 == null);
var state_45958__$1 = (function (){var statearr_45964 = state_45958;
(statearr_45964[(7)] = inst_45931__$1);

return statearr_45964;
})();
if(cljs.core.truth_(inst_45932)){
var statearr_45965_47594 = state_45958__$1;
(statearr_45965_47594[(1)] = (5));

} else {
var statearr_45966_47595 = state_45958__$1;
(statearr_45966_47595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45959 === (13))){
var state_45958__$1 = state_45958;
var statearr_45967_47596 = state_45958__$1;
(statearr_45967_47596[(2)] = null);

(statearr_45967_47596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45959 === (6))){
var inst_45931 = (state_45958[(7)]);
var state_45958__$1 = state_45958;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45958__$1,(11),to,inst_45931);
} else {
if((state_val_45959 === (3))){
var inst_45956 = (state_45958[(2)]);
var state_45958__$1 = state_45958;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45958__$1,inst_45956);
} else {
if((state_val_45959 === (12))){
var state_45958__$1 = state_45958;
var statearr_45968_47598 = state_45958__$1;
(statearr_45968_47598[(2)] = null);

(statearr_45968_47598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45959 === (2))){
var state_45958__$1 = state_45958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45958__$1,(4),from);
} else {
if((state_val_45959 === (11))){
var inst_45946 = (state_45958[(2)]);
var state_45958__$1 = state_45958;
if(cljs.core.truth_(inst_45946)){
var statearr_45969_47599 = state_45958__$1;
(statearr_45969_47599[(1)] = (12));

} else {
var statearr_45970_47600 = state_45958__$1;
(statearr_45970_47600[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45959 === (9))){
var state_45958__$1 = state_45958;
var statearr_45971_47601 = state_45958__$1;
(statearr_45971_47601[(2)] = null);

(statearr_45971_47601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45959 === (5))){
var state_45958__$1 = state_45958;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45972_47603 = state_45958__$1;
(statearr_45972_47603[(1)] = (8));

} else {
var statearr_45973_47604 = state_45958__$1;
(statearr_45973_47604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45959 === (14))){
var inst_45952 = (state_45958[(2)]);
var state_45958__$1 = state_45958;
var statearr_45974_47605 = state_45958__$1;
(statearr_45974_47605[(2)] = inst_45952);

(statearr_45974_47605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45959 === (10))){
var inst_45943 = (state_45958[(2)]);
var state_45958__$1 = state_45958;
var statearr_45975_47606 = state_45958__$1;
(statearr_45975_47606[(2)] = inst_45943);

(statearr_45975_47606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45959 === (8))){
var inst_45938 = cljs.core.async.close_BANG_(to);
var state_45958__$1 = state_45958;
var statearr_45976_47607 = state_45958__$1;
(statearr_45976_47607[(2)] = inst_45938);

(statearr_45976_47607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45721__auto__ = null;
var cljs$core$async$state_machine__45721__auto____0 = (function (){
var statearr_45977 = [null,null,null,null,null,null,null,null];
(statearr_45977[(0)] = cljs$core$async$state_machine__45721__auto__);

(statearr_45977[(1)] = (1));

return statearr_45977;
});
var cljs$core$async$state_machine__45721__auto____1 = (function (state_45958){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_45958);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e45978){var ex__45724__auto__ = e45978;
var statearr_45979_47608 = state_45958;
(statearr_45979_47608[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_45958[(4)]))){
var statearr_45980_47609 = state_45958;
(statearr_45980_47609[(1)] = cljs.core.first((state_45958[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47610 = state_45958;
state_45958 = G__47610;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
cljs$core$async$state_machine__45721__auto__ = function(state_45958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45721__auto____1.call(this,state_45958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45721__auto____0;
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45721__auto____1;
return cljs$core$async$state_machine__45721__auto__;
})()
})();
var state__45796__auto__ = (function (){var statearr_45981 = f__45795__auto__();
(statearr_45981[(6)] = c__45794__auto___47591);

return statearr_45981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__45982){
var vec__45983 = p__45982;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45983,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45983,(1),null);
var job = vec__45983;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45794__auto___47613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = (function (state_45991){
var state_val_45992 = (state_45991[(1)]);
if((state_val_45992 === (1))){
var state_45991__$1 = state_45991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45991__$1,(2),res,v);
} else {
if((state_val_45992 === (2))){
var inst_45987 = (state_45991[(2)]);
var inst_45989 = cljs.core.async.close_BANG_(res);
var state_45991__$1 = (function (){var statearr_45993 = state_45991;
(statearr_45993[(7)] = inst_45987);

return statearr_45993;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45991__$1,inst_45989);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____0 = (function (){
var statearr_45996 = [null,null,null,null,null,null,null,null];
(statearr_45996[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__);

(statearr_45996[(1)] = (1));

return statearr_45996;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____1 = (function (state_45991){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_45991);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e45997){var ex__45724__auto__ = e45997;
var statearr_45998_47615 = state_45991;
(statearr_45998_47615[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_45991[(4)]))){
var statearr_45999_47616 = state_45991;
(statearr_45999_47616[(1)] = cljs.core.first((state_45991[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47617 = state_45991;
state_45991 = G__47617;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__ = function(state_45991){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____1.call(this,state_45991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__;
})()
})();
var state__45796__auto__ = (function (){var statearr_46000 = f__45795__auto__();
(statearr_46000[(6)] = c__45794__auto___47613);

return statearr_46000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46001){
var vec__46002 = p__46001;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46002,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46002,(1),null);
var job = vec__46002;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___47618 = n;
var __47619 = (0);
while(true){
if((__47619 < n__4741__auto___47618)){
var G__46005_47620 = type;
var G__46005_47621__$1 = (((G__46005_47620 instanceof cljs.core.Keyword))?G__46005_47620.fqn:null);
switch (G__46005_47621__$1) {
case "compute":
var c__45794__auto___47623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47619,c__45794__auto___47623,G__46005_47620,G__46005_47621__$1,n__4741__auto___47618,jobs,results,process,async){
return (function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = ((function (__47619,c__45794__auto___47623,G__46005_47620,G__46005_47621__$1,n__4741__auto___47618,jobs,results,process,async){
return (function (state_46018){
var state_val_46019 = (state_46018[(1)]);
if((state_val_46019 === (1))){
var state_46018__$1 = state_46018;
var statearr_46020_47625 = state_46018__$1;
(statearr_46020_47625[(2)] = null);

(statearr_46020_47625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (2))){
var state_46018__$1 = state_46018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46018__$1,(4),jobs);
} else {
if((state_val_46019 === (3))){
var inst_46016 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46018__$1,inst_46016);
} else {
if((state_val_46019 === (4))){
var inst_46008 = (state_46018[(2)]);
var inst_46009 = process(inst_46008);
var state_46018__$1 = state_46018;
if(cljs.core.truth_(inst_46009)){
var statearr_46024_47629 = state_46018__$1;
(statearr_46024_47629[(1)] = (5));

} else {
var statearr_46025_47630 = state_46018__$1;
(statearr_46025_47630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (5))){
var state_46018__$1 = state_46018;
var statearr_46026_47631 = state_46018__$1;
(statearr_46026_47631[(2)] = null);

(statearr_46026_47631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (6))){
var state_46018__$1 = state_46018;
var statearr_46027_47632 = state_46018__$1;
(statearr_46027_47632[(2)] = null);

(statearr_46027_47632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (7))){
var inst_46014 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
var statearr_46028_47633 = state_46018__$1;
(statearr_46028_47633[(2)] = inst_46014);

(statearr_46028_47633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47619,c__45794__auto___47623,G__46005_47620,G__46005_47621__$1,n__4741__auto___47618,jobs,results,process,async))
;
return ((function (__47619,switch__45720__auto__,c__45794__auto___47623,G__46005_47620,G__46005_47621__$1,n__4741__auto___47618,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____0 = (function (){
var statearr_46029 = [null,null,null,null,null,null,null];
(statearr_46029[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__);

(statearr_46029[(1)] = (1));

return statearr_46029;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____1 = (function (state_46018){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_46018);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e46030){var ex__45724__auto__ = e46030;
var statearr_46031_47634 = state_46018;
(statearr_46031_47634[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_46018[(4)]))){
var statearr_46032_47635 = state_46018;
(statearr_46032_47635[(1)] = cljs.core.first((state_46018[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47636 = state_46018;
state_46018 = G__47636;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__ = function(state_46018){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____1.call(this,state_46018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__;
})()
;})(__47619,switch__45720__auto__,c__45794__auto___47623,G__46005_47620,G__46005_47621__$1,n__4741__auto___47618,jobs,results,process,async))
})();
var state__45796__auto__ = (function (){var statearr_46033 = f__45795__auto__();
(statearr_46033[(6)] = c__45794__auto___47623);

return statearr_46033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
});})(__47619,c__45794__auto___47623,G__46005_47620,G__46005_47621__$1,n__4741__auto___47618,jobs,results,process,async))
);


break;
case "async":
var c__45794__auto___47637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47619,c__45794__auto___47637,G__46005_47620,G__46005_47621__$1,n__4741__auto___47618,jobs,results,process,async){
return (function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = ((function (__47619,c__45794__auto___47637,G__46005_47620,G__46005_47621__$1,n__4741__auto___47618,jobs,results,process,async){
return (function (state_46047){
var state_val_46048 = (state_46047[(1)]);
if((state_val_46048 === (1))){
var state_46047__$1 = state_46047;
var statearr_46049_47638 = state_46047__$1;
(statearr_46049_47638[(2)] = null);

(statearr_46049_47638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46048 === (2))){
var state_46047__$1 = state_46047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46047__$1,(4),jobs);
} else {
if((state_val_46048 === (3))){
var inst_46045 = (state_46047[(2)]);
var state_46047__$1 = state_46047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46047__$1,inst_46045);
} else {
if((state_val_46048 === (4))){
var inst_46037 = (state_46047[(2)]);
var inst_46038 = async(inst_46037);
var state_46047__$1 = state_46047;
if(cljs.core.truth_(inst_46038)){
var statearr_46051_47639 = state_46047__$1;
(statearr_46051_47639[(1)] = (5));

} else {
var statearr_46052_47640 = state_46047__$1;
(statearr_46052_47640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46048 === (5))){
var state_46047__$1 = state_46047;
var statearr_46054_47641 = state_46047__$1;
(statearr_46054_47641[(2)] = null);

(statearr_46054_47641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46048 === (6))){
var state_46047__$1 = state_46047;
var statearr_46055_47642 = state_46047__$1;
(statearr_46055_47642[(2)] = null);

(statearr_46055_47642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46048 === (7))){
var inst_46043 = (state_46047[(2)]);
var state_46047__$1 = state_46047;
var statearr_46058_47643 = state_46047__$1;
(statearr_46058_47643[(2)] = inst_46043);

(statearr_46058_47643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47619,c__45794__auto___47637,G__46005_47620,G__46005_47621__$1,n__4741__auto___47618,jobs,results,process,async))
;
return ((function (__47619,switch__45720__auto__,c__45794__auto___47637,G__46005_47620,G__46005_47621__$1,n__4741__auto___47618,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____0 = (function (){
var statearr_46059 = [null,null,null,null,null,null,null];
(statearr_46059[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__);

(statearr_46059[(1)] = (1));

return statearr_46059;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____1 = (function (state_46047){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_46047);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e46060){var ex__45724__auto__ = e46060;
var statearr_46061_47646 = state_46047;
(statearr_46061_47646[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_46047[(4)]))){
var statearr_46062_47647 = state_46047;
(statearr_46062_47647[(1)] = cljs.core.first((state_46047[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47649 = state_46047;
state_46047 = G__47649;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__ = function(state_46047){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____1.call(this,state_46047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__;
})()
;})(__47619,switch__45720__auto__,c__45794__auto___47637,G__46005_47620,G__46005_47621__$1,n__4741__auto___47618,jobs,results,process,async))
})();
var state__45796__auto__ = (function (){var statearr_46063 = f__45795__auto__();
(statearr_46063[(6)] = c__45794__auto___47637);

return statearr_46063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
});})(__47619,c__45794__auto___47637,G__46005_47620,G__46005_47621__$1,n__4741__auto___47618,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46005_47621__$1)].join('')));

}

var G__47650 = (__47619 + (1));
__47619 = G__47650;
continue;
} else {
}
break;
}

var c__45794__auto___47651 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = (function (state_46087){
var state_val_46088 = (state_46087[(1)]);
if((state_val_46088 === (7))){
var inst_46083 = (state_46087[(2)]);
var state_46087__$1 = state_46087;
var statearr_46089_47652 = state_46087__$1;
(statearr_46089_47652[(2)] = inst_46083);

(statearr_46089_47652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46088 === (1))){
var state_46087__$1 = state_46087;
var statearr_46090_47653 = state_46087__$1;
(statearr_46090_47653[(2)] = null);

(statearr_46090_47653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46088 === (4))){
var inst_46066 = (state_46087[(7)]);
var inst_46066__$1 = (state_46087[(2)]);
var inst_46067 = (inst_46066__$1 == null);
var state_46087__$1 = (function (){var statearr_46091 = state_46087;
(statearr_46091[(7)] = inst_46066__$1);

return statearr_46091;
})();
if(cljs.core.truth_(inst_46067)){
var statearr_46092_47654 = state_46087__$1;
(statearr_46092_47654[(1)] = (5));

} else {
var statearr_46093_47655 = state_46087__$1;
(statearr_46093_47655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46088 === (6))){
var inst_46066 = (state_46087[(7)]);
var inst_46072 = (state_46087[(8)]);
var inst_46072__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46074 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46075 = [inst_46066,inst_46072__$1];
var inst_46076 = (new cljs.core.PersistentVector(null,2,(5),inst_46074,inst_46075,null));
var state_46087__$1 = (function (){var statearr_46094 = state_46087;
(statearr_46094[(8)] = inst_46072__$1);

return statearr_46094;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46087__$1,(8),jobs,inst_46076);
} else {
if((state_val_46088 === (3))){
var inst_46085 = (state_46087[(2)]);
var state_46087__$1 = state_46087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46087__$1,inst_46085);
} else {
if((state_val_46088 === (2))){
var state_46087__$1 = state_46087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46087__$1,(4),from);
} else {
if((state_val_46088 === (9))){
var inst_46080 = (state_46087[(2)]);
var state_46087__$1 = (function (){var statearr_46096 = state_46087;
(statearr_46096[(9)] = inst_46080);

return statearr_46096;
})();
var statearr_46097_47656 = state_46087__$1;
(statearr_46097_47656[(2)] = null);

(statearr_46097_47656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46088 === (5))){
var inst_46069 = cljs.core.async.close_BANG_(jobs);
var state_46087__$1 = state_46087;
var statearr_46098_47657 = state_46087__$1;
(statearr_46098_47657[(2)] = inst_46069);

(statearr_46098_47657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46088 === (8))){
var inst_46072 = (state_46087[(8)]);
var inst_46078 = (state_46087[(2)]);
var state_46087__$1 = (function (){var statearr_46100 = state_46087;
(statearr_46100[(10)] = inst_46078);

return statearr_46100;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46087__$1,(9),results,inst_46072);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____0 = (function (){
var statearr_46102 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46102[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__);

(statearr_46102[(1)] = (1));

return statearr_46102;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____1 = (function (state_46087){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_46087);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e46103){var ex__45724__auto__ = e46103;
var statearr_46104_47658 = state_46087;
(statearr_46104_47658[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_46087[(4)]))){
var statearr_46108_47659 = state_46087;
(statearr_46108_47659[(1)] = cljs.core.first((state_46087[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47660 = state_46087;
state_46087 = G__47660;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__ = function(state_46087){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____1.call(this,state_46087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__;
})()
})();
var state__45796__auto__ = (function (){var statearr_46110 = f__45795__auto__();
(statearr_46110[(6)] = c__45794__auto___47651);

return statearr_46110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
}));


var c__45794__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = (function (state_46148){
var state_val_46149 = (state_46148[(1)]);
if((state_val_46149 === (7))){
var inst_46144 = (state_46148[(2)]);
var state_46148__$1 = state_46148;
var statearr_46150_47662 = state_46148__$1;
(statearr_46150_47662[(2)] = inst_46144);

(statearr_46150_47662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46149 === (20))){
var state_46148__$1 = state_46148;
var statearr_46151_47663 = state_46148__$1;
(statearr_46151_47663[(2)] = null);

(statearr_46151_47663[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46149 === (1))){
var state_46148__$1 = state_46148;
var statearr_46152_47664 = state_46148__$1;
(statearr_46152_47664[(2)] = null);

(statearr_46152_47664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46149 === (4))){
var inst_46113 = (state_46148[(7)]);
var inst_46113__$1 = (state_46148[(2)]);
var inst_46114 = (inst_46113__$1 == null);
var state_46148__$1 = (function (){var statearr_46153 = state_46148;
(statearr_46153[(7)] = inst_46113__$1);

return statearr_46153;
})();
if(cljs.core.truth_(inst_46114)){
var statearr_46154_47665 = state_46148__$1;
(statearr_46154_47665[(1)] = (5));

} else {
var statearr_46155_47666 = state_46148__$1;
(statearr_46155_47666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46149 === (15))){
var inst_46126 = (state_46148[(8)]);
var state_46148__$1 = state_46148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46148__$1,(18),to,inst_46126);
} else {
if((state_val_46149 === (21))){
var inst_46139 = (state_46148[(2)]);
var state_46148__$1 = state_46148;
var statearr_46156_47667 = state_46148__$1;
(statearr_46156_47667[(2)] = inst_46139);

(statearr_46156_47667[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46149 === (13))){
var inst_46141 = (state_46148[(2)]);
var state_46148__$1 = (function (){var statearr_46157 = state_46148;
(statearr_46157[(9)] = inst_46141);

return statearr_46157;
})();
var statearr_46158_47668 = state_46148__$1;
(statearr_46158_47668[(2)] = null);

(statearr_46158_47668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46149 === (6))){
var inst_46113 = (state_46148[(7)]);
var state_46148__$1 = state_46148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46148__$1,(11),inst_46113);
} else {
if((state_val_46149 === (17))){
var inst_46134 = (state_46148[(2)]);
var state_46148__$1 = state_46148;
if(cljs.core.truth_(inst_46134)){
var statearr_46159_47671 = state_46148__$1;
(statearr_46159_47671[(1)] = (19));

} else {
var statearr_46160_47672 = state_46148__$1;
(statearr_46160_47672[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46149 === (3))){
var inst_46146 = (state_46148[(2)]);
var state_46148__$1 = state_46148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46148__$1,inst_46146);
} else {
if((state_val_46149 === (12))){
var inst_46123 = (state_46148[(10)]);
var state_46148__$1 = state_46148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46148__$1,(14),inst_46123);
} else {
if((state_val_46149 === (2))){
var state_46148__$1 = state_46148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46148__$1,(4),results);
} else {
if((state_val_46149 === (19))){
var state_46148__$1 = state_46148;
var statearr_46161_47673 = state_46148__$1;
(statearr_46161_47673[(2)] = null);

(statearr_46161_47673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46149 === (11))){
var inst_46123 = (state_46148[(2)]);
var state_46148__$1 = (function (){var statearr_46162 = state_46148;
(statearr_46162[(10)] = inst_46123);

return statearr_46162;
})();
var statearr_46163_47677 = state_46148__$1;
(statearr_46163_47677[(2)] = null);

(statearr_46163_47677[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46149 === (9))){
var state_46148__$1 = state_46148;
var statearr_46166_47678 = state_46148__$1;
(statearr_46166_47678[(2)] = null);

(statearr_46166_47678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46149 === (5))){
var state_46148__$1 = state_46148;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46167_47679 = state_46148__$1;
(statearr_46167_47679[(1)] = (8));

} else {
var statearr_46168_47680 = state_46148__$1;
(statearr_46168_47680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46149 === (14))){
var inst_46126 = (state_46148[(8)]);
var inst_46128 = (state_46148[(11)]);
var inst_46126__$1 = (state_46148[(2)]);
var inst_46127 = (inst_46126__$1 == null);
var inst_46128__$1 = cljs.core.not(inst_46127);
var state_46148__$1 = (function (){var statearr_46169 = state_46148;
(statearr_46169[(8)] = inst_46126__$1);

(statearr_46169[(11)] = inst_46128__$1);

return statearr_46169;
})();
if(inst_46128__$1){
var statearr_46170_47681 = state_46148__$1;
(statearr_46170_47681[(1)] = (15));

} else {
var statearr_46171_47682 = state_46148__$1;
(statearr_46171_47682[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46149 === (16))){
var inst_46128 = (state_46148[(11)]);
var state_46148__$1 = state_46148;
var statearr_46172_47683 = state_46148__$1;
(statearr_46172_47683[(2)] = inst_46128);

(statearr_46172_47683[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46149 === (10))){
var inst_46120 = (state_46148[(2)]);
var state_46148__$1 = state_46148;
var statearr_46173_47687 = state_46148__$1;
(statearr_46173_47687[(2)] = inst_46120);

(statearr_46173_47687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46149 === (18))){
var inst_46131 = (state_46148[(2)]);
var state_46148__$1 = state_46148;
var statearr_46174_47688 = state_46148__$1;
(statearr_46174_47688[(2)] = inst_46131);

(statearr_46174_47688[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46149 === (8))){
var inst_46117 = cljs.core.async.close_BANG_(to);
var state_46148__$1 = state_46148;
var statearr_46175_47689 = state_46148__$1;
(statearr_46175_47689[(2)] = inst_46117);

(statearr_46175_47689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____0 = (function (){
var statearr_46176 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46176[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__);

(statearr_46176[(1)] = (1));

return statearr_46176;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____1 = (function (state_46148){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_46148);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e46179){var ex__45724__auto__ = e46179;
var statearr_46180_47690 = state_46148;
(statearr_46180_47690[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_46148[(4)]))){
var statearr_46181_47691 = state_46148;
(statearr_46181_47691[(1)] = cljs.core.first((state_46148[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47692 = state_46148;
state_46148 = G__47692;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__ = function(state_46148){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____1.call(this,state_46148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45721__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45721__auto__;
})()
})();
var state__45796__auto__ = (function (){var statearr_46182 = f__45795__auto__();
(statearr_46182[(6)] = c__45794__auto__);

return statearr_46182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
}));

return c__45794__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__46184 = arguments.length;
switch (G__46184) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__46189 = arguments.length;
switch (G__46189) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__46191 = arguments.length;
switch (G__46191) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__45794__auto___47710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = (function (state_46217){
var state_val_46218 = (state_46217[(1)]);
if((state_val_46218 === (7))){
var inst_46213 = (state_46217[(2)]);
var state_46217__$1 = state_46217;
var statearr_46219_47711 = state_46217__$1;
(statearr_46219_47711[(2)] = inst_46213);

(statearr_46219_47711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46218 === (1))){
var state_46217__$1 = state_46217;
var statearr_46220_47712 = state_46217__$1;
(statearr_46220_47712[(2)] = null);

(statearr_46220_47712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46218 === (4))){
var inst_46194 = (state_46217[(7)]);
var inst_46194__$1 = (state_46217[(2)]);
var inst_46195 = (inst_46194__$1 == null);
var state_46217__$1 = (function (){var statearr_46221 = state_46217;
(statearr_46221[(7)] = inst_46194__$1);

return statearr_46221;
})();
if(cljs.core.truth_(inst_46195)){
var statearr_46222_47713 = state_46217__$1;
(statearr_46222_47713[(1)] = (5));

} else {
var statearr_46223_47714 = state_46217__$1;
(statearr_46223_47714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46218 === (13))){
var state_46217__$1 = state_46217;
var statearr_46224_47715 = state_46217__$1;
(statearr_46224_47715[(2)] = null);

(statearr_46224_47715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46218 === (6))){
var inst_46194 = (state_46217[(7)]);
var inst_46200 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46194) : p.call(null,inst_46194));
var state_46217__$1 = state_46217;
if(cljs.core.truth_(inst_46200)){
var statearr_46225_47716 = state_46217__$1;
(statearr_46225_47716[(1)] = (9));

} else {
var statearr_46226_47717 = state_46217__$1;
(statearr_46226_47717[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46218 === (3))){
var inst_46215 = (state_46217[(2)]);
var state_46217__$1 = state_46217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46217__$1,inst_46215);
} else {
if((state_val_46218 === (12))){
var state_46217__$1 = state_46217;
var statearr_46227_47718 = state_46217__$1;
(statearr_46227_47718[(2)] = null);

(statearr_46227_47718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46218 === (2))){
var state_46217__$1 = state_46217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46217__$1,(4),ch);
} else {
if((state_val_46218 === (11))){
var inst_46194 = (state_46217[(7)]);
var inst_46204 = (state_46217[(2)]);
var state_46217__$1 = state_46217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46217__$1,(8),inst_46204,inst_46194);
} else {
if((state_val_46218 === (9))){
var state_46217__$1 = state_46217;
var statearr_46228_47719 = state_46217__$1;
(statearr_46228_47719[(2)] = tc);

(statearr_46228_47719[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46218 === (5))){
var inst_46197 = cljs.core.async.close_BANG_(tc);
var inst_46198 = cljs.core.async.close_BANG_(fc);
var state_46217__$1 = (function (){var statearr_46230 = state_46217;
(statearr_46230[(8)] = inst_46197);

return statearr_46230;
})();
var statearr_46231_47720 = state_46217__$1;
(statearr_46231_47720[(2)] = inst_46198);

(statearr_46231_47720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46218 === (14))){
var inst_46211 = (state_46217[(2)]);
var state_46217__$1 = state_46217;
var statearr_46232_47721 = state_46217__$1;
(statearr_46232_47721[(2)] = inst_46211);

(statearr_46232_47721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46218 === (10))){
var state_46217__$1 = state_46217;
var statearr_46233_47722 = state_46217__$1;
(statearr_46233_47722[(2)] = fc);

(statearr_46233_47722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46218 === (8))){
var inst_46206 = (state_46217[(2)]);
var state_46217__$1 = state_46217;
if(cljs.core.truth_(inst_46206)){
var statearr_46236_47723 = state_46217__$1;
(statearr_46236_47723[(1)] = (12));

} else {
var statearr_46237_47724 = state_46217__$1;
(statearr_46237_47724[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45721__auto__ = null;
var cljs$core$async$state_machine__45721__auto____0 = (function (){
var statearr_46238 = [null,null,null,null,null,null,null,null,null];
(statearr_46238[(0)] = cljs$core$async$state_machine__45721__auto__);

(statearr_46238[(1)] = (1));

return statearr_46238;
});
var cljs$core$async$state_machine__45721__auto____1 = (function (state_46217){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_46217);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e46239){var ex__45724__auto__ = e46239;
var statearr_46240_47725 = state_46217;
(statearr_46240_47725[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_46217[(4)]))){
var statearr_46241_47726 = state_46217;
(statearr_46241_47726[(1)] = cljs.core.first((state_46217[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47727 = state_46217;
state_46217 = G__47727;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
cljs$core$async$state_machine__45721__auto__ = function(state_46217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45721__auto____1.call(this,state_46217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45721__auto____0;
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45721__auto____1;
return cljs$core$async$state_machine__45721__auto__;
})()
})();
var state__45796__auto__ = (function (){var statearr_46244 = f__45795__auto__();
(statearr_46244[(6)] = c__45794__auto___47710);

return statearr_46244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__45794__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = (function (state_46266){
var state_val_46267 = (state_46266[(1)]);
if((state_val_46267 === (7))){
var inst_46262 = (state_46266[(2)]);
var state_46266__$1 = state_46266;
var statearr_46268_47728 = state_46266__$1;
(statearr_46268_47728[(2)] = inst_46262);

(statearr_46268_47728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46267 === (1))){
var inst_46245 = init;
var inst_46246 = inst_46245;
var state_46266__$1 = (function (){var statearr_46269 = state_46266;
(statearr_46269[(7)] = inst_46246);

return statearr_46269;
})();
var statearr_46274_47729 = state_46266__$1;
(statearr_46274_47729[(2)] = null);

(statearr_46274_47729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46267 === (4))){
var inst_46249 = (state_46266[(8)]);
var inst_46249__$1 = (state_46266[(2)]);
var inst_46250 = (inst_46249__$1 == null);
var state_46266__$1 = (function (){var statearr_46275 = state_46266;
(statearr_46275[(8)] = inst_46249__$1);

return statearr_46275;
})();
if(cljs.core.truth_(inst_46250)){
var statearr_46276_47730 = state_46266__$1;
(statearr_46276_47730[(1)] = (5));

} else {
var statearr_46277_47731 = state_46266__$1;
(statearr_46277_47731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46267 === (6))){
var inst_46249 = (state_46266[(8)]);
var inst_46253 = (state_46266[(9)]);
var inst_46246 = (state_46266[(7)]);
var inst_46253__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46246,inst_46249) : f.call(null,inst_46246,inst_46249));
var inst_46254 = cljs.core.reduced_QMARK_(inst_46253__$1);
var state_46266__$1 = (function (){var statearr_46278 = state_46266;
(statearr_46278[(9)] = inst_46253__$1);

return statearr_46278;
})();
if(inst_46254){
var statearr_46280_47732 = state_46266__$1;
(statearr_46280_47732[(1)] = (8));

} else {
var statearr_46283_47733 = state_46266__$1;
(statearr_46283_47733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46267 === (3))){
var inst_46264 = (state_46266[(2)]);
var state_46266__$1 = state_46266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46266__$1,inst_46264);
} else {
if((state_val_46267 === (2))){
var state_46266__$1 = state_46266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46266__$1,(4),ch);
} else {
if((state_val_46267 === (9))){
var inst_46253 = (state_46266[(9)]);
var inst_46246 = inst_46253;
var state_46266__$1 = (function (){var statearr_46284 = state_46266;
(statearr_46284[(7)] = inst_46246);

return statearr_46284;
})();
var statearr_46285_47734 = state_46266__$1;
(statearr_46285_47734[(2)] = null);

(statearr_46285_47734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46267 === (5))){
var inst_46246 = (state_46266[(7)]);
var state_46266__$1 = state_46266;
var statearr_46287_47735 = state_46266__$1;
(statearr_46287_47735[(2)] = inst_46246);

(statearr_46287_47735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46267 === (10))){
var inst_46260 = (state_46266[(2)]);
var state_46266__$1 = state_46266;
var statearr_46288_47736 = state_46266__$1;
(statearr_46288_47736[(2)] = inst_46260);

(statearr_46288_47736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46267 === (8))){
var inst_46253 = (state_46266[(9)]);
var inst_46256 = cljs.core.deref(inst_46253);
var state_46266__$1 = state_46266;
var statearr_46289_47737 = state_46266__$1;
(statearr_46289_47737[(2)] = inst_46256);

(statearr_46289_47737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__45721__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45721__auto____0 = (function (){
var statearr_46290 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46290[(0)] = cljs$core$async$reduce_$_state_machine__45721__auto__);

(statearr_46290[(1)] = (1));

return statearr_46290;
});
var cljs$core$async$reduce_$_state_machine__45721__auto____1 = (function (state_46266){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_46266);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e46291){var ex__45724__auto__ = e46291;
var statearr_46292_47738 = state_46266;
(statearr_46292_47738[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_46266[(4)]))){
var statearr_46293_47739 = state_46266;
(statearr_46293_47739[(1)] = cljs.core.first((state_46266[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47740 = state_46266;
state_46266 = G__47740;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45721__auto__ = function(state_46266){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45721__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45721__auto____1.call(this,state_46266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45721__auto____0;
cljs$core$async$reduce_$_state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45721__auto____1;
return cljs$core$async$reduce_$_state_machine__45721__auto__;
})()
})();
var state__45796__auto__ = (function (){var statearr_46295 = f__45795__auto__();
(statearr_46295[(6)] = c__45794__auto__);

return statearr_46295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
}));

return c__45794__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45794__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = (function (state_46302){
var state_val_46303 = (state_46302[(1)]);
if((state_val_46303 === (1))){
var inst_46297 = cljs.core.async.reduce(f__$1,init,ch);
var state_46302__$1 = state_46302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46302__$1,(2),inst_46297);
} else {
if((state_val_46303 === (2))){
var inst_46299 = (state_46302[(2)]);
var inst_46300 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46299) : f__$1.call(null,inst_46299));
var state_46302__$1 = state_46302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46302__$1,inst_46300);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__45721__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45721__auto____0 = (function (){
var statearr_46304 = [null,null,null,null,null,null,null];
(statearr_46304[(0)] = cljs$core$async$transduce_$_state_machine__45721__auto__);

(statearr_46304[(1)] = (1));

return statearr_46304;
});
var cljs$core$async$transduce_$_state_machine__45721__auto____1 = (function (state_46302){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_46302);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e46305){var ex__45724__auto__ = e46305;
var statearr_46306_47741 = state_46302;
(statearr_46306_47741[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_46302[(4)]))){
var statearr_46307_47742 = state_46302;
(statearr_46307_47742[(1)] = cljs.core.first((state_46302[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47743 = state_46302;
state_46302 = G__47743;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45721__auto__ = function(state_46302){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45721__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45721__auto____1.call(this,state_46302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45721__auto____0;
cljs$core$async$transduce_$_state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45721__auto____1;
return cljs$core$async$transduce_$_state_machine__45721__auto__;
})()
})();
var state__45796__auto__ = (function (){var statearr_46308 = f__45795__auto__();
(statearr_46308[(6)] = c__45794__auto__);

return statearr_46308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
}));

return c__45794__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__46310 = arguments.length;
switch (G__46310) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45794__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = (function (state_46335){
var state_val_46336 = (state_46335[(1)]);
if((state_val_46336 === (7))){
var inst_46317 = (state_46335[(2)]);
var state_46335__$1 = state_46335;
var statearr_46337_47745 = state_46335__$1;
(statearr_46337_47745[(2)] = inst_46317);

(statearr_46337_47745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46336 === (1))){
var inst_46311 = cljs.core.seq(coll);
var inst_46312 = inst_46311;
var state_46335__$1 = (function (){var statearr_46338 = state_46335;
(statearr_46338[(7)] = inst_46312);

return statearr_46338;
})();
var statearr_46339_47746 = state_46335__$1;
(statearr_46339_47746[(2)] = null);

(statearr_46339_47746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46336 === (4))){
var inst_46312 = (state_46335[(7)]);
var inst_46315 = cljs.core.first(inst_46312);
var state_46335__$1 = state_46335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46335__$1,(7),ch,inst_46315);
} else {
if((state_val_46336 === (13))){
var inst_46329 = (state_46335[(2)]);
var state_46335__$1 = state_46335;
var statearr_46340_47747 = state_46335__$1;
(statearr_46340_47747[(2)] = inst_46329);

(statearr_46340_47747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46336 === (6))){
var inst_46320 = (state_46335[(2)]);
var state_46335__$1 = state_46335;
if(cljs.core.truth_(inst_46320)){
var statearr_46341_47748 = state_46335__$1;
(statearr_46341_47748[(1)] = (8));

} else {
var statearr_46342_47749 = state_46335__$1;
(statearr_46342_47749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46336 === (3))){
var inst_46333 = (state_46335[(2)]);
var state_46335__$1 = state_46335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46335__$1,inst_46333);
} else {
if((state_val_46336 === (12))){
var state_46335__$1 = state_46335;
var statearr_46343_47750 = state_46335__$1;
(statearr_46343_47750[(2)] = null);

(statearr_46343_47750[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46336 === (2))){
var inst_46312 = (state_46335[(7)]);
var state_46335__$1 = state_46335;
if(cljs.core.truth_(inst_46312)){
var statearr_46344_47751 = state_46335__$1;
(statearr_46344_47751[(1)] = (4));

} else {
var statearr_46345_47752 = state_46335__$1;
(statearr_46345_47752[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46336 === (11))){
var inst_46326 = cljs.core.async.close_BANG_(ch);
var state_46335__$1 = state_46335;
var statearr_46346_47754 = state_46335__$1;
(statearr_46346_47754[(2)] = inst_46326);

(statearr_46346_47754[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46336 === (9))){
var state_46335__$1 = state_46335;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46347_47756 = state_46335__$1;
(statearr_46347_47756[(1)] = (11));

} else {
var statearr_46348_47757 = state_46335__$1;
(statearr_46348_47757[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46336 === (5))){
var inst_46312 = (state_46335[(7)]);
var state_46335__$1 = state_46335;
var statearr_46349_47758 = state_46335__$1;
(statearr_46349_47758[(2)] = inst_46312);

(statearr_46349_47758[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46336 === (10))){
var inst_46331 = (state_46335[(2)]);
var state_46335__$1 = state_46335;
var statearr_46350_47759 = state_46335__$1;
(statearr_46350_47759[(2)] = inst_46331);

(statearr_46350_47759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46336 === (8))){
var inst_46312 = (state_46335[(7)]);
var inst_46322 = cljs.core.next(inst_46312);
var inst_46312__$1 = inst_46322;
var state_46335__$1 = (function (){var statearr_46351 = state_46335;
(statearr_46351[(7)] = inst_46312__$1);

return statearr_46351;
})();
var statearr_46352_47760 = state_46335__$1;
(statearr_46352_47760[(2)] = null);

(statearr_46352_47760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45721__auto__ = null;
var cljs$core$async$state_machine__45721__auto____0 = (function (){
var statearr_46353 = [null,null,null,null,null,null,null,null];
(statearr_46353[(0)] = cljs$core$async$state_machine__45721__auto__);

(statearr_46353[(1)] = (1));

return statearr_46353;
});
var cljs$core$async$state_machine__45721__auto____1 = (function (state_46335){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_46335);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e46354){var ex__45724__auto__ = e46354;
var statearr_46355_47761 = state_46335;
(statearr_46355_47761[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_46335[(4)]))){
var statearr_46356_47762 = state_46335;
(statearr_46356_47762[(1)] = cljs.core.first((state_46335[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47763 = state_46335;
state_46335 = G__47763;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
cljs$core$async$state_machine__45721__auto__ = function(state_46335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45721__auto____1.call(this,state_46335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45721__auto____0;
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45721__auto____1;
return cljs$core$async$state_machine__45721__auto__;
})()
})();
var state__45796__auto__ = (function (){var statearr_46357 = f__45795__auto__();
(statearr_46357[(6)] = c__45794__auto__);

return statearr_46357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
}));

return c__45794__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46359 = arguments.length;
switch (G__46359) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47765 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47765(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47766 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47766(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47796 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47796(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47806 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47806(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46364 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46364 = (function (ch,cs,meta46365){
this.ch = ch;
this.cs = cs;
this.meta46365 = meta46365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46366,meta46365__$1){
var self__ = this;
var _46366__$1 = this;
return (new cljs.core.async.t_cljs$core$async46364(self__.ch,self__.cs,meta46365__$1));
}));

(cljs.core.async.t_cljs$core$async46364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46366){
var self__ = this;
var _46366__$1 = this;
return self__.meta46365;
}));

(cljs.core.async.t_cljs$core$async46364.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46364.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46364.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46364.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46364.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46364.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46365","meta46365",1032659182,null)], null);
}));

(cljs.core.async.t_cljs$core$async46364.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46364");

(cljs.core.async.t_cljs$core$async46364.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46364");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46364.
 */
cljs.core.async.__GT_t_cljs$core$async46364 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46364(ch__$1,cs__$1,meta46365){
return (new cljs.core.async.t_cljs$core$async46364(ch__$1,cs__$1,meta46365));
});

}

return (new cljs.core.async.t_cljs$core$async46364(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__45794__auto___47812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = (function (state_46513){
var state_val_46514 = (state_46513[(1)]);
if((state_val_46514 === (7))){
var inst_46509 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
var statearr_46515_47813 = state_46513__$1;
(statearr_46515_47813[(2)] = inst_46509);

(statearr_46515_47813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (20))){
var inst_46404 = (state_46513[(7)]);
var inst_46418 = cljs.core.first(inst_46404);
var inst_46419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46418,(0),null);
var inst_46420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46418,(1),null);
var state_46513__$1 = (function (){var statearr_46516 = state_46513;
(statearr_46516[(8)] = inst_46419);

return statearr_46516;
})();
if(cljs.core.truth_(inst_46420)){
var statearr_46517_47815 = state_46513__$1;
(statearr_46517_47815[(1)] = (22));

} else {
var statearr_46518_47816 = state_46513__$1;
(statearr_46518_47816[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (27))){
var inst_46369 = (state_46513[(9)]);
var inst_46455 = (state_46513[(10)]);
var inst_46450 = (state_46513[(11)]);
var inst_46448 = (state_46513[(12)]);
var inst_46455__$1 = cljs.core._nth(inst_46448,inst_46450);
var inst_46456 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46455__$1,inst_46369,done);
var state_46513__$1 = (function (){var statearr_46519 = state_46513;
(statearr_46519[(10)] = inst_46455__$1);

return statearr_46519;
})();
if(cljs.core.truth_(inst_46456)){
var statearr_46520_47818 = state_46513__$1;
(statearr_46520_47818[(1)] = (30));

} else {
var statearr_46521_47819 = state_46513__$1;
(statearr_46521_47819[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (1))){
var state_46513__$1 = state_46513;
var statearr_46522_47820 = state_46513__$1;
(statearr_46522_47820[(2)] = null);

(statearr_46522_47820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (24))){
var inst_46404 = (state_46513[(7)]);
var inst_46425 = (state_46513[(2)]);
var inst_46426 = cljs.core.next(inst_46404);
var inst_46378 = inst_46426;
var inst_46379 = null;
var inst_46380 = (0);
var inst_46381 = (0);
var state_46513__$1 = (function (){var statearr_46523 = state_46513;
(statearr_46523[(13)] = inst_46425);

(statearr_46523[(14)] = inst_46378);

(statearr_46523[(15)] = inst_46381);

(statearr_46523[(16)] = inst_46380);

(statearr_46523[(17)] = inst_46379);

return statearr_46523;
})();
var statearr_46524_47821 = state_46513__$1;
(statearr_46524_47821[(2)] = null);

(statearr_46524_47821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (39))){
var state_46513__$1 = state_46513;
var statearr_46528_47822 = state_46513__$1;
(statearr_46528_47822[(2)] = null);

(statearr_46528_47822[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (4))){
var inst_46369 = (state_46513[(9)]);
var inst_46369__$1 = (state_46513[(2)]);
var inst_46370 = (inst_46369__$1 == null);
var state_46513__$1 = (function (){var statearr_46529 = state_46513;
(statearr_46529[(9)] = inst_46369__$1);

return statearr_46529;
})();
if(cljs.core.truth_(inst_46370)){
var statearr_46530_47826 = state_46513__$1;
(statearr_46530_47826[(1)] = (5));

} else {
var statearr_46531_47827 = state_46513__$1;
(statearr_46531_47827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (15))){
var inst_46378 = (state_46513[(14)]);
var inst_46381 = (state_46513[(15)]);
var inst_46380 = (state_46513[(16)]);
var inst_46379 = (state_46513[(17)]);
var inst_46400 = (state_46513[(2)]);
var inst_46401 = (inst_46381 + (1));
var tmp46525 = inst_46378;
var tmp46526 = inst_46380;
var tmp46527 = inst_46379;
var inst_46378__$1 = tmp46525;
var inst_46379__$1 = tmp46527;
var inst_46380__$1 = tmp46526;
var inst_46381__$1 = inst_46401;
var state_46513__$1 = (function (){var statearr_46533 = state_46513;
(statearr_46533[(14)] = inst_46378__$1);

(statearr_46533[(18)] = inst_46400);

(statearr_46533[(15)] = inst_46381__$1);

(statearr_46533[(16)] = inst_46380__$1);

(statearr_46533[(17)] = inst_46379__$1);

return statearr_46533;
})();
var statearr_46534_47828 = state_46513__$1;
(statearr_46534_47828[(2)] = null);

(statearr_46534_47828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (21))){
var inst_46429 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
var statearr_46538_47829 = state_46513__$1;
(statearr_46538_47829[(2)] = inst_46429);

(statearr_46538_47829[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (31))){
var inst_46455 = (state_46513[(10)]);
var inst_46465 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46455);
var state_46513__$1 = state_46513;
var statearr_46539_47830 = state_46513__$1;
(statearr_46539_47830[(2)] = inst_46465);

(statearr_46539_47830[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (32))){
var inst_46447 = (state_46513[(19)]);
var inst_46449 = (state_46513[(20)]);
var inst_46450 = (state_46513[(11)]);
var inst_46448 = (state_46513[(12)]);
var inst_46468 = (state_46513[(2)]);
var inst_46469 = (inst_46450 + (1));
var tmp46535 = inst_46447;
var tmp46536 = inst_46449;
var tmp46537 = inst_46448;
var inst_46447__$1 = tmp46535;
var inst_46448__$1 = tmp46537;
var inst_46449__$1 = tmp46536;
var inst_46450__$1 = inst_46469;
var state_46513__$1 = (function (){var statearr_46540 = state_46513;
(statearr_46540[(19)] = inst_46447__$1);

(statearr_46540[(20)] = inst_46449__$1);

(statearr_46540[(11)] = inst_46450__$1);

(statearr_46540[(12)] = inst_46448__$1);

(statearr_46540[(21)] = inst_46468);

return statearr_46540;
})();
var statearr_46542_47831 = state_46513__$1;
(statearr_46542_47831[(2)] = null);

(statearr_46542_47831[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (40))){
var inst_46482 = (state_46513[(22)]);
var inst_46486 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46482);
var state_46513__$1 = state_46513;
var statearr_46543_47832 = state_46513__$1;
(statearr_46543_47832[(2)] = inst_46486);

(statearr_46543_47832[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (33))){
var inst_46472 = (state_46513[(23)]);
var inst_46475 = cljs.core.chunked_seq_QMARK_(inst_46472);
var state_46513__$1 = state_46513;
if(inst_46475){
var statearr_46544_47833 = state_46513__$1;
(statearr_46544_47833[(1)] = (36));

} else {
var statearr_46545_47834 = state_46513__$1;
(statearr_46545_47834[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (13))){
var inst_46394 = (state_46513[(24)]);
var inst_46397 = cljs.core.async.close_BANG_(inst_46394);
var state_46513__$1 = state_46513;
var statearr_46546_47835 = state_46513__$1;
(statearr_46546_47835[(2)] = inst_46397);

(statearr_46546_47835[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (22))){
var inst_46419 = (state_46513[(8)]);
var inst_46422 = cljs.core.async.close_BANG_(inst_46419);
var state_46513__$1 = state_46513;
var statearr_46547_47836 = state_46513__$1;
(statearr_46547_47836[(2)] = inst_46422);

(statearr_46547_47836[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (36))){
var inst_46472 = (state_46513[(23)]);
var inst_46477 = cljs.core.chunk_first(inst_46472);
var inst_46478 = cljs.core.chunk_rest(inst_46472);
var inst_46479 = cljs.core.count(inst_46477);
var inst_46447 = inst_46478;
var inst_46448 = inst_46477;
var inst_46449 = inst_46479;
var inst_46450 = (0);
var state_46513__$1 = (function (){var statearr_46551 = state_46513;
(statearr_46551[(19)] = inst_46447);

(statearr_46551[(20)] = inst_46449);

(statearr_46551[(11)] = inst_46450);

(statearr_46551[(12)] = inst_46448);

return statearr_46551;
})();
var statearr_46552_47837 = state_46513__$1;
(statearr_46552_47837[(2)] = null);

(statearr_46552_47837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (41))){
var inst_46472 = (state_46513[(23)]);
var inst_46488 = (state_46513[(2)]);
var inst_46489 = cljs.core.next(inst_46472);
var inst_46447 = inst_46489;
var inst_46448 = null;
var inst_46449 = (0);
var inst_46450 = (0);
var state_46513__$1 = (function (){var statearr_46553 = state_46513;
(statearr_46553[(19)] = inst_46447);

(statearr_46553[(25)] = inst_46488);

(statearr_46553[(20)] = inst_46449);

(statearr_46553[(11)] = inst_46450);

(statearr_46553[(12)] = inst_46448);

return statearr_46553;
})();
var statearr_46554_47838 = state_46513__$1;
(statearr_46554_47838[(2)] = null);

(statearr_46554_47838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (43))){
var state_46513__$1 = state_46513;
var statearr_46557_47839 = state_46513__$1;
(statearr_46557_47839[(2)] = null);

(statearr_46557_47839[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (29))){
var inst_46497 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
var statearr_46559_47840 = state_46513__$1;
(statearr_46559_47840[(2)] = inst_46497);

(statearr_46559_47840[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (44))){
var inst_46506 = (state_46513[(2)]);
var state_46513__$1 = (function (){var statearr_46560 = state_46513;
(statearr_46560[(26)] = inst_46506);

return statearr_46560;
})();
var statearr_46561_47841 = state_46513__$1;
(statearr_46561_47841[(2)] = null);

(statearr_46561_47841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (6))){
var inst_46439 = (state_46513[(27)]);
var inst_46438 = cljs.core.deref(cs);
var inst_46439__$1 = cljs.core.keys(inst_46438);
var inst_46440 = cljs.core.count(inst_46439__$1);
var inst_46441 = cljs.core.reset_BANG_(dctr,inst_46440);
var inst_46446 = cljs.core.seq(inst_46439__$1);
var inst_46447 = inst_46446;
var inst_46448 = null;
var inst_46449 = (0);
var inst_46450 = (0);
var state_46513__$1 = (function (){var statearr_46562 = state_46513;
(statearr_46562[(19)] = inst_46447);

(statearr_46562[(27)] = inst_46439__$1);

(statearr_46562[(20)] = inst_46449);

(statearr_46562[(28)] = inst_46441);

(statearr_46562[(11)] = inst_46450);

(statearr_46562[(12)] = inst_46448);

return statearr_46562;
})();
var statearr_46563_47842 = state_46513__$1;
(statearr_46563_47842[(2)] = null);

(statearr_46563_47842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (28))){
var inst_46447 = (state_46513[(19)]);
var inst_46472 = (state_46513[(23)]);
var inst_46472__$1 = cljs.core.seq(inst_46447);
var state_46513__$1 = (function (){var statearr_46564 = state_46513;
(statearr_46564[(23)] = inst_46472__$1);

return statearr_46564;
})();
if(inst_46472__$1){
var statearr_46565_47843 = state_46513__$1;
(statearr_46565_47843[(1)] = (33));

} else {
var statearr_46566_47844 = state_46513__$1;
(statearr_46566_47844[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (25))){
var inst_46449 = (state_46513[(20)]);
var inst_46450 = (state_46513[(11)]);
var inst_46452 = (inst_46450 < inst_46449);
var inst_46453 = inst_46452;
var state_46513__$1 = state_46513;
if(cljs.core.truth_(inst_46453)){
var statearr_46567_47845 = state_46513__$1;
(statearr_46567_47845[(1)] = (27));

} else {
var statearr_46568_47846 = state_46513__$1;
(statearr_46568_47846[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (34))){
var state_46513__$1 = state_46513;
var statearr_46570_47847 = state_46513__$1;
(statearr_46570_47847[(2)] = null);

(statearr_46570_47847[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (17))){
var state_46513__$1 = state_46513;
var statearr_46572_47848 = state_46513__$1;
(statearr_46572_47848[(2)] = null);

(statearr_46572_47848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (3))){
var inst_46511 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46513__$1,inst_46511);
} else {
if((state_val_46514 === (12))){
var inst_46434 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
var statearr_46575_47849 = state_46513__$1;
(statearr_46575_47849[(2)] = inst_46434);

(statearr_46575_47849[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (2))){
var state_46513__$1 = state_46513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46513__$1,(4),ch);
} else {
if((state_val_46514 === (23))){
var state_46513__$1 = state_46513;
var statearr_46576_47850 = state_46513__$1;
(statearr_46576_47850[(2)] = null);

(statearr_46576_47850[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (35))){
var inst_46495 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
var statearr_46577_47851 = state_46513__$1;
(statearr_46577_47851[(2)] = inst_46495);

(statearr_46577_47851[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (19))){
var inst_46404 = (state_46513[(7)]);
var inst_46410 = cljs.core.chunk_first(inst_46404);
var inst_46411 = cljs.core.chunk_rest(inst_46404);
var inst_46412 = cljs.core.count(inst_46410);
var inst_46378 = inst_46411;
var inst_46379 = inst_46410;
var inst_46380 = inst_46412;
var inst_46381 = (0);
var state_46513__$1 = (function (){var statearr_46578 = state_46513;
(statearr_46578[(14)] = inst_46378);

(statearr_46578[(15)] = inst_46381);

(statearr_46578[(16)] = inst_46380);

(statearr_46578[(17)] = inst_46379);

return statearr_46578;
})();
var statearr_46579_47852 = state_46513__$1;
(statearr_46579_47852[(2)] = null);

(statearr_46579_47852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (11))){
var inst_46378 = (state_46513[(14)]);
var inst_46404 = (state_46513[(7)]);
var inst_46404__$1 = cljs.core.seq(inst_46378);
var state_46513__$1 = (function (){var statearr_46580 = state_46513;
(statearr_46580[(7)] = inst_46404__$1);

return statearr_46580;
})();
if(inst_46404__$1){
var statearr_46581_47853 = state_46513__$1;
(statearr_46581_47853[(1)] = (16));

} else {
var statearr_46582_47854 = state_46513__$1;
(statearr_46582_47854[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (9))){
var inst_46436 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
var statearr_46583_47855 = state_46513__$1;
(statearr_46583_47855[(2)] = inst_46436);

(statearr_46583_47855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (5))){
var inst_46376 = cljs.core.deref(cs);
var inst_46377 = cljs.core.seq(inst_46376);
var inst_46378 = inst_46377;
var inst_46379 = null;
var inst_46380 = (0);
var inst_46381 = (0);
var state_46513__$1 = (function (){var statearr_46584 = state_46513;
(statearr_46584[(14)] = inst_46378);

(statearr_46584[(15)] = inst_46381);

(statearr_46584[(16)] = inst_46380);

(statearr_46584[(17)] = inst_46379);

return statearr_46584;
})();
var statearr_46585_47856 = state_46513__$1;
(statearr_46585_47856[(2)] = null);

(statearr_46585_47856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (14))){
var state_46513__$1 = state_46513;
var statearr_46586_47857 = state_46513__$1;
(statearr_46586_47857[(2)] = null);

(statearr_46586_47857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (45))){
var inst_46503 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
var statearr_46587_47858 = state_46513__$1;
(statearr_46587_47858[(2)] = inst_46503);

(statearr_46587_47858[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (26))){
var inst_46439 = (state_46513[(27)]);
var inst_46499 = (state_46513[(2)]);
var inst_46500 = cljs.core.seq(inst_46439);
var state_46513__$1 = (function (){var statearr_46588 = state_46513;
(statearr_46588[(29)] = inst_46499);

return statearr_46588;
})();
if(inst_46500){
var statearr_46589_47859 = state_46513__$1;
(statearr_46589_47859[(1)] = (42));

} else {
var statearr_46590_47860 = state_46513__$1;
(statearr_46590_47860[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (16))){
var inst_46404 = (state_46513[(7)]);
var inst_46408 = cljs.core.chunked_seq_QMARK_(inst_46404);
var state_46513__$1 = state_46513;
if(inst_46408){
var statearr_46591_47861 = state_46513__$1;
(statearr_46591_47861[(1)] = (19));

} else {
var statearr_46592_47862 = state_46513__$1;
(statearr_46592_47862[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (38))){
var inst_46492 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
var statearr_46593_47863 = state_46513__$1;
(statearr_46593_47863[(2)] = inst_46492);

(statearr_46593_47863[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (30))){
var state_46513__$1 = state_46513;
var statearr_46594_47864 = state_46513__$1;
(statearr_46594_47864[(2)] = null);

(statearr_46594_47864[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (10))){
var inst_46381 = (state_46513[(15)]);
var inst_46379 = (state_46513[(17)]);
var inst_46392 = cljs.core._nth(inst_46379,inst_46381);
var inst_46394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46392,(0),null);
var inst_46395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46392,(1),null);
var state_46513__$1 = (function (){var statearr_46595 = state_46513;
(statearr_46595[(24)] = inst_46394);

return statearr_46595;
})();
if(cljs.core.truth_(inst_46395)){
var statearr_46596_47865 = state_46513__$1;
(statearr_46596_47865[(1)] = (13));

} else {
var statearr_46597_47866 = state_46513__$1;
(statearr_46597_47866[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (18))){
var inst_46432 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
var statearr_46598_47867 = state_46513__$1;
(statearr_46598_47867[(2)] = inst_46432);

(statearr_46598_47867[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (42))){
var state_46513__$1 = state_46513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46513__$1,(45),dchan);
} else {
if((state_val_46514 === (37))){
var inst_46369 = (state_46513[(9)]);
var inst_46472 = (state_46513[(23)]);
var inst_46482 = (state_46513[(22)]);
var inst_46482__$1 = cljs.core.first(inst_46472);
var inst_46483 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46482__$1,inst_46369,done);
var state_46513__$1 = (function (){var statearr_46599 = state_46513;
(statearr_46599[(22)] = inst_46482__$1);

return statearr_46599;
})();
if(cljs.core.truth_(inst_46483)){
var statearr_46600_47868 = state_46513__$1;
(statearr_46600_47868[(1)] = (39));

} else {
var statearr_46601_47869 = state_46513__$1;
(statearr_46601_47869[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (8))){
var inst_46381 = (state_46513[(15)]);
var inst_46380 = (state_46513[(16)]);
var inst_46383 = (inst_46381 < inst_46380);
var inst_46384 = inst_46383;
var state_46513__$1 = state_46513;
if(cljs.core.truth_(inst_46384)){
var statearr_46602_47871 = state_46513__$1;
(statearr_46602_47871[(1)] = (10));

} else {
var statearr_46603_47872 = state_46513__$1;
(statearr_46603_47872[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__45721__auto__ = null;
var cljs$core$async$mult_$_state_machine__45721__auto____0 = (function (){
var statearr_46604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46604[(0)] = cljs$core$async$mult_$_state_machine__45721__auto__);

(statearr_46604[(1)] = (1));

return statearr_46604;
});
var cljs$core$async$mult_$_state_machine__45721__auto____1 = (function (state_46513){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_46513);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e46605){var ex__45724__auto__ = e46605;
var statearr_46606_47874 = state_46513;
(statearr_46606_47874[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_46513[(4)]))){
var statearr_46607_47875 = state_46513;
(statearr_46607_47875[(1)] = cljs.core.first((state_46513[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47881 = state_46513;
state_46513 = G__47881;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45721__auto__ = function(state_46513){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45721__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45721__auto____1.call(this,state_46513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45721__auto____0;
cljs$core$async$mult_$_state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45721__auto____1;
return cljs$core$async$mult_$_state_machine__45721__auto__;
})()
})();
var state__45796__auto__ = (function (){var statearr_46608 = f__45795__auto__();
(statearr_46608[(6)] = c__45794__auto___47812);

return statearr_46608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46611 = arguments.length;
switch (G__46611) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_47891 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_47891(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47893 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_47893(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47895 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47895(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47901 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_47901(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47902 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47902(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47904 = arguments.length;
var i__4865__auto___47905 = (0);
while(true){
if((i__4865__auto___47905 < len__4864__auto___47904)){
args__4870__auto__.push((arguments[i__4865__auto___47905]));

var G__47906 = (i__4865__auto___47905 + (1));
i__4865__auto___47905 = G__47906;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46617){
var map__46618 = p__46617;
var map__46618__$1 = cljs.core.__destructure_map(map__46618);
var opts = map__46618__$1;
var statearr_46619_47907 = state;
(statearr_46619_47907[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46621_47908 = state;
(statearr_46621_47908[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_46622_47909 = state;
(statearr_46622_47909[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46613){
var G__46614 = cljs.core.first(seq46613);
var seq46613__$1 = cljs.core.next(seq46613);
var G__46615 = cljs.core.first(seq46613__$1);
var seq46613__$2 = cljs.core.next(seq46613__$1);
var G__46616 = cljs.core.first(seq46613__$2);
var seq46613__$3 = cljs.core.next(seq46613__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46614,G__46615,G__46616,seq46613__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46626 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46626 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46627){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46627 = meta46627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46628,meta46627__$1){
var self__ = this;
var _46628__$1 = this;
return (new cljs.core.async.t_cljs$core$async46626(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46627__$1));
}));

(cljs.core.async.t_cljs$core$async46626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46628){
var self__ = this;
var _46628__$1 = this;
return self__.meta46627;
}));

(cljs.core.async.t_cljs$core$async46626.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46626.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async46626.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46626.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46626.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46626.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46626.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46626.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46627","meta46627",946656804,null)], null);
}));

(cljs.core.async.t_cljs$core$async46626.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46626");

(cljs.core.async.t_cljs$core$async46626.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46626");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46626.
 */
cljs.core.async.__GT_t_cljs$core$async46626 = (function cljs$core$async$mix_$___GT_t_cljs$core$async46626(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46627){
return (new cljs.core.async.t_cljs$core$async46626(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46627));
});

}

return (new cljs.core.async.t_cljs$core$async46626(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45794__auto___47914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = (function (state_46702){
var state_val_46703 = (state_46702[(1)]);
if((state_val_46703 === (7))){
var inst_46662 = (state_46702[(2)]);
var state_46702__$1 = state_46702;
if(cljs.core.truth_(inst_46662)){
var statearr_46704_47915 = state_46702__$1;
(statearr_46704_47915[(1)] = (8));

} else {
var statearr_46705_47916 = state_46702__$1;
(statearr_46705_47916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (20))){
var inst_46655 = (state_46702[(7)]);
var state_46702__$1 = state_46702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46702__$1,(23),out,inst_46655);
} else {
if((state_val_46703 === (1))){
var inst_46638 = calc_state();
var inst_46639 = cljs.core.__destructure_map(inst_46638);
var inst_46640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46639,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46639,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46639,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46643 = inst_46638;
var state_46702__$1 = (function (){var statearr_46706 = state_46702;
(statearr_46706[(8)] = inst_46640);

(statearr_46706[(9)] = inst_46643);

(statearr_46706[(10)] = inst_46641);

(statearr_46706[(11)] = inst_46642);

return statearr_46706;
})();
var statearr_46707_47921 = state_46702__$1;
(statearr_46707_47921[(2)] = null);

(statearr_46707_47921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (24))){
var inst_46646 = (state_46702[(12)]);
var inst_46643 = inst_46646;
var state_46702__$1 = (function (){var statearr_46708 = state_46702;
(statearr_46708[(9)] = inst_46643);

return statearr_46708;
})();
var statearr_46709_47922 = state_46702__$1;
(statearr_46709_47922[(2)] = null);

(statearr_46709_47922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (4))){
var inst_46655 = (state_46702[(7)]);
var inst_46657 = (state_46702[(13)]);
var inst_46654 = (state_46702[(2)]);
var inst_46655__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46654,(0),null);
var inst_46656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46654,(1),null);
var inst_46657__$1 = (inst_46655__$1 == null);
var state_46702__$1 = (function (){var statearr_46710 = state_46702;
(statearr_46710[(14)] = inst_46656);

(statearr_46710[(7)] = inst_46655__$1);

(statearr_46710[(13)] = inst_46657__$1);

return statearr_46710;
})();
if(cljs.core.truth_(inst_46657__$1)){
var statearr_46711_47923 = state_46702__$1;
(statearr_46711_47923[(1)] = (5));

} else {
var statearr_46712_47924 = state_46702__$1;
(statearr_46712_47924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (15))){
var inst_46676 = (state_46702[(15)]);
var inst_46647 = (state_46702[(16)]);
var inst_46676__$1 = cljs.core.empty_QMARK_(inst_46647);
var state_46702__$1 = (function (){var statearr_46713 = state_46702;
(statearr_46713[(15)] = inst_46676__$1);

return statearr_46713;
})();
if(inst_46676__$1){
var statearr_46714_47925 = state_46702__$1;
(statearr_46714_47925[(1)] = (17));

} else {
var statearr_46715_47926 = state_46702__$1;
(statearr_46715_47926[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (21))){
var inst_46646 = (state_46702[(12)]);
var inst_46643 = inst_46646;
var state_46702__$1 = (function (){var statearr_46716 = state_46702;
(statearr_46716[(9)] = inst_46643);

return statearr_46716;
})();
var statearr_46717_47927 = state_46702__$1;
(statearr_46717_47927[(2)] = null);

(statearr_46717_47927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (13))){
var inst_46669 = (state_46702[(2)]);
var inst_46670 = calc_state();
var inst_46643 = inst_46670;
var state_46702__$1 = (function (){var statearr_46718 = state_46702;
(statearr_46718[(17)] = inst_46669);

(statearr_46718[(9)] = inst_46643);

return statearr_46718;
})();
var statearr_46719_47928 = state_46702__$1;
(statearr_46719_47928[(2)] = null);

(statearr_46719_47928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (22))){
var inst_46696 = (state_46702[(2)]);
var state_46702__$1 = state_46702;
var statearr_46720_47929 = state_46702__$1;
(statearr_46720_47929[(2)] = inst_46696);

(statearr_46720_47929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (6))){
var inst_46656 = (state_46702[(14)]);
var inst_46660 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46656,change);
var state_46702__$1 = state_46702;
var statearr_46721_47930 = state_46702__$1;
(statearr_46721_47930[(2)] = inst_46660);

(statearr_46721_47930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (25))){
var state_46702__$1 = state_46702;
var statearr_46722_47931 = state_46702__$1;
(statearr_46722_47931[(2)] = null);

(statearr_46722_47931[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (17))){
var inst_46656 = (state_46702[(14)]);
var inst_46648 = (state_46702[(18)]);
var inst_46678 = (inst_46648.cljs$core$IFn$_invoke$arity$1 ? inst_46648.cljs$core$IFn$_invoke$arity$1(inst_46656) : inst_46648.call(null,inst_46656));
var inst_46679 = cljs.core.not(inst_46678);
var state_46702__$1 = state_46702;
var statearr_46723_47932 = state_46702__$1;
(statearr_46723_47932[(2)] = inst_46679);

(statearr_46723_47932[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (3))){
var inst_46700 = (state_46702[(2)]);
var state_46702__$1 = state_46702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46702__$1,inst_46700);
} else {
if((state_val_46703 === (12))){
var state_46702__$1 = state_46702;
var statearr_46724_47933 = state_46702__$1;
(statearr_46724_47933[(2)] = null);

(statearr_46724_47933[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (2))){
var inst_46643 = (state_46702[(9)]);
var inst_46646 = (state_46702[(12)]);
var inst_46646__$1 = cljs.core.__destructure_map(inst_46643);
var inst_46647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46646__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46646__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46646__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46702__$1 = (function (){var statearr_46725 = state_46702;
(statearr_46725[(18)] = inst_46648);

(statearr_46725[(16)] = inst_46647);

(statearr_46725[(12)] = inst_46646__$1);

return statearr_46725;
})();
return cljs.core.async.ioc_alts_BANG_(state_46702__$1,(4),inst_46649);
} else {
if((state_val_46703 === (23))){
var inst_46687 = (state_46702[(2)]);
var state_46702__$1 = state_46702;
if(cljs.core.truth_(inst_46687)){
var statearr_46726_47934 = state_46702__$1;
(statearr_46726_47934[(1)] = (24));

} else {
var statearr_46727_47935 = state_46702__$1;
(statearr_46727_47935[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (19))){
var inst_46682 = (state_46702[(2)]);
var state_46702__$1 = state_46702;
var statearr_46728_47936 = state_46702__$1;
(statearr_46728_47936[(2)] = inst_46682);

(statearr_46728_47936[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (11))){
var inst_46656 = (state_46702[(14)]);
var inst_46666 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46656);
var state_46702__$1 = state_46702;
var statearr_46729_47937 = state_46702__$1;
(statearr_46729_47937[(2)] = inst_46666);

(statearr_46729_47937[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (9))){
var inst_46656 = (state_46702[(14)]);
var inst_46673 = (state_46702[(19)]);
var inst_46647 = (state_46702[(16)]);
var inst_46673__$1 = (inst_46647.cljs$core$IFn$_invoke$arity$1 ? inst_46647.cljs$core$IFn$_invoke$arity$1(inst_46656) : inst_46647.call(null,inst_46656));
var state_46702__$1 = (function (){var statearr_46730 = state_46702;
(statearr_46730[(19)] = inst_46673__$1);

return statearr_46730;
})();
if(cljs.core.truth_(inst_46673__$1)){
var statearr_46731_47938 = state_46702__$1;
(statearr_46731_47938[(1)] = (14));

} else {
var statearr_46732_47939 = state_46702__$1;
(statearr_46732_47939[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (5))){
var inst_46657 = (state_46702[(13)]);
var state_46702__$1 = state_46702;
var statearr_46733_47940 = state_46702__$1;
(statearr_46733_47940[(2)] = inst_46657);

(statearr_46733_47940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (14))){
var inst_46673 = (state_46702[(19)]);
var state_46702__$1 = state_46702;
var statearr_46734_47941 = state_46702__$1;
(statearr_46734_47941[(2)] = inst_46673);

(statearr_46734_47941[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (26))){
var inst_46692 = (state_46702[(2)]);
var state_46702__$1 = state_46702;
var statearr_46735_47942 = state_46702__$1;
(statearr_46735_47942[(2)] = inst_46692);

(statearr_46735_47942[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (16))){
var inst_46684 = (state_46702[(2)]);
var state_46702__$1 = state_46702;
if(cljs.core.truth_(inst_46684)){
var statearr_46736_47943 = state_46702__$1;
(statearr_46736_47943[(1)] = (20));

} else {
var statearr_46737_47944 = state_46702__$1;
(statearr_46737_47944[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (10))){
var inst_46698 = (state_46702[(2)]);
var state_46702__$1 = state_46702;
var statearr_46738_47945 = state_46702__$1;
(statearr_46738_47945[(2)] = inst_46698);

(statearr_46738_47945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (18))){
var inst_46676 = (state_46702[(15)]);
var state_46702__$1 = state_46702;
var statearr_46739_47946 = state_46702__$1;
(statearr_46739_47946[(2)] = inst_46676);

(statearr_46739_47946[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46703 === (8))){
var inst_46655 = (state_46702[(7)]);
var inst_46664 = (inst_46655 == null);
var state_46702__$1 = state_46702;
if(cljs.core.truth_(inst_46664)){
var statearr_46740_47947 = state_46702__$1;
(statearr_46740_47947[(1)] = (11));

} else {
var statearr_46741_47948 = state_46702__$1;
(statearr_46741_47948[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__45721__auto__ = null;
var cljs$core$async$mix_$_state_machine__45721__auto____0 = (function (){
var statearr_46742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46742[(0)] = cljs$core$async$mix_$_state_machine__45721__auto__);

(statearr_46742[(1)] = (1));

return statearr_46742;
});
var cljs$core$async$mix_$_state_machine__45721__auto____1 = (function (state_46702){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_46702);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e46743){var ex__45724__auto__ = e46743;
var statearr_46744_47949 = state_46702;
(statearr_46744_47949[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_46702[(4)]))){
var statearr_46745_47950 = state_46702;
(statearr_46745_47950[(1)] = cljs.core.first((state_46702[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47951 = state_46702;
state_46702 = G__47951;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45721__auto__ = function(state_46702){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45721__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45721__auto____1.call(this,state_46702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45721__auto____0;
cljs$core$async$mix_$_state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45721__auto____1;
return cljs$core$async$mix_$_state_machine__45721__auto__;
})()
})();
var state__45796__auto__ = (function (){var statearr_46746 = f__45795__auto__();
(statearr_46746[(6)] = c__45794__auto___47914);

return statearr_46746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_47952 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_47952(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47953 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_47953(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47954 = (function() {
var G__47955 = null;
var G__47955__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__47955__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__47955 = function(p,v){
switch(arguments.length){
case 1:
return G__47955__1.call(this,p);
case 2:
return G__47955__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47955.cljs$core$IFn$_invoke$arity$1 = G__47955__1;
G__47955.cljs$core$IFn$_invoke$arity$2 = G__47955__2;
return G__47955;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46762 = arguments.length;
switch (G__46762) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47954(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47954(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__46767 = arguments.length;
switch (G__46767) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46765_SHARP_){
if(cljs.core.truth_((p1__46765_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46765_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46765_SHARP_.call(null,topic)))){
return p1__46765_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46765_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46768 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46768 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46769){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46769 = meta46769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46770,meta46769__$1){
var self__ = this;
var _46770__$1 = this;
return (new cljs.core.async.t_cljs$core$async46768(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46769__$1));
}));

(cljs.core.async.t_cljs$core$async46768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46770){
var self__ = this;
var _46770__$1 = this;
return self__.meta46769;
}));

(cljs.core.async.t_cljs$core$async46768.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46768.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46768.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46768.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46768.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async46768.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46768.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46769","meta46769",-9165949,null)], null);
}));

(cljs.core.async.t_cljs$core$async46768.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46768");

(cljs.core.async.t_cljs$core$async46768.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46768");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46768.
 */
cljs.core.async.__GT_t_cljs$core$async46768 = (function cljs$core$async$__GT_t_cljs$core$async46768(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46769){
return (new cljs.core.async.t_cljs$core$async46768(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46769));
});

}

return (new cljs.core.async.t_cljs$core$async46768(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45794__auto___47964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = (function (state_46861){
var state_val_46862 = (state_46861[(1)]);
if((state_val_46862 === (7))){
var inst_46857 = (state_46861[(2)]);
var state_46861__$1 = state_46861;
var statearr_46863_47965 = state_46861__$1;
(statearr_46863_47965[(2)] = inst_46857);

(statearr_46863_47965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (20))){
var state_46861__$1 = state_46861;
var statearr_46864_47968 = state_46861__$1;
(statearr_46864_47968[(2)] = null);

(statearr_46864_47968[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (1))){
var state_46861__$1 = state_46861;
var statearr_46865_47976 = state_46861__$1;
(statearr_46865_47976[(2)] = null);

(statearr_46865_47976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (24))){
var inst_46840 = (state_46861[(7)]);
var inst_46849 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46840);
var state_46861__$1 = state_46861;
var statearr_46866_47978 = state_46861__$1;
(statearr_46866_47978[(2)] = inst_46849);

(statearr_46866_47978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (4))){
var inst_46776 = (state_46861[(8)]);
var inst_46776__$1 = (state_46861[(2)]);
var inst_46793 = (inst_46776__$1 == null);
var state_46861__$1 = (function (){var statearr_46868 = state_46861;
(statearr_46868[(8)] = inst_46776__$1);

return statearr_46868;
})();
if(cljs.core.truth_(inst_46793)){
var statearr_46869_47979 = state_46861__$1;
(statearr_46869_47979[(1)] = (5));

} else {
var statearr_46870_47980 = state_46861__$1;
(statearr_46870_47980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (15))){
var inst_46834 = (state_46861[(2)]);
var state_46861__$1 = state_46861;
var statearr_46871_47981 = state_46861__$1;
(statearr_46871_47981[(2)] = inst_46834);

(statearr_46871_47981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (21))){
var inst_46854 = (state_46861[(2)]);
var state_46861__$1 = (function (){var statearr_46872 = state_46861;
(statearr_46872[(9)] = inst_46854);

return statearr_46872;
})();
var statearr_46873_47984 = state_46861__$1;
(statearr_46873_47984[(2)] = null);

(statearr_46873_47984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (13))){
var inst_46816 = (state_46861[(10)]);
var inst_46818 = cljs.core.chunked_seq_QMARK_(inst_46816);
var state_46861__$1 = state_46861;
if(inst_46818){
var statearr_46874_47987 = state_46861__$1;
(statearr_46874_47987[(1)] = (16));

} else {
var statearr_46875_47990 = state_46861__$1;
(statearr_46875_47990[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (22))){
var inst_46846 = (state_46861[(2)]);
var state_46861__$1 = state_46861;
if(cljs.core.truth_(inst_46846)){
var statearr_46876_47991 = state_46861__$1;
(statearr_46876_47991[(1)] = (23));

} else {
var statearr_46877_47992 = state_46861__$1;
(statearr_46877_47992[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (6))){
var inst_46776 = (state_46861[(8)]);
var inst_46842 = (state_46861[(11)]);
var inst_46840 = (state_46861[(7)]);
var inst_46840__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46776) : topic_fn.call(null,inst_46776));
var inst_46841 = cljs.core.deref(mults);
var inst_46842__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46841,inst_46840__$1);
var state_46861__$1 = (function (){var statearr_46879 = state_46861;
(statearr_46879[(11)] = inst_46842__$1);

(statearr_46879[(7)] = inst_46840__$1);

return statearr_46879;
})();
if(cljs.core.truth_(inst_46842__$1)){
var statearr_46880_47993 = state_46861__$1;
(statearr_46880_47993[(1)] = (19));

} else {
var statearr_46882_47997 = state_46861__$1;
(statearr_46882_47997[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (25))){
var inst_46851 = (state_46861[(2)]);
var state_46861__$1 = state_46861;
var statearr_46883_47999 = state_46861__$1;
(statearr_46883_47999[(2)] = inst_46851);

(statearr_46883_47999[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (17))){
var inst_46816 = (state_46861[(10)]);
var inst_46825 = cljs.core.first(inst_46816);
var inst_46826 = cljs.core.async.muxch_STAR_(inst_46825);
var inst_46827 = cljs.core.async.close_BANG_(inst_46826);
var inst_46828 = cljs.core.next(inst_46816);
var inst_46802 = inst_46828;
var inst_46803 = null;
var inst_46804 = (0);
var inst_46805 = (0);
var state_46861__$1 = (function (){var statearr_46885 = state_46861;
(statearr_46885[(12)] = inst_46827);

(statearr_46885[(13)] = inst_46802);

(statearr_46885[(14)] = inst_46805);

(statearr_46885[(15)] = inst_46803);

(statearr_46885[(16)] = inst_46804);

return statearr_46885;
})();
var statearr_46887_48009 = state_46861__$1;
(statearr_46887_48009[(2)] = null);

(statearr_46887_48009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (3))){
var inst_46859 = (state_46861[(2)]);
var state_46861__$1 = state_46861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46861__$1,inst_46859);
} else {
if((state_val_46862 === (12))){
var inst_46836 = (state_46861[(2)]);
var state_46861__$1 = state_46861;
var statearr_46888_48013 = state_46861__$1;
(statearr_46888_48013[(2)] = inst_46836);

(statearr_46888_48013[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (2))){
var state_46861__$1 = state_46861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46861__$1,(4),ch);
} else {
if((state_val_46862 === (23))){
var state_46861__$1 = state_46861;
var statearr_46889_48014 = state_46861__$1;
(statearr_46889_48014[(2)] = null);

(statearr_46889_48014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (19))){
var inst_46776 = (state_46861[(8)]);
var inst_46842 = (state_46861[(11)]);
var inst_46844 = cljs.core.async.muxch_STAR_(inst_46842);
var state_46861__$1 = state_46861;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46861__$1,(22),inst_46844,inst_46776);
} else {
if((state_val_46862 === (11))){
var inst_46816 = (state_46861[(10)]);
var inst_46802 = (state_46861[(13)]);
var inst_46816__$1 = cljs.core.seq(inst_46802);
var state_46861__$1 = (function (){var statearr_46892 = state_46861;
(statearr_46892[(10)] = inst_46816__$1);

return statearr_46892;
})();
if(inst_46816__$1){
var statearr_46893_48042 = state_46861__$1;
(statearr_46893_48042[(1)] = (13));

} else {
var statearr_46894_48043 = state_46861__$1;
(statearr_46894_48043[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (9))){
var inst_46838 = (state_46861[(2)]);
var state_46861__$1 = state_46861;
var statearr_46895_48044 = state_46861__$1;
(statearr_46895_48044[(2)] = inst_46838);

(statearr_46895_48044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (5))){
var inst_46799 = cljs.core.deref(mults);
var inst_46800 = cljs.core.vals(inst_46799);
var inst_46801 = cljs.core.seq(inst_46800);
var inst_46802 = inst_46801;
var inst_46803 = null;
var inst_46804 = (0);
var inst_46805 = (0);
var state_46861__$1 = (function (){var statearr_46899 = state_46861;
(statearr_46899[(13)] = inst_46802);

(statearr_46899[(14)] = inst_46805);

(statearr_46899[(15)] = inst_46803);

(statearr_46899[(16)] = inst_46804);

return statearr_46899;
})();
var statearr_46900_48045 = state_46861__$1;
(statearr_46900_48045[(2)] = null);

(statearr_46900_48045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (14))){
var state_46861__$1 = state_46861;
var statearr_46904_48046 = state_46861__$1;
(statearr_46904_48046[(2)] = null);

(statearr_46904_48046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (16))){
var inst_46816 = (state_46861[(10)]);
var inst_46820 = cljs.core.chunk_first(inst_46816);
var inst_46821 = cljs.core.chunk_rest(inst_46816);
var inst_46822 = cljs.core.count(inst_46820);
var inst_46802 = inst_46821;
var inst_46803 = inst_46820;
var inst_46804 = inst_46822;
var inst_46805 = (0);
var state_46861__$1 = (function (){var statearr_46905 = state_46861;
(statearr_46905[(13)] = inst_46802);

(statearr_46905[(14)] = inst_46805);

(statearr_46905[(15)] = inst_46803);

(statearr_46905[(16)] = inst_46804);

return statearr_46905;
})();
var statearr_46906_48047 = state_46861__$1;
(statearr_46906_48047[(2)] = null);

(statearr_46906_48047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (10))){
var inst_46802 = (state_46861[(13)]);
var inst_46805 = (state_46861[(14)]);
var inst_46803 = (state_46861[(15)]);
var inst_46804 = (state_46861[(16)]);
var inst_46810 = cljs.core._nth(inst_46803,inst_46805);
var inst_46811 = cljs.core.async.muxch_STAR_(inst_46810);
var inst_46812 = cljs.core.async.close_BANG_(inst_46811);
var inst_46813 = (inst_46805 + (1));
var tmp46901 = inst_46802;
var tmp46902 = inst_46803;
var tmp46903 = inst_46804;
var inst_46802__$1 = tmp46901;
var inst_46803__$1 = tmp46902;
var inst_46804__$1 = tmp46903;
var inst_46805__$1 = inst_46813;
var state_46861__$1 = (function (){var statearr_46907 = state_46861;
(statearr_46907[(13)] = inst_46802__$1);

(statearr_46907[(14)] = inst_46805__$1);

(statearr_46907[(15)] = inst_46803__$1);

(statearr_46907[(17)] = inst_46812);

(statearr_46907[(16)] = inst_46804__$1);

return statearr_46907;
})();
var statearr_46908_48049 = state_46861__$1;
(statearr_46908_48049[(2)] = null);

(statearr_46908_48049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (18))){
var inst_46831 = (state_46861[(2)]);
var state_46861__$1 = state_46861;
var statearr_46909_48050 = state_46861__$1;
(statearr_46909_48050[(2)] = inst_46831);

(statearr_46909_48050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (8))){
var inst_46805 = (state_46861[(14)]);
var inst_46804 = (state_46861[(16)]);
var inst_46807 = (inst_46805 < inst_46804);
var inst_46808 = inst_46807;
var state_46861__$1 = state_46861;
if(cljs.core.truth_(inst_46808)){
var statearr_46910_48052 = state_46861__$1;
(statearr_46910_48052[(1)] = (10));

} else {
var statearr_46912_48054 = state_46861__$1;
(statearr_46912_48054[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45721__auto__ = null;
var cljs$core$async$state_machine__45721__auto____0 = (function (){
var statearr_46914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46914[(0)] = cljs$core$async$state_machine__45721__auto__);

(statearr_46914[(1)] = (1));

return statearr_46914;
});
var cljs$core$async$state_machine__45721__auto____1 = (function (state_46861){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_46861);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e46915){var ex__45724__auto__ = e46915;
var statearr_46916_48055 = state_46861;
(statearr_46916_48055[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_46861[(4)]))){
var statearr_46917_48056 = state_46861;
(statearr_46917_48056[(1)] = cljs.core.first((state_46861[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48059 = state_46861;
state_46861 = G__48059;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
cljs$core$async$state_machine__45721__auto__ = function(state_46861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45721__auto____1.call(this,state_46861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45721__auto____0;
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45721__auto____1;
return cljs$core$async$state_machine__45721__auto__;
})()
})();
var state__45796__auto__ = (function (){var statearr_46920 = f__45795__auto__();
(statearr_46920[(6)] = c__45794__auto___47964);

return statearr_46920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__46922 = arguments.length;
switch (G__46922) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__46927 = arguments.length;
switch (G__46927) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__46931 = arguments.length;
switch (G__46931) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__45794__auto___48073 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = (function (state_46983){
var state_val_46984 = (state_46983[(1)]);
if((state_val_46984 === (7))){
var state_46983__$1 = state_46983;
var statearr_46985_48076 = state_46983__$1;
(statearr_46985_48076[(2)] = null);

(statearr_46985_48076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (1))){
var state_46983__$1 = state_46983;
var statearr_46986_48077 = state_46983__$1;
(statearr_46986_48077[(2)] = null);

(statearr_46986_48077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (4))){
var inst_46937 = (state_46983[(7)]);
var inst_46942 = (state_46983[(8)]);
var inst_46944 = (inst_46942 < inst_46937);
var state_46983__$1 = state_46983;
if(cljs.core.truth_(inst_46944)){
var statearr_46987_48079 = state_46983__$1;
(statearr_46987_48079[(1)] = (6));

} else {
var statearr_46988_48080 = state_46983__$1;
(statearr_46988_48080[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (15))){
var inst_46969 = (state_46983[(9)]);
var inst_46974 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46969);
var state_46983__$1 = state_46983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46983__$1,(17),out,inst_46974);
} else {
if((state_val_46984 === (13))){
var inst_46969 = (state_46983[(9)]);
var inst_46969__$1 = (state_46983[(2)]);
var inst_46970 = cljs.core.some(cljs.core.nil_QMARK_,inst_46969__$1);
var state_46983__$1 = (function (){var statearr_46989 = state_46983;
(statearr_46989[(9)] = inst_46969__$1);

return statearr_46989;
})();
if(cljs.core.truth_(inst_46970)){
var statearr_46990_48083 = state_46983__$1;
(statearr_46990_48083[(1)] = (14));

} else {
var statearr_46991_48084 = state_46983__$1;
(statearr_46991_48084[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (6))){
var state_46983__$1 = state_46983;
var statearr_46992_48085 = state_46983__$1;
(statearr_46992_48085[(2)] = null);

(statearr_46992_48085[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (17))){
var inst_46976 = (state_46983[(2)]);
var state_46983__$1 = (function (){var statearr_46994 = state_46983;
(statearr_46994[(10)] = inst_46976);

return statearr_46994;
})();
var statearr_46995_48088 = state_46983__$1;
(statearr_46995_48088[(2)] = null);

(statearr_46995_48088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (3))){
var inst_46981 = (state_46983[(2)]);
var state_46983__$1 = state_46983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46983__$1,inst_46981);
} else {
if((state_val_46984 === (12))){
var _ = (function (){var statearr_46996 = state_46983;
(statearr_46996[(4)] = cljs.core.rest((state_46983[(4)])));

return statearr_46996;
})();
var state_46983__$1 = state_46983;
var ex46993 = (state_46983__$1[(2)]);
var statearr_46997_48090 = state_46983__$1;
(statearr_46997_48090[(5)] = ex46993);


if((ex46993 instanceof Object)){
var statearr_46998_48091 = state_46983__$1;
(statearr_46998_48091[(1)] = (11));

(statearr_46998_48091[(5)] = null);

} else {
throw ex46993;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (2))){
var inst_46936 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46937 = cnt;
var inst_46942 = (0);
var state_46983__$1 = (function (){var statearr_47000 = state_46983;
(statearr_47000[(7)] = inst_46937);

(statearr_47000[(8)] = inst_46942);

(statearr_47000[(11)] = inst_46936);

return statearr_47000;
})();
var statearr_47001_48093 = state_46983__$1;
(statearr_47001_48093[(2)] = null);

(statearr_47001_48093[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (11))){
var inst_46948 = (state_46983[(2)]);
var inst_46949 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46983__$1 = (function (){var statearr_47002 = state_46983;
(statearr_47002[(12)] = inst_46948);

return statearr_47002;
})();
var statearr_47003_48095 = state_46983__$1;
(statearr_47003_48095[(2)] = inst_46949);

(statearr_47003_48095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (9))){
var inst_46942 = (state_46983[(8)]);
var _ = (function (){var statearr_47006 = state_46983;
(statearr_47006[(4)] = cljs.core.cons((12),(state_46983[(4)])));

return statearr_47006;
})();
var inst_46955 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46942) : chs__$1.call(null,inst_46942));
var inst_46956 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46942) : done.call(null,inst_46942));
var inst_46957 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46955,inst_46956);
var ___$1 = (function (){var statearr_47007 = state_46983;
(statearr_47007[(4)] = cljs.core.rest((state_46983[(4)])));

return statearr_47007;
})();
var state_46983__$1 = state_46983;
var statearr_47008_48096 = state_46983__$1;
(statearr_47008_48096[(2)] = inst_46957);

(statearr_47008_48096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (5))){
var inst_46967 = (state_46983[(2)]);
var state_46983__$1 = (function (){var statearr_47009 = state_46983;
(statearr_47009[(13)] = inst_46967);

return statearr_47009;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46983__$1,(13),dchan);
} else {
if((state_val_46984 === (14))){
var inst_46972 = cljs.core.async.close_BANG_(out);
var state_46983__$1 = state_46983;
var statearr_47011_48098 = state_46983__$1;
(statearr_47011_48098[(2)] = inst_46972);

(statearr_47011_48098[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (16))){
var inst_46979 = (state_46983[(2)]);
var state_46983__$1 = state_46983;
var statearr_47012_48100 = state_46983__$1;
(statearr_47012_48100[(2)] = inst_46979);

(statearr_47012_48100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (10))){
var inst_46942 = (state_46983[(8)]);
var inst_46960 = (state_46983[(2)]);
var inst_46961 = (inst_46942 + (1));
var inst_46942__$1 = inst_46961;
var state_46983__$1 = (function (){var statearr_47014 = state_46983;
(statearr_47014[(14)] = inst_46960);

(statearr_47014[(8)] = inst_46942__$1);

return statearr_47014;
})();
var statearr_47016_48102 = state_46983__$1;
(statearr_47016_48102[(2)] = null);

(statearr_47016_48102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46984 === (8))){
var inst_46965 = (state_46983[(2)]);
var state_46983__$1 = state_46983;
var statearr_47017_48103 = state_46983__$1;
(statearr_47017_48103[(2)] = inst_46965);

(statearr_47017_48103[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45721__auto__ = null;
var cljs$core$async$state_machine__45721__auto____0 = (function (){
var statearr_47018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47018[(0)] = cljs$core$async$state_machine__45721__auto__);

(statearr_47018[(1)] = (1));

return statearr_47018;
});
var cljs$core$async$state_machine__45721__auto____1 = (function (state_46983){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_46983);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e47019){var ex__45724__auto__ = e47019;
var statearr_47020_48106 = state_46983;
(statearr_47020_48106[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_46983[(4)]))){
var statearr_47021_48108 = state_46983;
(statearr_47021_48108[(1)] = cljs.core.first((state_46983[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48109 = state_46983;
state_46983 = G__48109;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
cljs$core$async$state_machine__45721__auto__ = function(state_46983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45721__auto____1.call(this,state_46983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45721__auto____0;
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45721__auto____1;
return cljs$core$async$state_machine__45721__auto__;
})()
})();
var state__45796__auto__ = (function (){var statearr_47022 = f__45795__auto__();
(statearr_47022[(6)] = c__45794__auto___48073);

return statearr_47022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__47025 = arguments.length;
switch (G__47025) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45794__auto___48112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = (function (state_47060){
var state_val_47061 = (state_47060[(1)]);
if((state_val_47061 === (7))){
var inst_47037 = (state_47060[(7)]);
var inst_47036 = (state_47060[(8)]);
var inst_47036__$1 = (state_47060[(2)]);
var inst_47037__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47036__$1,(0),null);
var inst_47038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47036__$1,(1),null);
var inst_47039 = (inst_47037__$1 == null);
var state_47060__$1 = (function (){var statearr_47062 = state_47060;
(statearr_47062[(9)] = inst_47038);

(statearr_47062[(7)] = inst_47037__$1);

(statearr_47062[(8)] = inst_47036__$1);

return statearr_47062;
})();
if(cljs.core.truth_(inst_47039)){
var statearr_47063_48116 = state_47060__$1;
(statearr_47063_48116[(1)] = (8));

} else {
var statearr_47064_48117 = state_47060__$1;
(statearr_47064_48117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (1))){
var inst_47026 = cljs.core.vec(chs);
var inst_47027 = inst_47026;
var state_47060__$1 = (function (){var statearr_47065 = state_47060;
(statearr_47065[(10)] = inst_47027);

return statearr_47065;
})();
var statearr_47066_48120 = state_47060__$1;
(statearr_47066_48120[(2)] = null);

(statearr_47066_48120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (4))){
var inst_47027 = (state_47060[(10)]);
var state_47060__$1 = state_47060;
return cljs.core.async.ioc_alts_BANG_(state_47060__$1,(7),inst_47027);
} else {
if((state_val_47061 === (6))){
var inst_47056 = (state_47060[(2)]);
var state_47060__$1 = state_47060;
var statearr_47067_48121 = state_47060__$1;
(statearr_47067_48121[(2)] = inst_47056);

(statearr_47067_48121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (3))){
var inst_47058 = (state_47060[(2)]);
var state_47060__$1 = state_47060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47060__$1,inst_47058);
} else {
if((state_val_47061 === (2))){
var inst_47027 = (state_47060[(10)]);
var inst_47029 = cljs.core.count(inst_47027);
var inst_47030 = (inst_47029 > (0));
var state_47060__$1 = state_47060;
if(cljs.core.truth_(inst_47030)){
var statearr_47069_48123 = state_47060__$1;
(statearr_47069_48123[(1)] = (4));

} else {
var statearr_47070_48124 = state_47060__$1;
(statearr_47070_48124[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (11))){
var inst_47027 = (state_47060[(10)]);
var inst_47049 = (state_47060[(2)]);
var tmp47068 = inst_47027;
var inst_47027__$1 = tmp47068;
var state_47060__$1 = (function (){var statearr_47071 = state_47060;
(statearr_47071[(11)] = inst_47049);

(statearr_47071[(10)] = inst_47027__$1);

return statearr_47071;
})();
var statearr_47072_48125 = state_47060__$1;
(statearr_47072_48125[(2)] = null);

(statearr_47072_48125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (9))){
var inst_47037 = (state_47060[(7)]);
var state_47060__$1 = state_47060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47060__$1,(11),out,inst_47037);
} else {
if((state_val_47061 === (5))){
var inst_47054 = cljs.core.async.close_BANG_(out);
var state_47060__$1 = state_47060;
var statearr_47075_48126 = state_47060__$1;
(statearr_47075_48126[(2)] = inst_47054);

(statearr_47075_48126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (10))){
var inst_47052 = (state_47060[(2)]);
var state_47060__$1 = state_47060;
var statearr_47076_48127 = state_47060__$1;
(statearr_47076_48127[(2)] = inst_47052);

(statearr_47076_48127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47061 === (8))){
var inst_47038 = (state_47060[(9)]);
var inst_47037 = (state_47060[(7)]);
var inst_47036 = (state_47060[(8)]);
var inst_47027 = (state_47060[(10)]);
var inst_47044 = (function (){var cs = inst_47027;
var vec__47032 = inst_47036;
var v = inst_47037;
var c = inst_47038;
return (function (p1__47023_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47023_SHARP_);
});
})();
var inst_47045 = cljs.core.filterv(inst_47044,inst_47027);
var inst_47027__$1 = inst_47045;
var state_47060__$1 = (function (){var statearr_47077 = state_47060;
(statearr_47077[(10)] = inst_47027__$1);

return statearr_47077;
})();
var statearr_47078_48128 = state_47060__$1;
(statearr_47078_48128[(2)] = null);

(statearr_47078_48128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45721__auto__ = null;
var cljs$core$async$state_machine__45721__auto____0 = (function (){
var statearr_47083 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47083[(0)] = cljs$core$async$state_machine__45721__auto__);

(statearr_47083[(1)] = (1));

return statearr_47083;
});
var cljs$core$async$state_machine__45721__auto____1 = (function (state_47060){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_47060);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e47084){var ex__45724__auto__ = e47084;
var statearr_47085_48129 = state_47060;
(statearr_47085_48129[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_47060[(4)]))){
var statearr_47086_48130 = state_47060;
(statearr_47086_48130[(1)] = cljs.core.first((state_47060[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48131 = state_47060;
state_47060 = G__48131;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
cljs$core$async$state_machine__45721__auto__ = function(state_47060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45721__auto____1.call(this,state_47060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45721__auto____0;
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45721__auto____1;
return cljs$core$async$state_machine__45721__auto__;
})()
})();
var state__45796__auto__ = (function (){var statearr_47087 = f__45795__auto__();
(statearr_47087[(6)] = c__45794__auto___48112);

return statearr_47087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__47089 = arguments.length;
switch (G__47089) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45794__auto___48133 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = (function (state_47114){
var state_val_47115 = (state_47114[(1)]);
if((state_val_47115 === (7))){
var inst_47096 = (state_47114[(7)]);
var inst_47096__$1 = (state_47114[(2)]);
var inst_47097 = (inst_47096__$1 == null);
var inst_47098 = cljs.core.not(inst_47097);
var state_47114__$1 = (function (){var statearr_47116 = state_47114;
(statearr_47116[(7)] = inst_47096__$1);

return statearr_47116;
})();
if(inst_47098){
var statearr_47117_48134 = state_47114__$1;
(statearr_47117_48134[(1)] = (8));

} else {
var statearr_47118_48135 = state_47114__$1;
(statearr_47118_48135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (1))){
var inst_47091 = (0);
var state_47114__$1 = (function (){var statearr_47120 = state_47114;
(statearr_47120[(8)] = inst_47091);

return statearr_47120;
})();
var statearr_47121_48140 = state_47114__$1;
(statearr_47121_48140[(2)] = null);

(statearr_47121_48140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (4))){
var state_47114__$1 = state_47114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47114__$1,(7),ch);
} else {
if((state_val_47115 === (6))){
var inst_47109 = (state_47114[(2)]);
var state_47114__$1 = state_47114;
var statearr_47122_48141 = state_47114__$1;
(statearr_47122_48141[(2)] = inst_47109);

(statearr_47122_48141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (3))){
var inst_47111 = (state_47114[(2)]);
var inst_47112 = cljs.core.async.close_BANG_(out);
var state_47114__$1 = (function (){var statearr_47123 = state_47114;
(statearr_47123[(9)] = inst_47111);

return statearr_47123;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47114__$1,inst_47112);
} else {
if((state_val_47115 === (2))){
var inst_47091 = (state_47114[(8)]);
var inst_47093 = (inst_47091 < n);
var state_47114__$1 = state_47114;
if(cljs.core.truth_(inst_47093)){
var statearr_47124_48142 = state_47114__$1;
(statearr_47124_48142[(1)] = (4));

} else {
var statearr_47125_48143 = state_47114__$1;
(statearr_47125_48143[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (11))){
var inst_47091 = (state_47114[(8)]);
var inst_47101 = (state_47114[(2)]);
var inst_47102 = (inst_47091 + (1));
var inst_47091__$1 = inst_47102;
var state_47114__$1 = (function (){var statearr_47126 = state_47114;
(statearr_47126[(8)] = inst_47091__$1);

(statearr_47126[(10)] = inst_47101);

return statearr_47126;
})();
var statearr_47127_48144 = state_47114__$1;
(statearr_47127_48144[(2)] = null);

(statearr_47127_48144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (9))){
var state_47114__$1 = state_47114;
var statearr_47128_48145 = state_47114__$1;
(statearr_47128_48145[(2)] = null);

(statearr_47128_48145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (5))){
var state_47114__$1 = state_47114;
var statearr_47129_48146 = state_47114__$1;
(statearr_47129_48146[(2)] = null);

(statearr_47129_48146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (10))){
var inst_47106 = (state_47114[(2)]);
var state_47114__$1 = state_47114;
var statearr_47130_48147 = state_47114__$1;
(statearr_47130_48147[(2)] = inst_47106);

(statearr_47130_48147[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (8))){
var inst_47096 = (state_47114[(7)]);
var state_47114__$1 = state_47114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47114__$1,(11),out,inst_47096);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45721__auto__ = null;
var cljs$core$async$state_machine__45721__auto____0 = (function (){
var statearr_47133 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47133[(0)] = cljs$core$async$state_machine__45721__auto__);

(statearr_47133[(1)] = (1));

return statearr_47133;
});
var cljs$core$async$state_machine__45721__auto____1 = (function (state_47114){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_47114);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e47134){var ex__45724__auto__ = e47134;
var statearr_47135_48149 = state_47114;
(statearr_47135_48149[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_47114[(4)]))){
var statearr_47136_48150 = state_47114;
(statearr_47136_48150[(1)] = cljs.core.first((state_47114[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48152 = state_47114;
state_47114 = G__48152;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
cljs$core$async$state_machine__45721__auto__ = function(state_47114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45721__auto____1.call(this,state_47114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45721__auto____0;
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45721__auto____1;
return cljs$core$async$state_machine__45721__auto__;
})()
})();
var state__45796__auto__ = (function (){var statearr_47137 = f__45795__auto__();
(statearr_47137[(6)] = c__45794__auto___48133);

return statearr_47137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47139 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47139 = (function (f,ch,meta47140){
this.f = f;
this.ch = ch;
this.meta47140 = meta47140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47141,meta47140__$1){
var self__ = this;
var _47141__$1 = this;
return (new cljs.core.async.t_cljs$core$async47139(self__.f,self__.ch,meta47140__$1));
}));

(cljs.core.async.t_cljs$core$async47139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47141){
var self__ = this;
var _47141__$1 = this;
return self__.meta47140;
}));

(cljs.core.async.t_cljs$core$async47139.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47139.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47139.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47139.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47139.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47144 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47144 = (function (f,ch,meta47140,_,fn1,meta47145){
this.f = f;
this.ch = ch;
this.meta47140 = meta47140;
this._ = _;
this.fn1 = fn1;
this.meta47145 = meta47145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47146,meta47145__$1){
var self__ = this;
var _47146__$1 = this;
return (new cljs.core.async.t_cljs$core$async47144(self__.f,self__.ch,self__.meta47140,self__._,self__.fn1,meta47145__$1));
}));

(cljs.core.async.t_cljs$core$async47144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47146){
var self__ = this;
var _47146__$1 = this;
return self__.meta47145;
}));

(cljs.core.async.t_cljs$core$async47144.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47144.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47144.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47144.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47138_SHARP_){
var G__47150 = (((p1__47138_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47138_SHARP_) : self__.f.call(null,p1__47138_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47150) : f1.call(null,G__47150));
});
}));

(cljs.core.async.t_cljs$core$async47144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47140","meta47140",-1912204160,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47139","cljs.core.async/t_cljs$core$async47139",-1962323900,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47145","meta47145",-1590376452,null)], null);
}));

(cljs.core.async.t_cljs$core$async47144.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47144");

(cljs.core.async.t_cljs$core$async47144.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47144");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47144.
 */
cljs.core.async.__GT_t_cljs$core$async47144 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47144(f__$1,ch__$1,meta47140__$1,___$2,fn1__$1,meta47145){
return (new cljs.core.async.t_cljs$core$async47144(f__$1,ch__$1,meta47140__$1,___$2,fn1__$1,meta47145));
});

}

return (new cljs.core.async.t_cljs$core$async47144(self__.f,self__.ch,self__.meta47140,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47152 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47152) : self__.f.call(null,G__47152));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47139.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47139.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47140","meta47140",-1912204160,null)], null);
}));

(cljs.core.async.t_cljs$core$async47139.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47139");

(cljs.core.async.t_cljs$core$async47139.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47139");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47139.
 */
cljs.core.async.__GT_t_cljs$core$async47139 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47139(f__$1,ch__$1,meta47140){
return (new cljs.core.async.t_cljs$core$async47139(f__$1,ch__$1,meta47140));
});

}

return (new cljs.core.async.t_cljs$core$async47139(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47154 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47154 = (function (f,ch,meta47155){
this.f = f;
this.ch = ch;
this.meta47155 = meta47155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47156,meta47155__$1){
var self__ = this;
var _47156__$1 = this;
return (new cljs.core.async.t_cljs$core$async47154(self__.f,self__.ch,meta47155__$1));
}));

(cljs.core.async.t_cljs$core$async47154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47156){
var self__ = this;
var _47156__$1 = this;
return self__.meta47155;
}));

(cljs.core.async.t_cljs$core$async47154.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47154.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47154.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47154.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47154.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47154.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47154.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47155","meta47155",501333510,null)], null);
}));

(cljs.core.async.t_cljs$core$async47154.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47154");

(cljs.core.async.t_cljs$core$async47154.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47154");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47154.
 */
cljs.core.async.__GT_t_cljs$core$async47154 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47154(f__$1,ch__$1,meta47155){
return (new cljs.core.async.t_cljs$core$async47154(f__$1,ch__$1,meta47155));
});

}

return (new cljs.core.async.t_cljs$core$async47154(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47157 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47157 = (function (p,ch,meta47158){
this.p = p;
this.ch = ch;
this.meta47158 = meta47158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47159,meta47158__$1){
var self__ = this;
var _47159__$1 = this;
return (new cljs.core.async.t_cljs$core$async47157(self__.p,self__.ch,meta47158__$1));
}));

(cljs.core.async.t_cljs$core$async47157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47159){
var self__ = this;
var _47159__$1 = this;
return self__.meta47158;
}));

(cljs.core.async.t_cljs$core$async47157.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47157.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47157.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47157.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47157.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47157.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47157.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47158","meta47158",-860203583,null)], null);
}));

(cljs.core.async.t_cljs$core$async47157.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47157");

(cljs.core.async.t_cljs$core$async47157.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47157");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47157.
 */
cljs.core.async.__GT_t_cljs$core$async47157 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47157(p__$1,ch__$1,meta47158){
return (new cljs.core.async.t_cljs$core$async47157(p__$1,ch__$1,meta47158));
});

}

return (new cljs.core.async.t_cljs$core$async47157(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__47164 = arguments.length;
switch (G__47164) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45794__auto___48165 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = (function (state_47188){
var state_val_47189 = (state_47188[(1)]);
if((state_val_47189 === (7))){
var inst_47184 = (state_47188[(2)]);
var state_47188__$1 = state_47188;
var statearr_47190_48166 = state_47188__$1;
(statearr_47190_48166[(2)] = inst_47184);

(statearr_47190_48166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (1))){
var state_47188__$1 = state_47188;
var statearr_47191_48167 = state_47188__$1;
(statearr_47191_48167[(2)] = null);

(statearr_47191_48167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (4))){
var inst_47170 = (state_47188[(7)]);
var inst_47170__$1 = (state_47188[(2)]);
var inst_47171 = (inst_47170__$1 == null);
var state_47188__$1 = (function (){var statearr_47192 = state_47188;
(statearr_47192[(7)] = inst_47170__$1);

return statearr_47192;
})();
if(cljs.core.truth_(inst_47171)){
var statearr_47193_48168 = state_47188__$1;
(statearr_47193_48168[(1)] = (5));

} else {
var statearr_47194_48169 = state_47188__$1;
(statearr_47194_48169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (6))){
var inst_47170 = (state_47188[(7)]);
var inst_47175 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47170) : p.call(null,inst_47170));
var state_47188__$1 = state_47188;
if(cljs.core.truth_(inst_47175)){
var statearr_47195_48170 = state_47188__$1;
(statearr_47195_48170[(1)] = (8));

} else {
var statearr_47196_48171 = state_47188__$1;
(statearr_47196_48171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (3))){
var inst_47186 = (state_47188[(2)]);
var state_47188__$1 = state_47188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47188__$1,inst_47186);
} else {
if((state_val_47189 === (2))){
var state_47188__$1 = state_47188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47188__$1,(4),ch);
} else {
if((state_val_47189 === (11))){
var inst_47178 = (state_47188[(2)]);
var state_47188__$1 = state_47188;
var statearr_47197_48173 = state_47188__$1;
(statearr_47197_48173[(2)] = inst_47178);

(statearr_47197_48173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (9))){
var state_47188__$1 = state_47188;
var statearr_47198_48174 = state_47188__$1;
(statearr_47198_48174[(2)] = null);

(statearr_47198_48174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (5))){
var inst_47173 = cljs.core.async.close_BANG_(out);
var state_47188__$1 = state_47188;
var statearr_47202_48175 = state_47188__$1;
(statearr_47202_48175[(2)] = inst_47173);

(statearr_47202_48175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (10))){
var inst_47181 = (state_47188[(2)]);
var state_47188__$1 = (function (){var statearr_47203 = state_47188;
(statearr_47203[(8)] = inst_47181);

return statearr_47203;
})();
var statearr_47204_48176 = state_47188__$1;
(statearr_47204_48176[(2)] = null);

(statearr_47204_48176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47189 === (8))){
var inst_47170 = (state_47188[(7)]);
var state_47188__$1 = state_47188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47188__$1,(11),out,inst_47170);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45721__auto__ = null;
var cljs$core$async$state_machine__45721__auto____0 = (function (){
var statearr_47205 = [null,null,null,null,null,null,null,null,null];
(statearr_47205[(0)] = cljs$core$async$state_machine__45721__auto__);

(statearr_47205[(1)] = (1));

return statearr_47205;
});
var cljs$core$async$state_machine__45721__auto____1 = (function (state_47188){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_47188);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e47206){var ex__45724__auto__ = e47206;
var statearr_47207_48177 = state_47188;
(statearr_47207_48177[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_47188[(4)]))){
var statearr_47208_48180 = state_47188;
(statearr_47208_48180[(1)] = cljs.core.first((state_47188[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48181 = state_47188;
state_47188 = G__48181;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
cljs$core$async$state_machine__45721__auto__ = function(state_47188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45721__auto____1.call(this,state_47188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45721__auto____0;
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45721__auto____1;
return cljs$core$async$state_machine__45721__auto__;
})()
})();
var state__45796__auto__ = (function (){var statearr_47209 = f__45795__auto__();
(statearr_47209[(6)] = c__45794__auto___48165);

return statearr_47209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47211 = arguments.length;
switch (G__47211) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__45794__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = (function (state_47283){
var state_val_47284 = (state_47283[(1)]);
if((state_val_47284 === (7))){
var inst_47279 = (state_47283[(2)]);
var state_47283__$1 = state_47283;
var statearr_47285_48188 = state_47283__$1;
(statearr_47285_48188[(2)] = inst_47279);

(statearr_47285_48188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (20))){
var inst_47243 = (state_47283[(7)]);
var inst_47260 = (state_47283[(2)]);
var inst_47261 = cljs.core.next(inst_47243);
var inst_47228 = inst_47261;
var inst_47229 = null;
var inst_47230 = (0);
var inst_47231 = (0);
var state_47283__$1 = (function (){var statearr_47286 = state_47283;
(statearr_47286[(8)] = inst_47260);

(statearr_47286[(9)] = inst_47228);

(statearr_47286[(10)] = inst_47230);

(statearr_47286[(11)] = inst_47231);

(statearr_47286[(12)] = inst_47229);

return statearr_47286;
})();
var statearr_47287_48189 = state_47283__$1;
(statearr_47287_48189[(2)] = null);

(statearr_47287_48189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (1))){
var state_47283__$1 = state_47283;
var statearr_47288_48190 = state_47283__$1;
(statearr_47288_48190[(2)] = null);

(statearr_47288_48190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (4))){
var inst_47214 = (state_47283[(13)]);
var inst_47214__$1 = (state_47283[(2)]);
var inst_47215 = (inst_47214__$1 == null);
var state_47283__$1 = (function (){var statearr_47289 = state_47283;
(statearr_47289[(13)] = inst_47214__$1);

return statearr_47289;
})();
if(cljs.core.truth_(inst_47215)){
var statearr_47290_48191 = state_47283__$1;
(statearr_47290_48191[(1)] = (5));

} else {
var statearr_47291_48192 = state_47283__$1;
(statearr_47291_48192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (15))){
var state_47283__$1 = state_47283;
var statearr_47295_48193 = state_47283__$1;
(statearr_47295_48193[(2)] = null);

(statearr_47295_48193[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (21))){
var state_47283__$1 = state_47283;
var statearr_47296_48194 = state_47283__$1;
(statearr_47296_48194[(2)] = null);

(statearr_47296_48194[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (13))){
var inst_47228 = (state_47283[(9)]);
var inst_47230 = (state_47283[(10)]);
var inst_47231 = (state_47283[(11)]);
var inst_47229 = (state_47283[(12)]);
var inst_47239 = (state_47283[(2)]);
var inst_47240 = (inst_47231 + (1));
var tmp47292 = inst_47228;
var tmp47293 = inst_47230;
var tmp47294 = inst_47229;
var inst_47228__$1 = tmp47292;
var inst_47229__$1 = tmp47294;
var inst_47230__$1 = tmp47293;
var inst_47231__$1 = inst_47240;
var state_47283__$1 = (function (){var statearr_47297 = state_47283;
(statearr_47297[(14)] = inst_47239);

(statearr_47297[(9)] = inst_47228__$1);

(statearr_47297[(10)] = inst_47230__$1);

(statearr_47297[(11)] = inst_47231__$1);

(statearr_47297[(12)] = inst_47229__$1);

return statearr_47297;
})();
var statearr_47298_48195 = state_47283__$1;
(statearr_47298_48195[(2)] = null);

(statearr_47298_48195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (22))){
var state_47283__$1 = state_47283;
var statearr_47299_48196 = state_47283__$1;
(statearr_47299_48196[(2)] = null);

(statearr_47299_48196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (6))){
var inst_47214 = (state_47283[(13)]);
var inst_47226 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47214) : f.call(null,inst_47214));
var inst_47227 = cljs.core.seq(inst_47226);
var inst_47228 = inst_47227;
var inst_47229 = null;
var inst_47230 = (0);
var inst_47231 = (0);
var state_47283__$1 = (function (){var statearr_47300 = state_47283;
(statearr_47300[(9)] = inst_47228);

(statearr_47300[(10)] = inst_47230);

(statearr_47300[(11)] = inst_47231);

(statearr_47300[(12)] = inst_47229);

return statearr_47300;
})();
var statearr_47301_48197 = state_47283__$1;
(statearr_47301_48197[(2)] = null);

(statearr_47301_48197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (17))){
var inst_47243 = (state_47283[(7)]);
var inst_47247 = cljs.core.chunk_first(inst_47243);
var inst_47253 = cljs.core.chunk_rest(inst_47243);
var inst_47255 = cljs.core.count(inst_47247);
var inst_47228 = inst_47253;
var inst_47229 = inst_47247;
var inst_47230 = inst_47255;
var inst_47231 = (0);
var state_47283__$1 = (function (){var statearr_47302 = state_47283;
(statearr_47302[(9)] = inst_47228);

(statearr_47302[(10)] = inst_47230);

(statearr_47302[(11)] = inst_47231);

(statearr_47302[(12)] = inst_47229);

return statearr_47302;
})();
var statearr_47303_48198 = state_47283__$1;
(statearr_47303_48198[(2)] = null);

(statearr_47303_48198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (3))){
var inst_47281 = (state_47283[(2)]);
var state_47283__$1 = state_47283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47283__$1,inst_47281);
} else {
if((state_val_47284 === (12))){
var inst_47269 = (state_47283[(2)]);
var state_47283__$1 = state_47283;
var statearr_47304_48199 = state_47283__$1;
(statearr_47304_48199[(2)] = inst_47269);

(statearr_47304_48199[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (2))){
var state_47283__$1 = state_47283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47283__$1,(4),in$);
} else {
if((state_val_47284 === (23))){
var inst_47277 = (state_47283[(2)]);
var state_47283__$1 = state_47283;
var statearr_47305_48200 = state_47283__$1;
(statearr_47305_48200[(2)] = inst_47277);

(statearr_47305_48200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (19))){
var inst_47264 = (state_47283[(2)]);
var state_47283__$1 = state_47283;
var statearr_47306_48201 = state_47283__$1;
(statearr_47306_48201[(2)] = inst_47264);

(statearr_47306_48201[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (11))){
var inst_47228 = (state_47283[(9)]);
var inst_47243 = (state_47283[(7)]);
var inst_47243__$1 = cljs.core.seq(inst_47228);
var state_47283__$1 = (function (){var statearr_47307 = state_47283;
(statearr_47307[(7)] = inst_47243__$1);

return statearr_47307;
})();
if(inst_47243__$1){
var statearr_47308_48202 = state_47283__$1;
(statearr_47308_48202[(1)] = (14));

} else {
var statearr_47309_48203 = state_47283__$1;
(statearr_47309_48203[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (9))){
var inst_47271 = (state_47283[(2)]);
var inst_47272 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47283__$1 = (function (){var statearr_47310 = state_47283;
(statearr_47310[(15)] = inst_47271);

return statearr_47310;
})();
if(cljs.core.truth_(inst_47272)){
var statearr_47311_48204 = state_47283__$1;
(statearr_47311_48204[(1)] = (21));

} else {
var statearr_47312_48205 = state_47283__$1;
(statearr_47312_48205[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (5))){
var inst_47217 = cljs.core.async.close_BANG_(out);
var state_47283__$1 = state_47283;
var statearr_47313_48206 = state_47283__$1;
(statearr_47313_48206[(2)] = inst_47217);

(statearr_47313_48206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (14))){
var inst_47243 = (state_47283[(7)]);
var inst_47245 = cljs.core.chunked_seq_QMARK_(inst_47243);
var state_47283__$1 = state_47283;
if(inst_47245){
var statearr_47314_48207 = state_47283__$1;
(statearr_47314_48207[(1)] = (17));

} else {
var statearr_47315_48208 = state_47283__$1;
(statearr_47315_48208[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (16))){
var inst_47267 = (state_47283[(2)]);
var state_47283__$1 = state_47283;
var statearr_47316_48209 = state_47283__$1;
(statearr_47316_48209[(2)] = inst_47267);

(statearr_47316_48209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (10))){
var inst_47231 = (state_47283[(11)]);
var inst_47229 = (state_47283[(12)]);
var inst_47237 = cljs.core._nth(inst_47229,inst_47231);
var state_47283__$1 = state_47283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47283__$1,(13),out,inst_47237);
} else {
if((state_val_47284 === (18))){
var inst_47243 = (state_47283[(7)]);
var inst_47258 = cljs.core.first(inst_47243);
var state_47283__$1 = state_47283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47283__$1,(20),out,inst_47258);
} else {
if((state_val_47284 === (8))){
var inst_47230 = (state_47283[(10)]);
var inst_47231 = (state_47283[(11)]);
var inst_47233 = (inst_47231 < inst_47230);
var inst_47234 = inst_47233;
var state_47283__$1 = state_47283;
if(cljs.core.truth_(inst_47234)){
var statearr_47319_48210 = state_47283__$1;
(statearr_47319_48210[(1)] = (10));

} else {
var statearr_47320_48211 = state_47283__$1;
(statearr_47320_48211[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45721__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45721__auto____0 = (function (){
var statearr_47321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47321[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45721__auto__);

(statearr_47321[(1)] = (1));

return statearr_47321;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45721__auto____1 = (function (state_47283){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_47283);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e47322){var ex__45724__auto__ = e47322;
var statearr_47323_48215 = state_47283;
(statearr_47323_48215[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_47283[(4)]))){
var statearr_47324_48217 = state_47283;
(statearr_47324_48217[(1)] = cljs.core.first((state_47283[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48218 = state_47283;
state_47283 = G__48218;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45721__auto__ = function(state_47283){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45721__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45721__auto____1.call(this,state_47283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45721__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45721__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45721__auto__;
})()
})();
var state__45796__auto__ = (function (){var statearr_47328 = f__45795__auto__();
(statearr_47328[(6)] = c__45794__auto__);

return statearr_47328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
}));

return c__45794__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47337 = arguments.length;
switch (G__47337) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47339 = arguments.length;
switch (G__47339) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47344 = arguments.length;
switch (G__47344) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45794__auto___48222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = (function (state_47368){
var state_val_47369 = (state_47368[(1)]);
if((state_val_47369 === (7))){
var inst_47363 = (state_47368[(2)]);
var state_47368__$1 = state_47368;
var statearr_47370_48223 = state_47368__$1;
(statearr_47370_48223[(2)] = inst_47363);

(statearr_47370_48223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (1))){
var inst_47345 = null;
var state_47368__$1 = (function (){var statearr_47371 = state_47368;
(statearr_47371[(7)] = inst_47345);

return statearr_47371;
})();
var statearr_47372_48224 = state_47368__$1;
(statearr_47372_48224[(2)] = null);

(statearr_47372_48224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (4))){
var inst_47348 = (state_47368[(8)]);
var inst_47348__$1 = (state_47368[(2)]);
var inst_47349 = (inst_47348__$1 == null);
var inst_47350 = cljs.core.not(inst_47349);
var state_47368__$1 = (function (){var statearr_47373 = state_47368;
(statearr_47373[(8)] = inst_47348__$1);

return statearr_47373;
})();
if(inst_47350){
var statearr_47374_48225 = state_47368__$1;
(statearr_47374_48225[(1)] = (5));

} else {
var statearr_47375_48226 = state_47368__$1;
(statearr_47375_48226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (6))){
var state_47368__$1 = state_47368;
var statearr_47376_48227 = state_47368__$1;
(statearr_47376_48227[(2)] = null);

(statearr_47376_48227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (3))){
var inst_47365 = (state_47368[(2)]);
var inst_47366 = cljs.core.async.close_BANG_(out);
var state_47368__$1 = (function (){var statearr_47377 = state_47368;
(statearr_47377[(9)] = inst_47365);

return statearr_47377;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47368__$1,inst_47366);
} else {
if((state_val_47369 === (2))){
var state_47368__$1 = state_47368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47368__$1,(4),ch);
} else {
if((state_val_47369 === (11))){
var inst_47348 = (state_47368[(8)]);
var inst_47357 = (state_47368[(2)]);
var inst_47345 = inst_47348;
var state_47368__$1 = (function (){var statearr_47378 = state_47368;
(statearr_47378[(7)] = inst_47345);

(statearr_47378[(10)] = inst_47357);

return statearr_47378;
})();
var statearr_47379_48228 = state_47368__$1;
(statearr_47379_48228[(2)] = null);

(statearr_47379_48228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (9))){
var inst_47348 = (state_47368[(8)]);
var state_47368__$1 = state_47368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47368__$1,(11),out,inst_47348);
} else {
if((state_val_47369 === (5))){
var inst_47345 = (state_47368[(7)]);
var inst_47348 = (state_47368[(8)]);
var inst_47352 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47348,inst_47345);
var state_47368__$1 = state_47368;
if(inst_47352){
var statearr_47381_48229 = state_47368__$1;
(statearr_47381_48229[(1)] = (8));

} else {
var statearr_47382_48230 = state_47368__$1;
(statearr_47382_48230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (10))){
var inst_47360 = (state_47368[(2)]);
var state_47368__$1 = state_47368;
var statearr_47383_48231 = state_47368__$1;
(statearr_47383_48231[(2)] = inst_47360);

(statearr_47383_48231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47369 === (8))){
var inst_47345 = (state_47368[(7)]);
var tmp47380 = inst_47345;
var inst_47345__$1 = tmp47380;
var state_47368__$1 = (function (){var statearr_47384 = state_47368;
(statearr_47384[(7)] = inst_47345__$1);

return statearr_47384;
})();
var statearr_47385_48232 = state_47368__$1;
(statearr_47385_48232[(2)] = null);

(statearr_47385_48232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45721__auto__ = null;
var cljs$core$async$state_machine__45721__auto____0 = (function (){
var statearr_47386 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47386[(0)] = cljs$core$async$state_machine__45721__auto__);

(statearr_47386[(1)] = (1));

return statearr_47386;
});
var cljs$core$async$state_machine__45721__auto____1 = (function (state_47368){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_47368);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e47387){var ex__45724__auto__ = e47387;
var statearr_47388_48233 = state_47368;
(statearr_47388_48233[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_47368[(4)]))){
var statearr_47389_48234 = state_47368;
(statearr_47389_48234[(1)] = cljs.core.first((state_47368[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48235 = state_47368;
state_47368 = G__48235;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
cljs$core$async$state_machine__45721__auto__ = function(state_47368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45721__auto____1.call(this,state_47368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45721__auto____0;
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45721__auto____1;
return cljs$core$async$state_machine__45721__auto__;
})()
})();
var state__45796__auto__ = (function (){var statearr_47390 = f__45795__auto__();
(statearr_47390[(6)] = c__45794__auto___48222);

return statearr_47390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47392 = arguments.length;
switch (G__47392) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45794__auto___48237 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = (function (state_47434){
var state_val_47435 = (state_47434[(1)]);
if((state_val_47435 === (7))){
var inst_47429 = (state_47434[(2)]);
var state_47434__$1 = state_47434;
var statearr_47436_48238 = state_47434__$1;
(statearr_47436_48238[(2)] = inst_47429);

(statearr_47436_48238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47435 === (1))){
var inst_47394 = (new Array(n));
var inst_47395 = inst_47394;
var inst_47396 = (0);
var state_47434__$1 = (function (){var statearr_47437 = state_47434;
(statearr_47437[(7)] = inst_47395);

(statearr_47437[(8)] = inst_47396);

return statearr_47437;
})();
var statearr_47438_48239 = state_47434__$1;
(statearr_47438_48239[(2)] = null);

(statearr_47438_48239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47435 === (4))){
var inst_47399 = (state_47434[(9)]);
var inst_47399__$1 = (state_47434[(2)]);
var inst_47400 = (inst_47399__$1 == null);
var inst_47402 = cljs.core.not(inst_47400);
var state_47434__$1 = (function (){var statearr_47439 = state_47434;
(statearr_47439[(9)] = inst_47399__$1);

return statearr_47439;
})();
if(inst_47402){
var statearr_47440_48240 = state_47434__$1;
(statearr_47440_48240[(1)] = (5));

} else {
var statearr_47442_48241 = state_47434__$1;
(statearr_47442_48241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47435 === (15))){
var inst_47423 = (state_47434[(2)]);
var state_47434__$1 = state_47434;
var statearr_47445_48242 = state_47434__$1;
(statearr_47445_48242[(2)] = inst_47423);

(statearr_47445_48242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47435 === (13))){
var state_47434__$1 = state_47434;
var statearr_47446_48243 = state_47434__$1;
(statearr_47446_48243[(2)] = null);

(statearr_47446_48243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47435 === (6))){
var inst_47396 = (state_47434[(8)]);
var inst_47419 = (inst_47396 > (0));
var state_47434__$1 = state_47434;
if(cljs.core.truth_(inst_47419)){
var statearr_47447_48244 = state_47434__$1;
(statearr_47447_48244[(1)] = (12));

} else {
var statearr_47448_48245 = state_47434__$1;
(statearr_47448_48245[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47435 === (3))){
var inst_47431 = (state_47434[(2)]);
var state_47434__$1 = state_47434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47434__$1,inst_47431);
} else {
if((state_val_47435 === (12))){
var inst_47395 = (state_47434[(7)]);
var inst_47421 = cljs.core.vec(inst_47395);
var state_47434__$1 = state_47434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47434__$1,(15),out,inst_47421);
} else {
if((state_val_47435 === (2))){
var state_47434__$1 = state_47434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47434__$1,(4),ch);
} else {
if((state_val_47435 === (11))){
var inst_47413 = (state_47434[(2)]);
var inst_47414 = (new Array(n));
var inst_47395 = inst_47414;
var inst_47396 = (0);
var state_47434__$1 = (function (){var statearr_47456 = state_47434;
(statearr_47456[(7)] = inst_47395);

(statearr_47456[(10)] = inst_47413);

(statearr_47456[(8)] = inst_47396);

return statearr_47456;
})();
var statearr_47457_48246 = state_47434__$1;
(statearr_47457_48246[(2)] = null);

(statearr_47457_48246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47435 === (9))){
var inst_47395 = (state_47434[(7)]);
var inst_47411 = cljs.core.vec(inst_47395);
var state_47434__$1 = state_47434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47434__$1,(11),out,inst_47411);
} else {
if((state_val_47435 === (5))){
var inst_47395 = (state_47434[(7)]);
var inst_47396 = (state_47434[(8)]);
var inst_47399 = (state_47434[(9)]);
var inst_47406 = (state_47434[(11)]);
var inst_47404 = (inst_47395[inst_47396] = inst_47399);
var inst_47406__$1 = (inst_47396 + (1));
var inst_47407 = (inst_47406__$1 < n);
var state_47434__$1 = (function (){var statearr_47458 = state_47434;
(statearr_47458[(12)] = inst_47404);

(statearr_47458[(11)] = inst_47406__$1);

return statearr_47458;
})();
if(cljs.core.truth_(inst_47407)){
var statearr_47459_48248 = state_47434__$1;
(statearr_47459_48248[(1)] = (8));

} else {
var statearr_47460_48249 = state_47434__$1;
(statearr_47460_48249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47435 === (14))){
var inst_47426 = (state_47434[(2)]);
var inst_47427 = cljs.core.async.close_BANG_(out);
var state_47434__$1 = (function (){var statearr_47463 = state_47434;
(statearr_47463[(13)] = inst_47426);

return statearr_47463;
})();
var statearr_47464_48250 = state_47434__$1;
(statearr_47464_48250[(2)] = inst_47427);

(statearr_47464_48250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47435 === (10))){
var inst_47417 = (state_47434[(2)]);
var state_47434__$1 = state_47434;
var statearr_47465_48251 = state_47434__$1;
(statearr_47465_48251[(2)] = inst_47417);

(statearr_47465_48251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47435 === (8))){
var inst_47395 = (state_47434[(7)]);
var inst_47406 = (state_47434[(11)]);
var tmp47462 = inst_47395;
var inst_47395__$1 = tmp47462;
var inst_47396 = inst_47406;
var state_47434__$1 = (function (){var statearr_47466 = state_47434;
(statearr_47466[(7)] = inst_47395__$1);

(statearr_47466[(8)] = inst_47396);

return statearr_47466;
})();
var statearr_47467_48252 = state_47434__$1;
(statearr_47467_48252[(2)] = null);

(statearr_47467_48252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45721__auto__ = null;
var cljs$core$async$state_machine__45721__auto____0 = (function (){
var statearr_47469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47469[(0)] = cljs$core$async$state_machine__45721__auto__);

(statearr_47469[(1)] = (1));

return statearr_47469;
});
var cljs$core$async$state_machine__45721__auto____1 = (function (state_47434){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_47434);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e47471){var ex__45724__auto__ = e47471;
var statearr_47472_48253 = state_47434;
(statearr_47472_48253[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_47434[(4)]))){
var statearr_47473_48254 = state_47434;
(statearr_47473_48254[(1)] = cljs.core.first((state_47434[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48255 = state_47434;
state_47434 = G__48255;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
cljs$core$async$state_machine__45721__auto__ = function(state_47434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45721__auto____1.call(this,state_47434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45721__auto____0;
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45721__auto____1;
return cljs$core$async$state_machine__45721__auto__;
})()
})();
var state__45796__auto__ = (function (){var statearr_47474 = f__45795__auto__();
(statearr_47474[(6)] = c__45794__auto___48237);

return statearr_47474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47476 = arguments.length;
switch (G__47476) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45794__auto___48257 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45795__auto__ = (function (){var switch__45720__auto__ = (function (state_47521){
var state_val_47522 = (state_47521[(1)]);
if((state_val_47522 === (7))){
var inst_47517 = (state_47521[(2)]);
var state_47521__$1 = state_47521;
var statearr_47523_48258 = state_47521__$1;
(statearr_47523_48258[(2)] = inst_47517);

(statearr_47523_48258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (1))){
var inst_47477 = [];
var inst_47478 = inst_47477;
var inst_47479 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47521__$1 = (function (){var statearr_47524 = state_47521;
(statearr_47524[(7)] = inst_47479);

(statearr_47524[(8)] = inst_47478);

return statearr_47524;
})();
var statearr_47525_48259 = state_47521__$1;
(statearr_47525_48259[(2)] = null);

(statearr_47525_48259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (4))){
var inst_47482 = (state_47521[(9)]);
var inst_47482__$1 = (state_47521[(2)]);
var inst_47483 = (inst_47482__$1 == null);
var inst_47484 = cljs.core.not(inst_47483);
var state_47521__$1 = (function (){var statearr_47526 = state_47521;
(statearr_47526[(9)] = inst_47482__$1);

return statearr_47526;
})();
if(inst_47484){
var statearr_47527_48260 = state_47521__$1;
(statearr_47527_48260[(1)] = (5));

} else {
var statearr_47528_48261 = state_47521__$1;
(statearr_47528_48261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (15))){
var inst_47478 = (state_47521[(8)]);
var inst_47509 = cljs.core.vec(inst_47478);
var state_47521__$1 = state_47521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47521__$1,(18),out,inst_47509);
} else {
if((state_val_47522 === (13))){
var inst_47504 = (state_47521[(2)]);
var state_47521__$1 = state_47521;
var statearr_47529_48262 = state_47521__$1;
(statearr_47529_48262[(2)] = inst_47504);

(statearr_47529_48262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (6))){
var inst_47478 = (state_47521[(8)]);
var inst_47506 = inst_47478.length;
var inst_47507 = (inst_47506 > (0));
var state_47521__$1 = state_47521;
if(cljs.core.truth_(inst_47507)){
var statearr_47530_48263 = state_47521__$1;
(statearr_47530_48263[(1)] = (15));

} else {
var statearr_47531_48264 = state_47521__$1;
(statearr_47531_48264[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (17))){
var inst_47514 = (state_47521[(2)]);
var inst_47515 = cljs.core.async.close_BANG_(out);
var state_47521__$1 = (function (){var statearr_47532 = state_47521;
(statearr_47532[(10)] = inst_47514);

return statearr_47532;
})();
var statearr_47533_48265 = state_47521__$1;
(statearr_47533_48265[(2)] = inst_47515);

(statearr_47533_48265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (3))){
var inst_47519 = (state_47521[(2)]);
var state_47521__$1 = state_47521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47521__$1,inst_47519);
} else {
if((state_val_47522 === (12))){
var inst_47478 = (state_47521[(8)]);
var inst_47497 = cljs.core.vec(inst_47478);
var state_47521__$1 = state_47521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47521__$1,(14),out,inst_47497);
} else {
if((state_val_47522 === (2))){
var state_47521__$1 = state_47521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47521__$1,(4),ch);
} else {
if((state_val_47522 === (11))){
var inst_47486 = (state_47521[(11)]);
var inst_47478 = (state_47521[(8)]);
var inst_47482 = (state_47521[(9)]);
var inst_47494 = inst_47478.push(inst_47482);
var tmp47534 = inst_47478;
var inst_47478__$1 = tmp47534;
var inst_47479 = inst_47486;
var state_47521__$1 = (function (){var statearr_47535 = state_47521;
(statearr_47535[(7)] = inst_47479);

(statearr_47535[(8)] = inst_47478__$1);

(statearr_47535[(12)] = inst_47494);

return statearr_47535;
})();
var statearr_47536_48266 = state_47521__$1;
(statearr_47536_48266[(2)] = null);

(statearr_47536_48266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (9))){
var inst_47479 = (state_47521[(7)]);
var inst_47490 = cljs.core.keyword_identical_QMARK_(inst_47479,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_47521__$1 = state_47521;
var statearr_47537_48267 = state_47521__$1;
(statearr_47537_48267[(2)] = inst_47490);

(statearr_47537_48267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (5))){
var inst_47479 = (state_47521[(7)]);
var inst_47486 = (state_47521[(11)]);
var inst_47487 = (state_47521[(13)]);
var inst_47482 = (state_47521[(9)]);
var inst_47486__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47482) : f.call(null,inst_47482));
var inst_47487__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47486__$1,inst_47479);
var state_47521__$1 = (function (){var statearr_47538 = state_47521;
(statearr_47538[(11)] = inst_47486__$1);

(statearr_47538[(13)] = inst_47487__$1);

return statearr_47538;
})();
if(inst_47487__$1){
var statearr_47539_48268 = state_47521__$1;
(statearr_47539_48268[(1)] = (8));

} else {
var statearr_47540_48269 = state_47521__$1;
(statearr_47540_48269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (14))){
var inst_47486 = (state_47521[(11)]);
var inst_47482 = (state_47521[(9)]);
var inst_47499 = (state_47521[(2)]);
var inst_47500 = [];
var inst_47501 = inst_47500.push(inst_47482);
var inst_47478 = inst_47500;
var inst_47479 = inst_47486;
var state_47521__$1 = (function (){var statearr_47541 = state_47521;
(statearr_47541[(7)] = inst_47479);

(statearr_47541[(8)] = inst_47478);

(statearr_47541[(14)] = inst_47499);

(statearr_47541[(15)] = inst_47501);

return statearr_47541;
})();
var statearr_47542_48270 = state_47521__$1;
(statearr_47542_48270[(2)] = null);

(statearr_47542_48270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (16))){
var state_47521__$1 = state_47521;
var statearr_47543_48271 = state_47521__$1;
(statearr_47543_48271[(2)] = null);

(statearr_47543_48271[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (10))){
var inst_47492 = (state_47521[(2)]);
var state_47521__$1 = state_47521;
if(cljs.core.truth_(inst_47492)){
var statearr_47544_48272 = state_47521__$1;
(statearr_47544_48272[(1)] = (11));

} else {
var statearr_47545_48273 = state_47521__$1;
(statearr_47545_48273[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (18))){
var inst_47511 = (state_47521[(2)]);
var state_47521__$1 = state_47521;
var statearr_47546_48274 = state_47521__$1;
(statearr_47546_48274[(2)] = inst_47511);

(statearr_47546_48274[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (8))){
var inst_47487 = (state_47521[(13)]);
var state_47521__$1 = state_47521;
var statearr_47547_48276 = state_47521__$1;
(statearr_47547_48276[(2)] = inst_47487);

(statearr_47547_48276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45721__auto__ = null;
var cljs$core$async$state_machine__45721__auto____0 = (function (){
var statearr_47548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47548[(0)] = cljs$core$async$state_machine__45721__auto__);

(statearr_47548[(1)] = (1));

return statearr_47548;
});
var cljs$core$async$state_machine__45721__auto____1 = (function (state_47521){
while(true){
var ret_value__45722__auto__ = (function (){try{while(true){
var result__45723__auto__ = switch__45720__auto__(state_47521);
if(cljs.core.keyword_identical_QMARK_(result__45723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45723__auto__;
}
break;
}
}catch (e47549){var ex__45724__auto__ = e47549;
var statearr_47550_48277 = state_47521;
(statearr_47550_48277[(2)] = ex__45724__auto__);


if(cljs.core.seq((state_47521[(4)]))){
var statearr_47551_48278 = state_47521;
(statearr_47551_48278[(1)] = cljs.core.first((state_47521[(4)])));

} else {
throw ex__45724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48279 = state_47521;
state_47521 = G__48279;
continue;
} else {
return ret_value__45722__auto__;
}
break;
}
});
cljs$core$async$state_machine__45721__auto__ = function(state_47521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45721__auto____1.call(this,state_47521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45721__auto____0;
cljs$core$async$state_machine__45721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45721__auto____1;
return cljs$core$async$state_machine__45721__auto__;
})()
})();
var state__45796__auto__ = (function (){var statearr_47552 = f__45795__auto__();
(statearr_47552[(6)] = c__45794__auto___48257);

return statearr_47552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45796__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
