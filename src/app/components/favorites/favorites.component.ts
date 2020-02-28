import { Component, OnInit } from '@angular/core';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Key } from 'protractor';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  faStar=faStar;
  favoriteCharacters:any;
  myFavorites: any;
  heroList: any[];
  

  constructor() { }

  ngOnInit() {
    this.fetchFavorites();
  }

  fetchFavorites() {

    this.myFavorites = {localStorage};
    // this.myFavorites=JSON.parse(localStorage.getItem('1'))
    
    console.log(this.myFavorites)

    // console.log(JSON.parse(this.myFavorites))

    // this.favoriteCharacters = Object.keys( this.myFavorites ).map((data)=>{
    //   return [data, this.myFavorites [data]];
    //   });
 
    }
  
}
