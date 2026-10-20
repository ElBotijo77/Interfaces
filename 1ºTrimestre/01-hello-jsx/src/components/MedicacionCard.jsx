import { useState } from "react";
import { Check, Moon, Sunrise, Utensils } from "lucide-react";
import { format } from "date-fns";
import { es } from "react-day-picker/locale";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DatePicker } from "@/components/DatePicker";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// Orden de izquierda a derecha
const MOMENTOS = [
  { value: "manana", label: "Mañana", Icono: Sunrise },
  { value: "comida", label: "Comida", Icono: Utensils },
  { value: "noche", label: "Noche", Icono: Moon },
];

export function MedicacionCard({ nombre, frecuencia, descripcion }) {
  const [horaTomada, setHoraTomada] = useState(null); // null = todavía no tomada
  const [fechaInicio, setFechaInicio] = useState();
  const [momentos, setMomentos] = useState([]); // p. ej. ["manana", "noche"]

  function marcarTomada() {
    const ahora = new Date().toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setHoraTomada(ahora);
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">{nombre}</CardTitle>
        <CardDescription>{frecuencia}</CardDescription>
        <CardDescription>{descripcion}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {/* Momentos del día: la luna queda alineada con el calendario de abajo */}
        <ToggleGroup
          multiple
          variant="outline"
          spacing={1}
          value={momentos}
          onValueChange={setMomentos}
          className="self-end mr-0.5"
        >
          {MOMENTOS.map((momento) => (
            <ToggleGroupItem
              key={momento.value}
              value={momento.value}
              aria-label={momento.label}
              title={momento.label}
              className="aria-pressed:bg-primary aria-pressed:text-primary-foreground aria-pressed:border-primary"
            >
              <momento.Icono />
            </ToggleGroupItem>
          ))}
        </ToggleGroup>

        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col gap-1">
            <Label>Fin tratamiento</Label>
            <span className="text-sm text-muted-foreground">
              {fechaInicio
                ? format(fechaInicio, "d 'de' MMMM 'de' yyyy", { locale: es })
                : "Sin fecha"}
            </span>
          </div>
          <DatePicker
            value={fechaInicio}
            onChange={setFechaInicio}
            label="Elegir inicio de tratamiento"
          />
        </div>
      </CardContent>
      <CardFooter className="bg-transparent border-t-0">
        {horaTomada ? (
          <Button
            disabled
            className="w-full h-12 text-base font-semibold gap-2 bg-tomada text-estado-foreground disabled:opacity-100"
          >
            <Check className="size-5" /> Tomada a las {horaTomada}
          </Button>
        ) : (
          <Button
            onClick={marcarTomada}
            className="w-full h-12 text-base font-semibold gap-2"
          >
            <Check className="size-5" /> Marcar como tomada
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
