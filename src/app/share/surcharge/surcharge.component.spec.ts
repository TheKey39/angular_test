import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurchargeComponent } from './surcharge.component';

describe('SurchargeComponent', () => {
  let component: SurchargeComponent;
  let fixture: ComponentFixture<SurchargeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurchargeComponent]
    });
    fixture = TestBed.createComponent(SurchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
