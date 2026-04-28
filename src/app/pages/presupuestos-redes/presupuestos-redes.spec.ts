import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestosRedes } from './presupuestos-redes';

describe('PresupuestosRedes', () => {
  let component: PresupuestosRedes;
  let fixture: ComponentFixture<PresupuestosRedes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresupuestosRedes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresupuestosRedes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
