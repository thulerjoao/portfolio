import styled, { css } from "styled-components";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

export const PortfolioComponent = styled.header`
  ${({ theme }) => css`
    position: absolute;
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: calc(100vh - 18.5%);
    color: white;
    overflow-y: scroll;
              ::-webkit-scrollbar {
                  width: 0px;
              }
              ::-webkit-scrollbar-track {
                  border-radius:0px;
              }
              ::-webkit-scrollbar-thumb {
                  border-radius:0px;
              }

    section {
      z-index: 99;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

    }
  `}
`;
