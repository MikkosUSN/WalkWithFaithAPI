import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerRequestForm } from './prayer-request-form';

describe('PrayerRequestForm', () => {
  let component: PrayerRequestForm;
  let fixture: ComponentFixture<PrayerRequestForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrayerRequestForm],
    }).compileComponents();

    fixture = TestBed.createComponent(PrayerRequestForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
