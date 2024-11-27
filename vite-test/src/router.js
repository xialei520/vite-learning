import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/home/index.vue";

const routes = [
    {
        path: "/",
        component: HomeView
    },
    {
        path: "/help",
        component: () => import("@/views/home/help.vue")
    },
    {
        path: "/demo",
        component: () => import("@/views/home/demo.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
