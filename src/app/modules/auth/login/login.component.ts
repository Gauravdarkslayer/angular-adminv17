import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.value.username === 'admin' && this.loginForm.value.password === '1234') {
      this._snackBar.open('Logged in successfully !', undefined, {
        panelClass: ['custom-snackbar']

      });
      this.router.navigate(['/dashboard']);
    } else {
      this._snackBar.open('Incorrect username or password', undefined,
        { panelClass: ['custom-snackbar'] }
      );
    }

  }
}

