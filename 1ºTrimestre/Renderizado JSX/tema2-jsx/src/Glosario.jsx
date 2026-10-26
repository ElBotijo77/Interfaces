import { Fragment } from "react";

// Ejercicio 2.5 · Fragmentos con key
//
// props.terminos es un array de objetos { termino, definicion }.
// Devuelve un <dl> donde, por cada término, aparecen JUNTOS y directamente
// dentro del <dl>:  <dt>{termino}</dt>  y  <dd>{definicion}</dd>
//
// Como cada par necesita agruparse y una key, y la sintaxis corta <> no admite
// key, usa <Fragment key={...}> (ya importado arriba).

export default function Glosario(props) {
  return (
    <dl>
      {props.terminos.map((item) => (
        <Fragment key={item.termino}>
          <dt>{item.termino}</dt>
          <dd>{item.definicion}</dd>
        </Fragment>
      ))}
    </dl>
  );
}
