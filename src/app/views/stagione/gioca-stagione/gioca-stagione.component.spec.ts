import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GiocaStagioneComponent } from './gioca-stagione.component';

describe('GiocaStagioneComponent', () => {
  let component: GiocaStagioneComponent;
  let fixture: ComponentFixture<GiocaStagioneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GiocaStagioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiocaStagioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
