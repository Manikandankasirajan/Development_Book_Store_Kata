import calculatePriceAfterDiscount from "../utils/calculatePriceAfterDiscount";
export default function customCheckOutRule(cart) {
	const bookTitlesFromCart = cart.map((book) => book.title);
	const bookMap = {};
	for (const book of bookTitlesFromCart) {
		bookMap[book] = (bookMap[book] || 0) + 1;
	}
	const bookSets = [];
	while (Object.values(bookMap).some((count) => count > 0)) {
		const currentBookSet = [];
		for (const [title, count] of Object.entries(bookMap)) {
			if (count > 0) {
				currentBookSet.push(title);
				bookMap[title] -= 1;
			}
		}
		bookSets.push(currentBookSet);
	}
	let total = 0;
	for (const bookSet of bookSets) {
		total += calculatePriceAfterDiscount(bookSet);
	}
	return total;
}
