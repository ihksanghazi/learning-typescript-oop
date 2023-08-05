describe("Inheritance", () => {
	// parent class
	class Employee {
		name: string;
		constructor(name: string) {
			this.name = name;
		}
	}

	// Child Class
	class Manager extends Employee {}

	class Director extends Manager {}

	it("should support", () => {
		const employee = new Employee("Sendi");
		console.info(employee.name);
		const manager = new Manager("Azhi");
		console.info(manager.name);
		const director = new Director("Sandy");
		console.info(director.name);
	});
});
