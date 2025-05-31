import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTooltip } from '@angular/material/tooltip';
import { MatList, MatListModule, MatNavList } from '@angular/material/list';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { TopHeaderComponent } from './top-header/top-header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    AppComponent,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSidenav,
    MatTooltip,
    MatList,
    MatListModule,
    MatSidenav,
    MatListModule,
    MatNavList,
    RouterOutlet,
    TopHeaderComponent,
    SideNavComponent,
    BrowserModule,
    AppRoutingModule,
  ],
})
export class AppModule { }