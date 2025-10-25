export default function createBookMapWithTitleAndCount(bookTitlesFromCart) {
	const bookMap = {};
	for (const book of bookTitlesFromCart) {
		bookMap[book] = (bookMap[book] || 0) + 1;
	}
	return bookMap;
}
