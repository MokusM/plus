import api from "@/modules/api";

const types = {
	SET_CRUPTO: "SET_CRUPTO",
	EXCHANGE_CRUPTO: "EXCHANGE_CRUPTO",
};
const state = () => ({
	cryptos: [],
	cryptosLoaded: false,
	rate: 0,
});

const getters = {
	cryptos(state) {
		return state.cryptos;
	},

	cryptosLoaded(state) {
		return state.cryptosLoaded;
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

	async fetchRate({ commit }, { base, quote }) {
		try {
			const rate = await api.getRate({ base, quote });
			commit(types.EXCHANGE_CRUPTO, rate);
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
	[types.EXCHANGE_CRUPTO](state, rate) {
		state.rate = rate;
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
