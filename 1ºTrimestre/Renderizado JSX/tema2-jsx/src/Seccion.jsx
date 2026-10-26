// Ejercicio 2.3 · Crear tus propios elementos JSX
//
// Seccion recibe la propiedad "titulo" y el contenido anidado (props.children).
// Debe devolver:
//   <section>
//     <h2>{titulo}</h2>
//     {hijos}
//   </section>

export default function Seccion({ titulo, children }) {
  return (
    <section>
      <h2>{titulo}</h2>
      {children}
    </section>
  );
}