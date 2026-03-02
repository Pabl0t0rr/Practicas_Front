'use client'

import { getCountryNameBySearch } from "@/lib/api/country";
import { Country } from "@/types";
import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";



export const Home = () => {

  const [palabra, setPalabra] = useState<string | null> (null); 
  const [palabraFinal , setPalabraFinal] = useState<string | null> ("");

  const [pais, setPais] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect (() => {
    if(!palabraFinal) return;

    setLoading(true);
    setError(null);

    getCountryNameBySearch(palabraFinal).then ((p) => {
      setPais(p);
    }).catch((e : AxiosError) => {
      setError(e.message);
    }).finally(() => {
      setLoading(false);
    })

  }, [palabraFinal]);
   
  return (
    <div>
      <h1>Buscador de paises</h1>
      <div>
        <input onChange={(p) => setPalabra(p.target.value)}></input>
        <button onClick={() => setPalabraFinal(palabra)}>Buscar</button>
    
      </div>

     {loading && <h1> Loading...</h1>}
     {error && <h1> Error: {error}</h1>}

     <div>
      {!loading && !error && pais.length > 0 &&
      pais.map((p) =>{
        return (
          <div key={p.name.common}>
             <button onClick={() => {
                router.push("/country/"+ p.name.common)
              }}>Ver detalles</button>
            <h2>{p.name.common}</h2>
            
          </div>
        )
      })}
     </div>

    </div>


    
  )
}

export default Home;