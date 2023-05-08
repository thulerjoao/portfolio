import styled, {
  StyledComponentProps,
  ThemedStyledProps,
  css,
} from "styled-components";

export const MainPageComponent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundColor};
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    overflow-y: hidden;

    .mainSection {
      height: 100vh;
      width: 65%;
      max-width: 78rem;

      .mainCards {
        position: relative;
        width: 100%;
        height: calc(90vh - 0.1rem);
      }
    }

    @media screen and (max-width: 600px) {

      .mainSection {
        width: 100%;

        .mainCards {
          width: 100%;
          

          div{
            width: 90%;
          }
        }
      }
    }
  `}
`;
