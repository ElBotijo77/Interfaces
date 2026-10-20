import { PerfilUsuario } from "@/components/layout/PerfilUsuario";
import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-lema.png";

export function Header() {
  const conScroll = useScroll(); // true = el contenido pasa por debajo

  return (
    <header
      className={cn(
        "col-span-4 flex items-center justify-between gap-16 sticky top-0 z-10 bg-background -mx-8 -mt-8 px-14 py-4 transition-shadow",
        conScroll && "shadow-md",
      )}
    >
      {/* Izquierda: logo y nombre */}
      <a href="/" className="flex items-center gap-3">
        <img src={logo} alt="Acompana" className="h-24 w-auto" />
      </a>

      {/* Centro: navegación */}
      <nav className="hidden md:flex items-center gap-6"></nav>

      {/* Derecha: acciones */}
      <PerfilUsuario />
    </header>
  );
}
