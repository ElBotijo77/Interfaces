import { Bell, CalendarDays, House, Pill } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// Opciones del menú: añadir aquí nuevas secciones
const opciones = [
  { texto: "Inicio", ruta: "/", icono: <House className="size-5" /> },
  { texto: "Mi medicación", ruta: "/medicacion", icono: <Pill className="size-5" /> },
  { texto: "Calendario", ruta: "/calendario", icono: <CalendarDays className="size-5" /> },
  { texto: "Recordatorios", ruta: "/recordatorios", icono: <Bell className="size-5" /> },
];

export function MenuPrincipal({ className }) {
  // Sin router todavía: se marca la opción activa con la URL actual
  const rutaActual = window.location.pathname;

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList className="gap-2">
        {opciones.map(({ texto, ruta, icono }) => (
          <NavigationMenuItem key={ruta}>
            <NavigationMenuLink
              href={ruta}
              active={rutaActual === ruta}
              className={cn(
                navigationMenuTriggerStyle(),
                "h-11 gap-2 px-4 text-base",
              )}
            >
              {icono}
              {texto}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
