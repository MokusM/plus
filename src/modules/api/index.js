import endpoints from "./endpoints";
import request from "./request";
import { normalizeCryptos } from "@/utils/normalize";
const CoinGecko = require("coingecko-api");

const CoinGeckoClient = new CoinGecko();

class APIClient {
	constructor() {
		this.endpoints = endpoints;
		this.request = request;
	}

	async getCryptos() {
		const { data } = await CoinGeckoClient.coins.all();
		return data.map(normalizeCryptos);
	}
	async getRate({ base, quote }) {
		const { data } = await CoinGeckoClient.exchangeRates.all();
		console.log(data);

		return data.map(normalizeCryptos);

		return data;
	}

	// async refreshAccessToken(refreshToken) {
	// 	const {
	// 		data: { access_token: accessToken },
	// 	} = await this.request({
	// 		method: "post",
	// 		url: this.endpoints.refresh(),
	// 		headers: {
	// 			authorization: `Bearer ${refreshToken}`,
	// 		},
	// 	});

	// 	return {
	// 		accessToken,
	// 	};
	// }

	// async logout() {
	// 	return this.request({
	// 		method: "delete",
	// 		url: this.endpoints.logout(),
	// 	});
	// }

	// async getUserProfile() {
	// 	const { data } = await this.request({
	// 		method: "get",
	// 		url: this.endpoints.userProfile(),
	// 	});
	// 	return normalizeUserProfile(data);
	// }

	// async getPhotos({ offset = 0, limit = 6, createdTo, createdFrom, nsfwRatingMin, nsfwRatingMax } = {}) {
	// 	const params = {
	// 		offset,
	// 		limit,
	// 		created_from: createdFrom,
	// 		created_to: createdTo,
	// 		nsfw_rating_min: nsfwRatingMin,
	// 		nsfw_rating_max: nsfwRatingMax,
	// 	};

	// 	const { data } = await this.request({
	// 		method: "get",
	// 		url: this.endpoints.photos(),
	// 		params: pickBy(params),
	// 	});

	// 	return data.map(normalizeUserPhotos);
	// }

	// async moderatePhoto({ isConfirmed, nsfwClass, photoId }) {
	// 	const body = {
	// 		is_confirmed: isConfirmed,
	// 		nsfw_class: nsfwClass,
	// 	};

	// 	const { data } = await this.request({
	// 		method: "post",
	// 		url: this.endpoints.moderate(photoId),
	// 		data: body,
	// 	});

	// 	return data;
	// }

	// async getUsers({ offset = 0, limit = 20, name, username, phone, openId, regFrom, regTo, photosBlockedFrom, photosBlockedTo, birthdayFrom, birthdayTo, radioGroup } = {}) {
	// 	const params = {
	// 		offset,
	// 		limit,
	// 		name: name,
	// 		username: username,
	// 		phone: phone,
	// 		open_id: openId,
	// 		reg_from: regFrom,
	// 		reg_to: regTo,
	// 		photos_blocked_from: photosBlockedFrom,
	// 		photos_blocked_to: photosBlockedTo,
	// 		birhtday_from: birthdayFrom,
	// 		birhtday_to: birthdayTo,
	// 		is_blocked: radioGroup,
	// 	};

	// 	const { data } = await this.request({
	// 		method: "get",
	// 		url: this.endpoints.users(),
	// 		params: pickBy(params),
	// 	});

	// 	return data.map(normalizeUsers);
	// }

	// async updateUserBlockStatus({ isBlocked, userId }) {
	// 	const body = {
	// 		is_blocked: isBlocked,
	// 	};

	// 	const { data } = await this.request({
	// 		method: "post",
	// 		url: this.endpoints.userBlock(userId),
	// 		data: body,
	// 	});

	// 	return data;
	// }

	// async getCampaignUsers(filters) {
	// 	const params = {
	// 		offset: filters.offset || 0,
	// 		limit: filters.limit || 20,
	// 		reg_from: filters.regFrom,
	// 		reg_to: filters.regTo,
	// 		birthday_from: filters.birthdayFrom,
	// 		birthday_to: filters.birthdayTo,
	// 		last_active_from: filters.lastActiveFrom,
	// 		last_active_to: filters.lastActiveTo,
	// 		events_count_from: filters.eventsCountFrom,
	// 		events_count_to: filters.eventsCountTo,
	// 		following_from: filters.followingFrom,
	// 		following_to: filters.followingTo,
	// 		followers_from: filters.followersFrom,
	// 		followers_to: filters.followersTo,
	// 	};

	// 	const { data } = await this.request({
	// 		method: "get",
	// 		url: this.endpoints.campaignsUsers(),
	// 		params: pickBy(params),
	// 	});

	// 	return data.map(normalizeUsers);
	// }

	// async campaignCreate(payload) {
	// 	const body = {
	// 		title: payload.title,
	// 		content: payload.content,
	// 		reg_from: payload.regFrom,
	// 		reg_to: payload.regTo,
	// 		birthday_from: payload.birthdayFrom,
	// 		birthday_to: payload.birthdayTo,
	// 		last_active_from: payload.lastActiveFrom,
	// 		last_active_to: payload.lastActiveTo,
	// 		events_count_from: payload.eventsCountFrom,
	// 		events_count_to: payload.eventsCountTo,
	// 		following_from: payload.followingFrom,
	// 		following_to: payload.followingTo,
	// 		followers_from: payload.followersFrom,
	// 		followers_to: payload.followersTo,
	// 	};

	// 	const { data } = await this.request({
	// 		method: "post",
	// 		url: this.endpoints.campaigns(),
	// 		data: body,
	// 	});

	// 	return data;
	// }

	// async getCampaigns({ limit = 20, offset = 0 } = {}) {
	// 	const params = {
	// 		limit,
	// 		offset,
	// 	};

	// 	const { data } = await this.request({
	// 		method: "get",
	// 		url: this.endpoints.campaigns(),
	// 		params: pickBy(params),
	// 	});

	// 	return data.map(normalizeCampaign);
	// }
}

export default new APIClient();
