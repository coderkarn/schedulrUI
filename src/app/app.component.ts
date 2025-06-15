import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserDetails } from './model/user-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {
  title = 'schedulrUI';

  constructor(private router: Router) {
    // You can initialize any global state or services here if needed


    let userDetails: UserDetails | null = null;

    try {
      const stored = localStorage.getItem("userDetailsOps");
      if (stored && stored !== '{}') {
        userDetails = JSON.parse(stored);
      }
    } catch (err) {
      console.warn('Access to localStorage failed:', err);
    }

    if (userDetails) {
      console.log('User Details:', userDetails);
      this.router.navigate(['/home']);
    } else {
      console.log('No user details found in localStorage');
      this.router.navigate(['/login']);
    }
  }


}
