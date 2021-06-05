import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NuovaCoppaCasualeComponent } from './nuova-coppa-casuale.component';

describe('NuovaCoppaCasualeComponent', () => {
  let component: NuovaCoppaCasualeComponent;
  let fixture: ComponentFixture<NuovaCoppaCasualeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovaCoppaCasualeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovaCoppaCasualeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
