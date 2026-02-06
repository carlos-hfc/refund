import type { RefundResponse } from "@/@types/refund"

import { api } from "./api"

interface ListRefundsRequest {
  name: string | null
  page: number | null
}

export async function listRefunds({ name, page }: ListRefundsRequest) {
  const response = await api.get<RefundResponse>("/refunds", {
    params: {
      page: page ?? 1,
      name: name ?? undefined,
    },
  })

  return response.data
}
