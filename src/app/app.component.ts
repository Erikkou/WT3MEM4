import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, LoginComponent, AdminDashboardComponent] // Add CommonModule here
})
export class AppComponent {
  currentView: 'login' | 'admin' = 'login';

  navigateTo(view: 'login' | 'admin') {
    this.currentView = view;
  }
}

