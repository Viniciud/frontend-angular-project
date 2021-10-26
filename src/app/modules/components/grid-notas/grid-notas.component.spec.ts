import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridNotasComponent } from './grid-notas.component';

describe('GridNotasComponent', () => {
  let component: GridNotasComponent;
  let fixture: ComponentFixture<GridNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridNotasComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
