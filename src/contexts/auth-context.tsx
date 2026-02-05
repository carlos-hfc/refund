import { createContext, type PropsWithChildren, use, useState } from "react"

import type { UserResponse } from "@/@types/user"

interface AuthContextProps {
  session: null | UserResponse
  save(data: UserResponse): void
}

export const AuthContext = createContext({} as AuthContextProps)

export const useAuth = () => use(AuthContext)

export function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<null | UserResponse>(null)

  function save(data: UserResponse) {
    setSession(data)
  }

  return (
    <AuthContext.Provider value={{ session, save }}>
      {children}
    </AuthContext.Provider>
  )
}
