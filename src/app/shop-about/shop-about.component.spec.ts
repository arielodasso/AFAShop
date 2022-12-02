import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAboutComponent } from './shop-about.component';

describe('ShopAboutComponent', () => {
  let component: ShopAboutComponent;
  let fixture: ComponentFixture<ShopAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
