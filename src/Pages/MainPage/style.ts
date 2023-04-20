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
    overflow-x: hidden;
    display: flex;
    justify-content: center;

    .mainSection {
      height: 100%;
      width: 65%;
      max-width: 78rem;
      margin: ;
    }
  `}
`;

export const BlowUp = styled.div`
  ${({ theme }) => css`
    section {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      min-width: 100vw;
      background-color: ${theme.colors.backgroundColor};
      z-index: 99;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      user-select: none;

      div {
        transition: 2s ease-in-out;
      }

      .bomb {
        height: 500rem;
        width: 500rem;
        max-width: 100%;
        max-height: 100vh;
        background-color: white;
        z-index: 100;
        animation: blowUp 2s 1;
        animation-fill-mode: forwards;
        position: fixed;
      }

      img {
        height: 50vh;
        width: 50vh;
        border-radius: 50%;
        cursor: pointer;
        animation: pulse 3s infinite;
      }

      .finished {
        transform: scale(0);
      }
      .blow {
        animation: blowUp 2s 1;
      }

      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.07);
        }
        100% {
          transform: scale(1);
        }
      }

      @keyframes blowUp {
        0% {
          transform: scale(0);
        }
        /* 99% {
          transform: scale(30);
        } */
        100% {
          transform: scale(30);
        }
      }
    }

    .done{
      display: none;
    }
  `}
`;
