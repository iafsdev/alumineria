'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from "@/auth/firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function RegisterForm() {

  const router = useRouter();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  
  const onSubmit = async (e) => {
    e.preventDefault()
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          router.push("/login")
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
      });
  }

  return (
    <div className="div-registerForm">
      <h2 className="login-title">Registro</h2>
      <form className="register-form">
        <input className="login-input" name="name" type="text" placeholder="Nombre completo"/>
        <input className="login-input" name='email' type="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)}/>
        <input className="login-input" name="password" type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}/>
        <input className="login-input" name='phone' type='tel' placeholder="Teléfono"/>
        <input className="login-input" name="address" type='text' placeholder="Dirección"/>
        <button className="login-button" onClick={onSubmit}>Registrarse</button>
      </form>
    </div>
  )
}