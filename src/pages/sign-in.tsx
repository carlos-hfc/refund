import { Link } from "react-router"

import { Button } from "@/components/button"
import { Input } from "@/components/input"

export function SignIn() {
  return (
    <form className="w-full flex flex-col gap-4">
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="123456"
      />

      <Button type="submit">Entrar</Button>

      <Link
        to="/sign-up"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 ease-linear transition"
      >
        Criar conta
      </Link>
    </form>
  )
}
