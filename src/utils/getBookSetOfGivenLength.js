export default function getBookSetOfGivenLength(bookSets, length) {
	return bookSets.find((bookSet) => bookSet.length === length);
}
