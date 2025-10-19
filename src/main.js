import { createApp } from "vue";
import "./style.css";
import router from "./Router";
import App from "./app.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
