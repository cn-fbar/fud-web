import { TestBed } from '@angular/core/testing';

import { ChefService } from './chef.service';

describe('ChefService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChefService = TestBed.get(ChefService);
    expect(service).toBeTruthy();
  });


});

describe('ChefService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));


  it('calc testing', () =>{
    let a = 10;
    let b = 20;
    let answer = a+b;

    expect(answer).toBe(30);
  });
});
