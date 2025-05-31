import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopHeaderComponent } from './top-header/top-header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TopHeaderComponent,SideNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'schedulrUI';
}
