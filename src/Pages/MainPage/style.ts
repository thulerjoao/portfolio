import styled, { css } from "styled-components";

export const MainPageComponent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundColor};
    width: 100vw;
    height: 100vh;
  `}
`;
