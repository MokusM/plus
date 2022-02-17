const endpoints = {
	baseURL: process.env.API_URL || "https://api.nomics.com/v1",
	API_KEY: "a571536191ef402a2c6eebdeffe9858b10896e03",

	list() {
		return `/currencies`;
	},

	icons() {
		return `exchanges/icons/sm`;
	},

	exchangerate() {
		return `/exchange-rates`;
	},
};

export default endpoints;
