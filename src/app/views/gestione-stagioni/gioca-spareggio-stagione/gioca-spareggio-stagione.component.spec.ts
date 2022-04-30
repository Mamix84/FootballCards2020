import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GiocaSpareggioStagioneComponent } from './gioca-spareggio-stagione.component';

describe('GiocaSpareggioStagioneComponent', () => {
  let component: GiocaSpareggioStagioneComponent;
  let fixture: ComponentFixture<GiocaSpareggioStagioneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GiocaSpareggioStagioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiocaSpareggioStagioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
