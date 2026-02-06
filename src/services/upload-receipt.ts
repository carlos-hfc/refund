import { api } from "./api"

interface UploadReceiptRequest {
  file: File
}

interface UploadReceiptResponse {
  filename: string
}

export async function uploadReceipt({ file }: UploadReceiptRequest) {
  const formData = new FormData()

  formData.append("file", file)

  const response = await api.post<UploadReceiptResponse>("/uploads", formData)

  return response.data
}
