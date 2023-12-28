import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private isAdmin = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkAdminRoute();
      }
    });
  }
  checkAdminRoute() {
    const isAdminRoute = this.router.url.startsWith('/admin');
    this.setAdminStatus(isAdminRoute);
  }
  isAdminUser(): boolean {
    return this.isAdmin;
  }

  setAdminStatus(isAdmin: boolean): void {
    this.isAdmin = isAdmin;
  }
}
