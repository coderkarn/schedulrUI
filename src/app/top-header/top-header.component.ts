import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-header',
  standalone: false,
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent {
  pageName: string = 'Home';

  constructor(private router: Router ){
    // You can set the page name dynamically based on the current route or other logic
  }

 
  logout() {
    // Logic to handle logout
    console.log('User logged out');
    this.router.navigate(['/login']);
    // Redirect to login page or perform other actions as needed
  }

}
