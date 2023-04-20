import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    padding: 0 10%;
    margin-top: 3rem;
    height: 5%;
    color: white;
    display: flex;
    font-size: 1.1em;
    justify-content: space-between;
    user-select: none;
    align-items: center;

    div{
      width: 22%;
      height: 80%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      
      a {
        
        height: 0;
        width: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-shadow: 1px 1px 2px black;
        transition: box-shadow 0.5s ease-in-out;
        background-color: ${theme.colors.cleanBc};
      }
  
      /* a:hover{
        height: 1px;
      } */
    }
    
    .active {
      box-shadow: 0px 0px 7px 24px rgba(105, 59, 147, 1);
    }
  `}
`;
