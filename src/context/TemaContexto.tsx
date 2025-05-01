import { createContext, useContext, useEffect, useState } from "react";

type Tema = "claro" | "oscuro";

interface ProveedorTema {
  tema: Tema;
  cambiarTema: () => void;
}

const TemaContexto = createContext<ProveedorTema | undefined>(undefined);

export const ProveedorTemaContexto = ({ children }: { children: React.ReactNode }) => {
  const [tema, setTema] = useState<Tema>(() => {
    return (localStorage.getItem("tema") as Tema) || "claro";
  });

  useEffect(() => {
    document.documentElement.className = tema;
    localStorage.setItem("tema", tema);
  }, [tema]);

  const cambiarTema = () => {
    setTema((previo) => (previo === "claro" ? "oscuro" : "claro"));
  };

  return (
    <TemaContexto.Provider value={{ tema, cambiarTema }}>
      {children}
    </TemaContexto.Provider>
  );
};

export const usarTema = (): ProveedorTema => {
  const contexto = useContext(TemaContexto);
  if (!contexto) throw new Error("Estas usando mal el Proveedor");
  return contexto;
};
