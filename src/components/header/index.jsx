// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/user/slice";
import { toggleCartModal, toggleFavoritesModal } from "../../redux/ui/slice";
import FavoriteList from "../favorite-list";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const products = useSelector((state) => state.cartReducer.products);
  const favoriteProducts = useSelector((state) => state.favoriteReducer.favoriteProducts);

  const handleLogin = () => {
    dispatch(login({
      name: "Matheus",
      email: "matheushds.br@gmail.com"
    }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleOpenCart = () => dispatch(toggleCartModal());
  const handleOpenFavorites = () => dispatch(toggleFavoritesModal());


  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>

      <div>
        <Styles.Buttons>
          {user ? (
            <div onClick={handleLogout}>{user.name} - Logout</div>) : (
            <div onClick={handleLogin}>Login</div>)
          }
          <div onClick={handleOpenFavorites}>Favoritos {favoriteProducts.length > 0 && `(${favoriteProducts.length})`}</div>
          <div onClick={handleOpenCart}>Carrinho {products.length > 0 && `(${products.length})`}</div>
        </Styles.Buttons>
      </div>

      <Cart />
      <FavoriteList />
    </Styles.Container>
  );
}

export default Header;
