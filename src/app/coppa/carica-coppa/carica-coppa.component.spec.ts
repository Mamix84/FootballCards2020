import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaricaCoppaComponent } from './carica-coppa.component';

describe('CaricaCoppaComponent', () => {
  let component: CaricaCoppaComponent;
  let fixture: ComponentFixture<CaricaCoppaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaricaCoppaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaricaCoppaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
