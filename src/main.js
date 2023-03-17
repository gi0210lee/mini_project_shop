import { createApp } from "vue";
import App from "./App.vue";
import mixins from "./mixins";
import router from "./router";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);
app.use(router);
app.mixin(mixins);
app.use(store);
app.use(VueSweetalert2);
app.mount("#app");

// Kakao Key
window.Kakao.init("651e176a9a60e5397d000ee5eef91ee8");
