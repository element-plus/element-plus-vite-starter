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
import "~/styles/custom/common.scss";
import "uno.css";

import router from './router/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router);
app.mount("#app");
