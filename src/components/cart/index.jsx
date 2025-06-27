// Styles
import { useSelector } from "react-redux";
import CartItem from "../cart-item";
import Modal from "../modal";

const Cart = () => {
  const products = useSelector((state) => state.cartReducer.products);

  return (
    <Modal modalType="cart" title="Seu carrinho">
      {products.length > 0 ? (
        products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))
      ) : (
        <p>Você ainda não tem produtos no carrinho.</p>
      )}
    </Modal>
  );
};

export default Cart;
