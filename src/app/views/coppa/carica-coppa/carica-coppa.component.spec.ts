import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CaricaCoppaComponent } from './carica-coppa.component';

describe('CaricaCoppaComponent', () => {
  let component: CaricaCoppaComponent;
  let fixture: ComponentFixture<CaricaCoppaComponent>;

  beforeEach(waitForAsync(() => {
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
