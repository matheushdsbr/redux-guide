// Components
import GET_PRODUCTS from "../../graphql/queries/products";
import ProductItem from "../product-item/index";

// Styles
import * as Styles from "./styles";

// GraphQL UHUUL 🚀
import { useQuery } from '@apollo/client';

const Products = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading....</p>
  if (error) return <p>Error: {error.message}</p>

  if (!data?.products?.length) {
    return <p>Produtos indisponíveis no momento. Por favor, tente novamente mais tarde....</p>;
  }

  const { products } = data;

  return (
    <Styles.Container>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Styles.Container>
  );
};

export default Products;
