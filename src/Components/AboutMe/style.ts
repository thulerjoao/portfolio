import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import styled, { css } from "styled-components";

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
            font-size: 32px;
            font-weight: 400;
          }

          p {
            font-size: 16px;
          }
        }
      }
      .mainText {
        width: 100%;
        max-width: 48rem;
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
        margin-top: 4rem;

        a {
          margin: 0 5%;
          padding: 4px 0;
          border: 2px solid white;
          width: 50%;
          max-width: 13rem;
          display: flex;
          align-items: center;
          cursor: pointer;
          border-radius: 4px;
          background-color: ${theme.colors.cleanBc};

          color: white;
          text-decoration: none;

          div {
            width: 100%;
            margin-left: 1rem;
            font-size: 16px;
          }
        }
        & :hover {
          box-shadow: 0px 0px 5px 3px ${theme.colors.cleanBc};
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
        width: 100%;
        padding-top: 2rem;

        .firstBlock {
          margin-top: 5vh;
          width: 100%;
          
          
          img {
            margin: 0;
            margin-bottom: 5vh;
            width: 12rem;
            height: 12rem;
          }
          
          div {
            min-width: 100%;
            text-align: center;

            h2 {
              font-size: 24px;
              width: 100%;
            }

            p {
              font-size: 16px;
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
