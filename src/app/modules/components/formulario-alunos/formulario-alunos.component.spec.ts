import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAlunosComponent } from './formulario-alunos.component';

describe('FormularioAlunosComponent', () => {
  let component: FormularioAlunosComponent;
  let fixture: ComponentFixture<FormularioAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioAlunosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
