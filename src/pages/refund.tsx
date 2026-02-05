import { Link, useParams } from "react-router"

import fileImg from "@/assets/file.svg"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Select } from "@/components/select"
import { Upload } from "@/components/upload"
import { CATEGORIES, CATEGORIES_KEYS } from "@/utils/categories"

export function Refund() {
  const { id } = useParams<"id">()

  return (
    <form className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:w-lg">
      <header>
        <h1 className="text-xl font-bold text-gray-100">
          Solicitação de reembolso
        </h1>
        <p className="text-sm text-gray-200 mt-2 mb-4">
          Dados da despesa para solicitar reembolso.
        </p>
      </header>

      <Input
        required
        legend="Nome da solicitação"
        disabled={!!id}
      />

      <div className="flex gap-4">
        <Select
          required
          legend="Categoria"
          disabled={!!id}
        >
          {CATEGORIES_KEYS.map(category => (
            <option
              key={category}
              value={category}
            >
              {CATEGORIES[category].name}
            </option>
          ))}
        </Select>

        <Input
          required
          legend="Valor"
          disabled={!!id}
        />
      </div>

      {id ? (
        <Link
          to=""
          target="_blank"
          className="text-sm text-green-100 font-semibold flex items-center justify-center gap-2 my-6 hover:opacity-70 transition ease-linear"
        >
          <img
            src={fileImg}
            alt=""
          />
          Abrir comprovante
        </Link>
      ) : (
        <Upload disabled={!!id} />
      )}

      <Button type="submit">{id ? "Voltar" : "Enviar"}</Button>
    </form>
  )
}
