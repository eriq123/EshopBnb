require("./bootstrap");

window.Vue = require("vue");
import vuetify from "./vuetify/index";
import store from "./vuex/index";

Vue.component("app-header-sidebar", require("./components/App.vue").default);

const app = new Vue({
    el: "#app",
    vuetify,
    store,
    components: {
        "app-account": () => import("./components/pages/accountContainer.vue"),
        "app-product-raw": () =>
            import("./components/pages/products/rawContainer.vue"),
        "app-product-assembled": () =>
            import("./components/pages/products/assembledContainer.vue"),
        "app-product-flow": () =>
            import("./components/pages/inventory/flowContainer.vue"),
        "app-product-report": () =>
            import("./components/pages/inventory/reportContainer.vue")
    },
    beforeCreate: function() {
        axios
            .get("/user")
            .then(response => {
                this.$store.commit("setUser", response.data);
            })
            .catch(error => {
                if (error.response) {
                    this.$store.commit("errorSnackbar");
                }
            });
    }
});
// render: h => h(App),
