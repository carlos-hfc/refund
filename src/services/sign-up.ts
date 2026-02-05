import { api } from "./api"

interface SignUpRequest {
  name: string
  email: string
  password: string
}

export async function signUp({ email, name, password }: SignUpRequest) {
  await api.post("/users", { email, name, password })
}
