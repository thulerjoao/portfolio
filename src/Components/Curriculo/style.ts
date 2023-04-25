import styled, { css } from "styled-components";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

export const CurriculoComponent = styled.header`
  ${({ theme }) => css`
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80%;
    color: white;

    section {
        
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        

      
    }
  `}
`;
