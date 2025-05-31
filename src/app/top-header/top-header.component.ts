import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-top-header',
  imports: [
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.css'
})
export class TopHeaderComponent {
  pageName: string = 'Home';

  constructor() {
    // You can set the page name dynamically based on the current route or other logic
  }

   
  logout() {
    // Logic to handle logout
    console.log('User logged out');
    // Redirect to login page or perform other actions as needed
  }

}
