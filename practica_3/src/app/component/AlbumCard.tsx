"use client";

import { Album } from "@/types";
import { useRouter } from "next/navigation";

type Props = {
  song: Album;
};

const AlbumCard = ({ song }: Props) => {
  const router = useRouter();

  return (
    <>
      <div className="songBox">
        <button
          onClick={() => {
            router.push("/albums/" + song.collectionId);
          }}
        >
          <div className="">
            <img src={song.artworkUrl100} alt={song.collectionName} />
            <p>
              {song.collectionName} {song.artistName}
            </p>
          </div>
        </button>
      </div>
    </>
  );
};

export default AlbumCard;
