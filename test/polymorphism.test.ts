describe("Polymorphism", () => {
	class Employee {
		constructor(public name: string) {}
	}

	class Manager extends Employee {}

	class VicePresident extends Manager {}

	function sayHello(employee: Employee): void {
		if (employee instanceof VicePresident) {
			const vp = employee as VicePresident;
			console.info(`Hello VP ${vp.name}`);
		} else if (employee instanceof Manager) {
			const manager = employee as Manager;
			console.info(`Hello Manager ${manager.name}`);
		} else {
			console.info(`Hello Employee ${employee.name}`);
		}
	}

	function sayHelloWrong(employee: Employee): void {
		if (employee instanceof Manager) {
			const manager = employee as Manager;
			console.info(`Hello Manager ${manager.name}`);
		} else if (employee instanceof VicePresident) {
			const vp = employee as VicePresident;
			console.info(`Hello VP ${vp.name}`);
		} else {
			console.info(`Hello Employee ${employee.name}`);
		}
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

	it("should support method polymorphism wrong", () => {
		sayHelloWrong(new Employee("Nur"));
		sayHelloWrong(new Manager("Sandy"));
		sayHelloWrong(new VicePresident("Ihksan"));
	});
});
