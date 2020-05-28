import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoSpareggioComponent } from './nuovo-spareggio.component';

describe('NuovoSpareggioComponent', () => {
  let component: NuovoSpareggioComponent;
  let fixture: ComponentFixture<NuovoSpareggioComponent>;

  beforeEach(async(() => {
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
