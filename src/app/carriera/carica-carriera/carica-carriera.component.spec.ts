import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CaricaCarrieraComponent } from './carica-carriera.component';

describe('CaricaCarrieraComponent', () => {
  let component: CaricaCarrieraComponent;
  let fixture: ComponentFixture<CaricaCarrieraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CaricaCarrieraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaricaCarrieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
