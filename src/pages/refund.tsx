import { Input } from "@/components/input"
import { Select } from "@/components/select"
import { CATEGORIES, CATEGORIES_KEYS } from "@/utils/categories"

export function Refund() {
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
      />

      <Select
        required
        legend="Categoria"
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
    </form>
  )
}
