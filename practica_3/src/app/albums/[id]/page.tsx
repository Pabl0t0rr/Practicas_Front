"use client";

import { getAlbumById } from "@/lib/api/songs";
import { Album } from "@/types";
import { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import "./page.css";

const getId = () => {
  const { id } = useParams();

  const router = useRouter();

  const [album, setAlbum] = useState<Album | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAlbumById(id as string)
      .then((res: any) => {
        setAlbum(res);
      })
      .catch((err: AxiosError) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="mainContainerAlbumInfo">
      {!loading && !error && album && (
        <>
          <div className="albumInfo">
            <img src={album.artworkUrl100} />
            <div className="albumText">
              <p>Album: {album.collectionName}</p>
              <p>Artist: {album.artistName}</p>
              <p>Release Date: {album.releaseDate}</p>
              <button onClick={() => router.push("/")}>
                Volver pagina principal
              </button>
            </div>
          </div>
        </>
      )}

      {!album && loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default getId;
