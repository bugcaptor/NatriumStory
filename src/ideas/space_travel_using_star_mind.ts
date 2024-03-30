import { IdeaBase } from "../base_types/idea_base";
import { StarHasMind } from "./star_has_mind";
import { PlantShip } from "./plant_ship";

export class SpaceTravelUsingStarMind extends IdeaBase {
	constructor() {
		super();
		
		this.title = "Space Travel Using Star Mind";
		this.note = "Traveling through space using the mind of a star.";
		this.tags = ["star", "universe", "space_travel"];
		this.references = [
		];
		this.derivedFrom = [
			new StarHasMind(),
			new PlantShip(),
		];
	}
}