export default function hasDuplicateItemsInCart(cart) {
	const bookMap = {};
	for (const book of cart) {
		bookMap[book] = (bookMap[book] || 0) + 1;
	}
	return Object.values(bookMap).some((count) => count > 1) ? true : false;
}
