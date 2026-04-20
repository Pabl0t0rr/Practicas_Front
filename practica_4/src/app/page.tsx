"use client";

import { getMultipleCharacters } from "@/features/characters/queries";
import {
  GetMultipleCharactersQuery,
  GetMultipleCharactersQueryVariables,
} from "@/gql/graphql";
import { useQuery } from "@apollo/client/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import "./page.css";

const Home = () => {
  const [page, setPage] = useState(1);
  const router = useRouter();

  const { data, loading, error } = useQuery<
    GetMultipleCharactersQuery,
    GetMultipleCharactersQueryVariables
  >(getMultipleCharacters, {
    variables: { page },
  });

  if (loading)
    return (
      <div className="loaderContainer">
        <div className="loader"></div>
        <div className="textLoader">Loading...</div>
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="titleHome">
      <h1>Characters List</h1>
      <div className="pagination">
        <button
          onClick={() => setPage((p) => p - 1)}
          disabled={!data?.characters?.info?.prev}
        >
          Previous Page
        </button>

        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={!data?.characters?.info?.next}
        >
          Next Page
        </button>
      </div>
      <div className="charactersGrid">
        {data?.characters?.results?.map((character) => (
          <div
            key={character?.id}
            onClick={() => router.push(`/character/${character?.id}`)}
            className="characterCard"
          >
            <div>
              {/* habia error si null/undefined*/}
              {character?.image ? (
                <img src={character.image} />
              ) : (
                <div>No image available</div>
              )}
              <p>
                Name: {character?.name} Status: {character?.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
