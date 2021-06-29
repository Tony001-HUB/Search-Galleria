import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {User} from "../models/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login$(user: User): Observable<void> {
    return this.http
      .post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKeyFireBaseAuth}`, user)
      .pipe(
        tap(this.setToken)
      );
  }

  private setToken(response): void {
    if (response) {
      const expData = new Date( new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('fb-token-exp', expData.toString());
      localStorage.setItem('fb-token', response.idToken);
    } else {
      localStorage.clear();
    }
  }

  get token(): any {
    const expDate = new Date(localStorage.getItem('fb-token-exp'));
    if ( new Date() > expDate ) {
      this.logout();
      return null;
    }
    return localStorage.getItem('fb-token');
  }

  logout(): void {
    this.setToken(null);
  }

  isAuthenticated(): any {
    return !!this.token;
  }

}
