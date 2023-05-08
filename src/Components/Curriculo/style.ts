import styled, { css } from "styled-components";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

export const CurriculoComponent = styled.header`
  ${({ theme }) => css`
    position: absolute;
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 100%;
    color: white;
 

    section {
      width: 80%;
      margin-top: 10%;
      /* height: 90%; */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      div {
        width: auto;
        margin-top: 7%;
        background-color: #693b9320;
        box-shadow: 0px 0px 15px 3px rgba(105, 59, 147, 1);
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

    @media screen and (max-width: 600px) {

    section {
      width: 95%;



      div {
        border: 1px solid white;
        border-radius: 15px;
        padding: 1.5rem 1rem;

        h2 {
          font-size: 1.5em;
          width: 100%;
          margin-bottom: 3vh;
          font-weight: 400;
        }

        h4 {
          margin-top: 5vh;
          margin-bottom: 0.5vh;
          margin-left: 5%;
        }

        p {
          text-align: justify;
          font-size: 1em;
          margin-left: 10%;
          margin-bottom: 0.5vh;
        }
      }
    }
    }
  `}
`;
