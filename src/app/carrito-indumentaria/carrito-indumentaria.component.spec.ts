import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoIndumentariaComponent } from './carrito-indumentaria.component';

describe('CarritoIndumentariaComponent', () => {
  let component: CarritoIndumentariaComponent;
  let fixture: ComponentFixture<CarritoIndumentariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoIndumentariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoIndumentariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
