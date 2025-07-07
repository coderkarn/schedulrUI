import { Component } from '@angular/core';
import { SchedulrService } from '../../services/shedulr.service';

@Component({
  selector: 'app-reminders',
  standalone: false,
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent {
  reminderTitle = '';
  reminderTime = '';
  repeat = false;

  constructor(private schedulrService: SchedulrService) {
    console.log('Reminder component initialized');
    // You can initialize any properties or services here if needed
  }

  saveReminder() {
    const date = new Date(this.reminderTime);
    const localDateTime = date.toLocaleString('sv-SE').replace(' ', 'T');
    const newReminder = {
      userId: this.schedulrService.userId,
      title: this.reminderTitle,
      reminderTime: localDateTime,
      repeatDaily: this.repeat,
      active: true
    };

    console.log('Saving reminder:', newReminder);

    this.schedulrService.createReminder(newReminder).subscribe({
      next: (response) => {
        console.log('Reminder saved successfully:', response);
        alert('Reminder saved successfully!');
        // Reset fields
        this.reminderTitle = '';
        this.reminderTime = '';
        this.repeat = false;
      },
      error: (error) => {
        console.error('Error saving reminder:', error);
        alert('Failed to save reminder. Please try again.');
      }
    });
  }

}
