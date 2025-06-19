import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import styled from "styled-components";
import theme from "../../../../styles/theme";

export const WelcomeContainer = styled.div`
  height: 100svh;
  width: 100%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .picture {
    display: none;
  }

  .about {
    width: 100%;

    p {
      font-size: 52px;
      font-weight: 800;
    }

    .colorful {
      color: ${theme.colors.gold};
      margin-left: 10px;
    }
  }

  .mobileAbout {
    display: none;
  }

  .scrollDown {
    margin-top: 48px;
    height: 190px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    p {
      font-size: 28px;
      white-space: pre-line;
      font-weight: 400;
    }

    .animate__animated {
      width: 60px;
    }
  }

  @media (max-width: 1199px) {
    .picture {
      display: flex;
      height: 160px;
      width: 100%;
      margin-bottom: 5vh;

      img {
        width: 160px;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0px 0px 25px 7px rgba(105, 59, 147, 1);
      }
    }

    .about {
      p {
        font-size: 42px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 60px 22px;

    .picture {
      justify-content: center;
    }
  }

  @media (max-width: 576px) {
    .about {
      padding: 0;

      p {
        font-size: 28px;
      }
    }

    .desktopAbout {
      display: none;
    }
    .mobileAbout {
      display: flex;
    }

    .scrollDown {
      p {
        font-size: 24px;
      }
    }
  }
`;

export const DownArrow = styled(MdKeyboardDoubleArrowDown)`
  height: 60px;
  width: 60px;
  z-index: 0;
`;
