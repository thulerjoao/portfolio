import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import styled from "styled-components";
import theme from "../../../../styles/theme";

export const ContactContainer = styled.div`
  width: 100%;
  min-height: 100svh;
  padding: 60px;
  padding-right: 90px;
  padding-left: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  section {
    display: flex;
    flex-direction: column;

    .contact {
      font-size: 36px;
      font-weight: 500;
      color: ${theme.colors.fontColor};
      text-align: center;
      padding-right: 60px;
      margin-bottom: 120px;
    }
    .enviroment {
      width: 300px;
      margin-top: 18px;
      cursor: pointer;
      
      a {
        display: flex;
        align-items: center;
        width: 100%;
        height: auto;
        text-decoration: none;
        color: ${theme.colors.fontColor};
        :hover {
        color: ${theme.colors.gold};
      }
      }

      p {
        font-size: 22px;
        font-style: italic;
      }
    }
    .goodBye {
      text-align: center;
      font-size: 22px;
      padding-right: 30px;
      color: ${theme.colors.gold};
      margin: 120px 0;
    }

    .lastName {
      text-align: center;
      padding-right: 30px;
      font-size: 22px;
      padding-right: 30px;
    }
  }

  img {
    width: 60%;
    max-width: 160px;
    margin-bottom: 32px;
    margin-right: 60px;
  }

  @media (max-width: 1199px) {
    padding-right: 60px;

    section {
      .contact {
        padding: 0;
      }
    }

     img {
      margin-right: 0;
     }
  }

  @media (max-width: 768px) {
    padding: 60px 30px;

    section {
      .contact {
        padding: 0;
      }
    }

    img {
      margin-bottom: 16px;
    }
  }
`;

export const BtnGit = styled(AiOutlineGithub)`
  width: 38px;
  height: 38px;
  margin: 0 0.6rem;
  transition: 0.15s ease-in-out;
`;
export const BtnIn = styled(AiFillLinkedin)`
  width: 38px;
  height: 38px;
  margin: 0 0.6rem;
  transition: 0.15s ease-in-out;
`;

export const Email = styled(MdOutlineAlternateEmail)`
  width: 38px;
  height: 38px;
  margin: 0 0.6rem;
  transition: 0.15s ease-in-out;
`;
