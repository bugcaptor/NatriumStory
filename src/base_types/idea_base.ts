export abstract class IdeaBase {
	title: string;
	note: string;
	tags: string[];
	references: string[];
	derivedFrom: IdeaBase[];

	constructor() {
		this.title = "";
		this.note = "";
		this.tags = [];
		this.references = [];
		this.derivedFrom = [];
	}

	describe(indent: string = "") {
		const descriptions: string[] = [];
		const thisTypeName = this.constructor.name;
		descriptions.push(`${indent}- <a href='#IDEA_${thisTypeName}'>${this.title}</a>`);
		descriptions.push(`${indent}	- ${this.note}`);
		if (this.tags.length > 0) {
			descriptions.push(`${indent}	- Tags: ${this.tags.join(", ")}`);
		}
		if (this.references.length > 0) {
			descriptions.push(`${indent}	- References:`);
			for (const reference of this.references) {
				descriptions.push(`${indent}		- ${reference}`);
			}
		}
		if (this.derivedFrom.length > 0) {
			descriptions.push(`${indent}	- Derived from:`);
			for (const idea of this.derivedFrom) {
				const typeName = idea.constructor.name;
				descriptions.push(`${indent}		- <a href='#IDEA_${typeName}'>${typeName}</a>`);
			}
		}
		return descriptions.join("\n");
	}
}

