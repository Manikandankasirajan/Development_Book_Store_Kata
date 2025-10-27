import getOptimizationPossibilityCount from "./getOptimizationPossibilityCount";
import getBookSetOfGivenLength from "./getBookSetOfGivenLength";

export default function createOptimisedBookSets(bookSets, bookSetAndCountMap) {
	const optimizationPossibilityCount =
		getOptimizationPossibilityCount(bookSetAndCountMap);

	for (let i = 0; i < optimizationPossibilityCount; i++) {
		const bookSetOf5 = getBookSetOfGivenLength(bookSets, 5);
		const bookSetOf3 = getBookSetOfGivenLength(bookSets, 3);
		bookSetOf3.push(bookSetOf5.pop(bookSetOf5.length - 1));
	}

	return bookSets;
}
