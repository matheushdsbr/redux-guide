import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      imageUrl
      name
      price
    }
  }
`;

export default GET_PRODUCTS;