import calculatePriceAfterDiscount from "../utils/calculatePriceAfterDiscount";
import extractBookTitlesFromCart from "../utils/extractBookTitlesFromCart";
import createBookMapWithTitleAndCount from "../utils/createBookMapWithTitleAndCount";
import createBookSetsFromBookMap from "../utils/createBookSetsFromBookMap";

export default function customCheckOutRule(cart) {
	const bookTitlesFromCart = extractBookTitlesFromCart(cart);
	const bookMap = createBookMapWithTitleAndCount(bookTitlesFromCart);
	let bookSets = createBookSetsFromBookMap(bookMap);
	const bookSetAndCountMap = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
	for (const bookSet of bookSets) {
		if (bookSet.length === 3 || bookSet.length === 5) {
			bookSetAndCountMap[bookSet.length]++;
		}
	}
	if (bookSetAndCountMap[3] > 0 && bookSetAndCountMap[5] > 0) {
		const optimisationPairs = Math.min(
			bookSetAndCountMap[3],
			bookSetAndCountMap[5]
		);

		for (let i = 0; i < optimisationPairs; i++) {
			bookSetAndCountMap[3]--;
			bookSetAndCountMap[5]--;
			bookSets.push(Array(4).fill("Placeholder"));
			bookSets.push(Array(4).fill("Placeholder"));
		}

		const optimisedBookSets = bookSets.filter(
			(set) => set.length !== 5 && set.length !== 3
		);

		bookSets = optimisedBookSets;
	}

	let total = 0;
	for (const bookSet of bookSets) {
		total += calculatePriceAfterDiscount(bookSet);
	}
	return total;
}
