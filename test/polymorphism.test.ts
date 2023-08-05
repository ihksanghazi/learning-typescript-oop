describe("Polymorphism", () => {
	class Employee {
		constructor(public name: string) {}
	}

	class Manager extends Employee {}

	class VicePresident extends Manager {}

	function sayHello(employee: Employee): void {
		console.info(`Hello ${employee.name}`);
	}

	it("should support", () => {
		let employee: Employee = new Employee("Nur");
		console.info(employee);

		employee = new Manager("Sandy");
		console.info(employee);

		employee = new VicePresident("Ihksan");
		console.info(employee);
	});

	it("should support method polymorphism", () => {
		sayHello(new Employee("Nur"));
		sayHello(new Manager("Sandy"));
		sayHello(new VicePresident("Ihksan"));
	});
});
