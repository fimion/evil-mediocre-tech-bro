import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { AblyClient } from "@/utils/ably";

AblyClient.connection.on("connected", e => {
  console.log("ably connected", e);
});

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
