import { createApp } from "vue";
import App from "./App.vue";

// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";

import "~/styles/index.scss";
import "uno.css";

import router from './router/index.ts'


const app = createApp(App);
app.use(router);
app.mount("#app");
