import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerRequestDetails } from './prayer-request-details';

describe('PrayerRequestDetails', () => {
  let component: PrayerRequestDetails;
  let fixture: ComponentFixture<PrayerRequestDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrayerRequestDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(PrayerRequestDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
