import bookStore from "../bookStore";
import { BOOK_LIST } from "../data/constants";

describe("Test cases for Development_Book_Store_Kata", () => {
	test("test case to return 'The Cart is Empty...' if the cart is empty ", () => {
		const cart = [];
		expect(bookStore(cart)).toBe("The Cart is Empty...");
	});
	test("test case to return actual price of the book if the cart has only one book", () => {
		const cart = BOOK_LIST.slice(0, 1);
		expect(bookStore(cart)).toBe(50);
	});
});
