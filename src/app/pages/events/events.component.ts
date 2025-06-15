import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone: false,
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  title = '';
  description = '';
  eventDate: Date | null = null;
  startTime = '';

  saveEvent() {
    console.log('Saving event:', {
      title: this.title,
      description: this.description,
      date: this.eventDate,
      time: this.startTime
    });
  }

}
