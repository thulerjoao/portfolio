import styled, { css } from "styled-components";

export const AbouMeComponent = styled.header`
  ${({ theme }) => css`
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 80%;
    color: white;

    section {
      .firstBlock {
        display: flex;
        justify-content: center;
        margin-top: 5rem;

        img {
          width: 27vh;
          border-radius: 10px;
          border: 2px solid white;
          margin-right: 3rem;
          box-shadow: 0px 0px 25px 7px rgba(105, 59, 147, 1);
        }

        div {
          display: flex;
          flex-direction: column;
          justify-content: center;

          h2 {
            font-size: 4.5vh;
            font-weight: 400;
          }

          p {
            font-size: 1.8vh;
          }
        }
      }
      .mainText {
        width: 100%;
        margin-top: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          width: 65%;
        }
      }
      footer {
        display: flex;
        width: 100%;

        div {
          border: 1px solid white;
          width: 100%;
          display: flex;

          a {
            width: 100%;
          }
        }
      }
    }
  `}
`;
