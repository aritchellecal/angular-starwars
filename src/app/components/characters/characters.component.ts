import { Key } from 'protractor';
import { map } from 'rxjs/operators';
import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { identifierModuleUrl } from '@angular/compiler';


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
  myFavorites: any;
  favoriteCharacter:string[];
  results:any[]=[];

  constructor(private character: CharactersService) {
  }

  ngOnInit() {
    this.fetchCharacter();
    this.getFavorites();
  }

  fetchCharacter() {
    this.character.getCharacter().subscribe(res => {
    this.heroList = res;

    console.log(res)
    
    });
    
  }
  getFavorites() {
  
    this.myFavorites = {...localStorage};

     const ch=Object.keys(this.myFavorites)
      .reduce((value, key) => {
        value[key] = this.myFavorites[key];
        this.favorites.push(+key)
        return value;}, []);
  }

  
  addTofavorite(index: number) {

    this.favoriteCharacter = this.heroList[index];

    // this.results  = Object.keys(this.favoriteCharacter)
    //       .map(key => this.favoriteCharacter[key]);

        //   for(var item in this.favoriteCharacter){
        //     if(this.favoriteCharacter.hasOwnProperty(item)){
        //       this.results.push(this.favoriteCharacter[item]);
        //     } 
        // }

          console.log(this.results)
          
          localStorage.setItem('characters', JSON.stringify(this.favoriteCharacter));
    
    if (this.favorites.includes(index)) {
      const idx = this.favorites.indexOf(index);
      this.favorites.splice(idx, 1);

      localStorage.removeItem(index.toString());
      this.getFavorites();
    } else {
      this.favorites.push(index);
      // localStorage.setItem('characters', JSON.stringify(this.results));
    }



  }
}
