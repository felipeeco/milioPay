import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  implements CanActivate {

  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  canActivate(): boolean {
    const dataExists = this.localStorageService.getData('userData');
    if (dataExists) {
      return true;
    } else {
      // Redirecciona a la página que desees cuando no haya datos en el localStorage
      this.router.navigate(['/']);
      return false;
    }
  }
}