import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup;

  constructor(private router: Router) {
    this.formulario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}')]),
    });
  }

  onSubmit() {
    // Obtener el valor del parámetro que deseas enviar
    const parametro = this.formulario.value;

    // Redireccionar a otra página y enviar el parámetro
    this.router.navigate(['/login-pass', parametro]);
  }
}
