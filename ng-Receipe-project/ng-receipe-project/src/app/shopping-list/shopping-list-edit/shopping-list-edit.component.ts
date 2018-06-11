import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputt: ElementRef;
  @ViewChild('amountInput') amountInputt: ElementRef;
  expressValid = false;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() deleteLastIng = new EventEmitter<void>();


  constructor() {
  }

  ngOnInit() {
  }

  onAddListener() {
    const name = this.nameInputt.nativeElement.value;
    const amount = this.amountInputt.nativeElement.value;
    const  ing = new Ingredient(name, amount);
    // console.log(ing);
     this.ingredientAdded.emit(ing);
  }

  setExpressValid() {

  }

  deleteLastIngredient() {
    this.deleteLastIng.emit();
  }

}
