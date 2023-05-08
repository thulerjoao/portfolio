import styled, { css } from "styled-components";

export const BlowUp = styled.div`
  ${({ theme }) => css`
    section {
      display: flex;
      position: absolute;
      top: 0rem;
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
          font-size: 1.5vh;
        }
      }

      .hiden {
        animation: fadeOut 1s 1;
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
        100% {
          transform: scale(50);
        }
      }

      @media screen and (max-width: 767px) {
        top: -15vh;
        height: calc(100vh + 15vh) ;


        .textArea {
        position: fixed;
        height: 100vh;
        min-width: 100vw;
        top: 7rem;
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
            transform: scale(1500);
          }
        }
      }
    }

    .done {
      display: none;
    }
  `}
`;
