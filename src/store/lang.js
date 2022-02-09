import createPersistedState from "vuex-persistedstate";
import i18n, { selectedLocale } from "@/plugins/i18n";
const state = () => ({
	locale: selectedLocale,
});

const getters = {
	theme: (state) => state.theme,
};

const mutations = {
	UPDATE_LOCALE(state, newLocale) {
		state.locale = newLocale;
	},
};

const actions = {
	changeLocale({ commit }, newLocale) {
		i18n.locale = newLocale;
		commit("UPDATE_LOCALE", newLocale);
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
	plugins: [createPersistedState()],
};
