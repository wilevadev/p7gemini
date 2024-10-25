import { recipes } from '../data/recipes.js';  // Assure-toi que le chemin est correct
import { displayAllRecipes } from './utils/all-recipes.js';
import { initUseCase } from './algoritms/algorithme-n.js';

document.addEventListener('DOMContentLoaded', () => {
  // Vérifie que la variable 'recipes' est bien définie et est un tableau
  if (typeof recipes !== 'undefined' && Array.isArray(recipes)) {
    try {
      displayAllRecipes(recipes);
      initUseCase(recipes);
    } catch (error) {
      console.error("Erreur lors de l'initialisation des recettes :", error.message);
    }
  } else {
    console.error("La variable 'recipes' n'est pas définie ou n'est pas un tableau.");
  }
});

