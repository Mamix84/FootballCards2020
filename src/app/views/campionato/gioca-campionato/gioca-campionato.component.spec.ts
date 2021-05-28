import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GiocaCampionatoComponent } from './gioca-campionato.component';

describe('GiocaCampionatoComponent', () => {
  let component: GiocaCampionatoComponent;
  let fixture: ComponentFixture<GiocaCampionatoComponent>;

  beforeEach(waitForAsync(() => {
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
