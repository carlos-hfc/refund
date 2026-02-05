import type { UserResponse } from "@/@types/user"

import { api } from "./api"

interface SignInRequest {
  email: string
  password: string
}

type SignInResponse = UserResponse

export async function signIn({ email, password }: SignInRequest) {
  const response = await api.post<SignInResponse>("/sessions", {
    email,
    password,
  })

  return response.data
}
