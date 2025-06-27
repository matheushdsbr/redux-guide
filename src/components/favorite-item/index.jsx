import { AiOutlineClose } from "react-icons/ai";

// Styles
import * as Styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromFavorite } from "../../redux/favorite/slice";
import { addToCart } from "../../redux/cart/slice";
import CustomButton from "../custom-button";
import { BsCartPlus, BsCartFill } from "react-icons/bs";
import { toggleCartModal, toggleFavoritesModal } from "../../redux/ui/slice";

const FavoriteItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartReducer.products);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  }

  const handleRemoveClick = () => {
    dispatch(removeProductFromFavorite(product));
  };

  const handleOpenCart = () => {
    dispatch(toggleFavoritesModal());
    dispatch(toggleCartModal());
  }

  const productAlreadyInCart = cartProducts.find(item => item.id === product.id);

  return (
    <Styles.FavoriteItemContainer>
      <Styles.FavoriteItemImage imageUrl={product.imageUrl} />

      <Styles.FavoriteItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        {productAlreadyInCart ?
          <CustomButton onClick={handleOpenCart} startIcon={<BsCartFill />}>
            Ir para carrinho
          </CustomButton> :
          <CustomButton onClick={handleAddToCart} startIcon={<BsCartPlus />}>
            Adicionar ao carrinho
          </CustomButton>
        }
      </Styles.FavoriteItemInfo>

      <Styles.RemoveButton
        onClick={handleRemoveClick}
        aria-label={`Remove ${product.name}`}
      >
        <AiOutlineClose size={25} />
      </Styles.RemoveButton>
    </Styles.FavoriteItemContainer>
  );
};

export default FavoriteItem;
