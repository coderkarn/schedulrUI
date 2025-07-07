export const API_BASE = '/auth';
export const API_EVENT = '/event';
export const API_REMINDER = '/reminder';

// Auth
export const POST_AUTH_LOGIN = `${API_BASE}/login`;

// Events
export const POST_EVENT_CREATE = `${API_EVENT}/create`;
export const GET_EVENT_BY_USERID = (userId: number) => `${API_EVENT}/get/${userId}`;

// Reminders
export const POST_REMINDER_CREATE = `${API_REMINDER}/create`;
export const GET_REMINDER_BY_USERID = (userId: number) => `${API_REMINDER}/get/${userId}`;