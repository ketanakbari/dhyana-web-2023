import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminService {

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkAdminRoute();
      }
    });
  }

  checkAdminRoute(): boolean {
    return this.router.url.startsWith('/admin');
  }

  isAdminUser(): boolean {
    return this.checkAdminRoute();
  }
}
