import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveCreateComponent } from './responsive-create.component';

describe('ResponsiveCreateComponent', () => {
  let component: ResponsiveCreateComponent;
  let fixture: ComponentFixture<ResponsiveCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResponsiveCreateComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
