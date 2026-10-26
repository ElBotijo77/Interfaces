// Ejercicio 2.5 · Fragmentos
//
// Devuelve un <h1> y un <p> "hermanos" SIN envolverlos en un <div>.
// Usa un fragmento: <> ... </>

export default function CabeceraSinWrapper() {
  return (
    <>
      <h1>Título</h1>
      <p>Un párrafo hermano del título, sin ningún div alrededor.</p>
    </>
  );
}
