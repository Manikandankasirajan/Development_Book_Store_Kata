import isCartEmpty from "./utils/isCartEmpty";
import { BOOK_PRICE } from "./data/constants";

export default function bookStore(cart) {
	if (isCartEmpty(cart)) {
		return "The Cart is Empty...";
	} else {
		const booksQuantity = cart.length;
		const totalPrice = booksQuantity * BOOK_PRICE;
		return totalPrice;
	}
}
