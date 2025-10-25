import bookStore from "../bookStore";
test("test case to return 'The Cart is Empty...' if the cart is empty ", () => {
	const cart = [];
	expect(bookStore(cart)).toBe("The Cart is Empty...");
});
