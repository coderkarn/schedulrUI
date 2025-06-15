import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RemindersComponent } from './pages/reminders/reminders.component';
import { EventsComponent } from './pages/events/events.component';

//route
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'events', component: EventsComponent },
  { path: 'reminders', component: RemindersComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
