// Ejercicio 2.2 · Describir una estructura de UI con etiquetas semánticas
//
// Perfil devuelve UN <section> que contiene, en este orden:
//   <header>  con un <h1> (tu nombre)
//   <nav>     con un enlace <a href="#proyectos">Proyectos</a>
//   <main>    con un <p> (una frase de presentación)
//   <footer>  con un <small> (por ejemplo: © Todos los derechos reservados)

export default function Perfil() {
  // TODO: devuelve la estructura descrita.
  return <section>
    <header><h1>Nombre</h1></header>
    <nav><a href="@proyectos">Proyectos</a></nav>
    <main><p>Frase de presentacion</p></main>
    <footer><small>© Todos los derechos reservados</small></footer>
  </section>;
}
