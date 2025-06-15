import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserDetails } from '../../model/user-details';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) { }

  login(): void {
    if (this.email && this.password) {
      // Placeholder logic — replace with actual authentication logic
      console.log('Logging in with', this.email, this.password);
      let userDetails = new UserDetails();
      userDetails.emailId = this.email;
      userDetails.password = this.password; 

      console.log('User Details:', userDetails, JSON.stringify(userDetails));
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      this.reset();
      // Redirect to dashboard or show error
      this.router.navigate(['/dashboard']);
    } else {
      alert('Please enter both email and password.');
    }
  }

  reset(): void {
    this.email = '';
    this.password = ''; 
  }
}

