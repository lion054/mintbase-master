import { gql } from "@apollo/client";

const FETCH_NFT = gql`
    query  {
        store(limit: 10) {
        owner
        name
        iconBase64
        }
    }
  `;

export { FETCH_NFT };
