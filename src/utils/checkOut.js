import hasDuplicateItemsInCart from "./hasDuplicateItemsInCart";
import defaultCheckOutRule from "../rules/defaultCheckOutRule";
import customCheckOutRule from "../rules/customCheckOutRule";

export default function checkOut(cart) {
	return hasDuplicateItemsInCart(cart)
		? customCheckOutRule(cart)
		: defaultCheckOutRule(cart);
}
