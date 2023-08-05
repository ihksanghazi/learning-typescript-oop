describe("Getter and Setter", () => {
	class Category {
		private _name?: string;

		public get name(): string {
			if (this._name) {
				return this._name;
			} else {
				return "empty";
			}
		}

		public set name(value: string) {
			if (value !== "") {
				this._name = value;
			}
		}

		constructor() {}
	}

	it("should support in class", () => {
		const category = new Category();
		category.name = "Food";
		console.info(category.name);
		category.name = "";
		console.info(category.name);
	});
});
