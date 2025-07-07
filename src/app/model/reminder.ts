export class Reminder {
  reminderId?: number;
  title: string = '';
  message: string = '';
  reminderTime: string = ''; // ISO string
  eventId: number = 0;
  userEmail: string = '';
  active: boolean = false;
  createdTs?: string;
  lastUpdatedTs?: string;
}
