import { Component } from '@angular/core';

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

  saveReminder() {
    console.log('Reminder saved:', {
      title: this.reminderTitle,
      time: this.reminderTime,
      repeat: this.repeat
    });
  }

}
