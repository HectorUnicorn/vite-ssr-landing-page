## This is a landing page actually used in production environment.

With:

​     **Vite SSR + Vue3 + Express + UnoCSS + TailwindCSS Preset + TS**



for the landing page of online Commemoration Service product: 

**lifepage.cc**



在线纪念产品: 人生一页

website: [https://lifepage.cc](https://lifepage.cc)
网址：[https://lifepage.cc](https://lifepage.cc)

![图片](./website.png)



node version is: `v20`

The dev process is like a simple node project:
```shell
npm install
npm run dev
npm run preview # production preview
```



deploy process takes me longer time:

# Deploy follow pm2 deploy process

https://medium.com/@a_farag/deploying-a-node-js-project-with-pm2-in-production-mode-fc0e794dc4aa



## 如何部署：

install the pm2 following the upper instructions

根据上述链接安装pm2


run the command in project root directory
服务端部署：在根目录在运行这个命令


```shell
git clone https://github.com/HectorUnicorn/vite-ssr-landing-page
cd vite-ssr-landing-page

npm run build

pm2 stop server
pm2 start pm2.config.cjs --watch
pm2 save
pm2 describe server
```



程序会在`pm2.config.cjs`配置的8888端口运行, 使用nginx反向代理(proxy)，代理到8888端口

```
module.exports = {
  apps: [
    {
      name: "server",
      script: "./server.js",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: "8888",
      },
      out_file: "./logs/out.log",
      error_file: "./logs/error.log",
      log_date_format: "YYYY-MM-DD HH:mm Z",
    },
  ],
};
```



### 资源文件
代码整个使用git来管理，当程序在服务端跑起来，直接npm run build即可更新。

但是同名的图片文件或者url要注意，会被浏览器缓存；更新需要更换文件名或链接；或设置文件的缓存时间。



## Reference: Vite SSR Guide

Build with Vite SSR sample: https://cn.vitejs.dev/guide/ssr.html

```
# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
```
