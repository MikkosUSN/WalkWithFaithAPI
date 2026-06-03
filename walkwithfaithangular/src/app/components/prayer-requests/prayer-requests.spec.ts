import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerRequests } from './prayer-requests';

describe('PrayerRequests', () => {
  let component: PrayerRequests;
  let fixture: ComponentFixture<PrayerRequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrayerRequests],
    }).compileComponents();

    fixture = TestBed.createComponent(PrayerRequests);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
