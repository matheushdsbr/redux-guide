import styled from "styled-components";

export const FavoriteItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  p {
    color: #222222;
  }
`;

export const FavoriteItemImage = styled.div`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 250px;
  width: 170px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const FavoriteItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  flex: 1;

  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }

  p:nth-child(2) {
    font-weight: 500;
    margin-bottom: 10px;
  }

  button {
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(0,0,0, 0.7);
      background-blend-mode: color;
      cursor: pointer;
    }

    &:active {
      background-color: rgba(255,255,255, 0.1);
      background-blend-mode: color;
      cursor: pointer;
    }
  }
`;

export const RemoveButton = styled.div`
  margin-right: 20px;

  svg {
    color: #222222
  }

  &:hover {
    cursor: pointer;
  }
`;
