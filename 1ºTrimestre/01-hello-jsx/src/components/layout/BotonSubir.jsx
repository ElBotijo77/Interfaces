import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";

export function BotonSubir() {
  const visible = useScroll(); // aparece en cuanto se baja un poco

  function subir() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Button
      size="icon-lg"
      onClick={subir}
      aria-label="Volver arriba"
      title="Volver arriba"
      className={cn(
        "fixed bottom-6 right-6 z-20 size-12 rounded-full shadow-md transition-all duration-300",
        visible
          ? "opacity-100 translate-y-0"
          : "pointer-events-none opacity-0 translate-y-4",
      )}
    >
      <ArrowUp className="size-6" />
    </Button>
  );
}
