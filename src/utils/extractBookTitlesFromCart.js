export default function extractBookTitlesFromCart(cart) {
	return cart.map((book) => book.title);
}
