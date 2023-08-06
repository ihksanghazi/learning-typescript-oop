describe("Relationship", () => {
	class Person {
		constructor(public name: string) {}
	}
	class Customer {
		constructor(public name: string) {}
	}

	it("should support", () => {
		const person: Person = new Customer("Sandy");
		console.info(person.name);
	});
});
