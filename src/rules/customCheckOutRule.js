import calculatePriceAfterDiscount from "../utils/calculatePriceAfterDiscount";
import createBookMapWithTitleAndCount from "../utils/createBookMapWithTitleAndCount";
import createBookSetsFromBookMap from "../utils/createBookSetsFromBookMap";
import createOptimisedBookSets from "../utils/createOptimisedBookSets";
import createBookSetAndCountMap from "../utils/createBookSetAndCountMap";
import canOptimiseBookSets from "../utils/canOptimiseBookSets";

export default function customCheckOutRule(cart) {
	const bookMap = createBookMapWithTitleAndCount(cart);
	let bookSets = createBookSetsFromBookMap(bookMap);
	const bookSetAndCountMap = createBookSetAndCountMap(bookSets);
	if (canOptimiseBookSets(bookSetAndCountMap)) {
		bookSets = createOptimisedBookSets(bookSets, bookSetAndCountMap);
	}
	let total = 0;
	for (const bookSet of bookSets) {
		total += calculatePriceAfterDiscount(bookSet);
	}
	return total;
}
