import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridProfessoresComponent } from './grid-professores.component';

describe('GridAlunosComponent', () => {
  let component: GridProfessoresComponent;
  let fixture: ComponentFixture<GridProfessoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridProfessoresComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
