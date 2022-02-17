import Vue from "vue";
import Vuex from "vuex";
import theme from "./theme";
import lang from "./lang";
import crypto from "./crypto";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		theme,
		lang,
		crypto,
	},
});
