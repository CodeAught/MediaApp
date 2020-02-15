import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalid: boolean;

  constructor(private authService: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.invalid = false;
    this.loginForm = new FormGroup({
      userId: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  login() {
    const { userId, password } = this.loginForm.value;
    this.authService.login(userId, password);
    if(this.authService.isLoggedIn) {
      this.dialog.closeAll();
    } else {
      this.invalid = true;
    }
  }

}
