import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaricaCampionatoComponent } from './carica-campionato.component';

describe('CaricaCampionatoComponent', () => {
  let component: CaricaCampionatoComponent;
  let fixture: ComponentFixture<CaricaCampionatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaricaCampionatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaricaCampionatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
