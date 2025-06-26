import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 8px;
  transition: all 0.3s ease;
  margin: 0 0 4px 4px;

  &:hover {
    background-color: rgba(255,255,255, 0.4);
    background-blend-mode: color;
    cursor: pointer;
  }
`;