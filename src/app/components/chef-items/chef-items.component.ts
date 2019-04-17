import { Component, OnInit } from '@angular/core';
import {Chef} from '../../models/Chef';
import {ChefService} from '../../services/chef.service';

@Component({
  selector: 'app-chef-items',
  templateUrl: './chef-items.component.html',
  styleUrls: ['./chef-items.component.scss']
})
export class ChefItemsComponent implements OnInit {
  chefs: Chef[];
  constructor(private chefService: ChefService) { }

  ngOnInit() {
    this.chefService.getChefs().subscribe(chefs => {
      this.chefs = chefs;
    });
  }

}
