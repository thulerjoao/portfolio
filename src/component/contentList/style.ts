import styled from "styled-components";
import theme from "../../styles/theme";
import { LanguageType } from "../../types/languageType";

export const ContentListContainer = styled.div`
  width: 100%;
  height: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  section {
    width: 100%;
    max-width: 90rem;
    display: flex;
    justify-content: flex-end;

    .contentList {
      /* background-color: ${theme.colors.tranparent30}; */
      width: calc(100% - 350px);
      height: auto;

      section {
        display: flex;
        justify-content: center;
      }
    }
  }

  @media (max-width: 1399px) {
    section {
      .contentList {
        width: calc(100% - 280px);
      }
    }
  }

  @media (max-width: 1199px) {
    section {
      .contentList {
        width: 100%;
      }
    }
  }
`;

export const LanguageSelectorContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  padding: 5px;

  img {
    height: 32px;
    margin: 5px;
    cursor: pointer;
    padding-bottom: 5px;
    border-bottom: 2px solid transparent;
  }

  .eua {
    border-bottom: 2px solid ${theme.colors.gold};
  }

  .bra {
    border-bottom: 2px solid ${theme.colors.gold};
  }

  @media (max-width: 768px) {
    img {
      height: 28px;
      margin: 4px;
    }
  }
`;
