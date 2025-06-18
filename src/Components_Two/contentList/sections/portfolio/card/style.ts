import styled from "styled-components";
import theme from "../../../../../styles/theme";

export const CardContainer = styled.div`
  flex: 0 1 calc(50% - 16px);
  display: flex;
  flex-direction: column;

  .imageContainer {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    cursor: pointer;

    .imageLink {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -75%;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.4) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: skewX(-20deg);
      pointer-events: none;
    }

    &:hover::before {
      animation: shine 0.9s forwards;
    }

    @keyframes shine {
      0% {
        left: -75%;
      }
      100% {
        left: 125%;
      }
    }
  }

  .title {
    font-size: 26px;
    text-align: start;
    margin: 12px 0px;
    width: 100%;
    text-decoration: none;
    color: ${theme.colors.fontColor};
  }

  .linkName {
    text-decoration: none;
    color: ${theme.colors.fontColor};
    font-style: italic;
    font-size: 22px;
  }

  @media (max-width: 1399px) {
  }

  @media (max-width: 1199px) {
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 597px) {
    flex: 0 1 calc(100%);
  }
`;
