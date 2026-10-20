import { useState } from "react";
import { es } from "react-day-picker/locale";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({ value, onChange, label = "Elegir fecha" }) {
  const [abierto, setAbierto] = useState(false);

  function seleccionar(fecha) {
    onChange?.(fecha);
    setAbierto(false); // cerrar el calendario al elegir un día
  }

  return (
    <Popover open={abierto} onOpenChange={setAbierto}>
      <PopoverTrigger
        render={<Button variant="outline" size="icon-lg" aria-label={label} />}
      >
        <CalendarIcon className="size-5" />
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="end">
        <Calendar
          mode="single"
          selected={value}
          onSelect={seleccionar}
          locale={es}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  );
}
