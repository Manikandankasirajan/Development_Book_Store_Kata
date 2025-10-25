import isCartEmpty from "./utils/isCartEmpty";
import checkOut from "./utils/checkOut";

export default function bookStore(cart) {
	if (isCartEmpty(cart)) {
		return "The Cart is Empty...";
	} else {
		return checkOut(cart);
	}
}
