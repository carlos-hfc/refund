import { Route, Routes } from "react-router"

import { AppLayout } from "@/layouts/app-layout"
import { NotFound } from "@/pages/not-found"
import { Refund } from "@/pages/refund"

export function EmployeeRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<AppLayout />}
      >
        <Route
          path="/"
          element={<Refund />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  )
}
