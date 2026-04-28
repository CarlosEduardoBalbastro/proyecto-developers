import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestosCatalogos } from './presupuestos-catalogos';

describe('PresupuestosCatalogos', () => {
  let component: PresupuestosCatalogos;
  let fixture: ComponentFixture<PresupuestosCatalogos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresupuestosCatalogos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresupuestosCatalogos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
