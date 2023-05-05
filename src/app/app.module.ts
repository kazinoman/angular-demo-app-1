import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingEditComponent } from './shoping-list/shoping-edit/shoping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShopingListComponent,
    ShopingEditComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
