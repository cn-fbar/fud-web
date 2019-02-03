import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefItemsComponent } from './chef-items.component';

describe('ChefItemsComponent', () => {
  let component: ChefItemsComponent;
  let fixture: ComponentFixture<ChefItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
