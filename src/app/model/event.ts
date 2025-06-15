export class Event {
  id?: number;
  title: string = '';
  description?: string = '';
  eventDateTime: string = ''; // ISO 8601 format (e.g., "2025-05-01T10:30:00")
  sendToEmail?: string;
  selfReminder: boolean = false;
  isActive: boolean = false; 
  createdTs?: string;
  lastUpdatedTs?: string;
}


