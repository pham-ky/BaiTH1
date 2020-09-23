import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitl6Component } from './baitl6.component';

describe('Baitl6Component', () => {
  let component: Baitl6Component;
  let fixture: ComponentFixture<Baitl6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitl6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitl6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
