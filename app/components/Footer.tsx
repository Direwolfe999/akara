import { Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold flex items-center gap-2 justify-center md:justify-start">
            🧆 Akara Plug
          </p>
          <p className="text-sm text-neutral-400 mt-1">
            I greet the room — always fresh, always hot.
          </p>
        </div>

        <div className="hidden md:block w-px h-12 bg-neutral-700" />

        <div className="text-center md:text-right">
          <p className="text-sm text-neutral-400 flex items-center gap-2 justify-center md:justify-end">
            Built with{" "}
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> by
          </p>
          <a
            href="https://direwolfe-x.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white font-semibold hover:text-akara-orange transition-all mt-1"
          >
            Destiny — AI Engineer | Full-Stack Developer | Industrial Engineer
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-neutral-800 text-center">
        <p className="text-xs text-neutral-500">
          &copy; {new Date().getFullYear()} Akara Plug. Built for the hostel. Powered by{" "}
          <a
            href="https://direwolfe-x.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-akara-orange hover:underline"
          >
            Direwolfe-X Co.
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
