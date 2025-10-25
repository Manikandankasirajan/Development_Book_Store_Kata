import { BOOK_PRICE, DISCOUNT_RULES } from "../data/constants";

export default function calculatePriceAfterDiscount(cart) {
	const booksQuantity = cart.length;
	const priceBeforeDiscount = booksQuantity * BOOK_PRICE;
	const discountPercentage = DISCOUNT_RULES[booksQuantity];
	const discountPrice = priceBeforeDiscount * (discountPercentage / 100);
	const priceAfterDiscount = priceBeforeDiscount - discountPrice;
	return Math.floor(priceAfterDiscount);
}
