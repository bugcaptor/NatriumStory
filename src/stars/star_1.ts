import { StarSystemBase } from "../base_types/star_system_base";

export class Star1 extends StarSystemBase {
	constructor() {
		super();

		this.name = "Star 1";
		this.index = 1;
		this.coordinates = [0.76, 0.43, 0.01];
	}
}

