export default function canOptimiseBookSets(bookSetAndCountMap) {
	return bookSetAndCountMap[3] > 0 && bookSetAndCountMap[5] > 0;
}
