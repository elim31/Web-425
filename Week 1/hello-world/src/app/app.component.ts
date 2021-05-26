/**
============================================
; Title: Exercise 1.2
; Author: Richard Krasso
; Date: 25 May 2021
; Modified By: Eunice Lim
; Description: Exercise 1.2 - Hello World
;===========================================
*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You're now in Eunice's world!"

}
