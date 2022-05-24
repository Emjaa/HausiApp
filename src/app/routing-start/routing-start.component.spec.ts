import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingStartComponent } from './routing-start.component';

describe('RoutingStartComponent', () => {
  let component: RoutingStartComponent;
  let fixture: ComponentFixture<RoutingStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
