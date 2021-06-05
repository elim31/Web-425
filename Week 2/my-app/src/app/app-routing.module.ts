import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent} from './contact/contact.component'
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent  //goes to http://localhost:4200/home
  },
  {
    path: 'home',
    component: HomeComponent  //goes to http://localhost:4200/home
  },
  {
    path: 'about',
    component: AboutComponent //goes to http://localhost:4200/about
  },
  {
    path: 'contact',
    component: ContactComponent //goes to http://localhost:4200/contact
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
