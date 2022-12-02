import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetasListComponent } from './camisetas-list.component';

describe('CamisetasListComponent', () => {
  let component: CamisetasListComponent;
  let fixture: ComponentFixture<CamisetasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamisetasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamisetasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
