import canOptimiseBookSets from "./canOptimiseBookSets";
import createBookSetAndCountMap from "./createBookSetAndCountMap";
import createPlaceholderBookSets from "./createPlaceholderBookSets";

export default function createOptimisedBookSets(bookSets) {
	const bookSetAndCountMap = createBookSetAndCountMap(bookSets);

	if (canOptimiseBookSets(bookSetAndCountMap)) {
		const optimisationPairs = Math.min(
			bookSetAndCountMap[3],
			bookSetAndCountMap[5]
		);

		for (let i = 0; i < optimisationPairs; i++) {
			bookSetAndCountMap[3]--;
			bookSetAndCountMap[5]--;
			bookSets.push(createPlaceholderBookSets(4));
			bookSets.push(createPlaceholderBookSets(4));
		}

		const optimisedBookSets = bookSets.filter(
			(set) => set.length !== 5 && set.length !== 3
		);

		for (const [bookSetSize, count] of Object.entries(bookSetAndCountMap)) {
			for (let i = 0; i < count; i++) {
				optimisedBookSets.push(
					createPlaceholderBookSets(parseInt(bookSetSize))
				);
			}
		}

		return optimisedBookSets;
	} else {
		return bookSets;
	}
}
