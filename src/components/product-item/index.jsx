import { BsCartPlus } from "react-icons/bs";

// Components
import CustomButton from "../custom-button/index";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/slice";
import { toggleProductFavorite } from "../../redux/favorite/slice";

// Styles
import * as Styles from "./styles";
import FavoriteButton from "../favorite-button";

// Utilities

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  }

  const handleFavoriteProduct = () => {
    dispatch(toggleProductFavorite(product));
  }

  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <FavoriteButton onClick={handleFavoriteProduct} product={product} />
        <CustomButton onClick={handleAddToCart} startIcon={<BsCartPlus />}>
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
