import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject:BehaviorSubject<any> = new BehaviorSubject(JSON.parse(sessionStorage.getItem('currentUser') || 'null'))
  public currentUser$: Observable<any> = this.currentUserSubject.asObservable()
  private idCount = signal(1)

  public get currentUserValue(): any {
    return this.currentUserSubject.value
  }

  login(username: string, password: string): void {
    const user = { username, token: 'fake-jwt-token'  }
    sessionStorage.setItem('currentUser', JSON.stringify(user))
    this.currentUserSubject.next(user)
  }

  logout(): void {
   sessionStorage.removeItem('currentUser') 
   this.currentUserSubject.next(null)
  }

  register(userPayload:any): void {
    console.log(userPayload);
    const userToCreate = {
      id: this.idCount(),
      username: userPayload.username,
      email: userPayload.email,
      password: userPayload.password,
      token: 'fake-jwt-token'
    }
    localStorage.setItem("registeredUser", JSON.stringify(userToCreate))
    this.idCount.update((value) => value + 1)
  }

}
