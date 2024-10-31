import { defineConfig, loadEnv } from "vite";
import path from "path";
import myPlugin from "./plugins/myPlugin";
import { ipAdress } from "./utils/index";
// vite.config.js
import vue from '@vitejs/plugin-vue'

 

// console.log("Environment", env);
export default defineConfig({
    // optimizeDeps: {
    //     exclude: [] //将指定数组中的依赖不进行依赖预构建
    // },

    root: path.resolve(process.cwd()), //项目根目录，index.html所在的位置
    base: "/", //开发或生产环境服务的公共基础路径
    mode: "development",
    define: {
        //定义全局常量替换方式
        // "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    },
    plugins: [myPlugin(), vue()],
    publicDir: "public", //为静态资源服务的文件夹
    cacheDir: "node_modules/.vite", //缓存文件目录，使用缓存可以提高性能
    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(process.cwd(), 'src')
        },
        // dedupe: "",
        conditions: ["require"], //情景导出配置
        mainFields: ["module", "jsnext:main", "jsnext"], //解析包的入口
        extensions: [".mjs", ".js", ".ts", ".vue"], //导入时想要省略的扩展名列表
        preserveSymlinks: false //通过原始文件路径确定文件身份
    },
    css: {
        //配置 CSS modules 的行为
        modules: {},
        postcss: "", //内联的postcss配置
        devSourcemap: false //在开发过程中是否启用 sourcemap
    },
    json: {
        namedExports: true, //是否支持从 .json 文件中进行按名导入
        stringify: false //若设置为 true，导入的 JSON 会被转换为 export default JSON.parse("...")
    },
    logLevel: "info", //控制台输出等级
    envDir: path.join(process.cwd(), "./build/env"), //用于加载 .env 文件的目录
    // envPrefix: "ENV_", //配置vite注入客户端环境变量校验的env前缀
    appType: "spa", //应用类型
    server: {
        port: 8088, //服务端口
        host: "localhost", //服务地址
        open: true, //
        proxy: {
          // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
        cors: true,
        headers: {},
        watch: {},
        base: "",
        origin: "http://localhost:8080"
    },
    build: {
        // target: "modules", //设置最终构建的浏览器兼容目标
        modulePreload: {
            polyfill: true
        },
        outDir: "/dist",
        assetsDir: "assets", //指定生成静态资源的存放路径
        assetsInlineLimit: 4096, //小于此阈值的导入或引用资源将内联为 base64 编码
        cssCodeSplit: true, //启用/禁用 CSS 代码拆分
        cssTarget: "", //css兼容目标
        sourcemap: "inline", //创建一个独立的 source map 文件
        rollupOptions: {
            // input: path.resolve(__dirname, "index.js"),
            // output: {
            //     dir: "dist",
            //     entryFileNames: "[name].js",
            //     chunkFileNames: "[name].js",
            //     assetFileNames: "[name][extname]"
            // }
        },
        //传递给 @rollup/plugin-commonjs 插件的选项。
        commonjsOptions: {},
        //传递给 @rollup/plugin-dynamic-import-vars 的选项。
        dynamicImportVarsOptions: {},
        // lib: {
        //     //库模式
        //     entry: path.resolve(__dirname, "index.js"),
        //     name: "index",
        //     formats: ["es", "cjs", "umd"],
        //     fileName: "index.js" //fileName 是输出的包文件名
        // },
        manifest: false, //当设置为 true，构建后将会生成 manifest.json 文件，
        minify: false, //设置为 false 可以禁用最小化混淆
        // terserOptions: {},
        emptyOutDir: true, //清空输出目录
        copyPublicDir: false, //默认情况下，Vite 会在构建阶段将 publicDir 目录中的所有文件复制到 outDir 目录中
        reportCompressedSize: true, //启用/禁用 gzip 压缩大小报告。
        chunkSizeWarningLimit: 500 //规定触发警告的 chunk 大小。（以 kbs 为单位）
    }
});
