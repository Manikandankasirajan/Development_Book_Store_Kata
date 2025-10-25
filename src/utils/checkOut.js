import hasDuplicateItemsInCart from "./hasDuplicateItemsInCart";
import calculatePriceAfterDiscount from "./calculatePriceAfterDiscount";
export default function checkOut(cart) {
	if (!hasDuplicateItemsInCart(cart)) {
		return calculatePriceAfterDiscount(cart);
	}
}
