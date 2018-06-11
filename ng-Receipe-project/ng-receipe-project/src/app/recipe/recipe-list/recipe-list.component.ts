import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelect = new EventEmitter<Recipe>();
  recipes: Recipe[]
  constructor(private recipeService: RecipeService) {
  }

  onRecipeSelect(recipe: Recipe) {
    this.recipeWasSelect.emit(recipe);
  }
  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }

}
