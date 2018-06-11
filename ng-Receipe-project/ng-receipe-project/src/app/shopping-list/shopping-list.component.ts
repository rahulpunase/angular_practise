import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 50),
    new Ingredient('Tomato', 8),
    new Ingredient('Potato', 24)
  ];
  constructor() { }

  onIngredientAdded(ing: Ingredient) {
    this.ingredients.push(ing);
  }

  deleteIngredient() {
    this.ingredients.pop();
  }

  ngOnInit() {
  }

}
