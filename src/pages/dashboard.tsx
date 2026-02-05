import searchImg from "@/assets/search.svg"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Pagination } from "@/components/pagination"
import { RefundItem } from "@/components/refund-item"
import { CATEGORIES } from "@/utils/categories"

const EXAMPLE = {
  id: "123",
  name: "Carlos",
  category: "food",
  amount: 34.5,
  categoryImg: CATEGORIES["food"].icon,
}

export function Dashboard() {
  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-3xl">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form className="flex flex-col flex-1 justify-between items-center pb-6 border-b border-b-gray-400 md:flex-row gap-2 mt-6">
        <Input placeholder="Pesquisar pelo nome" />
        <Button variant="icon">
          <img
            src={searchImg}
            alt=""
            className="w-5"
          />
        </Button>
      </form>

      <div className="mt-6 flex flex-col gap-4 max-h-85.5 overflow-y-auto">
        <RefundItem
          to=""
          data={EXAMPLE}
        />
      </div>

      <Pagination
        current={1}
        totalPages={10}
        onNext={() => {}}
        onPrev={() => {}}
      />
    </div>
  )
}
