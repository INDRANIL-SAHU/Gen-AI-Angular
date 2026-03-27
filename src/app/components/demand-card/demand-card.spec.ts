import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandCard } from './demand-card';

describe('DemandCard', () => {
  let component: DemandCard;
  let fixture: ComponentFixture<DemandCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandCard],
    }).compileComponents();

    fixture = TestBed.createComponent(DemandCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
