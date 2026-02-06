enum Categories {
  food = "food",
  others = "others",
  services = "services",
  transport = "transport",
  accomodation = "accomodation",
}

export interface Refund {
  user: User
  id: string
  userId: string
  name: string
  category: Categories
  amount: number
  filename: string
  createdAt: string
  updatedAt: string
}

export interface RefundResponse {
  refunds: Array<Refund>
  pagination: {
    page: number
    perPage: number
    totalPages: number
    totalRecords: number
  }
}
