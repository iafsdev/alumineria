export default function ProductForm() {
  return (
    <form>
      <select name="type-product">
        <option>Puerta</option>
        <option>Ventana</option>
        <option>Cancel</option>
      </select>
      <input name='ancho' type='number' placeholder="Ancho"/>
      <input name='alto' type='number' placeholder="Alto"/>
      <button>Agregar Producto</button>
    </form>
  )
}