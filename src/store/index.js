import Vue from "vue";
import Vuex from "vuex";
import faq from "./faq";
import theme from "./theme";
import lang from "./lang";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		faq,
		theme,
		lang,
	},
});
