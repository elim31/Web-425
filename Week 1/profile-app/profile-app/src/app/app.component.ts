/*!--
============================================
; Title: app.component.ts
; Author: Eunice Lim
; Date: 25 May 2021
; Description: Changed the export variable to assignment:string
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment:string = "Assignment 1.5 - Components";
}
