import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/PrivacyPolicy",
		name: "PrivacyPolicy",
		component: () => import(/* webpackChunkName: "TermsUse" */ "../views/PrivacyPolicy.vue"),
		meta: {
			breadcrumb: [{ name: "Plus", link: "/" }, { name: "Политика конфиденциальности" }],
		},
	},
	{
		path: "/TermsUse",
		name: "TermsUse",
		component: () => import(/* webpackChunkName: "TermsUse" */ "../views/TermsUse.vue"),
		meta: {
			breadcrumb: [{ name: "Plus", link: "/" }, { name: "Правила пользования" }],
		},
	},
	{
		path: "/Exchange",
		name: "Exchange",
		component: () => import(/* webpackChunkName: "Exchange" */ "../views/Exchange.vue"),
		meta: {
			breadcrumb: [{ name: "Plus", link: "/" }, { name: "Обмен" }],
		},
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
