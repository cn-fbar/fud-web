import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefCreationComponent } from './chef-creation.component';

describe('ChefCreationComponent', () => {
  let component: ChefCreationComponent;
  let fixture: ComponentFixture<ChefCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
