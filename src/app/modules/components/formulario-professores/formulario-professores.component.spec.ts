import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProfessoresComponent } from './formulario-professores.component';

describe('FormularioProfessoresComponent', () => {
  let component: FormularioProfessoresComponent;
  let fixture: ComponentFixture<FormularioProfessoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioProfessoresComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
