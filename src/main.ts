import './style.css';
import { drawAllIdea } from './idea_bank';
import { drawGalaxy } from './galaxy';

function startApp() {
  console.log('App started');
  
  drawGalaxy(document.getElementById('galaxy') as HTMLDivElement);
  drawAllIdea(document.getElementById('ideas') as HTMLDivElement);
}

// when the page is loaded, the script will be executed
document.addEventListener('DOMContentLoaded', () => {
  startApp();
})
