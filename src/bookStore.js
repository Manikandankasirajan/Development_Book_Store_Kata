import checkOut from "./utils/checkOut";
import isCartEmpty from "./utils/isCartEmpty";

export default function bookStore(cart) {
	if (isCartEmpty(cart)) {
		return "The Cart is Empty...";
	} else {
		return checkOut(cart);
	}
}
