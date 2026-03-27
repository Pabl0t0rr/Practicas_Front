"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type MusicContextType = {
  songs: string[];
  addToList: (item: string) => void;
  deleteFromList: (item: string) => void;
};

const MusicContext = createContext<MusicContextType | null>(null);

export const MusicProvider = ({ children }: { children: ReactNode }) => {
  const [songs, setSongs] = useState<string[]>([]); //Tiene que llamarse igual que el valor del contexto

  const addToList = (item: string) => {
    if (songs.includes(item)) return; //Evita que se añadan canciones repetidas
    setSongs([...songs, item]);
  };

  const deleteFromList = (item: string) => {
    setSongs(songs.filter((i) => i !== item));
  };

  return (
    <MusicContext.Provider value={{ songs, addToList, deleteFromList }}>
      {children}
    </MusicContext.Provider>
  );
};

// Custom hook para usar el contexto
export const useListSong = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useListSong debe ser usado dentro de un MusicProvider");
  }
  return context;
};
