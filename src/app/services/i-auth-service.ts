import {User} from "../models/user";
import {Observable} from "rxjs";

export interface IAuthService{
  login$(user: User): Observable<void>;
  setToken(response): void;
  token(): any;
  logout(): void;
  isAuthenticated(): any;
}
