import { UserRound } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Uso de un prop para su facil escalado
export function PerfilUsuario({ nombre = "Anónimo" }) {
  return (
    <div className="flex items-center gap-4">
      {/* Saludo en dos líneas, alineado hacia el icono */}
      <p className="flex flex-col text-right leading-tight">
        <span className="text-base text-muted-foreground">Buenos días,</span>
        <span className="text-xl font-semibold">{nombre}</span>
      </p>

      {/* Enlace a la página de perfil */}
      <a
        href="/perfil"
        aria-label="Ir a mi perfil"
        title="Mi perfil"
        className={cn(
          buttonVariants({ variant: "outline", size: "icon-lg" }),
          "size-16 rounded-full",
        )}
      >
        <UserRound className="size-8" />
      </a>
    </div>
  );
}
