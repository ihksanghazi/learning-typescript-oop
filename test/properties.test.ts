describe("Properties", () => {
	class Customer {
		readonly id: number;
		name: string = "Guest";
		age?: number;
		constructor(id: number, name: string) {
			this.id = id;
			this.name = name;
		}
	}

	it("should can have properties", () => {
		const customer = new Customer(1, "Sandy");
		customer.age = 20;
		console.info(customer);
	});
});
