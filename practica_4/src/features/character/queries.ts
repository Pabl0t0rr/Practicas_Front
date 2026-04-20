import { gql } from "@apollo/client";

export const getCharacterById = gql`
  query getCharacterById($characterId: ID!) {
    character(id: $characterId) {
      name
      species
      status
      image
      origin {
        id
        name
      }
    }
  }
`;
