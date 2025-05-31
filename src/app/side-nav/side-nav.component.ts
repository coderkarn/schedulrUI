import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem } from '@angular/material/list';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-side-nav',
  imports: [MatList,MatListItem,MatIcon,MatTooltip],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  constructor() { 
    // You can initialize any properties or services here if needed
  }

}
