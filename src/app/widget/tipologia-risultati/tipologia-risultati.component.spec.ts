import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipologiaRisultatiComponent } from './tipologia-risultati.component';

describe('TipologiaRisultatiComponent', () => {
  let component: TipologiaRisultatiComponent;
  let fixture: ComponentFixture<TipologiaRisultatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipologiaRisultatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipologiaRisultatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
