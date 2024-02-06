import { SignIn } from '@/pages/auth/signIn'
import { SignUp } from '@/pages/auth/signUp'
import { Route, Routes } from 'react-router-dom'

export function UnauthenticatedRouter(){
  return (
    <Routes>
      <Route path='/' element={<SignIn />}/>
      <Route path='/sign' element={<SignUp />}/>
    </Routes>
  )
}