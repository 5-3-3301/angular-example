import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveValidateComponent } from './responsive-validate.component';

describe('ResponsiveValidateComponent', () => {
  let component: ResponsiveValidateComponent;
  let fixture: ComponentFixture<ResponsiveValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResponsiveValidateComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
