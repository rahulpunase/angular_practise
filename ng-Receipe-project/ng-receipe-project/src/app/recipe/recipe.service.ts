import {Recipe} from './recipe.model';

export class RecipeService {
  // adding array in service
  private recipes: Recipe[] = [
    new Recipe('Test', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer ', 'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fthe-master-hash-ck.jpg%3Fitok%3DFvabtpnq&w=800&q=85'),
    new Recipe('Test 2', 'test recipe 2', 'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F052218_puffpastry0106.jpg%3Fitok%3Dg0J2Fpc5&w=800&q=85')
  ];

  getRecipe() {
    // only getting copy
    return this.recipes.slice();
  }
}
