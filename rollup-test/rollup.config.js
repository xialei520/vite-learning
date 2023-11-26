//合并三方库
import resolve from "@rollup/plugin-node-resolve";
//支持commonjs的引入规范
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import path from "path";
export default {
  //入口文件路径
  input: "./src/index.js",

  //输出文件的内容
  output: [
    {
      format: "es",
      file: "dist/bundle.es.js",
      sourcemap: true,
    },
    // {
    //   format: "cjs",
    //   file: "dist/bundle.cjs.js",
    //   sourcemap: true,
    // },
  ],
  plugins: [
    commonjs(), //打包commonjs规范文件
    resolve(), //将三方模块内容进行打包
  ],
  external: ["lodash"],
};
