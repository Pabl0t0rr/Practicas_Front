export type Album = {
  artistId: number;
  collectionId: number;
  artistName: string;
  collectionName: string;
  artworkUrl100: string;
  releaseDate: string;
};

export type AlbumResponse = {
  resultCount: number;
  results: Album[];
};
