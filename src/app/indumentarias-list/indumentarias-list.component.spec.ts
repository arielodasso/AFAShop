import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndumentariasListComponent } from './indumentarias-list.component';

describe('IndumentariasListComponent', () => {
  let component: IndumentariasListComponent;
  let fixture: ComponentFixture<IndumentariasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndumentariasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndumentariasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
