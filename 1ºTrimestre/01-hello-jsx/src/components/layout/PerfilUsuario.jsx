import { LogOut, Settings, UserRound } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

      {/* Menú desplegable del perfil */}
      <DropdownMenu>
        <DropdownMenuTrigger
          aria-label="Abrir menú de perfil"
          title="Mi perfil"
          className={cn(
            buttonVariants({ variant: "outline", size: "icon-lg" }),
            "size-16 rounded-full",
          )}
        >
          <UserRound className="size-8" />
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">
          {/* Cabecera con el nombre del usuario */}
          <DropdownMenuGroup>
            <DropdownMenuLabel className="text-sm text-foreground">
              {nombre}
            </DropdownMenuLabel>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

          <DropdownMenuItem render={<a href="/perfil" />}>
            <UserRound />
            Mi perfil
          </DropdownMenuItem>
          <DropdownMenuItem render={<a href="/ajustes" />}>
            <Settings />
            Ajustes
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          {/* Sin funcionalidad hasta que haya inicio de sesión */}
          <DropdownMenuItem variant="destructive">
            <LogOut />
            Cerrar sesión
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
