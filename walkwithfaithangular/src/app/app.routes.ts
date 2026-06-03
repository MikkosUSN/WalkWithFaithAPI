import { Routes } from '@angular/router';

import { Home } from './components/home/home';

import { PrayerRequests } from './components/prayer-requests/prayer-requests';

import { PrayerRequestForm } from './components/prayer-request-form/prayer-request-form';

import { PrayerRequestDetails } from './components/prayer-request-details/prayer-request-details';

import { Devotion } from './components/devotion/devotion';

export const routes: Routes =
[
  // Default route for the home page.
  {
    path: '',
    component: Home
  },

  // Displays all prayer requests.
  {
    path: 'prayers',
    component: PrayerRequests
  },

  // Opens the form used to create a new prayer request.
  {
    path: 'prayers/new',
    component: PrayerRequestForm
  },

  // Opens the form used to edit an existing prayer request.
  {
    path: 'prayers/edit/:id',
    component: PrayerRequestForm
  },

  // Displays one prayer request.
  {
    path: 'prayers/:id',
    component: PrayerRequestDetails
  },

  // Displays the Devotions page placeholder.
  {
    path: 'devotions',
    component: Devotion
  }
];
