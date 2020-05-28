import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparaStagioneComponent } from './prepara-stagione.component';

describe('PreparaStagioneComponent', () => {
  let component: PreparaStagioneComponent;
  let fixture: ComponentFixture<PreparaStagioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparaStagioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparaStagioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
