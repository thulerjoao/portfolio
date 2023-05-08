import styled, { css } from "styled-components";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";

export const ContactComponent = styled.header`
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
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 4rem;
      margin-top: 15%;
      background-color: #693b9320;
      box-shadow: 0px 0px 15px 3px rgba(105, 59, 147, 1);
      border: 1px solid white;
      border-radius: 8px;

      h3 {
        margin-bottom: 2rem;
        font-weight: 400;
      }

      .divOut {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        margin-left: 10%;
        margin-top: 1rem;

        .divIn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 90%;
        }
      }
    }

    @media screen and (max-width: 992px) {
      section {
        width: 40vw;
        padding: 2rem 0;
        align-items: center;
        margin-top: 10%;

        h3 {
          font-size: 1.1em;
        }

        p {
          font-size: 1em;
        }

        .divOut {
          .divIn {
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
      section {
        width: 60vw;
        padding: 2rem 0;
        align-items: center;
        margin-top: 10%;

        h3 {
          font-size: 1.1em;
        }

        p {
          font-size: 1em;
        }

        .divOut {
          .divIn {
          }
        }
      }
    }

    @media screen and (max-width: 600px) {
      section {
        width: 90vw;
        padding: 2rem 0;
        align-items: center;
        margin-top: 30%;

        h3 {
          font-size: 1.1em;
        }

        p {
          font-size: 1em;
        }

        .divOut {
          .divIn {
          }
        }
      }
    }
  `}
`;

export const LgEmail = styled(HiOutlineMail)`
  min-width: 1.5rem;
  min-height: 1.5rem;
  color: gold;
  margin: 0 0.6rem;
`;

export const LgTel = styled(AiOutlineWhatsApp)`
  width: 1.5rem;
  height: 1.5rem;
  color: limegreen;
  margin: 0 0.6rem;
`;
