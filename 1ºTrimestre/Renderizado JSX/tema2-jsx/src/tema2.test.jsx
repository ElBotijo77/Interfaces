import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HolaJsx from "./HolaJsx.jsx";
import HolaCompilado from "./HolaCompilado.jsx";
import Perfil from "./Perfil.jsx";
import Seccion from "./Seccion.jsx";
import Boton from "./Boton.jsx";
import Valores from "./Valores.jsx";
import BotonAviso from "./BotonAviso.jsx";
import ListaCompra from "./ListaCompra.jsx";
import Inventario from "./Inventario.jsx";
import CabeceraSinWrapper from "./CabeceraSinWrapper.jsx";
import Glosario from "./Glosario.jsx";

const HELLO = "<p>Hello, <strong>JSX</strong></p>";

describe("Ejercicio 2.1 · Hello JSX y createElement", () => {
  test("HolaJsx renderiza un párrafo con texto en negrita", () => {
    const { container } = render(<HolaJsx />);
    expect(container.innerHTML).toBe(HELLO);
  });

  test("HolaCompilado (createElement) produce exactamente el mismo HTML", () => {
    const { container } = render(<HolaCompilado />);
    expect(container.innerHTML).toBe(HELLO);
  });
});

describe("Ejercicio 2.2 · Estructura semántica", () => {
  test("Perfil es un <section> con header, nav, main y footer en ese orden", () => {
    const { container } = render(<Perfil />);
    const section = container.firstChild;
    expect(section.tagName).toBe("SECTION");
    const tags = Array.from(section.children).map((el) => el.tagName);
    expect(tags).toEqual(["HEADER", "NAV", "MAIN", "FOOTER"]);
  });

  test("el header contiene un <h1>, el nav un enlace y el footer un <small>", () => {
    const { container } = render(<Perfil />);
    expect(container.querySelector("header > h1")).toBeInTheDocument();
    expect(container.querySelector("nav > a[href]")).toBeInTheDocument();
    expect(container.querySelector("main > p")).toBeInTheDocument();
    expect(container.querySelector("footer > small")).toBeInTheDocument();
  });
});

describe("Ejercicio 2.3 · Componentes y children", () => {
  test("Seccion pinta el título y los hijos que recibe", () => {
    const { container } = render(
      <Seccion titulo="Mi sección">
        <p>Contenido</p>
      </Seccion>
    );
    expect(container.querySelector("section > h2")).toHaveTextContent("Mi sección");
    expect(container.querySelector("section > p")).toHaveTextContent("Contenido");
  });

  test("Boton pinta su texto (children) dentro de un <button>", () => {
    render(<Boton>Aceptar</Boton>);
    expect(screen.getByRole("button", { name: "Aceptar" })).toBeInTheDocument();
  });

  test("los componentes se pueden anidar: Boton dentro de Seccion", () => {
    const { container } = render(
      <Seccion titulo="Anidado">
        <Boton>Ok</Boton>
      </Seccion>
    );
    expect(container.querySelector("section > button")).toHaveTextContent("Ok");
  });
});

describe("Ejercicio 2.4 · Expresiones JavaScript", () => {
  test("Valores: el botón se desactiva cuando enabled es false", () => {
    render(<Valores enabled={false} text="Guardar" placeholder="Nombre" size={20} />);
    expect(screen.getByRole("button", { name: "Guardar" })).toBeDisabled();
  });

  test("Valores: el botón está activo cuando enabled es true", () => {
    render(<Valores enabled text="Guardar" placeholder="Nombre" size={20} />);
    expect(screen.getByRole("button", { name: "Guardar" })).toBeEnabled();
  });

  test("Valores: el input usa placeholder y size recibidos", () => {
    render(<Valores enabled text="x" placeholder="Escribe aquí" size={30} />);
    const input = screen.getByPlaceholderText("Escribe aquí");
    expect(input).toHaveAttribute("size", "30");
  });

  test("BotonAviso llama a la función onAviso al pulsarlo", async () => {
    const onAviso = vi.fn();
    render(<BotonAviso onAviso={onAviso} />);
    await userEvent.click(screen.getByRole("button", { name: "Avisar" }));
    expect(onAviso).toHaveBeenCalledTimes(1);
  });

  test("ListaCompra crea un <li> por cada producto del array", () => {
    render(<ListaCompra productos={["Pan", "Leche", "Huevos"]} />);
    const items = screen.getAllByRole("listitem");
    expect(items.map((li) => li.textContent)).toEqual(["Pan", "Leche", "Huevos"]);
  });

  test("Inventario recorre un objeto: «clave: valor» en cada <li>", () => {
    render(<Inventario items={{ manzanas: 3, peras: 5 }} />);
    const items = screen.getAllByRole("listitem");
    expect(items.map((li) => li.textContent)).toEqual(["manzanas: 3", "peras: 5"]);
    expect(items[0].querySelector("strong")).toHaveTextContent("manzanas:");
  });

  test("las listas no lanzan avisos de «key» en la consola", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    render(<ListaCompra productos={["a", "b"]} />);
    render(<Inventario items={{ a: 1, b: 2 }} />);
    const avisosKey = spy.mock.calls.filter((c) => String(c[0]).includes("key"));
    spy.mockRestore();
    expect(avisosKey).toHaveLength(0);
  });
});

describe("Ejercicio 2.5 · Fragmentos", () => {
  test("CabeceraSinWrapper devuelve <h1> y <p> sin ningún <div> envolvente", () => {
    const { container } = render(<CabeceraSinWrapper />);
    const tags = Array.from(container.children).map((el) => el.tagName);
    expect(tags).toEqual(["H1", "P"]);
  });

  test("Glosario alterna <dt> y <dd> directamente dentro de <dl>", () => {
    const terminos = [
      { termino: "JSX", definicion: "Sintaxis" },
      { termino: "Fragment", definicion: "Agrupa sin nodo extra" },
    ];
    const { container } = render(<Glosario terminos={terminos} />);
    const dl = container.querySelector("dl");
    const tags = Array.from(dl.children).map((el) => el.tagName);
    expect(tags).toEqual(["DT", "DD", "DT", "DD"]);
    expect(dl.children[2]).toHaveTextContent("Fragment");
  });

  test("Glosario no lanza avisos de «key»", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    render(<Glosario terminos={[{ termino: "a", definicion: "b" }]} />);
    const avisosKey = spy.mock.calls.filter((c) => String(c[0]).includes("key"));
    spy.mockRestore();
    expect(avisosKey).toHaveLength(0);
  });
});
