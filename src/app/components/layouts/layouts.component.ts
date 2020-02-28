import { Component, OnInit } from '@angular/core';
import { faStar,faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {
  faStar = faStar;
  faHome = faHome;
  

  constructor() { }

  ngOnInit() {
  }

}
