import { createApp } from "vue";
import App from "./App.vue";
import mixins from "./mixins";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(router);
app.mixin(mixins);
app.use(store);
app.mount("#app");

// Kakao Key
window.Kakao.init("651e176a9a60e5397d000ee5eef91ee8");
