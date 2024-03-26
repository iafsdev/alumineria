export default function RegisterForm() {
  return (
    <div>
      <h2>Registro</h2>
      <form>
        <input name="name" type="text" placeholder="Nombre completo"/>
        <input name='email' type="email" placeholder="Correo"/>
        <input name="password" type="password" placeholder="Contraseña"/>
        <input name='phone' type='tel' placeholder="Teléfono"/>
        <input name="address" type='text' placeholder="Dirección"/>
        <button>Registrarse</button>
      </form>
    </div>
  )
}