import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfiguraTipologiaTorneoComponent } from './configura-tipologia-torneo.component';

describe('ConfiguraTipologiaTorneoComponent', () => {
  let component: ConfiguraTipologiaTorneoComponent;
  let fixture: ComponentFixture<ConfiguraTipologiaTorneoComponent>;

  beforeEach(waitForAsync(() => {
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
