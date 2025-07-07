import { Component } from '@angular/core';
import { SchedulrService } from '../../services/shedulr.service';

@Component({
  selector: 'app-events',
  standalone: false,
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  title = '';
  description = '';
 eventDateTime: string = '';

  constructor(private schedulrService: SchedulrService) {
    console.log('Events component initialized');
    // You can initialize any properties or services here if needed
  }
  saveEvent() {
    const date = new Date(this.eventDateTime);
    const localDateTime = date.toLocaleString('sv-SE').replace(' ', 'T');
    console.log('Saving event:', {
      title: this.title,
      description: this.description,
      eventDateTime: this.eventDateTime,
    });
    // Parse to Date, then convert to ISO string


    // Build request object
    const newEvent = {
      userId: this.schedulrService.userId,
      title: this.title,
      description: this.description,
      recipientEmail: this.schedulrService.userEmail,
      eventDateTime: localDateTime,  // <-- ISO format
      personalEvent: true,
      active: true
    };

    console.log('Saving event:', newEvent);

    this.schedulrService.createEvent(newEvent).subscribe({
      next: (response) => {
        console.log('Event saved successfully:', response);
        alert('Event saved successfully!');
        // Optionally reset fields
        this.title = '';
        this.description = '';
        this.eventDateTime = '';
      },
      error: (error) => {
        console.error('Error saving event:', error);
        alert('Failed to save event. Please try again.');
      }
    });
  }
}

