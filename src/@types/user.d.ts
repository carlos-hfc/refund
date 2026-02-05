export type UserRole = "employee" | "manager"

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
}

export interface UserResponse {
  user: User
  token: string
}
