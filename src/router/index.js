import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Search from "@/views/Search";
import Men from "@/views/Men";
import Women from "@/views/Women";
import ProductDetails from "@/views/ProductDetails";
import WO23Collection from "@/views/WO23Collection";
import ME23Collection from "@/views/ME23Collection";
import AboutView from "@/views/AboutView";
import PrivacyPolicy from "@/views/PrivacyPolicy";
import TermsConditions from "@/views/TermsConditions";
import CookieStatement from "@/views/CookieStatement";
import ServicePage from "@/views/ServicePage";
import CheckoutPage from "@/views/CheckoutPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/search",
    name: "search",
    component: Search,
  },
  {
    path: "/men",
    name: "Men",
    component: Men,
  },
  {
    path: "/me23/collection",
    name: "ME23Collection",
    component: ME23Collection,
  },
  {
    path: "/wo23/collection",
    name: "WO23Collection",
    component: WO23Collection,
  },
  {
    path: "/women",
    name: "Women",
    component: Women,
  },
  {
    path: "/shop/:gender/:id",
    name: "ProductDetails",
    component: ProductDetails,
    props: true,
  },
  {
    path: "/privacy/policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
  {
    path: "/terms",
    name: "TermsConditions",
    component: TermsConditions,
  },
  {
    path: "/cookie",
    name: "CookieStatement",
    component: CookieStatement,
  },
  {
    path: "/service",
    name: "ServicePage",
    component: ServicePage,
  },
  {
    path: "/checkout",
    name: "CheckoutPage",
    component: CheckoutPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
