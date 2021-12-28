(ns reframeui.ui
  (:require
   [reagent.dom :as rdom]
   [reagent.core :as r]
   [reagent.ratom]
   [re-frame.core :as rf :refer [reg-sub reg-event-db reg-event-fx reg-fx dispatch subscribe]]
   [clojure.string :as str]
   ;; [clojure.core.matrix :as mat]
   [reframeui.events :as events]
   [reframeui.views :as views]
   [reframeui.config :as config]
   ;; ["@react-three/drei" :refer [useGLTF Sky Environment PerspectiveCamera]]
   [re-com.core :as re :refer [at]]
   [goog.events]
   [spade.util]
   [spade.core]
   [spade.runtime]
   [re-frisk.clipboard]
   ;; [flow-storm.api :as fsa]
   ;; [odoyle-rules :as o]

   ;; [clojure.java.io :as io]
   )
  (:require-macros
   ;; [r-f-test.macros :refer [event]]
   ))

(defn d [& args] (re-frame.core/dispatch (vec args)))
(defn sub [& args] (re-frame.core/subscribe (vec args)))
(def render-this #(rdom/render % (.getElementById js/document "app")))

  (rf/reg-event-db
    ::click-button
    (fn [db _]
      (update db :click-count inc)))

  (rf/reg-sub
    ::clicks
    (fn [db _]
      (:click-count db)))

(def button [re/button
             :label "click this!"
             :on-click #(d ::click-button)
             :tooltip "click iiiiiit!!!"
             ;; :class "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
             :style {
                    :background-color "blue"
                    ;; :user-select "none"
                     }
             :attr {

                    ;; :user-select "none"
                    :draggable true
                    }
             ])

(rf/reg-event-db
  :set-mouse-position
  (fn [db [_ arg]]
    (assoc db :mouse-position [(.-clientX arg) (.-clientY arg)])))

(rf/reg-sub
  :mouse-position
  (fn [db _]
    (:mouse-position db)))

(def fullscreenstyle {:position "fixed"
                      :top 0
                      :left 0
                      :bottom 0
                      :right 0
                      :overflow "auto"
                      :background "#222222"})




(defn ui []
  [re/h-box :style fullscreenstyle
            :align :stretch
            :gap "0px"
            :attr {
                   :on-mouse-move #(d :set-mouse-position %1)
                   }
            :children [[re/box :child (str @(sub ::clicks) " clicks so far. Click more!")
                               :size "auto"
                        ]
                       [re/box :child (str "mouse position: " (pr-str @(sub :mouse-position)))
                               :size "auto"
                        ]
                       [re/box :child button
                               :size "auto"
                               :align-self :center
                        ]
                       [re/box :child button
                               :size "auto"
                               :align-self :end
                        ]






                       [:div {:style {
                                      :left             (+ 1.5 (get @(sub :mouse-position) 0))
                                      :top              (get @(sub :mouse-position) 1)
                                      :width            50
                                      :height           50
                                      :background-color "black"
                                      :position         "absolute"}}]
                       ]])

;; shadow-cljs added an extra / to a line in the index.html which broke it... that's a bug...
;; compile with shadow-cljs release app
;; why doesn't it render anything when it's been compiled with shadow-cljs release app? is it missing an entry point? should I not have used weird characters in the path?
;; use get in case type is null

(comment

  @re-frame.db/app-db

(render-this [ui])

(.mousedown ($ ".btn") (fn [e] (.preventDefault e)))

(defn dot [{:keys [x y]}]
  [:div {:style {:left             x
                 :top              y
                 :width            2
                 :height           2
                 :background-color "black"
                 :position         "absolute"}}])

;; the index.html contains the body tag...
  (render-this
    [(fn []
       [re/h-box :height "100px"
                 :width "450px"
                 :align :stretch
                 :gap "4px"
                 :children [[re/box :child (str @(sub ::clicks) " clicks so far. Click more!")
                                    :size "auto"
                             ]
                            [re/box :child button
                                    :size "auto"
                                    :align-self :center
                             ]
                            [re/box :child button
                                    :size "auto"
                                    :align-self :end
                                    ]]
        :attr {:on-mouse-move #(d ::update-mouse-position)}
        ])])

  )
