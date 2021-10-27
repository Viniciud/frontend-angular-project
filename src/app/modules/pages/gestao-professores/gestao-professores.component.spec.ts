import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoProfessoresComponent } from './gestao-professores.component';

describe('GestaoProfessoresComponent', () => {
  let component: GestaoProfessoresComponent;
  let fixture: ComponentFixture<GestaoProfessoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestaoProfessoresComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
