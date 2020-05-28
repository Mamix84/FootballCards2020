import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovaCarrieraCasualeComponent } from './nuova-carriera-casuale.component';

describe('NuovaCarrieraCasualeComponent', () => {
  let component: NuovaCarrieraCasualeComponent;
  let fixture: ComponentFixture<NuovaCarrieraCasualeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovaCarrieraCasualeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovaCarrieraCasualeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
