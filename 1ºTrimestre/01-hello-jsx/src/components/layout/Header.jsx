import { Button } from "@/components/ui/button";
import logo from "@/assets/Logo.png";

export function Header() {
  return (
    <header className="col-span-4 min-h-[15vh] flex items-center justify-between gap-4 border-b">
      {/* Izquierda: logo y nombre */}
      <a href="/" className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </a>

      {/* Centro: navegación */}
      <nav className="hidden md:flex items-center gap-6"></nav>

      {/* Derecha: acciones */}
      <div className="flex items-center gap-3">
        <Button>Vista cuidador</Button>
      </div>
    </header>
  );
}
