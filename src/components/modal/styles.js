import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: all 0.3s ease;

  p {
    color: #222222;
  }
`;

export const ModalEscapeArea = styled.div`
  width: 100%;
`;

export const ModalContent = styled.div`
  height: 100%;
  min-width: 500px;
  z-index: 200;
  background-color: white;
  padding: 20px;
  overflow-y: scroll;

  @media (max-width: 768px) {
    min-width: 85%;
  }
`;
export const ModalTitle = styled.p`
  font-size: 1.325rem;
  font-weight: 600;
  margin-bottom: 15px;
`;
