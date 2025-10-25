import calculatePriceAfterDiscount from "../utils/calculatePriceAfterDiscount";
export default function defaultCheckOutRule(cart) {
	return calculatePriceAfterDiscount(cart);
}
