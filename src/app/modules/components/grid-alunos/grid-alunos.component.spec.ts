import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAlunosComponent } from './grid-alunos.component';

describe('GridAlunosComponent', () => {
  let component: GridAlunosComponent;
  let fixture: ComponentFixture<GridAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridAlunosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
