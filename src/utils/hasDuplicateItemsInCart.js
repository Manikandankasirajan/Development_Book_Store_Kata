export default function hasDuplicateItemsInCart(cart) {
	const bookTitlesFromCart = cart.map((book) => book.title);
	const bookMap = {};
	for (const book of bookTitlesFromCart) {
		bookMap[book] = (bookMap[book] || 0) + 1;
	}
	return Object.values(bookMap).some((count) => count > 1) ? true : false;
}
