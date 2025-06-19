import { MdOutlineCake } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import styled from "styled-components";
import theme from "../../../../styles/theme";

export const AboutMeContainer = styled.div`
  width: 100%;
  padding: 60px;
  padding-right: 30px;

  .aboutMe {
    font-size: 36px;
    font-weight: 500;
    color: ${theme.colors.fontColor};
    text-align: center;
    padding-right: 60px;
  }
  .myName {
    font-size: 36px;
    color: ${theme.colors.gold};
    font-weight: 600;
    margin: 45px 0px 15px 15px;
  }

  .locationBirthday {
    display: flex;
    align-items: center;
    margin-top: 16px;
    margin-left: 15px;

    p {
      margin-left: 8px;
      font-size: 22px;
    }
  }

  .mainText {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 45px;

    p {
      max-width: 48rem;
      width: 100%;
      font-size: 22px;
      font-weight: 300;
      text-align: justify;
    }
  }

  @media (max-width: 1199px){
    padding-right: 60px;

    .aboutMe {
        padding: 0;
    }
  }

  @media (max-width: 768px){
    padding: 60px 30px;

    .aboutMe {
        padding: 0;
    }
  }
`;

export const Cake = styled(MdOutlineCake)`
  height: 32px;
  width: 32px;
  color: ${theme.colors.gold};
`;
export const Location = styled(SlLocationPin)`
  height: 32px;
  width: 32px;
  color: ${theme.colors.gold};
`;
