import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveSplitComponent } from './responsive-split.component';

describe('ResponsiveUpdateComponent', () => {
  let component: ResponsiveSplitComponent;
  let fixture: ComponentFixture<ResponsiveSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResponsiveSplitComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
