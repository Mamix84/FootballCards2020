import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipologiaTorneoComponent } from './tipologia-torneo.component';

describe('TipologiaTorneoComponent', () => {
  let component: TipologiaTorneoComponent;
  let fixture: ComponentFixture<TipologiaTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipologiaTorneoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipologiaTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
