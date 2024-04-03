export default function RegisterForm() {
  return (
    <div className="div-registerForm">
      <h2 className="login-title">Registro</h2>
      <form className="register-form">
        <input className="login-input" name="name" type="text" placeholder="Nombre completo"/>
        <input className="login-input" name='email' type="email" placeholder="Correo"/>
        <input className="login-input" name="password" type="password" placeholder="Contraseña"/>
        <input className="login-input" name='phone' type='tel' placeholder="Teléfono"/>
        <input className="login-input" name="address" type='text' placeholder="Dirección"/>
        <button className="login-button">Registrarse</button>
      </form>
    </div>
  )
}