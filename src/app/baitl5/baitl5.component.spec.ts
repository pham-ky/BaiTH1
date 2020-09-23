import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitl5Component } from './baitl5.component';

describe('Baitl5Component', () => {
  let component: Baitl5Component;
  let fixture: ComponentFixture<Baitl5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitl5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitl5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
