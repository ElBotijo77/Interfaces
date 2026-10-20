import { useEffect, useState } from "react";

// Devuelve true en cuanto la página se ha desplazado hacia abajo
export function useScroll() {
  const [conScroll, setConScroll] = useState(false);

  useEffect(() => {
    function comprobarScroll() {
      setConScroll(window.scrollY > 0);
    }
    comprobarScroll();
    window.addEventListener("scroll", comprobarScroll, { passive: true });
    return () => window.removeEventListener("scroll", comprobarScroll);
  }, []);

  return conScroll;
}
