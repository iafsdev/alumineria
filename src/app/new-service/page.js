import TopBorder from "@/components/topBorder";
import BottomBorder from "@/components/bottomBorder";
import ListProducts from "@/components/listProducts";
import '../globals.css'

export default function Home() {
  return (
    <main>
      <TopBorder/>
      <h2>Nuevo Servicio</h2>
      <button>+ Nuevo Producto</button>
      <ListProducts/>
      <p>$</p>
      <button>Finalizar</button>
      <BottomBorder/>
    </main>
  );
}
