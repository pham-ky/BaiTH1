import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitl1Component } from './baitl1.component';

describe('Baitl1Component', () => {
  let component: Baitl1Component;
  let fixture: ComponentFixture<Baitl1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitl1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
