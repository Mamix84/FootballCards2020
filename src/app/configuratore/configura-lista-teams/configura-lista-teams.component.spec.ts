import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguraListaTeamsComponent } from './configura-lista-teams.component';

describe('ConfiguraListaTeamsComponent', () => {
  let component: ConfiguraListaTeamsComponent;
  let fixture: ComponentFixture<ConfiguraListaTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguraListaTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguraListaTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
