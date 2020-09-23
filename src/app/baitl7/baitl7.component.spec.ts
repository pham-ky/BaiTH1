import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitl7Component } from './baitl7.component';

describe('Baitl7Component', () => {
  let component: Baitl7Component;
  let fixture: ComponentFixture<Baitl7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitl7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitl7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
