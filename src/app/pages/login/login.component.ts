import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserDetails } from '../../model/user-details';
import { SchedulrService } from '../../services/shedulr.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router,
    private schedulrService: SchedulrService
  ) {
    this.reset();
  }

  login(): void {
    if (this.email && this.password) {
      // Placeholder logic — replace with actual authentication logic
      console.log('Logging in with', this.email, this.password);
      let userDetails = new UserDetails();
      userDetails.emailId = this.email;
      userDetails.password = this.password;
      this.schedulrService.login(userDetails).subscribe({
        next: response => {
          console.log('Login successful:', response);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userDetails', JSON.stringify(response));
          this.schedulrService.userId = response.userId; // Assuming response contains userId
          this.schedulrService.userEmail = response.emailId; // Assuming response contains

          this.router.navigate(['/dashboard']);
        },
        error: error => {
          console.error('Login failed:', error);

          // If your backend sends JSON with 'message' field, show that:
          if (error.error && error.error.message) {
            alert(error.error.message);
          } else {
            alert('Login failed. Please try again.');
          }
        }
      });
    } else {
      alert('Please enter both email and password.');
    }
  }

  reset(): void {
    console.log("reseting");
    this.email = '';
    this.password = '';
  }
}

