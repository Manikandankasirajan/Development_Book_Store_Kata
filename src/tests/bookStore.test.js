import bookStore from "../bookStore";
import { BOOK_LIST } from "../data/constants";

describe("Test cases for Development_Book_Store_Kata", () => {
	test("test case to return 'The Cart is Empty...' if the cart is empty ", () => {
		const cart = [];
		expect(bookStore(cart)).toBe("The Cart is Empty...");
	});

	describe("Test cases to validate when cart has only unique books without dublicate entries", () => {
		test("test case to return actual price of the book if the cart has only one book", () => {
			const cart = ["Clean Code"];
			expect(bookStore(cart)).toBe(50);
		});
		test("test case to return final price of the books after considering the discount percentage of 5% for purchase of 2 unique books from the list", () => {
			const cart = ["Clean Code", "The Clean Coder"];
			expect(bookStore(cart)).toBe(95);
		});
		test("test case to return final price of the books after considering the discount percentage of 10% for purchase of 3 unique books from the list", () => {
			const cart = ["Clean Code", "The Clean Coder", "Clean Architecture"];
			expect(bookStore(cart)).toBe(135);
		});
		test("test case to return final price of the books after considering the discount percentage of 20% for purchase of 4 unique books from the list", () => {
			const cart = [
				"Clean Code",
				"The Clean Coder",
				"Clean Architecture",
				"Test Driven Development by Example",
			];
			expect(bookStore(cart)).toBe(160);
		});
		test("test case to return final price of the books after considering the discount percentage of 25% for purchase of 5 unique books from the list", () => {
			const cart = [
				"Clean Code",
				"The Clean Coder",
				"Clean Architecture",
				"Test Driven Development by Example",
				"Working Effectively With Legacy Code",
			];
			expect(bookStore(cart)).toBe(187);
		});
	});
	describe("Test cases to validate when cart has dublicate entries of books from the list", () => {
		test("test case to return final price of the books after applying the discounts if applicable when the cart has duplicate entries of books from the list", () => {
			const cart = ["Clean Code", "Clean Code"];
			expect(bookStore(cart)).toBe(100);
		});
		test("test case to return final price of the books after applying the discounts if applicable when the cart has duplicate entries of books from the list", () => {
			const cart = [
				"Clean Code",
				"Clean Code",
				"The Clean Coder",
				"Clean Architecture",
			];
			expect(bookStore(cart)).toBe(185);
		});
		test("test case to check if the function returns better final price by optimising the booksets for better discounts [cost bookset of 5 + 3 is 322 but by better optimisation we can change the sets to 4 + 4 = 320 ]", () => {
			const cart = [
				"Clean Code",
				"Clean Code",
				"The Clean Coder",
				"The Clean Coder",
				"Clean Architecture",
				"Clean Architecture",
				"Test Driven Development by Example",
				"Working Effectively With Legacy Code",
			];
			expect(bookStore(cart)).toBe(320);
		});
		test("test case to check if the function returns appropriate final price for different booksets ]", () => {
			const cart = [
				"Clean Code",
				"Clean Code",
				"Clean Code",
				"The Clean Coder",
				"The Clean Coder",
				"The Clean Coder",
				"Clean Architecture",
				"Clean Architecture",
				"Test Driven Development by Example",
				"Working Effectively With Legacy Code",
			];
			expect(bookStore(cart)).toBe(415);
		});
		test("test case to check if the function returns appropriate final price for different booksets ]", () => {
			const cart = [
				"Clean Code",
				"Clean Code",
				"Clean Code",
				"Clean Code",
				"The Clean Coder",
				"The Clean Coder",
				"The Clean Coder",
				"The Clean Coder",
				"Clean Architecture",
				"Clean Architecture",
				"Clean Architecture",
				"Test Driven Development by Example",
				"Test Driven Development by Example",
				"Working Effectively With Legacy Code",
				"Working Effectively With Legacy Code",
			];
			expect(bookStore(cart)).toBe(602);
		});
	});
});
