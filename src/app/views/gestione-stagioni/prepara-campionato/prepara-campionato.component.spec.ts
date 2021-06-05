import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PreparaCampionatoComponent } from './prepara-campionato.component';

describe('PreparaCampionatoComponent', () => {
  let component: PreparaCampionatoComponent;
  let fixture: ComponentFixture<PreparaCampionatoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparaCampionatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparaCampionatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
