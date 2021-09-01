import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";
// or use cdn, recommended
// see index.html

const app = createApp(App);
app.use(ElementPlus);
app.mount("#app");
