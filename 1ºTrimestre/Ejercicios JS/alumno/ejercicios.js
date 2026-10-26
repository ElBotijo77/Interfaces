// Completa cada función usando el método de array indicado en su comentario.
// No uses un bucle for/while en ninguna de ellas: el objetivo es practicar
// map, filter, reduce, find, some, every y sort.
//
// Cada función recibe "productos", un array de objetos con esta forma (ver
// datos.js para el contenido completo):
//   { id: number, nombre: string, precio: number, categoria: string, stock: number }
//
// Antes de empezar, ejecuta "npm run demo" y lee demo.js: ahí se explica
// paso a paso cómo funciona cada uno de estos métodos con ejemplos ya
// resueltos.

// 1. map — devuelve un array con solo los nombres de los productos.
function nombresDeProductos(productos) {
  const arr = []
  productos.forEach(element => {
    arr.push(element.nombre)

  });
  return arr;
}

// 2. filter — devuelve solo los productos que tienen stock (stock > 0).
function productosEnStock(productos) {
  // TODO
  return [];
}

// 3. reduce — devuelve la suma de los precios de todos los productos.
function precioTotal(productos) {
  // TODO
  return 0;
}

// 4. reduce — devuelve el producto más caro del array. Si el array está
// vacío, devuelve null.
function productoMasCaro(productos) {
  // TODO
  return null;
}

// 5. reduce — devuelve un objeto { categoria: cantidad } con el número de
// productos que hay en cada categoría.
function contarPorCategoria(productos) {
  // TODO
  return {};
}

// 6. find — devuelve el primer producto cuyo precio sea mayor que "umbral".
// Si no hay ninguno, devuelve undefined.
function primerProductoCaro(productos, umbral) {
  // TODO
  return undefined;
}

// 7. some — devuelve true si hay al menos un producto sin stock (stock === 0).
function hayProductoSinStock(productos) {
  // TODO
  return false;
}

// 8. every — devuelve true solo si TODOS los productos tienen stock (stock > 0).
function todosTienenStock(productos) {
  // TODO
  return false;
}

// 9. sort — devuelve un array NUEVO ordenado por precio ascendente, SIN
// modificar el array "productos" recibido como argumento.
function ordenarPorPrecio(productos) {
  // TODO
  return [];
}

// 10. filter + map + reduce encadenados — devuelve la suma de los precios
// de los productos de la categoría indicada (ignora los de otras categorías).
function totalPorCategoria(productos, categoria) {
  // TODO
  return 0;
}

module.exports = {
  nombresDeProductos,
  productosEnStock,
  precioTotal,
  productoMasCaro,
  contarPorCategoria,
  primerProductoCaro,
  hayProductoSinStock,
  todosTienenStock,
  ordenarPorPrecio,
  totalPorCategoria,
};
