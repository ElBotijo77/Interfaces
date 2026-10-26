// Dataset compartido por demo.js y ejercicios.js — un catálogo de productos
// de una tienda, con los campos típicos que verás en cualquier ejercicio
// real: id, nombre, precio, categoría y stock disponible.
//
// Contenido de "productos" (para verlo de un vistazo sin tener que ejecutar
// nada todavía):
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
//
const productos = [
  { id: 1, nombre: "Teclado mecánico", precio: 89.99, categoria: "periféricos", stock: 12 },
  { id: 2, nombre: "Ratón inalámbrico", precio: 29.5, categoria: "periféricos", stock: 0 },
  { id: 3, nombre: "Monitor 27\"", precio: 219.0, categoria: "pantallas", stock: 5 },
  { id: 4, nombre: "Webcam HD", precio: 45.0, categoria: "periféricos", stock: 8 },
  { id: 5, nombre: "Monitor 24\"", precio: 159.0, categoria: "pantallas", stock: 0 },
  { id: 6, nombre: "Auriculares", precio: 65.0, categoria: "audio", stock: 20 },
  { id: 7, nombre: "Altavoces", precio: 99.99, categoria: "audio", stock: 3 },
];

module.exports = { productos };
