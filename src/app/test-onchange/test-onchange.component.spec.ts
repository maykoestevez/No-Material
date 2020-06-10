import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOnchangeComponent } from './test-onchange.component';

describe('TestOnchangeComponent', () => {
  let component: TestOnchangeComponent;
  let fixture: ComponentFixture<TestOnchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOnchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOnchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
