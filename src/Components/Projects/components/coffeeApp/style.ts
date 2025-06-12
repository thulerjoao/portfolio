import styled from "styled-components";
import theme from "../../../../styles/theme";

export const CoffeeAppContainer = styled.div`
  max-width: 65rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: auto;
  margin-bottom: 4rem;

  .title {
    display: flex;
    margin-top: 6vh;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    h3 {
      margin: 0;
      margin-right: 1vw;
      min-width: 11.5rem;
      font-size: 28px;
      font-weight: 500;
      margin-top: 1vh;
    }

    a {
      padding: 6px 0;
      background-color: ${theme.colors.cleanBc};
      border: 1px solid ${theme.colors.tranparent30};
      border-radius: 15px;
      font-size: 12px;
      width: 7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      cursor: pointer;
      text-decoration: none;
      margin-top: 1vh;

      :hover {
        box-shadow: 0px 0px 5px 1px ${theme.colors.white};
      }
    }
  }

  h4 {
    font-weight: 300;
    margin: 32px 0;
    text-align: justify;
  }

  .tecnologies {
    padding: 16px;
    padding-bottom: 0;
    min-width: 100%;

    p {
      margin: 4px 0;
    }
  }

  .mediaContainer {
    display: flex;
    justify-content: center;
    min-width: 100%;
    height: auto;

    .leftContainer {
      min-width: 50%;
      padding-right: 8px;

      .video {
        max-width: 100%;
        display: flex;
        justify-content: center;

        video {
          max-width: 100%;
          height: 35rem;
          border: 1px solid ${theme.colors.tranparent30};
        }
      }
    }

    .rightContainer {
      min-width: 50%;
      height: 100%;
      padding-left: 8px;

      .figma {
        border: 0px;
        width: 100%;
        height: 25rem;
        border: 1px solid ${theme.colors.tranparent30};
      }
    }
  }
  @media (min-width: 540px) and (max-width: 1025px) {
  }

  @media (max-width: 539px) {
    .title {
      flex-direction: column;
      align-items: flex-start;
    }

    .tecnologies {
      padding: 16px 0;
    }

    .mediaContainer {
      flex-direction: column;
      align-items: center;

      .leftContainer {
        min-width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0;

        .video {
          width: 100%;

          video {
            min-height: 60vh;
            max-height: 60vh;
          }
        }
      }

      .rightContainer {
        min-width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0;

        .figma {
          min-height: 50vh;
          max-height: 50vh;
        }
      }
    }
  }
`;
