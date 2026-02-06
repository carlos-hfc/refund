import type { Refund } from "@/@types/refund"

import { api } from "./api"

interface GetRefundRequest {
  id: string
}

export async function getRefund({ id }: GetRefundRequest) {
  const response = await api.get<Refund>(`/refunds/${id}`)

  return response.data
}
