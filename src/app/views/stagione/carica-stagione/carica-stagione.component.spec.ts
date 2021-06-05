import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CaricaStagioneComponent } from './carica-stagione.component';

describe('CaricaStagioneComponent', () => {
  let component: CaricaStagioneComponent;
  let fixture: ComponentFixture<CaricaStagioneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CaricaStagioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaricaStagioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
