import LoginForm from "@/components/loginForm";
import TopBorder from "@/components/topBorder";
import BottomBorder from "@/components/bottomBorder";
import '../globals.css'

export default function Home() {
  return (
    <main>
      <TopBorder/>
      <LoginForm/>
      <BottomBorder/>
    </main>
  );
}
