import Vue from "vue";
import Router from "vue-router";

import home from "@/components/home"
import about from "@/components/about"
import term from "@/components/term"
import security from "@/components/security"
import faq from "@/components/faq"
import privacy from "@/components/privacy"
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
            name: "term",
            path: '/term',
            component: term,
        },
        {
            name: "security",
            path: '/security',
            component: security,
        },
        {
            name: "faq",
            path: '/faq',
            component: faq,
        },
        {
            name: "privacy",
            path: '/privacy',
            component: privacy,
        },
        {
          name: "signup",
          path: "/signup",
          component: signup
        },
    ]
})