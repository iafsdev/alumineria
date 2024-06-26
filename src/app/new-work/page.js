import TopBorder from "@/components/topBorder";
import BottomBorder from "@/components/bottomBorder";
import ProductForm from "@/components/productForm";
import '../globals.css'

export default function Home() {
  return (
    <main>
      <TopBorder/>
      <h2 class="titles">Nuevo producto</h2>
      <ProductForm/>
      <p class="precio">$</p>
      <BottomBorder/>
    </main>
  );
}