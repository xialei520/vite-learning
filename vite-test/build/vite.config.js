//第一种方法 defineConfig

import { loadEnv } from "vite";
import { defineConfig } from "vite";

import viteBaseConfig from "./vite.base.config";
import viteDevConfig from "./vite.dev.config";
import viteProdConfig from "./vite.prod.config";

const envResolver = {
    build: () => ({ ...viteBaseConfig, ...viteProdConfig }),
    serve: () => ({ ...viteBaseConfig, ...viteDevConfig })
};
export default defineConfig(({ command, mode }) => {
    // let env = loadEnv(mode, process.cwd(), "");
    console.log("command", command);

    return envResolver[command]();
});

//第二种方法
/** @type import("vite").UserConfig */
// export default {
//     optimizeDeps: {

//     }

// }
