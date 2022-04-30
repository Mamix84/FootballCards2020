import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GiocaCoppaComponent } from './gioca-coppa.component';

describe('GiocaCoppaComponent', () => {
  let component: GiocaCoppaComponent;
  let fixture: ComponentFixture<GiocaCoppaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GiocaCoppaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiocaCoppaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
