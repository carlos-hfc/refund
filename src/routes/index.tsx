import { BrowserRouter } from "react-router"

import { Loading } from "@/components/loading"

import { AuthRoutes } from "./auth-routes"
import { EmployeeRoutes } from "./employee-routes"
import { ManagerRoutes } from "./manager-routes"

const IS_LOADING = false

const session = {
  user: {
    role: "manager",
  },
}

export function Routes() {
  function Route() {
    switch (session?.user.role) {
      case "employee":
        return <EmployeeRoutes />
      case "manager":
        return <ManagerRoutes />
      default:
        return <AuthRoutes />
    }
  }

  if (IS_LOADING) return <Loading />

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  )
}
