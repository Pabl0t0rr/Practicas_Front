import { useState } from "react";
import type { Frase } from "../../types/frase";
import { api } from "../../api/api";
import "./style.css";
import "../../App.css"

export const Frases = () => {

    const [numero, setNumero] = useState<number>(0);
    const [frase, setFrase] = useState<Frase | null>(null);
    const valorMaxCont = 10;

    const conseguirFrase = async () => {
        let n = 0;
        while(n < valorMaxCont) {
        await new Promise(frases => {
            
            api.get("").then((e) => {
                setNumero(e.data.wisdom.split(".")[0])
                setFrase(e.data);
        })
        setTimeout(frases, 500)
        n++;
    })
    }
}


    return (
        <>
        <div className = "centerContainer" onClick={() => conseguirFrase()}>
        {frase ? <div className = "fraseAleatoria">
                <h1> Lesson #{numero}</h1>
                <h2>{frase.wisdom}</h2>
            </div> : 
            <>
            <div className = "clickSuperior">
                <h2>Click here first</h2>
                <h2>Click here first</h2>
            </div>
            <h1> Click Here</h1>
            <h2>To learn your lesson</h2>

            <div className = "clickInferior">
                <h2>Click here first</h2>
                <h2>Click here first</h2>
          </div>
            </>
            
            
            }
            </div>
        </>
    );
};
