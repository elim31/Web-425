/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Modified by: Eunice Lim
 * Date: 13 July 2021
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assignment: string;

  constructor(){
    this.assignment = 'Welcome to In-N-Out-Books'
  }
}
