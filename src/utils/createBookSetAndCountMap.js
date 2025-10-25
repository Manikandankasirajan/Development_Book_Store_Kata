export default function createBookSetAndCountMap(bookSets) {
	const bookSetAndCountMap = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
	for (const bookSet of bookSets) {
		if (bookSet.length === 3 || bookSet.length === 5) {
			bookSetAndCountMap[bookSet.length]++;
		}
	}
	return bookSetAndCountMap;
}
