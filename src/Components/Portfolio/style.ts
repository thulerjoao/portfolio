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

        .figma{
            height: 40vh;
            width: 100%;

          }

        h3 {
          margin-bottom: 1.7vh;
          font-weight: 400;
        }

        .video {
          margin-top: 1.7vh;
          border: 1px solid white;
          height: 40vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
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

          .figma{
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

          .figma{
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

          p {
          }
        }

        .last {
        }
      }
    }
  `}
`;
