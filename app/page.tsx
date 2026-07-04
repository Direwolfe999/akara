import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import MenuCards from "@/components/MenuCards";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <TrustBar />
      <MenuCards />
      <OrderForm />
      <Footer />
    </main>
  );
}