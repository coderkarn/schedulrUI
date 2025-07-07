
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { 
  POST_AUTH_LOGIN, POST_EVENT_CREATE, GET_EVENT_BY_USERID, 
  POST_REMINDER_CREATE, GET_REMINDER_BY_USERID, 
  POST_AUTH_SIGNUP
} from '../../common/app-constants';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

// Import your request/response models if you have them:
// import { UserDetailsRequest, UserDetailsResponse, UserEventRequest, UserEventResponse, UserReminderRequest, UserReminderResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SchedulrService {
  private baseUrl = environment.apiUrl;

  userId: number = 0; // Initialize userId to 0 or any default value
  userEmail: string = ''; // Initialize userEmail to an empty string

  constructor(private http: HttpClient) {}

  // ✅ Login
  login(request: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${POST_AUTH_LOGIN}`, request);
  }
  createUser(request: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}${POST_AUTH_SIGNUP}`, request);
  }

  // ✅ Create event
  createEvent(request: any): Observable<string> {
    return this.http.post(`${this.baseUrl}${POST_EVENT_CREATE}`, request, { responseType: 'text' });
  }

  // ✅ Get events by userId
  getEventsByUserId(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}${GET_EVENT_BY_USERID(userId)}`);
  }

  // ✅ Create reminder
  createReminder(request: any): Observable<string> {
    return this.http.post(`${this.baseUrl}${POST_REMINDER_CREATE}`, request, { responseType: 'text' });
  }

  // ✅ Get reminders by userId
  getRemindersByUserId(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}${GET_REMINDER_BY_USERID(userId)}`);
  }
}
