"use client";

import { useListSong } from "@/context/MusicContent";
import { useRouter } from "next/navigation";
import AlbumCard from "../component/AlbumCard";

import "./page.css";

const FavoritePage = () => {
  const { songs } = useListSong();

  const router = useRouter();

  return (
    <div className="favContainer">
      <h1>Favoritos</h1>
      <button onClick={() => router.push("/")}>Ir a la principal</button>
      <p>Álbumes favoritos</p>
      {songs.length === 0 && <p>No tienes favoritos aún</p>}
      {songs.map((fav) => {
        return <AlbumCard key={fav} albumId={fav} />;
      })}
    </div>
  );
};

export default FavoritePage;
