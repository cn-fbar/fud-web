import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChefItemsComponent} from './components/chef-items/chef-items.component';

const routes: Routes = [
  {
    path: 'chef-items', component: ChefItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
