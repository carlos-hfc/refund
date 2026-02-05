import { zodResolver } from "@hookform/resolvers/zod"
import { AxiosError } from "axios"
import { useForm } from "react-hook-form"
import { Link } from "react-router"
import z from "zod"

import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { useAuth } from "@/contexts/auth-context"
import { signIn } from "@/services/sign-in"

const signInSchema = z.strictObject({
  email: z.email("E-mail inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
})

type SignInSchema = z.infer<typeof signInSchema>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  })

  const { save } = useAuth()

  async function handleSignIn(data: SignInSchema) {
    try {
      const { token, user } = await signIn({
        email: data.email,
        password: data.password,
      })

      save({ token, user })
    } catch (error) {
      if (error instanceof z.ZodError) {
        return alert(error.issues[0].message)
      }

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message)
      }
    }
  }

  return (
    <form
      className="w-full flex flex-col gap-4"
      onSubmit={handleSubmit(handleSignIn)}
    >
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        {...register("email")}
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="123456"
        {...register("password")}
      />

      <Button
        type="submit"
        isLoading={isSubmitting}
      >
        Entrar
      </Button>

      <Link
        to="/sign-up"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 ease-linear transition"
      >
        Criar conta
      </Link>
    </form>
  )
}
