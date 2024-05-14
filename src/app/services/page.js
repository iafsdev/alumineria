import TopBorder from "@/components/topBorder";
import BottomBorder from "@/components/bottomBorder";
import ListServices from "@/components/listServices";
import '../globals.css'

export default function Home() {
  return (
    <main>
      <TopBorder/>
      <h2 class="titles">Servicios</h2>
      <button class="btnNuevo">Nuevo Servicio</button>
      <ListServices/>
      <BottomBorder/>
    </main>
  );
}