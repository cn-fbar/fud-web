import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Chef} from '../../models/Chef';
import {ChefService} from '../../services/chef.service';

@Component({
  selector: 'app-chef-creation',
  templateUrl: './chef-creation.component.html',
  styleUrls: ['./chef-creation.component.scss']
})
export class ChefCreationComponent implements OnInit {
  id: string;
  chef: Chef;

  constructor(private route: ActivatedRoute, private _formBuilder: FormBuilder, private chefService: ChefService) {
    this.route.params.subscribe(params => this.id = params.id);
  }


  ngOnInit() {
    this.chefService.getChef(this.id).subscribe(chef => {
      this.chef = chef;
    });
    console.log('Chef object: ' + this.chef);

  }

  save(): void {

  }
}
