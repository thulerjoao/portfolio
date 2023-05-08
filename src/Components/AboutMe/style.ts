import styled, { css } from "styled-components";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

export const AbouMeComponent = styled.header`
  ${({ theme }) => css`
    /* border: 1px solid white; */
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    color: white;
    overflow-y: auto;
    

    section {
      
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      .firstBlock {
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        margin-top: 9vh;
        

        img {
          width: 16rem;
          height: 16rem;
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
        width: 60vw;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 7vh;

        p {
          width: 100%;
          font-size: 1.2em;
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
        margin-bottom: 22vh;

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
        max-width: 85%;
        
        p {
          font-size: 1em;
        }
      }

      footer {
        margin-bottom: 22vh;

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
        width: 98vw;
        
        p {
          font-size: 1em;
        }
      }
      footer {
        margin-bottom: 22vh;

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
