import styled, { css } from "styled-components";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

export const PortfolioComponent = styled.div`
  ${({ theme }) => css`
    position: absolute;
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    left: -26.9%;
    height: calc(100vh - 18.5%);
    height: 100%;
    color: white;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 0px;
    }

    section {
      /* z-index: 99; */
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      .mainDiv {
        display: flex;
        flex-direction: column;
        align-items: start;
        max-width: 65rem;

        .title {
          display: flex;
          margin-top: 3vh;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;

          h3 {
            margin: 0;
            min-width: 11.5rem;
            font-size: 1.8em;
            margin-top: 1vh;
          }

          a {
            padding: 0;
            background-color: ${theme.colors.cleanBc};
            border: 1px solid white;
            border-radius: 15px;
            font-size: 0.9em;
            width: 7rem;
            height: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            cursor: pointer;
            text-decoration: none;
            margin-top: 1vh;

            :hover {
              transform: scale(1.02);
            }
          }
        }

        h2 {
          margin-top: 6.5vh;
          font-size: 2.6em;
          font-weight: 400;
          width: 100%;
          text-align: center;
        }

        h4 {
          font-weight: 300;
          margin: 3.4vh 0;
        }

        .figma {
          height: 50vh;
          width: 100%;
        }

        h3 {
          margin-bottom: 1.7vh;
          font-weight: 400;
        }

        .video {
          margin-top: 1.7vh;
          border: 1px solid white;
          height: 50vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: start;
          overflow-y: auto;

          video {
            width: 100%;
            height: 100%;
          }

          ::-webkit-scrollbar {
            width: 0px;
          }

          img {
            width: 100%;
          }
        }

        .front {
            overflow-y: hidden;
            height: auto;
          }

        p {
          width: 100%;
          display: flex;
          padding: 0.2rem 1rem;
          font-weight: 300;
        }
      }

      .last {
        margin-top: 10vh;
        margin-bottom: 25vh;
      }
    }

    @media screen and (max-width: 992px) {
      padding: 0;
      height: 96vh;
      min-width: 100vw;
      left: 0;

      ::-webkit-scrollbar {
        width: 0px;
      }

      section {
        /* z-index: 99; */
        width: 90%;

        .mainDiv {
          h2 {
            font-size: 2em;
          }

          h4 {
            font-weight: 300;
            margin: 3.4vh 0;
          }

          .figma {
            height: 22rem;
            width: 100%;
          }

          h3 {
            margin-bottom: 1.7vh;
            font-weight: 400;
          }

          .video {
            height: 22rem;
          }

          .front {
            overflow-y: hidden;
            height: auto;
          }

          p {
          }
        }

        .last {
        }
      }
    }

    @media screen and (max-width: 768px) {
      padding: 0;
      height: 96vh;
      min-width: 100vw;
      left: 0;

      ::-webkit-scrollbar {
        width: 0px;
      }

      section {
        /* z-index: 99; */
        width: 95%;

        .mainDiv {
          h2 {
            font-size: 2em;
          }

          h4 {
            font-weight: 300;
            margin: 3.4vh 0;
          }

          .figma {
            height: 19rem;
            width: 100%;
          }

          h3 {
            margin-bottom: 1.7vh;
            font-weight: 400;
          }

          .video {
            height: 19rem;
          }

          .front {
            overflow-y: hidden;
            height: auto;
          }

          p {
          }
        }

        .last {
        }
      }
    }

    @media screen and (max-width: 600px) {
      padding: 0;
      height: 96vh;
      min-width: 100vw;
      left: 0;

      ::-webkit-scrollbar {
        width: 0px;
      }

      section {
        /* z-index: 99; */
        width: 95%;

        .mainDiv {
          h2 {
            font-size: 2em;
          }

          h4 {
            font-weight: 300;
            margin: 3.4vh 0;
          }

          .figma {
            height: 15rem;
            width: 100%;
          }

          h3 {
            margin-bottom: 1.7vh;
            font-weight: 400;
          }

          .video {
            height: 14rem;
          }

          .front {
            overflow-y: hidden;
            height: auto;
          }

          p {
          }
        }

        .last {
        }
      }
    }
  `}
`;
