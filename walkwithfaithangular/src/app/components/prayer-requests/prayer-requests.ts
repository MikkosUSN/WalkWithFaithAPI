import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';

import { PrayerRequest } from '../../models/PrayerRequest';

import { PrayerRequestService } from '../../services/PrayerRequestService';

@Component({
  selector: 'app-prayer-requests',
  imports: [CommonModule, RouterLink],
  templateUrl: './prayer-requests.html',
  styleUrl: './prayer-requests.css',
})
export class PrayerRequests implements OnInit
{
  // List of prayer requests displayed on the page.
  prayerRequests: PrayerRequest[] = [];

  constructor(
    private prayerRequestService: PrayerRequestService,
    private changeDetector: ChangeDetectorRef)
  {
  }

  // Load all prayer requests when the page opens.
  ngOnInit(): void
  {
    this.loadPrayerRequests();
  }

  // Gets all prayer requests from the API.
  loadPrayerRequests(): void
  {
    this.prayerRequestService.getPrayerRequests().subscribe({
      next: (data) =>
      {
        this.prayerRequests = data;

        // Updates the page after the API data is loaded.
        this.changeDetector.detectChanges();
      },
      error: (error) =>
      {
        console.log('Error loading prayer requests:', error);
      }
    });
  }

  // Deletes a prayer request.
  deletePrayerRequest(id?: number): void
  {
    if (!id)
    {
      return;
    }

    const confirmed =
      confirm('Are you sure you want to delete this prayer request?');

    if (confirmed)
    {
      this.prayerRequestService.deletePrayerRequest(id).subscribe({
        next: () =>
        {
          this.loadPrayerRequests();
        },
        error: (error) =>
        {
          console.log('Error deleting prayer request:', error);
        }
      });
    }
  }
}
