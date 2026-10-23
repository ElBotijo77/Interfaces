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
  { texto: "Inicio", ruta: "/", icono: <House className="size-6" /> },
  { texto: "Tratamiento", ruta: "/medicacion", icono: <Pill className="size-6" /> },
  { texto: "Calendario", ruta: "/calendario", icono: <CalendarDays className="size-6" /> },
  { texto: "Recordatorios", ruta: "/recordatorios", icono: <Bell className="size-6" /> },
];

export function MenuPrincipal({ className }) {
  // Sin router todavía: se marca la opción activa con la URL actual
  const rutaActual = window.location.pathname;

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList className="gap-6">
        {opciones.map(({ texto, ruta, icono }) => (
          <NavigationMenuItem key={ruta}>
            <NavigationMenuLink
              href={ruta}
              active={rutaActual === ruta}
              className={cn(
                navigationMenuTriggerStyle(),
                "h-12 gap-2 rounded-none border-b-2 border-transparent px-1 text-xl text-muted-foreground",
                // Sin fondos: solo cambia el color del texto
                "hover:bg-transparent hover:text-foreground focus:bg-transparent",
                // Activa: color principal y línea debajo
                "data-active:border-primary data-active:bg-transparent data-active:text-primary data-active:hover:bg-transparent data-active:focus:bg-transparent",
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
