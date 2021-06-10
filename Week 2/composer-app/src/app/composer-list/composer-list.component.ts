
//============================================
// Title: composer-list.component.ts
// Author: Eunice Lim
// Date: 2 June 2021
// Description: Composer list
//===========================================


import { Component, OnInit } from '@angular/core';

export default class Composer{
  fullName: string;
  genre: string;

  constructor(fullName:string, genre:string){
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  constructor() {
    this.composers= [
      new Composer("Franz Liszt", "Classical"),
      new Composer("Ludwig van Beethoven", "Classical"),
      new Composer("Johann Sebastian Bach", "Classical"),
      new Composer("Sergei Rachmaninoff", "Classical"),
      new Composer("Pyotr Ilyich Tchaikovsky", "Classical")
    ]
   }

  ngOnInit(): void {
  }

}
