import { Plus, Minus } from "lucide-react";

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  displayPrice: string;
  desc: string;
  popular: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Akara (5) + Bread",
    price: 800,
    displayPrice: "₦800",
    desc: "5 hot akara balls with fresh bread",
    popular: false,
  },
  {
    id: 2,
    name: "Akara (10) + Bread",
    price: 1500,
    displayPrice: "₦1,500",
    desc: "10 akara balls with bread. Fills you right up.",
    popular: true,
  },
  {
    id: 3,
    name: "Akara Only (10)",
    price: 1200,
    displayPrice: "₦1,200",
    desc: "10 pieces. Pure akara. No distractions.",
    popular: false,
  },
  {
    id: 4,
    name: "Extra Bread",
    price: 300,
    displayPrice: "₦300",
    desc: "Add more bread to any order",
    popular: false,
  },
];

interface MenuCardsProps {
  cart: Record<number, number>;
  onAddToCart: (id: number) => void;
  onRemoveFromCart: (id: number) => void;
}

export default function MenuCards({ cart, onAddToCart, onRemoveFromCart }: MenuCardsProps) {
  return (
    <section id="menu" className="py-16 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-950">
          The Menu
        </h2>
        <p className="mt-2 text-neutral-600">Simple combos. Maximum enjoyment.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map((item, index) => {
          const quantity = cart[item.id] || 0;
          return (
            <div
              key={item.id}
              className={`relative border-2 rounded-2xl p-6 flex flex-col items-center text-center transition-all hover:shadow-lg animate-fade-in-up ${
                item.popular
                  ? "border-akara-orange bg-akara-cream"
                  : "border-neutral-200 bg-white"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.popular && (
                <span className="absolute -top-3 bg-akara-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Ordered
                </span>
              )}

              <div className="w-20 h-20 bg-akara-brown/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🧆</span>
              </div>

              <h3 className="font-bold text-lg text-neutral-950">{item.name}</h3>

              <p className="text-sm text-neutral-600 mt-1">{item.desc}</p>

              <p className="text-2xl font-extrabold text-akara-brown mt-4">{item.displayPrice}</p>

              {quantity === 0 ? (
                <button
                  onClick={() => onAddToCart(item.id)}
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-akara-brown text-white py-2.5 rounded-full font-semibold hover:bg-akara-orange transition-all"
                >
                  <Plus className="w-4 h-4" />
                  Add to Order
                </button>
              ) : (
                <div className="mt-4 w-full flex items-center justify-between bg-akara-brown text-white py-2.5 px-4 rounded-full font-semibold">
                  <button
                    onClick={() => onRemoveFromCart(item.id)}
                    className="hover:bg-akara-orange/50 rounded-full p-1 transition-all"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => onAddToCart(item.id)}
                    className="hover:bg-akara-orange/50 rounded-full p-1 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}