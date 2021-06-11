
/**
 * Title: app.routing.ts
 * Author: Professor Krasso
 * Modified by: Eunice Lim
 * Date: 9 June 2012
 * Description: Routing file
 */
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

export const AppRoutes: Routes =[
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }

]
