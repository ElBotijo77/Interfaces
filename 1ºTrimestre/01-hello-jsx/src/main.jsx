import { createRoot } from "react-dom/client";
import "./index.css";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MedicacionCard } from "@/components/MedicacionCard";
import { 
  Clase, 
  ManejadorEventos 
} from "@/components/Clase";
import logo from "@/assets/Logo.png";

const tarjetas = [
  { nombre: "Ibuprofeno", frecuencia: "Cada 8 horas", descripcion: "Mañana y tarde" },
  { nombre: "Paracetamol", frecuencia: "Cada 6 horas", descripcion: "Mañana" },
  { nombre: "Omeprazol", frecuencia: "1 vez al día", descripcion: "Noche" },
  { nombre: "Amoxicilina", frecuencia: "Cada 8 horas", descripcion: "Mañana, tarde y noche" },
  { nombre: "Metformina", frecuencia: "Cada 12 horas", descripcion: "Comida y cena" }
];

createRoot(document.getElementById("root")).render(
  <main className="min-h-screen p-8 grid grid-cols-4 gap-6 content-start">
    <header className="col-span-4 min-h-[15vh] flex items-center gap-4">
      <p>
        Hello, <strong>JSX</strong>
      </p>
      <Button>Vista cuidador</Button>
      <Label>Prueba</Label>
      <img src={logo} alt="Logo" className="h-12 w-auto" />
    </header>

    <section className="col-span-3 grid grid-cols-3 gap-6">
      {tarjetas.map((m) => (
        <MedicacionCard key={m.nombre} {...m} />
      ))}
    </section>

    <aside className="col-span-1 self-start rounded-lg border p-4">
      Anuncio
    </aside>

    <footer className="col-span-4"></footer>
  </main>,
);

createRoot(document.getElementById("second")).render(
  <div>
    <Clase />
    <ManejadorEventos />
  </div>,
);
