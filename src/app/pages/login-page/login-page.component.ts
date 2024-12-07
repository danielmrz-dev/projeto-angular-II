import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginAuthService } from '../../services/login-auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup
  router = inject(Router)
  isLogged = inject(LoginAuthService)

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: this._fb.control('', [Validators.required]),
      senha: this._fb.control('', [Validators.required]),
    })
  }

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get senha(): FormControl {
    return this.loginForm.get('senha') as FormControl;
  }

  onSubmit() {
    this.isLogged.login()
    this.router.navigate(['/cadastro'])
  }
}
