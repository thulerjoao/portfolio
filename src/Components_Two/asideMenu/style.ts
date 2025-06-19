import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { TiThMenuOutline } from "react-icons/ti";
import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";

interface Props {
  isOpen: boolean;
}

export const AsideMenuContainer = styled.div<Props>`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;

  .globalContainer {
    width: 100%;
    max-width: 90rem;
    position: relative;
    height: 0;

    .menuIcon {
      display: none;
    }

    .menuContent {
      z-index: 1;
      height: 100vh;
      width: 350px;
      padding: 60px 30px;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .picAndName {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          width: 100%;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0px 0px 25px 7px rgba(105, 59, 147, 1);
          cursor: pointer;
        }

        .nameText {
          p {
            white-space: pre-line;
          }

          .name {
            font-size: 36px;
            margin-top: 36px;
            text-align: center;
            cursor: pointer;
          }

          .stack {
            font-size: 28px;
            color: ${theme.colors.gold};
            text-align: center;
            font-weight: 400;
            font-style: italic;
          }
        }
      }

      .buttonsList {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      .links {
      }
    }
  }

  .rightCoverArea {
    display: none;
  }

  @media (max-width: 1399px) {
    .globalContainer {
      .menuContent {
        width: 300px;
      }
    }
  }

  @media (max-width: 1199px) {
    .globalContainer {
      .menuIcon {
        display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
        position: absolute;
        width: 48px;
        height: 48px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }

      .rightCoverArea {
        z-index: 1;
        display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
        background-color: green;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
      }

      .menuContent {
        padding: 30px 20px;
        position: absolute;
        top: 0;
        left: -240px;
        animation: ${({ isOpen }) => (isOpen ? expand : shrink)} 0.5s forwards;
        background-color: ${theme.colors.backgroundColor};
        box-shadow: ${({ isOpen }) =>
          isOpen && `-90px 0px 100px 1px ${theme.colors.white}`};

        footer {
          margin-bottom: 42px;
        }
      }

      .rightCoverArea {
        display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
        z-index: 1;
        width: 100%;
        height: 100%;
        position: fixed;
        right: 0;
        top: 0;
        background-color: ${theme.colors.tranparent30};
      }
    }
  }

  @media (max-height: 900px) {
    .globalContainer {
      .menuContent {
        .picAndName {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;

          img {
            width: 80px;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0px 0px 25px 7px rgba(105, 59, 147, 1);
          }

          .nameText {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            padding-left: 32px;

            p {
              white-space: pre-line;
            }

            .name {
              font-size: 22px;
              margin-top: 0px;
              text-align: center;
            }

            .stack {
              font-size: 18px;
              color: ${theme.colors.gold};
              text-align: center;
              font-weight: 400;
              font-style: italic;
              text-align: start;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .globalContainer {
      .menuContent {
        width: 280px;
      }
    }
  }
`;

interface ButtonProp {
  active: boolean;
}

export const MenuButton = styled.button<ButtonProp>`
  background-color: ${theme.colors.fontColor};
  background-color: ${({ active }) => active && theme.colors.gold};
  color: ${theme.colors.fontColor2};
  height: 42px;
  border-radius: 19px;
  border: 0px;
  width: 100%;
  margin-bottom: 16px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.15s ease-in-out;
  font-style: italic;

  :hover {
    box-shadow: 0px 0px 5px 5px ${theme.colors.cleanBc};
    color: ${theme.colors.cleanBc};
  }
`;

export const BtnGit = styled(AiOutlineGithub)`
  width: 52px;
  height: 52px;
  color: ${theme.colors.fontColor};
  margin: 0 0.6rem;
  transition: 0.15s ease-in-out;
  :hover {
    color: ${theme.colors.gold};
  }
`;
export const BtnIn = styled(AiFillLinkedin)`
  width: 52px;
  height: 52px;
  color: ${theme.colors.fontColor};
  margin: 0 0.6rem;
  transition: 0.15s ease-in-out;
  :hover {
    color: ${theme.colors.gold};
  }
`;

export const MenuIcon = styled(TiThMenuOutline)`
  width: 48px;
  height: 48px;
  color: ${theme.colors.fontColor};
  margin: 0 0.6rem;
  transition: 0.15s ease-in-out;
`;

const expand = keyframes`
  from {
    left: -300px;
  }

  to {
    left: 0;
  }
`;

const shrink = keyframes`
  from {
    left: 0;
  }

  to {
    left:-300px;
  }
`;
