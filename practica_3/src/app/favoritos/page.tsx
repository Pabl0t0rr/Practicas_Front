"use client";

import { useListSong } from "@/context/MusicContent";
import { useRouter } from "next/navigation";

const FavoritePage = () => {
  const { songs } = useListSong();
  const router = useRouter();

  return (
    <div>
      <h1>Favoritos</h1>
      <button onClick={() => router.push("/")}>Ir a la principal</button>
      <p>Canciones favoritas</p>
      {songs.map((fav) => {
        return <p key={fav}>{fav}</p>;
      })}
    </div>
  );
};

export default FavoritePage;
