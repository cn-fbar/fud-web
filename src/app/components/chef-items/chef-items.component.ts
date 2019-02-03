import { Component, OnInit } from '@angular/core';
import {ChefItem} from '../../models/ChefItem';

@Component({
  selector: 'app-chef-items',
  templateUrl: './chef-items.component.html',
  styleUrls: ['./chef-items.component.scss']
})
export class ChefItemsComponent implements OnInit {
  chefItems: ChefItem[];
  constructor() { }

  ngOnInit() {
    this.chefItems = [
      {
        firstName: 'Jayshree',
        lastName: 'Nagaprabhu',
        profilePic: 'fname1.png',
        rating: 5,
        description: 'test description goes here, I am good in doing gobi 65',
        address1: 'address1',
        address2: 'address2',
        city: 'Coppell',
        state: 'Texas',
        country: 'United States',
        zipcode: '75019'
      },
      {
        firstName: 'Priya',
        lastName: 'Srivatsan',
        profilePic: 'fname2.png',
        rating: 3,
        description: 'test description goes here, I am good in doing gobi 65',
        address1: 'address1',
        address2: 'address2',
        city: 'Irving',
        state: 'Texas',
        country: 'United States',
        zipcode: '75019'
      },
      {
        firstName: 'Shoba',
        lastName: 'Selvaraj',
        profilePic: 'fname3.png',
        rating: 5,
        description: 'test description goes here, I am good in doing gobi 65',
        address1: 'address1',
        address2: 'address2',
        city: 'Chennai',
        state: 'TamilNadu',
        country: 'India',
        zipcode: '75019'
      }
    ]
  }

}
