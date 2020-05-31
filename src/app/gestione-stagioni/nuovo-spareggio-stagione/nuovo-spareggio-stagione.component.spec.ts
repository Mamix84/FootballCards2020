import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoSpareggioStagioneComponent } from './nuovo-spareggio-stagione.component';

describe('NuovoSpareggioStagioneComponent', () => {
  let component: NuovoSpareggioStagioneComponent;
  let fixture: ComponentFixture<NuovoSpareggioStagioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovoSpareggioStagioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoSpareggioStagioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
