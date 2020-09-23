import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitl2Component } from './baitl2.component';

describe('Baitl2Component', () => {
  let component: Baitl2Component;
  let fixture: ComponentFixture<Baitl2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitl2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
