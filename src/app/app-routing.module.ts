import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "item/:id", component: ItemComponent},
  {path: "signup", component: SingUpComponent},
  {path: "signin", component: SingInComponent},
  {path: "about", component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
