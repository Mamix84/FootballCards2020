import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NuovaStagioneComponent } from './nuova-stagione.component';

describe('NuovaStagioneComponent', () => {
  let component: NuovaStagioneComponent;
  let fixture: ComponentFixture<NuovaStagioneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovaStagioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovaStagioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
