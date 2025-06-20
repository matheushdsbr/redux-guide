import { useState } from "react";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/user/slice";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const products = useSelector((state) => state.cartReducer.products);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLogin = () => {
    dispatch(login({
      name: "Matheus",
      email: "matheushds.br@gmail.com"
    }));
  };

  const handleLogout = () => {
    dispatch(login());
  };
  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {user ? (
          <div onClick={handleLogout}>{user.name} - Logout</div>) : (
          <div onClick={handleLogin}>Login</div>)
        }
        <div onClick={handleCartClick}>Carrinho {products.length > 0 && products.length}</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
