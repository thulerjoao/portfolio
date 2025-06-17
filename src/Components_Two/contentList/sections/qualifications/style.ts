import styled from "styled-components";
import theme from "../../../../styles/theme";

export const QualificationsContainer = styled.div`
  width: 100%;
  min-height: 100svh;
  padding: 60px;
  padding-right: 0px;

  h2 {
    font-size: 36px;
    font-weight: 500;
    color: ${theme.colors.fontColor};
    text-align: center;
    padding-right: 60px;
  }

  h3 {
    color: ${theme.colors.fontColor};
    font-size: 28px;
    margin: 48px 0px 22px 0px;
    padding-left: 2rem;
    font-weight: 600;
  }

  .cardsList {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 16px;
  }

  @media (max-width: 1399px) {
    padding-right: 30px;

    h2 {
      padding-right: 0px;
    }

  }

  @media (max-width: 1199px) {
    padding: 0px 45px;

    h2 {
      margin-top: 32px;
    }
  }

  @media (max-width: 768px) {
    padding: 0px 32px;
    
  }

  @media (max-width: 576px) {
    padding: 0px 22px;
  }
`;
