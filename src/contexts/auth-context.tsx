import {
  createContext,
  type PropsWithChildren,
  use,
  useEffect,
  useState,
} from "react"

import type { UserResponse } from "@/@types/user"

interface AuthContextProps {
  isLoading: boolean
  session: null | UserResponse
  save(data: UserResponse): void
  remove(): void
}

const SESSION_STORAGE_KEY = "@refund"

export const AuthContext = createContext({} as AuthContextProps)

export const useAuth = () => use(AuthContext)

export function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<null | UserResponse>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadUser()
  }, [])

  function save(data: UserResponse) {
    sessionStorage.setItem(
      `${SESSION_STORAGE_KEY}:user`,
      JSON.stringify(data.user),
    )
    sessionStorage.setItem(`${SESSION_STORAGE_KEY}:token`, data.token)
    setSession(data)
  }

  function loadUser() {
    const user = sessionStorage.getItem(`${SESSION_STORAGE_KEY}:user`)
    const token = sessionStorage.getItem(`${SESSION_STORAGE_KEY}:token`)

    if (token && user) {
      setSession({
        token,
        user: JSON.parse(user),
      })
    }

    setIsLoading(false)
  }

  function remove() {
    setSession(null)
    sessionStorage.removeItem(`${SESSION_STORAGE_KEY}:user`)
    sessionStorage.removeItem(`${SESSION_STORAGE_KEY}:token`)
  }

  return (
    <AuthContext.Provider value={{ session, save, isLoading, remove }}>
      {children}
    </AuthContext.Provider>
  )
}
