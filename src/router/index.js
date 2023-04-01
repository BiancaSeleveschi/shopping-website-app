import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Search from "@/views/Search";
import Men from "@/views/Men";
import Women from "@/views/Women";
import ProductDetails from "@/views/ProductDetails";
import WO23Collection from "@/views/WO23Collection";
import ME23Collection from "@/views/ME23Collection";
import About from "@/views/About";
import PrivacyPolicy from "@/views/PrivacyPolicy";
import TermsConditions from "@/views/TermsConditions";
import CookieStatement from "@/views/CookieStatement";
import Service from "@/views/Service";
import Checkout from "@/views/Checkout";
import Register from "@/views/Register";
import Login from "@/views/Login";
import Favorites from "@/views/Favorites";
import OrderSummary from "@/views/OrderSummary";
import PasswordReset from "@/views/PasswordReset";
import Order from "@/views/Order";
import PaymentInformation from "@/views/PaymentInformation";
import Settings from "@/views/Settings";
import Cards from "@/views/Cards";
import Orders from "@/views/Orders";
import Returns from "@/views/Returns";
import Addresses from "@/views/Addresses";


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: About,
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
        path: "/shop/:id",
        name: "ProductDetails",
        component: ProductDetails,
        props: true,
    }, {
        path: "/payment",
        name: "PaymentInformation",
        component: PaymentInformation,
    },
    {
        path: "/order/summary",
        name: "OrderSummary",
        component: OrderSummary,
    },
    {
        path: "/favorites",
        name: "Favorites",
        component: Favorites,
        props: true,
    },
    {
        path: "/privacy/policy",
        name: "PrivacyPolicy",
        component: PrivacyPolicy,
    },
    {
        path: "/settings",
        name: "Settings",
        component: Settings,
    }, {
        path: "/cards",
        name: "Cards",
        component: Cards,
    }, {
        path: "/orders",
        name: "Orders",
        component: Orders,
    }, {
        path: "/returns",
        name: "Returns",
        component: Returns,
    }, {
        path: "/addresses",
        name: "Addresses",
        component: Addresses,
    }, {
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
        name: "Service",
        component: Service,
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
        props: true,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    }, {
        path: "/order",
        name: "Order",
        component: Order,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    }, {
        path: "/password",
        name: "PasswordReset",
        component: PasswordReset,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
