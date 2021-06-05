import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfiguraStagioniComponent } from './configura-stagioni.component';

describe('ConfiguraStagioniComponent', () => {
  let component: ConfiguraStagioniComponent;
  let fixture: ComponentFixture<ConfiguraStagioniComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguraStagioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguraStagioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
