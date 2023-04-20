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
    align-items: end;
    border-bottom: 2px solid ${theme.colors.cleanBc};
    margin-bottom: 1rem;

    div{
      width: 22%;
      height: 80%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      
      a {
        height: 0;
        width: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.9vh;
        font-weight: 300;
        text-shadow: 1px 1px 2px black;
        box-shadow: 0px 48px 40px 24px rgba(105, 59, 147, 0);
        transition: box-shadow 0.5s ease-in-out;
        
        
      }
  
      /* a:hover{
        height: 1px;
        background-color: ${theme.colors.cleanBc};
      } */
    }
    
    .active {
      box-shadow: 0px 2px 7px 24px rgba(105, 59, 147, 1);
    }
  `}
`;
