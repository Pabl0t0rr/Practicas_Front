import { useEffect, useState } from "react";
import type { Frase } from "../../types/frase";
import { api } from "../../api/api";
import "./style.css";

export const Frases = (params: { pulsacion: boolean }) => {

    const [frase, setFrase] = useState<Frase | null>(null);
    const [contador, setContador] = useState(0);
    const valorMaxCont = 10;

    // Cada vez que cambie pulsacion → reinicia contador
useEffect(() => {
    setContador(0);
}, [params.pulsacion]);

    // Incrementar contador y setTimer
    useEffect(() => {
        if (contador >= valorMaxCont) return;

        const timer = setTimeout(() => {
            setContador((c) => c + 1);
        }, 500);

        return () => clearTimeout(timer);
    }, [contador, params.pulsacion]);

    // Pedr las frases
    useEffect(() => {
        if (contador > 0 && contador <= valorMaxCont) {
            api.get("").then((e) => setFrase(e.data));
        }
    }, [contador]);

    return (
        <>
        {frase ? <div className = "fraseAleatoria">
                {frase.wisdom}
            </div> : <div> Cargando frases...</div>}
        </>
    );
};
