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
  characters: any[] = [];
  constructor(private character: CharactersService) { }

  ngOnInit() {
    this.favoriteCharacter();
  }
  favoriteCharacter() {
    this.character.getFavorites().subscribe( favorites => {
      this.favorites = favorites;
    });
    this.fetchCharacter();
  }
  fetchCharacter() {
    this.character.getCharacter().subscribe(res => {
        this.characters = res; });
  }

  remove(index: number) {
    console.log(index);
    this.favorites[index].favorite = !this.favorites[index].favorite;
    this.character.save(this.characters);
    this.favoriteCharacter();

  }

}
