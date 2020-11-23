import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveDynamicCreateComponent } from './responsive-dynamic-create.component';

describe('ResponsiveDynamicCreateComponent', () => {
  let component: ResponsiveDynamicCreateComponent;
  let fixture: ComponentFixture<ResponsiveDynamicCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResponsiveDynamicCreateComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveDynamicCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
