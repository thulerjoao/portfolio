import styled, { css } from "styled-components";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

export const AbouMeComponent = styled.header`
  ${({ theme }) => css`
    padding-bottom: 10vh;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    color: white;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 0px;
    }

    section {
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      .firstBlock {
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        margin-top: 7vh;

        img {
          width: 25vh;
          height: 25vh;
          border-radius: 10px;
          border: 2px solid white;
          margin-right: 3rem;
          box-shadow: 0px 0px 25px 7px rgba(105, 59, 147, 1);
        }

        div {
          display: flex;
          flex-direction: column;
          justify-content: center;

          h2 {
            font-size: 2.6em;
            font-weight: 400;
          }

          p {
            font-size: 2vh;
          }
        }
      }
      .mainText {
        width: 55vw;
        max-width: 70rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 7vh;

        p {
          width: 100%;
          font-size: 1.1em;
          font-weight: 300;
          text-align: justify;
        }
      }
      footer {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 7vh;

        a {
          margin: 0 4vh;
          padding: 0.6vh 0;
          border: 2px solid white;
          width: 25vh;
          max-width: 13rem;
          display: flex;
          align-items: center;
          cursor: pointer;
          border-radius: 4px;
          background-color: ${theme.colors.cleanBc};
          box-shadow: 3px 3px 5px ${theme.colors.cleanBc};
          color: white;
          text-decoration: none;

          div {
            width: 100%;
            margin-left: 1rem;
            font-size: 1.8vh;
          }
        }
        & :hover {
          transform: scale(1.01);
        }
      }
    }

    @media screen and (max-width: 1440px) {
      overflow-y: auto;

      section {
        padding-bottom: 8vh;

        .firstBlock {
          margin-top: 6vh;

          img {
            /* width: 14rem;
            height: 14rem; */
            margin-bottom: 4vh;
          }
        }
        .mainText {
          margin-top: 4vh;
        }
        footer {
          margin-top: 6vh;
        }
      }
    }

    @media screen and (max-width: 992px) {
      min-width: 100%;

      section {
        width: 80vw;

        .firstBlock {
          margin-top: 5vh;

          img {
            margin: 0;
            margin-bottom: 5vh;
            width: 14rem;
            height: 14rem;
          }

          div {
            max-width: 75%;
            text-align: center;

            h2 {
              font-size: 2em;
            }

            p {
              font-size: 1em;
            }
          }
        }
        .mainText {
          margin-top: 3vh;
          max-width: 85%;

          p {
            font-size: 1em;
          }
        }

        footer {
          margin-bottom: 10vh;

          a {
            margin: 2vh 4%;
            padding: 0.2rem 0;
            width: 30vw;

            div {
            }
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
      min-width: 100%;

      section {
        min-width: 90vw;

        .firstBlock {
          margin-top: 5vh;

          img {
            margin: 0;
            margin-bottom: 5vh;
            width: 12rem;
            height: 12rem;
          }

          div {
            max-width: 75%;
            text-align: center;

            h2 {
              font-size: 2em;
            }

            p {
              font-size: 1em;
            }
          }
        }
        .mainText {
          margin-top: 3vh;

          p {
            font-size: 1em;
          }
        }

        footer {

          a {
            margin: 2vh 4%;
            padding: 0.2rem 0;
            width: 30vw;

            div {
            }
          }
        }
      }
    }

    @media screen and (max-width: 600px) {
      width: 100%;

      section {
        width: 95vw;

        .firstBlock {
          margin-top: 5vh;

          img {
            margin: 0;
            margin-bottom: 5vh;
            width: 12rem;
            height: 12rem;
          }

          div {
            max-width: 75%;
            text-align: center;

            h2 {
              font-size: 2em;
            }

            p {
              font-size: 1em;
            }
          }
        }
        .mainText {
          margin-top: 3vh;
          min-width: 88vw;

          p {
            font-size: 1em;
          }
        }
        footer {
          margin-bottom: 7vh;

          a {
            margin: 2vh 3%;
            padding: 0.2rem 0;
            width: 40vw;

            div {
            }
          }
        }
      }
    }
  `}
`;

export const BtnGit = styled(AiOutlineGithub)`
  width: 5vh;
  height: 5vh;
  color: #fff;
  margin: 0 0.6rem;
`;
export const BtnIn = styled(AiFillLinkedin)`
  width: 5vh;
  height: 5vh;
  color: #fff;
  margin: 0 0.6rem;
`;
