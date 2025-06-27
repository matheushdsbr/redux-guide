import React from 'react'
import { useSelector } from 'react-redux'
import Modal from '../modal';
import FavoriteItem from '../favorite-item';

const FavoriteList = () => {
  const favoriteProducts = useSelector((state) => state.favoriteReducer.favoriteProducts);

  return (
    <Modal modalType="favorites" title="Lista de favoritos">
      {favoriteProducts.length > 0 ? (
        favoriteProducts.map((product) => (
          <FavoriteItem key={product.id} product={product} />
        ))
      ) : (
        <p>Você ainda não tem produtos favoritos.</p>
      )}
    </Modal>
  );
}

export default FavoriteList
