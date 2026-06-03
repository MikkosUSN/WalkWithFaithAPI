import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ActivatedRoute, RouterLink } from '@angular/router';

import { PrayerRequest } from '../../models/PrayerRequest';

import { PrayerRequestService } from '../../services/PrayerRequestService';

@Component({
  selector: 'app-prayer-request-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './prayer-request-details.html',
  styleUrl: './prayer-request-details.css',
})
export class PrayerRequestDetails implements OnInit
{
  // Stores the selected prayer request.
  prayerRequest?: PrayerRequest;

  constructor(
    private route: ActivatedRoute,
    private prayerRequestService: PrayerRequestService,
    private changeDetector: ChangeDetectorRef)
  {
  }

  // Load the selected prayer request when the page opens.
  ngOnInit(): void
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.loadPrayerRequest(id);
  }

  // Loads a single prayer request using the ID from the URL.
  loadPrayerRequest(id: number): void
  {
    this.prayerRequestService.getPrayerRequests().subscribe({
      next: (data) =>
      {
        this.prayerRequest = data.find(p => p.PrayerID === id);

        // Updates the page after the selected prayer request is found.
        this.changeDetector.detectChanges();
      },
      error: (error) =>
      {
        console.log('Error loading prayer request:', error);
      }
    });
  }
}
