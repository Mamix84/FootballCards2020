import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GiornataComponent } from './giornata.component';

describe('GiornataComponent', () => {
  let component: GiornataComponent;
  let fixture: ComponentFixture<GiornataComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GiornataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiornataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
