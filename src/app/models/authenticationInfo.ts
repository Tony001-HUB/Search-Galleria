/**
 * Represents an object showing the two authorization properties
 */
export interface AuthenticationInfo {
  email: string,
  expiresIn: string,
  idToken: string,
  refreshToken: string
}
