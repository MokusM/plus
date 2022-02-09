import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/Home",
		name: "Home",
		component: Home,
	},
	{
		path: "/PrivacyPolicy",
		name: "PrivacyPolicy",
		component: () => import(/* webpackChunkName: "TermsUse" */ "../views/PrivacyPolicy.vue"),
		meta: {
			breadcrumb: [{ name: "Plus", link: "Home" }, { name: "Политика конфиденциальности" }],
		},
	},
	{
		path: "/TermsUse",
		name: "TermsUse",
		component: () => import(/* webpackChunkName: "TermsUse" */ "../views/TermsUse.vue"),
		meta: {
			breadcrumb: [{ name: "Plus", link: "Home" }, { name: "Правила пользования" }],
		},
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
