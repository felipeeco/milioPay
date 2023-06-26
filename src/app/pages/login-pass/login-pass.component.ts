import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users-service.service';
import { tap } from 'rxjs/operators';
import { UserInterface } from 'src/app/interfaces/UserInterface';
import { Location } from '@angular/common';
import { LocalStorageService } from '../../services/local-storage-user.service';

@Component({
  selector: 'app-login-pass',
  templateUrl: './login-pass.component.html',
  styleUrls: ['./login-pass.component.css']
})
export class LoginPassComponent implements OnInit {
  
  //propiedades
  email: any;
  password: any;
  formulario: FormGroup;
  isPasswordVisible: boolean = false;

  constructor(private router: Router, 
    private route: ActivatedRoute, private usersService: UsersService, 
    private location: Location, private localStorageService: LocalStorageService) 
    {
    this.formulario = new FormGroup({
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.email = params.get('email');
    });
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  goBack(): void {
    this.location.back();
  }
  
  onSubmit() {
    this.usersService.getUsers().pipe(
      tap((users: UserInterface[]) => {
        const user = users.find(u => u.email === this.email && u.password === this.formulario.value.password);

        if (user) {
          // Credenciales válidas, redirigir a la página principal
          this.localStorageService.saveData('userData', user);
          this.router.navigate(['/user']);
        } else {
          // Credenciales inválidas, mostrar mensaje de error
          console.log('Credenciales inválidas');
        }
      })
    ).subscribe();
  } 
}
