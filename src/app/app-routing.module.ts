import { CharactersComponent } from './components/characters/characters.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { FavoritesComponent } from './components/favorites/favorites.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '' ,redirectTo: '/characters', pathMatch: 'full'
      },
      {
        path: 'characters',
        component: CharactersComponent
      },
      {
        path: 'favorites',
        component: FavoritesComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
