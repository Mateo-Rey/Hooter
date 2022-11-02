import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import logo from '../public/logo.png'
import {FcGoogle} from 'react-icons/fc'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { db } from '../firebase'
import { collection, doc, docRef } from 'firebase/firestore'
const handleLogin = () => {
  const res = createUserWithEmailAndPassword(auth)
  
  
}
function Login() {
  const [username, setUsername] = useState()
  return (
    <div className='grid grid-cols-2'>
        <div className=' bg-blue-500 h-screen grid place-items-center'>
            <img src={logo.src} className='w-[200px]'/>
        </div>
       <div className='grid place-items-center'>
        <div className='flex gap-4 bg-white p-4 px-6 items-center rounded-[6px] cursor-pointer' onClick={() => signIn('google')}>
            <FcGoogle className='text-[30px]'/>
            Signin With Google
        </div>
       </div>
    </div>
  )
}

export default Login