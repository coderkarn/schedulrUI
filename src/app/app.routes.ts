import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'events', loadComponent: () => import('./pages/events/events.component').then(m => m.EventsComponent) },
  { path: 'reminders', loadComponent: () => import('./pages/reminders/reminders.component').then(m => m.RemindersComponent) },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

