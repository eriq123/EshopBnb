require("./bootstrap");

import VueExcelXlsx from "vue-excel-xlsx";

window.Vue = require("vue");
import vuetify from "./vuetify/index";
import store from "./vuex/index";
Vue.use(VueExcelXlsx);

Vue.component("app-header-sidebar", require("./components/App.vue").default);

const app = new Vue({
    el: "#app",
    vuetify,
    store,
    components: {
        "app-units": () => import("./components/pages/units/convertContainer.vue"),
        "app-account": () => import("./components/pages/accountContainer.vue"),
        "app-product-raw": () =>
            import("./components/pages/products/rawContainer.vue"),
        "app-product-assembled": () =>
            import("./components/pages/products/assembledContainer.vue"),
        "app-product-flow": () =>
            import("./components/pages/inventory/flowContainer.vue"),
        "app-product-report": () =>
            import("./components/pages/inventory/reportContainer.vue")
    }
});
// render: h => h(App),
