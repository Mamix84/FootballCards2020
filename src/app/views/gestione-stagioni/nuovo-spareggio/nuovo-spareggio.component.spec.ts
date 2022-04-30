import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NuovoSpareggioComponent } from './nuovo-spareggio.component';

describe('NuovoSpareggioComponent', () => {
  let component: NuovoSpareggioComponent;
  let fixture: ComponentFixture<NuovoSpareggioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovoSpareggioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoSpareggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
