import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Devotion } from '../models/Devotion';

// Handles communication between Angular and the Devotion API.
@Injectable({
  providedIn: 'root'
})
export class DevotionService
{
  // API endpoint for devotions.
  private apiUrl = 'http://localhost:3000/api/devotions';

  constructor(private http: HttpClient)
  {
  }

  // Get all devotions.
  getDevotions(): Observable<Devotion[]>
  {
    return this.http.get<Devotion[]>(this.apiUrl);
  }

  // Create a devotion.
  addDevotion(devotion: Devotion): Observable<Devotion>
  {
    return this.http.post<Devotion>(this.apiUrl, devotion);
  }

  // Update a devotion.
  updateDevotion(
    id: number,
    devotion: Devotion
  ): Observable<Devotion>
  {
    return this.http.put<Devotion>(
      `${this.apiUrl}/${id}`,
      devotion
    );
  }

  // Delete a devotion.
  deleteDevotion(id: number): Observable<any>
  {
    return this.http.delete(
      `${this.apiUrl}/${id}`
    );
  }
}
