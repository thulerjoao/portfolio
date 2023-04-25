import styled, { css } from "styled-components";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

export const ContactComponent = styled.header`
  ${({ theme }) => css`
    position: absolute;
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #693b9350;
    
    color: white;

    section {
        
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        

      
    }
  `}
`;
