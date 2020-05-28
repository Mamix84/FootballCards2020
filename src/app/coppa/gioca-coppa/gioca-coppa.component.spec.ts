import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiocaCoppaComponent } from './gioca-coppa.component';

describe('GiocaCoppaComponent', () => {
  let component: GiocaCoppaComponent;
  let fixture: ComponentFixture<GiocaCoppaComponent>;

  beforeEach(async(() => {
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
