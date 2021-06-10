/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Modified by: Eunice Lim
 * Date: 9 June 2021
 * Description: App module
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment:string = "Assignment 2.4";
}
