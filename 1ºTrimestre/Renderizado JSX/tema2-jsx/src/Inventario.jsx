// Ejercicio 2.4 · Mapear un objeto a elementos
//
// props.items es un objeto, por ejemplo { manzanas: 3, peras: 5 }.
// Devuelve un <ul> con un <li> por propiedad, con este contenido:
//   <li><strong>manzanas: </strong>3</li>
// Pista: Object.keys(props.items) devuelve un array con las claves.
// Cada <li> necesita una prop key (usa la clave).

export default function Inventario(props) {
  return (
    <ul>
      {Object.keys(props.items).map((clave) => (
        <li key={clave}>
          <strong>{clave}: </strong>
          {props.items[clave]}
        </li>
      ))}
    </ul>
  );
}
