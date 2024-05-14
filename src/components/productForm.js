export default function ProductForm() {
  return (
    <form class="form-container">
      <select name="type-product" class="form-select">
        <option>Puerta</option>
        <option>Ventana</option>
        <option>Cancel</option>
      </select>
    <input name='ancho' type='number' placeholder="Ancho" class="form-input"/>
    <input name='alto' type='number' placeholder="Alto" class="form-input"/>
    <button class="form-button">Agregar Producto</button>
</form>
  )
}