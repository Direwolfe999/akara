import { useState } from "react";
import { Send, ShoppingBag, Trash2 } from "lucide-react";
import type { MenuItem } from "./MenuCards";

const menuItems: MenuItem[] = [
  { id: 1, name: "Akara (5) + Bread", price: 800, displayPrice: "₦800", desc: "5 hot akara balls with fresh bread", popular: false },
  { id: 2, name: "Akara (10) + Bread", price: 1500, displayPrice: "₦1,500", desc: "10 akara balls with bread. Fills you right up.", popular: true },
  { id: 3, name: "Akara Only (10)", price: 1200, displayPrice: "₦1,200", desc: "10 pieces. Pure akara. No distractions.", popular: false },
  { id: 4, name: "Extra Bread", price: 300, displayPrice: "₦300", desc: "Add more bread to any order", popular: false },
];

interface OrderFormProps {
  cart: Record<number, number>;
  onClearCart: () => void;
}

export default function OrderForm({ cart, onClearCart }: OrderFormProps) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const cartItems = Object.entries(cart)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => {
      const item = menuItems.find((m) => m.id === Number(id));
      return { ...item!, quantity: qty };
    });

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const isEmpty = cartItems.length === 0;

  const handleSubmit = () => {
    if (isEmpty || !name.trim() || !room.trim()) return;

    const itemsList = cartItems
      .map((item) => `- ${item.name} x${item.quantity}: ₦${(item.price * item.quantity).toLocaleString()}`)
      .join("%0A");

    const message = `*I greet the room! 🧆*%0A%0A*New Order:*%0A${itemsList}%0A%0A*Total: ₦${total.toLocaleString()}*%0A%0A*Name:* ${name}%0A*Room:* ${room}%0A*Phone:* ${phone || "N/A"}%0A*Note:* ${note || "None"}%0A%0A*Status:* Awaiting confirmation`;

    const phoneNumber = "234XXXXXXXXXX";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setRoom("");
    setPhone("");
    setNote("");
    setSubmitted(false);
    onClearCart();
  };

  if (submitted) {
    return (
      <section id="order" className="py-16 px-6 bg-akara-cream">
        <div className="max-w-lg mx-auto text-center">
          <div className="mb-6 inline-flex bg-green-100 p-5 rounded-full">
            <span className="text-5xl">🧆</span>
          </div>
          <h2 className="text-3xl font-bold text-neutral-950">Order Sent!</h2>
          <p className="mt-3 text-neutral-600">
            I greet the room! Your order has been sent via WhatsApp. The plug will confirm in a few minutes.
          </p>
          <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-200 flex items-center gap-3">
            <span className="text-xl">💬</span>
            <p className="text-sm text-green-800">
              Check your WhatsApp for order confirmation and delivery updates.
            </p>
          </div>
          <button
            onClick={handleReset}
            className="mt-8 bg-neutral-950 text-white px-8 py-3 rounded-full font-semibold hover:bg-neutral-800 transition-all"
          >
            Place Another Order
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-16 px-6 bg-akara-cream">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-950">
            Place Your Order
          </h2>
          <p className="mt-2 text-neutral-600">
            Fill in your details. We handle the rest.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
          <div className="mb-8 p-4 bg-akara-cream rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <ShoppingBag className="w-6 h-6 text-akara-brown" />
              <p className="font-semibold text-neutral-950">Your Order</p>
            </div>
            {isEmpty ? (
              <p className="text-sm text-neutral-500 ml-9">No items selected yet. Scroll up to add from the menu.</p>
            ) : (
              <>
                <div className="space-y-2 ml-9">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-neutral-700">
                        {item.name} <span className="text-akara-brown font-semibold">x{item.quantity}</span>
                      </span>
                      <span className="text-neutral-950 font-semibold">
                        ₦{(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-neutral-200 ml-9 flex justify-between">
                  <span className="font-bold text-neutral-950">Total</span>
                  <span className="font-bold text-akara-brown text-lg">₦{total.toLocaleString()}</span>
                </div>
                <button
                  onClick={onClearCart}
                  className="mt-2 ml-9 text-xs text-red-500 hover:text-red-700 flex items-center gap-1 transition-all"
                >
                  <Trash2 className="w-3 h-3" />
                  Clear order
                </button>
              </>
            )}
          </div>

          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-semibold text-neutral-950 mb-1.5">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-akara-brown focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="room" className="block text-sm font-semibold text-neutral-950 mb-1.5">
              Room Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="room"
              name="room"
              placeholder="e.g. B203"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-akara-brown focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="phone" className="block text-sm font-semibold text-neutral-950 mb-1.5">
              Phone Number{" "}
              <span className="text-neutral-400 font-normal">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="080XXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-akara-brown focus:border-transparent transition-all"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="note" className="block text-sm font-semibold text-neutral-950 mb-1.5">
              Special Note
            </label>
            <textarea
              id="note"
              name="note"
              rows={3}
              placeholder='"Make it spicy", "No onions", etc...'
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-akara-brown focus:border-transparent transition-all resize-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isEmpty || !name.trim() || !room.trim()}
            className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-lg transition-all shadow-md ${
              isEmpty || !name.trim() || !room.trim()
                ? "bg-neutral-300 text-neutral-500 cursor-not-allowed shadow-none"
                : "bg-akara-brown text-white hover:bg-akara-orange hover:shadow-lg animate-pulse-whatsapp"
            }`}
          >
            <Send className="w-5 h-5" />
            Send Order via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}