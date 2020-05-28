import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovaCoppaCasualeComponent } from './nuova-coppa-casuale.component';

describe('NuovaCoppaCasualeComponent', () => {
  let component: NuovaCoppaCasualeComponent;
  let fixture: ComponentFixture<NuovaCoppaCasualeComponent>;

  beforeEach(async(() => {
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
