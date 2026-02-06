import { api } from "./api"

interface CreateRefundRequest {
  name: string
  category: string
  filename: string
  amount: number
}

export async function createRefund({
  amount,
  category,
  name,
  filename,
}: CreateRefundRequest) {
  await api.post("/refunds", {
    amount,
    category,
    name,
    filename,
  })
}
