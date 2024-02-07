import { Home } from '@/pages/main/home'
import { MyWorkoutsPage } from '@/pages/main/my-workouts'
import { Route, Routes } from 'react-router-dom'

export function AuthenticatedRouter() {
  return (
    <Routes>
      <Route path='/my-workouts' element={<MyWorkoutsPage />} />
      <Route path='/' element={<Home />} />
    </Routes>
  )
}