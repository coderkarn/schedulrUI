import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-reminders',
  imports: [
    CommonModule,
    MatDatepickerModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule
  ],
  templateUrl: './reminders.component.html',
  styleUrl: './reminders.component.css'
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
