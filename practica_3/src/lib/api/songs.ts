import { api } from "./api";
import { Album, AlbumResponse } from "@/types/song";

export const getAlbumByArtistName = async (name: string) => {
  const response = await api.get<AlbumResponse>(
    "search?term=" + name + "&entity=album&limit=20",
  );
  return response.data.results;
};

export const getAlbumById = async (id: number) => {
  const response = await api.get<Album>(`lookup?id=${id}&entity=album`);
  return response.data;
};
