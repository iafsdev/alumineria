'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from "@/auth/firebase"

export default function Service() {

  const router = useRouter();
  
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
    <div className="div-service">
      <p class="datosServicio">Fecha: 08/05/2024</p>
      <p class="datosServicio">Estado del servicio: Primera visita</p>
      <p class="datosServicio">Precio: $20,000</p>
    </div>
  )
}