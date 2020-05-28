import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiocaCampionatoComponent } from './gioca-campionato.component';

describe('GiocaCampionatoComponent', () => {
  let component: GiocaCampionatoComponent;
  let fixture: ComponentFixture<GiocaCampionatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiocaCampionatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiocaCampionatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
