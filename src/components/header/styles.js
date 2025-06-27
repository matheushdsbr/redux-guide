import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #222222;
  display: flex;
  justify-content: space-between;
  color: #eee;
  padding: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  div {
    font-weight: 500;

    &:hover {
      cursor: pointer;
    }
  }
`;
