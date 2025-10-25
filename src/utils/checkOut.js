import hasDuplicateItemsInCart from "./hasDuplicateItemsInCart";
import defaultCheckOutRule from "../rules/defaultCheckOutRule";
import customCheckOutRule from "../rules/customCheckOutRule";

export default function checkOut(cart) {
	if (hasDuplicateItemsInCart(cart)) {
		return customCheckOutRule(cart);
	} else {
		return defaultCheckOutRule(cart);
	}
}
