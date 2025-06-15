import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  selectedDate: Date = new Date();
  constructor() {
    console.log('Dashboard component initialized');
    // You can initialize any properties or services here if needed
  }


  reminders = [
    { title: 'Time to deep', time: '19:45PM' },
    { title: 'Doctor appointment', time: 'Apr 22, 2024 9:00 AM' }
  ];

}
