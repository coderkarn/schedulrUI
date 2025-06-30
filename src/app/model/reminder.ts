export class Reminder {
  reminderId?: number;
  title: string = '';
  message: string = '';
  reminderTime: string = ''; // ISO string
  eventId: number = 0;
  userEmail: string = '';
  isActive: boolean = false;
  createdTs?: string;
  lastUpdatedTs?: string;
}
