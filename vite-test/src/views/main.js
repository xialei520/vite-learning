console.log("获取环境变量", import.meta.env.VITE_APP_KEY);

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import router from "./router";
// 从一个单文件组件中导入根组件
import App from "@/layout/home.vue";

const app = createApp(App);

// 引入pinia
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);

app.use(router);

app.mount("#app");

app.config.errorHandler = (err) => {
    /* 处理错误 */
    console.log("错误", err);
};
