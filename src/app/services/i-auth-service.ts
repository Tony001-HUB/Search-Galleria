import {User} from "../models/user";
import {Observable} from "rxjs";
import {AuthenticationInfo} from "../models/authenticationInfo";

/**
 * Represents a service that allows the user to log in
 */
export interface IAuthService{
  /**
   * Authenticates the user
   */
  login$(user: User): Observable<AuthenticationInfo>;
  /**
   * Logs out the user and clears the token
   */
  logout(): void;
  /**
   * Verifies user authentication
   */
  isAuthenticated(): boolean;
}
