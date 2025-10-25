import isCartEmpty from "./utils/isCartEmpty";
import { BOOK_PRICE, DISCOUNT_RULES } from "./data/constants";

export default function bookStore(cart) {
	if (isCartEmpty(cart)) {
		return "The Cart is Empty...";
	} else {
		const booksQuantity = cart.length;
		const discountPercentage = DISCOUNT_RULES[booksQuantity];
		const priceBeforeDiscount = booksQuantity * BOOK_PRICE;
		const discountPrice = priceBeforeDiscount * (discountPercentage / 100);
		const priceAfterDiscount = priceBeforeDiscount - discountPrice;
		return Math.floor(priceAfterDiscount);
	}
}
