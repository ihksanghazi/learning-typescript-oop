describe("Static", () => {
	class Configuration {
		static NAME: string = "Typescript OOP";
		static VERSION: number = 1.0;
		static AUTHOR: string = "Sandy";
	}

	class MathUtil {
		static sum(...values: number[]): number {
			let total = 0;
			for (const value of values) {
				total += value;
			}
			return total;
		}
	}

	it("should support", () => {
		console.info(Configuration.NAME);
		console.info(Configuration.VERSION);
		console.info(Configuration.AUTHOR);

		console.info(MathUtil.sum(1, 2, 3, 4, 5));
	});
});
