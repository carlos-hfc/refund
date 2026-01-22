import { Route, Routes } from "react-router"

import { AuthLayout } from "@/layouts/auth-layout"

import { SignIn } from "../pages/sign-in"

export function AuthRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<AuthLayout />}
      >
        <Route
          path="/"
          element={<SignIn />}
        />
      </Route>
    </Routes>
  )
}
