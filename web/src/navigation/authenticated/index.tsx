import { Home } from '@/pages/main/home'
import { Route, Routes } from 'react-router-dom'

export function AuthenticatedRouter() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}