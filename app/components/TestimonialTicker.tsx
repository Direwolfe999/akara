"use client";

const testimonials = [
  { text: "Best akara in the hostel. Always hot!", author: "— Chinedu, B203" },
  { text: "I greet the room! Order every morning.", author: "— Emeka, A105" },
  { text: "Fast delivery, no stories. 5 stars!", author: "— Tunde, C304" },
  { text: "The bread is always fresh. No cap.", author: "— Seyi, D101" },
];

export default function TestimonialTicker() {
  return (
    <section className="py-6 bg-akara-brown overflow-hidden">
      <div className="flex animate-scroll gap-8 whitespace-nowrap">
        {[...testimonials, ...testimonials].map((t, i) => (
          <div key={i} className="flex items-center gap-2 text-white/90 text-sm md:text-base flex-shrink-0">
            <span>🧆</span>
            <span className="italic">&ldquo;{t.text}&rdquo;</span>
            <span className="font-semibold text-white">{t.author}</span>
            <span className="mx-4 text-white/40">|</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}