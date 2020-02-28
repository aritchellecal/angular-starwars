import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  faStar = faStar;
  favorites = [];
  constructor(private character: CharactersService) { }

  ngOnInit() {
  this.character.getFavorites().subscribe( favorites => {
    this.favorites = favorites;
  });
  }

}
