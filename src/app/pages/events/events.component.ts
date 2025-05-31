import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-events',
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
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
