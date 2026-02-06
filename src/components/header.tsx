import logoImg from "@/assets/logo.svg"
import logoutImg from "@/assets/logout.svg"
import { useAuth } from "@/contexts/auth-context"

export function Header() {
  const { remove, session } = useAuth()

  return (
    <header className="w-full flex justify-between">
      <img
        src={logoImg}
        alt=""
        className="my-8"
      />

      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-200">
          Olá {session?.user.name}
        </span>
        <img
          src={logoutImg}
          alt=""
          className="my-8 cursor-pointer hover:opacity-75 transition ease-linear"
          onClick={remove}
        />
      </div>
    </header>
  )
}
