import { Send, ShoppingBag } from "lucide-react";

export default function OrderForm() {
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
          <div className="mb-8 p-4 bg-akara-cream rounded-xl flex items-center gap-4">
            <ShoppingBag className="w-6 h-6 text-akara-brown" />
            <div>
              <p className="font-semibold text-neutral-950">Your Order</p>
              <p className="text-sm text-neutral-600">No items selected yet</p>
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-semibold text-neutral-950 mb-1.5">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-akara-brown focus:border-transparent transition-all"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="room" className="block text-sm font-semibold text-neutral-950 mb-1.5">
              Room Number
            </label>
            <input
              type="text"
              id="room"
              name="room"
              placeholder="e.g. B203"
              className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-akara-brown focus:border-transparent transition-all"
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
              className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-akara-brown focus:border-transparent transition-all resize-none"
            />
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-akara-brown text-white py-3.5 rounded-xl font-bold text-lg hover:bg-akara-orange transition-all shadow-md hover:shadow-lg"
          >
            <Send className="w-5 h-5" />
            Send Order via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}