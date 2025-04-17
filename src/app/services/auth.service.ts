import { inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly router = inject(Router)
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject(
    JSON.parse(sessionStorage.getItem('currentUser') || 'null')
  );
  public currentUser$: Observable<any> = this.currentUserSubject.asObservable();
  private idCount = signal(1);

  constructor() {}

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): void {
    const registeredUser = JSON.parse(
      localStorage.getItem('registeredUsers') || '[]'
    );

    if (!registeredUser || !registeredUser.find((user: any) => user.username === username && user.password === password)) {
      return;
    }

    const user = { username, token: 'LoggedInToken' };
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user)
    // this.router.navigate(['/home']);

  }

  logout(): void {
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  register(userPayload: any): void {
    const existingUsers = JSON.parse(
      localStorage.getItem('registeredUsers') || '[]'
    );

    const userToCreate = {
      id: this.idCount(),
      username: userPayload.username,
      email: userPayload.email,
      password: userPayload.password,
      token: '',
    };

    existingUsers.push(userToCreate);
    localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));
    this.idCount.update((value) => value + 1);
  }
}
