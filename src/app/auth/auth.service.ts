import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _currentUser: BehaviorSubject<User>;
  public readonly currentUser$: Observable<User>;

  constructor() {
    this._currentUser = new BehaviorSubject(null);
    this.currentUser$ = this._currentUser.asObservable();
    this.isAuthenticated();
  }

  isAuthenticated() {
    const user = usersDB.find(user => user.username === localStorage.getItem('user'));
    this._currentUser.next(user);
  }

  login(userId: string, password: string) {
    const user = usersDB.find(user => user.userId === userId && user.password === password);
    if(user) {
      localStorage.setItem('user', user.username);
      this._currentUser.next(user);
    } else {
      this._currentUser.next(null);
    }
  }

  public get isLoggedIn(): User {
    return this._currentUser.value;
  }

  logout() {
    localStorage.removeItem('user');
    this._currentUser.next(null);
  }
}

const usersDB: User[] = [
  { userId: "abc@media.com", password: "abc123", username: "tom" },
  { userId: "def@media.com", password: "def123", username: "dick" }
];
