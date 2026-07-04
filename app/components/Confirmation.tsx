import { CheckCircle, MessageCircle } from "lucide-react";

export default function Confirmation() {
  return (
    <section id="confirmation" className="py-16 px-6 bg-white">
      <div className="max-w-lg mx-auto text-center">
        <div className="mb-6 inline-flex bg-green-100 p-5 rounded-full">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>

        <h2 className="text-3xl font-bold text-neutral-950">Order Sent!</h2>

        <p className="mt-3 text-neutral-600">
          I greet the room! Your order has been sent via WhatsApp. The plug will
          confirm in a few minutes.
        </p>

        <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-200 flex items-center gap-3">
          <MessageCircle className="w-5 h-5 text-green-600" />
          <p className="text-sm text-green-800">
            Check your WhatsApp for order confirmation and delivery updates.
          </p>
        </div>

        <button
          type="button"
          className="mt-8 bg-neutral-950 text-white px-8 py-3 rounded-full font-semibold hover:bg-neutral-800 transition-all"
        >
          Place Another Order
        </button>
      </div>
    </section>
  );
}