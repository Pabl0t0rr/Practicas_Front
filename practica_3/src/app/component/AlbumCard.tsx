"use client";

import { Album } from "@/types";
import { useRouter } from "next/navigation";
import { useListSong } from "@/context/MusicContent";

import "./AlbumCard.css";

type Props = {
  song: Album;
};

const AlbumCard = ({ song }: Props) => {
  const router = useRouter();

  //Para el contexto
  const { addToList } = useListSong();

  return (
    <>
      <div className="albumCardContainer">
        <div className="albumCardInfo">
          <img src={song.artworkUrl100} />
          <p>Album: {song.collectionName}</p>
          <p>Artist: {song.artistName}</p>
          <button
            onClick={() => {
              router.push("/albums/" + song.collectionId);
            }}
          >
            Ver detalles
          </button>
          <button onClick={() => addToList(song.collectionId.toString())}>
            Añadir a fav
          </button>
        </div>
      </div>
    </>
  );
};

export default AlbumCard;
