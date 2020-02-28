import { Key } from 'protractor';
import { map } from 'rxjs/operators';
import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { identifierModuleUrl } from '@angular/compiler';
import { Character } from './../../models/character.model';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})


export class CharactersComponent implements OnInit {
  faStar = faStar;
  characters: any[] = [];

  constructor(private character: CharactersService) {
  }

  ngOnInit() {
    this.fetchCharacter();

  }

  fetchCharacter() {
        this.character.getCharacter().subscribe(res => {
            this.characters = res; });
  }

  addTofavorite(index: number) {

    this.characters[index].favorite = !this.characters[index].favorite;
    this.character.save(this.characters);

  }
}

