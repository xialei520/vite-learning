# vite 4

## 依赖预构建

1. vite 对三方依赖进行路径补全，引入 lodash, 补全为 node_modules/.vite/deps/lodash
2. 对第三方依赖不同的导出格式，统一构建成 esmodule
3. 第三方依赖的依赖会集成到一个文件，不会出现加载所有依赖的情况

## 配置文件语法提示

1. 第一种方法 defineConfig

```js
import { defineConfig } from "vite";
export default defineConfig({});
```

2. 第二种方法

```js
/** @type import("vite").UserConfig */
export default {
  optimizeDeps: {},
};
```

## 配置环境变量

在 vite 中环境变量处理

vite 内置了 dotenv 这个三方库，会在启服务的时候自动读取**.env**文件，并解析这个文件中对应的环境变量，并将其注入到 process 对象下（但是 vite 考虑到和其他配置的一些冲突问题，他不会直接注入到 process 下）

涉及到 vite.config.js 的一些配置

- root
- envDir：用来配置当前环境变量的文件地址

vite 给我们提供了一些补偿措施：我们可以调用 vite 的 loadEnv 来手动确认 env 文件

.env: 所以环境都需要用到的环境变量
.env.development: 开发环境需要用到的环境变量（默认情况下 vite 将我们的开发环境取名为 development）
.env.production: 生产环境需要用到的环境变量（默认情况下 vite 将我们的生产环境取名为 production）

yarn dev --mode development 会将 mode 设置为 development 传进来（pnpm 命令无法获取 mode 值）

当我们调用 loadEnv 时，他会做如下几件事：

1. 直接找到.env 文件不解释，并解析其中的环境变量，放进一个对象
2. 会将传进来的 mode 这个变量的值进行拼接： **_.env.development_**,并根据我们提供的目录去取对应的配置文件并进行解析，并放进一个对象
3. 我们可以理解为：
   ```js
   const baseEnvConfig = 读取.env的配置;
   const modeEnvConfig = 读取env的相关配置;
   const lastEnvConfig = { ...baseEnvConfig, ...modeEnvConfig };
   ```

如果是客户端，vite 会将对应的环境变量注入到**import.meta.env**里面去
vite 做了一个拦截，他为了防止我们将隐私性的变量直接送进 import.meta.env 中，如果你的环境变量不是以 VITE 开头的，他就不会注入到客户端中去，如果我们想要更改这个前缀，可以去使用 envPrefix 配置

PS:为什么 vite.config.js 可以书写成 esmodule 的形式，是因为 vite 在读取 vite.config.js 的时候会率先用 node 去解析语法，如果发现你是 esmodule 规范就直接将 esmodule 规范替换成 commonjs 规范
