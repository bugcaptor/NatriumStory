import { marked } from "marked";
import { Star1 } from "./stars/star_1";

class Galaxy {
	stars: Star1[];

	constructor() {
		this.stars = [];
	}

	add_star(star: Star1) {
		this.stars.push(star);
	}

	get_stars() {
		return this.stars;
	}
}

export function drawGalaxy(galaxy_e: HTMLDivElement) {
	const galaxy = new Galaxy();
	galaxy.add_star(new Star1());

	for (const star of galaxy.get_stars()) {
		const starDescription = star.describe();

		const star_e = document.createElement('div');
		star_e.className = 'star';
		star_e.innerHTML = marked(starDescription) as string;
		galaxy_e.appendChild(star_e);
	}
}

