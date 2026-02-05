import { createContext, type PropsWithChildren, use, useState } from "react"

import type { UserResponse } from "@/@types/user"

interface AuthContextProps {
  session: null | UserResponse
}

export const AuthContext = createContext({} as AuthContextProps)

export const useAuth = () => use(AuthContext)

export function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<null | UserResponse>(null)

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  )
}
