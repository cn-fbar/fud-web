import {Component, Input, OnInit} from '@angular/core';
import {Chef} from '../../models/Chef';

@Component({
  selector: 'app-chef-item',
  templateUrl: './chef-item.component.html',
  styleUrls: ['./chef-item.component.scss']
})
export class ChefItemComponent implements OnInit {

  @Input() chef: Chef;

  @Input() showDeleteOption: boolean;

  constructor() { }

  ngOnInit() {
  }

}
