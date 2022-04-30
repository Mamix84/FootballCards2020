import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroSquadreComponent } from './numero-squadre.component';

describe('NumeroSquadreComponent', () => {
  let component: NumeroSquadreComponent;
  let fixture: ComponentFixture<NumeroSquadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeroSquadreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroSquadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
