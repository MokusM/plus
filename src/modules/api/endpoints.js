const endpoints = {
	baseURL: process.env.API_URL || "https://api.coingecko.com/",

	list() {
		return ``;
	},

	icons() {
		return `exchanges/icons/sm`;
	},

	exchangerate(rateId) {
		return `exchangerate/${rateId.base}/${rateId.quote}`;
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
