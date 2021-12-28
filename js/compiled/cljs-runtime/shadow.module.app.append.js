
shadow.cljs.devtools.client.env.module_loaded('app');

try { reframeui.core.init(); } catch (e) { console.error("An error occurred when calling (reframeui.core/init)"); throw(e); }