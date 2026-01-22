import { Link } from "react-router"

export function NotFound() {
  return (
    <div className="w-dvw h-dvh flex flex-col justify-center items-center font-semibold">
      <h1 className="text-gray-100 text-2xl mb-10">
        Ops! Essa página não existe.
      </h1>
      <Link
        to="/"
        className="text-green-100 hover:text-green-200 transition ease-linear"
      >
        Voltar para o início
      </Link>
    </div>
  )
}
