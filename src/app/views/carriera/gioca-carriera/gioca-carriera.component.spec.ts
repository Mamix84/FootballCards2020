import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GiocaCarrieraComponent } from './gioca-carriera.component';

describe('GiocaCarrieraComponent', () => {
  let component: GiocaCarrieraComponent;
  let fixture: ComponentFixture<GiocaCarrieraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GiocaCarrieraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiocaCarrieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
