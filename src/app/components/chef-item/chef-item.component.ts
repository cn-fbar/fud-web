import {Component, Input, OnInit} from '@angular/core';
import {ChefItem} from '../../models/ChefItem';

@Component({
  selector: 'app-chef-item',
  templateUrl: './chef-item.component.html',
  styleUrls: ['./chef-item.component.scss']
})
export class ChefItemComponent implements OnInit {

  @Input() chefItem: ChefItem;

  @Input() showDeleteOption: boolean;

  constructor() { }

  ngOnInit() {
  }

}
