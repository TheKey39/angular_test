import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultOutletComponent } from './default-outlet.component';

describe('DefaultOutletComponent', () => {
  let component: DefaultOutletComponent;
  let fixture: ComponentFixture<DefaultOutletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultOutletComponent]
    });
    fixture = TestBed.createComponent(DefaultOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
