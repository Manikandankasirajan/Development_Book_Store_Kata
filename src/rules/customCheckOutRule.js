import calculatePriceAfterDiscount from "../utils/calculatePriceAfterDiscount";
import extractBookTitlesFromCart from "../utils/extractBookTitlesFromCart";
import createBookMapWithTitleAndCount from "../utils/createBookMapWithTitleAndCount";
import createBookSetsFromBookMap from "../utils/createBookSetsFromBookMap";
export default function customCheckOutRule(cart) {
	const bookTitlesFromCart = extractBookTitlesFromCart(cart);
	const bookMap = createBookMapWithTitleAndCount(bookTitlesFromCart);
	const bookSets = createBookSetsFromBookMap(bookMap);
	let total = 0;
	for (const bookSet of bookSets) {
		total += calculatePriceAfterDiscount(bookSet);
	}
	return total;
}
