import { createElement } from "react";

// Ejercicio 2.1 · Lo que hace el compilador por debajo
//
// Escribe el MISMO resultado que HolaJsx, pero SIN usar JSX, solo con
// createElement(tipo, props, ...hijos):
//   - tipo: una cadena como "p" (elemento DOM)
//   - props: un objeto, o null si no hay propiedades
//   - hijos: cada argumento posterior (texto u otros elementos)

export default function HolaCompilado() {
  // TODO: devuelve createElement("p", null, "Hello, ", createElement(...))
  return createElement("p", null, "Hello, ", createElement("strong", null, "JSX"));
}
