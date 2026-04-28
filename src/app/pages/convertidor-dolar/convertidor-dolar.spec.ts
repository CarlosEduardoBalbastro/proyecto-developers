import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertidorDolar } from './convertidor-dolar';

describe('ConvertidorDolar', () => {
  let component: ConvertidorDolar;
  let fixture: ComponentFixture<ConvertidorDolar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertidorDolar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertidorDolar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
