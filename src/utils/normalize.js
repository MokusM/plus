export function normalizeCryptos(exchange) {
	return {
		id: exchange.id,
		title: exchange.name,
		icon: exchange.image.small,
	};
}
