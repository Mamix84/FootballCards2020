import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NuovaCoppaComponent } from './nuova-coppa.component';

describe('NuovaCoppaComponent', () => {
  let component: NuovaCoppaComponent;
  let fixture: ComponentFixture<NuovaCoppaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovaCoppaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovaCoppaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
