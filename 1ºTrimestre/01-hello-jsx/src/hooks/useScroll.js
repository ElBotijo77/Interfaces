import { useEffect, useState } from "react";

// Devuelve true cuando la página se ha desplazado más de `umbral` píxeles
// Configurable en px para la aparicion del boton
export function useScroll(umbral = 0) {
  const [conScroll, setConScroll] = useState(false);

  useEffect(() => {
    function comprobarScroll() {
      setConScroll(window.scrollY > umbral);
    }
    comprobarScroll();
    window.addEventListener("scroll", comprobarScroll, { passive: true });
    return () => window.removeEventListener("scroll", comprobarScroll);
  }, [umbral]);

  return conScroll;
}
