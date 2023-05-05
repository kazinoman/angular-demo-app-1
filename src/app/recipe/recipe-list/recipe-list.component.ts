import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Recipe One',
      'Pariatur pariatur et dolore labore magna adipisicing commodo. Minim id culpa labore enim incididunt consectetur aliqua sunt ad exercitation commodo culpa aliqua. Duis mollit minim ut Lorem ex duis Lorem enim ut qui. Consectetur enim id amet eu sit nostrud eu veniam amet cillum sunt nostrud magna.',
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80'
    ),
    new Recipe(
      'Recipe One',
      'Pariatur pariatur et dolore labore magna adipisicing commodo. Minim id culpa labore enim incididunt consectetur aliqua sunt ad exercitation commodo culpa aliqua. Duis mollit minim ut Lorem ex duis Lorem enim ut qui. Consectetur enim id amet eu sit nostrud eu veniam amet cillum sunt nostrud magna.',
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80'
    ),
  ];
}
