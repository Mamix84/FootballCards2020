import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguraNumeroTeamsComponent } from './configura-numero-teams.component';

describe('ConfiguraNumeroTeamsComponent', () => {
  let component: ConfiguraNumeroTeamsComponent;
  let fixture: ComponentFixture<ConfiguraNumeroTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguraNumeroTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguraNumeroTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
