import React from "react";

// Styles
import * as Styles from "./styles";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const FavoriteButton = ({ product, ...rest }) => {

  const favoriteProducts = useSelector((state) => state.favoriteReducer.favoriteProducts);

  const isFavorite = favoriteProducts.find((item) => item.id === product.id);

  return (
    <Styles.Container {...rest}>
      {isFavorite ? <BsHeartFill color="red" size={20}/> : <BsHeart size={20} />}
    </Styles.Container>
  );
};

export default FavoriteButton;
