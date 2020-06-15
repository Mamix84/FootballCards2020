import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguratoreComponent } from './configuratore.component';

describe('ConfiguratoreComponent', () => {
  let component: ConfiguratoreComponent;
  let fixture: ComponentFixture<ConfiguratoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguratoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguratoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
