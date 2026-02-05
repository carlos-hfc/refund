import { BrowserRouter } from "react-router"

import { Loading } from "@/components/loading"

import { ManagerRoutes } from "./manager-routes"

const IS_LOADING = false

export function Routes() {
  if (IS_LOADING) return <Loading />

  return (
    <BrowserRouter>
      <ManagerRoutes />
    </BrowserRouter>
  )
}
