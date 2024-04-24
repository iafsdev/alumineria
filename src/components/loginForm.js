'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from "@/auth/firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          router.push("/new-order")
          console.log(user);
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
      });
  }

  const toRegister = (e) => {
    router.push("/register")
  }

  return (
    <div className="div-loginForm">
      <h2 className="login-title">Iniciar sesión</h2>
      <form className="login-form">
        <input className="login-input" name='email' type="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)}/>
        <input className="login-input" name="password" type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}/>
        <button className="login-button" onClick={onLogin}>Ingresar</button>
      </form>
      <button className='login-register-button' onClick={toRegister}>¿No tienes una cuenta?</button>
    </div>
  )
}