export default function LoginForm() {
  return (
    <div className="div-loginForm">
      <h2 className="login-title">Iniciar sesión</h2>
      <form className="login-form">
        <input className="login-input" name='email' type="email" placeholder="Correo"/>
        <input className="login-input" name="password" type="password" placeholder="Contraseña"/>
        <button className="login-button">Ingresar</button>
      </form>
    </div>
  )
}