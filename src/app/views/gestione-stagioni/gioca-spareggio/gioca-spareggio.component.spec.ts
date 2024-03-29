import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GiocaSpareggioComponent } from './gioca-spareggio.component';

describe('GiocaSpareggioComponent', () => {
  let component: GiocaSpareggioComponent;
  let fixture: ComponentFixture<GiocaSpareggioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GiocaSpareggioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiocaSpareggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
