import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguraFormatCampionatoComponent } from './configura-format-campionato.component';

describe('ConfiguraFormatCampionatoComponent', () => {
  let component: ConfiguraFormatCampionatoComponent;
  let fixture: ComponentFixture<ConfiguraFormatCampionatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguraFormatCampionatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguraFormatCampionatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
