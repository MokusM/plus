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

	// refresh() {
	// 	return `/users/refresh`;
	// },

	// userProfile() {
	// 	return `/users/my`;
	// },

	// photos() {
	// 	return `/photos`;
	// },

	// moderate(eventId) {
	// 	const pathParams = eventId ? `/${eventId}` : "";
	// 	return `/photos/${pathParams}/moderate`;
	// },

	// userBlock(eventId) {
	// 	const pathParams = eventId ? `/${eventId}` : "";
	// 	return `/users/${pathParams}/block`;
	// },

	// users() {
	// 	return `/users`;
	// },

	// events(eventId) {
	// 	const pathParams = eventId ? `/${eventId}` : "";

	// 	return `/events${pathParams}`;
	// },

	// campaigns() {
	// 	return `/campaigns`;
	// },

	// campaignsUsers() {
	// 	return `/campaigns/users`;
	// },
};

export default endpoints;
