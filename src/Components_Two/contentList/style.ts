import styled from "styled-components";
import theme from "../../styles/theme";

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
      background-color: ${theme.colors.tranparent30};
      width: calc(100% - 350px);
      height: auto;


      .block{
        width: 100%;
        height: 100svh;
        border-bottom: 1px solid white;
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
