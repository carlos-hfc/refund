import { zodResolver } from "@hookform/resolvers/zod"
import { useQuery } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useSearchParams } from "react-router"
import z from "zod"

import removeImg from "@/assets/remove-white.svg"
import searchImg from "@/assets/search.svg"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Pagination } from "@/components/pagination"
import { RefundItem } from "@/components/refund-item"
import { listRefunds } from "@/services/list-refunds"
import { CATEGORIES } from "@/utils/categories"

const refundFilterSchema = z.strictObject({
  name: z.string().optional(),
})

type RefundFilterSchema = z.infer<typeof refundFilterSchema>

export function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams()

  const page = z.coerce.number().parse(searchParams.get("page") ?? 1)
  const name = searchParams.get("name")

  const { data } = useQuery({
    queryKey: ["refunds", { page, name }],
    queryFn: () => listRefunds({ page, name }),
  })

  const { register, handleSubmit, reset } = useForm<RefundFilterSchema>({
    resolver: zodResolver(refundFilterSchema),
    defaultValues: {
      name: name ?? "",
    },
  })

  function handlePaginate(page: number) {
    setSearchParams(prev => {
      prev.set("page", String(page))

      return prev
    })
  }

  function handleFilter(data: RefundFilterSchema) {
    setSearchParams(prev => {
      if (data.name) {
        prev.set("name", data.name)
      } else {
        prev.delete("name")
      }

      return prev
    })
  }

  function handleCleanFilters() {
    setSearchParams(prev => {
      prev.delete("page")
      prev.delete("name")

      return prev
    })

    reset()
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-3xl">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form
        onSubmit={handleSubmit(handleFilter)}
        className="flex flex-col flex-1 justify-between items-center pb-6 border-b border-b-gray-400 md:flex-row gap-2 mt-6"
      >
        <Input
          placeholder="Pesquisar pelo nome"
          {...register("name")}
        />
        <Button
          variant="icon"
          type="submit"
        >
          <img
            src={searchImg}
            alt=""
            className="w-5"
          />
        </Button>
        <Button
          variant="icon"
          type="button"
          onClick={handleCleanFilters}
        >
          <img
            src={removeImg}
            alt=""
            className="w-5"
          />
        </Button>
      </form>

      <div className="my-6 flex flex-col gap-4 max-h-85.5 overflow-y-auto">
        {data?.refunds &&
          data?.refunds.length > 0 &&
          data.refunds.map(refund => (
            <RefundItem
              key={refund.id}
              to={`/refund/${refund.id}`}
              data={{
                amount: refund.amount,
                category: refund.category,
                categoryImg: CATEGORIES[refund.category].icon,
                id: refund.id,
                name: refund.user.name,
              }}
            />
          ))}
      </div>

      {data?.pagination && (
        <Pagination
          current={data.pagination.page}
          totalPages={data.pagination.totalPages}
          onPageChange={handlePaginate}
        />
      )}
    </div>
  )
}
