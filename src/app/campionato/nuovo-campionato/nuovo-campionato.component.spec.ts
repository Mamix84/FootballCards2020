import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NuovoCampionatoComponent } from './nuovo-campionato.component';

describe('NuovoCampionatoComponent', () => {
  let component: NuovoCampionatoComponent;
  let fixture: ComponentFixture<NuovoCampionatoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovoCampionatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoCampionatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
