import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingDestinationComponent } from './routing-destination.component';

describe('RoutingDestinationComponent', () => {
  let component: RoutingDestinationComponent;
  let fixture: ComponentFixture<RoutingDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
