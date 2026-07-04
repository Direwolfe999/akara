import { Star, Users, Clock } from "lucide-react";

const trustItems = [
  {
    icon: Star,
    label: "Hot & Fresh",
    sub: "Fried to order",
  },
  {
    icon: Users,
    label: "Hostel Favorite",
    sub: "Trusted daily",
  },
  {
    icon: Clock,
    label: "Fast Delivery",
    sub: "Under 15 mins",
  },
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-akara-cream border-y border-neutral-200">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-6">
        {trustItems.map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-center md:text-left">
            <item.icon className="w-8 h-8 text-akara-brown" />
            <div>
              <p className="font-semibold text-neutral-950">{item.label}</p>
              <p className="text-sm text-neutral-600">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}