import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const shine = keyframes`
  0% {
    left: -65%;
  }
  100% {
    left: 165%;
  }
`;

const ShineOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 65%;
    height: 100%;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.7) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-20deg);
    animation: ${shine} 0.5s forwards;
  }
`;

interface Props {
  language: string;
}

const FullScreenShine = ({ language }: Props) => {
  const [visible, setVisible] = useState(false);
  const previousLang = useRef(language);

  useEffect(() => {
    if (language !== previousLang.current) {
      setVisible(true);
      previousLang.current = language;

      const timer = setTimeout(() => {
        setVisible(false);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [language]);

  if (!visible) return null;

  return <ShineOverlay />;
};

export default FullScreenShine;
