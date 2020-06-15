import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguraTipologiaTorneoComponent } from './configura-tipologia-torneo.component';

describe('ConfiguraTipologiaTorneoComponent', () => {
  let component: ConfiguraTipologiaTorneoComponent;
  let fixture: ComponentFixture<ConfiguraTipologiaTorneoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguraTipologiaTorneoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguraTipologiaTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
