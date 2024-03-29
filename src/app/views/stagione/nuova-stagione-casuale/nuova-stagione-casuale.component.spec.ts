import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NuovaStagioneCasualeComponent } from './nuova-stagione-casuale.component';

describe('NuovaStagioneCasualeComponent', () => {
  let component: NuovaStagioneCasualeComponent;
  let fixture: ComponentFixture<NuovaStagioneCasualeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovaStagioneCasualeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovaStagioneCasualeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
