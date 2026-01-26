import { BrowserRouter } from "react-router"

import { ManagerRoutes } from "./manager-routes"

export function Routes() {
  return (
    <BrowserRouter>
      <ManagerRoutes />
    </BrowserRouter>
  )
}
