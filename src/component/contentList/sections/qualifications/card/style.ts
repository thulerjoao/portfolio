import styled from "styled-components";
import theme from "../../../../../styles/theme";

export const CardContainer = styled.div`
  background-color: ${theme.colors.tranparent30};
  padding: 30px;
  border: 1px solid white;
  border-radius: 16px;
  height: auto;
  width: auto;
  flex: 0 1 calc(33.33% - 24px);

  .title {
    margin-bottom: 10px;
    font-size: 22px;
    display: flex;
    height: 30px;

    svg {
      width: 30px;
      height: 30px;
    }

    p {
      margin-left: 8px;
    }
  }
  .description {
    font-size: 18px;
    color: ${theme.colors.gold};
  }

  @media (max-width: 1399px) {
    flex: 0 1 calc(50% - 8px);
  }

   @media (max-width: 1199px) {
    
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

   @media (max-width: 576px) {
    flex: 0 1 calc(100%);
  }
`;
