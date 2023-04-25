import styled, {
  StyledComponentProps,
  ThemedStyledProps,
  css,
} from "styled-components";

export const MainPageComponent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundColor};
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    overflow-x: hidden;
    display: flex;
    justify-content: center;

    .mainSection {
      /* height: 100%; */
      width: 65%;
      max-width: 78rem;
      

      .mainCards{
        position: relative;
        width: 100%;
        height: 80%;
        /* border: 1px solid white */

      }
    }
  `}
`;
