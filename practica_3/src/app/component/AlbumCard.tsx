"use client";

import { Album } from "@/types";
import { useRouter } from "next/navigation";
import { useListSong } from "@/context/MusicContent";
import { useEffect, useState } from "react";
import { getAlbumById } from "@/lib/api/songs";

import "./AlbumCard.css";

type Props = {
  albumId: string;
};

const AlbumCard = ({ albumId }: Props) => {
  const router = useRouter();

  const [album, setAlbum] = useState<Album | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { songs, addToList, deleteFromList } = useListSong();

  const isFav = songs.includes(albumId);

  useEffect(() => {
    if (!albumId) return;

    setLoading(true);

    getAlbumById(albumId)
      .then((res) => {
        setAlbum(res);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [albumId]);

  return (
    <div className="albumCardContainer">
      <div className="albumCardInfo">
        <img src={album?.artworkUrl100} />
        <p>Album: {album?.collectionName}</p>
        <p>Artist: {album?.artistName}</p>

        <button
          onClick={() => {
            router.push("/albums/" + album?.collectionId);
          }}
        >
          Ver detalles
        </button>

        <button
          onClick={() =>
            isFav
              ? deleteFromList(album?.collectionId.toString() || "")
              : addToList(album?.collectionId.toString() || "")
          }
        >
          {isFav ? "Eliminar de fav" : "Añadir a fav"}
        </button>
      </div>

      {!album && loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default AlbumCard;
