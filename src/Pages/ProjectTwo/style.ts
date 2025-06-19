import styled from "styled-components";
import theme from "../../styles/theme";

interface Props {
  start: boolean;
}

export const ProjectTwoContainer = styled.div<Props>`
  ${({ start }) => !start && "overflow: hidden"};
  /* background-color: ${theme.colors.backgroundColor}; */
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: ${theme.colors.fontColor};
`;
