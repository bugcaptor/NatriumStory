import { IdeaBase } from './base_types/idea_base';
import { marked } from 'marked';
import { StarHasMind } from './ideas/star_has_mind';
import { PlantShip } from './ideas/plant_ship';
import { SpaceTravelUsingStarMind } from './ideas/space_travel_using_star_mind';

class IdeaBank {
	ideas: IdeaBase[];

	constructor() {
		this.ideas = [];
	}

	add_idea(idea: IdeaBase) {
		this.ideas.push(idea);
	}

	get_ideas() {
		return this.ideas;
	}
}

export function drawAllIdea(ideas_e: HTMLDivElement) {
	const ideaBank = new IdeaBank();
	ideaBank.add_idea(new StarHasMind());
	ideaBank.add_idea(new PlantShip());
	ideaBank.add_idea(new SpaceTravelUsingStarMind());
  
	for (const idea of ideaBank.get_ideas()) {
	  const ideaDescription = idea.describe();
  
	  const idea_e = document.createElement('div');
	  idea_e.className = 'idea';
	  idea_e.innerHTML = marked(ideaDescription) as string;
	  ideas_e.appendChild(idea_e);
	}
}  