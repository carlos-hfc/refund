import { zodResolver } from "@hookform/resolvers/zod"
import { AxiosError } from "axios"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router"
import z from "zod"

import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { signUp } from "@/services/sign-up"

const signUpSchema = z
  .strictObject({
    name: z.string().trim().nonempty("Informe o nome"),
    email: z.email("E-mail inválido"),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  })

type SignUpSchema = z.infer<typeof signUpSchema>

export function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  })

  const navigate = useNavigate()

  async function handleSignUp(data: SignUpSchema) {
    try {
      await signUp({
        email: data.email,
        name: data.name,
        password: data.password,
      })

      if (confirm("Usuário cadastrado com sucesso! Ir para a tela de login?")) {
        navigate("/")
      }

      reset()
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
      onSubmit={handleSubmit(handleSignUp)}
    >
      <Input
        legend="Nome"
        placeholder="seu nome"
        {...register("name")}
      />

      <Input
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        {...register("email")}
      />

      <Input
        legend="Senha"
        type="password"
        placeholder="123456"
        {...register("password")}
      />

      <Input
        legend="Confirmar senha"
        type="password"
        placeholder="123456"
        {...register("confirmPassword")}
      />

      <Button
        type="submit"
        isLoading={isSubmitting}
      >
        Cadastrar
      </Button>

      <Link
        to="/"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 ease-linear transition"
      >
        Já tenho uma conta
      </Link>
    </form>
  )
}
