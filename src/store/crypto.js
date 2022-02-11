import api from "@/modules/api";

const types = {
	SET_CRUPTO: "SET_CRUPTO",
	RATE_CRUPTO: "RATE_CRUPTO",
};
const state = () => ({
	cryptos: [],
	cryptosLoaded: false,
	rate: {},
});

const getters = {
	cryptos(state) {
		return state.cryptos;
	},

	cryptosLoaded(state) {
		return state.cryptosLoaded;
	},

	rate(state) {
		return state.rate;
	},
};

const actions = {
	async fetchCryptos({ commit }, filters) {
		try {
			const cryptos = await api.getCryptos(filters);
			commit(types.SET_CRUPTO, cryptos);
		} catch (error) {
			throw error;
		}
	},

	async fetchRate({ commit }) {
		try {
			const rate = await api.getRate();
			commit(types.RATE_CRUPTO, rate);
		} catch (error) {
			throw error;
		}
	},
};

const mutations = {
	[types.SET_CRUPTO](state, cryptos) {
		state.cryptos = cryptos;
		state.cryptosLoaded = true;
	},
	[types.RATE_CRUPTO](state, rate) {
		state.rate = [...rate];
	},

	// [types.ADD_PHOTOS](state, photos) {
	// 	state.photos = [...state.photos, ...photos];
	// },

	// [types.UPDATE_PHOTO](state, photoId) {
	// 	state.photos = state.photos.filter((photo) => photo.id !== photoId);
	// },
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
