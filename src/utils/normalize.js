export function normalizeCryptos(exchange) {
	return {
		id: exchange.id,
		title: exchange.name,
		icon: exchange.logo_url,
	};
}
export function normalizeRate(rate) {
	return {
		id: rate.currency,
		rate: rate.rate,
	};
}
