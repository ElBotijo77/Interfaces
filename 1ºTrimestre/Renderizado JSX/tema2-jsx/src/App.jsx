import HolaJsx from "./HolaJsx.jsx";
import HolaCompilado from "./HolaCompilado.jsx";
import Perfil from "./Perfil.jsx";
import Seccion from "./Seccion.jsx";
import Boton from "./Boton.jsx";
import Valores from "./Valores.jsx";
import BotonAviso from "./BotonAviso.jsx";
import ListaCompra from "./ListaCompra.jsx";
import Inventario from "./Inventario.jsx";
import CabeceraSinWrapper from "./CabeceraSinWrapper.jsx";
import Glosario from "./Glosario.jsx";

export default function App() {
  return (
    <main>
      <h1>Tema 2 · Renderizado con JSX</h1>

      <section>
        <h2>2.1 · Hello JSX (y su versión compilada)</h2>
        <HolaJsx />
        <HolaCompilado />
      </section>

      <section>
        <h2>2.2 · Estructura semántica</h2>
        <Perfil />
      </section>

      <section>
        <h2>2.3 · Componentes y children</h2>
        <Seccion titulo="Mi sección">
          <Boton>Texto del botón</Boton>
        </Seccion>
      </section>

      <section>
        <h2>2.4 · Expresiones JavaScript</h2>
        <Valores enabled={false} text="Un botón" placeholder="valor..." size={30} />
        <BotonAviso onAviso={() => console.log("¡Aviso pulsado!")} />
        <ListaCompra productos={["Pan", "Leche", "Huevos"]} />
        <Inventario items={{ manzanas: 3, peras: 5, uvas: 2 }} />
      </section>

      <section>
        <h2>2.5 · Fragmentos</h2>
        <CabeceraSinWrapper />
        <Glosario
          terminos={[
            { termino: "JSX", definicion: "Sintaxis XML/HTML dentro de JavaScript." },
            { termino: "Componente", definicion: "Función que devuelve JSX." },
          ]}
        />
      </section>
    </main>
  );
}
