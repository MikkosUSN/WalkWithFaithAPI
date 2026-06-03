import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { PrayerRequest } from '../../models/PrayerRequest';

import { PrayerRequestService } from '../../services/PrayerRequestService';

@Component({
  selector: 'app-prayer-request-form',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './prayer-request-form.html',
  styleUrl: './prayer-request-form.css',
})
export class PrayerRequestForm implements OnInit
{
  // Tracks whether the form is adding or editing a prayer request.
  isEditMode: boolean = false;

  // Stores the selected prayer request ID when editing.
  prayerRequestId: number = 0;

  // Stores the prayer request entered by the user.
  prayerRequest: PrayerRequest =
  {
    PrayerTitle: '',
    PrayerText: '',
    PrayerCategory: '',
    IsAnswered: 0,
    DateAdded: new Date().toISOString().split('T')[0]
  };

  constructor(
    private prayerRequestService: PrayerRequestService,
    private route: ActivatedRoute,
    private router: Router,
    private changeDetector: ChangeDetectorRef)
  {
  }

  // Checks whether the form should create or edit a prayer request.
  ngOnInit(): void
  {
    const id = this.route.snapshot.paramMap.get('id');

    if (id)
    {
      this.isEditMode = true;
      this.prayerRequestId = Number(id);
      this.loadPrayerRequest(this.prayerRequestId);
    }
  }

  // Loads the selected prayer request into the form.
  loadPrayerRequest(id: number): void
  {
    this.prayerRequestService.getPrayerRequests().subscribe({
      next: (data) =>
      {
        const foundPrayerRequest =
          data.find(p => p.PrayerID === id);

        if (foundPrayerRequest)
        {
          this.prayerRequest = foundPrayerRequest;

          // Updates the form after the prayer request is loaded.
          this.changeDetector.detectChanges();
        }
      },
      error: (error) =>
      {
        console.log('Error loading prayer request:', error);
      }
    });
  }

  // Saves a new prayer request or updates an existing one.
  savePrayerRequest(): void
  {
    // Keeps the date in a format MySQL can update cleanly.
    this.prayerRequest.DateAdded =
      this.prayerRequest.DateAdded.split('T')[0];

    if (this.isEditMode)
    {
      this.prayerRequestService
        .updatePrayerRequest(this.prayerRequestId, this.prayerRequest)
        .subscribe({
          next: () =>
          {
            this.router.navigate(['/prayers']);
          },
          error: (error) =>
          {
            console.log('Error updating prayer request:', error);
          }
        });
    }
    else
    {
      this.prayerRequestService
        .addPrayerRequest(this.prayerRequest)
        .subscribe({
          next: () =>
          {
            this.router.navigate(['/prayers']);
          },
          error: (error) =>
          {
            console.log('Error saving prayer request:', error);
          }
        });
    }
  }
}
