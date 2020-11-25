import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateValidateComponent } from './template-validate.component';

describe('TemplateValidateComponent', () => {
  let component: TemplateValidateComponent;
  let fixture: ComponentFixture<TemplateValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateValidateComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
