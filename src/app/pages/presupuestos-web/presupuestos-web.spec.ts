import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestosWeb } from './presupuestos-web';

describe('PresupuestosWeb', () => {
  let component: PresupuestosWeb;
  let fixture: ComponentFixture<PresupuestosWeb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresupuestosWeb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresupuestosWeb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
