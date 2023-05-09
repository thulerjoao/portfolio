import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    padding: 0 10%;
    max-height: 10vh;
    min-height: 10vh;
    color: white;
    display: flex;
    font-size: 1.1em;
    justify-content: space-between;
    user-select: none;
    align-items: end;
    border-bottom: 2px solid ${theme.colors.cleanBc};
    margin-bottom: 0.1rem;
    position: relative;

    .idiom{
      z-index: 10;
      position: absolute;
      right: 1vh;
      bottom: -4vh;
      display: flex;
      user-select: default;


      img{
        width: 4vh;
        height: 3vh;
        margin-left: 1vh;
        cursor: pointer;

      }
    }

    div {
      width: 22%;
      height: 2rem;
      border-radius: 2px 2px 0 0;
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
        font-size: 0.9em;
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

    @media screen and (max-width: 768px) {
      max-height: 5vh;
      min-height: 5vh;
      max-height: 10vh;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      font-size: 1em;

      div {
        /* width: 100%; */
        height: 2.5rem;
        width: 24vw;

        a {
          /* display: none; */
          width: 100%;
        }

        .active {
          display: flex;
        }
      }
    }

    @media screen and (max-width: 600px) {
      max-height: 5vh;
      min-height: 5vh;
      max-height: 10vh;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      font-size: 1em;

      div {
        /* width: 100%; */
        height: 2.5rem;
        width: 24vw;

        a {
          /* display: none; */
          width: 100%;
        }

        .active {
          display: flex;
        }
      }
    }
  `}
`;
