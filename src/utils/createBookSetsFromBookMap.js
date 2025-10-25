export default function createBookSetsFromBookMap(bookMap) {
	const bookSets = [];
	while (Object.values(bookMap).some((count) => count > 0)) {
		const currentBookSet = [];
		for (const [title, count] of Object.entries(bookMap)) {
			if (count > 0) {
				currentBookSet.push(title);
				bookMap[title] -= 1;
			}
		}
		bookSets.push(currentBookSet);
	}
	return bookSets;
}
