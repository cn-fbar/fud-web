import { Injectable } from '@angular/core';
import {Chef} from '../models/Chef';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ChefService {

  //getChefsURL = 'https://fud-service.cfapps.io/api/chefs';
  getChefsURL = '../assets/data/test.data.chefs.json';
  constructor(private http: HttpClient) { }

  getChefs(): Observable<Chef[]> {
    return this.http.get<Chef[]>(this.getChefsURL).pipe(map((result: any) => {
      console.log('Chef details embedded chefs: ' + result);
      return result._embedded.chefs;
    }));
  }


  getChef(id: string): Observable<Chef> {
    console.log('ID obtained : ' + id);
    return this.http.get<Chef>(this.getChefsURL + '/' + id) ;
  }
}


/*return [
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
]*/
