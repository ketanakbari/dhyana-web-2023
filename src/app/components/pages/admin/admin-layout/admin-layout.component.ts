import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
  imports: [HeaderComponent, SidebarComponent,RouterModule],
})
export class AdminLayoutComponent {
  constructor(private adminService: AdminService) {}

  isAdmin(): boolean {
    return this.adminService.isAdminUser();
  }
}
