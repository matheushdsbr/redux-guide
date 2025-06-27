// src/components/modal/index.jsx (ou onde você preferir)
import React from 'react';
import * as Styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartModal, toggleFavoritesModal } from '../../redux/ui/slice';

const Modal = ({ title, children, modalType }) => {
  const dispatch = useDispatch();

  const isVisible = useSelector((state) => {
    if (modalType === 'cart') {
      return state.uiReducer.isCartModalOpen;
    }
    if (modalType === 'favorites') {
      return state.uiReducer.isFavoritesModalOpen;
    }

    return false;
  });

  const handleEscapeAreaClick = () => {
    if (modalType === 'cart') {
      dispatch(toggleCartModal());
    }
    if (modalType === 'favorites') {
      dispatch(toggleFavoritesModal());
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Styles.ModalContainer isVisible={isVisible}>
      <Styles.ModalEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.ModalContent>
        {title && <Styles.ModalTitle>{title}</Styles.ModalTitle>}
        {children}
      </Styles.ModalContent>
    </Styles.ModalContainer>
  );
};

export default Modal;