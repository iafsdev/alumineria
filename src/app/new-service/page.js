import TopBorder from "@/components/topBorder";
import BottomBorder from "@/components/bottomBorder";
import ListProducts from "@/components/listProducts";
import '../globals.css'

export default function Home() {
  return (
    <main>
      <TopBorder/>
      <h2 class="titles">Nuevo Servicio</h2>
      <button class="btnNuevo">Agregar Producto</button>
      <ListProducts/>
      <p class="precio">$</p>
      <button class="btnNuevo">Finalizar</button>
      <BottomBorder/>
    </main>
  );
}
