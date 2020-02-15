import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from '../user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser: User;
  private unsubscribe$: Subject<void> = new Subject();

  constructor(private dialog: MatDialog, private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUser$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(user => {
          this.currentUser = user;
        }
      );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onLogout() {
    this.router.navigate(['/home']);
    this.authService.logout();
  }

  openLoginDialog() {
    this.router.navigate(['/home']);
    this.dialog.open(LoginComponent);
  }

}
