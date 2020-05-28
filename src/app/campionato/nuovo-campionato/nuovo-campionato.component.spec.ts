import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoCampionatoComponent } from './nuovo-campionato.component';

describe('NuovoCampionatoComponent', () => {
  let component: NuovoCampionatoComponent;
  let fixture: ComponentFixture<NuovoCampionatoComponent>;

  beforeEach(async(() => {
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
