import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClassificaComponent } from './classifica.component';

describe('ClassificaComponent', () => {
  let component: ClassificaComponent;
  let fixture: ComponentFixture<ClassificaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
