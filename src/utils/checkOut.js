import hasDuplicateItemsInCart from "./hasDuplicateItemsInCart";
import defaultCheckOutRule from "../rules/defaultCheckOutRule";

export default function checkOut(cart) {
	if (!hasDuplicateItemsInCart(cart)) {
		return defaultCheckOutRule(cart);
	}
}
