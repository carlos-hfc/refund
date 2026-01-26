import { BrowserRouter } from "react-router"

import { EmployeeRoutes } from "./employee-routes"

export function Routes() {
  return (
    <BrowserRouter>
      <EmployeeRoutes />
    </BrowserRouter>
  )
}
