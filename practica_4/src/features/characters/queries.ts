import { gql } from "@apollo/client";

export const getMultipleCharacters = gql`
  query getMultipleCharacters($page: Int) {
    characters(page: $page) {
      info {
        next
        prev
      }
      results {
        id
        name
        status
        image
      }
    }
  }
`;
