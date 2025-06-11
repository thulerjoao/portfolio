import styled, { css } from "styled-components";

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
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 93vh;
      }
    }

    @media (min-width: 540px) and (max-width: 1025px) {
      .mainSection {
        width: 100%;

        .mainCards {
          width: 100%;

          div {
            width: 90%;
          }
        }
      }
    }

    (max-width: 539px) {
      .mainSection {
        width: 100%;

        .mainCards {
          width: 100%;

          div {
            width: 90%;
          }
        }
      }
    }
  `}
`;
