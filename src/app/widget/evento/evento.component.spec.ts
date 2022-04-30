import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventoComponent } from './evento.component';

describe('EventoComponent', () => {
  let component: EventoComponent;
  let fixture: ComponentFixture<EventoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
