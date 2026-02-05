import { api } from "./api"

interface SignInRequest {
  email: string
  password: string
}

interface SignInResponse {
  token: string
  user: {
    id: string
    email: string
    name: string
    role: string
  }
}

export async function signIn({ email, password }: SignInRequest) {
  const response = await api.post<SignInResponse>("/sessions", {
    email,
    password,
  })

  return response.data
}
