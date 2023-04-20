import styled, { css } from "styled-components";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

export const AbouMeComponent = styled.header`
  ${({ theme }) => css`
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80%;
    color: white;

    section {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

      .firstBlock {
        display: flex;
        justify-content: center;
        margin-top: 5vh;

        img {
          width: 27vh;
          height: 27vh;
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
            font-size: 4.5vh;
            font-weight: 400;
          }

          p {
            font-size: 2vh;
          }
        }
      }
      .mainText {
        width: 90vh;
        
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          width: 100%;
          font-size: 2vh;
          font-weight: 300;
          text-align: justify;

        }
      }
      footer {
        
        display: flex;
        justify-content: center;
        width: 100%;

        a {
          margin: 0 4vh;
          padding: .6vh 0;
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
        & :hover{
            transform: scale(1.01);
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
