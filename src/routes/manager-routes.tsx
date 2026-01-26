import { Route, Routes } from "react-router"

import { AppLayout } from "@/layouts/app-layout"
import { Dashboard } from "@/pages/dashboard"
import { NotFound } from "@/pages/not-found"

export function ManagerRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<AppLayout />}
      >
        <Route
          path="/"
          element={<Dashboard />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  )
}
