import Navbar from '@/components/navigation/navbar'
import React, { ReactNode } from 'react'

const AuthLayout = ({children}:{children :ReactNode}) => {
  return (
    <main>
         <Navbar />
         {children}
    </main>
  )
}

export default AuthLayout