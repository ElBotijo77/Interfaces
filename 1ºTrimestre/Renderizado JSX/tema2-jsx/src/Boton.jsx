// Ejercicio 2.3 · Un botón cuyo texto llega como hijo
//
// <Boton>Aceptar</Boton>  debe pintar  <button>Aceptar</button>

export default function Boton(props) {
  return <button>{props.children}</button>;
}
