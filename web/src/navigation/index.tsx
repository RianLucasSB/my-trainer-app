import { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import { UnauthenticatedRouter } from "./unauthenticated"
import { AuthenticatedRouter } from "./authenticated"

export function Routes() {
  const signed = false
  const [router, setRouter] = useState(UnauthenticatedRouter)

  useEffect(() => {
    setRouter(signed ? AuthenticatedRouter : UnauthenticatedRouter)
  }, [signed])

  return <BrowserRouter>{router}</BrowserRouter>
}