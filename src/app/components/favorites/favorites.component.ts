import { map } from 'rxjs/operators';
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
  empty: boolean = false;
  constructor(private character: CharactersService) { }

  ngOnInit() {
    this.favoriteCharacter();
    this.fetchCharacter();

    this.empty = this.favorites.length !=0 ? false : true
    
  }

  favoriteCharacter() {
  
    this.character.getFavorites().subscribe( favorites => {
      this.favorites = favorites;
    });
  }
  fetchCharacter() {
    this.character.getCharacter().subscribe(res => {
        this.characters = res; });
  }

  remove(chName: string) {
    
    const idx = this.characters.findIndex(x => x.name === chName)
    this.characters[idx].favorite = !this.characters[idx].favorite;
    this.character.save(this.characters);
    this.favoriteCharacter();

  }

}
