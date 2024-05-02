import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

//記得先創建一個vue實例 然後再調用 不然會無法顯示element-plus
//錯誤示範:此為創建兩實例 而無法顯示
//createApp(App).use(ElementPlus);
//createApp(App).mount("#app");
//------------------------------------------
const app = createApp(App);

app.use(ElementPlus); //註冊elementPlus
app.mount("#app"); //掛載到DOM上
