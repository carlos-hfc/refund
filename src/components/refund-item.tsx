import { Link } from "react-router"

import { formatCurrency } from "@/utils/format-currency"

export interface RefundItemProps {
  id: string
  name: string
  category: string
  amount: number
  categoryImg: string
}

interface Props extends React.ComponentProps<typeof Link> {
  data: RefundItemProps
}

export function RefundItem({ to, data, ...props }: Props) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 hover:bg-green-100/50 cursor-pointer rounded-md p-2"
      {...props}
    >
      <img
        src={data.categoryImg}
        alt={data.category}
        className="size-8"
      />

      <div className="flex flex-col flex-1">
        <strong className="text-sm text-gray-100">{data.name}</strong>
        <span className="text-xs text-gray-200">{data.category}</span>
      </div>

      <span className="text-sm text-gray-100 font-semibold">
        <small className="font-normal text-gray-200">R$</small>
        {formatCurrency(data.amount)}
      </span>
    </Link>
  )
}
