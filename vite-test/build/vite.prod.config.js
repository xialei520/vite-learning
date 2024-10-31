import { defineConfig } from "vite";
import babel from "vite-plugin-babel";
import legacyPlugin from "@vitejs/plugin-legacy";

export default defineConfig({
    build: {
        // target: ["ie9"]
        rollupOptions: {
            output: {
                format: "umd"
                // manualChunks(id, { getModuleInfo }) {
                //     console.log("id: " + id);
                //     return "aaa";
                // }
            }
        }
    },
    plugins: [
        // legacyPlugin({
        //     // targets: ["ie9"], // 需要兼容的目标列表，可以设置多个
        //     additionalLegacyPolyfills: ["regenerator-runtime/runtime"] // 面向IE11时需要此插件
        // }),

        babel({
            babelConfig: {
                targets: {
                    // chrome: "58",
                    ie: "9"
                },
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            modules: false,
                            useBuiltIns: "entry",
                            corejs: {
                                version: "3.29.0",
                                proposals: true
                            }
                        }
                    ]
                ]
                // plugins: ["transform-es2015-arrow-functions"]
            }
        })
    ]
});
