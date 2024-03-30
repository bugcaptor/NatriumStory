import { IdeaBase } from "../base_types/idea_base";

export class StarHasMind extends IdeaBase {
	constructor() {
		super();

		this.title = "Star Has Mind";
		this.note = "A star is a conscious entity.";
		this.tags = ["star", "universe", "space_travel"];
		this.references = [
			"https://www.sheldrake.org/files/pdfs/papers/Is_the_Sun_Conscious.pdf",
		];
	}
}
