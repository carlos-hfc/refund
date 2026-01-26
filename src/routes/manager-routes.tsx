import { Route, Routes } from "react-router"

import { AppLayout } from "@/layouts/app-layout"
import { NotFound } from "@/pages/not-found"

export function ManagerRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<AppLayout />}
      >
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  )
}
