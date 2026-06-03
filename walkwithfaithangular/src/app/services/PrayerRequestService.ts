import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { PrayerRequest } from '../models/PrayerRequest';

// This service handles communication between
// the Angular application and the Prayer Request API.
@Injectable({
  providedIn: 'root'
})
export class PrayerRequestService
{
  // URL used to access the Prayer Request API.
  private apiUrl = 'http://localhost:3000/api/prayers';

  constructor(private http: HttpClient)
  {
  }

  // Get all prayer requests from the API.
  getPrayerRequests(): Observable<PrayerRequest[]>
  {
    return this.http.get<PrayerRequest[]>(this.apiUrl);
  }

  // Get one prayer request by ID.
  getPrayerRequest(id: number): Observable<PrayerRequest>
  {
    return this.http.get<PrayerRequest>(`${this.apiUrl}/${id}`);
  }

  // Create a new prayer request.
  addPrayerRequest(prayerRequest: PrayerRequest): Observable<PrayerRequest>
  {
    return this.http.post<PrayerRequest>(this.apiUrl, prayerRequest);
  }

  // Update an existing prayer request.
  updatePrayerRequest(id: number, prayerRequest: PrayerRequest): Observable<PrayerRequest>
  {
    return this.http.put<PrayerRequest>(`${this.apiUrl}/${id}`, prayerRequest);
  }

  // Delete a prayer request.
  deletePrayerRequest(id: number): Observable<any>
  {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
