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
      margin-top: 10%;
      background-color: #693b9350;
      box-shadow: 0px 0px 25px 7px rgba(105, 59, 147, 1);
      border: 1px solid white;
      border-radius: 15px;

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
  `}
`;

export const LgEmail = styled(HiOutlineMail)`
  width: 1.7rem;
  height: 1.7rem;
  color: gold;
  margin: 0 0.6rem;
`;

export const LgTel = styled(AiOutlineWhatsApp)`
  width: 1.7rem;
  height: 1.7rem;
  color: limegreen;
  margin: 0 0.6rem;
`;
