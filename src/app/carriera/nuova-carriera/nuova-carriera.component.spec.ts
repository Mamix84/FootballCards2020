import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NuovaCarrieraComponent } from './nuova-carriera.component';

describe('NuovaCarrieraComponent', () => {
  let component: NuovaCarrieraComponent;
  let fixture: ComponentFixture<NuovaCarrieraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovaCarrieraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovaCarrieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
