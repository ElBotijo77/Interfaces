const {
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
} = require("./ejercicios");

const productos = [
  { id: 1, nombre: "Teclado mecánico", precio: 89.99, categoria: "periféricos", stock: 12 },
  { id: 2, nombre: "Ratón inalámbrico", precio: 29.5, categoria: "periféricos", stock: 0 },
  { id: 3, nombre: "Monitor 27\"", precio: 219.0, categoria: "pantallas", stock: 5 },
  { id: 4, nombre: "Webcam HD", precio: 45.0, categoria: "periféricos", stock: 8 },
  { id: 5, nombre: "Monitor 24\"", precio: 159.0, categoria: "pantallas", stock: 0 },
];

describe("nombresDeProductos (map)", () => {
  it("devuelve solo los nombres, en el mismo orden", () => {
    expect(nombresDeProductos(productos)).toEqual([
      "Teclado mecánico",
      "Ratón inalámbrico",
      "Monitor 27\"",
      "Webcam HD",
      "Monitor 24\"",
    ]);
  });
  it("con un array vacío devuelve un array vacío", () => {
    expect(nombresDeProductos([])).toEqual([]);
  });
});

describe("productosEnStock (filter)", () => {
  it("devuelve solo los productos con stock > 0", () => {
    const resultado = productosEnStock(productos);
    expect(resultado.map((p) => p.id)).toEqual([1, 3, 4]);
  });
  it("no modifica el array original", () => {
    productosEnStock(productos);
    expect(productos).toHaveLength(5);
  });
});

describe("precioTotal (reduce)", () => {
  it("suma los precios de todos los productos", () => {
    expect(precioTotal(productos)).toBeCloseTo(89.99 + 29.5 + 219.0 + 45.0 + 159.0);
  });
  it("con un array vacío devuelve 0", () => {
    expect(precioTotal([])).toBe(0);
  });
});

describe("productoMasCaro (reduce)", () => {
  it("devuelve el producto con el precio más alto", () => {
    expect(productoMasCaro(productos)?.nombre).toBe("Monitor 27\"");
  });
  it("con un array vacío devuelve null", () => {
    expect(productoMasCaro([])).toBeNull();
  });
});

describe("contarPorCategoria (reduce)", () => {
  it("cuenta cuántos productos hay por categoría", () => {
    expect(contarPorCategoria(productos)).toEqual({
      "periféricos": 3,
      "pantallas": 2,
    });
  });
});

describe("primerProductoCaro (find)", () => {
  it("devuelve el primer producto por encima del umbral", () => {
    expect(primerProductoCaro(productos, 100)?.nombre).toBe("Monitor 27\"");
  });
  it("devuelve undefined si ninguno supera el umbral", () => {
    expect(primerProductoCaro(productos, 1000)).toBeUndefined();
  });
});

describe("hayProductoSinStock (some)", () => {
  it("devuelve true si al menos uno tiene stock 0", () => {
    expect(hayProductoSinStock(productos)).toBe(true);
  });
  it("devuelve false si todos tienen stock", () => {
    const conStock = productos.filter((p) => p.stock > 0);
    expect(hayProductoSinStock(conStock)).toBe(false);
  });
});

describe("todosTienenStock (every)", () => {
  it("devuelve false si alguno está agotado", () => {
    expect(todosTienenStock(productos)).toBe(false);
  });
  it("devuelve true si todos tienen stock", () => {
    const conStock = productos.filter((p) => p.stock > 0);
    expect(todosTienenStock(conStock)).toBe(true);
  });
});

describe("ordenarPorPrecio (sort)", () => {
  it("devuelve los productos ordenados de menor a mayor precio", () => {
    const ordenado = ordenarPorPrecio(productos);
    expect(ordenado.map((p) => p.nombre)).toEqual([
      "Ratón inalámbrico",
      "Webcam HD",
      "Teclado mecánico",
      "Monitor 24\"",
      "Monitor 27\"",
    ]);
  });
  it("no modifica el array original", () => {
    const copiaIds = productos.map((p) => p.id);
    ordenarPorPrecio(productos);
    expect(productos.map((p) => p.id)).toEqual(copiaIds);
  });
});

describe("totalPorCategoria (filter + map + reduce)", () => {
  it("suma solo los precios de la categoría indicada", () => {
    expect(totalPorCategoria(productos, "periféricos")).toBeCloseTo(89.99 + 29.5 + 45.0);
  });
  it("devuelve 0 si la categoría no existe", () => {
    expect(totalPorCategoria(productos, "libros")).toBe(0);
  });
});
