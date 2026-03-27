import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCounter } from './status-counter';

describe('StatusCounter', () => {
  let component: StatusCounter;
  let fixture: ComponentFixture<StatusCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusCounter],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
