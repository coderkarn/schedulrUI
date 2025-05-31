export interface Reminder {
    id?: number;
    message: string;
    reminderTime: string; // ISO string
    eventId: number;
    userEmail: string;
  }
