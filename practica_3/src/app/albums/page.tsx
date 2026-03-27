"use client";

import { Album } from "@/types/song";
import { useEffect, useState } from "react";
import AlbumCard from "../component/AlbumCard";
import { getAlbumByArtistName } from "@/lib/api/songs";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

import "./page.css";

const AlbumsPage = () => {
  const [palabra, setPalabra] = useState<string | null>(null);
  const [palabraFinal, setPalabraFinal] = useState<string | null>(null);

  const [songs, setSongs] = useState<Album[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  //Para buscar los datos
  useEffect(() => {
    //Inicializar estados
    setLoading(true);
    setError(null);

    //Para poner por defecto pablo si se busca con algo vacio
    if (!palabraFinal) {
      setPalabraFinal("pablo");
      return;
    }

    getAlbumByArtistName(palabraFinal)
      .then((s) => {
        setSongs(s);
      })
      .catch((err: AxiosError) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [palabraFinal]);

  return (
    <div className="mainContainerSearch">
      <h1>Buscador de Albums</h1>
      <br />
      <div className="searchContainer">
        <input
          onChange={(p) => setPalabra(p.target.value)}
          onKeyDown={(p) => {
            if (p.key === "Enter") {
              setPalabraFinal(palabra);
            }
          }}
        ></input>
        <button onClick={() => setPalabraFinal(palabra)}>Buscar</button>
        <button onClick={() => router.push("/")}>Pagina principal</button>
      </div>

      {loading && <h1> Loading...</h1>}
      {error && <h1> Error: {error}</h1>}

      <div className="albumMainContainer">
        {!loading &&
          !error &&
          songs.length > 0 &&
          songs.map((s) => (
            <AlbumCard
              key={s.collectionId}
              albumId={s.collectionId.toString()}
            ></AlbumCard>
          ))}
      </div>
    </div>
  );
};

export default AlbumsPage;
