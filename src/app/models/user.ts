/**
 * Represents an object containing user authentication properties
 * This object will be sent when requesting user authentication to the backend
 */
export interface User {
  email: string,
  password: string
}
