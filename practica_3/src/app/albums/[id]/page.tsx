"use client";

import { getAlbumById } from "@/lib/api/songs";
import { Album } from "@/types";
import { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useListSong } from "@/context/MusicContent";

const getId = () => {
  const { id } = useParams();

  const { addToList } = useListSong();

  const router = useRouter();

  const [album, setAlbum] = useState<Album | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAlbumById(Number(id))
      .then((res: any) => {
        setAlbum(res.results[0]);
      })
      .catch((err: AxiosError) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="mainContainer">
      {!loading && !error && album && (
        <>
          <button onClick={() => router.push("/")}>
            Volver pagina principal
          </button>
          <button
            onClick={() => {
              if (album) {
                addToList(album.collectionName);
              }
            }}
          >
            Añadir a favoritos
          </button>
        </>
      )}

      {!album && loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default getId;
