import calculatePriceAfterDiscount from "./calculatePriceAfterDiscount";
export default function checkOut(cart) {
	return calculatePriceAfterDiscount(cart);
}
