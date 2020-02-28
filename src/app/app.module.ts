import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { LayoutsComponent } from './components/layouts/layouts.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    FavoritesComponent,
    LayoutsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
