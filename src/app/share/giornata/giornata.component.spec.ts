import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiornataComponent } from './giornata.component';

describe('GiornataComponent', () => {
  let component: GiornataComponent;
  let fixture: ComponentFixture<GiornataComponent>;

  beforeEach(async(() => {
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
