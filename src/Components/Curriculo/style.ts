import styled, { css } from "styled-components";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

export const CurriculoComponent = styled.header`
  ${({ theme }) => css`
    position: absolute;
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: white;
    /* background-color: #693b9350; */

    section {
      width: 80%;
      height: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;

      div {
        width: auto;
        margin-top: 7%;
        background-color: #693b9350;
        box-shadow: 0px 0px 25px 7px rgba(105, 59, 147, 1);
        border: 1px solid white;
        border-radius: 15px;
        padding: 5vh;

        h2 {
          width: 100%;
          margin-bottom: 3vh;
          font-weight: 500;
        }

        h4 {
          margin-top: 5vh;
          margin-bottom: 0.5vh;
          margin-left: 5%;
          font-weight: 400;
        }

        p {
          text-align: justify;
          margin-left: 10%;
          margin-bottom: 0.5vh;
        }
      }
    }
  `}
`;
