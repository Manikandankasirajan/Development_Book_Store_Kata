import calculatePriceAfterDiscount from "../utils/calculatePriceAfterDiscount";
import createBookMapWithTitleAndCount from "../utils/createBookMapWithTitleAndCount";
import createBookSetsFromBookMap from "../utils/createBookSetsFromBookMap";
import createOptimisedBookSets from "../utils/createOptimisedBookSets";

export default function customCheckOutRule(cart) {
	const bookMap = createBookMapWithTitleAndCount(cart);
	let bookSets = createBookSetsFromBookMap(bookMap);
	const optimisedBookSets = createOptimisedBookSets(bookSets);
	let total = 0;
	for (const optimisedBookSet of optimisedBookSets) {
		total += calculatePriceAfterDiscount(optimisedBookSet);
	}
	return total;
}
