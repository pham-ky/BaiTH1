import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitl3Component } from './baitl3.component';

describe('Baitl3Component', () => {
  let component: Baitl3Component;
  let fixture: ComponentFixture<Baitl3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitl3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitl3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
