describe("Class", () => {
	class Customer {
		constructor() {
			console.info("Create New Customer");
		}
	}

	class Order {}

	it("should can create class", () => {
		const customer: Customer = new Customer();
		const order: Order = new Order();
	});

	it("should can create constructor", () => {
		new Customer();
		new Customer();
	});
});
