import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChefItemsComponent} from './components/chef-items/chef-items.component';
import {ChefCreationComponent} from './components/chef-creation/chef-creation.component';

const routes: Routes = [
  {
    path: 'chef-items', component: ChefItemsComponent
  },
  {
    path: 'chef-creation/:id', component: ChefCreationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
