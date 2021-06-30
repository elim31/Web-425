/**
 * Title: base-layout.component.ts
 * Author: Professor Krasso
 * Modified by: Eunice Lim
 * Date: 30 June 2021
 * Description: Base-layout Component
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  assignment:string;
  constructor() {
    this.assignment='Assignment 6.4 - Input Properties';
  }

  ngOnInit(): void {
  }

}
