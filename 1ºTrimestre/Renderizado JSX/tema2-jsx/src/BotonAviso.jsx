// Ejercicio 2.4 · Manejo de eventos
//
// BotonAviso recibe una función en props.onAviso y muestra el texto "Avisar".
// Al pulsar el botón se debe llamar a esa función (propiedad onClick).

export default function BotonAviso(props) {
  return <button onClick={props.onAviso}>Avisar</button>;
}
