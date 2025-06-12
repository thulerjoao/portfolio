import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";

export const Button = styled.button`
  padding: 6px 24px;
  font-size: 14px;
  border-radius: 16px;
  border: none;
  background: ${theme.colors.cleanBc};
  border: 1px solid ${theme.colors.tranparent30};
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
     box-shadow: 0px 0px 5px 1px ${theme.colors.white};
  }
`;


export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.backgroundColor};
  position: relative;
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${theme.colors.backgroundColor};
  color: #fff;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;
