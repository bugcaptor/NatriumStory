import { IdeaBase } from "../base_types/idea_base";

export class PlantShip extends IdeaBase {

	constructor() {
		super();
		
		this.title = "Plant Ship";
		this.note = "A spaceship that is a living plant.";
		this.tags = ["space_travel", "spaceship", "plant"];
		this.references = [
			"https://en.wikipedia.org/wiki/Bio-inspired_robotics",
		];
	}
}