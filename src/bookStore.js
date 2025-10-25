import calculatePrice from "./utils/calculatePrice";
import isCartEmpty from "./utils/isCartEmpty";

export default function bookStore(cart) {
	if (isCartEmpty(cart)) {
		return "The Cart is Empty...";
	} else {
		return calculatePrice(cart);
	}
}
