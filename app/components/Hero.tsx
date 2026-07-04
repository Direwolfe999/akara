import { ArrowDown, ChefHat } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-akara-cream to-white"
    >
      <div className="mb-6 bg-akara-brown/10 p-5 rounded-full">
        <ChefHat className="w-16 h-16 text-akara-brown" />
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-neutral-950 leading-tight">
        I Greet The Room
      </h1>

      <p className="mt-4 text-lg md:text-xl text-neutral-600 max-w-xl">
        Fresh, hot akara. Delivered to your hostel door. Order in seconds — no
        stress, just chop.
      </p>

      <a
        href="#order"
        className="mt-8 inline-flex items-center gap-2 bg-akara-brown text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-akara-orange transition-all shadow-lg hover:shadow-xl"
      >
        Order Now
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}