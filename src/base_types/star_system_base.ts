export abstract class StarSystemBase {
	name: string;
	index: number;
	coordinates: number[];

	constructor() {
		this.name = "";
		this.index = 0;
		this.coordinates = [];
	}

	describe(indent: string = "") {
		const descriptions: string[] = [];
		const thisTypeName = this.constructor.name;
		descriptions.push(`${indent}- <a href='#STAR_${thisTypeName}'>${this.name}</a>`);
		descriptions.push(`${indent}	- Index: ${this.index}`);
		descriptions.push(`${indent}	- Coordinates: (${this.coordinates.join(", ")})`);
		return descriptions.join("\n");
	}
}