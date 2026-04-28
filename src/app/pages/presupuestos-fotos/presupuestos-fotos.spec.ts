import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestosFotos } from './presupuestos-fotos';

describe('PresupuestosFotos', () => {
  let component: PresupuestosFotos;
  let fixture: ComponentFixture<PresupuestosFotos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresupuestosFotos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresupuestosFotos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
