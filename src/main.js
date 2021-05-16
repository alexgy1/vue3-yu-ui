import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-theme-chalk";

//for easy usage we can  reigster global component
// import Menu from "@/components/Menu";
// import MenuItem from "@/components/MenuItem";
// import SubMenu from "@/components/SubMenu";
// Vue.component("Menu", Menu);
// Vue.component("MenuItem", MenuItem);
// Vue.component("SubMenu", SubMenu);

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
