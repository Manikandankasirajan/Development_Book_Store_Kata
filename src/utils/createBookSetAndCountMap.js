export default function createBookSetAndCountMap(bookSets) {
	const bookSetAndCountMap = { 3: 0, 5: 0 };
	for (const bookSet of bookSets) {
		if (bookSet.length === 3 || bookSet.length === 5) {
			bookSetAndCountMap[bookSet.length] =
				(bookSetAndCountMap[bookSet.length] || 0) + 1;
		}
	}
	return bookSetAndCountMap;
}
