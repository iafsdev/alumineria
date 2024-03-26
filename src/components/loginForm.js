export default function LoginForm() {
  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form>
        <input name='email' type="email" placeholder="Correo"/>
        <input name="password" type="password" placeholder="Contraseña"/>
        <button>Ingresar</button>
      </form>
    </div>
  )
}