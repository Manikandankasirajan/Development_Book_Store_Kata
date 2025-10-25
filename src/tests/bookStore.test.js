import bookStore from "../bookStore";
import { BOOK_LIST } from "../data/constants";

describe("Test cases for Development_Book_Store_Kata", () => {
	test("test case to return 'The Cart is Empty...' if the cart is empty ", () => {
		const cart = [];
		expect(bookStore(cart)).toBe("The Cart is Empty...");
	});

	describe("Test cases to validate when cart has only unique books without dublicate entries", () => {
		test("test case to return actual price of the book if the cart has only one book", () => {
			const cart = BOOK_LIST.slice(0, 1);
			expect(bookStore(cart)).toBe(50);
		});
		test("test case to return final price of the books after considering the discount percentage of 5% for purchase of 2 unique books from the list", () => {
			const cart = BOOK_LIST.slice(0, 2);
			expect(bookStore(cart)).toBe(95);
		});
		test("test case to return final price of the books after considering the discount percentage of 10% for purchase of 3 unique books from the list", () => {
			const cart = BOOK_LIST.slice(0, 3);
			expect(bookStore(cart)).toBe(135);
		});
		test("test case to return final price of the books after considering the discount percentage of 20% for purchase of 4 unique books from the list", () => {
			const cart = BOOK_LIST.slice(0, 4);
			expect(bookStore(cart)).toBe(160);
		});
		test("test case to return final price of the books after considering the discount percentage of 25% for purchase of 5 unique books from the list", () => {
			const cart = BOOK_LIST.slice(0);
			expect(bookStore(cart)).toBe(187);
		});
	});
	describe("Test cases to validate when cart has  dublicate entries of books from the list", () => {
		test("test case to return final price of the books after applying the discounts if applicable when the cart has duplicate entries of books from the list", () => {
			const cart = [
				{
					bookId: 1,
					title: "Clean Code",
					author: "Robert Martin",
					publishedYear: 2008,
				},
				{
					bookId: 1,
					title: "Clean Code",
					author: "Robert Martin",
					publishedYear: 2008,
				},
			];
			expect(bookStore(cart)).toBe(100);
		});
	});
});
