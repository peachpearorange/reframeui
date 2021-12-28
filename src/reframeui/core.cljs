(ns reframeui.core
  (:require
   [reagent.dom :as rdom]
   [re-frame.core :as re-frame]
   [reframeui.events :as events]
   [reframeui.views :as views]
   [reframeui.config :as config]
   [reframeui.ui :as ui]
   ))


(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [ui/ui] root-el)))

(defn init []
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))

;; (shadow.cljs.devtools.client.browser/ws-status)
;; (shadow.cljs.devtools.client.)
