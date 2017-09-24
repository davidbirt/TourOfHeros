import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Response404Component } from './response-404.component';

describe('Response404Component', () => {
  let component: Response404Component;
  let fixture: ComponentFixture<Response404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Response404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Response404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
