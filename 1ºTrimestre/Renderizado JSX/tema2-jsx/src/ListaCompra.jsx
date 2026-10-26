// Ejercicio 2.4 · Mapear un array a elementos
//
// props.productos es un array de cadenas, por ejemplo ["Pan", "Leche"].
// Devuelve un <ul> con un <li> por producto. Cada <li> necesita una prop key
// única (usa el propio producto).

export default function ListaCompra(props) {
  return (
    <ul>
      {props.productos.map((producto) => (
        <li key={producto}>{producto}</li>
      ))}
    </ul>
  );
}
