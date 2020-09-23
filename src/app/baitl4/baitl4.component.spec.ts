import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitl4Component } from './baitl4.component';

describe('Baitl4Component', () => {
  let component: Baitl4Component;
  let fixture: ComponentFixture<Baitl4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitl4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitl4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
