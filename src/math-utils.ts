export namespace MathUtil {
	export const PI: number = Math.PI;

	export function sum(...values: number[]): number {
		let result = 0;
		for (const value of values) {
			result += value;
		}
		return result;
	}
}

export namespace Nur {}

export namespace Sandy {}
