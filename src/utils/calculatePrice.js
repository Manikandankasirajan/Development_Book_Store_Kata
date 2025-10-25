import { BOOK_PRICE, DISCOUNT_RULES } from "../data/constants";

export default function calculatePrice(cart) {
	const booksQuantity = cart.length;
	const discountPercentage = DISCOUNT_RULES[booksQuantity];
	const priceBeforeDiscount = booksQuantity * BOOK_PRICE;
	const discountPrice = priceBeforeDiscount * (discountPercentage / 100);
	const priceAfterDiscount = priceBeforeDiscount - discountPrice;
	return Math.floor(priceAfterDiscount);
}
