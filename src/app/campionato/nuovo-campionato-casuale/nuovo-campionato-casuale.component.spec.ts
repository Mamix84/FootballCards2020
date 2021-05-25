import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NuovoCampionatoCasualeComponent } from './nuovo-campionato-casuale.component';

describe('NuovoCampionatoCasualeComponent', () => {
  let component: NuovoCampionatoCasualeComponent;
  let fixture: ComponentFixture<NuovoCampionatoCasualeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovoCampionatoCasualeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoCampionatoCasualeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
