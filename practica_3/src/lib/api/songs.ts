import { api } from "./api";
import { AlbumResponse } from "@/types/song";

export const getAlbumByArtistName = async (name: string) => {
  const response = await api.get<AlbumResponse>(
    "search?term=" + name + "&entity=album&limit=20",
  );
  return response.data.results;
};

export const getAlbumById = async (id: string) => {
  const response = await api.get<AlbumResponse>(`lookup?id=${id}`);
  return response.data.results[0];
};
