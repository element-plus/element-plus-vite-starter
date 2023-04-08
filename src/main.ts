// import { createApp } from 'vue'
// import App from './App.vue'

// // import "~/styles/element/index.scss";

// // import ElementPlus from "element-plus";
// // import all element css, uncommented next line
// // import "element-plus/dist/index.css";

// // or use cdn, uncomment cdn link in `index.html`

// import '~/styles/index.scss'
// import 'uno.css'

// // If you want to use ElMessage, import it.
// import 'element-plus/theme-chalk/src/message.scss'

// const app = createApp(App)
// // app.use(ElementPlus);
// app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css';
// import 'element-plus/theme-chalk/src/message.scss'

import '~/styles/index.scss'
import 'uno.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
