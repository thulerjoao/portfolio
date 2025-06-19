import styled, { css } from "styled-components";

interface Props {
  wasClicked: boolean;
}

export const BlowUp = styled.div<Props>`
  cursor: ${({ wasClicked }) => !wasClicked && "pointer"};

  ${({ theme }) => css`
    section {
      display: flex;
      position: absolute;
      top: 0rem;
      left: 0;
      height: 100vh;
      width: 100%;
      background-color: ${theme.colors.backgroundColor};
      z-index: 99;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      user-select: none;
      overflow-y: none;
      div {
        transition: 2s ease-in-out;
      }

      .bomb {
        height: 500rem;
        width: 500rem;
        max-width: 100%;
        background-color: white;
        z-index: 100;
        animation: blowUp 2s 1;
        animation-fill-mode: forwards;
        position: fixed;
      }

      .textArea {
        position: fixed;
        height: 100vh;
        min-width: 100vw;
        top: 10rem;
        left: -8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fadeIn 4s 1;

        p {
          color: white;
          font-size: 16px;
        }
      }

      .hiden {
        animation: fadeOut 0.5s 1;
        animation-fill-mode: forwards;
      }

      .done {
        display: none;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }

      img {
        height: 16.5rem;
        width: 16.5rem;
        border-radius: 50%;
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
        100% {
          transform: scale(50);
        }
      }

      @media screen and (max-width: 767px) {
        top: -20svh;
        height: calc(100vh + 20vh);

        .textArea {
          top: 5.5rem;
          left: -6rem;

          p {
            font-size: 0.8em;
          }
        }

        @keyframes blowUp {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(50);
          }
        }
      }
    }

    .done {
      display: none;
    }

    @media screen and (max-width: 600px) {
      img {
        height: 60vw;
        width: 60vw;
        z-index: 99;
      }
    }
  `}
`;
