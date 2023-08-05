describe("Instance Of", () => {
	class Employee {}
	class Manager {}

	const azhi = new Employee();
	const sandy = new Manager();
	it("should have problem using typeof", () => {
		console.info(typeof azhi);
		console.info(typeof sandy);
	});
	it("should have problem using typeof", () => {
		expect(azhi instanceof Employee).toBe(true);
		expect(azhi instanceof Manager).toBe(false);
		expect(sandy instanceof Manager).toBe(true);
		expect(sandy instanceof Employee).toBe(false);
	});
});
