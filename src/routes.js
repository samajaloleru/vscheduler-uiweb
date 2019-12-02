import Vue from "vue";
import Router from "vue-router";

import home from "@/components/home"
import about from "@/components/about"
import faq from "@/components/faq"
import pricing from "@/components/pricing"
import signup from "@/components/signup"



Vue.use(Router)
export const router =  new Router({
    mode: "hash", 
    routes: [ 
        {
            name: "home",
            path: '/',
            component: home
        },
        {
            name: "about",
            path: '/about',
            component: about,
        },
        {
            name: "faq",
            path: '/faq',
            component: faq,
        },
        {
            name: "pricing",
            path: '/pricing',
            component: pricing,
        },
        {
          name: "signup",
          path: "/signup",
          component: signup
        },
    ]
})