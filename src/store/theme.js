const state = () => ({
	theme: "dark",
});

const getters = {
	theme: (state) => state.theme,
};

const mutations = {
	SET_THEME(state, theme) {
		state.theme = theme;
		if (!state.theme) {
			console.error(`[Error]: Cannot find theme "${theme}"`);
		} else sessionStorage.setItem("current-theme", theme);
	},
};

const actions = {
	theme({ commit }, theme) {
		commit("SET_THEME", theme);
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
