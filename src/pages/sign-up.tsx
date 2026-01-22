import { Link } from "react-router"

import { Button } from "@/components/button"
import { Input } from "@/components/input"

export function SignUp() {
  return (
    <form className="w-full flex flex-col gap-4">
      <Input
        required
        legend="Nome"
        placeholder="seu nome"
      />

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

      <Input
        required
        legend="Confirmar senha"
        type="password"
        placeholder="123456"
      />

      <Button type="submit">Cadastrar</Button>

      <Link
        to="/"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 ease-linear transition"
      >
        Já tenho uma conta
      </Link>
    </form>
  )
}
