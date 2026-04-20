"use client";

import {
  GetCharacterByIdQuery,
  GetCharacterByIdQueryVariables,
} from "@/gql/graphql";
import { getCharacterById } from "@/features/character/queries";
import { useQuery } from "@apollo/client/react/compiled";
import { useParams, useRouter } from "next/navigation";

import "./page.css";

const getCharacterFromId = () => {
  const { id } = useParams();
  const router = useRouter();

  const { data, loading, error } = useQuery<
    GetCharacterByIdQuery,
    GetCharacterByIdQueryVariables
  >(getCharacterById, {
    variables: { characterId: id as string },
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
    <div className="characterPage">
      <h1>Character Info</h1>
      <div className="characterInfo">
        {data?.character?.image ? (
          <img src={data.character.image} />
        ) : (
          <div>No image available</div>
        )}
        <div className="characterInfoText">
          <p>Name: {data?.character?.name}</p>
          <p>Species: {data?.character?.species}</p>
          <p>Status: {data?.character?.status}</p>
        </div>
      </div>
      <button className="backButton" onClick={() => router.push("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default getCharacterFromId;
