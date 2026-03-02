'use client'

import { useParams,useRouter} from "next/navigation"
import { Country } from "@/types";
import { useEffect, useState } from "react";
import { getCountryByCode } from "@/lib/api/country";
import { AxiosError } from "axios";

const getCountryInfo = () => {

    const {nameCountry} = useParams();

    const router = useRouter();

    const [pais, setPais] = useState<Country | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!nameCountry) return;

        setLoading(true);
        setError(null);

        getCountryByCode(nameCountry as string).then ((c) => {
            setPais(c);
        }).catch((e : AxiosError) => {
            setError(e.message);
        }).finally(() => {
            setLoading(false);
        });

    },[nameCountry]);

    return (
         <div className="mainContainer">
            {!loading && !error && pais && (
                <>
                    <div className="">
                    
                    <p>Nombre oficial: {pais?.name.official}</p>
                    <p>Bandera: {pais?.flag}</p>
                    <p>Capital: {pais?.capital}</p>
                    <p>Region: {pais?.region}</p>
                    <p>Poblacion: {pais?.population}</p>
                    <p>Idiomas: {Object.values(pais?.languages || {})}</p>
                    
                    <button onClick={()=> router.back()}>Volver</button>
                    </div>
                </>
            )}   
                    
            {!pais && loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
        </div>
    )

}

export default getCountryInfo;