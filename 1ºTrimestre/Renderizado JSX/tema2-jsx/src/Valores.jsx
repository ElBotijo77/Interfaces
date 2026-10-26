// Ejercicio 2.4 · Valores dinámicos en propiedades y texto
//
// Props recibidas: enabled (Booleano), text, placeholder y size.
// Debe devolver un <section> con:
//   - un <button> con el texto props.text, DESACTIVADO cuando enabled sea false
//     (pista: disabled={!props.enabled})
//   - un <input> con los atributos placeholder y size tomados de las props

export default function Valores(props) {
  return (
    <section>
      <button disabled={!props.enabled}>{props.text}</button>
      <input placeholder={props.placeholder} size={props.size} />
    </section>
  );
}
