import { Route, Routes } from "react-router"

import { AuthLayout } from "@/layouts/auth-layout"
import { NotFound } from "@/pages/not-found"
import { SignIn } from "@/pages/sign-in"
import { SignUp } from "@/pages/sign-up"

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
        <Route
          path="/sign-up"
          element={<SignUp />}
        />
      </Route>

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  )
}
