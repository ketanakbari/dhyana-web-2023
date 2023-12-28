import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
  imports: [HeaderComponent, SidebarComponent],
})
export class AdminLayoutComponent {
  constructor(private adminService: AdminService) {}
  isadmin(): boolean {
    return this.adminService.isAdminUser();
  }
}
