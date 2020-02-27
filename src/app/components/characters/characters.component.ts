import { async } from '@angular/core/testing';
import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})


export class CharactersComponent implements OnInit {
  favorites: number[] = [];
  faStar = faStar;
  isFavorite = false;
  heroList: any[];
  myFavorites: any[];
  constructor(private character: CharactersService) {
  }

  ngOnInit() {
    this.fetchCharacter();
    this.getAllFavorites();
  }

  fetchCharacter() {
    this.character.getCharacter().subscribe(res => {
    this.heroList = res;
    });
  }

  getAllFavorites() {
    const favoriteCharacters = {...localStorage};

    this.myFavorites = Object.keys(favoriteCharacters)
      .reduce((value, key) => {
        value[key] = favoriteCharacters[key];
        return value; }, []);
  }

  addTofavorite(index: number, chName: string) {

    const favoriteCharacter = chName;

    if (this.favorites.includes(index)) {
      const idx = this.favorites.indexOf(index);
      this.favorites.splice(idx, 1);
      localStorage.removeItem(index.toString());
      this.getAllFavorites();
    } else {
      this.favorites.push(index);
      localStorage.setItem(index.toString(), favoriteCharacter);
    }
  }


}
