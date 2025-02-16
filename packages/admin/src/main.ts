// const s : string = 'Hello Vite 666'
// document.querySelector('#app')['innerText'] = s

import { createApp, h } from "vue";

// import generatedRoutes from 'virtual:generated-pages'

import { createRouter, createWebHistory } from "vue-router";

import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

import "./css/main.css";
import "uno.css";
import NProgress from "nprogress"; // 进度条
import "nprogress/nprogress.css"; //这个样式必须引入

// import * as i18n from "./modules/i18n";

import { createI18n } from "vue-i18n";
import en from "~/locales/en.json";

//
// import routes from "~pages";

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

import App from "./App.vue";
// const App = {
//   render() {
//     return h("div", null, [h("div", null, String("Hello Vue"))]);
//   },
// };
const app = createApp(App);

NProgress.inc(0.2); //递增进度条
NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

app.use(router);

// const i18n = createI18n({
//   legacy: false,
//   locale: 'en',
//   messages : {
//     en
//   }
// })
// app.use(i18n);

Object.values(import.meta.globEager("./modules/*.ts")).forEach((i) =>
  i.install?.({ app })
);

app.mount("#app");
