export interface Event {
    id?: number;
    title: string;
    description?: string;
    eventDateTime: string; // ISO 8601 format (e.g., "2025-05-01T10:30:00")
    sendToEmail?: string;
    selfReminder: boolean;
    isActive: boolean;
    createdTs?: string;
    lastUpdatedTs?: string;
    createdBy?: UserDetails;
  }
  
  export interface UserDetails {
    id: number;
    email: string;
    name?: string;
  }
  
