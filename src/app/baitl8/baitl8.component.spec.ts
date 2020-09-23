import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitl8Component } from './baitl8.component';

describe('Baitl8Component', () => {
  let component: Baitl8Component;
  let fixture: ComponentFixture<Baitl8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitl8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitl8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
