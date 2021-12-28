goog.provide('reframeui.core');
reframeui.core.dev_setup = (function reframeui$core$dev_setup(){
if(reframeui.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
reframeui.core.mount_root = (function reframeui$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframeui.ui.ui], null),root_el);
});
reframeui.core.init = (function reframeui$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reframeui.events","initialize-db","reframeui.events/initialize-db",1806941559)], null));

reframeui.core.dev_setup();

return reframeui.core.mount_root();
});

//# sourceMappingURL=reframeui.core.js.map
