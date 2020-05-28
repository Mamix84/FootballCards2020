import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparaTeamsComponent } from './prepara-teams.component';

describe('PreparaTeamsComponent', () => {
  let component: PreparaTeamsComponent;
  let fixture: ComponentFixture<PreparaTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparaTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparaTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
