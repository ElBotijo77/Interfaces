// ============================================================================
// DEMO: cómo funcionan map, filter, reduce, forEach, find, some/every y sort
// ============================================================================
// Este archivo no tiene TODOs: es para abrirlo en el editor, leerlo, y a la
// vez ejecutarlo para ver la salida por consola junto al código que la
// produce. Ejecútalo con:
//
//   npm run demo
//
// Todos estos métodos tienen algo en común: ninguno modifica el array
// original (con la única excepción de sort, que SÍ mutaba el array antes de
// que lo arreglemos aquí — se explica en su sección). Siempre devuelven algo
// nuevo (un array, un valor, un booleano) y dejan intacto el array de
// partida. Esa es la idea central de la "programación funcional" aplicada a
// arrays: en vez de escribir un bucle for con un índice y mutar variables a
// mano, describes QUÉ transformación quieres, no CÓMO recorrer el array.

const { productos } = require("./datos");

// Recordatorio del contenido de "productos" (el mismo array que ves en
// datos.js), para no tener que saltar de archivo para seguir la demo:
//
//   id | nombre             | precio | categoria   | stock
//   ---|--------------------|--------|-------------|------
//   1  | Teclado mecánico   | 89.99  | periféricos | 12
//   2  | Ratón inalámbrico  | 29.50  | periféricos | 0
//   3  | Monitor 27"        | 219.00 | pantallas   | 5
//   4  | Webcam HD          | 45.00  | periféricos | 8
//   5  | Monitor 24"        | 159.00 | pantallas   | 0
//   6  | Auriculares        | 65.00  | audio       | 20
//   7  | Altavoces          | 99.99  | audio       | 3

function titulo(texto) {
  console.log("\n" + "=".repeat(70));
  console.log(texto);
  console.log("=".repeat(70));
}

// ----------------------------------------------------------------------------
// 1. forEach — "haz algo con cada elemento", sin construir nada nuevo
// ----------------------------------------------------------------------------
titulo("1. forEach — recorrer y hacer algo con cada elemento (sin devolver nada)");

console.log("Array original (productos):", productos.length, "elementos\n");

productos.forEach((producto) => {
  console.log(`- ${producto.nombre}: ${producto.precio} € (stock: ${producto.stock})`);
});

// forEach() devuelve undefined. Si necesitas un resultado nuevo (un array
// transformado, una suma, un booleano...), forEach NO es la herramienta
// correcta — para eso están map, reduce, some/every, que sí veremos abajo.
const resultadoForEach = productos.forEach((p) => p.precio);
console.log("\n¿Qué devuelve forEach?", resultadoForEach); // undefined

// ----------------------------------------------------------------------------
// 2. map — transforma cada elemento en OTRA cosa, 1 a 1
// ----------------------------------------------------------------------------
titulo("2. map — transformar cada elemento en otra cosa (mismo número de elementos)");

// map() recibe una función que se ejecuta una vez por cada elemento, y
// construye un ARRAY NUEVO con lo que esa función devuelve en cada paso.
// El array tiene siempre el mismo número de elementos que el original.
const nombres = productos.map((producto) => producto.nombre);
console.log("Antes (productos):", productos.length, "objetos completos");
console.log("Después (nombres):", nombres);

// Un ejemplo más elaborado: no solo extraer un campo, sino construir un
// objeto nuevo distinto en cada elemento (muy habitual al preparar datos
// para mostrarlos en una interfaz, por ejemplo en React con
// productos.map(p => <Fila key={p.id} ... />)).
const etiquetas = productos.map((producto) => ({
  id: producto.id,
  texto: `${producto.nombre} (${producto.precio.toFixed(2)} €)`,
}));
console.log("\nEtiquetas construidas con map:");
console.log(etiquetas);

// Importante: el array original NO cambia.
console.log("\n¿Sigue intacto el array original?", productos[0].nombre === "Teclado mecánico");

// ----------------------------------------------------------------------------
// 3. filter — se queda solo con los elementos que cumplen una condición
// ----------------------------------------------------------------------------
titulo("3. filter — quedarse solo con los elementos que cumplen una condición");

// filter() recibe una función que devuelve true o false para cada elemento.
// Construye un array nuevo SOLO con los elementos para los que la función
// devolvió true — por eso el resultado puede tener menos elementos (o
// incluso cero) que el original, nunca más.
const conStock = productos.filter((producto) => producto.stock > 0);
console.log(`De ${productos.length} productos, ${conStock.length} tienen stock:`);
console.log(conStock.map((p) => p.nombre));

const perifericos = productos.filter((producto) => producto.categoria === "periféricos");
console.log("\nSolo periféricos:", perifericos.map((p) => p.nombre));

// ----------------------------------------------------------------------------
// 4. find — el PRIMER elemento que cumple una condición (o undefined)
// ----------------------------------------------------------------------------
titulo("4. find — el primer elemento que cumple una condición");

// A diferencia de filter (que devuelve un array con TODOS los que cumplen),
// find() devuelve un único elemento: el primero que encuentra. Si ninguno
// cumple la condición, devuelve undefined — por eso siempre hay que
// comprobar el resultado antes de usarlo.
const primerSinStock = productos.find((producto) => producto.stock === 0);
console.log("Primer producto sin stock:", primerSinStock?.nombre);

const inexistente = productos.find((producto) => producto.categoria === "libros");
console.log("Buscar una categoría que no existe:", inexistente); // undefined

// ----------------------------------------------------------------------------
// 5. some / every — preguntas de sí/no sobre TODO el array
// ----------------------------------------------------------------------------
titulo("5. some / every — preguntas de sí/no sobre todo el array");

// some() devuelve true en cuanto UN elemento cumple la condición (y para en
// cuanto lo encuentra, no sigue mirando el resto).
const hayAgotados = productos.some((producto) => producto.stock === 0);
console.log("¿Hay algún producto agotado?", hayAgotados);

// every() devuelve true solo si TODOS los elementos cumplen la condición
// (y para en cuanto encuentra uno que NO la cumple).
const todosDisponibles = productos.every((producto) => producto.stock > 0);
console.log("¿Están todos disponibles?", todosDisponibles);

const todosTienenPrecio = productos.every((producto) => producto.precio > 0);
console.log("¿Todos tienen un precio mayor que 0?", todosTienenPrecio);

// ----------------------------------------------------------------------------
// 6. reduce — el más flexible: convierte el array en UN SOLO valor
// ----------------------------------------------------------------------------
titulo("6. reduce — acumular el array en un solo valor (suma, conteo, objeto...)");

// reduce() recibe dos cosas: una función "acumuladora" (que recibe el
// acumulador hasta ahora y el elemento actual, y devuelve el nuevo
// acumulador) y un valor inicial para el acumulador. Es el más general de
// todos: map, filter, forEach, some y every se podrían escribir con reduce,
// pero casi nunca conviene hacerlo así — son más legibles con su propio
// método.

// Ejemplo 1: sumar precios.
const precioTotal = productos.reduce((acumulado, producto) => acumulado + producto.precio, 0);
console.log("Precio total del catálogo:", precioTotal.toFixed(2), "€");

// Ejemplo 2: construir un objeto que cuenta cuántos productos hay por
// categoría — aquí el acumulador no es un número, es un objeto que vamos
// rellenando en cada paso.
const porCategoria = productos.reduce((acumulado, producto) => {
  acumulado[producto.categoria] = (acumulado[producto.categoria] ?? 0) + 1;
  return acumulado;
}, {});
console.log("Productos por categoría:", porCategoria);

// ----------------------------------------------------------------------------
// 7. sort — ordenar... SIN mutar el array original
// ----------------------------------------------------------------------------
titulo("7. sort — ordenar un array sin mutar el original");

// ¡Cuidado! El Array.prototype.sort() de JavaScript ORDENA EL ARRAY
// ORIGINAL "in place" (lo muta) y además lo devuelve — a diferencia de
// todos los métodos anteriores. Para evitar esa mutación (que suele causar
// bugs difíciles de encontrar, sobre todo con el estado de React), se copia
// el array primero con el spread operator [...array] antes de ordenar la
// copia.
const porPrecioAscendente = [...productos].sort((a, b) => a.precio - b.precio);
console.log("Ordenados por precio (de menor a mayor):");
console.log(porPrecioAscendente.map((p) => `${p.nombre}: ${p.precio} €`));

console.log("\n¿Sigue el original en su orden de partida?", productos[0].nombre === "Teclado mecánico");

// ----------------------------------------------------------------------------
// 8. Encadenar métodos — la razón por la que esto es tan potente
// ----------------------------------------------------------------------------
titulo("8. Encadenar filter + map + reduce en una sola expresión");

// Como cada método devuelve un array nuevo (excepto reduce, some, every y
// find, que devuelven un valor), se pueden encadenar uno detrás de otro: el
// resultado de uno es la entrada del siguiente. Este patrón — filtrar,
// luego transformar, luego acumular — es uno de los más comunes en código
// real.
const totalPerifericosConStock = productos
  .filter((producto) => producto.categoria === "periféricos" && producto.stock > 0)
  .map((producto) => producto.precio)
  .reduce((acumulado, precio) => acumulado + precio, 0);

console.log(
  "Precio total de periféricos CON stock (filter + map + reduce):",
  totalPerifericosConStock.toFixed(2),
  "€"
);

console.log("\nFin de la demo. Repasa ejercicios.js para practicar cada uno de estos métodos.\n");
